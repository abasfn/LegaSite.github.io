import React from 'react';
import BottomMenu from '../bottom-menu/bottommenu';
import Heading from '../heading/heading';

const SixRow = () => {
    return (
        <div className='bg-danger'>
            <div className='grid justify-items-center container mx-auto grid-cols-1 md:grid-cols-2 md:justify-items-stretch md:container  md:mx-auto'>
                <div className='flex h-12 mt-12'>
                <img className='mt-0' width='55px' height='55px' src='images/Logowhite.svg' />
                <Heading title='Lawliet' className='text-xl text-white ml-2 mt-2' />
                </div>
                <div className='flex flex-col mt-12 mb-12 md:flex-row md:justify-between'>
                <BottomMenu title='Product' farstLink='Overview' secondLink='Features' ThirdLink='Tutorials' fourthLink='Pricing' fifthLink='Releases'/>
                <BottomMenu title='Company' farstLink='About' secondLink='Press' ThirdLink='Careers' fourthLink='Contact' fifthLink='Partners'/>
                <BottomMenu title='Support' farstLink='Help Center' secondLink='Terms of service' ThirdLink='Legal' fourthLink='Privacy Policy' fifthLink='Status'/>
                </div>
            </div>
        </div>
    );
};

export default SixRow;