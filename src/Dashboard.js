import React, { useState,useEffect } from 'react'
import {Link} from 'react-router-dom'



export default function Dashboard() {
    const [users,setUsers]= useState([])
    useEffect(async () =>{
        try{
            let items= await fetch ("https://mentor42api.herokuapp.com/infoall");
            let userdata=await items.json()
            setUsers(userdata)
        }catch (error) {
            console.log(error)
        }
    }, []) 
   


        
     return (
        <>

            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800"></h1>
                <Link to="/Assign" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    class="fas fa-download fa-sm text-white-50"></i> Assign</Link>

            </div>
        

<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h2 class="m-0 font-weight-bold text-primary">ASSIGNED LIST</h2>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
               
                <thead>
                    <tr>
                        <th>Mentor Name</th>
                        <th>Student Name</th>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tfoot>
                    <tr>
                        <th>Mentor Name</th>
                        <th>Student Name</th>
                        <th>Subject</th>
                        <th>Action</th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        users.map((user,index)=>{
                            return <tr key={index}>
                        <td>{user.MentorName}</td>
                        <td>{user.StudentName}</td>
                        <td>{user.Subject}</td>
                        <td>
                        <Link to={`/Assign/${user._id}`}> <button className='btn btn-primary btn-sm'>Addmentor</button></Link>
                            <Link to={`/Delete/${user._id}`}><button className='btn btn-danger btn-sm'>Delete</button></Link>
                        </td>
                        </tr>
                        })
                    
}
                   
                </tbody>
            </table>
        </div>
    </div>
</div>
               
                 
                         
                </>
    )
}
