import axios from 'axios'

import React,{useState} from 'react'

 

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Enquire = (props) => {

    const [UserName, setUserName] = useState('')

    const [MailId, setMailId] = useState('')

    const [PhoneNo, setPhoneNo] = useState('')

    const[Query,setQuery]=useState('')

    const id=props.match.params.id

 

    const onsubmit= async(e)=>{

        const formobj={

            "courseid":id,

            "UserName":UserName,

            "MailId":MailId,

            "PhoneNo":PhoneNo,

            "Query":Query

        }

        console.log(formobj)

        e.preventDefault()

        await axios.post(' http://localhost:6800/UsersQueries',formobj)

        .then(response=>{

            console.log(response)

            alert("Your query submitted successfully!!")

        })

        .catch(error=>{

            console.log(error)

        })

 

    }

 

    return (

        <div>

           

            <React.Fragment>

                <div className="panel panel-default">

                <div className="panel-heading">Enquire Form</div>

                <div className="panel-body">

                <form >

                   

                <div className="form-group">

                    <label>Course id</label>

                    <input type="text" value={id} name="Courseid" className="form-control" disabled={true} />

                </div>

                <div className="form-group">

                    <label>UserName</label>

                    <input type="text" value={UserName} name="UserName" className="form-control" onChange={(e)=>setUserName(e.target.value)}/>

                </div>

                <div className="form-group">

                    <label>MailId</label>

                    <input type="text" value={MailId} name="MailId" className="form-control" onChange={(e)=>setMailId(e.target.value)}/>

                </div>

                <div className="form-group">

                    <label>PhoneNo</label>

                    <input type="text" value={PhoneNo} name="PhoneNo" className="form-control" onChange={(e)=>setPhoneNo(e.target.value)}/>

                </div>

                <div className="form-group">

                    <label>Query</label>

                    <input type="text" value={Query} name="Query" className="form-control" onChange={(e)=>setQuery(e.target.value)}/>

                </div>

                <button type="submit" onClick={onsubmit} className="btn btn-success">Submit</button>

                </form>

                </div>

                </div>

            </React.Fragment>

        </div>

    )

}

 

export default Enquire

 