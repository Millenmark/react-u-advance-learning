import { useState } from "react";

const ControlledInputs = () => {
  const formInitialState = {
    name: "",
    email: "",
    freeShipping: false,
    isVerified: false,
    selectMe: "",
  };

  const [formInputs, setFormInputs] = useState(formInitialState);

  const handleChange = (e) => {
    const checkBoxInputs = ["freeShipping", "isVerified"];

    setFormInputs((prev) => ({
      ...prev,
      [e.target.name]: !checkBoxInputs.includes(e.target.name)
        ? e.target.value
        : e.target.checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
    setFormInputs(formInitialState);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h4>Controlled Inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-input"
          onChange={handleChange}
          value={formInputs.name}
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="form-input"
          onChange={handleChange}
          value={formInputs.email}
        />
      </div>
      <div className="form-row">
        <label htmlFor="freeShipping" className="form-label">
          Free Shipping
        </label>
        <input
          type="checkbox"
          name="freeShipping"
          id="freeShipping"
          className="form-input"
          onChange={handleChange}
          checked={formInputs.freeShipping}
        />
      </div>
      <div className="form-row">
        <label htmlFor="isVerified" className="form-label">
          Verified
        </label>
        <input
          type="checkbox"
          name="isVerified"
          id="isVerified"
          className="form-input"
          onChange={handleChange}
          checked={formInputs.isVerified}
        />
      </div>
      <div className="form-row">
        <label htmlFor="selectMe" className="form-label">
          Verified
        </label>
        <select
          name="selectMe"
          id="selectMe"
          value={formInputs.selectMe}
          onChange={handleChange}
        >
          <option value=""></option>
          <option value="yo">Yo</option>
        </select>
      </div>
      <button type="submit" className="btn btn-block">
        Submit
      </button>
    </form>
  );
};

export default ControlledInputs;
