import ArtDrop from "./Create-Art";
import ProofDrop from "./Create-Proof";

export default function CreateProofArt({ state, setState }) {
  const handleChange = (evt) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setState({ ...state, [name]: newValue });
  };

  const handleCheck = () => {
    setState({ ...state, artSize: !state.artSize });
  };

  const handleProof = (x) => {
    setState({ ...state, proof: x });
  };

  const handleArt = (x) => {
    setState({ ...state, art: x });
  };

  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col">
            <img
              className="img-thumbnail img40 mt-n2"
              src="/icon-proof.jpg"
              alt="Proof Icon"
            />
          </div>
          <div className="col-12">
            <ProofDrop handleProof={(x) => handleProof(x)} />
          </div>
          <div className="col-12">
            <textarea
              className="form-control mt-2"
              onChange={handleChange}
              placeholder="Notes"
              name="proofNotes"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>

      <div className="col-6">
        <div className="row">
          <div className="col-4">
            <img
              className="img-thumbnail img40 mt-n2"
              src="/icon-art.jpg"
              alt="Art Icon"
            />
          </div>
          <div className="col-5">
            <input
              className="form-control ml-n4 mt-n2"
              placeholder="🔗  ie, box, drive"
              onChange={handleChange}
              name="artLink"
              type="text"
            />
          </div>
          <div className="col-3">
            <div className="row">
              <div className="col-1">
                <input
                  className="form-check-input"
                  checked={state.artSize}
                  onChange={handleCheck}
                  type="checkbox"
                  id="artSize"
                />
              </div>
              <label
                className="col-11 mt-n2 col-form-label text-nowrap"
                htmlFor="artSize"
              >
                Not sized
              </label>
            </div>
          </div>
          <div className="col-12">
            <ArtDrop handleArt={(x) => handleArt(x)} />
          </div>
          <div className="col-12">
            <textarea
              className="form-control mt-2"
              onChange={handleChange}
              placeholder="Notes"
              name="artNotes"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
