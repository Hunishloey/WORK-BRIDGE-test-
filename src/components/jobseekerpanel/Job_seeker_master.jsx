import { Outlet } from "react-router-dom";
import Job_seeker_header from "./Job_seeker_header";
import Job_seeker_footer from "./Job_seeker_footer";

export default function Job_seeker_master(){
    return(
        <>
        <Job_seeker_header/>
        <Outlet/>
        <Job_seeker_footer/>

        </>
    )
}