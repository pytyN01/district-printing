export default function CreateSubmit() {
  return (
    <div className="row">
      <div className="col-6">
        <button
          style={{ width: "23vw" }}
          type="button"
          className="btn btn-primary btn-lg"
        >
          Submit
        </button>
      </div>
      <div className="col-6">
        <button
          style={{ width: "23vw" }}
          type="button"
          className="btn btn-danger btn-lg"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
