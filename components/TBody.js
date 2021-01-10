import React from "react";
import ButtonOptions from "./ButtonOptions";
import ButtonPDF from "./ButtonPDF";

export default function TBody({ user, data }) {
  const [save, setSave] = React.useState(false);
  return (
    <React.Fragment>
      {data.map((item) => (
        <tr key={item.id}>
          <td className="text-center">
            <label className="form-check-label">
              <h4>{item.id}</h4>
            </label>
            <input
              style={{ transform: "scale(3)" }}
              type="checkbox"
              value=""
              id="invoiceCheck"
            />
          </td>
          <td>
            <h4 className="text-nowrap">{item.orderName}</h4>
            <br />
            <small className="text-secondary">
              <a className="text-reset text-decoration-none" href="#">
                - Add Comment
              </a>
            </small>
          </td>
          <td>
            <div className="input-group p-1">
              <input
                readOnly={save}
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
              <h4>{item.customerName}</h4>
              <br />
              <small className="text-secondary">{`Agent - ${item.customerAgent}`}</small>
            </td>
          )}
          {user === "Andrew" && (
            <td>
              <h4>{item.created}</h4>
            </td>
          )}
          <td>
            <h4>{item.arrival}</h4>
          </td>
          <td>
            <h4 className="text-nowrap">{item.status}</h4> <br />
            <small className="text-secondary">{item.statusEditor}</small>
          </td>
          <td>
            <h4>{item.printer}</h4>
            <br />
            <small className="text-secondary">{item.printerComment}</small>
          </td>
          {user === "Andrew" && (
            <td>
              <button
                type="button"
                className="btn btn-lg btn-outline-secondary"
              >
                ✏
              </button>
            </td>
          )}
          <td>
            {item.art.map((image, index) => (
              <img
                key={index}
                style={{
                  width: "90px",
                  minWidth: "90px",
                }}
                src={image}
                className="img-thumbnail"
                alt={item.jobName}
              />
            ))}
          </td>
          <td>
            <ButtonPDF />
            <br />
            <small className="text-secondary">
              <a className="text-reset text-decoration-none" href="#">
                - Add Comment
              </a>
            </small>
          </td>
          <td>
            <ButtonOptions user={user} />
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
}
