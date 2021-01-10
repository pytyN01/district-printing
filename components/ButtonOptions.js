export default function ButtonOptions({ user }) {
  return (
    <div className="btn-group btn-group-lg" role="group">
      <button type="button" className="btn btn-secondary m-1">
        <i className="far fa-eye"></i>
      </button>
      <button type="button" className="btn btn-success m-1">
        <i className="fas fa-cogs"></i>
      </button>
      {user === "Andrew" && (
        <button type="button" className="btn btn-info m-1">
          <i className="fas fa-sync"></i>
        </button>
      )}
      <button type="button" className="btn btn-danger m-1">
        <i className="fas fa-trash-alt"></i>
      </button>
    </div>
  );
}
