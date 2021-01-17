export default function CreatePositionColors({ state, setState }) {
  const {
    positionMatchProof,
    colorsColor4,
    colorsColor5,
    colorsColor6,
    colorsMatchProof,
  } = state;

  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setState({ ...state, [name]: newValue });
  };

  const handlePositionCheck = () => {
    setState({ ...state, positionMatchProof: !positionMatchProof });
  };

  const handleColorCheck = () => {
    setState({ ...state, colorsMatchProof: !colorsMatchProof });
  };

  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col">
            <img
              className="img-thumbnail img40 mt-n2"
              src="/icon-posi.jpg"
              alt="Position Icon"
            />
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-6 text-center">
                <label className="form-label">Front</label>
                <textarea
                  placeholder="ie. 3.5 inches from neck"
                  onChange={handleChange}
                  className="form-control"
                  name="positionFront"
                  type="text"
                  rows="1"
                />
              </div>
              <div className="col-6 text-center">
                <label className="form-label">Back</label>
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  name="positionBack"
                  type="text"
                  rows="1"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6 text-center">
                <label className="form-label">Right/Left</label>
                <textarea
                  className="form-control"
                  name="positionRightLeft"
                  onChange={handleChange}
                  type="text"
                  rows="1"
                />
              </div>
              <div className="col-6 text-center">
                <label className="form-label">Additional</label>
                <textarea
                  placeholder="ie. Size Tag"
                  name="positionAdditional"
                  className="form-control"
                  onChange={handleChange}
                  type="text"
                  rows="1"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-check py-2">
                  <input
                    onChange={handlePositionCheck}
                    checked={positionMatchProof}
                    className="form-check-input"
                    id="positionMatchProof"
                    type="checkbox"
                  />
                  <label
                    htmlFor="positionMatchProof"
                    className="form-check-label"
                  >
                    Match Proof Position
                  </label>
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  name="positionNotes"
                  placeholder="Notes"
                  type="text"
                  rows="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-6">
        <div className="row">
          <div className="col">
            <img
              className="img-thumbnail img40 mt-n2"
              src="/icon-colors.jpg"
              alt="Colors Icon"
            />
          </div>

          <div className="col-12">
            <div className="text-center">
              <label className="form-label">Pantone Preferred</label>
            </div>
            <div className="row">
              <div className="col-4">
                <input
                  className="form-control"
                  onChange={handleChange}
                  name="colorsColor1"
                  placeholder="PMS"
                  type="text"
                />
              </div>
              <div className="col-4">
                <input
                  className="form-control"
                  onChange={handleChange}
                  name="colorsColor2"
                  placeholder="PMS"
                  type="text"
                />
              </div>
              <div className="col-4">
                <input
                  className="form-control"
                  onChange={handleChange}
                  name="colorsColor3"
                  placeholder="PMS"
                  type="text"
                />
              </div>
            </div>
            <div className="text-center">
              <label className="form-label">Click to Select Color</label>
            </div>
            <div className="row">
              <div className="col-4">
                <div className="row">
                  <div className="col-4 pr-0">
                    <input
                      className="form-control form-control-color p-0"
                      onChange={handleChange}
                      name="colorsColor4"
                      type="color"
                    />
                  </div>
                  <div className="col-8 pl-0">
                    <input
                      className="form-control"
                      value={colorsColor4}
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-4 pr-0">
                    <input
                      className="form-control form-control-color p-0"
                      onChange={handleChange}
                      name="colorsColor5"
                      type="color"
                    />
                  </div>
                  <div className="col-8 pl-0">
                    <input
                      className="form-control"
                      value={colorsColor5}
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="row">
                  <div className="col-4 pr-0">
                    <input
                      className="form-control form-control-color p-0"
                      onChange={handleChange}
                      name="colorsColor6"
                      type="color"
                    />
                  </div>
                  <div className="col-8 pl-0">
                    <input
                      className="form-control"
                      value={colorsColor6}
                      type="text"
                      disabled
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 py-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    onChange={handleColorCheck}
                    checked={colorsMatchProof}
                    type="checkbox"
                    id="colorsMatchProof"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="colorsMatchProof"
                  >
                    Match Proof Color
                  </label>
                </div>
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  onChange={handleChange}
                  name="colorsNotes"
                  placeholder="Notes"
                  type="text"
                  rows="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
