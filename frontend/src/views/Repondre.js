import React ,{useEffect,useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios' ;


function Repondre(props){
const {id} = useParams()
const [Message,setMessage] = useState('')

const handleClick = async (e)=>{
  e.preventDefault();
  try {
    const res = await axios.post(`http://localhost:3011/api/reply/${id}`,{Message});
    if (res) props.history.push('/')
  } catch (error) {
    if(error) console.log(error.response);
  }
}

const handleChange =(e)=>{
  console.log(e.target.value);
  setMessage(e.target.value)
}
console.log(Message)

const [Mesg, setMesg] =useState([])

const  getMesg = async () =>{
  try {
    const {data} = await  axios.post(`http://localhost:3011/api/singlecontact/${id}`);
    if(data) setMesg(data)
  } catch (error) {
    if(error) console.log(error.response);
  }
}
useEffect(()=>{
  getMesg()
},[]);

    return (
        <div className="">
               <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">keep în touch</a>
            </div>
        </nav>
        <div className="container contact">
        {
            Mesg && ( 
              
          <>
              <h1> Repondre </h1>
          <p>
            <span>A :{Mesg.Nom} {Mesg.Prenom} </span> 
          </p>
          <p>
            <span>Email : {Mesg.Email} </span> 
          </p>
          <p>
            <span>Message :{Mesg.Message} </span> 
          </p>
         </>
         )
        }
          
         <form>
           <div className="form-group w-75 p-3">
             <label for="exampleFormControlTextarea1">Entre Your Message</label>
             <textarea  onChange={handleChange} name="Message" className="form-control" id="exampleFormControlTextarea1"rows="3" ></textarea>
           <button onClick={handleClick} className="btn-message" type="submit" className="btn btn-primary mb-3"> Submit </button>
           </div>
         </form>
       </div>
       </div>
    );
}

export default Repondre;

