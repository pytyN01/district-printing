export default function ButtonPDF({ item }) {
  return (
    <div className="btn-group btn-group-lg" role="group">
      <a
        href={item.shipPackingList}
        target="_blank"
        type="button"
        className="btn btn-secondary m-1"
      >
        <i aria-hidden className="far fa-file-pdf"></i>
      </a>

      <a
        href={item.shipLabel}
        target="_blank"
        type="button"
        className="btn btn-secondary m-1"
      >
        <i aria-hidden className="far fa-file-pdf"></i>
      </a>
    </div>
  );
}
