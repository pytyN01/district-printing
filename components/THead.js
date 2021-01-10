import React from "react";

export default function THead({ user }) {
  return (
    <React.Fragment>
      <thead>
        <tr>
          <th className="align-top">
            <p>ID #</p>
          </th>
          <th className="align-top">
            <p className="text-nowrap">Job Name</p>
          </th>
          <th className="align-top">
            <p>Invoice #</p>
          </th>
          {user === "Andrew" && (
            <th className="align-top">
              <p>Apparel</p>
            </th>
          )}
          {user === "Andrew" && (
            <th className="align-top">
              <p className="text-nowrap">Customer</p>
            </th>
          )}
          {user === "Andrew" && (
            <th className="align-top">
              <p className="text-nowrap">Created Date</p>
            </th>
          )}
          {user === "Andrew" ? (
            <th className="align-top">
              <p className="text-nowrap">Arrival Date</p>
            </th>
          ) : (
            <th className="align-top">
              <p>Due Date</p>
            </th>
          )}
          <th className="align-top">
            <p>Status</p>
          </th>
          {user === "Andrew" ? (
            <th className="align-top">
              <p className="text-nowrap">Printer Name</p>
            </th>
          ) : (
            <th className="align-top">
              <p>Production</p>
            </th>
          )}
          {user === "Andrew" && (
            <th className="align-top">
              <p className="text-nowrap">Assign Printer</p>
            </th>
          )}
          <th className="align-top">
            <p>Art</p>
          </th>
          <th className="align-top">
            <p>Packing/Shipping</p>
          </th>
          <th className="align-top">
            <p>Options</p>
          </th>
        </tr>
      </thead>
    </React.Fragment>
  );
}
