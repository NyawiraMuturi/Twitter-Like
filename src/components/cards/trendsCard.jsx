import { Box, Card, HStack, Text, Spacer, Icon, Heading } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons';
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import React from 'react'

const TrendsCard = () => {
    const trendsArray = new Array(5).fill(null);
    return (
        <Card variant='filled' p={2}>
            <HStack>
                <Heading fontSize='md' py={2}>Trending for you</Heading>
                <Spacer />
                <SettingsIcon />
            </HStack>
            <Box className="card-content">
                {trendsArray.map((index) => (
                    <Box key={index} className="empty-item" py={2}>
                        <HStack>
                            <Text fontSize={'xs'} color='#393B41'>Trending in Germany</Text>
                            <Spacer />
                            <Icon as={HiOutlineDotsHorizontal} />
                        </HStack>
                            Revolution {index}
                        <Text fontSize={'xs'} color='#393B41'>50.4k Tweets</Text>
                    </Box>
                ))}
            </Box>

            <Text color='primary.accent'>Show More</Text>

        </Card>
    )
}

export default TrendsCard