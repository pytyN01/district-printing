export default function Product5({ state, setState }) {
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
    setState({ ...state, p5Men: !state.p5Men });
  };

  const handleWomanCheck = () => {
    setState({ ...state, p5Woman: !state.p5Woman });
  };

  const handleYouthCheck = () => {
    setState({ ...state, p5Youth: !state.p5Youth });
  };

  const handleOtherCheck = () => {
    setState({ ...state, p5Other: !state.p5Other });
  };

  const handleTaxCheck = () => {
    setState({ ...state, p5Tax: !state.p5Tax });
  };

  return (
    <>
      <div className="row mb-2">
        <div className="col-2">
          <h4>Product 5</h4>
        </div>
        <div className="col-4">
          <div className="row">
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleMenCheck}
                  checked={state.p5Men}
                  type="checkbox"
                  id="p5Men"
                />
                <label className="form-check-label" htmlFor="p5Men">
                  Men
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleWomanCheck}
                  checked={state.p5Woman}
                  type="checkbox"
                  id="p5Woman"
                />
                <label className="form-check-label" htmlFor="p5Woman">
                  Woman
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleYouthCheck}
                  checked={state.p5Youth}
                  type="checkbox"
                  id="p5Youth"
                />
                <label className="form-check-label" htmlFor="p5Youth">
                  Youth
                </label>
              </div>
            </div>
            <div className="col-3">
              <div className="form-check mt-1">
                <input
                  className="form-check-input"
                  onChange={handleOtherCheck}
                  checked={state.p5Other}
                  type="checkbox"
                  id="p5Other"
                />
                <label className="form-check-label" htmlFor="p5Other">
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
                name="p5OtherName"
                type="text"
              />
            </div>
            <div className="col px-1">
              <input
                placeholder="Price Per Piece"
                className="form-control"
                onChange={handleChange}
                name="p5PPP"
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
              checked={state.p5Tax}
              type="checkbox"
              id="p5Tax"
            />
            <label className="form-check-label" htmlFor="p5Tax">
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
            name="p5ItemNumber"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            placeholder="Apparel Type"
            className="form-control"
            onChange={handleChange}
            name="p5ProductType"
            type="text"
          />
        </div>
        <div className="col-2 px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="Color"
            name="p5Color"
            type="text"
          />
        </div>
        <div className="col-3 px-1">
          <input
            placeholder="Additional Description"
            className="form-control"
            onChange={handleChange}
            name="p5AdditionalDescription"
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
              {state.p5ApparelSource}
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
                      setState({ ...state, p5ApparelSource: name })
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
            name="p5XS"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="S #"
            name="p5S"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="M #"
            name="p5M"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="L #"
            name="p5L"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XL #"
            name="p5XL"
            type="text"
          />
        </div>
        <div className="col px-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXL #"
            name="p5XXL"
            type="text"
          />
        </div>
        <div className="col pl-1">
          <input
            className="form-control"
            onChange={handleChange}
            placeholder="XXXL #"
            name="p5XXXL"
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
                  {state.p5Other1}
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
                        onClick={() => setState({ ...state, p5Other1: size })}
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
                name="p5Other1PCS"
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
                  {state.p5Other2}
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
                        onClick={() => setState({ ...state, p5Other2: size })}
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
                name="p5Other2PCS"
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
                  {state.p5Other3}
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
                        onClick={() => setState({ ...state, p5Other3: size })}
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
                name="p5Other3PCS"
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
                  {state.p5Other4}
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
                        onClick={() => setState({ ...state, p5Other4: size })}
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
                name="p5Other4PCS"
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
