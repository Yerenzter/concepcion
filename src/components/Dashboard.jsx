export default function Dashboard() {
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrappe">
            <a className="brand-logo">
              HI USER WELCOME TO BRGY CONCEPCION INFORMATION SYSTEM
            </a>S
          </div>
        </nav>
      </div>
      <div className="row p-10  h-screen bg-amber-50 justify-center">
        <div className="col-span-6 content-center justify-center center-align">
          <center>
            <div className="concepcion"></div>
          </center>
        </div>

        <div className="col-span-6 content-center px-24">
          <div className="row">
            <div className="card col-span-6">
              <div className="card-body p-10 center-align">
                <span>Manage User</span>
              </div>
              <div className="divider"></div>
              <div className="card-footer center-align p-5">
                <button className="btn bg-blue-500 waves-effect"
                  onClick={() => window.location.href='/dashboard/manage/users'}>
                  Click Here
                </button>
              </div>
            </div>

            <div className="card col-span-6">
              <div className="card-body p-10 center-align">
                <span>Create Documents</span>
              </div>
              <div className="divider"></div>
              <div className="card-footer center-align p-5">
                <button className="btn bg-blue-500 waves-effect">
                  Click Here
                </button>
              </div>
            </div>

            <div className="card col-span-6">
              <div className="card-body p-10 center-align">
                <span>Manage Residents</span>
              </div>
              <div className="divider"></div>
              <div className="card-footer center-align p-5">
                <button className="btn bg-blue-500 waves-effect"  
                  onClick={() => window.location.href='/dashboard/manage/residents'}>
                  Click Here
                </button>
              </div>
            </div>

            <div className="card col-span-6">
              <div className="card-body p-10 center-align">
                <span>Manage Requests</span>
              </div>
              <div className="divider"></div>
              <div className="card-footer center-align p-5">
                <button className="btn bg-blue-500 waves-effect">
                  Click Here
                </button>
              </div>
            </div>

            <div className="card col-span-6">
              <div className="card-body p-10 center-align">
                <span>Manage Transactions</span>
              </div>
              <div className="divider"></div>
              <div className="card-footer center-align p-5">
                <button className="btn bg-blue-500 waves-effect">
                  Click Here
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
