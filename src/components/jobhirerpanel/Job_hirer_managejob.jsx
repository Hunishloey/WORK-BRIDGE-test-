import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function Job_hirer_managejob() {
  var [jobsData, setJobData] = useState([]);

  var nav = useNavigate();

  const getData = () => {
    Apiservice.manageJobList({ status: true, addedById: sessionStorage.getItem('_id') })
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

  const deletedata = (_id) => {
    window.confirm("Are you sure to proceed ?")
    // console.log(_id);/
    let data = {
      _id: _id,
      status: false
    };
    Apiservice.changeStatusJobList(data)
      .then((res) => {
        setTimeout(() => {
          toast.success("Data deleted successfully");
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
              <h1 className="text-white font-weight-bold">Manage Jobs</h1>
              <div className="custom-breadcrumbs">
                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Manage Job</strong>
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
              <h2 className="mb-4">Manage Jobs</h2>
              <table className="table table-bordered">
                <thead className="table-dark text-uppercase text-center">
                  <tr>
                    <th>Sr No. </th>
                    <th>Location </th>
                    <th>Job Title </th>
                    <th>Description </th>
                    <th>No. of Vacancies </th>
                    <th>Experience Level </th>
                    <th>Experience </th>
                    <th>Salary </th>
                    <th>Working Days </th>
                    <th>Last Date to Apply </th>
                    <th>Status</th>
                    <th>Applications</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobsData?.map((el, index) => (
                    <tr key={index} className="text-center">
                      <td>{index + 1}</td>
                      <td>{el?.locationId?.locationName}</td>
                      <td>{el?.title}</td>
                      <td>{el?.description}</td>
                      <td>{el?.no_of_vacant_post}</td>
                      <td>{el?.experienceLevel}</td>
                      <td>{el?.experience}</td>
                      <td>{el?.salary}</td>
                      <td>{el?.workingDays}</td>
                      <td>{el?.lastDateToApply}</td>
                      <td>{el?.status === true ? "Active" : "Inactive"}</td>
                      <td>
                        <Link to={'/hirer/companyViewApplications/' + el?._id} className="btn btn-dark">View</Link>
                      </td>
                      <td>
                        <Link to={"/hirer/updateJobpost/" + el?._id}><button className="btn btn-info btn-sm mx-2">Edit</button></Link>

                        <button onClick={() => deletedata(el?._id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                      </td>
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