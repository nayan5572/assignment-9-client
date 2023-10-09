// import { useLoaderData, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import BestService from "./BestService";

const Service = () => {

    const [service, setService] = useState([]);


    useEffect(() => {
        fetch('service.json')
        .then(res=>res.json())
        .then(data=> setService(data))
    }, [])


    return (
        <div className="max-w-7xl mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    service.map(best => <BestService key={best.id} best={best}></BestService>)
                }
            </div>
        </div>
    );
};

export default Service;