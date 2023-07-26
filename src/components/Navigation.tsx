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
            {/* Algo Teil1 */}
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/uebung1", label: "Algorithmus Teil 1" }}
                inhalt={[
                { idlink: "/uebung1#algo.1.1", label: "Algorithmen sind kompliziert" },
                { idlink: "/uebung1#algo.1.2", label: "Pseudocode" },
                { idlink: "/uebung1#algo.1.3", label: "Gamification - Sei Pebble" },
                { idlink: "/uebung1#algo.1.4", label: "Dein Pseudocode" }
                ]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>

            {/* Algo Teil 2 */}
            <div>
              <ErweiterteNavigation
                title={{ idlink: "/uebung2", label: "Algorithmus Teil 2" }}
                inhalt={[
                { idlink: "/uebung2#algo.2.1", label: "Einfaches Labyrinth" },
                { idlink: "/uebung2#algo.2.2", label: "Mittleres Labyrinth" },
                { idlink: "/uebung2#algo.2.3", label: "Schweres Labyrinth" }
                ]}
                currentNavigation={currentNavigation}
              ></ErweiterteNavigation>
            </div>

            {/*Peer Review*/}
            <div>
            <ErweiterteNavigation
                title={{ idlink: "/peerReview", label: "Peer Review" }}
                inhalt={[
                { idlink: "/peerReview#peer.1.1", label: "Peer Review" }
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
          <LoadBalken progress={progress??0} titel={titel??""}></LoadBalken>
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
                  }>
                  E-Learning Beauftragter der HTWK
                </Link>
              </Typography>
              <Typography level="body2">
                <Link
                  href={
                    "https://bildungsportal.sachsen.de/opal/auth/RepositoryEntry/25768460288/CourseNode/1631759207016055012?8"
                  }>
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
