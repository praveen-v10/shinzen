import Image from "next/image";
import Hero from './components/hero'

import Habout from "./components/habout";
import Hservice from "./components/hservice";
import Hwhy from "./components/Hwhy";
import Review from "./components/review";


export default function Home() {
  return (
    <main >
     
      <Hero/>
      <Habout/>
      <Hservice/>
      <Hwhy/>
      <Review/>
  
      
    </main>
  );
}
