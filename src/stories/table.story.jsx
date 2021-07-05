import React from "react";
import { Table } from "../components/table/index";

export default {
  title: "Table",
};

export const TableExample = () => (
  <div>
    <h3>Image Table</h3>
    <Table
      headers={["Id", "Name"]}
      rows={[
        { id: 1, name: "uno" },
        { id: 2, name: "dos" },
        { id: 3, name: "tres" },
      ]}
      pagination={{ pageSize: 5 }}
    />
  </div>
);
