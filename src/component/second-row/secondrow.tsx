import React from 'react';
import Boxs from '../boxs/boxs.component';
import Heading from '../heading/heading';
import Paragraph from '../paragraph/paragraph';

const SecondRow = () => {
    const modle = [
        { src: 'images/Circle Layer.jpg', title: 'Enviromental Law', paragraph: "Environmental legal issues might occur since the planned business activities are designed" },
        { src: 'images/Bag.jpg', title: 'Corporate and Commercial', paragraph: "We provide a complete range of services for the continuity of your business activities." },
    ]
    const modle2 = [
        { src: 'images/Rocket.jpg', title: 'Information and Technology', paragraph: "IT not followed by the existing regulation which might cause legal uncertainty and business uncertainty." },
        { src: 'images/User Arrows.jpg', title: 'Other Services', paragraph: "In dealing with disruptive economic and legal challenge, our firm also provide various legal services." },
    ]
    return (
        <div className='bg-backgerond2'>
        <div className='grid grid-cols-1 container mx-auto md:grid-cols-3 md:container md:gap-8 md:mx-auto'>
            <div className='ml-12 mt-24'>
                <Heading title='Why do we help' className='text-4xl text-gray-800' />
                <Heading title='with legalization?' className='text-4xl text-gray-800 mt-4' />
                <Paragraph title='We are here for UMKM in Indonesia' className='text-sm md:mt-12 text-xl text-gray-500' />
                <Paragraph title='to carry out the legalization process,' className='text-sm md:mt-2 text-xl text-gray-500' />
                <Paragraph title='which is sometimes complicated.' className='text-sm md:mt-2 text-xl text-gray-500' />
            </div>
            <div className='md:col-span-2 mt-12 space-y-8 mb-24'>
                <div className='flex space-x-8'>
                    <Boxs classNmae='w-2/5' model={modle} />
                </div>
                <div className='flex space-x-8'>
                    <Boxs classNmae='w-2/5' model={modle2} />
                </div>
            </div>
        </div>
        </div>
    );
};


export default SecondRow;