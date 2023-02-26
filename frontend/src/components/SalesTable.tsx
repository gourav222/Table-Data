import {
  Table,
  Thead,
  Tr,
  Th,
  TableContainer,
  Button,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "../App.css";
import { useState } from "react";
import AddBrandSales from "./AddBrandSales";
import TableData from "./TableData";
import Header from "./Header";

function SalesTable() {
  const [mange, setMange] = useState(false);
  const [change, setChange] = useState<boolean>(false);
  const [date, setDate] = useState("");
  const handleAddBrandSales = () => {
    if (mange === false) setMange(true);
    else setMange(false);
  };

  return (
    <>
      <Header/>
      <FormLabel ml="19px" mt="5px" position="absolute" color="grey">
        Select Date
      </FormLabel>
      <Input
        type="date"
        w="200px"
        h="40px"
        position="absolute"
        mt="30px"
        ml="19px"
        border="2px"
        borderColor="green.300"
        value={date}
        onChange={(e) => {setDate(e.target.value)}}
      ></Input>
      <Button
        leftIcon={<AddIcon />}
        color={"white"}
        bg={"green.900"}
        _hover={{
          background: "green.800",
        }}
        ml="1345px"
        mt="30px"
        onClick={() => {
          handleAddBrandSales();
        }}
      >
        Add Brand Sales
      </Button>

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
                Actions
              </Th>
            </Tr>
          </Thead>

          <TableData  change={change} setChange={setChange}/>

          {mange && (
            <tbody>
              <AddBrandSales  change={change} setChange={setChange}/>
            </tbody>
          )}
        </Table>
      </TableContainer>
    </>
  );
}

export default SalesTable;
