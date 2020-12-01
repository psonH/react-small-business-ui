import React, { useState } from 'react'

export const Contact = () => {
    const [data, setData] = useState({
        fullname: '',
        email: '',
        phone: '',
        message: ''
    })

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setData((preVal) => {
            return {
                ...preVal,
                [name]: value
            }
        }) 
    }

    const formSubmit = (e) => {
        e.preventDefault();
        alert(`Hi!! My name is ${data.fullname} and you can contact me at ${data.phone} or mail me at ${data.email}. Here is what I have to say: ${data.message}`);
    }

    return (
        <>
            <div className="my-5 ">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container mb-5">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="What's your good name?" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Ex: john.doe@gmail.com" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Contact Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" name="phone" value={data.phone} onChange={InputEvent} placeholder="How can we contact you?" required/>
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name="message" value={data.message} onChange={InputEvent} placeholder="What's in your mind?" required></textarea>
                            </div>
                            <div class="col-12">
                                <button class="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
