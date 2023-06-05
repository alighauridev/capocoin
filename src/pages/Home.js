import React, { useState } from "react";
import Loader from "../components/Loader";
import Navigation from "../components/Navigation";
import Banner from "../components/Banner";
import CollectionTab from "../components/CollectionTab";
import Collection from "../components/Collection";
import Faq from "../components/Faq";
import Teams from "../components/Teams";
import Footer from "../components/Footer";
import BannerTwo from "../components/BannerTwo";
import Roadmap from "../components/Roadmap";
import MoreInfo from "../components/MoreInfo";
import Join from "../components/Join";
import TabOne from "../collectiontabs/TabOne";
import TabTwo from "../collectiontabs/TabTwo";
import TabThird from "../collectiontabs/TabThird";
import TabForth from "../collectiontabs/TabForth";
const Home = () => {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffb800");
  return (
    <>
      {loading ? (
        <Loader setLoading={setLoading} />
      ) : (
        <>
          <main>
            <Navigation />
            <Banner />
            <MoreInfo />
            <CollectionTab />
            <div
              style={{
                background: "black",
                padding: "80px 0px",
                position: "relative",
                zIndex: "1",
              }}
            >
              <TabOne />
              <TabTwo />
              <TabThird />
              <TabForth />
            </div>
            <Collection />
            <Roadmap />
            <BannerTwo />
            <Join />
            <Teams />
            <Faq />
            <Footer />
          </main>
        </>
      )}
    </>
  );
};

export default Home;
