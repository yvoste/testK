import { useState, useId, useRef, useEffect } from "react";

import Chevron from "../../assets/chevron.png";

import "./collapse.scss";

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const id = useId();
  const contentRef = useRef(null);

  const toggleCollapse = () => setIsOpen((prev) => !prev);

  // Mesure et anime la hauteur au changement d'état
  useEffect(() => {
    const contentEl = contentRef.current;

    if (isOpen && contentEl) {
      const contentHeight = contentEl.scrollHeight; // Mesure la hauteur du contenu
      setHeight(`${contentHeight}px`); // Change la valeur de height pour la valeur mesurée par scrollHeight
    } else if (contentEl) {
      setHeight(`${contentEl.scrollHeight}px`); // Fixe la hauteur actuelle
      setTimeout(() => {
        setHeight("0px"); // Anime vers 0px
      }, 10);
    }
  }, [isOpen]);

  return (
    <div className="collapse">
      <button
        type="button"
        className="collapse-header"
        onClick={toggleCollapse}
        aria-expanded={isOpen}
        aria-controls={`collapse-content-${id}`}
      >
        <span className="collapse-title">{title}</span>
        <img
          src={Chevron}
          alt={isOpen ? `Réduire la section ${title}` : `Déployer la section ${title}`}
          className={`chevron-icon ${isOpen ? "open" : ""}`}
        />
      </button>

      <div id={`collapse-content-${id}`} className="collapse-content" style={{ height }} aria-hidden={!isOpen}>
        <div ref={contentRef} className="collapse-content-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapse;
