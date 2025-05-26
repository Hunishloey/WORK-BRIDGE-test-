import { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Apiservice from "../Apiservice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function UpdateJobpost() {
  var [title, settitle] = useState("");
  var [description, setdescription] = useState("");
  var [locationId, setlocationId] = useState("");
  var [no_of_vacant_post, setno_of_vacant_post] = useState("");
  var [skillId, setskillId] = useState("");
  var [salary, setsalary] = useState("");
  var [workingDays, setworkingDays] = useState("");
  var [lastDateToApply, setlastDateToApply] = useState("");
  var [experience, setexperience] = useState("");
  var [experienceLevel, setexperienceLevel] = useState("");

  var [locationsData, setLocationData] = useState([]);
  var [skillData, setSkillData] = useState([]);

  var nav = useNavigate();
  const params = useParams()
  const _id = params._id

  useEffect(() => {
    Apiservice.getSingleJobList({ _id: _id })
      .then((res) => {
        settitle(res.data.data.title)
        setdescription(res.data.data.description)
        setno_of_vacant_post(res.data.data.no_of_vacant_post)
        setsalary(res.data.data.salary)
        setworkingDays(res.data.data.workingDays)
        setlastDateToApply(res.data.data.lastDateToApply)
        setexperience(res.data.data.experience)
        setexperienceLevel(res.data.data.experienceLevel)
        setskillId(res.data.data.skillId)
        setlocationId(res.data.data.locationId)
      })
      .catch((err) => {
        toast.error("Something went wrong!!")
      })
  }, [])

  const getData = () => {
    Apiservice.manageLocation({ status: true })
      .then((res) => {
        setLocationData(res.data.data)
      })
      .catch((err) => {
        console.log("error is", err);
      })
  }

  const getSkillData = () => {
    Apiservice.manageSkill({ status: true })
      .then((res) => {
        // console.log(res.data.data)
        setSkillData(res.data.data)
      })
      .catch((err) => {
        console.log("error is", err);
      })
  }

  useEffect(() => {
    getData(),
      getSkillData()
  }, [])

  function handleForm(e) {
    e.preventDefault()

    let data = {
      _id: _id,
      title: title,
      description: description,
      locationId: locationId,
      no_of_vacant_post: no_of_vacant_post,
      salary: salary,
      skillId: skillId,
      workingDays: workingDays,
      lastDateToApply: lastDateToApply,
      experience: experience,
      experienceLevel: experienceLevel
    }

    Apiservice.updateJobList(data)
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
      {/* HOME */}
      <section
        className="section-hero overlay inner-page bg-image"
        style={{ backgroundImage: 'url("/assets/images/hero_1.jpg")' }}
        id="home-section"
      >
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h1 className="text-white font-weight-bold">Job Post</h1>
              <div className="custom-breadcrumbs">
                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Update a Vacancy</strong>
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
              <h2 className="mb-4">Update Job Post</h2>
              <form action="#" className="p-4" onSubmit={handleForm}>
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Job Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      className="form-control"
                      placeholder="Job Title"
                      value={title} onChange={(e) => settitle(e.target.value)} />
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Job Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="form-control"
                      placeholder="Job Description"
                      value={description} onChange={(e) => setdescription(e.target.value)} />
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      No. of Vacancies
                    </label>
                    <input
                      type="number"
                      id="no_of_vacant_post"
                      className="form-control"
                      placeholder="No. of Vacancies"
                      value={no_of_vacant_post} onChange={(e) => setno_of_vacant_post(e.target.value)} />
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Salary
                    </label>
                    <input
                      type="text"
                      id="salary"
                      className="form-control"
                      placeholder="Salary Per Annum"
                      value={salary}
                      onChange={(e) => setsalary(e.target.value)} />
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Working Days <small>(Per Week)</small>
                    </label>
                    <input
                      type="text"
                      id="workingDays"
                      className="form-control"
                      placeholder="Working Days (Per Week)"
                      value={workingDays} onChange={(e) => setworkingDays(e.target.value)} />
                  </div>

                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Last Date to Apply
                    </label>
                    <input
                      type="date"
                      id="lastDateToApply"
                      className="form-control"
                      placeholder="Last Date to Apply"
                      value={lastDateToApply} onChange={(e) => setlastDateToApply(e.target.value)} />
                  </div>
                </div>

                <div className="row form-group mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Experience
                    </label>
                    <input
                      type="text"
                      id="experience"
                      className="form-control"
                      placeholder="Experience"
                      value={experience} onChange={(e) => setexperience(e.target.value)} />
                  </div>

                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Experience Level
                    </label>
                    <select
                      id="experienceLevel"
                      className="form-control"
                      placeholder="Select Location"
                      value={experienceLevel}
                      onChange={(e) => { setexperienceLevel(e.target.value) }}>
                      <option value="" selected disabled >Select Experience</option>
                      <option>Fresher</option>
                      <option>Mid-scale</option>
                      <option>Senior</option>
                    </select>
                  </div>
                </div>

                <div className="row form-group mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Skill
                    </label>
                    <select
                      id="skillId"
                      className="form-control"
                      placeholder="Select Location"
                      value={skillId}
                      onChange={(e) => { setskillId(e.target.value) }}>
                      <option value="" selected disabled >Select Skills</option>
                      {skillData?.map((el, index) => (
                        <option key={index} value={el?._id}>{el?.skillName}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Location
                    </label>
                    <select
                      id="locationId"
                      className="form-control"
                      placeholder="Select Location"
                      value={locationId}
                      onChange={(e) => { setlocationId(e.target.value) }}>
                      <option value="" selected disabled >Select Location</option>
                      {locationsData?.map((el, index) => (
                        <option key={index} value={el?._id}>{el?.locationName}</option>
                      ))}
                    </select>
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
              {/* <div className="col-12">
                <span>Don't have an account?
                  <Link to="/register" > Register as Job Seeker</Link> |
                  <Link to="/hirer/register" > Register as Company</Link>
                </span>
              </div> */}
            </div>
            <div className="col-lg-2"></div>
          </div>
        </div>
      </section>
    </>
  )
}