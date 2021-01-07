import ArtDrop from "./Art";
import ProofDrop from "./Proof";

export default function CreateProofArt() {
  return (
    <div className="row mb-2">
      <div className="col-sm-6">
        <div className="row">
          <div className="col-12">
            <img
              style={{
                height: "40px",
                minHeight: "40px",
              }}
              src="/icon-proof.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ProofDrop />
          </div>
        </div>
      </div>

      <div className="col-sm-6">
        <div className="row">
          <div className="col-4">
            <img
              style={{
                height: "40px",
                minHeight: "40px",
              }}
              src="/icon-art.jpg"
              className="img-thumbnail mt-n2"
              alt="Safer Baby Mask"
            />
          </div>

          <div className="col-8">
            <div className="row mt-n2">
              <label htmlFor="uploadLink" className="col-sm-1 col-form-label">
                🔗
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="ie, box, drive"
                  id="uploadLink"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <ArtDrop />
          </div>
        </div>
      </div>
    </div>
  );
}
