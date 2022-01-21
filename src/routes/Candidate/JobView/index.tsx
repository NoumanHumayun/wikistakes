import { ViewCard } from "components/cards";
import { Row, Avatar } from "components/structural";
import {
  Separator,
  ContentHeading,
  H2,
  H1,
  CardLocation,
  Tag,
  ContentDescription,
} from "components/typography";

const JobView = ({ data }: any) => {
  const {
    jobTitle,
    location,
    jobDescription,
    qualification,
    requirements,
    company: { name, about, logo } = { name: "", about: "", logo: "" },
    jobTags,
  } = data;

  return (
    <ViewCard>
      <Row
        alignItems="center"
        justifyContent="flex-start"
        gap="10px"
        margin="0px 0px 24px 0px"
      >
        <Avatar
          src={logo ? `https://apis.resumaps.com/file/${logo}/50/50` : null}
          margin="6px 0px 6px 0px"
        >
          {String(name).charAt(0)}
        </Avatar>
        <H2>{name}</H2>
      </Row>
      <H1>{jobTitle}</H1>
      <Row margin="8px 0px 15px 0px">
        <CardLocation>{location}</CardLocation>
      </Row>
      <Row justifyContent="flex-start" gap="8px" margin="0px 0px 48px 0px">
        {(jobTags ?? []).map(({ tag }: any) => (
          <Tag>{tag}</Tag>
        ))}
      </Row>

      <ContentHeading>About Company</ContentHeading>
      <Separator margin="16px 0px 24px 0px" />
      <ContentDescription>{about}</ContentDescription>

      <ContentHeading>Job Description</ContentHeading>
      <Separator margin="16px 0px 24px 0px" />
      <ContentDescription>{jobDescription}</ContentDescription>

      <ContentHeading>Key Qualifications</ContentHeading>
      <Separator margin="16px 0px 24px 0px" />
      <ContentDescription>{qualification}</ContentDescription>

      <ContentHeading>Requirements</ContentHeading>
      <Separator margin="16px 0px 24px 0px" />
      <ContentDescription>{requirements}</ContentDescription>
    </ViewCard>
  );
};

export default JobView;
