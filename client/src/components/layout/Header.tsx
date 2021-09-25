import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import AccessibleLink from "components/AccessibleLink";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <Flex
      as="header"
      width="full"
      align="center"
      justifyContent="flex-end"
      alignItems="center"
      pb={4}
    >
      <Box marginRight="auto">
        <AccessibleLink href="/">
          <Heading as="h1" size="md">
            Nemo
          </Heading>
        </AccessibleLink>
      </Box>

      {/* {window.location.pathname !== "/create-post" && ( */}
      <Box mr={8}>
        <AccessibleLink href="/create-post">
          <Text colorScheme="cyan"> Create Post </Text>
        </AccessibleLink>
      </Box>
      {/* )} */}

      <Box mr={8}>
        <AccessibleLink href="/auth">
          <Text colorScheme="orange"> Sign In </Text>
        </AccessibleLink>
      </Box>

      <Box mr={4}>
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
