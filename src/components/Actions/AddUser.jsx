import axios from "axios";

function CreateUser() {
  let username = document.querySelector("#addUsername");
  let password = document.querySelector("#addPassword");
  let date = new Date();
  let year = date.getUTCFullYear();
  let month =
    date.getUTCMonth() <= 9 ? `0${date.getUTCMonth()}` : date.getUTCMonth();
  let day = date.getUTCDay() <= 9 ? `0${date.getUTCDay()}` : date.getUTCDay();

  const data = {
    account_username: username.value,
    account_password: password.value,
    account_type: "Personnel",
    account_creation: Number(`${year}${month}${day}`),
  };

  axios
    .post("http://localhost:4435/accounts", data)
    .then(() => alert("Successfully added!"))
    .catch((err) => alert(err));
}

export default function AddUser() {
  document.body.addEventListener("change", () => {
    let confirmUser = document.querySelector("#confirmUser");
    if (addUsername.value !== "" && addPassword.value !== "")
      return (confirmUser.className = "modal-close waves-effects btn-flat");

    return (confirmUser.className =
      "modal-close disabled waves-effects btn-flat");
  });

  return (
    <div id="addUserModal" className="modal">
      <div className="modal-content">
        <h1 className="text-4xl">Add new personnel</h1>
        <div className="divider my-10"></div>

        <div className="row">
          <div className="col-span-6 input-field outlined">
            <input id="addUsername" placeholder="Username" />
          </div>

          <div className="col-span-6 input-field outlined">
            <input id="addPassword" placeholder="Password" />
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a href="#" className="modal-close waves-effects btn-flat">
          Cancel
        </a>

        <a
          href="#"
          id="confirmUser"
          className="modal-close disabled waves-effects btn-flat"
          onClick={() => CreateUser()}
        >
          Done
        </a>
      </div>
    </div>
  );
}
