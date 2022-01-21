import { useLocation, useHistory } from "react-router-dom";
import { Column, Row } from "components/structural";
import { CustomButton, Label } from "components/typography";
import { Bullets, ColumnHead, SelectInput } from "./styled.component";
import { Link } from "react-router-dom";
import { useCallback, useState } from "react";
import { Input, TextArea } from "components/form";
import UploadComponent from "components/UploadResume/components/upload";
import { useMutation } from "@apollo/client";
import { ADD_SWEEP, ADD_SWEEP_FILES } from "../mutations";

interface Column3Props {
  step: any;
  setStep: any;
}

const Column3 = (props: Column3Props) => {
  const { step, setStep } = props;
  const [addSweep] = useMutation(ADD_SWEEP);
  const [addSweepFiles] = useMutation(ADD_SWEEP_FILES);
  const { push } = useHistory();
  const [files, setFiles] = useState({
    file1: undefined,
    file2: undefined,
    file3: undefined,
    file4: undefined,
    file5: undefined,
    file6: undefined,
  });
  const [state, setState] = useState({
    startDate: "",
    endDate: "",
    description: "",
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    social1: "",
    socialType1: "",
    social2: "",
    socialType2: "",
    bank: "",
    aba: "",
    account: "",
  });
  const socials = [
    { value: "instagram", label: "Instagram" },
    { value: "facebook", label: "Facebook" },
    { value: "youtube", label: "Youtube" },
    { value: "snapchat", label: "Snapchat" },
    { value: "tiktok", label: "TikTok" },
    { value: "twitter", label: "Twitter" },
  ];
  const handleSelectChange = useCallback(
    async (selected: any, type: string) => {
      const value = selected;
      await setState({
        ...state,
        [type]: value,
      });
    },
    [state]
  );
  const onChange = useCallback(
    async (event: any) => {
      const value = event?.target?.value;
      await setState({
        ...state,
        [event?.target?.name]: value,
      });
    },
    [state]
  );
  const onRemove = useCallback(
    async (filename: string) => {
      await setFiles({
        ...files,
        [filename]: undefined,
      });
    },
    [files]
  );

  const selectFile = useCallback(
    async (file: any, filename: string) => {
      await setFiles({
        ...files,
        [filename]: file,
      });
    },
    [files]
  );

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();

      const sweep = await addSweep({
        variables: {
          input: {
            sweep: {
              startDate: state.startDate,
              endDate: state.endDate,
              description: state.description,
            },
            influencer: {
              firstName: state.firstName,
              lastName: state.lastName,
              address: state.address1 + state.address2,
              city: state.city,
              state: state.state,
              zip: state.zip,
              email: state.email,
              social1: state.social1,
              socialType1: state.socialType1,
              social2: state.social2,
              socialType2: state.socialType2,
              bank: state.bank,
              aba: state.aba,
              account: state.account,
            },
          },
        },
      });

      await addSweepFiles({
        variables: {
          id: sweep?.data?.addSweep?.id,
          files: [
            files.file1,
            files.file2,
            files.file3,
            files.file4,
            files.file5,
            files.file6,
          ],
        },
      });
      push("/kwiki/"+sweep?.data?.addSweep?.influencer?.social1);
    },
    [state, files, addSweep, addSweepFiles, push]
  );

  return (
    <>
      {step === 1 && (
        <Row style={{ margin: "5% 5% 0 5%" }}>
          <Bullets style={{ marginLeft: "0" }}>
            <ColumnHead bold>Selected Official Rules of Your Kwiki</ColumnHead>
            <br />
            Sponsor: You are the sponsor
            <br />
            <br />
            Administrator: Kwikisweeps, Inc.
            <br />
            <br />
            Participant eligibility: at least 18 years old and US legal resident
            <br />
            <br />
            Prize: 30-minute video call with Winner
            <br />
            <br />
            Number of Winners: 1
            <br />
            <br />
            User of third party sponsorships, brand names, logos or trademarks:
            No
            <br />
            <br />
            Review:
            <Link to="/rules"> Standard Official Rules (full version)</Link>
            <br />
            Review:
            <Link to="/guidelines"> Sweepstake Promotion Guidelines</Link>
          </Bullets>

          <CustomButton
            fullWidth
            style={{ display: "flex", padding: "15px", margin: "auto" }}
            onClick={(e) => {
              e.preventDefault();
              setStep(step + 1);
            }}
          >
            <span style={{ margin: "auto" }}>1/3 Next Step</span>
          </CustomButton>
        </Row>
      )}
      {step === 2 && (
        <Row style={{ margin: "5% 5%" }}>
          <Row>
            <ColumnHead bold>Kwiki Details</ColumnHead>
          </Row>

          <Row margin="5% 0">
            <Column>
              <Label>Start Date</Label>
              <Input
                placeholder="mm/dd/yyyy"
                name="startDate"
                onChange={onChange}
                defaultValue={state.startDate}
                width="30vh"
              />
            </Column>
            <Column>
              <Label>End Date</Label>
              <Input
                placeholder="mm/dd/yyyy"
                name="endDate"
                onChange={onChange}
                defaultValue={state.endDate}
                width="30vh"
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Upload promotional content for your kwiki</Label>
              <Row>
                <UploadComponent
                  onRemove={() => onRemove("file1")}
                  selectFile={(file: any) => selectFile(file, "file1")}
                />
                <UploadComponent
                  onRemove={() => onRemove("file2")}
                  selectFile={(file: any) => selectFile(file, "file2")}
                />
                <UploadComponent
                  onRemove={() => onRemove("file3")}
                  selectFile={(file: any) => selectFile(file, "file3")}
                />
              </Row>
            </Column>
          </Row>
          <Row margin="5% 0">
            <Column>
              <Label>
                Upload featured content that all kwiki participants will receive
              </Label>
              <Row>
                <UploadComponent
                  onRemove={() => onRemove("file4")}
                  selectFile={(file: any) => selectFile(file, "file4")}
                />
                <UploadComponent
                  onRemove={() => onRemove("file5")}
                  selectFile={(file: any) => selectFile(file, "file5")}
                />
                <UploadComponent
                  onRemove={() => onRemove("file6")}
                  selectFile={(file: any) => selectFile(file, "file6")}
                />
              </Row>
            </Column>
          </Row>
          <Row margin="0 0 5% 0">
            <Column>
              <Label>Content Description</Label>
              <TextArea
                rows={4}
                placeholder="Briefly describe your featured content"
                name="description"
                onChange={onChange}
              />
            </Column>
          </Row>
          <CustomButton
            fullWidth
            style={{ display: "flex", padding: "15px", margin: "auto" }}
            onClick={(e) => {
              e.preventDefault();
              setStep(step + 1);
            }}
          >
            <span style={{ margin: "auto" }}>2/3 Next Step</span>
          </CustomButton>
        </Row>
      )}
      {step === 3 && (
        <Row style={{ margin: "5% 5%" }}>
          <Row>
            <ColumnHead bold>Contact Information</ColumnHead>
          </Row>

          <Row margin="2% 0">
            <Column>
              <Label>First Name</Label>
              <Input
                placeholder="John"
                name="firstName"
                onChange={onChange}
                defaultValue={state.firstName}
                width="30vh"
                required
              />
            </Column>
            <Column>
              <Label>Last Name</Label>
              <Input
                placeholder="Doe"
                name="lastName"
                onChange={onChange}
                defaultValue={state.lastName}
                width="30vh"
                required
              />
            </Column>
          </Row>
          <Row>
            <Label>Address</Label>
            <Input
              placeholder="Street 1"
              name="address1"
              onChange={onChange}
              defaultValue={state.address1}
              width="64vh"
              style={{ marginBottom: "8px" }}
              required
            />
            <Input
              placeholder="Street 2"
              name="address2"
              onChange={onChange}
              defaultValue={state.address2}
              width="64vh"
            />
          </Row>
          <Row margin="2% 0">
            <Column>
              <Label>City</Label>
              <Input
                placeholder="New York"
                name="city"
                onChange={onChange}
                defaultValue={state.city}
                width="30vh"
                required
              />
            </Column>
            <Column>
              <Label>State</Label>
              <Input
                placeholder="New York"
                name="state"
                onChange={onChange}
                defaultValue={state.state}
                width="30vh"
                required
              />
            </Column>
          </Row>
          <Row>
            <Label>Email Address</Label>
            <Input
              placeholder="someone@mail.com"
              name="email"
              onChange={onChange}
              defaultValue={state.email}
              width="64vh"
              required
            />
          </Row>
          <Row margin="2% 0">
            <Column>
              <Label>Social Type</Label>
              <SelectInput
                onChange={(e) => handleSelectChange(e, "socialType1")}
                options={socials}
                width="30vh"
                defaultValue="instagram"
              />
            </Column>
            <Column>
              <Label>Social Handle</Label>
              <Input
                placeholder="@Kwiki"
                name="social1"
                onChange={onChange}
                defaultValue={state.social1}
                width="30vh"
                required
              />
            </Column>
          </Row>
          <Row>
            <Column>
              <Label>Social Type</Label>
              <SelectInput
                onChange={(e) => handleSelectChange(e, "socialType2")}
                options={socials}
                width="30vh"
                defaultValue="instagram"
              />
            </Column>
            <Column>
              <Label>Social Handle</Label>
              <Input
                placeholder="@Kwiki"
                name="social2"
                onChange={onChange}
                defaultValue={state.social2}
                width="30vh"
              />
            </Column>
          </Row>
          <Row margin="0 0 5% 0">
            <Label>Banking Information</Label>
            <Input
              placeholder="Bank Name (Can be provided later)"
              name="bank"
              onChange={onChange}
              defaultValue={state.bank}
              width="64vh"
              style={{ marginBottom: "8px" }}
              required
            />
            <Column>
              <Label>ABA Number</Label>
              <Input
                placeholder="XXXXXXXXX"
                name="aba"
                onChange={onChange}
                defaultValue={state.aba}
                width="30vh"
              />
            </Column>
            <Column>
              <Label>Account Number</Label>
              <Input
                placeholder="XXXXXXXXXX"
                name="account"
                onChange={onChange}
                defaultValue={state.account}
                width="30vh"
              />
            </Column>
          </Row>
          <CustomButton
            fullWidth
            style={{ display: "flex", padding: "15px", margin: "auto" }}
            onClick={onSubmit}
          >
            <span style={{ margin: "auto" }}>3/3 Submit</span>
          </CustomButton>
        </Row>
      )}
    </>
  );
};

export default Column3;
