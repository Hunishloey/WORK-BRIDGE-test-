import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function InterviewSchedule() {

  const [interviewDate, setinterviewDate] = useState("");

  const params = useParams()
  const _id = params._id
  const nav = useNavigate()

  function handleForm(e) {
    e.preventDefault()
    let data = {
      _id: _id,
      interviewDate: interviewDate,
      applicationStatus: "Inprocess"
    }

    Apiservice.updateJobApplication(data)
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
          nav('/hirer/managejob')
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
              <h1 className="text-white font-weight-bold">Schedule Interviews</h1>
              <div className="custom-breadcrumbs">
                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Schedule Interview</strong>
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
              <h2 className="mb-4">Schedule Interview</h2>

              <form action="#" className="p-4" onSubmit={handleForm}>
                <div className="row form-group mb-4">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Interview Date
                    </label>
                    <input
                      type="date"
                      id="interviewDate"
                      className="form-control"
                      placeholder="Interview Date"
                      value={interviewDate}
                      onChange={(e) => { setinterviewDate(e.target.value) }} />
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