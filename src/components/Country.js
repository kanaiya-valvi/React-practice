import classes from './Country.module.css'
import Options from "./Options";
import { useState, useEffect } from "react";
const Country = (props) => {
  const [country, setCountry] = useState("INDIA");
  const countryList = async () => {
    const data = await fetch(`https://covid19.mathdro.id/api/countries`).then(
      (res) => res.json()
    );
    const list = data.countries;
    return list;
  };

  const list = countryList();
  useEffect(() => {
    list.then((e) => {
      setCountry(e);
    });
  }, []);
  let datalist = [...country];
  return (
    <div>
      <label className={classes.select_label} htmlFor="country">
        Select a country
      </label>
      <select className={classes.select} id="country" onChange={props.onSelect}>
        {datalist.map((n, mov) => (
          <Options values={n.name} key={mov} />
        ))}
      </select>
    </div>
  );
};
export default Country;
