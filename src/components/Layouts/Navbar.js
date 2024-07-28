import React, { useState, useEffect } from 'react';
import { Stack, Flex, Heading, Spacer, HStack, Button, useDisclosure, Box } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactUsModal from '../ContactUsModal'; // Ensure this import is correct

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleTextClick = () => {
        window.location.reload(); // Reload the page when text is clicked
    };

    const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for modal

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Stack
                p={isScrolled ? 7 : 5}
                height={isScrolled ? '100px' : '80px'}
                bg={isScrolled ? 'rgba(29, 29, 29, 0.9)' : '#1D1D1D'}
                as='header'
                position='fixed'
                width='100%'
                top='0'
                zIndex='10'
                transition='all 0.3s ease'
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
            <Box id="main-content" pt="80px">
                {/* Your main content here */}
            </Box>
            <ContactUsModal isOpen={isOpen} onClose={onClose} />
        </>
    );
};

export default Navbar;
