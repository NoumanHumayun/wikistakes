import EditRecruiterProfile from "../EditProfile";
import ChangePassword from "../ChangePassword";
import Notifications from "../Notifications";
import Accounts from "../Accounts";

const SettingsContainer = (props: any) => {
  switch (props?.currPage) {
    case 1:
      return <EditRecruiterProfile />;
    case 2:
      return <ChangePassword />;
    case 3:
      return <Notifications />;
    case 4:
      return <Accounts />
    default:
      return <h1> No Screen here 404 </h1>;
  }
};

export default SettingsContainer;
