import React, { useEffect, useState } from 'react';
import { URL } from '../action/config';
import axios from 'axios';
import resposneHandler from '../action/responseHnadler';

function OrderDetail({match}) {
    const [order, setOrder] = useState([]);

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
                const response = await axios.get(`${URL}/order/orderDetails/${match.params.order_id}`, config);
                const order = await resposneHandler(response.data);
                console.log(order);
                
                if(order) {
                    setOrder(order);
                }
            } catch(e) {
                // network errror
            }
        } else {
            // invalid user
        }
    }

    const submit = async (id, status, loan, msg) => {
        try {
            const config = {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    'access-token': localStorage.getItem('token')
                }
            }
            const payload = {
                order_id: id,
                status,
                approval_amount: loan, 
                message: msg
            };
            const response = await axios.post(`${URL}/order/order_status`, payload, config);
            const data = await resposneHandler(response.data);
            console.log(data)
            fetchOrderDetail();
            
        } catch (error) {
            console.log(error.response.data)
        }
    }
    const download = e => {
        console.log(e);
        fetch(e, {
          method: "GET",
          headers: {}
        })
          .then(response => {
            response.arrayBuffer().then(function(buffer) {
              const url = window.URL.createObjectURL(new Blob([buffer]));
              const link = document.createElement("a");
              link.href = url;
              link.setAttribute("download", "image.png"); //or any other extension
              document.body.appendChild(link);
              link.click();
            });
          })
          .catch(err => {
            console.log(err);
          });
      };

    return (
        <main>

                <div className="container pt-150">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center pt-50">
                                <h2>Order Information</h2>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="apply-area pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="apply-wrapper">
                                <div className="col-12 mb-5">
                                    <div className='row'>
                                        <div className="col-4 col-md-1 mt-3 approve_btn" onClick={()=>submit(order[0]._id, 'approved', order[0].data.loan_type, 'Congratulations! your request for loan application is successfully approved.')}>
                                            <span className="">Approve</span>
                                        </div>
                                        <div className="col-4 col-md-1 wait_btn mt-3" onClick={()=>submit(order[0]._id,'pending',order[0].data.loan_type, 'We got your loan application request, please wait admin will notify you.')}>
                                            Wait
                                        </div>
                                        <div className="col-5 col-md-2 sub_btn mt-3" onClick={()=> submit(order[0]._id, 'pending', order[0].data.loan_type, 'Submit you income tax return files and bank statement through e-mail. Once your documents are received, we will start the process.')}>
                                            Submit Docs
                                        </div>
                                        <div className="col-4 col-md-1 reject_btn mt-3" onClick={()=> submit(order[0]._id,'rejected',order[0].data.loan_type, 'Your loan application is rejected, please try again after 90 days.')}>
                                            Reject
                                        </div>
                                    </div>
                                </div>
                            <div className="col-12 user_card text-start">
                                    <h3>Order</h3>
                                    <div className="row">
                                        
                                        <div className="col-12 col-md-6">
                                            {order && order.length > 0 && <div className="mt-2 text-start">Status: <b>{order[0].data.status}</b></div>}
                                            {order && order.length > 0 && <div className="mt-2 text-start">Loan amount: <b>{order[0].data.loan_type}</b></div>}
                                            {order && order.length > 0 && order[0].data.contacts > 0 && order[0].data.contacts.length > 0 && <div className="mt-2 text-start">Contact Detail:
                                          
                                                <div className="d-flex mt-3">
                                                        <div className="">
                                                    Name: {<b>{order[0].data.contacts[0].name}</b>}<br/>
                                                    Phone: {<b>{order[0].data.contacts[0].phone}</b>}
                                                    </div>
                                                    <div className="ml-2">
                                                    Name: {<b>{order[0].data.contacts[1].name}</b>}<br/>
                                                    Phone: {<b>{order[0].data.contacts[1].phone}</b>}
                                                    </div>
                                                </div>
                                            </div>}
                                   
                                        </div>
                                        <div className="row col-12 col-md-6">
                                        <div className="col-12 col-md-4">
                                        {order && order.length > 0 &&<img src={order[0].aadhar_1} className="img-fluid" />}
                                        {order && order.length > 0 &&<a
       
        download
        onClick={e => download(order[0].aadhar_1)}
      >
        <i className="fa fa-download" />
        download
      </a>}
                                        </div>
                                        <div className="col-12 col-md-4">
                                        {order && order.length > 0 &&<img src={order[0].aadhar_2} className="img-fluid" />}
                                        {order && order.length > 0 &&<a
       
       download
       onClick={e => download(order[0].aadhar_2)}
     >
       <i className="fa fa-download" />
       download
     </a>}
                                        </div>
                                        <div className="col-12 col-md-4">
                                        {order && order.length > 0 &&<img src={order[0].pan} className="img-fluid" />}
                                        {order && order.length > 0 &&<a
       
       download
       onClick={e => download(order[0].pan)}
     >
       <i className="fa fa-download" />
       download
     </a>}
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            
                                <div className="col-12 user_card text-start mt-5">
                                    <h3>User</h3>
                                    <div className="row">
                                        <div className="col-12 col-md-6">
                                            {order && order.length > 0 && <img src={order[0].data.user[0].profile_pic} className="img-fluid" />}
                                            {order && order.length > 0 &&<a
       
       download
       onClick={e => download(order[0].data.user[0].profile_pic)}
     >
       <i className="fa fa-download" />
       download
     </a>}
                                        </div>
                                        <div className="col-12 col-md-6">
    {order && order.length > 0 && <div className="mt-2 text-start">Name: <b>{order[0].data.user[0].data.name}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Email: <b>{order[0].data.user[0].data.email}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Phone: <b>{order[0].data.user[0].data.phone}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Gender: {order[0].data.user[0].data.gender}</div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Date of birth: <b>{new Date(order[0].data.user[0].data.dob).getDate() +'/'+(new Date(order[0].data.user[0].data.dob).getMonth() + 1) +'/'+new Date(order[0].data.user[0].data.dob).getFullYear()}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Employment type: <b>{order[0].data.user[0].data.employment_type}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Income: <b>{order[0].data.user[0].data.income}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Marital status: <b>{order[0].data.user[0].data.marital_status}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">City: <b>{order[0].data.user[0].data.city ? order[0].data.user[0].data.city : '-' }</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">State: <b>{order[0].data.user[0].data.state ? order[0].data.user[0].data.state : '-' }</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Pincode: <b>{order[0].data.user[0].data.pincode}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Profession: <b>{order[0].data.user[0].data.profession}</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Required loan amount: <b>{order[0].data.user[0].data.required_loan_amount ? order[0].data.user[0].data.required_loan_amount : 0 }</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">Household liabilities: <b>{order[0].data.user[0].data.household_liabilities ? order[0].data.user[0].data.household_liabilities : 0 }</b></div>}
    {order && order.length > 0 && <div className="mt-2 text-start">PAN number: <b>{order[0].data.user[0].data.pan_card_number ? order[0].data.user[0].data.pan_card_number : '-' }</b></div>}
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

export default OrderDetail
