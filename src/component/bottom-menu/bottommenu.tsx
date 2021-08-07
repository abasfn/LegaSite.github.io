import React from 'react';
type bottomMenuType = {
    title?:string;
    farstLink?:string;
    secondLink?:string;
    ThirdLink?:string;
    fourthLink?:string;
    fifthLink?:string;
}
const BottomMenu = (props:bottomMenuType) => {
    return (
        <ul className='space-y-2'>
            <li className='text-white text-lg mb-4'>{props.title}</li>
            <li className='text-white text-sm'>{props.farstLink}</li>
            <li className='text-white text-sm'>{props.secondLink}</li>
            <li className='text-white text-sm'>{props.ThirdLink}</li>
            <li className='text-white text-sm'>{props.fourthLink}</li>
            <li className='text-white text-sm'>{props.fifthLink}</li>
        </ul>
    );
};

export default BottomMenu;