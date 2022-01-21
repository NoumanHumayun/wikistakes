import { Row } from "components/structural";
import { Avatar } from "components/structural";
import { CompanyJob } from "components/typography";

const CompanyWithLogo = ({ name, logo, jobTitle, margin }: any) => {
  return (
    <Row
      margin={margin}
      justifyContent="flex-start"
      gap="0"
    >
      <Avatar
        margin="0 8px 0 0"
        src={logo ? `https://apis.resumaps.com/file/${logo}/50/50` : null}
      >
        {String(name).charAt(0)}
      </Avatar>
      <CompanyJob>
        {name} - {jobTitle}
      </CompanyJob>
    </Row>
  );
};

export default CompanyWithLogo;