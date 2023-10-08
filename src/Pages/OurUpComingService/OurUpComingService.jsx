import { useLoaderData, useParams } from "react-router-dom";

const OurUpComingService = () => {

    const upData = useLoaderData();

    const { id } = useParams();
    const idInt = parseInt(id);
    const item = upData.find(item => item.id === idInt);

    return (
        <div>
            <div className="mt-20">
                <img src={item.image} alt="Image" className="w-[900px] h-[700px] mx-auto" />
            </div>
            <h2 className="text-4xl font-bold mt-8 text-center">{item.name}</h2>
            <p className="text-center max-w-5xl mx-auto pb-12 pt-12">{item.description}</p>
        </div>
    );
};

export default OurUpComingService;