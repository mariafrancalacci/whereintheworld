import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import SearchBar from "../components/SearchBar/SearchBar";
import styles from "../styles/Home.module.css";
import { Country } from "../types";

const Home: NextPage = (props: any) => {
  const [searchText, setSearchText] = useState("");

  return (
    <>
      <Header />
      <SearchBar setSearchText={setSearchText} />
      {props.data.map((country: any) => {
        return (
          <Card
            key={country}
            imageUrl={country.flag}
            population={country.population}
            region={country.region}
            capital={country.capital}
            name={country.name}
          />
        );
      })}
    </>
  );
};

export async function getStaticProps() {
  const res = await fetch(`https://restcountries.com/v2/all`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default Home;
