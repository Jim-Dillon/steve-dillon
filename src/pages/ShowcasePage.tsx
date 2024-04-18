import { Link } from "react-router-dom";
import Carousel from "../components/Carousel";
import imageData from "../components/imageData";

const ShowcasePage = () => {

  return (
    <>
    <Link to="/steve-dillon/">Back to Home</Link>
    <Carousel images={imageData}/>
    </>
  )
}

export default ShowcasePage