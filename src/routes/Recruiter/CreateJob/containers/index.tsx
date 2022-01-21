import React from "react";
import AutoComplete from "antd/es/auto-complete";
import Avatar from "antd/es/avatar/avatar";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { useMutation } from "@apollo/client/react/hooks/useMutation";
import { Row, Column } from "components/structural";
import { H2, Label, Separator } from "components/typography";
import { Input, TextArea } from "components/form";
import Snackbar from "components/notification";
import {
  CreateJobModal,
  ImageContainer,
  ImageDataContainer,
  CompanyHeading,
  UploadImage,
  UploadInput,
  Select,
  ScheduleButton,
} from "../components/styled.components";
import Button from "components/button/primary";
import { ReactComponent as CloseIcon } from "assets/svg/close.svg";
import { UPLOAD_FILE } from "helpers/upload";
import { COMPANIES_BY_CONTEXT_QUERY, FETCH_JOB } from "../queries";
import { JOB_CREATE, JOB_UPDATE } from "../mutations";
import { CreateJobProps } from "../types";
import GenericLoader from "components/GenericLoader";

const renderItem = ({ id, name, logo }: any) => ({
  id,
  logo,
  value: name,
  label: (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Avatar
        style={{ backgroundColor: "#87d068", marginRight: "5px" }}
        icon={String(name).charAt(0)}
        src={logo ? `https://apis.resumaps.com/file/${logo}/50/50` : null}
      />
      {name}
    </div>
  ),
});

