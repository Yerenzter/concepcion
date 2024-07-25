import { useEffect, useState } from "react";
import axios from "axios";
import Loop from "./../lib/components/Loop";
import { Tick } from "../lib";
import { M } from "@materializecss/materialize/dist/js/materialize";
import AddUser from "./Actions/AddUser";
import EditUser, { SetUserInfo } from "./Actions/EditUser";
import DeleteUser, { SetUserId } from "./Actions/Delete";

export default function ManageUser() {
  useEffect(() => {
    MInit();
  }, []);

  useEffect(() => {
    Tick(RecognizeFilteringMethod);
  }, []);

  const [data, sendData] = useState({});

  const RecognizeFilteringMethod = () => {
    let search = document.querySelector("#search");

    if (search.value !== "") return SearchUser(search.value);

    return OrderById();
  };

  const OrderById = async () => {
    try {
      const res = await axios.get("http://localhost:4435/accounts/sort/id");
      sendData(res.data);
    } catch (e) {
      throw e;
    }
  };

  const SearchUser = async (keyword) => {
    try {
      const search = {
        account_search_id: keyword,
        account_search_username: keyword,
        account_search_password: keyword,
      };

      const res = await axios.post(
        "http://localhost:4435/accounts/search",
        search
      );
      sendData(res.data);
    } catch (e) {
      throw e;
    }
  };

  const MInit = async () => {
    await M.Modal.init(document.querySelectorAll(".modal"));
  };

  return (
    <>
      <AddUser />
      <EditUser />
      <DeleteUser />

      <div className="navbar-fixed">
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">Manage Users</a>
          </div>
        </nav>
      </div>

      <div className="h-screen p-10 bg-amber-50">
        <div className="col-span-12 flex items-center">
          <a href="/dashboard" className="breadcrumb">
            Dashboard
          </a>
          <a href="/dashboard/manage/users" className="breadcrumb">
            Manage Users
          </a>
          <a href="/dashboard/manage/users" className="breadcrumb"></a>

          <div className="input-field col-span-6">
            <input id="search" placeholder=" " />
            <label htmlFor="search">Search</label>
          </div>
        </div>

        <div className="col-span-12 flex justify-end">
          <button
            className="btn waves-effect modal-trigger bg-blue-500 justify-center mx-2"
            data-target="addUserModal"
          >
            <i className="material-icons">add</i>
          </button>
        </div>

        <div className="col-span-12">
          <table>
            <thead>
              <tr>
                <th scope="row">#</th>
                <th>Username</th>
                <th>Password</th>
                <th>Role</th>
                <th>Date Created</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              <Loop repeat={data.length}>
                {(index) => (
                  <tr scope="row" key={index}>
                    <th scope="row" name="account_id">
                      {data[index].account_id}
                    </th>
                    <td>{data[index].account_username}</td>
                    <td>{data[index].account_password}</td>
                    <td>{data[index].account_type}</td>
                    <td>{data[index].account_creation}</td>
                    <td>
                      <button
                        className="btn waves-effect modal-trigger edit-btn bg-green-500 justify-center mx-2"
                        data-target="editUserModal"
                        onClick={() =>
                          SetUserInfo(
                            data[index].account_username,
                            data[index].account_password,
                            data[index].account_id
                          )
                        }
                      >
                        <i className="material-icons">edit</i>
                      </button>
                      <button
                        className="btn waves-effect modal-trigger bg-red-500 justify-center mx-2"
                        data-target="deleteUserModal"
                        onClick={() => SetUserId(data[index].account_id)}
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
