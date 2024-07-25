import Concepcion from '../assets/concepcion.jpeg';

export default function Home() {
    return(
        <div className="row p-10  h-screen bg-amber-50 justify-center">
            <div className="col-span-6 content-center justify-center center-align">
                <center><div className='concepcion'></div></center>
                <h1 className="text-3xl">
                    Barangay Concepcion Information System, Monitoring and handling data transfer is better than before.
                </h1>
            </div>

            <div className="col-span-6 content-center px-24">
                <div className="card bg-gray-500">
                    <div className="card-body p-10 center-align">
                        <div className="input-field outlined mb-5">
                            <input id="username" placeholder=" " />
                            <label htmlFor="username">Username</label>
                        </div>

                        <div className="input-field outlined mb-5">
                            <input id="password" placeholder=" " />
                            <label htmlFor="username">Password</label>
                        </div>

                        <button className="btn bg-blue-500 waves-effect text-white">Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
}