import { useEffect, useState } from "react";
import useGetCountries from "../../Hock/useGetCountries";
import { getStoredCountries } from "../../Utility/localStore";
import VisitedCard from "../../Component/VisitedCard/VisitedCard";
import swal from 'sweetalert';


const Visited = () => {
    const [countries] = useGetCountries()
    const [visitedCountries, setVisitedCountries] = useState([])
    useEffect(()=>{
        const storeCountriesId = getStoredCountries()

        if(countries?.length > 0){
            // const countriesVisited = countries.filter(country=> storeCountriesId.includes(country.ccn3))

            const countriesVisited = []
            for(const id of storeCountriesId){
                const visited = countries.find(country=> country?.ccn3 === id)
                if(visited){
                    countriesVisited.push(visited)
                }
            }
            setVisitedCountries(countriesVisited)
        }
    },[countries])
    const handleRemovedAll = () => {
        localStorage.clear()
        setVisitedCountries([])
        swal("Successful!!", "Removed all visited counted", "success");
    }
    return (
        <div>
            {
                visitedCountries?.length < 1
                ?
                <p className="text-2xl md:text-4xl lg:text-6xl font-bold flex justify-center items-center min-h-[80vh]">You haven&apos;t visited any countries.</p>
                :
                <>
                    <div className="text-center">
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold underline">Visited: {visitedCountries?.length}</h1>
                        <button 
                            onClick={handleRemovedAll}
                            className="btn btn-error my-5"
                        >Removed all</button>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
                        {
                            visitedCountries?.map(country=> 
                                <VisitedCard
                                    key={country.id}
                                    country={country}
                                />
                            )
                        }
                    </div>
                </>
            }
        </div>
    );
};

export default Visited;