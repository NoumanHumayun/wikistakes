import { Row, Avatar, Column } from "components/structural";
import { LogoName, LogoType } from "components/typography";

export const UserCard = ({
  name,
  logo,
  firstName,
  lastName,
  type,
}: any) => {
  return (
    <>
      <Row
        style={{ margin: "0px 10px 0 0" }}
        justifyContent="flex-start"
        gap="0"
      >
        <Avatar
          margin="0 8px 0 0"
          src={logo ? `https://apis.resumaps.com/file/${logo}/50/50` : null}
        >
          {String(name || firstName || " ")
            .toUpperCase()
            .charAt(0)}
        </Avatar>
        <Column>
          <LogoName> {name || `${firstName} ${lastName}`}</LogoName>
          <LogoType>{type}</LogoType>
        </Column>
      </Row>
    </>
  );
};

export default UserCard;
