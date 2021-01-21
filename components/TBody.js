import React from "react";
import ButtonOptions from "./ButtonOptions";
import ButtonPDF from "./ButtonPDF";
import AddPrinter from "./Dashboard-Add-Printer";

export default function TBody({ data }) {
  const [save, setSave] = React.useState(false);
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    const loggedIN = localStorage.getItem("name");
    setUser(loggedIN);
  }, []);

  return (
    <React.Fragment>
      {data.map((item) => (
        <tr key={item.itemID}>
          <td className="text-center">
            <label className="form-check-label">
              <p>{item.itemID}</p>
            </label>
            <input className="form-control" type="checkbox" value="" />
          </td>
          <td>
            <p className="text-nowrap">{item.orderName}</p>
          </td>
          <td>
            <div className="input-group p-1">
              <input
                readOnly={user === "Andrew" ? save : true}
                style={{ maxWidth: "120px" }}
                className="form-control"
                type="text"
                placeholder="Invoice #"
              />
              {user === "Andrew" && (
                <button
                  onClick={() => setSave(!save)}
                  type="button"
                  className="btn btn-outline-success"
                >
                  {save ? "Edit" : "Save"}
                </button>
              )}
              <input
                className="form-control"
                type="checkbox"
                value={item.invoicePaid}
              />
            </div>
          </td>
          {user === "Andrew" && (
            <td className=" text-center">
              <input
                className="form-control mt-1"
                type="checkbox"
                value={item.apparel}
              />
            </td>
          )}
          {user === "Andrew" && (
            <td>
              <p>{item.orderCustomer}</p>
              <small>{item.orderAgent}</small>
            </td>
          )}
          <td>
            <p>{item.createdDate}</p>
            <small>{item.arrivalTime}</small>
          </td>
          <td>
            <p>{item.arrivalDate}</p>
            <small>
              {item.arrivalHardDueDate ? "Hard Due Date!!" : "Soft Due Date"}
            </small>
          </td>
          <td>
            <p className="text-nowrap">{item.status}</p>
            <small>{item.statusEditor}</small>
          </td>
          {user !== "Sales" && (
            <td>
              <p>{item.printer}</p>
              <small>
                {item.printerSchedule} - {item.printerDuration}
              </small>
            </td>
          )}
          {user === "Andrew" && (
            <td>
              <AddPrinter item={item} />
            </td>
          )}
          <td>
            {item.art.map((image, index) => (
              <img
                key={index}
                src={image}
                className="img-thumbnail img80"
                alt={item.orderName}
              />
            ))}
          </td>
          <td>
            <ButtonPDF item={item} />
          </td>
          <td>
            <ButtonOptions user={user} />
          </td>
        </tr>
      ))}
    </React.Fragment>
  );
}
