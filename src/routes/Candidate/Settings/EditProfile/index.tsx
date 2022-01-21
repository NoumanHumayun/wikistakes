import React, { useState } from "react";
import { ThemeContext } from "styled-components";
import { ViewCard } from "components/cards";
import {
  Row,
  Column,
  Avatar,
  NumberInput,
} from "components/structural";
import {
  H2,
  Label,
  Separator,
  ProfileHeading,
  AdditionalHeader,
  PrefixInput,
} from "components/typography";
import { UploadImage, UploadInput, ScheduleButton } from "./../styled.component";
import { Input, LinkInput } from "components/form";

import Button from "components/button/primary";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { ReactComponent as BinIcon } from "assets/svg/bin.svg";
import { ReactComponent as JapanIcon } from "assets/svg/japan.svg";
import {
  CANDIDATES_PROFILE_UPDATE,
  SOCIAL_LINKS_UPDATE,
  SOCIAL_LINKS_CREATE,
  CANDIDATES_PROFILE_CREATE,
  SOCIAL_LINK_DELETE
} from "../mutations";
import { FETCH_CANDIDATE_PROFILE } from "../queries";
import { keyBy, set, cloneDeep, AnyKindOfDictionary } from "lodash";
import GenericLoader from "components/GenericLoader";
import { UPLOAD_FILE } from "helpers/upload";
import Links from './links';

const CandidateData = {
  firstName: "",
  avatar: "",
  lastName: "",
  email: "",
  location: "",
  phone: "",
  id: "",
};

