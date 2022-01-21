import dayjs from "dayjs";
import { Avatar, Row } from "components/structural";
import { Tag } from "components/typography";
import ActionHandler from "components/ActionHandler";
import { Link } from "react-router-dom";
import upperFirst from "lodash/upperFirst";

const columns = (actionHandlerOptions: any, setCurrentJob: any) => [
  {
    title: "Company",
    dataIndex: "company",
    render: (company: any) => {
      return (
        <>
          <Avatar
            margin="0 8px 0 0"
            src={
              company.logo
                ? `https://apis.resumaps.com/file/${company.logo}/50/50`
                : null
            }
          >
            {String(company.name).charAt(0)}
          </Avatar>
          <span
            style={{ color: "#010102", fontWeight: 400, fontSize: "14px" }}
          >
            {upperFirst(company.name)}
          </span>
        </>
      );
    },
  },
  {
    title: "Job title",
    dataIndex: "jobTitle",
    render: (text: string, { id }: any) => {
      return (
        <Link
          style={{
            color: "rgba(1,1,2,0.96)",
            fontWeight: 600,
            fontSize: "14px",
          }}
          to={`jobs/view/${id}`}
        >
          {upperFirst(text)}
        </Link>
      );
    },
  },
  {
    title: "Location",
    dataIndex: "location",
    render: (text: string) => {
      return <span style={{ color: "#777778" }}>{text}</span>;
    },
  },
  {
    title: "Date posted",
    width:"120px",
    dataIndex: "postDate",
    render: (text: number) => {
      return <span style={{ color: "#777778" }}>{text}</span>;
    },
  },
  {
    title: "Tags",
    dataIndex: "jobTags",
    render: (jobTags: any[]) => {
      return (
        <Row
          style={{ maxWidth: "300px" }}
          gap="2px"
          justifyContent="flex-start"
        >
          {(jobTags ?? [])
            .sort(({ tag: t1 }, { tag: t2 }) => t1.length - t2.length )
            .map(({ tag }: any) => (
              <Tag>{tag}</Tag>
            ))}
        </Row>
      );
    },
  },
];

export default columns;
