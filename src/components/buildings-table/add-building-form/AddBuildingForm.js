import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import "./AddBuildingForm.css"

export const AddBuildingForm = ({ buildings, setBuildings }) => {
  const [addBuildingData, SetAddBuildingData] = useState({
    id: "",
    name: "",
    area: "",
    location: "",
    img: "",
  });

  const handleAddBuildingFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newBuildingData = { ...addBuildingData };
    newBuildingData[fieldName] = fieldValue;

    SetAddBuildingData(newBuildingData);
  };

  const handleAddBuildingFormSubmit = (event) => {
    event.preventDefault();
    let name = document.getElementById("name");
    let area = document.getElementById("area");
    let location = document.getElementById("location");
    let img = document.getElementById("img");
    
    const reset = () => {
      name.value = ""
      area.value = ""
      location.value = ""
      img.value = ""
    }

    const newBuilding = {
      id: buildings.length+1,
      name: addBuildingData.name,
      area: addBuildingData.area,
      location: addBuildingData.location,
      img: addBuildingData.img,
    };

    const newBuildings = [...buildings, newBuilding];
    setBuildings(newBuildings);
    reset();
  };

  return (
    <Form className="custom-form" onSubmit={handleAddBuildingFormSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          id="name"
          required="required"
          name="name"
          type="text"
          placeholder="Enter Name"
          onChange={handleAddBuildingFormChange}
        ></Input>
        <Label>Area</Label>
        <Input
          id="area"
          required="required"
          name="area"
          type="text"
          placeholder="Enter Area"
          onChange={handleAddBuildingFormChange}
        ></Input>
        <Label>Location</Label>
        <Input
          id="location"
          name="location"
          type="text"
          placeholder="Enter Location"
          onChange={handleAddBuildingFormChange}
        ></Input>
        <Label>Image</Label>
        <Input
          id="img"
          name="img"
          type="file"
          placeholder="Enter Image"
          onChange={handleAddBuildingFormChange}
        ></Input>
      </FormGroup>
      <Button className="button-color" type="submit">Add Building</Button>
    </Form>
  );
};
