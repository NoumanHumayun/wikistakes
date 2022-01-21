import { useState, useContext, useCallback, useMemo } from "react";

import { ThemeContext } from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client/react/hooks/useQuery";

import { Container } from "components/structural";
import Table from "components/Table";
import getConfigurations from "../configurations";
import GenericLoader from "components/GenericLoader";
import CompanyWithLogo from "components/General/CompanyWithLogo";

import { GET_CANDIDATES_BY_JOB, FETCH_JOB_COMPANY } from "../queries";
import TableCard from "../components/TableCard";

const Applicants = () => {
  const { push } = useHistory();
  const { id } = useParams<any>();
  const { pageSize, isDesktop } = useContext(ThemeContext);
  const [isLoading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, refetch } = useQuery<any>(GET_CANDIDATES_BY_JOB, {
    variables: { jobId: id, limit: pageSize, offset: 0 },
    fetchPolicy: "no-cache",
  });

  const { data: companyData, loading: companyLoading } = useQuery(
    FETCH_JOB_COMPANY,
    {
      variables: { id },
      fetchPolicy: "cache-first",
    }
  );

  const { jobTitle, name, logo } = useMemo(() => {
    if (companyLoading) return {};
    const { job } = companyData ?? {};
    const { jobTitle, company } = job ?? {};
    const { name, logo } = company ?? {};
    return { jobTitle, name, logo };
  }, [companyData, companyLoading]);

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
        handler: (record: any) => {
          push(`applicants/${record?.id}`);
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
      const { candidatesByJob } = data;
      const { records } = candidatesByJob[0] ?? { records: 0 };
      return records;
    }
    return 0;
  }, [data, loading]);

  if (loading || companyLoading)
    return (
      <Container>
        <GenericLoader invert />
      </Container>
    );

  return (
    <Container>
      <CompanyWithLogo name={name} logo={logo} jobTitle={jobTitle} margin={isDesktop ? "0px 0px 26px 0" : "28px 8px 13px 16px"} />
      {isLoading ? (
        <GenericLoader invert />
      ) : (
        <Table
          currentPage={currentPage}
          columns={columns}
          data={data?.candidatesByJob ?? []}
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

export default Applicants;
