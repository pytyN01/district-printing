export default function ButtonOptions({ user }) {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button type="button" className="btn btn-secondary">
        👁‍🗨
      </button>
      <button type="button" className="btn btn-success">
        ⚙
      </button>
      {user === "Andrew" && (
        <button type="button" className="btn btn-info">
          💱
        </button>
      )}
      <button type="button" className="btn btn-danger">
        🗑
      </button>
    </div>
  );
}
