import React, { useState } from 'react';
import axios from 'axios';




const Home = (props) => {

  const [postData, setPostData]= useState({Nom :'',Prenom :'',Email :'',Telephone :'',Message :''})

  console.log(postData)

  const onchange = (e) =>{
    setPostData({...postData, [e.target.name]: e.target.value})
  }
  

  function onCreatePost(e) {
    e.preventDefault();
    axios.post('http://localhost:3011/api/sendMessage', postData)
      .then((response) => {
        console.log(response)
      });
props.history.push('/list')
  }

  return (
    
    <div>

      <div>
        <nav className="navbar navbar-light bg-light">
          <div className="container-fluid">
                         <a className="navbar-brand" href="/">keep în touch</a>
          </div>
        </nav>
      </div>
      <form className="w-50 p-3">
        <div className="mb-3 ">
          <label htmlFor="exampleInputPassword1" className="form-label">Nom</label>
          <input type="text" name="Nom" onChange={onchange} className="form-control" placeholder="Nom" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Prenom</label>
          <input type="text" name="Prenom" onChange={onchange} className="form-control" placeholder="Prenom" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
          <input type="email" name="Email" onChange={onchange} className="form-control" placeholder="Email" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Telephone</label>
          <input type="text" name="Telephone" onChange={onchange} className="form-control" placeholder="Telephone" aria-label="Username" aria-describedby="basic-addon1" />
        </div>

        <div className="mb-3">
          <textarea name="Message" onChange={onchange} className="form-control" aria-label="With textarea"></textarea>
        </div>

        <button onClick={onCreatePost} type="submit" className="btn btn-primary">envoyer</button>
      </form>
     
    
   



      <div>

      </div>

    </div>
 





  );
}

export default Home;
