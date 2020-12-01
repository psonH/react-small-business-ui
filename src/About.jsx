import React from 'react'
import { Common } from './Common';
import web from "./images/about-development.png";

export const About = () => {
    return (
        <>
            <Common title="Know more about us" visit="/contact" btnName="Contact Now" imgSrc={web} /> 
        </>
    )
}
