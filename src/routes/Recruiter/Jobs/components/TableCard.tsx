import dayjs from "dayjs";
import { Link } from "react-router-dom";

import upperFirst from "lodash/upperFirst";
import startCase from "lodash/startCase";
import toLower from "lodash/toLower";

import { Card } from "components/cards";
import ActionHandler from "components/ActionHandler";
import { Row, Column, Avatar } from "components/structural";
import {
  CardTitle,
  CardLocation,
  CardDate,
  Status,
} from "components/typography";

import { ReactComponent as CandidateIcon } from "assets/svg/candidates.svg";

interface CustomTableCardProps {
  data: any;
  actionHandlerOptions: any[];
}

const CustomTableCard = ({
  data,
  actionHandlerOptions,
}: CustomTableCardProps) => {
  const { company, jobTitle, location, statuses, applied, postDate, id } = data;
  const { name, logo } = company;
  const { status = "Draft" }: any = statuses ? statuses[0] ?? {} : {};

  return (
    <Card>
      <Column>
        <Row margin="0px 0px 10px 0px" gap="5px">
          <Avatar src={`https://apis.resumaps.com/file/${logo}/50/50`}>
            {String(name).charAt(0)}
          </Avatar>

          <ActionHandler options={actionHandlerOptions} data={data} />
        </Row>

        <Link to={`/recruiter/jobs/${id}/view`}>
          <CardTitle>{upperFirst(jobTitle)}</CardTitle>
        </Link>
        <CardLocation>{upperFirst(location)}</CardLocation>
        <CardDate>
          {postDate}
        </CardDate>
        <Row
          gap="5px"
          justifyContent="space-between"
          alignItems="center"
          margin="16px 0px 0px 0px"
        >
          <Status>{toLower(startCase(status))}</Status>
          <span>
            <CandidateIcon style={{ marginRight: "8px" }} /> {applied}
          </span>
        </Row>
      </Column>
    </Card>
  );
};

export default CustomTableCard;
