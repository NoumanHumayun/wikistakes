import dayjs from "dayjs";
import { Link } from 'react-router-dom';
import ActionHandler from "components/ActionHandler";
import { Avatar } from "components/structural";
import upperFirst from 'lodash/upperFirst';
import { ReactComponent as Download } from 'assets/svg/download.svg';
import { ReactComponent as View } from 'assets/svg/view.svg';


const columns = (actionHandlerOptions: any, setCurrentRecord: any) => [

  {
    title: "Candidate",
    dataIndex: "candidate",
    render: (candidate: any) => {
      const { firstName, lastName, avatar } = candidate ?? { firstName: "", lastName: "", avatar: "" };

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
          <span style={{ color: "010102, 96%", fontWeight: 400, fontSize: "14px" }}>{upperFirst(firstName)} {upperFirst(lastName)}</span>
        </>
      );
    },
  },
  {
    title: "Resume",
    dataIndex: "title",
    render: (title: string) => {
      return <span style={{ color: "010102, 96%" }}>{title}</span>;
    },
  },
  {
    title: "Status",
    dataIndex: "login",
    render: (login: any) => {
      return (
        <span style={{ fontWeight: 600, color: "010102, 96%" }}>
          {login?.status}

        </span>
      );
    },
  },

  {
    title: "Date Uploaded",
    dataIndex: "uploadedDate",
    render: (text: number) => {
      return (
        <span style={{ color: "#777778" }}>
          {dayjs.unix(text / 1000).format("DD/MM/YYYY")}
        </span>
      );
    },
  },
  {
    title: "Location",
    dataIndex: "candidate",
    render: (candidate: any) => {
      return <span style={{ color: "#777778" }}>{candidate?.location}</span>;
    },
  },
  {
    title: "Location",
    dataIndex: 'job',
    render: (job: any, data: any) => {
      const { permission, resume } = data;
      let _logo;
      let char;
      if (job) {
        const { company: { logo, name } } = job;
        _logo = logo;
        char = name[0]
      }
      console.log(_logo, permission, resume);
      return <div style={{ display: 'flex', alignItems: 'center' }}>
        {(_logo || char) && <Avatar src={`https://apis.resumaps.com/file/${_logo}`}>{char}</Avatar>}
        <Link style={{display:'flex'}} target="_new" to={`//apis.resumaps.com/file/${resume}`}>
          {permission === 'VIEW' ? <View style={{marginLeft:'5px'}} /> : <Download />}
        </Link>
      </div>;

    }
  },
  {
    title: "",
    render: (text: string, record: any) => {
      return (
        <span style={{ display: "flex", justifyContent: "flex-end" }}>
          <ActionHandler
            options={actionHandlerOptions}
            data={record}
          />
        </span>
      );
    },
  },
];

export default columns;
