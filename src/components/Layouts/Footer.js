import {
    Text,
    Stack,
    Box,
    Container,
    useColorModeValue,
    IconButton,
    HStack,
    VStack,
  } from '@chakra-ui/react';
  import { FaFacebook, FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
  import { motion } from 'framer-motion';
  
  const Footer = () => {
    const MotionBox = motion(Box);
  
    return (
      <MotionBox
        bg="linear-gradient(90deg, #D3D3D3, #A9A9A9, #D3D3D3)"
        backgroundSize="300% 300%"
        animation="gradient 10s ease infinite"
        color="white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        py={10}
        sx={{
          '@keyframes gradient': {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        }}
      >
        <Container centerContent>
          <VStack spacing={5}>
            <Stack fontWeight="medium" textAlign="center">
              <Text color="#000000"fontSize="lg">ResGen | &copy; 2022. All rights reserved.</Text>
              <Text color="#000000"fontSize="sm">Your go-to resume generator for creating professional resumes effortlessly.</Text>
            </Stack>
            <HStack spacing={5}>
              <IconButton
                as="a"
                href="https://facebook.com"
                aria-label="Facebook"
                icon={<FaFacebook />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{
                  color: '#4267B2', // Facebook blue
                  transform: 'scale(1.2)',
                  border: '2px solid #4267B2',
                }}
                transition="all 0.3s ease-in-out"
              />
              <IconButton
                as="a"
                href="https://twitter.com"
                aria-label="Twitter"
                icon={<FaTwitter />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{
                  color: '#1DA1F2', // Twitter blue
                  transform: 'scale(1.2)',
                  border: '2px solid #1DA1F2',
                }}
                transition="all 0.3s ease-in-out"
              />
              <IconButton
                as="a"
                href="https://linkedin.com"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{
                  color: '#0077B5', // LinkedIn blue
                  transform: 'scale(1.2)',
                  border: '2px solid #0077B5',
                }}
                transition="all 0.3s ease-in-out"
              />
              <IconButton
                as="a"
                href="https://github.com"
                aria-label="GitHub"
                icon={<FaGithub />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{
                  color: '#333', // GitHub black
                  transform: 'scale(1.2)',
                  border: '2px solid #333',
                }}
                transition="all 0.3s ease-in-out"
              />
              <IconButton
                as="a"
                href="https://instagram.com"
                aria-label="Instagram"
                icon={<FaInstagram />}
                variant="ghost"
                size="lg"
                isRound
                _hover={{
                  color: '#E4405F', // Instagram pink
                  transform: 'scale(1.2)',
                  border: '2px solid #E4405F',
                }}
                transition="all 0.3s ease-in-out"
              />
            </HStack>
          </VStack>
        </Container>
      </MotionBox>
    );
  };
  
  export default Footer;
  