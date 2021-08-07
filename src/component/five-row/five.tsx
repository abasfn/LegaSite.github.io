import React from 'react';
import Heading from '../heading/heading';
import Paragraph from '../paragraph/paragraph';

const FiveRow = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-1 container md:grid-cols-4 md:container md:mx-auto'>
                <div className='col-span-3 ml-12'>
                    <Heading  title='Complex Questions?' className='text-4xl text-gray-800 mt-20' />
                    <Paragraph title='Request for a personalized budget for your legal problem. We will send you a coupe options in 24 hours. You can have free consult , if a our first customer' className='text-sm md:mt-4 text-xl text-gray-500' />
                </div>
                <div>
                    <img className='w-full h-full' src='images/h1RW-NFtUyc.jpg'/>
                </div>
            </div>
        </div>
    );
};

export default FiveRow;