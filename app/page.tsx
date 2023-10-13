"use client";

import {
  About,
  Banner,
  Blog,
  Footer,
  Gallery,
  Price,
  Rooms,
  Services,
  Team,
} from "./components";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <Banner />
      <About />
      <Rooms />
      <Services />
      <Team />
      <Gallery />
      <Price />
      <Blog />
      <Footer />
    </>
  );
}
