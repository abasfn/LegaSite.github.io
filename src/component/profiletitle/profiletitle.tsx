import React from 'react';
import Heading from '../heading/heading';
import Paragraph from '../paragraph/paragraph';

type profileTitleType = {
    src?: string;
    title?: string;
    matn?: string;
}
const ProfileTitle = (props: profileTitleType) => {
    return (
        <div className='flex justify-center space-x-4'>
            <div><img src={props.src} /></div>
            <div>
                <Heading textalign='text-left' title={props.title} className='text-gray-800 text-white' />
                <Paragraph textalign='text-left' title={props.matn} className='text-gray-500 text-base' />
            </div>
        </div>
    );
};

export default ProfileTitle;