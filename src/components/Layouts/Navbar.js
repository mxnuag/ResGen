// src/components/Layouts/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Stack, Flex, Heading, Spacer, HStack, Button, useDisclosure, Box } from "@chakra-ui/react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, signInWithGoogle, signOutFromGoogle } from '../../Firebase';
import { toast } from 'react-toastify';
import ContactUsModal from '../ContactUsModal';

const Navbar = ({ onOpenModal }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [user, loading] = useAuthState(auth);

    const handleTextClick = () => {
        window.location.reload();
    };

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

    useEffect(() => {
        if (user && !loading) {
            toast(`Welcome ${user.displayName || user.email}!`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [user, loading]);

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
                        style={{ fontFamily: "Arial, sans-serif" }}
                        cursor="pointer"
                        _hover={{
                            transform: 'scale(1.1)',
                            transition: 'transform 0.3s ease-in-out'
                        }}
                        onClick={handleTextClick}
                    >
                        ResGen
                    </Heading>
                    <Spacer></Spacer>
                    <HStack spacing={10} mr={{ base: 0, sm: 8 }} as='nav' style={{ fontFamily: 'Poppins' }}>
                        <Button 
                            onClick={onOpenModal} 
                            colorScheme="pink" 
                            _hover={{ 
                                transform: 'scale(1.1)',
                                transition: 'transform 0.3s ease-in-out'
                            }}
                        >
                            Contact Us
                        </Button>
                        {user ? (
                            <Button 
                                onClick={signOutFromGoogle} 
                                colorScheme="teal"
                                _hover={{
                                    transform: 'scale(1.1)',
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            >
                                Sign Out
                            </Button>
                        ) : (
                            <Button 
                                onClick={signInWithGoogle} 
                                colorScheme="blue"
                                _hover={{
                                    transform: 'scale(1.1)',
                                    transition: 'transform 0.3s ease-in-out'
                                }}
                            >
                                Sign In 
                            </Button>
                        )}
                    </HStack>
                </Flex>
            </Stack>
            <Box id="main-content" pt="80px">
                {/* Your main content here */}
            </Box>
        </>
    );
};

export default Navbar;
