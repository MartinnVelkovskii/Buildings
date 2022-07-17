import React from "react";
import "./BuildingTable.css";

export const ReadOnlyRow = ({
  building,
  handleEditClick,
  handleDeleteClick,
}) => {
  return (
    <tr>
      <td>{building.id}</td>
      <td>{building.name}</td>
      <td>{building.area}</td>
      <td>{building.location}</td>
      <td ><img className="table-img" src={building.img}/></td>
      <td className="btn-group-toggle text-center" data-toggle="buttons">
        <button
          className="btn btn-secondary button-color"
          type="button"
          onClick={(event) => handleEditClick(event, building)}
        >
          {" "}
          Edit{" "}
        </button>
        <button
          className="btn btn-secondary button-color"
          type="button"
          onClick={() => handleDeleteClick(building.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};
