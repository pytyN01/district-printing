export default function CreatePositionColors() {
  return (
    <div className="row mb-3">
      <div className="col-sm-6">
        <div className="row">
          <div className="col-12">
            <img
              style={{
                height: "40px",
                minHeight: "40px",
              }}
              src="/icon-posi.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>

          <div className="col-12">
            <div className="row">
              <div className="col-6 text-center">
                <label htmlFor="positionFront" className="form-label">
                  Front
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="positionFront"
                  placeholder="ie. 3.5 inches from neck"
                  rows="1"
                />
              </div>
              <div className="col-6 text-center">
                <label htmlFor="positionBack" className="form-label">
                  Back
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="positionBack"
                  rows="1"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-6 text-center">
                <label htmlFor="positionRightLeft" className="form-label">
                  Right/Left
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="positionRightLeft"
                  rows="1"
                />
              </div>
              <div className="col-6 text-center">
                <label htmlFor="positionAdditional" className="form-label">
                  Additional
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="positionAdditional"
                  placeholder="ie. Size Tag"
                  rows="1"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <div className="form-check py-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="positionProof"
                  />
                  <label className="form-check-label" htmlFor="positionProof">
                    Match Proof Position
                  </label>
                </div>
              </div>
              <div className="col-12">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Notes"
                  rows="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="row">
          <div className="col-12">
            <img
              style={{
                height: "40px",
                minHeight: "40px",
              }}
              src="/icon-colors.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>

          <div className="col-12">
            <div className=" text-center">
              <label className="form-label">Pantone Preferred</label>
            </div>

            <div className="row">
              <div className="col-4">
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="pantone1"
                  value=""
                />
              </div>

              <div className="col-4">
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="pantone2"
                  value=""
                />
              </div>

              <div className="col-4">
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="pantone3"
                  value=""
                />
              </div>
            </div>

            <div className=" text-center">
              <label className="form-label">Click to Select Color</label>
            </div>

            <div className="row">
              <div className="col-4">
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="otherColor1"
                  value=""
                />
              </div>

              <div className="col-4">
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="otherColor2"
                  value=""
                />
              </div>

              <div className="col-4">
                <input
                  type="color"
                  className="form-control form-control-color"
                  id="otherColor3"
                  value=""
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12 py-2">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="positionColors"
                  />
                  <label className="form-check-label" htmlFor="positionColors">
                    Match Proof Color
                  </label>
                </div>
              </div>

              <div className="col-12">
                <textarea
                  type="text"
                  className="form-control"
                  placeholder="Notes"
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
