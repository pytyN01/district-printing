export default function Product4({ state, setState }) {
  const AS = [
    "S&S Activewear",
    "SanMar",
    "Pagoda",
    "Client Provide",
    "Tans Club",
    "Amazon",
    "Other",
  ];
  const OS = [
    "OS",
    "NB",
    "6M",
    "12M",
    "18M",
    "24M",
    "2T",
    "3T",
    "5T",
    "6T",
    "YXS",
    "YS",
    "YM",
    "YL",
    "YXL",
    "YXXL",
    "YXXXL",
    "XXS",
    "3XL",
    "4XL",
    "5XL",
    "6XL",
    "S/M",
    "M/L",
    "L/XL",
  ];

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setState({ ...state, [name]: newValue });
  };

  const handleMenCheck = () => {
    setState({ ...state, p4Men: !state.p4Men });
  };

  const handleWomanCheck = () => {
    setState({ ...state, p4Woman: !state.p4Woman });
  };

  const handleYouthCheck = () => {
    setState({ ...state, p4Youth: !state.p4Youth });
  };

  const handleOtherCheck = () => {
    setState({ ...state, p4Other: !state.p4Other });
  };

  const handleTaxCheck = () => {
    setState({ ...state, p4Tax: !state.p4Tax });
  };

  return (
    <>
      <div className="row mb-2">
        <div className="col-2">
          <h4>Product 4</h4>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleMenCheck}
                  checked={state.p4Men}
                  type="checkbox"
                  id="p4Men"
                />
                <label className="form-check-label" htmlFor="p4Men">
                  Men
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleWomanCheck}
                  checked={state.p4Woman}
                  type="checkbox"
                  id="p4Woman"
                />
                <label className="form-check-label" htmlFor="p4Woman">
                  Woman
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleYouthCheck}
                  checked={state.p4Youth}
                  type="checkbox"
                  id="p4Youth"
                />
                <label className="form-check-label" htmlFor="p4Youth">
                  Youth
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleOtherCheck}
                  checked={state.p4Other}
                  type="checkbox"
                  id="p4Other"
                />
                <label className="form-check-label" htmlFor="p4Other">
                  Other
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="col-5">
          <div className="row">
            <div className="col px-1">
              <input
                className="form-control"
                placeholder="Other Name"
                onChange={handleChange}
                name="p4OtherName"
                type="text"
              />
            </div>
            <div className="col px-1">
              <input
                placeholder="Price Per Piece"
                className="form-control"
                onChange={handleChange}
                name="p4PPP"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col-1">
          <div className="form-check mt-1">
            <input
              className="form-check-input"
              onChange={handleTaxCheck}
              checked={state.p4Tax}
              type="checkbox"
              id="p4Tax"
            />
            <label className="form-check-label" htmlFor="p4Tax">
              Tax?
            </label>
          </div>
        </div>
      </div>
      <div className="row mb-2">
        <div className="col-2 pr-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="Item #"
            name="p4ItemNumber"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            placeholder="Apparel Type"
            className="form-control"
            onChange={handleChange}
            name="p4ProductType"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="Color"
            name="p4Color"
            type="text"
          />
        </div>
        <div className="col-3 px-1">
          <input
            placeholder="Additional Description"
            className="form-control"
            onChange={handleChange}
            name="p4AdditionalDescription"
            type="text"
          />
        </div>
        <div className="col-3 pl-1">
          <div className="dropdown">
            <button
              className="btn btn-outline-secondary dropdown-toggle btn-block"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {state.p4ApparelSource}
            </button>
            <ul
              className="dropdown-menu"
              style={{
                height: "140px",
                overflowY: "auto",
              }}
            >
              {AS.map((name, index) => (
                <li key={index}>
                  <p
                    onClick={() =>
                      setState({ ...state, p4ApparelSource: name })
                    }
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
      <div className="row mb-2">
        <div className="col pr-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XS #"
            name="p4XS"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="S #"
            name="p4S"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="M #"
            name="p4M"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="L #"
            name="p4L"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XL #"
            name="p4XL"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXL #"
            name="p4XXL"
            type="text"
          />
        </div>
        <div className="col pl-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXXL #"
            name="p4XXXL"
            type="text"
          />
        </div>
      </div>
      <div className="row mb-5">
        <div className="col">
          <div className="row">
            <div className="col pr-1">
              <div className="btn-group btn-block dropup">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {state.p4Other1}
                </button>
                <ul
                  className="dropdown-menu"
                  style={{
                    height: "136px",
                    overflowY: "auto",
                  }}
                >
                  {OS.map((size, index) => (
                    <li key={index}>
                      <p
                        onClick={() => setState({ ...state, p4Other1: size })}
                        className="dropdown-item pointer"
                      >
                        {size}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col px-1">
              <input
                className="form-control"
                onChange={handleChange}
                placeholder="PCS"
                name="p4Other1PCS"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col px-1">
              <div className="btn-group btn-block dropup">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {state.p4Other2}
                </button>
                <ul
                  className="dropdown-menu"
                  style={{
                    height: "136px",
                    overflowY: "auto",
                  }}
                >
                  {OS.map((size, index) => (
                    <li key={index}>
                      <p
                        onClick={() => setState({ ...state, p4Other2: size })}
                        className="dropdown-item pointer"
                      >
                        {size}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col px-1">
              <input
                className="form-control"
                onChange={handleChange}
                placeholder="PCS"
                name="p4Other2PCS"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col px-1">
              <div className="btn-group btn-block dropup">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {state.p4Other3}
                </button>
                <ul
                  className="dropdown-menu"
                  style={{
                    height: "136px",
                    overflowY: "auto",
                  }}
                >
                  {OS.map((size, index) => (
                    <li key={index}>
                      <p
                        onClick={() => setState({ ...state, p4Other3: size })}
                        className="dropdown-item pointer"
                      >
                        {size}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col px-1">
              <input
                className="form-control"
                onChange={handleChange}
                placeholder="PCS"
                name="p4Other3PCS"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="row">
            <div className="col px-1">
              <div className="btn-group btn-block dropup">
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {state.p4Other4}
                </button>
                <ul
                  className="dropdown-menu"
                  style={{
                    height: "136px",
                    overflowY: "auto",
                  }}
                >
                  {OS.map((size, index) => (
                    <li key={index}>
                      <p
                        onClick={() => setState({ ...state, p4Other4: size })}
                        className="dropdown-item pointer"
                      >
                        {size}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col pl-1">
              <input
                className="form-control"
                onChange={handleChange}
                name="p4Other4PCS"
                placeholder="PCS"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
