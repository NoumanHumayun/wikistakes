import dayjs from "dayjs";

import { Row, Column, Avatar, Tag } from "components/structural";
import { CardTitle, CardLocation, CardDate } from "components/typography";
import { Card } from "components/cards";
import ActionHandler from "components/ActionHandler";
import upperFirst from "lodash/upperFirst";

interface CustomTableCardProps {
  data: any;
  actionHandlerOptions: any[];
  setCurrent: any;
}

const CustomTableCard = (props: CustomTableCardProps) => {
  const { data, actionHandlerOptions } = props;

  const {
    index,
    company: { name, about, logo } = { name: "", about: "", logo: "" },
    jobTitle,
    location,
    statuses,
    applied,
    postDate,
    jobTags,
  } = data;

  const { tag } = jobTags[0] ?? {};

  return (
    <Card>
      <Column>
        <Row margin="0px 0px 10px 0px" gap="5px">
          <Avatar src={`https://apis.resumaps.com/file/${logo}/50/50`}>
            {String(name).charAt(0)}
          </Avatar>
          <CardTitle style={{ marginLeft: "10px" }}>
            {upperFirst(name)}
          </CardTitle>
          <ActionHandler options={actionHandlerOptions} data={data} />
        </Row>

        <CardTitle>{jobTitle}</CardTitle>
        <CardLocation>{location}</CardLocation>
        <CardDate>{postDate}</CardDate>

        <Row gap="5px" margin="8px 0px 8px 0px" justifyContent="flex-start">
          {(jobTags ?? [])
            .sort(({ tag: t1 }: any, { tag: t2 }: any) => t1.length - t2.length)
            .map(({ tag }: any) => (
              <Tag>{tag}</Tag>
            ))}
        </Row>
      </Column>
    </Card>
  );
};

export default CustomTableCard;
