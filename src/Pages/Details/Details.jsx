import { useEffect, useState } from "react";
import useGetCountries from "../../Hock/useGetCountries";
import { useParams } from "react-router-dom";
import DetailsCard from "../../Component/DetailsCard/DetailsCard";

const Details = () => {
    const [countries, setCountries] = useState()

    const [country] = useGetCountries()
    
    const { id } = useParams()

    useEffect(()=>{

        const findCountries = country?.find(cont=> cont?.ccn3 === id)

        setCountries(findCountries)
    },[id, country])
    return (
        <div>
            <DetailsCard country={countries}/>
        </div>
    );
};

export default Details;