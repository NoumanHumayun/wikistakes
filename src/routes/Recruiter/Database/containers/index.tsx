import React from "react";
import { useHistory } from "react-router-dom";
import { Row, Column, Container, SearchColumn, CustomColumn, CustomRow } from "components/structural";
import SearchInput from "components/SearchInput";
import SelectInput from "components/SelectInput";
import Table from "components/Table";
import TableCard from "../components/TableCard";
import getConfigurations from "../configurations";
import GenericLoader from "components/GenericLoader";
import { ThemeContext } from "styled-components";
import { useQuery } from "@apollo/client/react/hooks/useQuery";
import { useParams } from "react-router-dom";
import throttle from "lodash/throttle";

import {
  GET_CANDIDATES_TABLE,
  GET_DISTINCT_LOCATION,
  GET_RESUME_DISTINCT_DATE,
} from "../queries";

const DbContainer = () => {
  const { push } = useHistory();
  const { id, candidateId } = useParams<any>();
  const [currentRecord, setCurrentRecord] = React.useState<any>();
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(1);
  const { pageSize } = React.useContext(ThemeContext);

  const [filters, setFilters] = React.useState<any>({});

  const { data, error, loading, refetch } = useQuery<any>(
    GET_CANDIDATES_TABLE,
    {
      variables: { limit: pageSize, offset: 0 },
      fetchPolicy: "no-cache",
    }
  );

  React.useEffect(() => setLoading(loading), [loading]);
  React.useEffect(() => setLoading(true), [filters]);

  const {
    data: locationsData,
    error: locationsError,
    loading: locationsLoading,
  } = useQuery(GET_DISTINCT_LOCATION, { fetchPolicy: "cache-first" });

  const {
    data: uploadedDateData,
    error: uploadedDateError,
    loading: uploadedDateLoading,
  } = useQuery(GET_RESUME_DISTINCT_DATE, { fetchPolicy: "cache-first" });

  const throttledSearch = throttle(async (_filters) => {
    return refetch({ filters: _filters, offset: 0 });
  }, 2000);


  const onCandidateStatus = React.useCallback(
    async (status: string) => {
      const _filters = { ...filters, status };
      setFilters(_filters);
      await refetch({ filters: _filters, offset: 0 });
      setLoading(false);
    },
    [filters]
  );


  const onSearch = React.useCallback(
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

  const onLocationChange = React.useCallback(
    async (location: string) => {
      const _filters = { ...filters, location };
      setFilters(_filters);
      await refetch({ filters: _filters, offset: 0 });
      setLoading(false);
    },
    [filters]
  );

  const onuploadedDateChange = React.useCallback(
    async (uploadedDate: string) => {
      const _filters = { ...filters, uploadedDate };
      setFilters(_filters);
      await refetch({ filters: _filters, offset: 0 });
      setLoading(false);
    },
    [filters]
  );


  const onPaginate = React.useCallback(
    async (pagination) => {
      setLoading(true);
      const current = isNaN(pagination) ? pagination?.current : pagination;
      await refetch({ offset: (current - 1) * pageSize });
      setCurrentPage(current);
      setLoading(false);
    },
    [refetch, pageSize]
  );

  const actionHandlerOptions = React.useMemo(
    () => [
      {
        title: "View",
        handler: (records: any) => {
          push(`/recruiter/database/${records.id}/view`);
        },
      },
    ],
    [push]
  );

  const columns = React.useMemo(
    () => getConfigurations(actionHandlerOptions, setCurrentRecord),
    [actionHandlerOptions, setCurrentRecord]
  );

  const total = React.useMemo(() => {
    if (data && !loading) {
      setLoading(false);

      const { resumes } = data;
      const { records } = resumes[0] ?? { records: 0 };
      return records;
    }
    return 0;
  }, [data, loading]);

  const locations = React.useMemo(() => {
    if (locationsData && !locationsLoading) {
      return (locationsData?.candidateLocations ?? []).map(
        (location: string) => ({
          label: location,
          value: location,
        })
      );
    }
    return null;
  }, [locationsData, locationsLoading]);

  const uploadedDate = React.useMemo(() => {
    if (uploadedDateData && !uploadedDateLoading) {
      return (uploadedDateData?.resumeDistinctDate ?? []).map(
        (uploadedDate: string) => ({
          label: uploadedDate,
          value: uploadedDate,
        })
      );
    }
    return null;
  }, [uploadedDateData, uploadedDateLoading]);


  const LoginStatuses = [
    { label: "active", value: "ACTIVE" },
    { label: "blocked", value: "BLOCKED" },

  ];

  return (
    <Container>
      <CustomRow margin="0px 0px 15px 0px">
        <SearchInput
          name="firstName"
          value={filters?.firstName}
          onChange={onSearch}
        />{" "}

        <CustomColumn>
          <SelectInput
            handleChange={onLocationChange}
            placeholder="Location"
            topBorder
            options={locations}
            allowClear
          />

          <SelectInput
            handleChange={onCandidateStatus}
            placeholder="Status"
            options={LoginStatuses}
            allowClear

          />

          <SelectInput
            handleChange={onuploadedDateChange}
            placeholder="Date Uploaded"
            options={uploadedDate}
            allowClear
          />
        </CustomColumn>
      </CustomRow>
      {isLoading ? (
        <GenericLoader invert />
      ) : (
        <Table
          currentPage={currentPage}
          columns={columns}
          data={data?.resumes ?? []}
          pageSize={pageSize}
          total={total}
          onPaginate={onPaginate}
          tableCards={TableCard}
          actionHandlerOptions={actionHandlerOptions}
        />

      )}
    </Container>
  );
};

export default DbContainer;
