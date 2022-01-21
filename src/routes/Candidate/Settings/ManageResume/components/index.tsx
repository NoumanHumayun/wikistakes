import { ViewCard } from "components/cards";
import { Row, Avatar } from "components/structural";
import {
  Separator,
  H2,
  ContentHeading,
  ContentDescription,
  Tag,
} from "components/typography";

export const CandidateCard = ({
  firstName,
  lastName,
  tags,
  education,
  avatar,
  about,
}: any) => {
  return (
    <ViewCard>
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
        {(tags ?? []).map(({ tag, id }: any) => (
          <Tag key={id}>{tag}</Tag>
        ))}
      </Row>

      <ContentHeading uppercase>About Applicant</ContentHeading>
      <Separator margin="16px 0px 24px 0px" />
      <ContentDescription>{about}</ContentDescription>

      <ContentHeading uppercase>Education</ContentHeading>
      <Separator margin="16px 0px 24px 0px" />
      <ContentDescription>{education}</ContentDescription>
    </ViewCard>
  );
};
