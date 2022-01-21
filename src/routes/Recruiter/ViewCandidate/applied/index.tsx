import { Link } from "react-router-dom";
import { ReactComponent as Job } from "assets/svg/job.svg";
import { CardTitle, CardDate } from "components/typography";
import {
  Avatar,
  Row,
  CompanyTitle,
  DrawerRow,
  HR,
  SpaceVertical,
  Column
} from "components/structural";
import capitalize from "lodash/capitalize";

const AppliedJobs = (props: any) => {
  const { applications } = props;
  return (
    <>
      {(applications ?? []).map((application: any, index: number) => {
        const {
          job: {
            id,
            jobTitle,
            location,
            company: { logo, name },
          },
        } = application;

        return (
          <>
            <SpaceVertical />

            <Row
              gap="0"
              margin="24px 16px 8px 16px"
              justifyContent="flex-start"
            >
              <Avatar src={`https://apis.resumaps.com/file/${logo}/50/50`}>
                {String(name).charAt(0)}
              </Avatar>
              <CompanyTitle>{name}</CompanyTitle>
            </Row>

            <Column margin="0px 16px">
              <CardTitle>{jobTitle}</CardTitle>
              <CardDate>{location}</CardDate>
              <HR />
            </Column>

            
            <Row  margin="22px 16px" justifyContent="space-between">
              <Row gap="2px">
                Status: <strong>{capitalize("Applied")}</strong>
              </Row>
              <Link
                to={`/recruiter/jobs/${id}/view`}
                style={{ display: "flex", color: "#0A0529" }}
              >
                <span style={{ marginRight: "14px" }}>View Job Posting </span>
                <Job />
              </Link>
            </Row>
          </>
        );
      })}
    </>
  );
};

export default AppliedJobs;
