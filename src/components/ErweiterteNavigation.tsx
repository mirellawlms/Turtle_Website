import { Typography } from "@mui/joy";
import React from "react";
import styles from "../styles/ErweiterteNavigation.module.css";
import { useRouter } from "next/router";

//inhalt ist arr, da es mehrere inhalte geben kann
interface Props {
  title: { idlink: string; label: string };
  inhalt: { idlink: string; label: string }[];
  currentNavigation: string;
}

//erweiterte Navigation wenn man bei Navigation auf einen Punkt klickt (Unternavigation)
export const ErweiterteNavigation: React.FC<Props> = (props) => {
  const { title, inhalt, currentNavigation } = props;
  const router = useRouter(); //wie Link

  return (
    <div>
      <div
        className={styles.navigationitem}
        onClick={() => router.push(title.idlink)}
      >
        <Typography
          fontWeight={"bold"}
          sx={{
            color: currentNavigation === title.idlink ? "green" : undefined,
          }}
        >
          {title.label}
        </Typography>
      </div>

      {/*
      iteration über inhalt array und für jedes element wird ein div erstellt,
      key stellt sicher,dass Element eindeutig identifizierbar,
      wenn auf Element geklickt wird, wird auf die idlink weitergeleitet
      */}
      {currentNavigation === title.idlink && (
        <div>
          {inhalt.map((item, index) => (
            <div
              key={"erweiterteNavigation_key" + index}
              className={styles.navigationitem}
              onClick={() => router.push(item.idlink)}
            >
              <Typography className={styles.punkte}>
                {item.label}
              </Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
