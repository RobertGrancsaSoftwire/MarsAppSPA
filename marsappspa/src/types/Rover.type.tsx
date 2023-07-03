import {CameraType} from "./Camera.type.tsx";

export type RoverType = {
  id: number;
  landing_date: string;
  launch_date: string;
  max_date: string;
  max_sol: number;
  name: string;
  status: string;
  total_photos: number
  cameras: CameraType[];
}