import React from "react";
import { Link } from "react-router-dom";
import { Box, VStack, HStack, Heading, Text, Divider, Spacer, Input, Button, Image, Grid, GridItem, Icon } from "@chakra-ui/react";
import { FaHome, FaMusic, FaSearch, FaList, FaUser, FaCompactDisc, FaTicketAlt, FaUsers, FaBook, FaUserCircle, FaEnvelope, FaNewspaper, FaFacebook, FaInstagram, FaTwitter, FaApple, FaYoutube, FaTiktok } from "react-icons/fa";
import { SiAudiomack } from "react-icons/si";

const NavItem = ({ icon, children, to, ...rest }) => {
  return (
    <Link to={to}>
      <HStack align="center" spacing={4} {...rest}>
        <Icon as={icon} boxSize={6} />
        <Text fontWeight="medium">{children}</Text>
      </HStack>
    </Link>
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
        <Divider />
        <VStack spacing={4} align="stretch">
          <Text fontWeight="medium">Follow Us</Text>
          <NavItem icon={FaFacebook}>
            <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </NavItem>
          <NavItem icon={FaInstagram}>
            <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </NavItem>
          <NavItem icon={FaTwitter}>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
          </NavItem>
          <NavItem icon={FaApple}>
            <a href="https://music.apple.com/us/artist/yourartistname/id123456789" target="_blank" rel="noopener noreferrer">
              Apple Music
            </a>
          </NavItem>
          <NavItem icon={FaYoutube}>
            <a href="https://www.youtube.com/channel/yourchannelid" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </NavItem>
          <NavItem icon={SiAudiomack}>
            <a href="https://audiomack.com/artist/yourartistname" target="_blank" rel="noopener noreferrer">
              AudioMack
            </a>
          </NavItem>
          <NavItem icon={FaTiktok}>
            <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
              TikTok
            </a>
          </NavItem>
        </VStack>
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
              <Image src="https://i.ibb.co/cQ84r3t/top-hits.jpg" borderRadius="md" />
              <Heading size="md">Top Hits</Heading>
              <Text>Check out the most popular songs right now.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="stretch">
              <Image src="https://i.ibb.co/ypbKVJg/rising-artists.jpg" borderRadius="md" />
              <Heading size="md">Rising Artists</Heading>
              <Text>Discover emerging talents in the music scene.</Text>
            </VStack>
          </GridItem>
          <GridItem>
            <VStack align="stretch">
              <Image src="https://i.ibb.co/w4WK035/upcoming-events.jpg" borderRadius="md" />
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
