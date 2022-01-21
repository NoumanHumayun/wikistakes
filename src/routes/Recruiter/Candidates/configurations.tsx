import dayjs from "dayjs";
import ActionHandler from "components/ActionHandler";
import { Tag } from "components/typography";
import { Avatar } from "components/structural";

const columns = (actionHandlerOptions: any) => [
  {
    title: "Candidate",
    dataIndex: "candidates",

    render: (candidates: any, record: any) => {
      const { avatar, firstName, lastName } = record;
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
          <span style={{ color: "#010102", textTransform: "capitalize" }}>
            {firstName} {lastName}
          </span>
        </>
      );
    },
  },
  {
    title: "Location",
    dataIndex: "location",
    render: (location: any) => {
      return (
        <span style={{ fontWeight: 600, color: "#010102", textTransform: 'capitalize' }}>
          {location}
        </span>
      );
    },
  },

  {
    title: "Last Login",
    dataIndex: "login",
    render: (login: any) => {
      const { lastLogin } = login ?? { lastLogin: {} };
      return (
        <span style={{ color: "#777778" }}>
          {!isNaN(lastLogin) && dayjs.unix(lastLogin / 1000).format("DD/MM/YYYY")}
        </span>
      );
    },
  },
  {
    title: "Applied",
    dataIndex: "applied",
    render: (applied: string) => {
      return <span style={{ color: "#777778" }}>{applied}</span>;
    },
  },
  {
    title: "Tags",
    dataIndex: "candidateTags",
    render: (text: any[]) => {
      return (
        <span style={{ display: "flex", gap: "3px", rowGap: "3px" }}>
          {(text ?? []).map(({ tag }: any, index: number) => (
            <Tag key={`tag-${index}`}>{tag}</Tag>
          ))}
        </span>
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
