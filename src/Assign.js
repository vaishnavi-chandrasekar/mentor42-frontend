import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { Link, useParams } from 'react-router-dom'


function Assign() {
    let params =useParams()
    const formik = useFormik({
        initialValues: {
            MentorName: "",
            StudentName: "",
            Subject: ""
            
        },
        onSubmit: async values =>{
            try{
                await fetch("https://mentor42api.herokuapp.com/student",{
                    method:"POST",
                    body:JSON.stringify(values),
                    headers:{
                        "content-type":"application/json"
                    }
                })
                alert("data saved")
            }catch (error){
                console.log(error)
            }
        },
        async (values) {
            try {
                  fetch(`https://mentor42api.herokuapp.com/edit/${params.id}`, {
                    method: "PUT",
                    body: JSON.stringify(values),
                    headers: {
                        "content-type": "application/json"
                    }
                })
                alert("data-updated")


            } catch (error) {
                console.log(error)
            }
        }
    })
    useEffect(async ()=>{
        try{
           let userdata=await fetch(`https://mentor42api.herokuapp.com/info/${params.id}`)
           let user= await userdata.json()
           formik.setValues(user)
           console.log(user)
        }catch (error){
            console.log(error)
        }
    },[])


    
    return (
        <>
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Assign</h1>
        
            </div>
            <div className='container'>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-4'>
                        <label>Mentor Name</label>
                        <input type="text"
                        name='MentorName'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.MentorName}
                        ></input>
                    </div>

                    <div className='col-lg-4'>
                        <label>Student Name</label>
                        <input type="text"name='StudentName'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.StudentName}
                        ></input>
                    </div>

                    <div className='col-lg-4'>
                        <label>Subject</label>
                        <input type="text" name='Subject'
                        class="form-control" onChange={formik.handleChange}
                        value={formik.values.Subject}
                        ></input>
                    </div>
                    <div className='col-lg-3 mt-3'>
                        <input type="Submit" class="btn btn-primary"></input>
                    </div>
                </div>
                </form>
            </div>
        </>
    )
    }

export default Assign