import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex as="footer" width="full" align="center">
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href="vignesh.tech" isExternal>
          vignesh.tech
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
