import React, { useState } from 'react';
import axios from 'axios';
import resposneHandler from '../action/responseHnadler';
import { URL } from '../action/config';

function Login({history}) {
    const [ form, setForm ] = useState({ email: '', password: '' });

    const changeInput = ( e ) => {
        setForm({ ...form, [e.target.name] : e.target.value });
    }

    const submit = async () => {
        if( form.email && form.password ) {
            try {
                const response = await axios.post(`${URL}/user/adminLogin`, form);
                console.log(response.data);
                const user = await resposneHandler(response.data);
                //success login
                
                //check is user admin
                if(user.user.is_admin) {
                    console.log(user);
                    localStorage.setItem('token', user.token);
                    localStorage.setItem('user', user);
                    history.push('/')
                } else {
                    // invalid user
                    alert('Only admin have access to login.')
                }
            } catch(e) {
                // error in login
                if(e.response){
                    // api error
                    console.log(e.response.data.data[0].msg[0].msg);
                    // alert()
                } else {
                    // netowork error
                    alert(JSON.stringify(e));
                }
            }
        } else {
            //validation error
            alert('Email and passwords are required!');
        }
    }

    return (
        <main>

            <div className="hero-area2  slider-height2 hero-overly2 d-flex align-items-center ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center pt-50">
                                <h2>Login</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="apply-area pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="apply-wrapper">

                                <form action="#">
                                    <div className="">





                                        <div className="col-lg-6 m-auto">
                                            <div className="single-form">
                                                <label>* Email Adderess</label>
                                                <input type="email" name="email" value={form.email} onChange={(e)=>changeInput(e)} placeholder="Enter E-mail" />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 m-auto">
                                            <div className="single-form">
                                                <label>* Password</label>
                                                <input type="password" name="password" value={form.password} onChange={(e)=>changeInput(e)} placeholder="Enter Password" />
                                            </div>
                                        </div>



                                    </div>
                                </form>


                                <a className="btn apply-btn mt-30" onClick={()=>submit()}>Sign In </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    )
}

export default Login
