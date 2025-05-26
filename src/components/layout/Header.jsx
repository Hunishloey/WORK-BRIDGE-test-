import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  var navigate = useNavigate();

  function openlogin() {
    console.log("openlogin func is called");

    // setTimeout(()=>{
    //     navigate("/login")},1000);
  }

  const logout = () => {
    sessionStorage.clear()
    navigate("/login")
  }
  return (
    <>
      {/* NAVBAR */}
      <header className="site-navbar mt-3">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="site-logo col-6">
              <a href="#">Admin panel</a>
            </div>
            <nav className="mx-auto site-navigation">
              <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                <li>
                  <Link to="/admin" className="nav-link">
                    <span className="text-white">Dashboard</span>
                  </Link>
                </li>

                <li className="has-children mx-4">
                  <span className="text-white">Skills</span>
                  <ul className="dropdown">
                    <li>
                      <Link to="/admin/addSkill">Add</Link>
                    </li>
                    <li>
                      <Link to="/admin/manageSkill">Manage</Link>
                    </li>
                  </ul>
                </li>

                <li className="has-children mx-4">
                  <span className="text-white">Location</span>
                  <ul className="dropdown">
                    <li>
                      <Link to="/admin/addLocation">Add</Link>
                    </li>
                    <li>
                      <Link to="/admin/manageLocation">Manage</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to="/admin/viewjob" className="nav-link">
                    <span className="text-white">Jobs</span>
                  </Link>
                </li>

                <li>
                  <Link to="/admin/viewApplication" className="nav-link">
                    <span className="text-white">Applicants</span>
                  </Link>
                </li>

                <li>
                  <Link to="/admin/changepassword" className="nav-link">
                    <span className="text-white">Change Password</span>
                  </Link>
                </li>

              </ul>
            </nav>
            <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
              <div className="ml-auto" onClick={logout} >
                <Link to="#"
                  className="btn btn-primary border-width-2 d-none d-lg-inline-block" >
                  <span className="mr-2 icon-lock_outline" />
                  Logout
                </Link>
              </div>
              <a
                href="#"
                className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
              >
                <span className="icon-menu h3 m-0 p-0 mt-2" />
              </a>
            </div>
          </div>
        </div>
      </header>

    </>


  )
}