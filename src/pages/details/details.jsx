import { useState, useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";

import Slider from "../../components/slider/slider";
import Rating from "../../components/rating/rating";
import Tag from "../../components/tag/tag";
import Apart from "../../components/apart/apart";
import Host from "../../components/host/host";
import Collapse from "../../components/collapse/collapse";

import "./details.scss";

const Details = () => {
    document.title = "Détails - Kasa";

    // Initialiser à `null` est plus sémantique pour un objet qu'on attend.
    const [logement, setLogement] = useState(null);
    const { id } = useParams();

    const getLogement = async () => {
        const response = await fetch(
            `${import.meta.env.BASE_URL}data/logements.json`,
        );
        const data = await response.json();
        // `find` retourne l'objet trouvé ou `undefined` si rien n'est trouvé.
        const foundLogement = data.find((logt) => logt.id === id);
        setLogement(foundLogement);
    };

    useEffect(() => {
        getLogement();
    }, [id]);
    // Toujours inclure les dépendances externes utilisées [id].

    // Au premier rendu, `logement` est `null`. On attend les données.
    // Si on ne veut pas de "flash" d'une page vide, on peut retourner `null`.

    if (logement === null) {
        return <div>Chargement...</div>;
    }

    // Après le fetch, si `logement` est `undefined`, c'est que l'ID n'existe pas.
    if (logement === undefined) {
        return <Navigate to="/error" />;
    }

    return (
        <div className="details">
            <Slider pictures={logement.pictures} />
            <div className="ATHR">
                <div className="apart-tags">
                    <Apart
                        title={logement.title}
                        location={logement.location}
                    />
                    <Tag tags={logement.tags} />
                </div>
                <div className="host-rating">
                    <Host host={logement.host} />
                    <Rating rating={logement.rating} />
                </div>
            </div>
            <div className="collapses">
                <Collapse title="Description">
                    <p>{logement.description}</p>
                </Collapse>
                <Collapse title="Équipements">
                    <ul>
                        {logement.equipments.map((equipment, index) => {
                            return <li key={index}>{equipment}</li>;
                        })}
                    </ul>
                </Collapse>
            </div>
        </div>
    );
};

export default Details;
