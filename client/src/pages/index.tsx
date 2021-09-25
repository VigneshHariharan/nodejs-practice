import { Box, Flex } from "@chakra-ui/react";
import  Sidebar  from 'components/layout/Sidebar'
import Editor from 'components/editor'

const Home = () => {
  return (
    <Box as="main" width="100%">
      <Flex flexDir="row" width="100%">
        <Sidebar />
        <Box width="100%">
          <Editor />
        </Box>
      </Flex>
    </Box>
  );
};

export default Home;
