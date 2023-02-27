import { Button, FormLabel, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import "../App.css";
import { useState } from "react";
import TableHeader from "./TableHeader";
import { Container } from "./Header";

function SalesTable() {
  const [mange, setMange] = useState(true);
  const [date, setDate] = useState("");
  const handleAddBrandSales = () => {
    if (mange === false) setMange(true);
    else setMange(false);
  };

  return (
    <>
      <Container caption={false} />
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
        onChange={(e) => {
          setDate(e.target.value);
        }}
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
      <TableHeader mange={mange} />
    </>
  );
}

export default SalesTable;
