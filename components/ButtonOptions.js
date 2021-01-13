export default function ButtonOptions({ user }) {
  return (
    <div className="btn-group btn-group-lg" role="group">
      <button type="button" className="btn btn-success m-1">
        <i aria-hidden className="far fa-eye"></i>
      </button>
      <button type="button" className="btn btn-primary m-1">
        <i aria-hidden className="fas fa-pencil-alt"></i>
      </button>

      {user !== "Sales" && (
        <button type="button" className="btn btn-secondary m-1">
          <i aria-hidden className="fas fa-sync"></i>
        </button>
      )}
      {user === "Andrew" && (
        <button type="button" className="btn btn-danger m-1">
          <i aria-hidden className="fas fa-trash-alt"></i>
        </button>
      )}
    </div>
  );
}
