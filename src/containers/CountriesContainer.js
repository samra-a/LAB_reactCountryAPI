import { useState, useEffect} from "react";
import Country from "../components/Country";
import CountriesList from "../components/CountriesList";

const CountriesContianer = () => {

    const [countries, setCountries ] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])

    useEffect(() => {
        updateList();
        }
    , []);


    const updateVisitedList = (countryName) => {
        // checks if country already exists in visitedCountries
        const alreadyVisited = visitedCountries.includes((country) => {
            return country.name.common === countryName;
        })
        // if country already visited, return
        if (alreadyVisited){
            return;
        }
        // find country in countries array and remove it
        const filteredList = countries.filter((country)=>{
            return country.name.common !== countryName;
        })
        // add selected country to visitedCountries and updates countries list to not include it
        const selectedCountry = countries.find((country) => {
            return country.name.common === countryName;
        });
        setVisitedCountries([...visitedCountries, selectedCountry]);
        setCountries(filteredList);
    }



    const updateList = () => {

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(jsonData => setCountries(jsonData));
    
    }


    return ( 
        <>
         {countries ?  <CountriesList countries= {countries} updateVisitedList={updateVisitedList}/> : <p>Loading</p>}
         {countries ?  <CountriesList countries= {visitedCountries}/> : <p>Loading</p>}
        </>
     );
}
 
export default CountriesContianer;