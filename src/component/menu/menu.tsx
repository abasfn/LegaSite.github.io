import React from 'react';
import Heading from '../heading/heading';
import Paragraph from '../paragraph/paragraph';

const Menu = () => {
    return (
        <div>
        <div className='container mx-auto grid grid-cols-1 md:container md:grid-cols-3 md:mx-auto'>
            <div className='flex'>
                <img src='images/Logo.svg' />
                <Heading title='Lawliet' className='text-xl ml-2 mt-3' />
            </div>
            <div className='flex flex-col mt-4 md:flex-row md:col-span-2 flex md:justify-between '>
                    <ul className='flex mt-1 justify-between mb-4'>
                        <Paragraph title='CONTACT' className='text-sm mr-4 md:mr-12' />
                        <Paragraph title='TESTIMONIALS' className='text-sm mr-4 md:mr-12' />
                        <Paragraph title='ABOUT' className='text-sm mr-4 md:mr-12' />
                        <Paragraph title='TERMS' className='text-sm mr-4 md:mr-12' />
                    </ul>
                    <div className='col-span-2 md:mr-16 mt-1'>
                        <img className='m-auto' src='images/Vector.svg' />
                    </div>
            </div>
        </div>
        </div>
    );
};

export default Menu;