const CountriesForm = ({visitesCountries, setVisitedCountries}) => {
    const[countryName, setCountryName] = useState("")

    const [error, setError] = useState("");

    //validation- can only enter name of country if it exists in api 

    const handleValidation = () => {
        let errorMessage = "";

        if(countries.find((countries) => countries.countryName !== countries.name.common)) {
            errorMessage = "This country in not in the list";
        }

        setError(errorMessage);
        return errorMessage !== "";
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!handleValidation()){
            

        }
    }


    return ( 
    <>
    <h2>Select a country you have visited</h2>
    <form>
    <input
        type="text"
        name="countryName"
        placeholder="Country Name"
        value={countryName}
        // onChange={() => {function to add selected country to visited country list }}
    />
    </form>
    
    </> );
}
 
export default CountriesForm;