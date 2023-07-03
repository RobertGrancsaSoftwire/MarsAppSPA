import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import TopComponent from "./components/top.component.tsx";
import React, {createContext, useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import PhotoComponent from "./components/photo.component.tsx";
import axios from "axios";
import {CounterInterface, SelectedRover} from "./types/Other.type.tsx";
import {CameraType} from "./types/Camera.type.tsx";
import {RoverType} from "./types/Rover.type.tsx";
import RoversComponent from "./components/rovers.component.tsx";
import {PhotoType} from "./types/Photo.type.tsx";
import SelectRoverComponent from "./components/selectRover.component.tsx";
import SingleRoverComponent from "./components/singleRover.component.tsx";

export const CounterContext = createContext<CounterInterface | null>(null);

function App() {
  const [count, setCount] = useState(0);
  const [rovers, setRovers] = useState<RoverType[] | null>(null);
  const [selectedRover, setSelectedRover] = useState<SelectedRover>({
    selectedRover: null,
  });
  const [selectedCamera, setSelectedCamera] = useState<CameraType | null>(null);
  const [photosArray, setPhotosArray] = useState<PhotoType[] | null>(null)

  useEffect(() => {
    axios.get("http://localhost:8000/rovers")
      .then((res) => {
        console.log(res.data.rovers)
        setRovers(res.data.rovers);
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const loadPhotos = (rover: RoverType, camera: CameraType) => {
    axios.get("http://localhost:8000/rovers/" + rover.name +
        "/photos/" + camera.name + "?sol=100")
        .then((res) => {
          console.log(res.data)
          setPhotosArray(res.data.map((photo: any): PhotoType => ({
            earth_date: photo.earth_date,
            id: photo.id,
            paragraph: photo.earth_date,
            headline: rover.name + " " + camera.name,
            img_src: photo.img_src
          })));
        })
        .catch((err) => {
          console.log(err);
        })
  }

  return (
    <CounterContext.Provider value={{count, setCount}}>
      <BrowserRouter>
          <div>
            <div>
              <Link to="/testOne">
                <img src={viteLogo} className="logo" alt="Vite logo" />
              </Link>
              <Link to="/testTwo">
                <img src={reactLogo} className="logo react" alt="React logo" />
              </Link>
            </div>
            <SelectRoverComponent
                loadPhotos={loadPhotos}
                rovers={rovers}
                selectedCamera={selectedCamera}
                selectedRover={selectedRover}
                setRovers={setRovers}
                setSelectedCamera={setSelectedCamera}
                setSelectedRover={setSelectedRover}/>
            <h1>Rover Photo searcher</h1>
            <Routes>
              <Route path="/" element={<RoversComponent roverPhotos={photosArray ?? []}/>}/>
              <Route path="/:id" element={<SingleRoverComponent photos={photosArray ?? []}/>}/>
              <Route path="/testOne" element={
                <PhotoComponent id={100} img_src={"https://images.unsplash.com/photo-1688053793446-197dbc86e237?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"} earth_date={"today"} headline={"Interesting title"} paragraph={"Bla bla"}/>
              }/>
              <Route path="/testTwo" element={<TopComponent/>}/>
            </Routes>
          </div>
      </BrowserRouter>
    </CounterContext.Provider>
  )
}

export default App
