import { Button, Container, Link, Typography } from "@mui/joy";
import React, { Children, useRef, useState } from "react";
import styles from "../styles/Navigation.module.css";
import { useRouter } from "next/router";
import { ErweiterteNavigation } from "./ErweiterteNavigation";
import { LoadBalken } from "./LoadBalken";

interface Props {
  titel?: string;
  children: React.ReactNode;
  currentNavigation: string;
  progress?: number;
}

export const Navigation: React.FC<Props> = (props) => {
  //const title = props.title;
  const { titel, children, currentNavigation, progress} = props;
  const router = useRouter(); /*wie link*/

  return (
    <div>
      <div className={styles.einrueckenWelcome}>
        <div className={styles.navigationsbar}>
          <div className={styles.navigationitems}>
            {/* C++ Kurs */}
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/einleitung", label: "C++ Kurs" }}
                inhalt={[
                  {
                    idlink: "/einleitung#c.1.1",
                    label: "Wissenswertes zu Beginn",
                  },
                  {
                    idlink: "/einleitung#c.1.2",
                    label: "Mein erstes C++ Programm",
                  },
                  {
                    idlink: "/einleitung#c.1.3",
                    label: "Addition zweier nichtnegativer Zahlen",
                  },
                ]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>
            {/* Uebung1 */}
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/uebung1", label: "Übung 1" }}
                inhalt={[
                  { idlink: "/uebung1#1.1", label: "Algorithmus auf Papier" },
                ]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>

            {/* Uebung2 */}
            <div
              className={styles.navigationitem}
              onClick={() => router.push("/uebung2")}
            >
              <Typography
                fontWeight={"bold"}
                sx={{
                  color: currentNavigation === "/uebung2" ? "green" : undefined,
                }}
              >
                Übung 2
              </Typography>
            </div>
          </div>
        </div>
        {/*Hier kommt die Top Navigation hin*/}
        {/*progress??0 falls undefinded 0 übergeben*/}
        <div className={styles.topbar}>
          <Link href={"/"}>
            <img src={"/kroete.svg"} alt="PebbleImage" height={40} />
          </Link>
          <LoadBalken progress={progress??0} titel={titel??""}></LoadBalken>
        </div>
        <Container sx={{ paddingBlock: "30px", paddingTop: "70px" }}>
          {children}
        </Container>
      </div>
      {/*Hier kommt der footer hin*/}
      <div className={styles.footer}>
        <Container>
          <div className={styles.footerContainer}>
            <div>
              <div className={styles.logofootereinruecken}>
                <img src={"/kroete.svg"} alt="PebbleImage" height={50} />
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
