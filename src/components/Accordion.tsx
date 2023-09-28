import { Typography } from "@mui/joy";
import { useState } from "react";
import styles from "../styles/Accordion.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

interface Props {
  titel: string;
  inhalt: React.ReactNode;
  wasClicked?: () => void; //optionale Funktion
}

//funktionale Komponente
export const Accordion: React.FC<Props> = (props) => {
  const { titel, inhalt, wasClicked } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <div
        className={styles.ChevronContainer}
        onClick={() => {
          setIsOpen(!isOpen);
          wasClicked && wasClicked();
        }}
      >
        <Typography>{titel}</Typography>
        {/*wenn isopen pfeil nach oben ansonsten nach unten*/}
        <FontAwesomeIcon
          icon={isOpen ? faChevronUp : faChevronDown}
          color="#1A7D36"
          height={12}
        />
      </div>
      {/*wenn isopen dann wird inhalt angezeigt */}
      {isOpen && <Typography>{inhalt}</Typography>}
    </div>
  );
};