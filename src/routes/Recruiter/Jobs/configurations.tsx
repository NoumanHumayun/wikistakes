import dayjs from "dayjs";
import { Link } from "react-router-dom";

import upperFirst from "lodash/upperFirst";

import ActionHandler from "components/ActionHandler";
import { Avatar } from "components/structural";
import { Status } from "components/typography";

const columns = (actionHandlerOptions: any) => [
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
            style={{ color: "010102, 96%", fontWeight: 400, fontSize: "14px" }}
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
          to={`/recruiter/jobs/${id}/view`}
        >
          {upperFirst(text)}
        </Link>
      );
    },
  },
  {
    title: "Applied",
    dataIndex: "applied",
    render: (applied: string) => {
      return (
        <span style={{ fontWeight: 600, color: "010102, 96%" }}>{applied}</span>
      );
    },
  },
  {
    title: "Location",
    dataIndex: "location",
    render: (text: string) => {
      return <span style={{ color: "#777778" }}>{upperFirst(text)}</span>;
    },
  },
  {
    title: "Date posted",
    dataIndex: "postDate",
    render: (postDate: number) => {
      return (
        <span style={{ color: "#777778" }}>
        {postDate}
        </span>
      );
    },
  },

  {
    title: "Status",
    dataIndex: "statuses",
    render: (statuses: any) => {
      const { status = "Draft" } = statuses ? statuses[0] ?? {} : {};
      return (
        <Status>
          {String(status).toLowerCase()}
        </Status>
      );
    },
  },
  {
    title: "",
    render: (_: string, record: any) => {
      return (
        <span style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionHandler options={actionHandlerOptions} data={record} />
        </span>
      );
    },
  },
];

export default columns;
