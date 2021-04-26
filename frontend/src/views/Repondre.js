import React from 'react';

const Repondre = () => {
    return (
        
       
        
    
        <div className="">
                 <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">keep în touch</a>
            </div>
        </nav>
        <div className="container contact">
       
            <>
                 <h1> Repondre </h1>
             <p>
               <span>A : </span> 
             </p>
             <p>
               <span>Email : </span> 
             </p>
             <p>
               <span>Message : </span> 
             </p>
            </>
       
         <form>
           <div className="form-group w-75 p-3">
             <label for="exampleFormControlTextarea1">Entre Your Message</label>
             <textarea name="message" className="form-control" id="exampleFormControlTextarea1"rows="3" ></textarea>
           </div>
           <button className="btn-message" type="submit" className="btn btn-primary mb-3"> Submit </button>
         </form>
       </div>
       </div>
    );
}

export default Repondre;
