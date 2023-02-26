import { Heading, Box, Text} from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import React from "react";

function Header() {
  return (
    <>
      <Box w="1536px" h="60px" bg={"primary"} color={"white"}>
        <Heading as="h4" size="md" ml="100px" position="absolute" mt="15px">
          Brand Sales
        </Heading>
      </Box>
      <Box w="1500px" h="50px" bg={'blue.100'} ml="18px" >
        <InfoIcon w="18px" h="18px" color={'blue.500'} mt="15px" ml="20px"/>
        <Text fontSize='md' ml="50px" mt="-21px">Provide Brand Sales Information</Text>
      </Box>
    </>
  );
}

export default Header;
