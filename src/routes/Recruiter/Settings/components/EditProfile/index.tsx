import React from "react";
import { Row, Column, Avatar } from "components/structural";
import { H2, Label, Separator } from "components/typography";
import { Input } from "components/form";
import Snackbar from "components/notification";
import {
  AdditionalHeader,
  ImageContainer,
  ImageDataContainer,
  CompanyHeading,
  UploadImage,
  UploadInput,
  NumberInput,
  ScheduleButton,
  PrefixInput,
} from "../styled.component";
import Button from "components/button/primary";
import { ReactComponent as BinIcon } from "assets/svg/bin.svg";
import { ReactComponent as JapanIcon } from "assets/svg/japan.svg";
import { ReactComponent as AddIcon } from "assets/svg/add.svg";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { FETCH_RECRUITER_PROFILE } from "../../queries";
import {
  RECRUITERS_PROFILE_UPDATE,
  RECRUITERS_PROFILE_CREATE,
} from "../../mutations";
import GenericLoader from "components/GenericLoader";
import { UPLOAD_FILE } from "helpers/upload";

const EditRecruiterProfile = () => {
  const inputRef = React.useRef<any>({});
  const checkbox = React.useRef<any>();

  const [state, setState] = React.useState<any>();
  const [imageUrl, setImageUrl] = React.useState<any>();
  const [image, setImage] = React.useState();

  const id = localStorage.getItem("id") || "";

  const [recruitersUpdate, { loading: isUpdating }] = useMutation(
    RECRUITERS_PROFILE_UPDATE
  );

  const { data, loading } = useQuery<any>(FETCH_RECRUITER_PROFILE, {
    variables: { id },
    fetchPolicy: "no-cache",
  });

  React.useEffect(() => {
    if (!loading && data?.recruiter) {
      const {
        id,
        firstName,
        lastName,
        avatar,
        phone,
        location,
        login: { email },
      } = data.recruiter;
      setState({ id, firstName, lastName, avatar, phone, location, email });
      setImageUrl(
        avatar ? `https://apis.resumaps.com/file/${avatar}/50/50` : undefined
      );
    }
  }, [data, loading]);

  React.useEffect(() => {
    checkbox.current?.input?.setAttribute("required", true);
  }, [checkbox]);

  const onSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { email, ...input } = state;

      if (image) {
        input.avatar = await UPLOAD_FILE(image);
      }

      await recruitersUpdate({
        variables: { input },
      });
    },
    [state, recruitersUpdate, image]
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
      setImageUrl(reader.result);
      setImage(fileUploaded);
    };

    if (fileUploaded) {
      reader.readAsDataURL(fileUploaded);
    }
  }, []);

  const onChange = React.useCallback(
    (event: any) => {
      const { value, name } = event.target;
      setState({
        ...state,
        [name]: value,
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

  if (loading) return <GenericLoader invert />;
  return (
    <form onSubmit={onSubmit}>
      <H2>Edit Profile PP</H2>
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
          style={{
            width: "57px",
            height: "57px",
            display: "flex",
            alignItems: "center",
          }}
          size="large"
        >
          {String(state?.firstName || "").charAt(0)}
        </Avatar>
        <Row>
          <Column>
            <CompanyHeading>
              Profile Photo
              <BinIcon
                style={{ margin: "0px 0px -3px 6px", cursor: "pointer" }}
                onClick={onRemove}
              />
            </CompanyHeading>
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
            defaultValue={state?.firstName}
          />
        </Column>
        <Column>
          <Label>Last Name</Label>
          <Input
            placeholder="Enter last name"
            name="lastName"
            onChange={onChange}
            defaultValue={state?.lastName}
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
            defaultValue={state?.email}
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
            defaultValue={state?.location}
          />
        </Column>
      </Row>
      <Row>
        <Column>
          <Label>Phone Number</Label>
          <Row gap="0px">
            <PrefixInput value="+81" prefix={<JapanIcon />} />
            <NumberInput
              placeholder="Enter phone number"
              name="phone"
              onChange={onChange}
              defaultValue={state?.phone}
            />
          </Row>
        </Column>
      </Row>
      <Row style={{ marginTop: "42px", justifyContent: "flex-end" }}>
        <Button
          loading={isUpdating}
          disabled={isUpdating}
          padding="14.5px 42px"
        >
          Save
        </Button>
      </Row>
    </form>
  );
};

export default EditRecruiterProfile;
