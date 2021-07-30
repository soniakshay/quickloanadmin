import React, { useEffect, useState } from 'react';
import { URL } from '../action/config';
import axios from 'axios';
import resposneHandler from '../action/responseHnadler';

function UserDetail({match}) {
    const [order, setOrder] = useState(null);

    useEffect(()=>{
        fetchOrderDetail();
    },[]);


    const fetchOrderDetail = async () => {
        if(localStorage.getItem('token')) {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'access-token': localStorage.getItem('token')
                    }
                }
                console.log(JSON.parse(localStorage.getItem('userDetail')));
                setOrder(JSON.parse(localStorage.getItem('userDetail')));
            } catch(e) {
                // network errror
            }
        } else {
            // invalid user
        }
    }

    return (
        <main>

                <div className="container pt-150">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center pt-50">
                                <h2>User Information</h2>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="apply-area pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="apply-wrapper">
                                <div className="col-12 user_card text-start mt-5">
                                    {/* <h3>User</h3> */}
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            {order && order.data && <img src={order.profile_pic} className="img-fluid" />}
                                        </div>
                                        <div className="col-12 col-md-6">
    {order && order.data && <div className="mt-2 text-start">Name: <b>{order.data.name}</b></div>}
    {order && order.data && <div className="mt-2 text-start">Email: <b>{order.data.email}</b></div>}
    {order && order.data && <div className="mt-2 text-start">Phone: <b>{order.data.phone}</b></div>}
    {order && order.data && <div className="mt-2 text-start">Gender: {order.data.gender}</div>}
    {order && order.data && <div className="mt-2 text-start">Date of birth: <b>{new Date(order.data.dob).getDate() +'/'+(new Date(order.data.dob).getMonth() + 1) +'/'+new Date(order.data.dob).getFullYear()}</b></div>}
    {order && order.data && <div className="mt-2 text-start">Employment type: <b>{order.data.employment_type}</b></div>}
    {order && order.data && <div className="mt-2 text-start">Income: <b>{order.data.income}</b></div>}
    {order && order.data && <div className="mt-2 text-start">Marital status: <b>{order.data.marital_status}</b></div>}
    {order && order.data && <div className="mt-2 text-start">City: <b>{order.data.city ? order.data.city : '-' }</b></div>}
    {order && order.data && <div className="mt-2 text-start">State: <b>{order.data.state ? order.data.state : '-' }</b></div>}
    {order && order.data && <div className="mt-2 text-start">Pincode: <b>{order.data.pincode}</b></div>}
    {order && order.data && <div className="mt-2 text-start">Profession: <b>{order.data.profession}</b></div>}
    {order && order.data && <div className="mt-2 text-start">Required loan amount: <b>{order.data.required_loan_amount ? order.data.required_loan_amount : 0 }</b></div>}
    {order && order.data && <div className="mt-2 text-start">Household liabilities: <b>{order.data.household_liabilities ? order.data.household_liabilities : 0 }</b></div>}
    {order && order.data && <div className="mt-2 text-start">PAN number: <b>{order.data.pan_card_number ? order.data.pan_card_number : '-' }</b></div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    
    )
}

export default UserDetail
