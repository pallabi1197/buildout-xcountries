import { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

const API = " https://xcountries-backend.labs.crio.do/all";

const Countries = () => {
  //   const dummyData = [1, 2, 3, 4, 5];
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(API);
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchCountries();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent:'center'
      }}
    >
      {data.map((countryData) => (
        <CountryCard
          key={countryData.abbr}
          name={countryData.name}
          flag={countryData.flag}
        />
      ))}
    </div>
  );
};

export default Countries;
