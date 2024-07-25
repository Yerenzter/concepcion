import { useEffect, useState } from "react";
import axios from "axios";
import Loop from "./../lib/components/Loop";
import { Tick } from "../lib";

export default function ManageResidents() {
  useEffect(() => {
    Tick(GetAccounts);
  }, []);

  const [data, sendData] = useState({});

  const GetAccounts = async () => {
    try {
      const res = await axios.get("http://localhost:4435/residents");
      sendData(res.data);
    } catch (e) {
      throw e;
    }
  };

  console.log(data.length);
  return (
    <>
      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">Manage Residents</a>
          </div>
        </nav>
      </div>

      <div className="h-screen p-10 bg-amber-50">
        <div className="col-span-12 flex items-center">
          <a href="/dashboard" className="breadcrumb">
            Dashboard
          </a>
          <a href="/dashboard/manage/residents" className="breadcrumb">
            Manage Residents
          </a>
          <a href="/dashboard/manage/residents" className="breadcrumb"></a>

          <div className="input-field col-span-3">
            <input id="search" placeholder=" " />
            <label htmlFor="search">Search</label>
          </div>

          <button className="btn waves-effect bg-blue-500 justify-center">
            Search
          </button>
        </div>

        <div className="col-span-12 flex justify-end">
          <button className="btn waves-effect bg-blue-500 justify-center mx-2">
            <i className="material-icons">add</i>
          </button>
          <button className="btn waves-effect bg-green-500 justify-center mx-2">
            <i className="material-icons">edit</i>
          </button>
          <button className="btn waves-effect bg-red-500 justify-center mx-2">
            <i className="material-icons">delete</i>
          </button>
        </div>

        <div className="col-span-12">
          <table>
            <thead>
              <tr>
                <th scope="row">#</th>
                <th>Firtsname</th>
                <th>Middlename</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Birthday</th>
                <th>Occupation</th>
                <th>Civil Status</th>
                <th>Contact number</th>
              </tr>
            </thead>

            <tbody>
              <Loop repeat={data.length}>
                {(index) => (
                  <tr scope="row" key={index}>
                    <th scope="row" name="resident_id">
                      {data[index].resident_id}
                    </th>
                    <td>{data[index].resident_fname}</td>
                    <td>{data[index].resident_mname}</td>
                    <td>{data[index].resident_lname}</td>
                    <td>{data[index].resident_age}</td>
                    <td>{data[index].resident_sex}</td>
                    <td>{data[index].resident_birthday}</td>
                    <td>{data[index].resident_occupation}</td>
                    <td>{data[index].resident_civilstatus}</td>
                    <td>{data[index].residend_contact_number}</td>
                  </tr>
                )}
              </Loop>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
