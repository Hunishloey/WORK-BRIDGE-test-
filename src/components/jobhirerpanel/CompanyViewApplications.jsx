import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function CompanyViewApplications() {
    var [jobApplicationData, setJobApplicationData] = useState([]);

    var nav = useNavigate();
    var params = useParams()
    var jobID = params._id

    const getData = () => {
        Apiservice.manageJobApplication({ status: true, jobListingId: jobID })
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

    const changeStatus = (_id, status) => {
        window.confirm("Are you sure to proceed ?")
        // console.log(_id);/
        let data = {
            _id: _id,
            applicationStatus: status
        };
        Apiservice.updateJobApplication(data)
            .then((res) => {
                setTimeout(() => {
                    toast.success("Status changed successfully");
                }, 1000);
                getData()
            })
            .catch((err) => {
                setLoading(true)
            });
    };

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
                                            <td>
                                                {el?.applicationStatus}
                                                {el?.applicationStatus == "Inprocess" ? <>
                                                    <button onClick={() => changeStatus(el?._id,"Approved")} className="btn btn-sm mx-2"><i className="fa fa-check text-success"></i></button>

                                                    <button onClick={() => changeStatus(el?._id,"Rejected")} className="btn btn-sm mx-2"><i className="fa fa-times text-danger"></i></button>

                                                    

                                                </> : <></>}
                                            </td>
                                            <td>
                                                <a href={el?.resume} className="btn btn-dark" target="_blank">Resume</a>
                                            </td>
                                            <td>{el?.interviewDate ? el?.interviewDate : <><Link className="btn btn-warning" to={'/hirer/interviewSchedule/' + el?._id}>Schedule</Link></>}</td>
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