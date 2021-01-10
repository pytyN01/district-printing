import ArtDrop from "./Art";
import ProofDrop from "./Proof";

export default function CreateProofArt() {
  return (
    <div className="row mb-3">
      <div className="col-6">
        <div className="row">
          <div className="col-12">
            <img
              style={{
                height: "40px",
                minHeight: "40px",
              }}
              src="/icon-proof.jpg"
              className="img-thumbnail mt-n2"
              alt="Proof Icon"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ProofDrop />
          </div>
        </div>
      </div>

      <div className="col-6">
        <div className="row">
          <div className="col-3">
            <img
              style={{
                height: "40px",
                minHeight: "40px",
              }}
              src="/icon-art.jpg"
              className="img-thumbnail mt-n2"
              alt="Art Icon"
            />
          </div>
          <div className="col-5 ml-n4 mt-n2">
            <input
              type="text"
              className="form-control"
              placeholder="🔗  ie, box, drive"
              id="uploadLink"
            />
          </div>
          <div className="col-4">
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
                Not sized/Match Proof
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ArtDrop />
          </div>
        </div>
        <div className="row">
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
