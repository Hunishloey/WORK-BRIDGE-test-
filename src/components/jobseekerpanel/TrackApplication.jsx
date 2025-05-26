import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function TrackApplication() {
    var [jobApplicationData, setJobApplicationData] = useState([]);

    var nav = useNavigate();

    const getData = () => {
        Apiservice.manageJobApplication({ status: true, addedById: sessionStorage.getItem('_id') })
            .then((res) => {
                setJobApplicationData(res.data.data)
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
                            <h1 className="text-white font-weight-bold">View Job Applications</h1>
                            <div className="custom-breadcrumbs">
                                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>View Job Application</strong>
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
                            <h2 className="mb-4">Job Applications</h2>
                            <table className="table table-bordered">
                                <thead className="table-dark text-uppercase text-center">
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Job Title</th>
                                        <th>No. of Vacancies</th>
                                        <th>Last Date to Apply</th>
                                        <th>Application Status</th>
                                        <th>Resume</th>
                                        <th>Interview Date</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {jobApplicationData?.map((el, index) => (
                                        <tr key={index} className="text-center">
                                            <td>{index + 1}</td>
                                            <td>{el?.jobListingId?.title}</td>
                                            <td>{el?.jobListingId?.no_of_vacant_post}</td>
                                            <td>{el?.jobListingId?.lastDateToApply}</td>
                                            <td>{el?.applicationStatus}</td>
                                            <td>
                                                <a href={el?.resume} className="btn btn-dark" target="_blank">Resume</a>
                                            </td>
                                            <td>{el?.interviewDate}</td>
                                            <td>{el?.status === true ? "Active" : "Inactive"}</td>
                                        </tr>

                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}