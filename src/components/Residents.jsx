import { useState, useEffect } from "react";
import { getAllRes } from "../api-axios.js";
import Header from "./Header.jsx";
import EditModalBtn from "./EditModalBtn.jsx";

function Residents() {
  const [occupied, setOccupied] = useState([]);
  // const [edit , setEdit] = useState();

  const loadData = async () => {
    const data = await getAllRes();
    setOccupied(data);
  };
  useEffect(() => {
    loadData();
  }, []);


  return (
    <>
      <div className="container">
        <Header />
        <div className="d-sm-flex row gap-4 ms-3">
          {occupied.map((flat) => (
            <div
              key={flat.id}
              className="card text-bg-info mb-3 mt-3"
              style={{ maxWidth: "18rem" }}
            >
              <div className="card-header">Occupied</div>
              <div className="card-body">
                <h5 className="card-title">Flat No : {flat.id}</h5>
                <ul className="card-text" style={{ listStyle: "none" }}>
                  <li>
                    <b>Name :</b> {flat.name}
                  </li>
                  <li>
                    <b>Username:</b> {flat.username}
                  </li>
                  <li>
                    <b>Company: </b> {flat.company}
                  </li>
                  <li>
                    <b>Email: </b> {flat.email}
                  </li>
                  <li>
                    <b>Phone: </b> {flat.phone}
                  </li>
                </ul>
                <div className="d-sm-flex mt-3">
                  <button className="btn btn-danger">Delete</button>
                  <EditModalBtn id={flat.id} resData={occupied} edit={flat}/>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Residents;
