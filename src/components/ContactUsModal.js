import React, { useState, useEffect } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
    Input,
    Textarea,
    useToast,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import '../App.css';

const ContactUsModal = ({ isOpen, onClose }) => {
    const [user_name, setUserName] = useState('');
    const [user_email, setUserEmail] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!user_name || !user_email || !message) {
            toast({
                title: 'Submission failed.',
                description: 'All fields are required. Please fill in all fields.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(user_email)) {
            toast({
                title: 'Invalid email.',
                description: 'Please enter a valid email address.',
                status: 'error',
                duration: 5000,
                isClosable: true,
            });
            return;
        }

        emailjs
            .send(
                'service_donlwi9', // Replace with your EmailJS service ID
                'template_5t9l6do', // Replace with your EmailJS template ID
                { user_name, user_email, message },
                'wfcba2h0865NYkv4D' // Replace with your EmailJS public key
            )
            .then(
                () => {
                    toast({
                        title: 'Form submitted.',
                        description: "We've received your message and will get back to you shortly.",
                        status: 'success',
                        duration: 5000,
                        isClosable: true,
                    });
                    setUserName(''); // Clear the name field
                    setUserEmail(''); // Clear the email field
                    setMessage(''); // Clear the message field
                    onClose();
                },
                (error) => {
                    toast({
                        title: 'Submission failed.',
                        description: 'An error occurred. Please try again.',
                        status: 'error',
                        duration: 5000,
                        isClosable: true,
                    });
                }
            );
    };

    useEffect(() => {
        if (!isOpen) {
            setUserName('');
            setUserEmail('');
            setMessage('');
        }
    }, [isOpen]);

    return (
        <Modal isOpen={isOpen} onClose={onClose} motionPreset="scale">
            <ModalOverlay />
            <ModalContent
                maxW="80%"
                p={6}
                bg="#2D2D2D"
                color="white"
                borderRadius="10px"
                boxShadow="0 0 20px rgba(0, 0, 0, 0.5)"
                _focus={{ outline: 'none' }}
                className="popup"
            >
                <ModalHeader>Contact Us</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <form onSubmit={handleSubmit}>
                        <Input
                            placeholder="Your Name"
                            mb={4}
                            value={user_name}
                            onChange={(e) => setUserName(e.target.value)}
                            isRequired
                        />
                        <Input
                            placeholder="Your Email"
                            mb={4}
                            value={user_email}
                            onChange={(e) => setUserEmail(e.target.value)}
                            isRequired
                        />
                        <Textarea
                            placeholder="Your Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            isRequired
                        />
                        <ModalFooter>
                            <Button colorScheme="pink" mr={3} type="submit">
                                Send
                            </Button>
                            <Button variant="ghost" onClick={onClose}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    </form>
                </ModalBody>
            </ModalContent>
        </Modal>
    );
};

export default ContactUsModal;
