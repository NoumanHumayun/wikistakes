import React from 'react';
import { cloneDeep, set } from 'lodash';
import { ReactComponent as BinIcon } from "assets/svg/bin.svg";
import { ReactComponent as AddIcon } from "assets/svg/add.svg";
import {
  Row
} from "components/structural";
import {
  Label
} from "components/typography";
import { ScheduleButton } from "./../styled.component";
import { Input } from "components/form";

const View = ({ onLinkChange, onRemove, links }: any) => {
  const [linksToBeAdded, setLinksToBeAdded] = React.useState<any[]>([]);
  const _links = React.useMemo(() => ({ ...links }), [links]);

  const onChangeToBeAdded = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    set(linksToBeAdded, name, value);
    setLinksToBeAdded([...linksToBeAdded]);
    onLinkChange(linksToBeAdded?.map(({ title, link }) => ({ title, link })));
  }, [linksToBeAdded, onLinkChange]);

  const onRemoveToBeAdded = React.useCallback((event: React.MouseEvent<SVGElement>) => {
    const { id } = event.currentTarget as any;
    const _data = cloneDeep(linksToBeAdded);
    const _item = _data[+id];
    const _d = _data.filter((_i: any) => _i.title !== _item.title);
    setLinksToBeAdded([..._d]);
    onLinkChange(_d?.map(({ title, link }) => ({ title, link })))
  }, [linksToBeAdded, onLinkChange]);

  delete _links["LinkedIn"];
  delete _links["GitHub"];

  return <>
    {Object.values(_links).map((_link: any) => {
      return <Row margin="10px 0 0 0" key={_link.id} style={{ borderBottom: "1px solid #ccc" }}>
        <Label style={{ minWidth: '60px' }}>{_link.title}</Label>
        <Label style={{ flex: 1, fontWeight: 'bold' }}>{_link.link}</Label>
        <BinIcon style={{ cursor: 'pointer' }} id={_link.id} onClick={onRemove} />
      </Row>
    })}

    {linksToBeAdded.map((_link, _index) => {
      return <Row gap="5px" margin="10px 0 0 0" key={_link.id}>
        <Input type="text" name={`${_index}.title`} placeholder="Title" onChange={onChangeToBeAdded} />
        <Input type="text" name={`${_index}.link`} placeholder="Link" style={{ flex: 1 }} onChange={onChangeToBeAdded} />
        <BinIcon id={`${_index}`} style={{ cursor: 'pointer' }} onClick={onRemoveToBeAdded} />
      </Row>
    })}
    <Row style={{ marginTop: "30px" }}>
      <ScheduleButton type="button" onClick={() => setLinksToBeAdded([...linksToBeAdded, { id: Math.random() }])}>
        <AddIcon />
        &nbsp;&nbsp; Add Link
      </ScheduleButton>
    </Row>
  </>;
}

export default View;