import useToken from "../routers/useToken";
import Home from "./Home";

let yoyo = 0;

export function SetYoyo(a) {
  yoyo = a;
}

export default function Dashboard() {
  console.log(yoyo);
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">
              HI USER WELCOME TO BRGY CONCEPCION INFORMATION SYSTEM
            </a>
            <a
              href="/"
              className="right text-black px-5 waves-effect"
              onClick={() => Logout()}
            >
              <i className="material-icons">logout</i>
            </a>
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
                <button
                  className="btn bg-blue-500 waves-effect"
                  onClick={() =>
                    (window.location.href = "/dashboard/manage/users")
                  }
                >
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
                <button
                  className="btn bg-blue-500 waves-effect"
                  onClick={() =>
                    (window.location.href = "/dashboard/manage/residents")
                  }
                >
                  Click Here
                </button>
              </div>
            </div>

            <div className="card col-span-6 hidden">
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
