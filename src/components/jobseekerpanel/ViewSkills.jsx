import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function ViewSkills() {
    var [skillsData, setSkillData] = useState([]);

    var nav = useNavigate();

    const getData = () => {
        Apiservice.manageSkill({ status: true })
            .then((res) => {
                setSkillData(res.data.data)
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
                                View Skills</h1>
                            <div className="custom-breadcrumbs">
                                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>
                                        View Skill</strong>
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
                        {skillsData?.map((el, index) => (
                            <div class="col-md-6 col-lg-4 mb-5">
                                <a href="blog-single.html">
                                    <img src={el?.image} alt="Image" class="img-fluid rounded mb-4" style={{ "width": "100%", "height": "300px" }} />
                                </a>
                                <h3><a href="blog-single.html" class="text-black">{el?.skillName}</a></h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}