export default function Product3({ state, setState }) {
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
    setState({ ...state, p3Men: !state.p3Men });
  };

  const handleWomanCheck = () => {
    setState({ ...state, p3Woman: !state.p3Woman });
  };

  const handleYouthCheck = () => {
    setState({ ...state, p3Youth: !state.p3Youth });
  };

  const handleOtherCheck = () => {
    setState({ ...state, p3Other: !state.p3Other });
  };

  const handleTaxCheck = () => {
    setState({ ...state, p3Tax: !state.p3Tax });
  };

  return (
    <>
      <div className="row mb-2">
        <div className="col-2">
          <h4>Product 3</h4>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleMenCheck}
                  checked={state.p3Men}
                  type="checkbox"
                  id="p3Men"
                />
                <label className="form-check-label" htmlFor="p3Men">
                  Men
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleWomanCheck}
                  checked={state.p3Woman}
                  type="checkbox"
                  id="p3Woman"
                />
                <label className="form-check-label" htmlFor="p3Woman">
                  Woman
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleYouthCheck}
                  checked={state.p3Youth}
                  type="checkbox"
                  id="p3Youth"
                />
                <label className="form-check-label" htmlFor="p3Youth">
                  Youth
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleOtherCheck}
                  checked={state.p3Other}
                  type="checkbox"
                  id="p3Other"
                />
                <label className="form-check-label" htmlFor="p3Other">
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
                name="p3OtherName"
                type="text"
              />
            </div>
            <div className="col px-1">
              <input
                placeholder="Price Per Piece"
                className="form-control"
                onChange={handleChange}
                name="p3PPP"
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
              checked={state.p3Tax}
              type="checkbox"
              id="p3Tax"
            />
            <label className="form-check-label" htmlFor="p3Tax">
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
            name="p3ItemNumber"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            placeholder="Apparel Type"
            className="form-control"
            onChange={handleChange}
            name="p3ProductType"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="Color"
            name="p3Color"
            type="text"
          />
        </div>
        <div className="col-3 px-1">
          <input
            placeholder="Additional Description"
            className="form-control"
            onChange={handleChange}
            name="p3AdditionalDescription"
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
              {state.p3ApparelSource}
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
                      setState({ ...state, p3ApparelSource: name })
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
            name="p3XS"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="S #"
            name="p3S"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="M #"
            name="p3M"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="L #"
            name="p3L"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XL #"
            name="p3XL"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXL #"
            name="p3XXL"
            type="text"
          />
        </div>
        <div className="col pl-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXXL #"
            name="p3XXXL"
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
                  {state.p3Other1}
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
                        onClick={() => setState({ ...state, p3Other1: size })}
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
                name="p3Other1PCS"
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
                  {state.p3Other2}
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
                        onClick={() => setState({ ...state, p3Other2: size })}
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
                name="p3Other2PCS"
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
                  {state.p3Other3}
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
                        onClick={() => setState({ ...state, p3Other3: size })}
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
                name="p3Other3PCS"
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
                  {state.p3Other4}
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
                        onClick={() => setState({ ...state, p3Other4: size })}
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
                name="p3Other4PCS"
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
