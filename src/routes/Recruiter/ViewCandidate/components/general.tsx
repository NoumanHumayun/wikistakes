import { useCallback, MouseEvent, useRef, useState, useEffect } from "react";
import remove from "lodash/remove";
import { useMutation } from "@apollo/client/react/hooks/useMutation";

import { HeaderButton, HeaderLink } from "components/button/primary";
import { ContentDescription, RowHeader } from "components/typography";
import {
  Row,
  Tag,
  TagButton,
  TableText,
  DrawerRow,
} from "components/structural";

import { TextArea, Select } from "components/form";

import { ReactComponent as Delete } from "assets/svg/delete.svg";
import { ReactComponent as Edit } from "assets/svg/edit.svg";

import {
  CANDIDATE_NOTE_DELETE,
  CANDIDATE_NOTE_CREATE,
  CANDIDATE_TAG_CREATE,
  CANDIDATE_TAG_DELETE,
  CANDIDATE_NOTE_UPDATE
} from "../mutation";
import GenericLoader from "components/GenericLoader";

const GeneralInfo = ({
  jobId,
  candidateId,
  email,
  phone,
  location,
  tags: tagsProp,
  links,
  notes,
  refetch,
}: any) => {
  const notesRef = useRef<HTMLTextAreaElement>();

  const [isTagging, setTagging] = useState(false);
  const [tags, setTags] = useState(tagsProp);

  const [noteDelete, { loading }] = useMutation(CANDIDATE_NOTE_DELETE);
  const [noteUpdate, { loading: isUpdating }] = useMutation(CANDIDATE_NOTE_UPDATE);
  const [noteAdd, { loading: isAddingNote }] = useMutation(
    CANDIDATE_NOTE_CREATE
  );

  const [tagCreate] = useMutation(CANDIDATE_TAG_CREATE);
  const [tagDelete] = useMutation(CANDIDATE_TAG_DELETE);

  useEffect(() => setTags(tagsProp), [tagsProp]);

  const onTagging = useCallback(() => {
    setTagging(!isTagging);
  }, [isTagging]);

  const onRemoveTag = useCallback(
    async (tag) => {
      const [{ id }]: any = remove(tags, { tag });
      setTags([...tags]);
      if (id) {
        tagDelete({ variables: { id } });
      }
    },
    [tags, tagDelete]
  );

  const onAddTag = useCallback(
    async (tag) => {
      const {
        data: {
          candidateTagCreate: { id },
        },
      } = await tagCreate({
        variables: { input: { jobId, candidateId, tag } },
      });
      setTags([...tags, { tag, id }]);
    },
    [tags, tagCreate, candidateId, jobId]
  );

  const onNotesDelete = useCallback(
    async (event: MouseEvent<SVGElement>) => {
      const { id } = event.currentTarget;
      await noteDelete({ variables: { id } });
      refetch();
    },
    [noteDelete, refetch]
  );

  const onEdit = useCallback(
    async (event: MouseEvent<SVGElement>) => {
      const { id } = event.currentTarget;
      const note = (notes??[]).find((_note: any) => _note.id === id);
      if(notesRef?.current){
        notesRef.current.value = note.notes;
        notesRef.current.id = id;
      }
    },
    [notes, notesRef]
  );

  const onAddNote = useCallback(async () => {
    if (notesRef?.current) {
      const { value: notes, id } = notesRef.current;
      const input: any = jobId
        ? { notes, candidateId, jobId }
        : { notes, candidateId };
      if(!id)
        await noteAdd({ variables: { input } });
      else {
        input.id = id;
        await noteUpdate({ variables: { input } })
      }
      refetch();
    }
  }, [notesRef, noteAdd, noteUpdate, refetch, candidateId, jobId]);

  if (loading || isAddingNote || isUpdating) return <GenericLoader invert />;
  return (
    <>
      <RowHeader>TAGS</RowHeader>
      <DrawerRow gap="6px">
        {!isTagging ? (
          <>
            {(tags ?? []).map(({ tag }: any, index: number) => (
              <Tag key={`tag-${index}`}>{tag}</Tag>
            ))}

            <TagButton add key={`add`} onClick={onTagging}>
              + Add Tag
            </TagButton>
          </>
        ) : (
          <>
            <Select
              mode="tags"
              onDeselect={onRemoveTag}
              onSelect={onAddTag}
              value={(tags ?? []).map(({ tag }: any) => tag)}
            />
            <HeaderButton slim onClick={() => setTagging(false)}>
              Done
            </HeaderButton>
          </>
        )}
      </DrawerRow>

      <RowHeader>CONTACT INFO</RowHeader>
      <Row margin="17px 24px" gap="24px" justifyContent="flex-start">
        <TableText>Email Address</TableText>
        <TableText>{email}</TableText>
      </Row>

      <Row margin="0px 24px" gap="24px" justifyContent="flex-start">
        <TableText>Phone Number</TableText>
        <TableText>{phone}</TableText>
      </Row>

      <Row margin="17px 24px" gap="24px" justifyContent="flex-start">
        <TableText>Location</TableText>
        <TableText>{location}</TableText>
      </Row>

      <RowHeader>ADDITIONAL INFO</RowHeader>
      <DrawerRow gap="6px">
        {(links ?? []).map(({ title, link }: any, index: number) => (
          <HeaderLink
            target="_new"
            slim
            to={link.replace(/(http|https):/g, '')}
            reverse
            key={`title-${index}`}
          >
            {title}
          </HeaderLink>
        ))}
      </DrawerRow>

      <RowHeader>NOTES</RowHeader>
      {(notes ?? []).map(({ notes, id }: any) => (
        <Row margin="10px 24px" flexFlow="nowrap" gap="0">
          <ContentDescription margin="0px">{notes}</ContentDescription>
          <span style={{display: "flex", marginLeft: "5px"}}>
            <Delete
              id={id}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={onNotesDelete}
            />

            <Edit
              id={id}
              style={{ height: "20px", width: "20px", cursor: "pointer" }}
              onClick={onEdit}
            />
          </span>
        </Row>
      ))}
      <DrawerRow>
        <TextArea
          style={{ flex: 1 }}
          ref={notesRef}
          placeholder="Add Notes here"
        />
      </DrawerRow>
      <DrawerRow>
        <HeaderButton slim onClick={onAddNote}>
          Add Note
        </HeaderButton>
      </DrawerRow>
    </>
  );
};

export default GeneralInfo;
