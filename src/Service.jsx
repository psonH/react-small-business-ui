import React from 'react'
import { Card } from './Card'
import s1 from './images/s1.jpg'
import s2 from './images/s2.jpg'
import s3 from './images/s3.jpg'
import s4 from './images/s4.jpg'

export const Service = () => {
    const cardImg = [
        {
            title: "Android Development",
            imgSrc: s1
        },
        {
            title: "Web Development",
            imgSrc: s3
        },
        {
            title: "Digital Marketing",
            imgSrc: s2
        },
        {
            title: "Graphic Designing",
            imgSrc: s4
        },
        {
            title: "Portfolio Management",
            imgSrc: s1
        },
        {
            title: "Data Science & Analytics",
            imgSrc: s3
        }
    ]
    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Our Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                cardImg.map((card, idx) => {
                                    return <Card key={card.title} title={card.title} imgSrc={card.imgSrc} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>   
    )
}
