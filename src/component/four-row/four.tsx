import React from 'react';
import Boxs from '../boxs/boxs.component';
import Heading from '../heading/heading';
import ProfileTitle from '../profiletitle/profiletitle';

const FourRow = () => {
    const modle = [
        { title: 'Incredible Experience', paragraph: "We had an incredible experience working with Landify and were impressed they made such a big difference in only three weeks. Our team is so grateful for the wonderful improvements they made and their ability to get familiar with the concept so quickly." },
    ]
    const modle2 = [
        { title: 'Dependable, Responsive, Professional Partner', paragraph: "Fermin Apps has collaborated with Landify team for several projects such as Photo Sharing Apps and Custom Social Networking Apps. The experience has been pleasant, professional and exceeding our expectations. " },
    ]
    return (
        <div className='bg-backgerond2'>
        <div className='container mx-auto grid'>
            <Heading textalign='text-center' title='Clients Testimonial' className='text-4xl text-gray-800 mt-24' />
            <div className='grid grid-cols-1 mb-8 justify-items-center mt-8 md:grid-cols-2 mt-8 mb-8'>
                <div className='space-y-6'>
                    <Boxs classNmae='w-10/12 m-auto text-center' model={modle} />
                    <ProfileTitle title='Anya Tailor Joy' matn='CEO, SF Industires' src='/images/Photo.SVG' />
                </div>
                <div className='space-y-6'>
                    <Boxs classNmae='w-10/12 m-auto text-center' model={modle2} />
                    <ProfileTitle title='Sri Alam' matn='CEO, Membagongkan GROUP' src='/images/Photo.SVG' />
                </div>
            </div>
        </div>
        </div>
    );
};

export default FourRow;