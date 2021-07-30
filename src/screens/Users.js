import React, { useEffect, useState } from 'react';
import { URL } from '../action/config';
import axios from 'axios';
import resposneHandler from '../action/responseHnadler';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

function Users({history}) {
    const [users, setUser] = useState([]);
    const [count, setCount] = useState(0);
    const [page, setPage] = useState(1);
    const [active, setActive] = useState('all');
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    useEffect(()=>{
        fetchUsers(page, active);
    },[]);

    const exportToCSV = (csvData, fileName) => {
        const ws = XLSX.utils.json_to_sheet(csvData);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, fileName + fileExtension);
    }

    const  float2int2 = (value) => {
        return value ? Math.ceil(value) : value;
      }

    const ChangePage = (page) => {
        setPage(page);
        fetchUsers(page, active);
    }

    const setUserDetail = (user) => {
        localStorage.setItem('userDetail', JSON.stringify(user));
        history.push('/UserDetail');
    }

    const fetchUsers = async (new_page, type) => {
        if(localStorage.getItem('token')) {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'access-token': localStorage.getItem('token')
                    }
                }
                let response;
                if(type == 'all') {
                    response = await axios.get(`${URL}/user/getUsers/${new_page}`, config);
                } else if(type == 'paid') {
                    response = await axios.get(`${URL}/user/paidUsers/${new_page}`, config);
                } else {
                    response = await axios.get(`${URL}/user/unpaidUsers/${new_page}`, config);
                }
                const users = await resposneHandler(response.data);
                console.log(users);
                const totalCount= float2int2(users.count/15) == 0 ? 1 : float2int2(users.count/15) ;
                let pageCountArray=[];
                for(let i =1;i <= totalCount; i++) {
                  pageCountArray.push(i)
                }
                if(pageCountArray.length > 0) {
                    console.log(pageCountArray);
                    setCount(pageCountArray);
                }
                setUser(users.users);
            } catch(e) {
                // network errror
            }
        } else {
            // invalid user
        }
    }

    const exportData = async () => {
        if(localStorage.getItem('token')) {
            try {
                const config = {
                    headers: {
                        'Content-Type': 'application/json',
                        'access-token': localStorage.getItem('token')
                    }
                }
                const response = await axios.get(`${URL}/user/exportUsers`, config);
                const users = await resposneHandler(response.data);
                console.log(users);
                var newData=[];
                if(users&&users.length > 0) {
                    users.map(v => {
                        if(active==='all') {
                            newData.push({
                                "PAID": v.paid,
                                "PHONE": v.phone,
                                "EMAIL": v.email,
                                "NAME": v.name,
                                "D.O.B.": new Date(v.dob).getDate() +"/"+ (new Date(v.dob).getMonth() + 1) + '/' + new Date(v.dob).getFullYear(),
                                "GENDER": v.gender,
                                "EMPLOYMENT TYPE": v.employment_type,
                                "INCOME": v.income,
                                "PINCODE": v.pincode,
                                "PROFESSION": v.profession,
                                "CURRENT EMI AMOUNT": v.current_emi_amount,
                                "MARITAL STATUS": v.marital_status,
                                "CITY": v.city ? v.city : '-',
                                "STATE": v.state ? v.state : '-',
                                "HOUSEHOLD LIABILITIES": v.household_liabilities,
                                "PAN NUMBER": v.pan_card_number,
                                "REQUIRED LOAN AMOUNT": v.required_loan_amount
                            })
                        } else if(active==='paid' && v.paid) {
                            newData.push({
                                "PAID": v.paid,
                                "PHONE": v.phone,
                                "EMAIL": v.email,
                                "NAME": v.name,
                                "D.O.B.": new Date(v.dob).getDate() +"/"+ (new Date(v.dob).getMonth() + 1) + '/' + new Date(v.dob).getFullYear(),
                                "GENDER": v.gender,
                                "EMPLOYMENT TYPE": v.employment_type,
                                "INCOME": v.income,
                                "PINCODE": v.pincode,
                                "PROFESSION": v.profession,
                                "CURRENT EMI AMOUNT": v.current_emi_amount,
                                "MARITAL STATUS": v.marital_status,
                                "CITY": v.city ? v.city : '-',
                                "STATE": v.state ? v.state : '-',
                                "HOUSEHOLD LIABILITIES": v.household_liabilities,
                                "PAN NUMBER": v.pan_card_number,
                                "REQUIRED LOAN AMOUNT": v.required_loan_amount
                            })
                        } else if(active==='unpaid' && !v.paid) {
                            newData.push({
                                "PAID": v.paid,
                                "PHONE": v.phone,
                                "EMAIL": v.email,
                                "NAME": v.name,
                                "D.O.B.": new Date(v.dob).getDate() +"/"+ (new Date(v.dob).getMonth() + 1) + '/' + new Date(v.dob).getFullYear(),
                                "GENDER": v.gender,
                                "EMPLOYMENT TYPE": v.employment_type,
                                "INCOME": v.income,
                                "PINCODE": v.pincode,
                                "PROFESSION": v.profession,
                                "CURRENT EMI AMOUNT": v.current_emi_amount,
                                "MARITAL STATUS": v.marital_status,
                                "CITY": v.city ? v.city : '-',
                                "STATE": v.state ? v.state : '-',
                                "HOUSEHOLD LIABILITIES": v.household_liabilities,
                                "PAN NUMBER": v.pan_card_number,
                                "REQUIRED LOAN AMOUNT": v.required_loan_amount
                            })
                        }
                    });
                    exportToCSV(newData, 'quickloans-users');
                }
            } catch(e) {
                // network errror
            }
        } else {
            // invalid user
        }
    }

    const handleTab = (type) => {
        setActive(type);
        fetchUsers(page, type);
    }

    return (
        <main>

                <div className="container pt-150">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="hero-cap text-center pt-50">
                                <h2>Users</h2>
                            </div>
                        </div>
                    </div>
                </div>


            <div className="apply-area pt-150 pb-150">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-12 mb-5" style={{textAlign:'end'}}>
<a className="btn apply-btn mt-30" onClick={()=> exportData()}>Export</a>
</div>

<div className="col-12 mb-3">
   <div className="row">
   <div className="col-12 col-md-3">
        <div className={active == 'all' ? 'active_tab' : 'tab'} onClick={()=>handleTab('all')}>ALL</div>
    </div>
    <div className="col-12 col-md-3">
    <div className={active == 'paid' ? 'active_tab' : 'tab'} onClick={()=>handleTab('paid')}>PAID</div>
    </div>
    <div className="col-12 col-md-3">
    <div className={active == 'unpaid' ? 'active_tab' : 'tab'} onClick={()=>handleTab('unpaid')}>UNPAID</div>
    </div>
   </div>
</div>
                        <div className="col-lg-12">
                            <div className="apply-wrapper">
                            <table id="example" class="table table-striped table-bordered" style={{width:'100%'}}>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {users && users.length > 0 && users.map(user =>
            <tr>
                <td>{user.data.name}</td>
            <td>{user.data.email}</td>
            <td>{user.data.phone}</td>
                <td>
                    <div className="d-flex">
                        <div style={{backgroundColor:'black', borderRadius:2, padding:5, color:'white', cursor:'pointer'}} onClick={()=>setUserDetail(user)}>View</div>
                        {/* <div className="ml-2" style={{backgroundColor:'red', borderRadius:2, padding:5, color:'white', cursor:'pointer'}}>Block</div> */}
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

export default Users
