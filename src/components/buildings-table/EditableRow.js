import React from "react";

export const EditableRow = ({
  building,
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>{building.id}</td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an area..."
          name="area"
          value={editFormData.area}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter a location..."
          name="location"
          value={editFormData.location}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter an image..."
          name="img"
          value={editFormData.img}
          onChange={handleEditFormChange}
        ></input>
      </td>
      <td className="btn-group btn-group-toggle">
        <button className="btn btn-secondary button-color" type="submit"> Save </button>
        <button className="btn btn-secondary button-color" type="button" onClick={handleCancelClick}>
          {" "}
          Cancel{" "}
        </button>
      </td>
    </tr>
  );
};
