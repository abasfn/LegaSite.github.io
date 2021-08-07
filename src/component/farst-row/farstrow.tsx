import React from 'react';
import Heading from '../heading/heading';
import Paragraph from '../paragraph/paragraph';

const FarstRow = () => {
    return (
        <div className='bg-backgerond'>
        <div className='grid grid-cols-1 mx-auto container md:grid-cols-3 md:container md:mx-auto md:mt-8'>
            <div className='md:col-span-2 ml-12 mt-24'>
                <div>
                    <Heading title='Your Solution' className='text-5xl md:text-8xl text-primary' />
                    <Heading title='Legal Consultacy' className='text-5xl md:text-8xl  text-primary mt-4' />
                    <Paragraph title='We are here to help you take care of your legality' className='text-2xl mt-12 md:mt-12 md:text-2xl text-gray-800' />
                    <Paragraph title='with the best service especially for you.' className='text-2xl mt-2 md:mt-2 text-2xl text-gray-800' />
                    <button className='mt-12 border rounded-md p-5 bg-primary text-white'>GET STARTED</button>
                </div>
                <div className='space-y-10 mb-8'>
                    <Paragraph title='Trusted by 10+ companies in indonesia' className='text-2xl mt-16 md:mt-16 md:text-2xl text-gray-500' />
                    <img src='images/LogoMororgar.svg' />
                </div>
            </div>
            <div>
                <img src='images/body.svg' />
            </div>
        </div>
        </div>
    );
};

export default FarstRow;