const EditProfile = () => {
  const { isDesktop } = React.useContext(ThemeContext);
  const inputRef = React.useRef<any>({});
  const id = localStorage.getItem("id") || "";

  const formRef = React.useRef<any>();

  const [state, setState] = useState({
    id: "",
    candidateId: "",
    firstName: "",
    avatar: "",
    lastName: "",
    email: "",
    location: "",
    phone: "",
    link: "",
  });

  const [linksToBeAdded, setLinksToBeAdded] = React.useState<any[]>([]);
  const [linksToBeRemoved, setLinksToBeRemoved] = React.useState<string[]>([]);
  const [sociallinkState, setsociallinkState] = React.useState([]);
  const [candidatestate, setCandidatestate] = React.useState(CandidateData);
  // @ts-ignore
  const forceUpdate: () => void = React.useState()[1].bind(null, {})

  const [imageUrl, setImageUrl] = React.useState<any>();
  const [image, setImage] = React.useState();

  const formData = React.useRef<any>({});
  const [socialLinkUpdate] = useMutation(SOCIAL_LINKS_UPDATE);
  const [socialLinkCreate] = useMutation(SOCIAL_LINKS_CREATE);
  const [candidateProfileUpdate] = useMutation(CANDIDATES_PROFILE_UPDATE);
  const [socialLinkDelete] = useMutation(SOCIAL_LINK_DELETE);

  const { data: { candidate } = {}, error, loading, refetch } = useQuery<any>(
    FETCH_CANDIDATE_PROFILE,
    {
      variables: { id },
      fetchPolicy: "no-cache",
    }
  );

  React.useEffect(() => {
    if (!loading && candidate) {
      const { socialLinks } = candidate ?? {};
      setsociallinkState(() => socialLinks);
    }
  }, [candidate, error, loading]);

  React.useEffect(() => {
    const { avatar } = candidate ?? {};
    if (!loading && candidate) {
      setState((state) => ({
        ...candidate,
      }));
      setImageUrl(avatar ? `http://apis.resumaps.com/file/${avatar}` : undefined);
    }
  }, [candidate, loading]);

  const _socialLinks: any = React.useMemo(() => {
    return keyBy(sociallinkState, 'title');
  }, [sociallinkState]);

  const onToBeRemoved = React.useCallback((event: React.MouseEvent<SVGElement>) => {
    const { id } = event.currentTarget;
    const _links = keyBy(sociallinkState, 'id');
    delete _links[id];
    setsociallinkState(Object.values(_links));
    linksToBeRemoved.push(id);
    setLinksToBeRemoved([...linksToBeRemoved]);
  }, [sociallinkState, linksToBeRemoved]);

  const onSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { currentTarget: { elements } } = event as any;

      let avatar = state.avatar || "";
      if (image) {
        avatar = await UPLOAD_FILE(image);
      }

      const { socialLinks, __typename, ...filteredState } = state as any;
      await candidateProfileUpdate({
        variables: {
          input: {
            id,
            avatar,
            firstName: state?.firstName || undefined,
            lastName: state?.lastName || undefined,
            email: state?.email || undefined,
            location: state?.location || undefined,
            phone: state?.phone || undefined,
          },
        },
      });

      const { linkedin, github } = elements;
      const _toBeAdded = [...linksToBeAdded];
      const _toBeUpdated = [];
      const _link: any = keyBy(sociallinkState, 'title');

      if (_link['LinkedIn']) {
        _toBeUpdated.push({ ..._link['LinkedIn'], link: linkedin.value });
      } else if (linkedin.value) {
        _toBeAdded.push({ title: 'LinkedIn', link: linkedin.value });
      }

      if (_link['GitHub']) {
        _toBeUpdated.push({ ..._link['GitHub'], link: github.value });
      } else if (github.value) {
        _toBeAdded.push({ title: 'GitHub', link: github.value });
      }

      await Promise.all((_toBeAdded ?? []).map(async (input: any) => {
        input.candidateId = id;
        if (input.title && input.link)
          return socialLinkCreate({
            variables: { input }
          });
      }));

      await Promise.all((_toBeUpdated ?? []).map(async (input: any) => {
        input.candidateId = id;
        delete input.__typename;
        return socialLinkUpdate({
          variables: { input },
        });
      }));

      await Promise.all(linksToBeRemoved.map(async (_id: string) => {
        return socialLinkDelete({ variables: { id: _id } });
      }));

      await refetch();
    },
    [state, sociallinkState, linksToBeAdded, image, socialLinkDelete, linksToBeRemoved, candidateProfileUpdate, socialLinkCreate, socialLinkUpdate, id, refetch]
  );

  const handleUploadClick = React.useCallback(() => {
    if (inputRef && inputRef.current) {
      inputRef.current.click();
    }
  }, [inputRef]);

  const handleUploadImage = React.useCallback((event: any) => {
    const fileUploaded = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      debugger
      setImageUrl(reader.result);
      setImage(fileUploaded);
    };

    if (fileUploaded) {
      reader.readAsDataURL(fileUploaded);
    }
  }, []);

  const onChange = React.useCallback(
    async (event: any) => {
      const value = event.target.value;
      await setState({
        ...state,
        [event.target.name]: value,
      });
    },
    [state]
  );

  const onRemove = React.useCallback(() => {
    if (image && state.avatar) {
      setImageUrl(
        state.avatar
          ? `https://apis.resumaps.com/file/${state.avatar}/50/50`
          : undefined
      );
      setImage(undefined);
      return;
    }

    setImage(undefined);
    setImageUrl(undefined);
    setState({ ...state, avatar: "" });
  }, [state, image]);

  const onLinkChange = (links: any[]) => setLinksToBeAdded(links);

  const EditClick = async () => { };

  if (loading)
    return (
      <div style={{ margin: "auto" }}>
        <GenericLoader invert />
      </div>
    );

  return (
    <ViewCard
      margin={isDesktop ? "64px auto" : "8px 0px 0px 0px"}
      style={isDesktop ? { maxWidth: "736px", width: "90%" } : {}}
    >
      <form ref={formRef} onSubmit={onSubmit}>
        <H2>Edit Profile</H2>
        <Separator margin="16px 0px 24px 0px" />
        <Row
          alignItems="center"
          style={{
            justifyContent: "flex-start",
            margin: "40px 0px",
          }}
          gap="0px"
        >
          <Avatar
            margin="0 8px 0 0"
            src={imageUrl}
          >
            {String(state.firstName).charAt(0)}
          </Avatar>
          <Row>
            <Column>
              <ProfileHeading>
                Profile Photo
                <BinIcon style={{ margin: "0px 0px -3px 6px", cursor: 'pointer' }} onClick={onRemove} />
              </ProfileHeading>
              <UploadImage onClick={handleUploadClick}>Change</UploadImage>
              <UploadInput
                type="file"
                ref={inputRef}
                name="file"
                accept="image/*"
                onChange={handleUploadImage}
              />
            </Column>
          </Row>
        </Row>
        <Row>
          <Column>
            <Label>First Name</Label>
            <Input
              placeholder="Enter first name"
              name="firstName"
              onChange={onChange}
              defaultValue={state.firstName}
            />
          </Column>
          <Column>
            <Label>Last Name</Label>
            <Input
              placeholder="Enter last name"
              name="lastName"
              onChange={onChange}
              defaultValue={state.lastName}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Email Address</Label>
            <Input
              placeholder="Enter email address"
              name="email"
              onChange={onChange}
              defaultValue={state.email}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Location</Label>
            <Input
              placeholder="Enter location"
              name="location"
              onChange={onChange}
              defaultValue={state.location}
            />
          </Column>
        </Row>
        <Row>
          <Column>
            <Label>Phone Number</Label>
            <Row>
              <PrefixInput value="+81" prefix={<JapanIcon />} />
              <NumberInput
                style={{ flex: 1 }}
                placeholder="Enter phone number"
                name="phone"
                onChange={onChange}
                defaultValue={state.phone}
              />
            </Row>
          </Column>
        </Row>
        <AdditionalHeader>Additional Info</AdditionalHeader>
        <Separator margin="16px 0px 24px 0px" color="rgba(10, 5, 41, 0.32)" />
        <Row>
          <Label>Linkedin</Label>
          <Input type="text" placeholder="Enter linkedin URL" name="linkedin" defaultValue={_socialLinks['LinkedIn']?.link} style={{ flex: 1 }} />
        </Row>

        <Row style={{ marginTop: "30px" }}>
          <Label>GitHub</Label>
          <Input type="text" placeholder="Enter github URL" name="github" defaultValue={_socialLinks['GitHub']?.link} style={{ flex: 1 }} />
        </Row>

        <Links onLinkChange={onLinkChange} links={_socialLinks} onRemove={onToBeRemoved} />
        <Row style={{ marginTop: "42px", justifyContent: "flex-end" }}>
          <Button padding="14.5px 42px" onClick={EditClick}>
            Save
          </Button>
        </Row>
      </form>
    </ViewCard>
  );
};

export default EditProfile;
