import React, { useState, Fragment } from "react";
import { Footer } from "../footer/Footer";
import { AddBuildingForm } from "./add-building-form/AddBuildingForm";
import data from "../mock-data.json";
import { EditableRow } from "./EditableRow";
import { ReadOnlyRow } from "./ReadOnlyRow";
import "./BuildingTable.css";
import { Header } from "./Header";

export const BuildingTable = () => {
  const [buildings, setBuildings] = useState(data);
  const [editFormData, setEditFormData] = useState({
    id: "",
    name: "",
    area: "",
    location: "",
    img: "",
  });
  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };
  const [editBuildingId, setEditBuildingId] = useState(null);
  const handleEditClick = (event, building) => {
    event.preventDefault();
    setEditBuildingId(building.id);

    const formValues = {
      id: building.id,
      name: building.name,
      area: building.area,
      location: building.location,
      img: building.img,
    };

    setEditFormData(formValues);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedBuilding = {
      id: editBuildingId,
      name: editFormData.name,
      area: editFormData.area,
      location: editFormData.location,
      img: editFormData.img,
    };

    const newBuildings = [...buildings];

    const index = buildings.findIndex(
      (building) => building.id === editBuildingId
    );
    newBuildings[index] = editedBuilding;
    setBuildings(newBuildings);
    setEditBuildingId(null);
  };

  const handleCancelClick = () => {
    setEditBuildingId(null);
  };

  const handleDeleteClick = (buildingId) => {
    const newBuildings = [...buildings];

    const index = buildings.findIndex((building) => building.id === buildingId);

    newBuildings.splice(index, 1);

    setBuildings(newBuildings);
  };

  return (
    <div className="app">
    <Header />
      <div className="custom-container">
        <form onSubmit={handleEditFormSubmit}>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Area</th>
                <th>Location</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {buildings.map((building) => (
                <Fragment key={building.id}>
                  {editBuildingId === building.id ? (
                    <EditableRow
                      building={building}
                      editFormData={editFormData}
                      handleEditFormChange={handleEditFormChange}
                      handleCancelClick={handleCancelClick}
                    />
                  ) : (
                    <ReadOnlyRow
                      building={building}
                      handleEditClick={handleEditClick}
                      handleDeleteClick={handleDeleteClick}
                    />
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </form>
        <AddBuildingForm buildings={buildings} setBuildings={setBuildings} />
      </div>
      <Footer />
    </div>
  );
};
