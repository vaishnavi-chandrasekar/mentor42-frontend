import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFormik } from 'formik'



function Delete() {
    let params = useParams()
    const formik = useFormik({
        initialValues: {
            MentorName: "",
            StudentName: "",
            Subject: "",
        },
         onClick:async values => {
            try {
                await fetch(`https://mentor42api.herokuapp.com/remove/${params._id}`, {
                    method: "DELETE",
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
            {/* <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Edit</h1>

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
                            <input type="text" 
                                name='StudentName'
                                class="form-control" onChange={formik.handleChange}
                                value={formik.values.StudentName}
                            ></input>
                        </div>

                        <div className='col-lg-4'>
                            <label>Subject</label>
                            <input type="text" 
                                name='Subject'
                                class="form-control" onChange={formik.handleChange}
                                value={formik.values.Subject}
                            ></input>
                        </div>
                        <div className='col-lg-3 mt-3'>
                            <input type="Submit" class="btn btn-primary"></input>
                        </div>

                    </div>
                </form>
            </div> */}

        </>
    )
}
export default Delete