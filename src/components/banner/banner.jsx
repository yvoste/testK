import homeImage from "../../assets/banner_home.png";
import aboutImage from "../../assets/banner_about.png";

import "./banner.scss";

const images = {
  home: {
    src: homeImage,
    alt: "Bannière d’accueil avec paysage",
    text: ["Chez vous,", "partout et ailleurs"],
  },
  about: {
    src: aboutImage,
    alt: "Bannière à propos avec montagnes",
    text: [],
  },
};

const Banner = ({ page = "home" }) => {
  const { src, alt, text } = images[page] || images.home;

  return (
    <div className={`banner ${page === "home" ? "banner-home" : ""}`} role="img" aria-label={alt}>
      <img src={src} alt={alt} className="banner-img" />
      {text.length > 0 && (
        <div className="banner-text">
          <span className="banner-text-left">{text[0]}</span>
          <span>{text[1]}</span>
        </div>
      )}
    </div>
  );
};

export default Banner;
