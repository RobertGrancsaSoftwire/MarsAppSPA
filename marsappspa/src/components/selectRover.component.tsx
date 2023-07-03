import React from "react";
import Select, {SingleValue} from "react-select";
import {RoverType} from "../types/Rover.type.tsx";
import {CameraType} from "../types/Camera.type.tsx";
import {SelectedRover} from "../types/Other.type.tsx";

type SelectRoverParams = {
  loadPhotos(roverType: RoverType | null, cameraType: CameraType): void,
  rovers: RoverType[] | null,
  selectedCamera: CameraType | null,
  selectedRover: SelectedRover,
  setRovers: React.Dispatch<React.SetStateAction<RoverType[] | null>>
  setSelectedCamera: React.Dispatch<React.SetStateAction<CameraType | null>>
  setSelectedRover: React.Dispatch<React.SetStateAction<SelectedRover>>;
}

export default function SelectRoverComponent(props: SelectRoverParams) {
  const getRoverName = (rover: RoverType) => rover.name;

  return (
      <div className="read-the-docs" style={{display: "flex", gridGap: 30}}>
        <div style={{flexGrow: 4}}>
          <Select<RoverType>
              value={props.selectedRover.selectedRover}
              options={props.rovers ?? []}
              getOptionLabel={getRoverName}
              getOptionValue={getRoverName}
              isClearable={true}
              backspaceRemovesValue={true}
              onChange={(rover: SingleValue<RoverType>) => {
                props.setSelectedRover({selectedRover: rover});
                props.setSelectedCamera(null);
              }}
          />
        </div>
        <div style={{flexGrow: 4}}>
          <Select<CameraType>
              value={props.selectedCamera}
              options={props.selectedRover.selectedRover?.cameras}
              getOptionLabel={(camera: CameraType) => camera.full_name}
              getOptionValue={(camera: CameraType) => camera.name}
              isClearable={true}
              backspaceRemovesValue={true}
              onChange={(cameraType: SingleValue<CameraType>) => {
                console.log(cameraType)
                props.setSelectedCamera(cameraType);
                props.loadPhotos(props.selectedRover.selectedRover, cameraType as CameraType)
              }}
          />
        </div>
      </div>
  )
}