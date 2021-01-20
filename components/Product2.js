export default function Product2({ state, setState }) {
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
    setState({ ...state, p2Men: !state.p2Men });
  };

  const handleWomanCheck = () => {
    setState({ ...state, p2Woman: !state.p2Woman });
  };

  const handleYouthCheck = () => {
    setState({ ...state, p2Youth: !state.p2Youth });
  };

  const handleOtherCheck = () => {
    setState({ ...state, p2Other: !state.p2Other });
  };

  const handleTaxCheck = () => {
    setState({ ...state, p2Tax: !state.p2Tax });
  };

  return (
    <>
      <div className="row mb-2">
        <div className="col-2">
          <h4>Product 2</h4>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleMenCheck}
                  checked={state.p2Men}
                  type="checkbox"
                  id="p2Men"
                />
                <label className="form-check-label" htmlFor="p2Men">
                  Men
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleWomanCheck}
                  checked={state.p2Woman}
                  type="checkbox"
                  id="p2Woman"
                />
                <label className="form-check-label" htmlFor="p2Woman">
                  Woman
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleYouthCheck}
                  checked={state.p2Youth}
                  type="checkbox"
                  id="p2Youth"
                />
                <label className="form-check-label" htmlFor="p2Youth">
                  Youth
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleOtherCheck}
                  checked={state.p2Other}
                  type="checkbox"
                  id="p2Other"
                />
                <label className="form-check-label" htmlFor="p2Other">
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
                name="p2OtherName"
                type="text"
              />
            </div>
            <div className="col px-1">
              <input
                placeholder="Price Per Piece"
                className="form-control"
                onChange={handleChange}
                name="p2PPP"
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
              checked={state.p2Tax}
              type="checkbox"
              id="p2Tax"
            />
            <label className="form-check-label" htmlFor="p2Tax">
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
            name="p2ItemNumber"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            placeholder="Apparel Type"
            className="form-control"
            onChange={handleChange}
            name="p2ProductType"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="Color"
            name="p2Color"
            type="text"
          />
        </div>
        <div className="col-3 px-1">
          <input
            placeholder="Additional Description"
            className="form-control"
            onChange={handleChange}
            name="p2AdditionalDescription"
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
              {state.p2ApparelSource}
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
                      setState({ ...state, p2ApparelSource: name })
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
            name="p2XS"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="S #"
            name="p2S"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="M #"
            name="p2M"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="L #"
            name="p2L"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XL #"
            name="p2XL"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXL #"
            name="p2XXL"
            type="text"
          />
        </div>
        <div className="col pl-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXXL #"
            name="p2XXXL"
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
                  {state.p2Other1}
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
                        onClick={() => setState({ ...state, p2Other1: size })}
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
                name="p2Other1PCS"
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
                  {state.p2Other2}
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
                        onClick={() => setState({ ...state, p2Other2: size })}
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
                name="p2Other2PCS"
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
                  {state.p2Other3}
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
                        onClick={() => setState({ ...state, p2Other3: size })}
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
                name="p2Other3PCS"
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
                  {state.p2Other4}
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
                        onClick={() => setState({ ...state, p2Other4: size })}
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
                name="p2Other4PCS"
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
