import React from 'react';
import Heading from '../heading/heading';
import Paragraph from '../paragraph/paragraph';
import Report from '../report/report';

const ThreeRow = () => {
    return (
        <div className='bg-danger'>
        <div className='container mx-auto p-0.5'>
            <Heading textalign='text-center' title='Some count that matters' className='text-4xl text-white mt-24' />
            <Paragraph textalign='text-center' title='Our achievement in the journey depicted in numbers' className='mt-4 mb-8 text-base text-white' />
            <Report />
        </div>
        </div>
    );
};

export default ThreeRow;