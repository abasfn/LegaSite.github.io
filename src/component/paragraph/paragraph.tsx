import React from 'react';

type paragraphType = {
    title?:string;
    className?:string;
    textalign?: 'text-left' | 'text-center' | 'text-right' | undefined;
}
const Paragraph = (props:paragraphType) => {
    const className = props.className + ' ' + props.textalign;
    return (
        <p className={className}>{props.title}</p>
    );
};

export default Paragraph;