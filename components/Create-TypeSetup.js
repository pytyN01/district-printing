export default function CreateTypeSetup({ state, setState }) {
  const jobType = [
    "Embellishment",
    "Direct to Garment",
    "Embroidery",
    "Plastiso",
    "Waterbase/Discharge",
    "Other/New",
  ];

  const selectOrderType = (type) => {
    setState({ ...state, orderType: type });
  };

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setState({ ...state, [name]: newValue });
  };

  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col">
            <img
              className="img-thumbnail img50 mt-n2 mb-2"
              src="/icon-type.jpg"
              alt="Type Icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="btn-group btn-block" role="group">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="typeDropdown"
                type="button"
              >
                {state.orderType}
              </button>
              <ul className="dropdown-menu">
                {jobType.map((type, index) => (
                  <li onClick={() => selectOrderType(type)} key={index}>
                    <p className="dropdown-item pointer">{type}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-12">
            <textarea
              className="form-control mt-2"
              onChange={handleChange}
              name="orderTypeNotes"
              placeholder="Notes"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col">
            <img
              className="img-thumbnail img50 mt-n2 mb-2"
              src="/icon-setup.jpg"
              alt="Setup Icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <input
              placeholder="Setup, Digi.. etc"
              onChange={handleChange}
              className="form-control"
              name="setup"
              type="text"
            />
          </div>
          <div className="col-4">
            <input
              className="form-control"
              onChange={handleChange}
              placeholder="Screens"
              name="setupScreens"
              type="text"
            />
          </div>
          <div className="col-3">
            <input
              className="form-control"
              onChange={handleChange}
              placeholder="Screen"
              name="setupScreen"
              type="text"
            />
          </div>
          <div className="col-12">
            <textarea
              className="form-control mt-2"
              onChange={handleChange}
              placeholder="Notes"
              name="setupNotes"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
