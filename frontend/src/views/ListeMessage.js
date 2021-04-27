import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


const ListeMessage = () => {
  
const[data, setData] = useState([])

const initialData = {
  Email:'',
  date:'',
}

const [formData,setFormData] = useState(initialData)

const handleClick =async (e)=>{
  e.preventDefault();
  try {
     const {data} = await Axios.post('http://localhost:3011/api/find',formData)
   if(data) setData(data)
  } catch (error) {
    if(error) console.log(error.response);
  }
  
 }

 const handelChange = (e)=>{
  const {name,value} = e.target
  setFormData({...formData,[name]:value})
}

useEffect(()=>{
    Axios.get('http://localhost:3011/api/list')
    .then((res)=>{
        const Data = res.data;
        console.log(Data);
        setData(Data.response)
    })
    .catch(err=>console.log(err)) 
  }, [])

const myData = data;
console.log('myData',myData)

    return (
        <div>
 <div>
                <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">keep în touch</a>
            </div>
            </nav>
        </div>

 {/*************search*/}
 <form className='style'>
        <div className="form-group   w-50 p-10 ">
          <label for="validationCustom01">Email</label>
          <input
            
            name="Email"
            type="email"
            className="form-control"
            id="validationCustom01"
            placeholder="Email"
            onChange={handelChange}
            required
          />
          <input
         
            name="date"
            type="date"
            className="form-control"
            id="validationCustom01"
            placeholder="Date"
            onChange={handelChange}
            required
          />
         <button
        
          type="submit"
          className="btn btn-primary mb-3"
          onClick={handleClick}
        >
          Search
        </button>
        </div>
        </form>
    {/************* search*/}
<table className="table table-dark table-striped w-75 p-3">
 
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Nom</th>
      <th scope="col">Prenom</th>
      <th scope="col">Email</th>
      <th scope="col">Telephone</th>
      <th scope="col">Message</th>
      <th scope="col">date</th>
      <th scope="col">date</th>
    </tr>
  </thead>
  <tbody>

      {data && myData.map(res=>(
    <tr>
        <>
      <td>{res._id}</td>
      <td>{res.Nom}</td>
      <td>{res.Prenom}</td>
      <td>{res.Email}</td>
      <td>{res.Telephone}</td>
      <td>{res.Message}</td>
      <td>{res.date}</td>
      <td>
                  <Link to={`/Repondre/${res._id}`}>
                    <button  className="btn btn-primary">Repondre</button>
                  </Link>
                </td>
      </>
  
    </tr>
      ))}

  </tbody>
</table>


        </div>
    );
}

export default ListeMessage;
