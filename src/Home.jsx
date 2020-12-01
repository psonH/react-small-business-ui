import React from 'react'
import { Common } from './Common';
import web from "./images/frontend-development.png";

export const Home = () => {
    return (
        <>
            <Common title="Grow your business with" visit="/services" btnName="Get Started" imgSrc={web} />
        </>
    )
}
