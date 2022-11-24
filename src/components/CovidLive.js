import { useState, useEffect } from "react";
import Card from "./Card";
import Country from "./Country";

import classes from "./CovidLive.module.css";

const CovidLive = () => {
  const [conformed, setConformed] = useState();
  const [deaths, setDeaths] = useState();
  const [recovered, setRecovered] = useState();
  const [contry, setContry] = useState("INDIA");

  const live = async () => {
    try {
      const data = await fetch(
        `https://covid.mathdro.id/api/countries/${contry}`
      ).then((res) => res.json());
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const selectContry = (e) => {
    const country = e.target.value;
    setContry(country);
  };

  useEffect(() => {
    const data = live();
    data.then((e) => setConformed(e.confirmed.value));
    data.then((e) => setDeaths(e.deaths.value));
    data.then((e) => setRecovered(e.recovered.value));
  }, [conformed, deaths, recovered, contry]);

  const data = [
    { title: "Conformed Case", value: conformed },
    { title: "Conformed Deaths", value: deaths },
    { title: "Conformed Decovered", value: recovered },
  ];

  return (
    <>
      <h1>{contry}</h1>
      <Country onSelect={selectContry} />
      <div className={classes["Card-Grid"]}>
        {data.map((e, mov) => (
          <Card key={mov} title={e.title} value={e.value} />
        ))}
      </div>
    </>
  );
};
export default CovidLive;
