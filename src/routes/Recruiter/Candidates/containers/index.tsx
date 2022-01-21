import { useMemo, useContext, useCallback, useState, useEffect } from "react";
import { Container, CustomRow, CustomColumn } from "components/structural";

import SearchInput from "components/SearchInput";
import SelectInput from "components/SelectInput";
import Table from "components/Table";
import ViewCandidate from "routes/Recruiter/ViewCandidate";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import TableCard from "../components/TableCard";
import { ThemeContext } from "styled-components";

import throttle from "lodash/throttle";

import {
  GET_CANDIDATES,
  DISTINCT_LOCATION,
  GET_DISTINCT_CANDIDATE_TAGS,
} from "../queries";

import GenericLoader from "components/GenericLoader";
import getConfigurations from "../configurations";

const CandidateContainer = () => {
  const { pageSize } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentCandidate, setCurrentCandidate] = useState<any>({});
  const [isViewCandidateOpen, setViewCandidate] = useState<boolean>(false);
  const [filters, setFilters] = useState<any>({});
  const [isLoading, setLoading] = useState<boolean>(false);

  const { data, loading, refetch } = useQuery<any>(GET_CANDIDATES, {
    variables: { limit: pageSize, offset: 0, orderBy: { firstName: "asc" } },
    fetchPolicy: "no-cache",
  });

  useEffect(() => setLoading(loading), [loading]);
  useEffect(() => setLoading(true), [filters]);

  const {
    data: locationsData,
    loading: locationsLoading,
  } = useQuery(DISTINCT_LOCATION, { fetchPolicy: "cache-first" });

  const {
    data: candidateTagsData,
    loading: candidateTagsLoading,
  } = useQuery(GET_DISTINCT_CANDIDATE_TAGS, { fetchPolicy: "cache-first" });

  const throttledSearch = throttle(async (_filters) => {
    return refetch({ filters: _filters, offset: 0 });
  }, 2000);

  const onSearch = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const _filters = { ...filters };
      const { value, name } = event.currentTarget;
      _filters[name] = value;
      if (!_filters[name]) delete _filters[name];
      setFilters(_filters);
      await throttledSearch(_filters);
      setLoading(false);
    },
    [filters]
  );

  const onSort = useCallback(
    async (firstName: string) => {
      setLoading(true);
      const _filters = { ...filters };
      await refetch({
        filters: _filters,
        offset: 0,
        orderBy: { firstName },
      });
      setLoading(false);
    },
    [filters]
  );

  const onLocationChange = useCallback(
    async (location: string) => {
      const _filters = { ...filters, location };
      setFilters(_filters);
      await refetch({
        filters: _filters,
        offset: 0,
        orderBy: { firstName: "asc" },
      });
      setLoading(false);
    },
    [filters]
  );

  const onTagsChange = useCallback(
    async (tag: string) => {
      const _filters = { ...filters, tag };
      setFilters(_filters);
      await refetch({
        filters: _filters,
        offset: 0,
        orderBy: { firstName: "asc" },
      });
      setLoading(false);
    },
    [filters]
  );

  const onPaginate = useCallback(
    async (pagination) => {
      setLoading(true);
      const current = isNaN(pagination) ? pagination?.current : pagination;
      await refetch({ offset: (current - 1) * pageSize });
      setCurrentPage(current);
      setLoading(false);
    },
    [refetch, pageSize]
  );

  const handleCloseViewCandidate = useCallback(() => {
    setViewCandidate(false);
  }, []);

  const actionHandlerOptions = useMemo(
    () => [
      {
        title: "View",
        handler: (candidate: any) => {
          setCurrentCandidate(candidate);
          setViewCandidate(true);
        },
      },
    ],
    []
  );

  const columns = useMemo(() => getConfigurations(actionHandlerOptions), [
    actionHandlerOptions,
  ]);

  const total = useMemo(() => {
    if (data && !loading) {
      setLoading(false);

      const { candidates } = data;
      const { records } = candidates[0] ?? { records: 0 };
      return records;
    }
    return 0;
  }, [data, loading]);

  const locations = useMemo(() => {
    if (locationsData && !locationsLoading) {
      return (locationsData?.Locations ?? []).map((location: string) => ({
        label: location,
        value: location,
      }));
    }
    return null;
  }, [locationsData, locationsLoading]);

  const candidateTags = useMemo(() => {
    if (candidateTagsData && !candidateTagsLoading) {
      return (candidateTagsData?.candidateDistinctTags ?? []).map(
        (candidateTags: string) => ({
          label: candidateTags,
          value: candidateTags,
        })
      );
    }
    return null;
  }, [candidateTagsData, candidateTagsLoading]);

  return (
    <Container>
      <CustomRow margin="0px 0px 15px 0px">
        <SearchInput
          name="location"
          value={filters?.location}
          onChange={onSearch}
        />

        <CustomColumn>
          <SelectInput
            handleChange={onLocationChange}
            placeholder="Location"
            topBorder
            options={locations}
            allowClear
          />
          <SelectInput
            handleChange={onTagsChange}
            placeholder="Tags"
            topBorder
            options={candidateTags}
            allowClear
          />
          <SelectInput
            handleChange={onSort}
            placeholder="Alphabetical A-Z"
            options={[
              { label: "ASC", value: "asc" },
              { label: "DESC", value: "desc" },
            ]}
          />
        </CustomColumn>
      </CustomRow>

      {isLoading ? (
        <GenericLoader invert />
      ) : (
        <Table
          currentPage={currentPage}
          columns={columns}
          data={data?.candidates ?? []}
          pageSize={pageSize}
          total={total}
          onPaginate={onPaginate}
          actionHandlerOptions={actionHandlerOptions}
          tableCards={TableCard}
        />
      )}

      {isViewCandidateOpen && (
        <ViewCandidate
          isOpen={isViewCandidateOpen}
          onClose={handleCloseViewCandidate}
          candidateId={currentCandidate?.id}
        />
      )}
    </Container>
  );
};

export default CandidateContainer;
