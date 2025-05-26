import axios from "axios"
export const BASE_URL = "http://localhost:5000/"

class ApiServices {
    getToken() {
        let obj = {
            authorization: sessionStorage.getItem('token')
        }
        return obj
    }

    Login(data) {
        return axios.post(BASE_URL + "api/user/login", data)
    }

    Dashboard(data) {
        return axios.post(BASE_URL + "api/dashboard", data, { headers: this.getToken() });
    }

    addSkill(data) {
        return axios.post(BASE_URL + "api/skills/add", data, { headers: this.getToken() });
    }

    manageSkill(data) {
        return axios.post(BASE_URL + "api/skills/all", data, { headers: this.getToken() });
    }

    changeStatusSkill(data) {
        return axios.post(BASE_URL + "api/skills/changeStatus", data, { headers: this.getToken() });
    }

    getSingleSkill(data) {
        return axios.post(BASE_URL + "api/skills/getsingle", data, { headers: this.getToken() });
    }

    updateSkill(data) {
        return axios.post(BASE_URL + "api/skills/update", data, { headers: this.getToken() });
    }

    addLocation(data) {
        return axios.post(BASE_URL + "api/location/add", data, { headers: this.getToken() });
    }

    manageLocation(data) {
        return axios.post(BASE_URL + "api/location/all", data, { headers: this.getToken() });
    }

    changeStatusLocation(data) {
        return axios.post(BASE_URL + "api/location/changestatus", data, { headers: this.getToken() });
    }

    getSingleLocation(data) {
        return axios.post(BASE_URL + "api/location/getsingle", data, { headers: this.getToken() });
    }

    updateLocation(data) {
        return axios.post(BASE_URL + "api/location/update", data, { headers: this.getToken() });
    }
  
    addCompany(data) {
        return axios.post(BASE_URL + "api/company/add", data, { headers: this.getToken() });
    }

    manageCompany(data) {
        return axios.post(BASE_URL + "api/company/all", data, { headers: this.getToken() });
    }

    changeStatusCompany(data) {
        return axios.post(BASE_URL + "api/company/changeStatus", data, { headers: this.getToken() });
    }

    getSingleCompany(data) {
        return axios.post(BASE_URL + "api/company/getsingle", data, { headers: this.getToken() });
    }

    updateCompany(data) {
        return axios.post(BASE_URL + "api/company/update", data, { headers: this.getToken() });
    }
    
    addJobList(data) {
        return axios.post(BASE_URL + "api/joblist/add", data, { headers: this.getToken() });
    }

    manageJobList(data) {
        return axios.post(BASE_URL + "api/joblist/all", data, { headers: this.getToken() });
    }

    changeStatusJobList(data) {
        return axios.post(BASE_URL + "api/joblist/changeStatus", data, { headers: this.getToken() });
    }

    getSingleJobList(data) {
        return axios.post(BASE_URL + "api/joblist/getsingle", data, { headers: this.getToken() });
    }

    updateJobList(data) {
        return axios.post(BASE_URL + "api/joblist/update", data, { headers: this.getToken() });
    }
    
    addJobSeeker(data) {
        return axios.post(BASE_URL + "api/jobseeker/add", data, { headers: this.getToken() });
    }

    manageJobSeeker(data) {
        return axios.post(BASE_URL + "api/jobseeker/getall", data, { headers: this.getToken() });
    }

    changeStatusJobSeeker(data) {
        return axios.post(BASE_URL + "api/jobseeker/changeStatus", data, { headers: this.getToken() });
    }

    getSingleJobSeeker(data) {
        return axios.post(BASE_URL + "api/jobseeker/getsingle", data, { headers: this.getToken() });
    }

    updateJobSeeker(data) {
        return axios.post(BASE_URL + "api/jobseeker/update", data, { headers: this.getToken() });
    }
    
    addJobApplication(data) {
        return axios.post(BASE_URL + "api/jobapplication/add", data, { headers: this.getToken() });
    }

    manageJobApplication(data) {
        return axios.post(BASE_URL + "api/jobapplication/all", data, { headers: this.getToken() });
    }

    changeStatusJobApplication(data) {
        return axios.post(BASE_URL + "api/jobapplication/changeStatus", data, { headers: this.getToken() });
    }

    getSingleJobApplication(data) {
        return axios.post(BASE_URL + "api/jobapplication/getsingle", data, { headers: this.getToken() });
    }

    updateJobApplication(data) {
        return axios.post(BASE_URL + "api/jobapplication/update", data, { headers: this.getToken() });
    }
    
    changePassword(data) {
        return axios.post(BASE_URL + "api/user/changepassword", data, { headers: this.getToken() });
    }

}

export default new ApiServices;