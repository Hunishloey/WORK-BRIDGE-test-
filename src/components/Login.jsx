import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Apiservice from "./Apiservice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
    var [email, setEmail] = useState("");
    var [password, setPassword] = useState("");
    var nav = useNavigate();

    function handleForm(e) {
        e.preventDefault()
        let data = {
            email: email,
            password: password
        }

        Apiservice.Login(data)
            .then((res) => {
                if (res.data.success == true) {
                    // toast.success(res.data.message);
                    toast.success(res.data.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });

                    sessionStorage.setItem("token", res.data.token)
                    sessionStorage.setItem("_id", res.data.data._id)
                    sessionStorage.setItem("email", res.data.data.email)
                    sessionStorage.setItem("userType", res.data.data.userType)

                    if (res.data.data.userType == 1) {
                        setTimeout(() => {
                            nav("/admin")
                        }, 2000);
                    }
                    else if (res.data.data.userType == 2) {
                        setTimeout(() => {
                            nav("/hirer")
                        }, 2000);
                    }
                    else if (res.data.data.userType == 3) {
                        setTimeout(() => {
                            nav("/")
                        }, 2000);
                    }
                }
                else {
                    toast.error(res.data.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                }

            })
            .catch((err) => {
                console.log("error is", err)
                toast.error("Something went Wrong!!", {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            })

    }

    return (
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
                            <h1 className="text-white font-weight-bold">Login</h1>
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
            <ToastContainer />
            <section className="site-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2"></div>
                        <div className="col-lg-8 bg-white p-5">
                            <h2 className="mb-4">Log In</h2>
                            <form action="#" className="p-4" onSubmit={handleForm}>
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
                                            value={email} onChange={(e) => setEmail(e.target.value)} />
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
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)} />
                                    </div>
                                </div>
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input
                                            type="submit"
                                            defaultValue="Log In"
                                            className="btn px-4 btn-primary text-white" />
                                    </div>
                                </div>
                            </form>
                            <div className="col-12">
                                <span>Don't have an account?
                                    <Link to="/register" > Register as Job Seeker</Link> |
                                    <Link to="/hirer/register" > Register as Company</Link>
                                </span>
                            </div>
                        </div>
                        <div className="col-lg-2"></div>
                    </div>
                </div>
            </section>
        </>
    )
}
