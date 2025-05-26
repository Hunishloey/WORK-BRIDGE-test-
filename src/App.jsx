import { useState } from 'react'
import './App.css'
import Home from './components/layout/Home'
import Contact from './components/adminpanel/Contact'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Adminmaster from './components/adminpanel/Adminmaster'
import Postjob from './components/adminpanel/Postjob'
import About from './components/adminpanel/About'
import Viewjob from './components/adminpanel/Viewjob'
import Managejob from './components/adminpanel/Managejob'
import Job_seeker_master from './components/jobseekerpanel/Job_seeker_master'
import Admin_update from './components/adminpanel/Admin_update'
import Update from './components/jobseekerpanel/Update'
import RegistrationForm from './components/jobseekerpanel/RegistrationForm'
import Job_hirer_master from './components/jobhirerpanel/Job_hirer_master'
import Job_hirer_postjob from './components/jobhirerpanel/Job_hirer_postjob'
import Job_hirer_register from './components/jobhirerpanel/Job_hirer_register'
import Job_hirer_update from './components/jobhirerpanel/Job_hirer_update'
import Job_hirer_viewjob from './components/jobhirerpanel/Job_hirer_viewjob'
import Job_hirer_managejob from './components/jobhirerpanel/Job_hirer_managejob'
import Applyjob from './components/jobseekerpanel/Applyjob'
import Login from './components/Login'
import AddSkill from './components/adminpanel/AddSkill'
import ManageSkill from './components/adminpanel/ManageSkill'
import UpdateSkill from './components/adminpanel/UpdateSkill'
import AddLocation from './components/adminpanel/AddLocation'
import ManageLocation from './components/adminpanel/ManageLocation'
import UpdateLocation from './components/adminpanel/UpdateLocation'
import ViewJobs from './components/adminpanel/ViewJobs'
import ViewApplications from './components/adminpanel/ViewApplications'
import ChangePassword from './components/adminpanel/ChangePassword'
import UpdateJobpost from './components/jobhirerpanel/UpdateJobpost'
import CompanyViewApplications from './components/jobhirerpanel/CompanyViewApplications'
import ViewSkills from './components/jobseekerpanel/ViewSkills'
import ViewLocations from './components/jobseekerpanel/ViewLocations'
import Viewjobseeker from './components/jobseekerpanel/Viewjobseeker'
import TrackApplication from './components/jobseekerpanel/TrackApplication'
import InterviewSchedule from './components/jobhirerpanel/InterviewSchedule'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
        <Routes>
          <Route path='/admin' element={<Adminmaster />}>
            <Route path='/admin' element={<Home />} />
            <Route path='/admin/login' element={<Login />} />
            <Route path='/admin/addSkill' element={<AddSkill />} />
            <Route path='/admin/manageSkill' element={<ManageSkill />} />
            <Route path='/admin/updateSkill/:_id' element={<UpdateSkill />} />
            <Route path='/admin/addLocation' element={<AddLocation />} />
            <Route path='/admin/manageLocation' element={<ManageLocation />} />
            <Route path='/admin/updateLocation/:_id' element={<UpdateLocation />} />
            <Route path='/admin/viewjob' element={<ViewJobs />} />
            <Route path='/admin/viewApplication' element={<ViewApplications />} />
            <Route path='/admin/changepassword' element={<ChangePassword />} />
          </Route>
        </Routes>

        <Routes>
          <Route path='/hirer' element={<Job_hirer_master />}>
            <Route path='/hirer' element={<Home />} />
            <Route path='/hirer/login' element={<Login />} />
            <Route path='/hirer/register' element={<Job_hirer_register />} />
            <Route path='/hirer/postjob' element={<Job_hirer_postjob />} />
            <Route path='/hirer/managejob' element={<Job_hirer_managejob />} />
            <Route path='/hirer/updateJobpost/:_id' element={<UpdateJobpost />} />
            <Route path='/hirer/changepassword' element={<ChangePassword />} />
            <Route path='/hirer/companyViewApplications/:_id' element={<CompanyViewApplications />} />
            <Route path='/hirer/interviewSchedule/:_id' element={<InterviewSchedule />} />
          </Route>
        </Routes>

        <Routes>
          <Route path='/' element={<Job_seeker_master />}>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<RegistrationForm />} />
            <Route path='/viewSkill' element={<ViewSkills />} />
            <Route path='/viewLocation' element={<ViewLocations />} />
            <Route path='/update' element={<Update />} />
            <Route path='/viewjob' element={<Viewjobseeker />} />
            <Route path='/apply/:jobId' element={<Applyjob />} />
            <Route path='/changepassword' element={<ChangePassword />} />
            <Route path='/trackApplication' element={<TrackApplication />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
