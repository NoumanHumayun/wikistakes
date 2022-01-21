import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  Container,
  CustomRow,
  CustomColumn,
} from "components/structural";
import {
  TableHeader,

} from "../components/styled.components";
import SelectInput from "components/SelectInput";
import Table from "components/Table";
import { ThemeContext } from "styled-components";
import TableCard from "../components/TableCard";
import getConfigurations from "../configurations";
import { GET_JOB_CANDIDATES, GET_DISTINCT_APPLIED_JOBDATES } from "../queries";
import GenericLoader from "components/GenericLoader";

import { useQuery } from "@apollo/client/react/hooks/useQuery";

const Applications = () => {
  const { push } = useHistory();
  const { pageSize } = React.useContext(ThemeContext);
  const [filters, setFilters] = React.useState<any>({});
  const [isLoading, setLoading] = React.useState<boolean>(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const { jobId, candidateId } = useParams<any>();
  const { data, loading, refetch } = useQuery<any>(GET_JOB_CANDIDATES, {
    variables: { jobId, candidateId, limit: pageSize, offset: 0 },
    fetchPolicy: "no-cache",
  });

  const {
    data: appliedOnData,
    loading: appliedOnLoading,
  } = useQuery(GET_DISTINCT_APPLIED_JOBDATES, { fetchPolicy: "cache-first" });

  React.useEffect(() => setLoading(true), [filters]);

  const actionHandlerOptions = React.useMemo(
    () => [
      {
        title: "View Job",
        handler: (_data: any) => {
          push(`/candidate/jobs/${_data.jobId}/view`);
        },
      },
      {
        title: "View Application",
        handler: (_data: any) => {
          push(
            `/candidate/applications/${_data.jobId}/${_data.candidateId}/view`
          );
        },
      },
    ],
    [push]
  );

  const columns = React.useMemo(() => getConfigurations(actionHandlerOptions), [
    actionHandlerOptions,
  ]);

  const { total, applied } = React.useMemo(() => {
    if (data && !loading) {
      setLoading(false);
      const { applicationsByContext } = data;
      const { records, candidate: { applied } } = (applicationsByContext ?? [])[0] ?? { records: 0, candidate: { applied: 0 } };
      return { total: records, applied };
    }
    return { total: 0, applied: 0 };
  }, [data, loading]);

  const onAppliedDateChange = React.useCallback(
    async (appliedOn: string) => {
      const _filters = { ...filters, appliedOn };
      setFilters(_filters);
      await refetch({
        filters: _filters,
      });
      setLoading(false);
    },
    [filters, refetch]
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

  const appliedOnDate = React.useMemo(() => {
    if (appliedOnData && !appliedOnLoading) {
      return (appliedOnData?.appliedOnByContext ?? []).map(
        (appliedOnDate: string) => ({
          label: appliedOnDate,
          value: appliedOnDate,
        })
      );
    }
    return null;
  }, [appliedOnData, appliedOnLoading]);

  const onCandidateJobStatus = React.useCallback(
    async (status: string) => {
      const _filters = { ...filters, status };
      setFilters(_filters);
      await refetch({ filters: _filters, offset: 0 });
      setLoading(false);
    },
    [filters, refetch]
  );

  const AppliedDates = [
    { label: "Applied", value: "APPLIED" },
    { label: "Shortlisted", value: "SHORTLISTED" },
    { label: "Phone Screen", value: "PHONE_SCREEN" },
    { label: "Client Interview", value: "CLIENT_INTERVIEW" },
    { label: "Review", value: "REVIEW" },
    { label: "Awaiting Screen", value: "AWAITING_SCREEN" },
  ];

  if (appliedOnLoading)
    return (
      <Container>
        <GenericLoader invert />
      </Container>
    );

  return (
    <Container>
      <CustomRow margin="0px 0px 15px 0px">
        <TableHeader>APPLIED TO {applied} JOBS</TableHeader>
        <CustomColumn>
          <SelectInput
            handleChange={onAppliedDateChange}
            placeholder="Date Applied"
            topBorder
            options={appliedOnDate}
            allowClear
          />

          <SelectInput
            handleChange={onCandidateJobStatus}
            placeholder="Status"
            options={AppliedDates}
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
          data={data?.applicationsByContext ?? []}
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

export default Applications;