const Container = (props: CreateJobProps) => {
  const { visible, handleCloseCreateJob } = props;

  const { push } = useHistory();
  const { id } = useParams<any>();

  const uploadRef = React.useRef<any>({});
  const formData = React.useRef<any>({});
  const formRef = React.useRef<any>();

  const [tags, setTags] = React.useState<any[]>([]);
  const [company, setCompany] = React.useState<any>({});
  const [imageUrl, setImageUrl] = React.useState<any>("");
  const [isCreating, setCreating ] =  React.useState(false);

  const [jobCreate] = useMutation(JOB_CREATE);
  const [jobUpdate] = useMutation(JOB_UPDATE);

  const { data: { job } = {}, loading } = useQuery(FETCH_JOB, {
    variables: { id },
    fetchPolicy: "no-cache",
    skip: !id,
  });

  const {
    data: { companies } = { companies: [] },
    loading: companiesLoading,
  } = useQuery(COMPANIES_BY_CONTEXT_QUERY, {
    fetchPolicy: "cache-first",
  });

  const [snackbarData, setSnackbarData] = React.useState<any>({
    message: "",
    description: "",
    type: "error",
    show: false,
  });

  React.useEffect(() => {
    formData.current = formData?.current ?? {};
    if (job) {
      const {
        company: { logo },
      } = job;
      formData.current.companyId = job?.company?.id;
      const _data = { ...job.company, ...job };
      const { elements } = formRef?.current ?? {};
      Object.keys(_data).forEach((_key) => {
        if (elements && elements[_key]) {
          elements[_key].value = _data[_key];
        }
      });
      setCompany({ value: _data.name, id: job?.company?.id, logo: _data.logo });
      setTags((_data?.jobTags ?? []).map(({ tag }: any) => tag));
      setImageUrl(`http://apis.resumaps.com/file/${logo}`);
    }
  }, [job, formRef, loading, companiesLoading]);

  const onSubmit = React.useCallback(
    async (event: React.FocusEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        setCreating(true);
        const input: any = {};

        if (tags?.length) input.tags = tags;

        const { elements } = event.currentTarget;
        for (let i = 0; i < elements.length; i++) {
          const { name, value } = elements.item(i) as any;
          if (name && value) input[name] = value;
        }

        delete input.file;

        if (formData?.current?.companyId) {
          delete input.name;
          delete input.about;
          delete input.logo;
          input.companyId = formData?.current?.companyId;
        } else {
          const logo = await UPLOAD_FILE(uploadRef?.current?.files[0]);
          input.company = {
            name: input.name,
            about: input.about,
          };
          if (logo) input.company.logo = logo;
          delete input.name;
          delete input.about;
          delete input.logo;
        }

        if (!id) {
          const {
            data: {
              jobCreate: { id },
            },
          } = await jobCreate({ variables: { input } });

          push(`jobs/${id}/view`);
        } else {
          input.id = id;
          const { companyId } = input;

          const company: any = { id: companyId };
          company.name = (elements as any)["name"].value;
          company.about = (elements as any)["about"].value;
          input.company = company;

          const {
            data: { jobUpdate: updated },
          } = await jobUpdate({ variables: { input } });
          handleCloseCreateJob();
        }
      } catch (error) {
        console.error(error);
        setSnackbarData({
          message: "Error",
          description: error.message || "",
          type: "error",
          show: true,
        });
      }
    },
    [tags]
  );

  const handleCloseSnackbar = React.useCallback(() => {
    setSnackbarData((prevState: any) => {
      return {
        ...prevState,
        show: false,
      };
    });
  }, []);

  const handleUploadClick = React.useCallback(() => {
    if (uploadRef && uploadRef.current) {
      uploadRef.current.click();
    }
  }, [uploadRef]);

  const handleUploadImage = React.useCallback((event: any) => {
    const fileUploaded = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = function () {
      setImageUrl(reader.result);
    };
    if (fileUploaded) {
      reader.readAsDataURL(fileUploaded);
    }
  }, []);

  const onCompany = React.useCallback((value, option) => {
    setCompany(option);
    setImageUrl(`https://apis.resumaps.com/file/${option?.logo}/50/50`);
  }, []);

  const onCompanyChange = React.useCallback(
    (value: any) => {
      setCompany({ ...company, value });
    },
    [company]
  );

  const onTag = React.useCallback(
    (tags) => {
      const _formData = formData.current ?? {};
      _formData.tags = tags;
      formData.current = _formData;
      setTags(tags);
    },
    [formData]
  );

  const options = React.useMemo(
    () =>
      (companies ?? [])
        .filter((_company: any) =>
          String(_company.name)
            .toLowerCase()
            .includes((company.value ?? "").toLowerCase())
        )
        .map((company: any) => renderItem(company)),
    [companies, company]
  );

  return (
    <>
      <CreateJobModal
        loading={loading || companiesLoading}
        visible={visible}
        footer={null}
        closable={true}
        width="860px"
        maskStyle={{ background: "#f1f0f7" }}
        closeIcon={<CloseIcon onClick={handleCloseCreateJob} />}
      >
        {loading || companiesLoading ? (
          <GenericLoader invert />
        ) : (
          <form ref={formRef} onSubmit={onSubmit}>
            <H2>{id ? `Edit Job` : `Create New Job`}</H2>
            <Row
              alignItems="center"
              style={{
                justifyContent: "flex-start",
                margin: "40px 0px",
              }}
              gap="0px"
            >
              <ImageContainer src={imageUrl} />
              <ImageDataContainer>
                <Row>
                  <Column>
                    <CompanyHeading>Company Logo</CompanyHeading>
                    <UploadImage onClick={handleUploadClick}>
                      Upload Image
                    </UploadImage>
                    <UploadInput
                      type="file"
                      ref={uploadRef}
                      name="file"
                      accept="image/*"
                      onChange={handleUploadImage}
                    />
                  </Column>
                </Row>
              </ImageDataContainer>
            </Row>

            <Row>
              <Column>
                <Label>Company Name</Label>
                <AutoComplete
                  value={company?.value}
                  onChange={onCompanyChange}
                  options={options}
                  onSelect={onCompany}
                >
                  <Input
                    autoComplete="false"
                    placeholder="Enter company name"
                    name="name"
                  />
                </AutoComplete>
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>Job Title</Label>
                <Input placeholder="Enter job title" name="jobTitle" />
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>Location</Label>
                <Input placeholder="Enter location" name="location" />
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>Industry</Label>
                <Input placeholder="Enter industry" name="industry" />
              </Column>
            </Row>
            <Row>
              <Column>
                <Label>Tags</Label>
                <Select
                  allowClear
                  placeholder="Add tags"
                  mode="tags"
                  onChange={onTag}
                  value={tags}
                />
              </Column>
            </Row>
            <Separator margin="26px 0px 24px 0px" />
            <Row>
              <Column>
                <Label>About Company</Label>
                <TextArea
                  rows={4}
                  placeholder="Enter company info"
                  name="about"
                />
              </Column>
            </Row>
            <Separator margin="26px 0px 24px 0px" />
            <Row>
              <Column>
                <Label>Job Description</Label>
                <TextArea
                  rows={4}
                  placeholder="Enter job description"
                  name="jobDescription"
                />
              </Column>
            </Row>
            <Separator margin="26px 0px 24px 0px" />
            <Row>
              <Column>
                <Label>Qualifications</Label>
                <TextArea
                  rows={4}
                  placeholder="Enter qualifications"
                  name="qualification"
                />
              </Column>
            </Row>
            <Separator margin="26px 0px 24px 0px" />
            <Row>
              <Column>
                <Label>Requirements</Label>
                <TextArea
                  rows={4}
                  placeholder="Enter requirements"
                  name="requirements"
                />
              </Column>
            </Row>
            <Row style={{ marginTop: "42px", justifyContent: "flex-end" }}>
              <ScheduleButton disabled={isCreating}>Schedule</ScheduleButton>
              <Button loading={isCreating} disabled={isCreating} padding="14.5px 42px">
                {id ? "Update" : "Create"} Job
              </Button>
            </Row>
          </form>
        )}
      </CreateJobModal>
      <Snackbar
        message={snackbarData.message}
        description={snackbarData.description}
        type={snackbarData.type}
        show={snackbarData.show}
        showIcon
        onClose={handleCloseSnackbar}
      />
    </>
  );
};

export default Container;
