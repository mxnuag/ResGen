import React from 'react';
import { Stack, Flex, Heading, Spacer, HStack, Button, useDisclosure, Box } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactUsModal from '../ContactUsModal'; // Ensure this import is correct

const Navbar = () => {
    const handleTextClick = () => {
        window.location.reload(); // Reload the page when text is clicked
    };

    const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for modal

    return (
        <>
            <Stack
                p={5}
                bg={'#1D1D1D'}
                as='header'
            >
                <Flex
                    w='full'
                    alignItems={'center'}
                >
                    <Heading 
                        as='h3' 
                        ml={{ base: 0, sm: 8 }} 
                        size='lg' 
                        fontWeight={'thin'} 
                        color='#e3405f' 
                        style={{ fontFamily: "Arial, sans-serif" }} // Change font here
                        cursor="pointer"
                        _hover={{
                            transform: 'scale(1.1)', // Increase size on hover
                            transition: 'transform 0.3s ease-in-out' // Smooth transition
                        }}
                        onClick={handleTextClick} // Reload page on click
                    >
                        ResGen
                    </Heading>
                    <Spacer></Spacer>
                    <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                        <Button 
                            onClick={onOpen} 
                            colorScheme="pink" 
                            _hover={{ 
                                transform: 'scale(1.1)', // Increase size on hover
                                transition: 'transform 0.3s ease-in-out' // Smooth transition
                            }}
                        >
                            Contact Us
                        </Button>
                    </HStack>
                </Flex>
            </Stack>
            <Box id="main-content">
                {/* Your main content here */}
            </Box>
            <ContactUsModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Navbar;
