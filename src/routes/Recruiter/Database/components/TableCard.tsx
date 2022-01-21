import dayjs from 'dayjs';
import upperFirst from 'lodash/upperFirst';

import {
  TableCardContent,
  CandidateContainer,
} from "./styled.components";
import { Card } from "components/cards";
import { Row, Column, Avatar } from "components/structural";
import ActionHandler from "components/ActionHandler";
import { ReactComponent as ViewIcon } from "assets/svg/view.svg";
import { ReactComponent as DownloadIcon } from "assets/svg/download.svg";
import { CardLocation, CardDate,CardTitle ,Name} from "components/typography";

interface CustomTableCardProps {
  data: any;
  actionHandlerOptions: any[];
}

const CustomTableCard = ({ data, actionHandlerOptions }: CustomTableCardProps) => {
  const {
    index,
    title,
    candidate: { avatar, firstName, lastName, location, statuses },
    uploadedDate,
    view,
    download,
  } = data ?? {};
  const { status = "Blocked" } = statuses ?? {};
  return (
    <Card>
      <Row >
        <Column>
          <Row>
          <Row gap="5px" >
              <Avatar src={`https://apis.resumaps.com/file/${avatar}/50/50`}>
                {String(firstName).charAt(0)}
              </Avatar>
              <Name >{upperFirst(firstName)} {upperFirst(lastName)}</Name>

            </Row>
            <ActionHandler
              options={actionHandlerOptions}
              data={data}
            />
          </Row>
          <TableCardContent>
            <CardTitle>
              {upperFirst(title)}
            </CardTitle>
            <CardLocation>{upperFirst(location)}</CardLocation>
            <CardDate>
          {!isNaN(uploadedDate) &&
            dayjs.unix(uploadedDate / 1000).format("DD/MM/YYYY")}
        </CardDate>
          </TableCardContent>

          <TableCardContent flex>
            {upperFirst(status)}
            <CandidateContainer>
              <ViewIcon />
              <DownloadIcon />
            </CandidateContainer>
          </TableCardContent>
        </Column>
      </Row>
    </Card>
  );
};

export default CustomTableCard;
