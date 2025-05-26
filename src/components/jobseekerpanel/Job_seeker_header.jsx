import { Link, useNavigate } from "react-router-dom";

export default function Job_seeker_header() {
  var navigate = useNavigate();

  // function openlogin(){
  //     console.log("openlogin func is called");

  //     // setTimeout(()=>{
  //     //     navigate("/login")},1000);
  //     }

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
              <a href="index.html">WorkBridge</a>
            </div>
            <nav className="mx-auto site-navigation">
              <ul className="site-menu js-clone-nav d-none d-xl-block ml-0 pl-0">
                {sessionStorage.getItem("userType") == 3 ?
                  <>
                    <li>
                      <Link to="/" className="nav-link">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/viewSkill">Skills</Link>
                    </li>
                    <li>
                      <Link to="/viewLocation">Locations</Link>
                    </li>

                    <li className="has-children">
                      <a href="#">Job</a>
                      <ul className="dropdown">
                        <li>
                          <Link to="/viewjob">View jobs</Link>
                        </li>
                        <li>
                          <Link to="/trackApplication">Track Application</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/changepassword">Change Password</Link>
                    </li>
                  </> :
                  <></>
                }
              </ul>
            </nav>
            {sessionStorage.getItem("userType") == 3 ? <>
              <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                <div className="ml-auto" onClick={logout}>
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
            </> : <>
              <div className="right-cta-menu text-right d-flex aligin-items-center col-6">
                <div className="ml-auto">
                  <Link to="/hirer/login"
                    className="btn btn-primary border-width-2 d-none d-lg-inline-block" >
                    <span className="mr-2 icon-lock_outline" />
                    Log In
                  </Link>
                </div>
                <a
                  href="#"
                  className="site-menu-toggle js-menu-toggle d-inline-block d-xl-none mt-lg-2 ml-3"
                >
                  <span className="icon-menu h3 m-0 p-0 mt-2" />
                </a>
              </div>
            </>}

          </div>
        </div>
      </header>

    </>


  )
}