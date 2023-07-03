import {PhotoType} from "../types/Photo.type.tsx";
import {useParams} from "react-router-dom";
import PhotoComponent from "./photo.component.tsx";

type SingleRoverParams = {
  photos: PhotoType[];
}

export default function SingleRoverComponent(props: SingleRoverParams) {
  const { id } = useParams() ?? "0";

  let photo = props.photos.filter((value) => value.id.toString() === id)

  if (photo.length != 1) {
    return <p>Something bad happened</p>
  }

  let rover = photo[0];

  return (<PhotoComponent headline={rover.headline} id={rover.id} img_src={rover.img_src} earth_date={rover.earth_date} paragraph={rover.earth_date}/>)
}