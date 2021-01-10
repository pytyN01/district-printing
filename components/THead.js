import React from "react";

export default function THead({ user }) {
  return (
    <React.Fragment>
      <thead>
        <tr>
          <th className="align-top">
            <h4>ID #</h4>
          </th>
          <th className="align-top">
            <h4 className="text-nowrap">Job Name</h4>
          </th>
          <th className="align-top">
            <h4>Invoice #</h4>
          </th>
          {user === "Andrew" && (
            <th className="align-top">
              <h4>Apparel</h4>
            </th>
          )}
          {user === "Andrew" && (
            <th className="align-top">
              <h4 className="text-nowrap">Customer Name</h4>
            </th>
          )}
          {user === "Andrew" && (
            <th className="align-top">
              <h4 className="text-nowrap">Created Date</h4>
            </th>
          )}
          {user === "Andrew" ? (
            <th className="align-top">
              <h4 className="text-nowrap">Arrival Date</h4>
            </th>
          ) : (
            <th className="align-top">
              <h4>Due Date</h4>
            </th>
          )}
          <th className="align-top">
            <h4>Status</h4>
          </th>
          {user === "Andrew" ? (
            <th className="align-top">
              <h4 className="text-nowrap">Printer Name</h4>
            </th>
          ) : (
            <th className="align-top">
              <h4>Production</h4>
            </th>
          )}
          {user === "Andrew" && (
            <th className="align-top">
              <h4 className="text-nowrap">Assign Printer</h4>
            </th>
          )}
          <th className="align-top">
            <h4>Art</h4>
          </th>
          <th className="align-top">
            <h4>Packing/Shipping</h4>
          </th>
          <th className="align-top">
            <h4>Options</h4>
          </th>
        </tr>
      </thead>
    </React.Fragment>
  );
}
