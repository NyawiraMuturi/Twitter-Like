import { Box, Card } from '@chakra-ui/react'
import React from 'react'

const TrendsCard = () => {
    const trendsArray = new Array(9).fill(null);
    return (
        <Card variant='filled' p={2}>
            <div className="card-content">
                {/* Map over the emptyItemsArray to create empty items */}
                {trendsArray.map(( index) => (
                    <div key={index} className="empty-item">
                        Empty Item {index + 1}
                    </div>
                ))}
            </div>

        </Card>
    )
}

export default TrendsCard