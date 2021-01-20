export default function CreateSubmit({ state }) {
  return (
    <div className="row">
      <div className="col-6">
        <button
          onClick={() => console.log(state)}
          type="button"
          className="btn btn-primary btn-lg btn-block"
        >
          Submit
        </button>
      </div>
      <div className="col-6">
        <button type="button" className="btn btn-danger btn-lg btn-block">
          Cancel
        </button>
      </div>
    </div>
  );
}
