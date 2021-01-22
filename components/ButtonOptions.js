import { useRouter } from "next/router";

export default function ButtonOptions({ user, item }) {
  const router = useRouter();

  const handleDelete = () => {
    fetch("http://localhost:3000/api/product/delete", {
      method: "POST",
      body: item.itemID,
    }).then(router.reload(window.location.pathname));
  };

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
        <button
          className="btn btn-danger m-1"
          onClick={handleDelete}
          type="button"
        >
          <i aria-hidden className="fas fa-trash-alt"></i>
        </button>
      )}
    </div>
  );
}
