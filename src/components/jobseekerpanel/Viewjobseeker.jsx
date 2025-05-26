import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function Viewjobseeker() {
    var [jobData, setJobData] = useState([]);

    var nav = useNavigate();

    const getData = () => {
        Apiservice.manageJobList({ status: true })
            .then((res) => {
                setJobData(res.data.data)
            })
            .catch((err) => {
                console.log("error is", err);
            })
    }

    useEffect(() => {
        getData()
    }, [])

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
                            <h1 className="text-white font-weight-bold">
                                Jobs</h1>
                            <div className="custom-breadcrumbs">
                                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>
                                        Jobs</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />


            <section class="site-section">
                <div class="container">
                    <div class="row mb-5">
                        {jobData?.map((el, index) => (
                            <div class="col-lg-4">
                                <div class="bg-light p-3 border rounded mb-4">
                                    <h3 class="text-primary  mt-3 h5 pl-3 mb-3 ">{el?.title}</h3>
                                    <ul class="list-unstyled pl-3 mb-0">
                                        <li class="mb-2"><strong class="text-black">Company Name:</strong> {el?.addedById?.name}</li>
                                        <li class="mb-2"><strong class="text-black">Location:</strong> {el?.locationId?.locationName}</li>
                                        <li class="mb-2"><strong class="text-black">No. of Vacancies:</strong> {el?.no_of_vacant_post}</li>
                                        <li class="mb-2"><strong class="text-black">Experience:</strong> {el?.experience}</li>
                                        <li class="mb-2"><strong class="text-black">Experience Level:</strong> {el?.experienceLevel}</li>
                                        <li class="mb-2"><strong class="text-black">Salary:</strong> INR {el?.salary}</li>
                                        <li class="mb-2"><strong class="text-black">Working Days:</strong> {el?.workingDays}</li>
                                        <li class="mb-2"><strong class="text-black">Application Deadline:</strong> {el?.lastDateToApply}</li>
                                    </ul>

                                    <Link to={'/apply/' + el?._id} className="btn btn-dark form-control">Apply</Link>
                                </div>


                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}