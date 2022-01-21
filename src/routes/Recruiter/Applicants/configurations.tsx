import dayjs from "dayjs";

import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

import { Link, useParams } from "react-router-dom";
import ActionHandler from "components/ActionHandler";
import { Avatar } from "components/structural";
import { Status, Tag } from "components/typography";

const LinkE = ({ firstName, lastName, id }: any) => {
  const { id: jobId } = useParams<any>();
  return (
    <Link
      to={`/recruiter/jobs/${jobId}/applicants/${id}`}
      style={{ color: "#010102", textTransform: "capitalize" }}
    >
      {firstName} {lastName}
    </Link>
  );
};

const columns = (actionHandlerOptions: any) => [
  {
    title: "Candidates",
    dataIndex: "candidatesByJob",
    render: (_: any, record: any) => {
      const { avatar, firstName } = record;

      return (
        <>
          <Avatar
            margin="0 8px 0 0"
            src={
              avatar ? `https://apis.resumaps.com/file/${avatar}/50/50` : null
            }
          >
            {String(firstName).charAt(0)}
          </Avatar>
          <LinkE {...record} />
        </>
      );
    },
  },
  {
    title: "Location",
    dataIndex: "location",
    render: (location: any) => {
      return (
        <span style={{ fontWeight: 600, color: "010102, 96%" }}>
          {location}
        </span>
      );
    },
  },
  {
    title: "Date Applied",
    dataIndex: "applications",
    render: (applications: any) => {
      const { createdOn } = applications[0] ?? {};
      return (
        <span style={{ fontWeight: 600, color: "010102, 96%" }}>
          {createdOn && dayjs.unix(createdOn / 1000).format("DD/MM/YYYY")}
        </span>
      );
    },
  },
  {
    title: "Tags",
    dataIndex: "candidateTags",
    render: (text: any[]) => {
      return (
        <span style={{ display: "flex", gap: "3px", rowGap: "3px" }}>
          {(text ?? []).map(({ tag }: any, index: number) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </span>
      );
    },
  },

  {
    title: "Status",
    dataIndex: "applications",
    render: (applications: any) => {
      const { status = "AWAITING_SCREEN" } = applications[0]?.statuses  ?? {};
      return <Status>{toLower(startCase(status))}</Status>;
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
