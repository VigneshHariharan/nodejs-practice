import { useEffect } from "react";
import { Box, Spinner, List, ListItem, Text } from "@chakra-ui/react";
import SomeText from "components/SomeText";
import SomeImage from "components/SomeImage";
import CTASection from "components/CTASection";
import { useQuery } from "react-query";
import { fetchFeeds } from "dataHandler";

const Home = () => {
  const { data, isLoading } = useQuery("feeds", fetchFeeds);

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Box mb={8} w="full">
      <List spacing={6} dropShadow="outline">
        {data?.notes?.map((note: any) => (
          <ListItem key={note?.id} noOfLines={5}>
            <Text fontSize="x-large" fontWeight="semibold">
              {note?.title}
            </Text>
            <Text fontSize="medium">{note?.content}</Text>
          </ListItem>
        ))}
      </List>

      {/* <CTASection /> */}
    </Box>
  );
};

export default Home;
