import { Row, Column } from "components/structural";
import { Separator, Tag, H2 } from "components/typography";
import { useContext } from "react";
import { ViewCard } from "components/cards";
import { Avatar } from "components/structural";
import { ThemeContext } from "styled-components";
import {
  ContentHeading,
  ContentDescription,
  LogoName,
  CompanyHeading,
} from "components/typography";

export const ApplicantView = ({ name, logo, jobTitle }: any) => {
  const { isDesktop } = useContext(ThemeContext);
  return (
    <>
      <Row
        margin={isDesktop ? "24px 10px 20px 0" : "24px 0px 20px 10px"}
        justifyContent="flex-start"
        gap="0"
      >
        <Avatar
          margin="0 8px 0 0"
          src={logo ? `https://apis.resumaps.com/file/${logo}/50/50` : null}
        >
          {String(name).charAt(0)}
        </Avatar>

        <CompanyHeading>
          {name} - {jobTitle}
        </CompanyHeading>
      </Row>
    </>
  );
};

export const UserCard = ({
  firstName,
  lastName,
  about,
  education,
  avatar,
  name,
  type,
}: any) => {
  return (
    <>
      <Row
        style={{ margin: "24px 10px 30px 0" }}
        justifyContent="flex-start"
        gap="0"
      >
        <Avatar
          margin="0 8px 3px 0"
          src={avatar ? `https://apis.resumaps.com/file/${avatar}/50/50` : null}
        >
          {String(firstName).charAt(0)}
        </Avatar>
        <Row flexFlow="column" alignItems="flex-start">
          <LogoName> {name || `${firstName} ${lastName}`}</LogoName>
          <LogoName>{type}</LogoName>
        </Row>
      </Row>
    </>
  );
};

export const CandidateCard = ({
  firstName,
  lastName,
  education,
  avatar,
  jobTitle,
  about,
  tags,
  type,
  resume
}: any) => {
  return (
    <>
      <ViewCard style={resume ? { height: '800px' } : {}}>
        <Row
          alignItems="center"
          style={{
            justifyContent: "flex-start",
            gap: "10px",
            margin: "0px 0px 24px 0px",
          }}
        >
          <Avatar
            margin="0 8px 0 0"
            src={
              avatar ? `https://apis.resumaps.com/file/${avatar}/50/50` : null
            }
          >
            {String(firstName).charAt(0)}
          </Avatar>
          <H2>
            {firstName} {lastName}
          </H2>
        </Row>
        <Row
          style={{
            justifyContent: "flex-start",
            gap: "8px",
            marginBottom: "44px",
          }}
        >
          {(tags ?? []).map(({ tag }: any) => (
            <Tag>{tag}</Tag>
          ))}
        </Row>
        {resume ? <iframe title={resume} width="100%" height="500px" id="test" src={`https://apis.resumaps.com/file/${resume}`} /> : <>
          <Row>
            <Column>
              <ContentHeading uppercase>About Applicant</ContentHeading>
              <Separator margin="16px 0px 24px 0px" />
              <ContentDescription>{about}</ContentDescription>
            </Column>
          </Row>
          <Row>
            <Column>
              <ContentHeading uppercase>Education</ContentHeading>
              <Separator margin="16px 0px 24px 0px" />
              <ContentDescription>{education}</ContentDescription>
            </Column>
          </Row>
          <Row>
            <Column>
              <ContentHeading uppercase>Key Qualifications</ContentHeading>
              <Separator margin="16px 0px 24px 0px" />
              <ContentDescription>{education}</ContentDescription>
            </Column>
          </Row>
          <Row>
            <Column>
              <ContentHeading uppercase>Requirements</ContentHeading>
              <Separator margin="16px 0px 24px 0px" />
              <ContentDescription>{jobTitle}</ContentDescription>
            </Column>
          </Row>
          <Row>
            <Column>
              <ContentHeading uppercase>Compensation</ContentHeading>
              <Separator margin="16px 0px 24px 0px" />
              <ContentDescription>{jobTitle}</ContentDescription>
            </Column>
          </Row>
        </>}
      </ViewCard>
    </>
  );
};
