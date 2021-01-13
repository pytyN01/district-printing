export default function CreateName({ state, setState }) {
  const customers = [
    "Agent Alexis 1",
    "Agent Alexis 2",
    "Agent Alexis 3",
    "Agent Alexis 4",
    "Agent Alexis 5",
    "Agent Alexis 6",
    "Agent Alexis 7",
    "Agent Alexis 8",
    "Agent Alexis 9",
  ];

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setState({ ...state, [name]: newValue });
  };

  const handleCheck = () => {
    setState({ ...state, multiplePages: !state.multiplePages });
  };

  const selectCustomer = (name) => {
    setState({ ...state, customerName: name });
  };

  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col-4">
            <img
              className="img-thumbnail img40"
              src="/icon-job.jpg"
              alt="Job Icon"
            />
          </div>
          <div className="col">
            <div className="btn-group btn-block" role="group">
              <button
                className="btn btn-outline-secondary dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                type="button"
              >
                {state.orderCustomer}
              </button>
              <ul
                style={{ height: "300px", overflowY: "auto" }}
                className="dropdown-menu"
              >
                {customers.map((name, index) => (
                  <li key={index}>
                    <p
                      onClick={() => selectCustomer(name)}
                      className="dropdown-item pointer"
                    >
                      {name}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="row">
          <div className="col-8">
            <input
              className="form-control"
              placeholder="Order Name"
              onChange={handleChange}
              name="orderName"
              type="text"
            />
          </div>
          <div className="col">
            <div className="form-check">
              <input
                value={state.multiplePages}
                className="form-check-input"
                onChange={handleCheck}
                name="multiplePages"
                type="checkbox"
              />
              <label className="form-check-label">Multiple Pages</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
