// src/components/Layouts/Header.jsx
import React from 'react';
import {
    Text,
    Button,
    Image,
    Heading,
    Stack,
    Flex,
    Box,
    Container,
} from '@chakra-ui/react';
import { ReactTyped } from 'react-typed';
import hero from '../../images/manOnTable.svg';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Firebase';
import { toast } from 'react-toastify';
import '../../App.css'; // Ensure this import path is correct

const Header = () => {
    const [user] = useAuthState(auth);

    const handleBuildResumeClick = () => {
        if (!user) {
            toast.error("Oops! You are not signed in.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            window.location.href = '#builder';
        }
    };

    return (
        <>
            <Container maxW='8xl' as='main' className="animated-background">
                <Stack
                    py={{ base: 8, md: 20 }}
                    spacing={{ base: 4, md: 10 }}
                    direction={{ base: 'column', md: 'row' }}
                    align='center'
                >
                    <Stack flex={1} direction={'column'} spacing={4}>
                        <Heading
                            fontSize={{ base: '3xl', md: '5xl' }}
                            bgGradient="linear(to-r, crimson, #e3405f)"
                            bgClip="text"
                        >
                            <ReactTyped
                                strings={[
                                    'Your career journey starts here..',
                                    'ResGen: Your resume expert!',
                                    'ResGen: Build. Design. Succeed..',
                                    'Welcome to ResGen!',
                                    'Get hired faster with ResGen!',
                                    'Creating a resume is now simple!',
                                    'Craft a standout resume effortlessly..',
                                    'Getting a JOB is now EASY!',
                                ]}
                                typeSpeed={30}
                                backSpeed={30}
                                loop
                            />
                        </Heading>

                        <Text color={'white'} lineHeight={1.7} fontSize={{ base: 'lg', md: 'xl' }} style={{ fontFamily: 'Poppins'}}>
                            Forget spending hours formatting your resume, or choosing complimentary fonts for your cover letter. Creating a resume online with ResGen's free resume builder will give you a sleek and attractive resume, without the fuss.
                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'column', sm: 'row' }}
                        >
                            <Button
                                rounded={'md'}
                                size={'lg'}
                                px={6}
                                colorScheme={'pink'}
                                onClick={handleBuildResumeClick}
                                sx={{
                                    animation: 'pulse 2s infinite',
                                    transition: 'transform 0.2s',
                                    _hover: {
                                        transform: 'scale(1.1)',
                                    },
                                }}
                            >
                                Build Resume
                            </Button>
                        </Stack>
                    </Stack>

                    <Flex flex={1}>
                        <Box
                            position={'relative'}
                            height={'400px'}
                            width={'full'}
                            overflow={'hidden'}
                        >
                            <Image
                                alt={'Hero Image'}
                                fit={'contain'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={hero}
                                draggable='false'
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </>
    );
}

export default Header;
