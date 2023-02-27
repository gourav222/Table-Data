import { Heading, Box, Text } from "@chakra-ui/react";
import { InfoIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

export function Container({ caption }: { caption: boolean }) {
  return (
    <Box w="1500px" h="50px" bg={"blue.100"} ml="18px">
      <InfoIcon w="18px" h="18px" color={"blue.500"} mt="15px" ml="20px" />
      <Text fontSize="md" ml="50px" mt="-21px">
        {caption ? "Sales Information" : "Provide Brand Sales Information"}
      </Text>
    </Box>
  );
}

function Header() {
  return (
    <>
      <Box w="1536px" h="60px" bg={"primary"} color={"white"}>
        <Heading as="h4" size="md" ml="100px" position="absolute" mt="15px">
          Brand Sales
        </Heading>
        <div className="Navigate">
          <Link className="links" to="/">
            Get Brand Sales Daily
          </Link>
          <Link className="links" to="/add">
            Add Brand Sales Daily
          </Link>
        </div>
      </Box>
    </>
  );
}

export default Header;
