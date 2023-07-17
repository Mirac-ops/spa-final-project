import { useState } from "react";
import "./App.css";

function App() {
  /* const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [age, setAge] = useState("18"); */

  const [inputs, setInputs] = useState({});
  const professions = [
    "IT",
    "Programmer",
    "Steuerberater",
    "Lehrer",
    "Student",
  ];

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    const valid = e.target.validity.valid;
    if (valid) {
      e.target.className = "form-control is-valid";
    } else {
      e.target.className = "form-control is-invalid";
    }

    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-4" style={{ marginTop: "35px" }}>
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="form-g">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                id="name"
                required
                minLength="3"
                className="form-control"
                value={inputs.name || ""}
                onChange={handleChange}
              ></input>
              <div className="invalid-feedback">
                Name muss mehr als drei Buchstaben sein...
              </div>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="profession">Beruf</label>
              <select
                name="profession"
                className="form-control"
                value={inputs.profession || ""}
                onChange={handleChange}
              >
                <option>Bitte wählen...</option>
                {professions.map((val, index) => (
                  <option key={index}>{val}</option>
                ))}
              </select>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="age">Alter</label>
              <input
                type="number"
                name="age"
                id="age"
                required
                min="18"
                className="form-control"
                value={inputs.age || ""}
                onChange={handleChange}
              ></input>
              <div className="invalid-feedback">Eingabe ab 18...</div>
            </div>
            <div className="form-group mt-2">
              <button
                type="submit"
                className="btn btn-outline-primary
              w-100"
              >
                Absenden
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
