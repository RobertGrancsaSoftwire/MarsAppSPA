import {PhotoType} from "../types/Photo.type.tsx";
import PhotoComponent from "./photo.component.tsx";

type RoversArray = {
  roverPhotos: PhotoType[];
}

export default function RoversComponent(props: RoversArray) {

  if (props.roverPhotos.length === 0) {
    return <p>Please select a rover and a camera first</p>
  }

  const displayPhotos = () => {
    return props?.roverPhotos.map((rover: PhotoType, index: number) => {
      return <PhotoComponent key={index} headline={rover.headline} id={rover.id} img_src={rover.img_src} earth_date={rover.earth_date} paragraph={rover.earth_date}/>
    })
  }

  return (
      <div style={{display: "grid", gridTemplateColumns: "auto auto", gridGap: "30px"}}>
        {displayPhotos()}
      </div>
  )
}