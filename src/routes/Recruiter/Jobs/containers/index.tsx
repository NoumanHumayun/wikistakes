import {useState, useEffect, useContext, useCallback, useMemo} from "react";

import { ThemeContext } from "styled-components";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

import { useThrottle } from "helpers/index";
import { Container, CustomRow, CustomColumn } from "components/structural";

import Table from "components/Table";
import SelectInput from "components/SelectInput";
import SearchInput from "components/SearchInput";
import GenericLoader from "components/GenericLoader";

import getConfigurations from "../configurations";
import TableCard from "../components/TableCard";

import {
  GET_JOBS,
  GET_LOCATION,
  GET_INDUSTRIES,
  GET_POSTDATE,
} from "../queries";

const JobContainer = () => {
  const { push } = useHistory();
  const { pageSize } = useContext(ThemeContext);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<any>({});
  const [search, setSearch] = useState("");

  const { data, loading, refetch } = useQuery<any>(GET_JOBS, {
    variables: { limit: pageSize, offset: 0 },
    fetchPolicy: "no-cache",
  });

  
  const {
    data: locationsData,
    loading: locationsLoading,
  } = useQuery(GET_LOCATION, { fetchPolicy: "cache-first" });
  
  const {
    data: industriesData,
    loading: industriesLoading,
  } = useQuery(GET_INDUSTRIES, { fetchPolicy: "cache-first" });
  
  const {
    data: postDateData,
    loading: postDateLoading,
  } = useQuery(GET_POSTDATE, { fetchPolicy: "cache-first" });
  
  const throttledSearch = useThrottle(async () => {
    const _filters = { ...filters };
    _filters["jobTitle"] = search;
    if (!_filters["jobTitle"]) delete _filters["jobTitle"];
    setFilters(_filters);
    await refetch({ filters: _filters, offset: 0, limit: 10 });
    setLoading(false);
    return;
  }, 1000);

  useEffect(() => setLoading(true), [filters]);

  const onSearch = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.currentTarget;
      setSearch(value);
      throttledSearch();
    },
    [throttledSearch]
  );

  const onLocationChange = useCallback(
    async (location: string) => {
      const _filters = { ...filters, location };
      setFilters(_filters);
      await refetch({ filters: _filters, offset: 0 });
      setLoading(false);
    },
    [filters, refetch]
  );

  const onIndustryChange = useCallback(
    async (industry: string) => {
      const _filters = { ...filters, industry };
      setFilters(_filters);
      await refetch({ filters: _filters, offset: 0 });
      setLoading(false);
    },
    [filters, refetch]
  );

  const onPostDateChange = useCallback(
    async (postDate: string) => {
      const _filters = { ...filters, postDate };
      setFilters(_filters);
      await refetch({ filters: _filters, offset: 0 });
      setLoading(false);
    },
    [filters, refetch]
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

  const actionHandlerOptions = useMemo(
    () => [
      {
        title: "View",
        handler: (_data: any) => {
          push(`/recruiter/jobs/${_data.id}/view`);
        },
      },
    ],
    [push]
  );

  const columns = useMemo(() => getConfigurations(actionHandlerOptions), [
    actionHandlerOptions,
  ]);

  const total = useMemo(() => {
    if (data && !loading) {
      setLoading(false);
      const { jobs } = data;
      const { records } = (jobs ?? [])[0] ?? { records: 0 };
      return records;
    }
    return 0;
  }, [data, loading]);

  const locations = useMemo(() => {
    if (locationsData && !locationsLoading) {
      return (locationsData?.jobLocations ?? []).map((location: string) => ({
        label: location,
        value: location,
      }));
    }
    return null;
  }, [locationsData, locationsLoading]);

  const industries = useMemo(() => {
    if (industriesData && !industriesLoading) {
      return (industriesData?.jobIndustries ?? []).map((industry: string) => ({
        label: industry,
        value: industry,
      }));
    }
    return null;
  }, [industriesData, industriesLoading]);

  const postDates = useMemo(() => {
    if (postDateData && !postDateLoading) {
      return (postDateData?.jobPostDates ?? []).map((postDate: string) => ({
        label: postDate,
        value: postDate,
      }));
    }
    return null;
  }, [postDateData, postDateLoading]);

  if (loading || locationsLoading || postDateLoading || industriesLoading)
    return (
      <Container>
        <GenericLoader invert />
      </Container>
    );

  return (
    <Container>
      <CustomRow margin="0px 0px 15px 0px">
        <SearchInput name="jobTitle" onChange={onSearch} />
        <CustomColumn>
          <SelectInput
            handleChange={onLocationChange}
            placeholder="Location"
            topBorder
            options={locations}
            allowClear
          />
          <SelectInput
            handleChange={onIndustryChange}
            placeholder="Industry"
            options={industries}
            allowClear
          />
          <SelectInput
            handleChange={onPostDateChange}
            placeholder="Date Posted"
            options={postDates}
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
          data={data?.jobs ?? []}
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

export default JobContainer;
