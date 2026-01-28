import Banner from "../../components/banner/banner";
import { useEffect, useState } from "react";
import Card from "../../components/card/card";

import "./home.scss";

const Home = () => {
    document.title = "Accueil - Kasa";

    const [locations, setLocations] = useState([]);
    const getLogements = async () => {
        const response = await fetch(
            `${import.meta.env.BASE_URL}data/logements.json`,
        );
        const data = await response.json();
        setLocations(data);
    };

    useEffect(() => {
        getLogements();
    }, []);

    return (
        <>
            <Banner home />
            <main className="home">
                <section className="cards">
                    {locations.map((location) => (
                        <Card
                            key={location.id}
                            title={location.title}
                            cover={location.cover}
                            id={location.id}
                        />
                    ))}
                </section>
            </main>
        </>
    );
};

export default Home;
