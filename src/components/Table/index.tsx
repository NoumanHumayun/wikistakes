import React from "react";
import { ThemeContext } from "styled-components";
import { Pagination } from "components/structural";
import {
  Table,
  ArrowLeft,
  ArrowRight,
  TableFooter,
} from "./styled.components";
import { Row, Column, Container } from "components/structural";



interface CustomTableProps {
  currentPage?: number;
  columns: any[];
  data: any[];
  pageSize: number;
  total: number;
  tableCards?: any;
  onPaginate?: any;
  actionHandlerOptions?: any;
}

const rowSelection = {
  onChange: (selectedRowKeys: any, selectedRows: any) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.company === "Disabled User",
    company: record.company,
  }),
};

const CustomTable = (props: CustomTableProps) => {
  const {
    currentPage,
    columns,
    data,
    pageSize,
    total,
    onPaginate,
    tableCards: TableCard,
    actionHandlerOptions,
  } = props;

  const { isDesktop } = React.useContext(ThemeContext);

  const renderPagination = React.useCallback(
    (
      page: number,
      type: "page" | "prev" | "next" | "jump-prev" | "jump-next",
      originalElement: any
    ) => {
      if (type === "prev") {
        return <ArrowLeft />;
      }
      if (type === "next") {
        return <ArrowRight />;
      }
      return originalElement;
    },
    []
  );

  return (
    <>
      {isDesktop ? (
        <>
          <Table
            rowSelection={{
              type: "checkbox",
              ...rowSelection,
            }}

            columns={columns}
            dataSource={data?.map(_d => ({ ..._d, key: Math.random() }))}
            pagination={{
              total,
              current: currentPage,
              position: ["bottomRight"],
              pageSize: pageSize,
              pageSizeOptions: ["1", "2", "3", "5"],
              size: "small",
              simple: true,
              itemRender: (page, type, originalElement) =>
                renderPagination(page, type, originalElement),
            }}
            onChange={onPaginate}
          />
          <TableFooter>
            Displaying {data?.length || 0} out of {total}
          </TableFooter>
        </>
      ) : (
        <>
          {(data ?? []).map((_data, index) => (
            <TableCard
              key={index}
              data={_data}
              actionHandlerOptions={actionHandlerOptions}
            />
          ))}

          <Pagination
            showLessItems={true}
            pageSize={pageSize}
            current={currentPage}
            total={total}
            onChange={onPaginate}
            itemRender={(page, type, originalElement) =>
              renderPagination(page, type, originalElement)
            }
          />
        </>
      )}
    </>
  );
};

export default CustomTable;
