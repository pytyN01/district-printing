export default function Product1({ state, setState }) {
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
    setState({ ...state, p1Men: !state.p1Men });
  };

  const handleWomanCheck = () => {
    setState({ ...state, p1Woman: !state.p1Woman });
  };

  const handleYouthCheck = () => {
    setState({ ...state, p1Youth: !state.p1Youth });
  };

  const handleOtherCheck = () => {
    setState({ ...state, p1Other: !state.p1Other });
  };

  const handleTaxCheck = () => {
    setState({ ...state, p1Tax: !state.p1Tax });
  };

  return (
    <>
      <div className="row mb-2">
        <div className="col-2">
          <h4>Product 1</h4>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleMenCheck}
                  checked={state.p1Men}
                  type="checkbox"
                  id="p1Men"
                />
                <label className="form-check-label" htmlFor="p1Men">
                  Men
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleWomanCheck}
                  checked={state.p1Woman}
                  type="checkbox"
                  id="p1Woman"
                />
                <label className="form-check-label" htmlFor="p1Woman">
                  Woman
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleYouthCheck}
                  checked={state.p1Youth}
                  type="checkbox"
                  id="p1Youth"
                />
                <label className="form-check-label" htmlFor="p1Youth">
                  Youth
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleOtherCheck}
                  checked={state.p1Other}
                  type="checkbox"
                  id="p1Other"
                />
                <label className="form-check-label" htmlFor="p1Other">
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
                name="p1OtherName"
                type="text"
              />
            </div>
            <div className="col px-1">
              <input
                placeholder="Price Per Piece"
                className="form-control"
                onChange={handleChange}
                name="p1PPP"
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
              checked={state.p1Tax}
              type="checkbox"
              id="p1Tax"
            />
            <label className="form-check-label" htmlFor="p1Tax">
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
            name="p1ItemNumber"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            placeholder="Apparel Type"
            className="form-control"
            onChange={handleChange}
            name="p1ProductType"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="Color"
            name="p1Color"
            type="text"
          />
        </div>
        <div className="col-3 px-1">
          <input
            placeholder="Additional Description"
            className="form-control"
            onChange={handleChange}
            name="p1AdditionalDescription"
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
              {state.p1ApparelSource}
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
                      setState({ ...state, p1ApparelSource: name })
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
            name="p1XS"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="S #"
            name="p1S"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="M #"
            name="p1M"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="L #"
            name="p1L"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XL #"
            name="p1XL"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXL #"
            name="p1XXL"
            type="text"
          />
        </div>
        <div className="col pl-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXXL #"
            name="p1XXXL"
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
                  {state.p1Other1}
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
                        onClick={() => setState({ ...state, p1Other1: size })}
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
                name="p1Other1PCS"
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
                  {state.p1Other2}
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
                        onClick={() => setState({ ...state, p1Other2: size })}
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
                name="p1Other2PCS"
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
                  {state.p1Other3}
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
                        onClick={() => setState({ ...state, p1Other3: size })}
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
                name="p1Other3PCS"
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
                  {state.p1Other4}
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
                        onClick={() => setState({ ...state, p1Other4: size })}
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
                name="p1Other4PCS"
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
