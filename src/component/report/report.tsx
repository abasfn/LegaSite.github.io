import React from 'react';
import Heading from '../heading/heading';
import Paragraph from '../paragraph/paragraph';

const Report = () => {
    return (
        <div className='flex justify-center mb-12'>
            <div className='p-5'>
                <Heading textalign='text-center'  title='30' className='text-4xl text-white' />
                <Paragraph textalign='text-center'  title='Clients' className='text-white' />
            </div>
            <div className='border-l border-r mr-8 ml-8 p-5'>
                <Heading textalign='text-center' title='300+' className='text-4xl text-white' />
                <Paragraph textalign='text-center'  title='Taken business legalities' className='text-white' />
            </div>
            <div className='p-5'>
                <Heading textalign='text-center'  title='8' className='text-4xl text-white' />
                <Paragraph textalign='text-center'  title='Years of Journey' className='text-white' />
            </div>
        </div>
    );
};

export default Report;