import { Button, Container, HStack } from "@chakra-ui/react";
import React from "react";
import { Flex, Text } from "@chakra-ui/react";
// import { CiSquarePlus } from "react-icons/ci";

import { useColorMode } from "@chakra-ui/react";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        height={16}
        align={"center"}
        justify={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          bgGradient="linear(to-l, cyan.400, blue.500)"
          bgClip="text"
          fontWeight="bold"
          textTransform="uppercase"
          textAlign="center"
        >
          <Link to="/">Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to="/create">
            <Button>
              <PlusSquareIcon />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
