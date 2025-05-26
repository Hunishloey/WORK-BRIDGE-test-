import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function AddSkill() {
  var [skillName, setSkillName] = useState("");
  const [image, setimage] = useState("");
  const fileInputRef = useRef(null);

  var nav = useNavigate();

  function handleForm(e) {
    e.preventDefault()
    let data = new FormData()
    data.append("skillName", skillName)
    data.append("image", image)

    Apiservice.addSkill(data)
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
          setSkillName("")
          setimage(null);
          // Clear file input
          if (fileInputRef.current) {
            fileInputRef.current.value = "";
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
              <h1 className="text-white font-weight-bold">Add Skills</h1>
              <div className="custom-breadcrumbs">
                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                <span className="text-white">
                  <strong>Add Skill</strong>
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
              <h2 className="mb-4">Add Skill</h2>

              <form action="#" className="p-4" onSubmit={handleForm}>
                <div className="row form-group">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Skill Name
                    </label>
                    <input
                      type="text"
                      id="skillName"
                      className="form-control"
                      placeholder="Skill Name"
                      value={skillName} onChange={(e) => setSkillName(e.target.value)} />
                  </div>
                </div>
                <div className="row form-group mb-4">
                  <div className="col-md-12 mb-3 mb-md-0">
                    <label className="text-black" htmlFor="fname">
                      Image
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