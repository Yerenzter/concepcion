import { useEffect, useState } from "react";
import axios from "axios";
import Loop from "./../lib/components/Loop";
import { Tick } from "../lib";
import AddResidents from "./Actions/AddResidents";
import { M } from "@materializecss/materialize/dist/js/materialize";
import EditResidents, { SetResidentInfo } from "./Actions/EditResidents";
import DeleteResident, { SetResidentId } from "./Actions/DeleteResidents";
import Loading from "./Loading";

export default function ManageResidents() {
  useEffect(() => {
    MInit();
  }, []);

  useEffect(() => {
    Tick(RecognizeFilteringMethod);
  }, []);

  const MInit = async () => {
    await M.Modal.init(document.querySelectorAll(".modal"));
    await M.Dropdown.init(document.querySelectorAll(".dropdown-trigger"));
  };

  const [data, sendData] = useState({});

  const RecognizeFilteringMethod = () => {
    let search = document.querySelector("#search-resident");

    if (search.value !== "") return SearchResident(search.value);

    return OrderById();
  };

  const OrderById = async () => {
    try {
      const res = await axios.get("http://localhost:4435/residents/sort/id");
      sendData(res.data);
    } catch (e) {
      throw e;
    }
  };

  const SearchResident = async (keyword) => {
    try {
      const search = {
        resident_search_id: keyword,
        resident_fname: keyword,
        resident_mname: keyword,
        resident_lname: keyword,
        resident_age: keyword,
        resident_sex: keyword,
        resident_occupation: keyword,
      };

      const res = await axios.post(
        "http://localhost:4435/residents/search",
        search
      );
      sendData(res.data);
    } catch (e) {
      throw e;
    }
  };

  if (data.length === undefined || data.length === 0) console.log('Loading...')
  return (
    <>
      <AddResidents />
      <EditResidents />
      <DeleteResident /> 

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
            <input id="search-resident" placeholder=" " />
            <label htmlFor="search">Search</label>
          </div>
        </div>

        <div className="col-span-12 flex justify-end">
          <button
            className="btn waves-effect modal-trigger bg-blue-500 justify-center mx-2"
            data-target="addResidentModal"
          >
            <i className="material-icons">add</i>
          </button>
        </div>

        <div className="col-span-12">
          <table>
            <thead>
              <tr>
                <th scope="row">#</th>
                <th>Firtsname</th>
                <th>Middlename</th>
                <th>Lastname</th>
                <th>Age</th>
                <th>Sex</th>
                <th>Birthday</th>
                <th>Occupation</th>
                <th>Civil Status</th>
                <th>Contact number</th>
                <th>Actions</th>
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
                    <td>{data[index].resident_contact_number}</td>
                    <td>
                      <button
                        className="btn waves-effect modal-trigger bg-green-500 justify-center mx-2"
                        data-target="editResidentModal"
                        onClick={() =>
                          SetResidentInfo(
                            data[index].resident_fname,
                            data[index].resident_mname,
                            data[index].resident_lname,
                            data[index].resident_age,
                            data[index].resident_sex,
                            data[index].resident_birthday,
                            data[index].resident_occupation,
                            data[index].resident_civilstatus,
                            data[index].resident_contact_number,
                            data[index].resident_id
                          )
                        }
                      >
                        <i className="material-icons">edit</i>
                      </button>
                      <button
                        className="btn waves-effect modal-trigger bg-red-500 justify-center mx-2"
                        data-target="deleteResidentModal"
                        onClick={() => SetResidentId(data[index].resident_id)}
                      >
                        <i className="material-icons">delete</i>
                      </button>
                    </td>
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
