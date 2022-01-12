/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import { InterviewCard } from 'Components/InterviewCard';
import { FormPlanning } from 'Components/FormPlanning';

const InterviewCardData = {
    img: 'https://picsum.photos/300',
    companyName: 'Platzi',
    country: 'Mexico',
    dateWorking: new Date(),
    workers: 100,
    rating: 4.5,
    description: 'Lorem ipsum',
    interviewTitle: 'Title',
    dateMeeting: new Date(),
    location: 'https://zoom.us/',
    hour: new Date(),
    platform: 'zoom',
    interviewDescription:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, sit ratione reiciendis non sunt error assumenda eius doloribus, fugit quia consectetur, voluptas excepturi temporibus alias magnam. Modi sint tempore aperiam.',
};

export const InterviewPlanning = () => {
    return (
        <div>
            <FormPlanning />
            <InterviewCard {...InterviewCardData} />
        </div>
    );
};
