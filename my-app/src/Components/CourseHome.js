import React,{useState,useEffect}from 'react'

import axios from 'axios'

import {Link} from 'react-router-dom'

import { useDispatch } from 'react-redux'

import { fetchusersrequest, fetchuserssuccess,fetchusersfailure } from '../Redux/Action'

 

function CourseHome(){

 

    const [courses,setCourses]=useState([])

    const [errorMsg,setError]=useState('')

    const [loading,setLoading]=useState(false)

    const dispatch=useDispatch()

    const usersrequest=()=>{

        dispatch(fetchusersrequest())

    }

    const userssuccess=(courses)=>{

        dispatch(fetchuserssuccess(courses))

    }

    const userserror=(errorMsg)=>{

        dispatch(fetchusersfailure(errorMsg))

    }

 

const fetchusers=()=>{

     usersrequest()

        setLoading(true);

        axios.get('http://localhost:6800/Courses')
        .then(response=>{

            const courses=response.data

            userssuccess(courses)

            console.log(courses)

            setCourses(courses)

           

            setLoading(false);

        })

        .catch(error=>{

            setError(error.message)

            userserror(errorMsg)

        })

 

 }

useEffect(()=>{

fetchusers()

},[]);

 

const ShowCourses=()=>{

        return(

            <>
            {courses.map((product)=>{

                return(

                    <>

                   

                    <div className="col-md-3 me-3 py-3">

                    <div className="card h-100 text-center p-4" key={product.id}>

                        <img className="card-img-top" src={product.image} alt={product.Name} height="350px" />

                        <div className="card-body">

                            <h5 className="card-text mb-0">{product.Name}</h5>

                            <p className="card-text lead fw-bold">${product.Price}</p>

                            <p>{product.description}</p>

                        </div>

                        <p>

                            <Link to={`/enquire/${product.id}`} className="btn btn-outline-dark">Enquire</Link>

                        </p>

                    </div>

                    </div>

                    </>

                )

            })}

            </>

        )

    }

        return (

            <div>

               

                <div className="container">

                    <div className="row">

                        {loading ?<h1>Loading..</h1>:<ShowCourses /> }

                        {errorMsg?<h1>{errorMsg}</h1>:''}

                    </div>

                   

                   

                </div>

               

            </div>

        )

}





export default CourseHome