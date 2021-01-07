import React from "react";
import ButtonOptions from "./ButtonOptions";

export default function TBody({ user, data }) {
  return (
    <React.Fragment>
      {data.map((item) => (
        <tr key={item.id}>
          <td>
            <label className="form-check-label">
              <h4>{item.invoice}</h4>
            </label>
            <input
              className="ml-2"
              type="checkbox"
              value=""
              id="invoiceCheck"
            />
          </td>
          <td>
            <h4>{item.jobName}</h4>
            <br />
            <small className="text-secondary">
              <a className="text-reset text-decoration-none" href="#">
                - Add Comment
              </a>
            </small>
          </td>
          {user === "Andrew" && (
            <td>
              <div className="form-check">
                <input
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
              <h4>{item.customer.name}</h4>
              <br />
              <small className="text-secondary">{item.customer.comment}</small>
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
            <h4>{item.status.status}</h4> <br />
            <small className="text-secondary">{item.status.comment}</small>
          </td>
          <td>
            <h4>{item.printer.name}</h4>
            <br />
            <small className="text-secondary">{item.printer.comment}</small>
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
                  height: "70px",
                  minHeight: "70px",
                  width: "70px",
                  minWidth: "70px",
                }}
                src={image}
                className="img-thumbnail"
                alt={item.jobName}
              />
            ))}
          </td>
          <td>
            <h4>{item.shipping}</h4>
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
