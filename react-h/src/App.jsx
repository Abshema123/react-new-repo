// import React from "react"
// import {BsArrowLeftCircleFill} from "react-icons/bs"
// export default function App() {
//   return (
//     <h1 className="text-3xl font-bold underline">
//       Hello world!
//       <BsArrowLeftCircleFill size={25}/>
//     </h1>
//   )
// }
import "./App.css";
import ImgSlider from "./components/imgSlider";
import "./App.css";
export default function App() {
  return (
    <>
      <ImgSlider url={"https://picsum.photos/v2/list"} limit={10} page={1} />
    </>
  );
}
