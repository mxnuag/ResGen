import React from 'react';
import { Stack, Flex, Heading, Spacer, HStack } from "@chakra-ui/react";
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const handleTextClick = () => {
        window.location.reload(); // Reload the page when text is clicked
    };

    return (
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
                    {/* Add any additional nav items or icons here */}
                </HStack>
            </Flex>
        </Stack>
    );
};

export default Navbar;
