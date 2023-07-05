import { Button, Container, Link, Typography } from "@mui/joy";
import React, { Children, useRef, useState } from "react";
import styles from "../styles/Navigation.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faPencil } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

interface Props {
  showback: boolean;
  children: React.ReactNode;
  currentNavigation: string;
}

export const Navigation: React.FC<Props> = (props) => {
  //const title = props.title;
  const { showback, children, currentNavigation } = props;
  const router = useRouter(); /*wie link*/

  return (
    <div>
      <div className={styles.einrueckenWelcome}>
        <div className={styles.navigationsbar}>
          <div
            className={styles.navigationitem}
            onClick={() => router.push("/einleitung#kapitel1")}
          >
            <Typography
              sx={{
                color:
                  currentNavigation === "/einleitung" ? "green" : undefined,
              }}
            >
              C++ Kurs
            </Typography>
          </div>
          <div
            className={styles.navigationitem}
            onClick={() => router.push("/uebung1")}
          >
            <Typography
              sx={{
                color: currentNavigation === "/uebung1" ? "green" : undefined,
              }}
            >
              Übung 1
            </Typography>
          </div>
          <div
            className={styles.navigationitem}
            onClick={() => router.push("/uebung2")}
          >
            <Typography
              sx={{
                color: currentNavigation === "/uebung2" ? "green" : undefined,
              }}
            >
              Übung 2
            </Typography>
          </div>
        </div>
        {/*Hier kommt die Top Navigation hin*/}
        <div className={styles.topbar}>
          <Link href={"/"}><img src={"/kroete.webp"} alt="PebbleImage" height={40} /></Link>
          
        </div>
        <Container sx={{ paddingBlock: "30px" , paddingTop: "70px"}}>{children}</Container>
      </div>
      {/*Hier kommt der footer hin*/}
      <div className={styles.footer}>
        <Container>
          <div className={styles.footerContainer}>
            <div>
              <div className={styles.logofootereinruecken}>
                <img src={"/kroete.webp"} alt="PebbleImage" height={50} />
                <img src={"/HTWK_logo.svg"} alt="HTWKSVG" height={30} />
              </div>
              <Typography level="body2" width={400}>
                E-Learning Plattform, entstanden aus dem Bachelorprojekt
                "Entwicklung und Konzeption eines E-Learning C++ Kurses auf
                Basis einer C-Turtle-Umgebung für das Modul „Grundlagen der
                Programmierung“ an der HTWK-Leipzig".
              </Typography>
            </div>
            <div>
              <Typography level="body1">Informationen</Typography>
              <Typography level="body2">
                <Link href={"mailto:mirella.willems@stud.htwk-leipzig.de"}>
                  Kontakt
                </Link>
              </Typography>
              <Typography level="body2">Datenschutz</Typography>
              <Typography level="body2">Gitlab</Typography>
              <Typography level="body2">
                Bachelorarbeit Mirella Willems
              </Typography>
            </div>
            <div>
              <Typography level="body1">HTWK Leipzig</Typography>
              <Typography level="body2">
                <Link href={"https://www.htwk-leipzig.de/startseite"}>
                  Website der HTWK
                </Link>
              </Typography>
              <Typography level="body2">
                <Link
                  href={
                    "https://fim.htwk-leipzig.de/fakultaet/personen/professorinnen-und-professoren/klaus-hering"
                  }
                >
                  E-Learning Beauftragter der HTWK
                </Link>
              </Typography>
              <Typography level="body2">
                <Link
                  href={
                    "https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/25768460288/CourseNode/1631759207016055012?8"
                  }
                >
                  Modul Grundlagen der Programmierung HTWK
                </Link>
              </Typography>
            </div>
          </div>
          {/*Hier kommt der copyright hin*/}
          <div>
            <hr></hr>
            <Typography level="body2">&copy; 2023 Mirella Willems</Typography>
          </div>
        </Container>
      </div>
    </div>
  );
};
