import { useContext } from 'react';
import PhotoComponent from "./photo.component.tsx";
import {PhotoType} from "../types/Photo.type.tsx";
import {CounterContext} from "../App.tsx";

const item: PhotoType = {
  headline: "Rover photo",
  id: 2019,
  img_src: "http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00100/opgs/edr/ncam/NLA_406377861EDR_F0050178NCAM00338M_.JPG",
  earth_date: "2012-11-16",
  paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum semper vel magna eget pellentesque.\n" +
      "Curabitur ac lectus vestibulum, rutrum metus nec, dignissim arcu.\n\n" +
      "Sed sit amet blandit sem. Aenean in euismod dolor. In fermentum pellentesque metus, id suscipit nisi\n" +
      "vulputate eu. Curabitur blandit fringilla commodo. Donec vulputate porta mauris, eget auctor arcu\n" +
      "pretium vitae."
}

export default function TopComponent() {
  const counter = useContext(CounterContext);

  return (
    <>
      <PhotoComponent id={item.id} img_src={item.img_src} earth_date={item.earth_date} headline={item.headline} paragraph={item.paragraph}/>
      <p className="read-the-docs">
          Item has been clicked {counter?.count} times
      </p>
    </>
  )
}