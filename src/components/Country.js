const Country = ({country, updateVisitedList}) => {

    const handleClick = (e) => {
        updateVisitedList(country.name.common)

    }

    return (
    <li>
        {country.name.common}
        <button onClick={handleClick}>visited</button>
    </li>
    );
}
 
export default Country;