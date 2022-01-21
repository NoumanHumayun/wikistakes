import {
  TableCardContainer,
  TableCard,
  TableCardAvatarContainer,
  TableCardContent,
  UserAvatar,
  OnlineStatus,
  ClosedStatus,
} from "./styled.components";
import { Row, Column } from "components/structural";
import dayjs from 'dayjs';
import { Avatar } from "components/structural";
import {
  CardTitle,
  CardLocation,
  CardDate,
  Status,
  CompanyHeading,Name
} from "components/typography";

import toLower from "lodash/toLower";
import startCase from "lodash/startCase";

interface CustomTableCardProps {
  data: any;
}

const CustomTableCard = (props: CustomTableCardProps) => {
  const { data } = props;
  const { index, appliedOn, statuses, job } = data ?? { appliedOn: "", status: [], job: {} };
  const { status = "DRAFT" } = statuses ?? {};
  const {
    company: { name, logo },

  } = job ?? {
    company: {
      name: "", logo: ""
    },
  };

  return (

    <TableCardContainer key={`table-card-${index}`}>
      <TableCard>
        <Row>
          <Column>
            <Row>
              <TableCardAvatarContainer>
                <Avatar
                  src={
                    logo ? `https://apis.resumaps.com/file/${logo}/50/50` : null
                  }
                >
                  {String(name).charAt(0)}
                </Avatar>
                <Name>{name}</Name>
              </TableCardAvatarContainer>
              <TableCardContent>
                <div style={{ color: "#777778", marginBottom: "15px" }}>{job?.location}</div>
              </TableCardContent>
            </Row>
            <CardTitle>
              {job?.jobTitle}
            </CardTitle>
            <CardDate>{appliedOn}</CardDate>

            <Status>{toLower(startCase(status))}</Status>

          </Column>
        </Row>
      </TableCard>
    </TableCardContainer>
  );
};

export default CustomTableCard;
