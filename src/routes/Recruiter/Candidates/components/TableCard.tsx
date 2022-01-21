import { Row, Column, Avatar, Tag, Container } from "components/structural";
import { Card } from "components/cards";
import { CardTitle, CardLocation, CardDate } from "components/typography";
import upperFirst from "lodash/upperFirst";

import ActionHandler from "components/ActionHandler";

import dayjs from "dayjs";

interface CustomTableCardProps {
  data: any;
  actionHandlerOptions: any[];
  setCurrent: any;
}

const CustomTableCard = (props: CustomTableCardProps) => {
  const { data, actionHandlerOptions } = props;
  const {
    avatar,
    firstName,
    lastName,
    title,
    location,
    candidateTags,
    login,
  } = data ?? {};

  const { lastLogin } = login ?? { lastLogin: {} };

  return (
      <Card>
        <Row margin="0px 0px 10px 0px">
          <Avatar src={`https://apis.resumaps.com/file/${avatar}/50/50`}>
            {String(firstName).charAt(0)}
          </Avatar>
          <ActionHandler options={actionHandlerOptions} data={data} />
        </Row>

        <CardTitle>
          {upperFirst(firstName)} {upperFirst(lastName)}
        </CardTitle>

        <CardTitle>{title}</CardTitle>
        <CardLocation>{location}</CardLocation>
        <CardDate>
          {!isNaN(lastLogin) &&
            dayjs.unix(lastLogin / 1000).format("DD/MM/YYYY")}
        </CardDate>
        <Row justifyContent="flex-start" gap="5px" margin="8px 0px 0px 0px">
          {(candidateTags ?? []).map(({id, tag }: any, index: number) => (
            <Tag key={id}>{tag}</Tag>
          ))}
        </Row>
      </Card>
  );
};

export default CustomTableCard;
