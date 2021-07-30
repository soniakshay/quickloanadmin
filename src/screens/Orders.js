import React, { useEffect, useState } from 'react';
import { URL } from '../action/config';
import axios from 'axios';
import resposneHandler from '../action/responseHnadler';

function Orders({history}) {
    const [orders, setOrders] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        fetchOrders(page);
    },[]);

    const  float2int2 = (value) => {
        return value ? Math.ceil(value) : value;
      }

    const ChangePage = (page) => {
        setPage(page);
        fetchOrders(page);
    }

    const fetchOrders = async (new_page) => {
        if(localStorage.getItem('token')) {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'access-token': localStorage.getItem('token')
                    }
                }
                const payload = {
                    page: new_page,
                };
                const response = await axios.post(`${URL}/order/orders`, payload,  config);
                const orders = await resposneHandler(response.data);
                console.log(orders);
                const totalCount= float2int2(orders.count/15) == 0 ? 1 : float2int2(orders.count/15) ;
             let pageCountArray=[];
             for(let i =1;i <= totalCount; i++) {
               pageCountArray.push(i)
             }
             if(pageCountArray.length > 0) {
                 console.log(pageCountArray);
                 setCount(pageCountArray);
             }
                setOrders(orders.orders);
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
                                <h2>Orders</h2>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="apply-area pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                    
                        <div className="col-lg-12">
                            
                            <div className="apply-wrapper">
                                
                            <table id="example" class="table table-striped table-bordered" style={{width:'100%'}}>
        <thead>
            <tr>
                <th>Status</th>
                <th>Date</th>
                <th>Loan Amount</th>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {orders && orders.length > 0 && orders.map(orders =>
            <tr>
                <td>{orders.data.status}</td>
            <td>{new Date(orders.data.date).getDate() +'/'+(new Date(orders.data.date).getMonth() + 1) +'/'+new Date(orders.data.date).getFullYear()}</td>
            <td>{orders.data.loan_type}</td>
            <td>{orders.data.user_details.name}</td>
                <td>
                    <div className="d-flex">
                        <div style={{backgroundColor:'black', borderRadius:2, padding:5, color:'white', cursor:'pointer'}} onClick={()=>history.push('OrderDetail/'+orders._id)}>View</div>
                    </div>
                </td>
           </tr>)}
            </tbody>
    </table>
   {count && <div className="container">
							<div className="row">
								<div className="col-lg-12">
									
									<div className="pagination-content text-center">
										<ul>
                                        {count.map(c => 
              <li className="p-1"><a className={page == c ? "active text-white" : 'text-white'} onClick={e => ChangePage(c)}>{c}</a></li>
            )
                                        }
										</ul>
									</div>
									
								</div>
							</div>
						</div>
}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    
    )
}

export default Orders
