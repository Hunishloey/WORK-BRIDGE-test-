import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";
import { useEffect, useState } from "react";
import Login from "../Login";

export default function Home() {
  const [total_jobhirer, settotal_jobhirer] = useState(0)
  const [total_jobseeker, settotal_jobseeker] = useState(0)
  const [total_jobapplication, settotal_jobapplication] = useState(0)
  const [total_jobs, settotal_jobs] = useState(0)

  const getDashboard = () => {
    Apiservice.Dashboard({})
      .then(res => {
        settotal_jobhirer(res.data.total_jobhirer)
        settotal_jobseeker(res.data.total_jobseeker)
        settotal_jobapplication(res.data.total_jobapplication)
        settotal_jobs(res.data.total_jobs)
      })
  }

  useEffect(() => {
    getDashboard()
  }, [])

  return (
    <>
      {sessionStorage.getItem('_id') ? <>
        <section
          className="section-hero overlay inner-page bg-image"
          style={{ backgroundImage: 'url("/assets/images/hero_1.jpg")' }}
          id="home-section"
        >
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <h1 className="text-white font-weight-bold">Dashboard</h1>
                <div className="custom-breadcrumbs">
                  <a href="#">Home</a> <span className="mx-2 slash">/</span>
                  <span className="text-white">
                    <strong>Dashboard</strong>
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
                <h2 className="mb-4">Dashboard</h2>

                <div className="row">

                  <div className="col-md-2 mx-auto border rounded">
                    <div className="card-body">
                      <h2 className="card-title">Total Companies</h2>
                      <p className="card-text h1 text-center">{total_jobhirer}</p>
                    </div>
                  </div>

                  <div className="col-md-2 mx-auto border rounded">
                    <div className="card-body">
                      <h2 className="card-title">Total Job Seeker</h2>
                      <p className="card-text h1 text-center">{total_jobseeker}</p>
                    </div>
                  </div>

                  <div className="col-md-2 mx-auto border rounded">
                    <div className="card-body">
                      <h2 className="card-title">Total Jobs</h2>
                      <p className="card-text h1 text-center">{total_jobs}</p>
                    </div>
                  </div>

                  <div className="col-md-2 mx-auto border rounded">
                    <div className="card-body">
                      <h2 className="card-title">Total Applicants</h2>
                      <p className="card-text h1 text-center">{total_jobapplication}</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>
      </> :
       <Login/>}
    </>
  )
}