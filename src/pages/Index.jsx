import React from "react";
import { Box, VStack, HStack, Heading, Text, Divider, Spacer, Input, Button, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaHome, FaMusic, FaSearch, FaList, FaUser, FaCompactDisc, FaTicketAlt, FaUsers, FaBook, FaUserCircle, FaEnvelope, FaNewspaper } from "react-icons/fa";

const NavItem = ({ icon, children, ...rest }) => {
  return (
    <HStack align="center" spacing={4} {...rest}>
      <Icon as={icon} boxSize={6} />
      <Text fontWeight="medium">{children}</Text>
    </HStack>
  );
};

const Index = () => {
  return (
    <HStack align="flex-start" spacing={0}>
      <VStack w="300px" h="100vh" bg="gray.100" p={8} spacing={4} align="stretch">
        <Heading size="lg" mb={8}>
          Music Website
        </Heading>
        <NavItem icon={FaHome}>Home</NavItem>
        <NavItem icon={FaMusic}>Browse Music</NavItem>
        <NavItem icon={FaSearch}>Search</NavItem>
        <NavItem icon={FaList}>Playlists</NavItem>
        <NavItem icon={FaUser}>Artists</NavItem>
        <NavItem icon={FaCompactDisc}>Albums</NavItem>
        <NavItem icon={FaTicketAlt}>Events/Tours</NavItem>
        <NavItem icon={FaUsers}>Community/Forum</NavItem>
        <NavItem icon={FaBook}>Music Theory/Resources</NavItem>
        <Spacer />
        <Divider />
        <NavItem icon={FaUserCircle}>User Profile</NavItem>
        <NavItem icon={FaEnvelope}>Contact/Support</NavItem>
        <NavItem icon={FaNewspaper}>Blog/News</NavItem>
      </VStack>
      <VStack flex={1} p={8} spacing={8} align="stretch">
        <Heading>Welcome to Music Website</Heading>
        <Text>Discover new music, connect with artists, and explore the world of melodies. Browse our extensive collection, create personalized playlists, and stay updated with the latest music news and events.</Text>
        <HStack>
          <Input placeholder="Search music..." />
          <Button colorScheme="blue">Search</Button>
        </HStack>
        <Heading size="lg">Featured Content</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={8}>
          <GridItem>
            <VStack align="stretch">
              <Image src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFsYnVtJTIwY292ZXJ8ZW58MHx8fHwxNzEwNDI5MjYyfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
              <Heading size="md">Top Hits</Heading>
              <Text>Check out the most popular songs right now.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="stretch">
              <Image src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGFydGlzdCUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMDQ2NTg2Mnww&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
              <Heading size="md">Rising Artists</Heading>
              <Text>Discover emerging talents in the music scene.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="stretch">
              <Image src="https://images.unsplash.com/photo-1470229538611-16ba8c7ffbd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGV2ZW50JTIwY3Jvd2R8ZW58MHx8fHwxNzEwNDY1ODYzfDA&ixlib=rb-4.0.3&q=80&w=1080" borderRadius="md" />
              <Heading size="md">Upcoming Events</Heading>
              <Text>Don't miss out on the hottest music events near you.</Text>
            </VStack>
          </GridItem>
        </Grid>
      </VStack>
    </HStack>
  );
};

export default Index;
