import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

export default function Job_hirer_login(){
    var[Email,setEmail]=useState("");
    var[Password,setPassword]=useState("");
    var nav = useNavigate();

        function handleForm(e){
            // Loading stop
            e.preventDefault();
            console.log("form is submit");
            if(Email == "admin@gmail.com" && Password == 123){
                console.log("welcome khushi");
                alert("Login successfull")
                setTimeout(() => {
                    nav("/admin")
                }, 2000);
    
                
            }
            else{
                console.log("user invalid");
                
            }
            
        }
        
    return(
        <>
  {/* HOME */}
  <section
    className="section-hero overlay inner-page bg-image"
    style={{ backgroundImage: 'url("/assets/images/hero_1.jpg")' }}
    id="home-section"
  >
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h1 className="text-white font-weight-bold">Sign Up/Login</h1>
          <div className="custom-breadcrumbs">
            <a href="#">Home</a> <span className="mx-2 slash">/</span>
            <span className="text-white">
              <strong>Log In</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>


        <section className="site-section">
  <div className="container">
    <div className="row">
      
      <div className="col-lg-2"></div>
      <div className="col-lg-8">
        <h2 className="mb-4">Log In To JobBoard</h2>
        <form action="#" className="p-4 border rounded"  onSubmit={handleForm}>
          <div className="row form-group">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="text-black" htmlFor="fname">
                Email
              </label>
              <input
                type="email"
                id="fname"
                className="form-control"
                placeholder="Email address"
                value={Email} onChange={(e) =>setEmail(e.target.value)}/>
            </div>
          </div>
          <div className="row form-group mb-4">
            <div className="col-md-12 mb-3 mb-md-0">
              <label className="text-black" htmlFor="fname">
                Password
              </label>
              <input
                type="password"
                id="fname"
                className="form-control"
                placeholder="Password"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
          </div>
          <div className="row form-group">
            <div className="col-md-12">
              <input
                type="submit"
                defaultValue="Log In"
                className="btn px-4 btn-primary text-white"/>
            </div>
          </div>
          <div className="col-12">
                    <span>Don't have an account? <Link to="/register" >Register</Link></span>
                </div>
        </form>
      </div>
      <div className="col-lg-2"></div>
      
    </div>
  </div>
</section>
</>

    )
}
