import MainSlider from "@/components/MainSlider";
import styles from "@/styles/Home.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props) {
  return (
    <>
    <MainSlider mainSlider={props.mainSlider}/>
    </>
  );
}
export async function getStaticProps() {
  const response = await fetch("http://80.75.14.90:9090/public/mainSlider");
  const mainSlider = await response.json();
  return {
    props: {mainSlider}
  }
}