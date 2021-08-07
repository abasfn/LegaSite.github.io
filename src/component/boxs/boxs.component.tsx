import React from 'react';
import Heading from '../heading/heading';
import Paragraph from '../paragraph/paragraph';
type model = {
    src?: string;
    title?: string;
    paragraph?: string;
}
type boxsType = {
    model: model[];
    classNmae?:string;
}
const Boxs = (props: boxsType) => {
    const className = 'p-5 w-2/5 bg-white rounded shadow-md' +' ' + props.classNmae;
    return (
        <>
            {props.model.map(item => {
                return (
                    <div className={className}>
                        <img src={item.src} />
                        <Heading title={item.title} className='text-xl text-gray-800 mt-4' />
                        <Paragraph title={item.paragraph} className='text-sm  md:mt-2 text-sm text-gray-500' />
                    </div>
                )
            })}
        </>
    );
};

export default Boxs;