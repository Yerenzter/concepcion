import axios from "axios";

let id = 0;

export function SetUserId(idXYZ) {
  return (id = idXYZ);
}

function ForceDeleteUser() {
  const data = {
    account_id: id,
  };

  axios
    .post("http://localhost:4435/accounts/delete", data)
    .then(() => alert("Successfully deleted!"))
    .catch((err) => alert(err));
}
export default function DeleteUser(id) {
  return (
    <div id="deleteUserModal" className="modal">
      <div className="modal-content">
        <h1 className="text-4xl">Delete user</h1>
        <div className="divider my-10"></div>

        <p>Do you want to delete this user?</p>
      </div>

      <div className="modal-footer">
        <a href="#" className="modal-close btn-flat">
          Cancel
        </a>
        <a
          href="#"
          className="modal-close btn-flat"
          onClick={() => ForceDeleteUser()}
        >
          Done
        </a>
      </div>
    </div>
  );
}
