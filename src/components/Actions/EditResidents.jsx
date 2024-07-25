import axios from "axios";
import { Tick } from "../../lib";

let id = null;
let fname = null;
let mname = null;
let lname = null;
let age = null;
let sex = null;
let birthday = null;
let occupation = null;
let civilStatus = null;
let contactNumber = null;

export function SetResidentInfo(a, b, c, d, e, f, g, h, i, j) {
  fname = a;
  mname = b;
  lname = c;
  age = d;
  sex = e;
  birthday = f;
  occupation = g;
  civilStatus = h;
  contactNumber = i;
  id = j;
}

function EditResident() {
  let fname = document.querySelector("#editFname");
  let mname = document.querySelector("#editMname");
  let lname = document.querySelector("#editLname");
  let age = document.querySelector("#editAge");
  let sex = document.querySelector("#editSex");
  let birthday = document.querySelector("#editBirthday");
  let occupation = document.querySelector("#editOccupation");
  let civilStatus = document.querySelector("#editCivilStatus");
  let contactNumber = document.querySelector("#editContactNumber");

  let data = {
    resident_fname: fname.value,
    resident_mname: mname.value,
    resident_lname: lname.value,
    resident_age: age.value,
    resident_sex: sex.value,
    resident_birthday: birthday.value,
    resident_occupation: occupation.value,
    resident_civilstatus: civilStatus.value,
    resident_contact_number: contactNumber.value,
    resident_id: id
  };

  axios
    .put("http://localhost:4435/residents", data)
    .then(() => alert("Successfully edited"))
    .catch((err) => alert(err));
}

function IsFormComplete() {
  let confirmEditResident = document.querySelector("#confirmEditResident");
  if (
    editFname.value !== "" &&
    editMname.value !== "" &&
    editLname.value !== "" &&
    editAge.value !== "" &&
    editSex.value !== "" &&
    editBirthday.value !== "" &&
    editOccupation.value !== "" &&
    editCivilStatus.value !== "" &&
    editContactNumber.value !== ""
  )
    return (confirmEditResident.className =
      "modal-close waves-effects btn-flat");

  return (confirmEditResident.className =
    "modal-close disabled waves-effects btn-flat");
}

export default function EditResidents() {
  Tick(IsFormComplete);

  return (
    <div id="editResidentModal" className="modal">
      <div className="modal-content">
        <h1 className="text-4xl">Update resident's information </h1>
        <div className="divider my-10"></div>

        <div className="row">
          <div className="col-span-4 input-field outlined">
            <input id="editFname" defaultValue={fname} placeholder="Firstname" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="editMname" defaultValue={mname} placeholder="Middlename" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="editLname" defaultValue={lname} placeholder="Lastname" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="editAge" defaultValue={age} placeholder="Age" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input
              id="editSex"
              className="dropdown-trigger"
              data-target="editSexDp"
              placeholder="Sex"
              readOnly={true}
              defaultValue={sex}
            />
            <ul id="editSexDp" className="dropdown-content">
              <li onClick={() => (editSex.value = "Male")}>
                <a href="#">Male</a>
              </li>
              <li onClick={() => (editSex.value = "Female")}>
                <a href="#">Female</a>
              </li>
            </ul>
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="editBirthday" defaultValue={birthday} type="date" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="editOccupation" defaultValue={occupation} placeholder="Occupation" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input
              id="editCivilStatus"
              className="dropdown-trigger"
              data-target="editCivilStatusDp"
              placeholder="Civil Status"
              readOnly={true}
              defaultValue={civilStatus}
            />
            <ul id="editCivilStatusDp" className="dropdown-content">
              <li onClick={() => (editCivilStatus.value = "Single")}>
                <a href="#">Single</a>
              </li>
              <li onClick={() => (editCivilStatus.value = "Married")}>
                <a href="#">Married</a>
              </li>

              <li onClick={() => (editCivilStatus.value = "Divorce")}>
                <a href="#">Divorce</a>
              </li>

              <li onClick={() => (editCivilStatus.value = "Widow")}>
                <a href="#">Widow</a>
              </li>
            </ul>
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="editContactNumber" defaultValue={contactNumber} placeholder="Contact Number" />
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#" className="modal-close waves-effects btn-flat">
          Cancel
        </a>

        <a
          href="#"
          id="confirmEditResident"
          className="modal-close disabled waves-effects btn-flat"
          onClick={() => EditResident()}
        >
          Done
        </a>
      </div>
    </div>
  );
}
