import PropTypes from "prop-types";
import { editRes } from "../api-axios.js";
import { useState, useEffect } from "react";

export const EditModalBtn = ({ id, resData, edit }) => {
  // let intialForm = {
  //   name: "",
  //   username: "",
  //   email: "",
  //   phone: "",
  //   company: "",
  // };
  // const [edit, setEdit] = useState(intialForm);
  const [resId, setResId] = useState();

    console.log(edit);
 

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   // setEdit({ ...edit, [name]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(upDateRes());
    // console.log(edit);
    // setEdit(formData);
  };
  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        
        >
        Edit Residents
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Residents
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <input
                  type="text"
                  value={edit?.name}
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  // onChange={handleChange}
                />
                <br />
                <input
                  type="text"
                  name="username"
                  value={edit?.username}
                  className="form-control"
                  placeholder="Username"
                  // onChange={handleChange}
                />
                <br />
                <input
                  type="text"
                  name="company"
                  value={edit?.company}
                  className="form-control"
                  placeholder="Company"
                  // onChange={handleChange}
                />
                <br />
                <input
                  type="Email"
                  name="email"
                  value={edit?.email}
                  className="form-control"
                  placeholder="Email"
                  // onChange={handleChange}
                />
                <br />
                <input
                  type="text"
                  name="number"
                  value={edit?.number}
                  className="form-control"
                  placeholder="Phone"
                  // onChange={handleChange}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
EditModalBtn.propTypes = {
  id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  resData: PropTypes.array,
  edit: PropTypes.object,
};
export default EditModalBtn;
