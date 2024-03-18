import React from "react";
import { Box, Flex, Heading, Text, Input, Button, VStack, HStack, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaPlus, FaHome, FaBook, FaUser, FaBars } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      {/* Header */}
      <Flex as="header" bg="#00BFFF" px={5} py={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" color="white" fontSize="2xl">
          SMARTLIBRARY
        </Heading>
        <HStack spacing={4}>
          <Input placeholder="Search..." bg="white" width="300px" height="40px" borderRadius="md" />
          <Button bg="white" size="sm" borderRadius="50%">
            <Icon as={FaPlus} color="#00BFFF" />
          </Button>
        </HStack>
      </Flex>

      <Flex>
        {/* Left Sidebar */}
        <VStack as="nav" bg="#E0FFFF" width="100px" py={5} spacing={8} alignItems="center">
          <Icon as={FaHome} boxSize={10} />
          <Icon as={FaBook} boxSize={10} />
          <Icon as={FaUser} boxSize={10} />
          <Icon as={FaBars} boxSize={10} />
        </VStack>

        <Flex flex={1}>
          {/* Left Column */}
          <VStack bg="#E0FFFF" width="25%" p={5} spacing={4}>
            <Heading as="h2" size="lg">
              Category 1
            </Heading>
            <Button width="200px" height="40px" borderWidth={1} borderColor="#00CED1" borderRadius="md">
              Item 1
            </Button>
            <Button width="200px" height="40px" borderWidth={1} borderColor="#00CED1" borderRadius="md">
              Item 2
            </Button>

            <Heading as="h2" size="lg">
              Category 2
            </Heading>
            <Button width="200px" height="40px" borderWidth={1} borderColor="#00CED1" borderRadius="md">
              Item 1
            </Button>
            <Button width="200px" height="40px" borderWidth={1} borderColor="#00CED1" borderRadius="md">
              Item 2
            </Button>
          </VStack>

          {/* Right Column */}
          <Grid templateColumns="repeat(2, 1fr)" gap={6} p={5} flex={1}>
            <GridItem bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">
                CARD 1
              </Heading>
              <VStack alignItems="start" mt={4} spacing={2}>
                <Text>• Item 1</Text>
                <Text>• Item 2</Text>
                <Text>• Item 3</Text>
              </VStack>
              <Button size="sm" colorScheme="blue" alignSelf="end" mt={4}>
                &gt; OPEN
              </Button>
            </GridItem>
            <GridItem bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">
                CARD 2
              </Heading>
              <VStack alignItems="start" mt={4} spacing={2}>
                <Text>• Item 1</Text>
                <Text>• Item 2</Text>
                <Text>• Item 3</Text>
              </VStack>
              <Button size="sm" colorScheme="blue" alignSelf="end" mt={4}>
                &gt; OPEN
              </Button>
            </GridItem>
            <GridItem bg="white" p={4} borderRadius="md" boxShadow="md">
              <Heading as="h3" size="md">
                CARD 3
              </Heading>
              <VStack alignItems="start" mt={4} spacing={2}>
                <Text>• Item 1</Text>
                <Text>• Item 2</Text>
                <Text>• Item 3</Text>
              </VStack>
              <Button size="sm" colorScheme="blue" alignSelf="end" mt={4}>
                &gt; OPEN
              </Button>
            </GridItem>
          </Grid>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Index;
