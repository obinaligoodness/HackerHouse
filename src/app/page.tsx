import Image from "next/image";
import { FaCalendarAlt, FaCheckCircle } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import Link from "next/link";
import Arrow from "../../public/arrow";
import { FaVialCircleCheck } from "react-icons/fa6";
import Banner from "./components/Banner";
import About from "./components/About";
import Features from "./components/Features";
import EligibilityCriteria from "./components/EligibilityCriteria";
import Participation from "./components/Participation";
import Application from "./components/Application";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <Features></Features>
      <EligibilityCriteria></EligibilityCriteria>
      <Participation></Participation>
      <Application></Application>
      <Footer></Footer>
    </div>
  );
}
