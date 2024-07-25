import axios from "axios";

function CreateResident() {
  let fname = document.querySelector("#addFname");
  let mname = document.querySelector("#addMname");
  let lname = document.querySelector("#addLname");
  let age = document.querySelector("#addAge");
  let sex = document.querySelector("#addSex");
  let birthday = document.querySelector("#addBirthday");
  let occupation = document.querySelector("#addOccupation");
  let civilStatus = document.querySelector("#addCivilStatus");
  let contactNumber = document.querySelector("#addContactNumber");

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
  };

  axios
    .post("http://localhost:4435/residents", data)
    .then(() => alert("Successfully created"))
    .catch((err) => alert(err));
}

export default function AddResidents() {
  document.body.addEventListener("change", () => {
    let confirmResident = document.querySelector("#confirmResident");
    if (
      addFname.value !== "" &&
      addMname.value !== "" &&
      addLname.value !== "" &&
      addAge.value !== "" &&
      addSex.value !== "" &&
      addBirthday.value !== "" &&
      addOccupation.value !== "" &&
      addCivilStatus.value !== "" &&
      addContactNumber.value !== ""
    )
      return (confirmResident.className = "modal-close waves-effects btn-flat");

    return (confirmResident.className =
      "modal-close disabled waves-effects btn-flat");
  });

  return (
    <div id="addResidentModal" className="modal">
      <div className="modal-content">
        <h1 className="text-4xl">Register new resident</h1>
        <div className="divider my-10"></div>

        <div className="row">
          <div className="col-span-4 input-field outlined">
            <input id="addFname" placeholder="Firstname" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="addMname" placeholder="Middlename" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="addLname" placeholder="Lastname" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="addAge" placeholder="Age" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input
              id="addSex"
              className="dropdown-trigger"
              data-target="addSexDp"
              placeholder="Sex"
              readOnly={true}
            />
            <ul id="addSexDp" className="dropdown-content">
              <li onClick={() => (addSex.value = "Male")}>
                <a href="#">Male</a>
              </li>
              <li onClick={() => (addSex.value = "Female")}>
                <a href="#">Female</a>
              </li>
            </ul>
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="addBirthday" type="date" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="addOccupation" placeholder="Occupation" />
          </div>

          <div className="col-span-4 input-field outlined">
            <input
              id="addCivilStatus"
              className="dropdown-trigger"
              data-target="addCivilStatusDp"
              placeholder="Civil Status"
              readOnly={true}
            />
            <ul id="addCivilStatusDp" className="dropdown-content">
              <li onClick={() => (addCivilStatus.value = "Single")}>
                <a href="#">Single</a>
              </li>
              <li onClick={() => (addCivilStatus.value = "Married")}>
                <a href="#">Married</a>
              </li>

              <li onClick={() => (addCivilStatus.value = "Divorce")}>
                <a href="#">Divorce</a>
              </li>

              <li onClick={() => (addCivilStatus.value = "Widow")}>
                <a href="#">Widow</a>
              </li>
            </ul>
          </div>

          <div className="col-span-4 input-field outlined">
            <input id="addContactNumber" placeholder="Contact Number" />
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#" className="modal-close waves-effects btn-flat">
          Cancel
        </a>

        <a
          href="#"
          id="confirmResident"
          className="modal-close disabled waves-effects btn-flat"
          onClick={() => CreateResident()}
        >
          Done
        </a>
      </div>
    </div>
  );
}
