import { Container, Link, Typography } from "@mui/joy";
import styles from "../styles/Navigation.module.css";
import { useRouter } from "next/router";
import { ErweiterteNavigation } from "./ErweiterteNavigation";
import { LoadBalken } from "./LoadBalken";

interface Props {
  titel?: string;
  children: React.ReactNode;
  currentNavigation: string;
  progress?: number;
  visible: boolean;
}

export const Navigation: React.FC<Props> = (props) => {
  //const title = props.title;
  const { titel, children, currentNavigation, progress, visible } = props;
  const router = useRouter(); /*wie link*/

  return (
    <div>
      <div className={styles.einrueckenWelcome}>
        <div className={styles.navigationsbar}>
          <div className={styles.navigationitems}>
            {/* C++ Kurs */}
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/einleitung", label: "C++ Einführung" }}
                inhalt={[
                  {
                    idlink: "/einleitung#ckurs.1",
                    label: "Wissenswertes zu Beginn",
                  },
                  {
                    idlink: "/einleitung#ckurs.2",
                    label: "Mein erstes C++ Programm",
                  },
                  {
                    idlink: "/einleitung#ckurs.3",
                    label: "Kommentar",
                  },
                  {
                    idlink: "/einleitung#ckurs.4",
                    label: "Variablen",
                  },
                  {
                    idlink: "/einleitung#ckurs.5",
                    label: "Datentypen",
                  },
                  {
                    idlink: "/einleitung#ckurs.6",
                    label: "Operatoren",
                  },
                  {
                    idlink: "/einleitung#ckurs.7",
                    label: "Kontrollstrukturen",
                  },
                  {
                    idlink: "/einleitung#ckurs.7.1",
                    label: "Fallunterscheidung",
                  },
                  {
                    idlink: "/einleitung#ckurs.7.2",
                    label: "Schleifen",
                  },
                ]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>
            {/* Algo Teil1 */}
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/uebung1", label: "Algorithmus Teil 1" }}
                inhalt={[
                  {
                    idlink: "/uebung1#algo.1.1",
                    label: "Definitionen zu Beginn",
                  },
                  {
                    idlink: "/uebung1#algo.1.2",
                    label: "Kann jeder Programmieren?",
                  },
                  { idlink: "/uebung1#algo.1.3", label: "Entwurfstechnik" },
                  {
                    idlink: "/uebung1#algo.1.3.1",
                    label: "Programmablaufsplan",
                  },
                  { idlink: "/uebung1#algo.1.3.2", label: "Struktogramm" },
                  { idlink: "/uebung1#algo.1.3.3", label: "Pseudocode" },
                  { idlink: "/uebung1#algo.1.4", label: "Kontrollstrukturen" },
                  {
                    idlink: "/uebung1#algo.1.4.1",
                    label: "Fallunterscheidung",
                  },
                  { idlink: "/uebung1#algo.1.4.2", label: "Schleifen" },
                  { idlink: "/uebung1#algo.1.5", label: "Pebble-Simulator" },
                  { idlink: "/uebung1#algo.1.6", label: "Dein Pseudocode" },
                ]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>

            {/*Peer Review
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/peerReview", label: "Peer Review" }}
                inhalt={[]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>
            */}

            {/* Algo Teil 2 */}
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/uebung2", label: "Algorithmus Teil 2" }}
                inhalt={[
                  {
                    idlink: "/uebung2#algo.2.2",
                    label: "Klassen und Objekte",
                  },
                  {
                    idlink: "/uebung2#algo.2.3",
                    label: "Attribute",
                  },
                  {
                    idlink: "/uebung2#algo.2.4",
                    label: "Methoden",
                  },
                  {
                    idlink: "/uebung2#algo.2.5",
                    label: "Beispiel",
                  },
                  {
                    idlink: "/uebung2#algo.2.6",
                    label: "Pebbles Labyrinth",
                  },
                  {
                    idlink: "/uebung2#algo.2.7",
                    label: "Anwendungsfall 1",
                  },
                  {
                    idlink: "/uebung2#algo.2.8",
                    label: "Anwendungsfall 2",
                  },
                  {
                    idlink: "/uebung2#algo.2.9",
                    label: "Anwendungsfall 3",
                  },
                  {
                    idlink: "/uebung2#algo.2.10",
                    label: "Anwendungsfall 4",
                  },
                ]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>

            {/* Algo Teil 3 */}
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/uebung3", label: "Algorithmus Teil 3" }}
                inhalt={[
                  {
                    idlink: "/uebung3#algo.3.2",
                    label: "Pseudocode zu C++ Code",
                  },
                  {
                    idlink: "/uebung3#algo.3.2.1",
                    label: "Anwendungsbeispiel",
                  },
                  { idlink: "/uebung3#algo.3.2.2", label: "Guideline" },
                  { idlink: "/uebung3#algo.3.2.3", label: "Dein C++ Code" },
                  { idlink: "/uebung3#algo.3.3", label: "Labyrinthe" },
                  {
                    idlink: "/uebung3#algo.3.3.1",
                    label: "Einfaches Labyrinth",
                  },
                  {
                    idlink: "/uebung3#algo.3.3.2",
                    label: "Mittleres Labyrinth",
                  },
                  {
                    idlink: "/uebung3#algo.3.3.3",
                    label: "Schweres Labyrinth",
                  },
                  { idlink: "/uebung3#algo.3.4", label: "Kurs Abschluss" },
                ]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>

          </div>
        </div>
        {/*Top Navigation*/}
        <div className={styles.topbar}>
          <Link href={"/"}>
            <img src={"/kroete.svg"} alt="PebbleImage" height={40} />
          </Link>
          {visible && (
            <LoadBalken
              progress={progress ?? 0}
              titel={titel ?? ""}
            ></LoadBalken>
          )}
        </div>
        <Container sx={{ paddingBlock: "30px", paddingTop: "70px" }}>
          {children}
        </Container>
      </div>
      {/*Footer*/}
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
          {/*Copyright*/}
          <div>
            <hr></hr>
            <Typography level="body2">&copy; 2023 Mirella Willems</Typography>
          </div>
        </Container>
      </div>
    </div>
  );
};
