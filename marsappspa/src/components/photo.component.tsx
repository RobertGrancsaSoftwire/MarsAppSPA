import { PhotoType } from "../types/Photo.type.tsx";
import {Link} from "react-router-dom";

export default function PhotoComponent(item: PhotoType) {
    return (
        <div className="card">
          <Link to={item.id.toString()}>
            <img src={item.img_src} alt={item.earth_date} className="photo"/>
            <h2>
              {item.headline}
            </h2>
            <p style={{width: 500}}>
              {item.paragraph}
            </p>
          </Link>
        </div>
    )
}