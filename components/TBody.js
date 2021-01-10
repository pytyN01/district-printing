import React from "react";
import ButtonOptions from "./ButtonOptions";
import ButtonPDF from "./ButtonPDF";
import AddPrinter from "./Dashboard-Add-Printer";

export default function TBody({ user, data }) {
  const [save, setSave] = React.useState(false);
  return (
    <React.Fragment>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="text-center">
            <label className="form-check-label">
              <p>{item.id}</p>
            </label>
            <br />
            <input
              style={{ transform: "scale(3)" }}
              type="checkbox"
              value=""
              id="invoiceCheck"
            />
          </td>
          <td>
            <p className="text-nowrap">{item.orderName}</p>
            {/* <br />
            <small className="text-secondary">
              <a className="text-reset text-decoration-none" href="#">
                - Add Comment
              </a>
            </small> */}
          </td>
          <td>
            <div className="input-group p-1">
              <input
                readOnly={save}
                style={{ maxWidth: "100px" }}
                className="form-control"
                type="text"
                id="invoiceNumberInput"
                placeholder="Invoice #"
              />
              <button
                onClick={() => setSave(!save)}
                type="button"
                className="btn btn-outline-success"
                id="invoiceSaveButton"
              >
                {save ? "Edit" : "Save"}
              </button>
            </div>
          </td>
          {user === "Andrew" && (
            <td className=" text-center">
              <div className="form-check mt-3">
                <input
                  style={{ transform: "scale(3)" }}
                  className="form-check-input"
                  type="checkbox"
                  value={item.apparel}
                  id="apparelCheck"
                />
              </div>
            </td>
          )}
          {user === "Andrew" && (
            <td>
              <p>{item.customerName}</p>
              <small className="text-secondary">{`Agent - ${item.customerAgent}`}</small>
            </td>
          )}
          {user === "Andrew" && (
            <td>
              <p>{item.created}</p>
            </td>
          )}
          <td>
            <p>{item.arrival}</p>
          </td>
          <td>
            <p className="text-nowrap">{item.status}</p>
            <small className="text-secondary">{item.statusEditor}</small>
          </td>
          <td>
            <p>{item.printer}</p>
            <small className="text-secondary">{item.printerComment}</small>
          </td>
          {user === "Andrew" && (
            <td>
              <AddPrinter />
            </td>
          )}
          <td>
            {item.art.map((image, index) => (
              <img
                key={index}
                style={{
                  width: "80px",
                  minWidth: "80px",
                }}
                src={image}
                className="img-thumbnail"
                alt={item.jobName}
              />
            ))}
          </td>
          <td>
            <ButtonPDF />
            {/* <br />
            <small className="text-secondary">
              <a className="text-reset text-decoration-none" href="#">
                - Add Comment
              </a>
            </small> */}
          </td>
          <td>
            <ButtonOptions user={user} />
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
}
