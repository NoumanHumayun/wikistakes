import dayjs from "dayjs";
import toLower from "lodash/toLower";
import startCase from "lodash/startCase";
import { Status } from "components/typography";
import { Avatar } from "components/structural";
import ActionHandler from "components/ActionHandler";
import upperFirst from "lodash/upperFirst";

const columns = (actionHandlerOptions: any) => [
  {
    title: "Company",
    dataIndex: "job",
    render: (job: any) => {
      const { company } = job ?? {};
      return (
        <>
          <Avatar
            margin="0 8px 0 0"
            src={
              company?.logo
                ? `https://apis.resumaps.com/file/${company?.logo}/50/50`
                : null
            }
          >
            {String(company?.name).charAt(0)}
          </Avatar>
          <span
            style={{ color: "010102, 96%", fontWeight: 400, fontSize: "14px" }}
          >
            {upperFirst(company?.name)}
          </span>
        </>
      );
    },
  },
  {
    title: "Job title",
    dataIndex: "job",
    render: (job: any) => {
      const { jobTitle } = job?.jobTitle ?? {};
      return (
        <span style={{ fontWeight: 600, color: "010102, 96%" }}>
          {job?.jobTitle}
        </span>
      );
    },
  },
  {
    title: "Location",
    dataIndex: "job",
    render: (job: any) => {
      const { location } = job?.location ?? {};
      return <span style={{ color: "#777778" }}>{job?.location}</span>;
    },
  },
  {
    title: "Date Applied",
    dataIndex: "appliedOn",
    render: (appliedOn: any) => {
      // @ts-ignore
      return dayjs(appliedOn).utc().local().format("DD/MM/YY");
    },
  },
  {
    title: "Status",
    dataIndex: "statuses",
    render: (statuses: any) => {
      const { status = "DRAFT" } = statuses ?? {};
      return (
        <Status style={{fontWeight: 'bold'}}>
          {toLower(startCase(status))}
        </Status>
      );
    },
  },
  {
    title: "",
    render: (text: string, record: any) => {
      return (
        <span style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionHandler options={actionHandlerOptions} data={record} />
        </span>
      );
    },
  },
];
export default columns;
