import React from 'react';
import Paragraph from '../paragraph/paragraph';

const SevenRow = () => {
    return (
        <div className='bg-backgerondFoter'>
            <div className='grid justify-items-center container mx-auto p-5 grid-cols-1 md:justify-items-stretch md:grid-cols-2 md:container md:p-5  md:mx-auto'>
                <div>
                    <Paragraph title='© 2021 Lawliet. All rights reserved' className='text-sm text-white' />
                </div>
                <div className='flex justify-end'>
                    <img className='ml-4' src='images/Social Icons1.svg' />
                    <img className='ml-4' src='images/Social Icons2.svg' />
                    <img  className='ml-4'src='images/Social Icons3.svg' />
                    <img className='ml-4' src='images/Social Icons4.svg' />
                </div>
            </div>
        </div>
    );
};

export default SevenRow;