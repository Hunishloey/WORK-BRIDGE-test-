import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Apiservice from "../Apiservice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Job_hirer_register() {
  var [name, setName] = useState("");
  var [businessMail, setBusinessMail] = useState("");
  var [password, setPassword] = useState("");
  var [contact, setContact] = useState("");
  var [address, setAddress] = useState("");
  var [locationId, setLocationId] = useState("");
  var [description, setDescription] = useState("");
  const [image, setimage] = useState("");
  const fileInputRef = useRef(null);
  var [locationsData, setLocationData] = useState([]);

  var nav = useNavigate();

  const getData = () => {
    Apiservice.manageLocation({ status: true })
      .then((res) => {
        setLocationData(res.data.data)
      })
      .catch((err) => {
        console.log("error is", err);
      })
  }

  useEffect(() => {
    getData()
  }, [])

  function handleForm(e) {
    e.preventDefault()
    let data = new FormData()

    data.append("name", name)
    data.append("businessMail", businessMail)
    data.append("contact", contact)
    data.append("address", address)
    data.append("image", image)
    data.append("locationId", locationId)
    data.append("description", description)
    data.append("password", password)

    Apiservice.addCompany(data)
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

          Apiservice.Login({ email: businessMail, password: password })
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
              <h1 className="text-white font-weight-bold">Register</h1>
              <div className="custom-breadcrumbs">
                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Register your Organization</strong>
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
              <h2 className="mb-4">Register</h2>
              <form action="#" className="p-4" onSubmit={handleForm}>
                <div className="row form-group">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="form-control"
                      placeholder="Company Name"
                      value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Company Contact
                    </label>
                    <input
                      type="number"
                      id="contact"
                      className="form-control"
                      placeholder="Company Contact"
                      value={contact} onChange={(e) => setContact(e.target.value)} />
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="businessMail"
                      className="form-control"
                      placeholder="Business Email"
                      value={businessMail} onChange={(e) => setBusinessMail(e.target.value)} />
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0">
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
                <div className="row form-group mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Business Address
                    </label>
                    <input
                      type="text"
                      id="address"
                      className="form-control"
                      placeholder="Business Address"
                      value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Business Logo
                    </label>
                    <input
                      type="file"
                      id="image"
                      className="form-control"
                      placeholder="Image"
                      ref={fileInputRef}
                      onChange={(e) => { setimage(e.target.files[0]) }} />
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Business Description
                    </label>
                    <input
                      type="text"
                      id="description"
                      className="form-control"
                      placeholder="Business Description"
                      value={description} onChange={(e) => setDescription(e.target.value)} />
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
                      onChange={(e) => { setLocationId(e.target.value) }}>
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
                      defaultValue="Register"
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
