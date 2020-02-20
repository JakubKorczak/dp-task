import React, { useState, useEffect } from "react";
import Form from "../Form/Form";
import "./form-container.scss";
import Avatar from "../Avatar/Avatar";

const FormContainer = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    //get data from backend...
    setData(data);
  }, []);

  return (
    <div className="form-container">
      <Avatar data={data} />
      <button
          className="button"
          type="button"
          onClick={() => setShowModal(!showModal)}
        >
          <p>Add User</p>
        </button>
      {showModal && <Form showModal={setShowModal} />}
    </div>
  );
};

export default FormContainer;
