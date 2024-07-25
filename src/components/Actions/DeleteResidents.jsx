import axios from "axios";

let id = 0;

export function SetResidentId(idXYZ) {
  return (id = idXYZ);
}

function ForceDeleteResident() {
  const data = {
    resident_id: id,
  };

  axios
    .post("http://localhost:4435/residents/delete", data)
    .then(() => alert("Successfully deleted!"))
    .catch((err) => alert(err));
}
export default function DeleteResident() {
  return (
    <div id="deleteResidentModal" className="modal">
      <div className="modal-content">
        <h1 className="text-4xl">Delete resident</h1>
        <div className="divider my-10"></div>

        <p>Do you want to delete this resident?</p>
      </div>

      <div className="modal-footer">
        <a href="#" className="modal-close btn-flat">
          Cancel
        </a>
        <a
          href="#"
          className="modal-close btn-flat"
          onClick={() => ForceDeleteResident()}
        >
          Done
        </a>
      </div>
    </div>
  );
}
