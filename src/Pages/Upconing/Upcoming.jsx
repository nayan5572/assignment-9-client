import { useEffect, useState } from "react";
import UpcomingService from "../UpcomingService/UpcomingService";

const Upcoming = () => {

    const [upComing, setUpComing] = useState([]);

    useEffect(() => {
        fetch('upcoming.json')
        .then(res=> res.json())
        .then(data => setUpComing(data))
    }, []);



    return (
        <div className="mt-20">
            <h1 className="mb-12 text-center text-5xl font-bold">Our Upcoming Service</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {
                    upComing.map(myUpcoming => <UpcomingService key={myUpcoming.id} myUpcoming={myUpcoming}></UpcomingService>)
                }
            </div>
        </div>
    );
};

export default Upcoming;