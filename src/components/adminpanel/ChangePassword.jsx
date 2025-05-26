import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function ChangePassword() {
    const [oldpassword, setOldpassword] = useState("");
    const [newpassword, setNewpassword] = useState("");
    const [confirmpassword, setConfirmpassword] = useState("");

    const [loading, setLoading] = useState(false);
    const nav = useNavigate()

    function handleForm(e) {
        e.preventDefault()
        let data = {
            oldpassword: oldpassword,
            userId: sessionStorage.getItem("_id"),
            newpassword: newpassword,
            confirmpassword: confirmpassword
        };

        Apiservice.changePassword(data)
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
                    nav("/login")
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
            <section
                className="section-hero overlay inner-page bg-image"
                style={{ backgroundImage: 'url("/assets/images/hero_1.jpg")' }}
                id="home-section"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <h1 className="text-white font-weight-bold">Change Password</h1>
                            <div className="custom-breadcrumbs">
                                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>Change Password</strong>
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
                        <div className="col-md-12 bg-white p-5">
                            <h2 className="mb-4">Change Password</h2>

                            <form action="#" className="p-4" onSubmit={handleForm}>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">
                                            Old Password
                                        </label>
                                        <input
                                            type="password"
                                            id="oldpassword"
                                            className="form-control"
                                            placeholder="Old Password"
                                            value={oldpassword} onChange={(e) => setOldpassword(e.target.value)} />
                                    </div>
                                </div>
                                
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">
                                            New Password
                                        </label>
                                        <input
                                            type="password"
                                            id="newpassword"
                                            className="form-control"
                                            placeholder="New Password"
                                            value={newpassword} onChange={(e) => setNewpassword(e.target.value)} />
                                    </div>
                                </div>
                                
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">
                                            Confirm Password
                                        </label>
                                        <input
                                            type="password"
                                            id="confirmpassword"
                                            className="form-control"
                                            placeholder="Confirm Password"
                                            value={confirmpassword} onChange={(e) => setConfirmpassword(e.target.value)} />
                                    </div>
                                </div>
                                
                                <div className="row form-group">
                                    <div className="col-md-12">
                                        <input
                                            type="submit"
                                            defaultValue="Submit"
                                            className="btn px-4 btn-primary text-white" />
                                    </div>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}