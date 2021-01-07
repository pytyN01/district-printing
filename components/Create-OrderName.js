export default function CreateName() {
  return (
    <div className="row mb-3">
      <div className="col-sm-3">
        <img
          style={{
            height: "40px",
            minHeight: "40px",
          }}
          src="/icon-job.jpg"
          className="img-thumbnail"
          alt="Safer Baby Mask"
        />
      </div>
      <div className="col-sm-6">
        <input
          type="text"
          className="form-control"
          id="inputPassword"
          placeholder="Order Name"
        />
      </div>
      <div className="col-sm-3">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" />
          <label className="form-check-label">Multiple Pages</label>
        </div>
      </div>
    </div>
  );
}
