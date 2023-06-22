import { Button, Card, CircularProgress, Container, Link, Typography } from "@mui/joy";
import React, { Children, useRef, useState } from "react";
import styles from "../styles/Navigation.module.css"

interface Props {
  showback: boolean;
  children: React.ReactNode;
}

export const Navigation: React.FC<Props> = (props) => {
  //const title = props.title;
  const { showback, children} = props;

  return (
    <div className={styles.einrueckenWelcome}>
      <Card variant="outlined" sx={{ maxWidth: 200, height: 300 }}>
        <Typography level="h4">Übersicht</Typography>
        <Link href={"/einleitung"}>
          <Typography level="h6" fontSize="l">
            Einleitung
          </Typography>
        </Link>
        <Link href={"/uebung1"}>
          <Typography level="h6" fontSize="l">
            Übung1
          </Typography>
        </Link>
        <Link href={"/uebung2"}>
          <Typography level="h6" fontSize="l">
            Übung2
          </Typography>
        </Link>
      
        {/*wenn showback true wird es angezeigt */}
        {showback && (
          <Link href={"/"}>
            <button>zurück</button>
          </Link>
        )}
      </Card>
      <Container>{children}</Container>
    </div>
  );
};
