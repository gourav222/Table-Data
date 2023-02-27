import { Table, TableContainer, Th, Thead, Tr } from "@chakra-ui/react";
import React, { useState } from "react";
import AddBrandSales from "./AddBrandSales";
import TableData from "./TableData";

function TableHeader({ mange }: { mange: boolean }) {
  const [change, setChange] = useState<boolean>(false);
  return (
    <TableContainer margin={4}>
      <Table>
        <Thead bg={"primary"}>
          <Tr>
            <Th
              textAlign={"left"}
              w="270px"
              color={"white"}
              border="1px"
              borderColor="white"
              alignSelf={"flex-end"}
            >
              Brand
            </Th>
            <Th
              textAlign={"left"}
              w="250px"
              color={"white"}
              border="1px"
              borderColor="white"
            >
              Transaction Type
            </Th>
            <Th
              textAlign={"left"}
              w="250px"
              color={"white"}
              border="1px"
              borderColor="white"
            >
              Total Orders
            </Th>
            <Th
              textAlign={"left"}
              w="250px"
              color={"white"}
              border="1px"
              borderColor="white"
            >
              Total Order Value
            </Th>
            <Th
              textAlign={"left"}
              w="100px"
              color={"white"}
              border="1px"
              borderColor="white"
            >
              Gross Margin Percentage
            </Th>
            <Th
              textAlign={"left"}
              w="10"
              color={"white"}
              border="1px"
              borderColor="white"
              borderRadius={2}
            >
              {mange ? "Actions" : "Date"}
            </Th>
          </Tr>
        </Thead>

        <TableData mange={mange} change={change} setChange={setChange} />

        {mange && (
          <tbody>
            <AddBrandSales change={change} setChange={setChange} />
          </tbody>
        )}
      </Table>
    </TableContainer>
  );
}

export default TableHeader;
