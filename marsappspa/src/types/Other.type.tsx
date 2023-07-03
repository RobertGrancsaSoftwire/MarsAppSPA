import React from "react";
import {RoverType} from "./Rover.type.tsx";

export type CounterInterface = {
  count: number,
  setCount: React.Dispatch<React.SetStateAction<number>>
}

export type SelectedRover = {
  selectedRover: RoverType | null
}