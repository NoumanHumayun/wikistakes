import dayjs from "dayjs";
import { Link, useParams } from "react-router-dom";

import startCase from "lodash/startCase";
import toLower from "lodash/toLower";
import upperFirst from "lodash/upperFirst";

import { Card } from "components/cards";
import { Row, Column, Avatar } from "components/structural";
import {
  CardTitle,
  CardLocation,
  CardDate,
  Tag,
  Status,
} from "components/typography";

import ActionHandler from "components/ActionHandler";

interface CustomTableCardProps {
  data: any;
  actionHandlerOptions: any[];
}

const CustomTableCard = ({
  data,
  actionHandlerOptions,
}: CustomTableCardProps) => {
  const { id: jobId } = useParams<any>();

  const {
    id,
    avatar,
    firstName,
    lastName,
    applications: [{ createdOn, status: statuses }] = [],
    candidateTags,
    location,
  } = data;

  const { status = "AWAITING_SCREEN" }: any = statuses ? statuses[0] ?? {} : {};

  return (
    <Card>
      <Column>
        <Row margin="0px 0px 10px 0px">
          <Avatar src={`https://apis.resumaps.com/file/${avatar}/50/50`}>
            {String(firstName).charAt(0)}
          </Avatar>
          <ActionHandler options={actionHandlerOptions} data={data} />
        </Row>

        <Link to={`/recruiter/jobs/${jobId}/applicants/${id}`}>
          <CardTitle>
            {upperFirst(firstName)} {upperFirst(lastName)}
          </CardTitle>
        </Link>
        <CardLocation>{location}</CardLocation>
        <CardDate>
          {createdOn && dayjs.unix(createdOn / 1000).format("DD/MM/YYYY")}
        </CardDate>

        <Row gap="3px" justifyContent="flex-start" margin="8px 0 16px 0">
          {(candidateTags ?? []).map(({ tag }: any, index: number) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Row>

        <Status>{toLower(startCase(status))}</Status>
      </Column>
    </Card>
  );
};

export default CustomTableCard;
