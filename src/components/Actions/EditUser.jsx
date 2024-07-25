import { useEffect } from "react";
import { Tick } from "../../lib";
import axios from "axios";

let username = "";
let password = "";
let id = 0;

export function SetUserInfo(a, b, c) {
  username = a;
  password = b;
  id = c;
}

function ChangeUser(a, b) {
  let username = document.querySelector('#editUsername');
  let password = document.querySelector('#editPassword');

  let data = {
    account_username: username.value, 
    account_password: password.value,
    account_id: id
  }

  axios
    .put('http://localhost:4435/accounts', data)
    .then(() => alert('Successfully edited'))
    .catch(err => alert(err));
}

function IsFormComplete() {
  let confirmEditUser = document.querySelector("#confirmEditUser");
  if (editUsername.value !== "" && editPassword.value !== "")
    return (confirmEditUser.className = "modal-close waves-effects btn-flat");

  return (confirmEditUser.className =
    "modal-close disabled waves-effects btn-flat");
}

export default function EditUser() {
  Tick(IsFormComplete);

  return (
    <div id="editUserModal" className="modal">
      <div className="modal-content">
        <h1 className="text-4xl">Edit personnel</h1>
        <div className="divider my-10"></div>

        <div className="row">
          <div className="col-span-6 input-field outlined">
            <input
              id="editUsername"
              defaultValue={username}
              placeholder="Username"
            />
          </div>

          <div className="col-span-6 input-field outlined">
            <input
              id="editPassword"
              defaultValue={password}
              placeholder="Password"
              readOnly={false}
            />
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#" className="modal-close waves-effects btn-flat">
          Cancel
        </a>

        <a
          href="#"
          id="confirmEditUser"
          className="modal-close disabled waves-effects btn-flat"
          onClick={() => ChangeUser(editUsername.value, editPassword.value)}
        >
          Done
        </a>
      </div>
    </div>
  );
}
