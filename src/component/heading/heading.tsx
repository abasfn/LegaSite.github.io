import React from 'react';

type headingType = {
    title?: string;
    className?: string;
    textalign?: 'text-left' | 'text-center' | 'text-right' | undefined;
}
const Heading = (props: headingType) => {
    const className = props.className + ' ' + props.textalign;
    return (
        <p className={className}><b>{props.title}</b></p>
    );
};

export default Heading;