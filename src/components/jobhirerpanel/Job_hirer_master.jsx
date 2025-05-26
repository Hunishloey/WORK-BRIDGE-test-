import { Outlet } from "react-router-dom";
import Job_hirer_header from "./Job_hirer_header";
import Job_hirer_footer from "./Job_hirer_footer";


export default function Job_hirer_master(){
    return(
        <>
        <Job_hirer_header/>
        <Outlet/>
        <Job_hirer_footer/>

        </>
    )
}