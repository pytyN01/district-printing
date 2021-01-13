import ArtDrop from "./Art";
import ProofDrop from "./Proof";

export default function CreateProofArt({ state, setState }) {
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
          <div className="col">
            <img
              className="img-thumbnail img40 mt-n2"
              src="/icon-proof.jpg"
              alt="Proof Icon"
            />
          </div>
          <div className="col-12">
            <ProofDrop />
          </div>
          <div className="col-12">
            <textarea
              className="form-control mt-2"
              placeholder="Notes"
              id="proofNotes"
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
                  type="checkbox"
                  value=""
                  id="matchCheck"
                />
              </div>
              <label
                htmlFor="matchCheck"
                className="col-11 mt-n2 col-form-label text-nowrap"
              >
                Not sized
              </label>
            </div>
          </div>
          <div className="col-12">
            <ArtDrop />
          </div>
          <div className="col-12">
            <textarea
              placeholder="Notes"
              className="form-control mt-2"
              id="artNotes"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}
