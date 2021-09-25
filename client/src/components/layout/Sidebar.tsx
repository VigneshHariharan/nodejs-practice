import { useQuery } from "react-query";
import { fetchFeeds } from "dataHandler";
import { Box, Spinner, List, ListItem, Text, Heading, Flex, Icon } from "@chakra-ui/react";

import AccessibleLink from "components/AccessibleLink";
import { CloseIcon } from "@chakra-ui/icons";

function Sidebar(){
    const { data, isLoading } = useQuery("feeds", fetchFeeds);

    if (isLoading) {
      return <Spinner />;
    }

    return (
      <List
        spacing={1}
        dropShadow="outline"
        width={300}
        backgroundColor="gray.700"
        height="100vh"
        pt={4}
        style={{
          position: "sticky",
          top: 0,
        }}
      >
        <Flex justifyContent='space-between' pr={2}>
          <Box>
            <AccessibleLink href="/">
              <Heading as="h1" size="md">
                Nemo
              </Heading>
            </AccessibleLink>
          </Box>
          <Box onClick={() => {
            console.log('close')
          }}>
           <CloseIcon  bgSize='cover' _hover={{cursor:'pointer' }} />
          </Box>

        </Flex>

        {data?.notes?.map(
          (note: any) =>
            note?.title && (
              <ListItem
                key={note?.id}
                noOfLines={5}
                p={1}
                _hover={{ backgroundColor: "rgba(4,4,4,0.9)" }}
                style={{
                  cursor: "pointer",
                }}
              >
                <Text fontSize="small" fontWeight="semibold" noOfLines={1}>
                  {note?.title}
                </Text>
                {/* <Text fontSize="medium">{note?.content}</Text> */}
              </ListItem>
            )
        )}
      </List>
    );
}

export default Sidebar;