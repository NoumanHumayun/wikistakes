import { ViewCard } from "components/cards";
import { Row, Avatar, Tag } from "components/structural";
import {
  Separator,
  ContentHeading,
  ContentDescription,
  H2,
} from "components/typography";

export const CandidateCard = ({
  firstName,
  lastName,
  tags,
  education,
  avatar,
  about,
  resume
}: any) => {
  return (
    <ViewCard style={resume? {height: '800px'}: {}}>
      <Row
        alignItems="center"
        justifyContent="flex-start"
        gap="10px"
        margin="0px 0px 24px 0px"
      >
        <Avatar
          margin="0 8px 0 0"
          src={avatar ? `https://apis.resumaps.com/file/${avatar}/50/50` : null}
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
      {resume ? <>
        <embed
          src={`//apis.resumaps.com/file/${resume}`}
          width="100%"
          height="500px"
        />
      </> : <>
        <ContentHeading>About Applicant</ContentHeading>
        <Separator margin="12px 0px 18px 0px" />
        <ContentDescription>{about}</ContentDescription>

        <ContentHeading>Education</ContentHeading>
        <Separator margin="12px 0px 18px 0px" />
        <ContentDescription>{education}</ContentDescription>
      </>}
    </ViewCard>
  );
};
