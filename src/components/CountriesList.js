import Country from "./Country";

const CountriesList = ({countries, updateVisitedList}) => {

    const countryComponents = countries.map((country, index) => {
    return <Country country={country} key={index} updateVisitedList={updateVisitedList}/>;
     });

      return (
      <ul> 
      {countryComponents} 
      </ul>
      )
}
 
export default CountriesList;