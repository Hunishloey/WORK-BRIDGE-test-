import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function UpdateLocation() {
    var [locationName, setLocationName] = useState("");

    const params = useParams()
    const _id = params._id
    const nav = useNavigate()

    useEffect(() => {
        Apiservice.getSingleLocation({ _id: _id })
            .then((res) => {
                setLocationName(res.data.data.locationName)
            })
            .catch((err) => {
                toast.error("Something went wrong!!")
            })
    }, [])


    function handleForm(e) {
        e.preventDefault()
        let data = {
            locationName: locationName,
            _id : _id
        }

        Apiservice.updateLocation(data)
            .then((res) => {
                if (res.data.success == true) {
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
                    nav('/admin/manageLocation')
                    setLocationName("")
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
                            <h1 className="text-white font-weight-bold">Update Locations</h1>
                            <div className="custom-breadcrumbs">
                                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>Update Location</strong>
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
                            <h2 className="mb-4">Update Location</h2>

                            <form action="#" className="p-4" onSubmit={handleForm}>
                                <div className="row form-group">
                                    <div className="col-md-12 mb-3 mb-md-0">
                                        <label className="text-black" htmlFor="fname">
                                            Location Name
                                        </label>
                                        <input
                                            type="text"
                                            id="locationName"
                                            className="form-control"
                                            placeholder="Skill Name"
                                            value={locationName} onChange={(e) => setLocationName(e.target.value)} />
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