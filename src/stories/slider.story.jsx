import React from "react";
import { Slider } from "../components/slider/index";

export default {
  title: "Slider",
};

export const Slideshow = () => (
  <div>
    <h3>Image slider</h3>
    <p>Creates a image slider width content of images folder</p>
    <Slider arrows dots autoSlideSeconds={5} height={250} />
  </div>
);
