import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Apiservice from "../Apiservice";

export default function ManageLocation() {
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

    const deletedata = (_id) => {
        window.confirm("Are you sure to proceed ?")
        // console.log(_id);/
        let data = {
            _id: _id,
            status: false
        };
        Apiservice.changeStatusLocation(data)
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
                            <h1 className="text-white font-weight-bold">Manage Location</h1>
                            <div className="custom-breadcrumbs">
                                <a href="#">Home</a> <span className="mx-2 slash">/</span>
                                <span className="text-white">
                                    <strong>Manage Location</strong>
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
                            <h2 className="mb-4">Manage Location</h2>
                            <table className="table table-bordered">
                                <thead className="table-dark text-uppercase text-center">
                                    <tr>
                                        <th>Sr No.</th>
                                        <th>Location Name</th>
                                        <th>Status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {locationsData?.map((el, index) => (
                                        <tr key={index} className="text-center">
                                            <td>{index + 1}</td>
                                            <td>{el?.locationName}</td>
                                            <td>{el?.status === true ? "Active" : "Inactive"}</td>
                                            <td>
                                                <Link to={"/admin/updateLocation/" + el?._id}><button className="btn btn-info btn-sm mx-2">Edit</button></Link>

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