import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function ViewLocations() {
    var [locationsData, setlocationData] = useState([]);

    var nav = useNavigate();

    const getData = () => {
        Apiservice.manageLocation({ status: true })
            .then((res) => {
                setlocationData(res.data.data)
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
                                View Locations</h1>
                            <div className="custom-breadcrumbs">
                                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>
                                        View Location</strong>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ToastContainer />

            <section class="site-section services-section bg-light block__62849" id="next-section">
                <div class="container">

                    <div class="row">
                        {locationsData?.map((el, index) => (
                            <div class="col-6 col-md-6 col-lg-4 mb-4 mb-lg-5">

                                <a href="#" class="block__16443 text-center d-block">
                                    <span class="custom-icon mx-auto"><span class="icon-paper-plane d-block"></span></span>
                                    <h3>{el?.locationName}</h3>
                                </a>

                            </div>
                        ))}
                    </div>


                </div>
            </section>
        </>
    )
}