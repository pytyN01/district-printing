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
            <h4>Job Name</h4>
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
              <h4>Customer Name</h4>
            </th>
          )}
          {user === "Andrew" && (
            <th className="align-top">
              <h4>Created Date</h4>
            </th>
          )}
          {user === "Andrew" ? (
            <th className="align-top">
              <h4>Arrival Date</h4>
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
              <h4>Printer Name</h4>
            </th>
          ) : (
            <th className="align-top">
              <h4>Production</h4>
            </th>
          )}
          {user === "Andrew" && (
            <th className="align-top">
              <h4>Assign Printer</h4>
            </th>
          )}
          <th className="align-top">
            <h4>Art</h4>
          </th>
          <th className="align-top">
            <h4>Packing/Shipping Status</h4>
          </th>
          <th className="align-top">
            <h4>Options</h4>
          </th>
        </tr>
      </thead>
    </React.Fragment>
  );
}
