import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';


const ListeMessage = () => {
  
const[data, setData] = useState([])
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

      {myData.map(res=>(
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
