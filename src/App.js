import React from "react";
import styles from "./App.module.css";
import Header from "./components/Header";
import Description from "./components/Description";
import Clients from "./components/Clients";
import Cards from "./components/Cards";
import Video from "./components/Video";
import HappyClients from "./components/HappyClients";
import Newsletter from "./components/Newsletter";
import About from "./components/About";

function App() {
  return (
    <main>
      <Header />
      <Description />
      <Clients />
      <Cards />
      <Video />
      <HappyClients />
      <Newsletter />
      <About />
      <footer>Copyright © 2022 Avi Yansah</footer>
    </main>
  );
}

export default App;
