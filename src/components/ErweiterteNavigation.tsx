import { Button, Container, Link, Typography } from "@mui/joy";
import React, { Children, useRef, useState } from "react";
import styles from "../styles/ErweiterteNavigation.module.css";
import { useRouter } from "next/router";

interface Props {
  title: { idlink: string; label: string };
  inhalt: { idlink: string; label: string }[];
  currentNavigation: string;
}

export const ErweiterteNavigation: React.FC<Props> = (props) => {
  const { title, inhalt, currentNavigation } = props;
  const router = useRouter(); /*wie link*/

  return (
    <div>
      <div
        className={styles.navigationitem}
        onClick={() => router.push(title.idlink)}>
        <Typography
          fontWeight={"bold"}
          sx={{
            color: currentNavigation === title.idlink ? "green" : undefined,
          }}>
          {title.label}
        </Typography>
      </div>
      {currentNavigation === title.idlink && (
        <div>
          {inhalt.map((item,index) => (
            <div
              key={"erweiterteNavigation"+index}
              className={styles.navigationitem}
              onClick={() => router.push(item.idlink)}>
              <Typography className={styles.punkte}>{item.label}</Typography>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
