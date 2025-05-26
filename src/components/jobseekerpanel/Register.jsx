import { Link } from "react-router-dom";

export default function Register(){
    return(
        <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4">
          <div className="col-lg-4  wow fadeInUp" data-wow-delay="0.5s"></div>
          <div className="col-lg-4 col-md-12 wow fadeInUp" data-wow-delay="0.5s">
            <form style={{textAlign:"center"}}>
            <div className="row g-3" ><h2 style={{ color:"#06BBCC" }}>CampusHub</h2></div><br />
            <div className="row g-3">
            <div className="col-md-12">
                <div className="form-floating">
                    <input
                    type="text"
                    className="form-control"
                    id="text"
                    placeholder="Your Text"
                    />
                    <label htmlFor="text">Full Name</label>
                </div>
                </div>
                <div className="col-md-12">
                <div className="form-floating">
                    <input
                    type="text"
                    className="form-control"
                    id="text"
                    placeholder="Your Text"
                    />
                    <label htmlFor="text">Username</label>
                </div>
                </div>
                <div className="col-md-12">
                <div className="form-floating">
                    <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    />
                    <label htmlFor="email">Email</label>
                </div>
                </div>
                <div className="col-md-12">
                <div className="form-floating">
                    <input
                    type="Number"
                    className="form-control"
                    id="Number"
                    placeholder="Your Number"
                    />
                    <label htmlFor="Number">Phone Number</label>
                </div>
                </div>
                <div className="col-12">
                <div className="form-floating">
                <select className="form-select pt-2" id="gender" >
                <option value="" disabled selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                </select>
                </div>
                </div>
                <div className="col-12">
                <div className="form-floating">
                    <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="password"
                    />
                    <label htmlFor="password">Password</label>
                </div>
                </div>
                <div className="col-12">
                <div className="form-floating">
                    <input
                    type="password"
                    className="form-control"
                    id="confirm_password"
                    placeholder="confirm_password"
                    />
                    <label htmlFor="confirm_password">Confirm Password</label>
                </div>
                </div>
                <div className="col-12">
                <div className="form d-flex align-items-center">
                    <input
                    type="checkbox"
                    id="checkbox"
                    />
                    <label htmlFor="checkbox" className="form-check-label ps-2">Remember me</label>
                </div>
                </div>
                <div className="col-12">
                <button className="btn btn-primary  rounded-pill" type="submit">
                    REGISTER
                </button>
                </div>
            </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    )
}