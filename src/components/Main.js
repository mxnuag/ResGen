import React, { useEffect } from 'react';
import {
  Box,
  Container,
  Stack,
  Heading,
  Button,
  useBreakpointValue,
} from '@chakra-ui/react';
import Builder from './Builder';
import ResumePreview from './ResumePreview';
import ThemeSelect from './Theme/ThemeSelect';
import { useReactToPrint } from 'react-to-print';
import { useResume } from '../Context';
import { MdOutlineFileDownload } from 'react-icons/md';
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS
import '../App.css'; // Ensure this path is correct

const Main = () => {
  const { printElem } = useResume();

  const handlePrint = useReactToPrint({
    content: () => printElem.current,
  });

  // Adjust the spacing based on screen size
  const containerSpacing = useBreakpointValue({ base: 2, md: 12 });
  const stackDirection = useBreakpointValue({ base: 'column', md: 'row' });

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with default duration
  }, []);

  return (
    <Container
      className="gradient-background" // Apply gradient background
      minW="full"
      py={10}
      id="builder"
      maxW="full"
      centerContent
      pt="80px" // Add padding to ensure content is not hidden behind fixed heading
      data-aos="fade-up" // Add AOS animation data attribute
      data-aos-delay="300" // Optional: delay the animation
    >
      <Box className="heading-container" data-aos="fade-up" data-aos-delay="200">
        <Box className="heading-background"></Box>
        <Heading
          as="h4"
          size="lg"
          textAlign="center"
          className="heading-text"
          style={{ fontFamily: 'Poppins' }}
          fontWeight="medium"
          mb={6}
        >
          Dashboard
        </Heading>
      </Box>

      <Container
        className="inner-gradient-background"
        maxW="7xl"
        px={8}
        my={3}
      >
        <Stack
          justifyContent="space-between"
          direction={{ base: 'column', sm: 'row' }}
          spacing={4}
          mb={8}
        >
          <ThemeSelect />
          <Button
            rightIcon={<MdOutlineFileDownload />}
            onClick={handlePrint}
            colorScheme="pink"
            variant="solid"
            size="lg"
            px={6}
            py={4}
            _hover={{ bg: '#e3405f', transform: 'scale(1.05)' }}
            _active={{ bg: '#e3405f', transform: 'scale(0.95)' }}
            transition="background-color 0.3s ease, transform 0.2s ease"
          >
            Download
          </Button>
        </Stack>
      </Container>

      <Stack
        direction={stackDirection}
        gap={4}
        mx={containerSpacing}
        my={8}
        alignItems="flex-start"
        justifyContent="space-between"
        spacing={8}
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Builder />
        <ResumePreview />
      </Stack>
    </Container>
  );
};

export default Main;
