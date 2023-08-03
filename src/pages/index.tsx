import {
  FormControl,
  FormLabel,
  Link,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/joy";
import Head from "next/head";
import { Navigation } from "@/components/Navigation";
import styles from "../styles/Index.module.css";
import { Accordion } from "@/components/Accordion";
import { useState } from "react";

export default function Home() {
  const [auswahlUmfrage, setAuswahlUmfrage] = useState("");

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.svg" />
      </Head>
      <Navigation visible={false} currentNavigation="/">
        <div>
          <Typography level="h1">
            Einführungskurs in C++ mit C-Turtle
          </Typography>
          {/*Erster Absatz*/}
          <Typography level="h2" fontSize="xl">
            Pebble die Schildkröte
          </Typography>
          <br></br>
          <div className={styles.bildeinruecken}>
            <div>
              <Typography level="body1">
                Hallo liebe Erstis der Studiengänge Informatik und
                Medieninformatik der HTWK Leipzig.<br></br> Ich bin Pebble und
                ich brauche dringend deine Hilfe! Gestern war es sehr stürmisch,
                und ich habe mich leider verlaufen und weiß nicht mehr, wie ich
                zurück zu meiner Familie komme. Du kannst mir doch sicherlich
                helfen, oder? <br></br>Dafür musst du verschiedene Kapitel
                dieser E-Learning Plattform des Moduls 'Grundlagen der
                Programmierung' absolvieren. Manche von euch haben sicher schon
                etwas Programmiererfahrung, aber wenn nicht, ist das auch kein
                Problem! Mit diesem Kurs holen wir alle ab und zeigen, dass
                Programmieren gar nicht so schwer ist und auch Spaß machen kann.
                Wir werden zusammen verschiedene Lektionen bearbeiten. Ich freue
                mich dir eine Einführung in C++ zu geben und ich hoffe, dass du
                mir dabei helfen wirst, wieder nach Hause zu finden!
                <br></br>
              </Typography>
            </div>
            <img src={"/kroete.svg"} alt="PebbleImage" height={150} />
          </div>
          <div>
            {/*Umfrage*/}
            <FormControl>
              <FormLabel htmlFor="umfrage1" sx={{ marginTop: "10px" }}>
                Nimm gerne an dieser kleinen Umfrage teil und erzähl mir, ob du
                bereits Programmiererfahrungen hast.
              </FormLabel>
              <div className={styles.bildeinruecken}>
                <RadioGroup
                  name="umfrage1"
                  onChange={(event) => setAuswahlUmfrage(event.target.value)}
                >
                  <Radio
                    value="nerdy_turtle_begin"
                    label="Anfänger (keine Erfahrung)"
                    variant="soft"
                    color="success"
                  />
                  <Radio
                    value="nerdy_turtle_mittel"
                    label="Fortgeschritten (etwas Erfahrung)"
                    variant="soft"
                    color="success"
                  />
                  <Radio
                    value="nerdy_turtle_profi"
                    label="Profi (viel Erfahrung)"
                    variant="soft"
                    color="success"
                  />
                </RadioGroup>
                {/*Umfrage Bilder - nur euns angezeigt*/}

                {auswahlUmfrage && (
                  <img
                    src={"/" + auswahlUmfrage + ".png"}
                    alt="UmfrageTurtle"
                    height={150}
                  />
                )}
              </div>
            </FormControl>
          </div>

          {/*Zweiter Absatz*/}
          <div className={styles.CenterContainer}>
            <div className={styles.HomeFlexCenter}>
              <Typography level="h3">
                <b>Kursinhalte</b>
              </Typography>
            </div>
            <div>
              <Accordion
                titel="Einführungskurs in C++"
                inhalt="Auf Basis des Skript vom Modul 'Grundlagen der
              Programmierung' wurde ein Einstiegskurs erstellt. Man lernt in den
              verschiedenen Kapiteln die Grundlagen der Programmiersprache C++
              kennen und kann direkt in dem integrieten CodeEditor sein Wissen
              testen und unter Beweis stellen."
              ></Accordion>
              <Accordion
                titel="C-Turtle als Einstieg"
                inhalt={
                  <span>
                    Ursprünglich wurde die Turtle in der Programmiersprache
                    Python entwickelt und ist ein Modul, das eine
                    Turtle-Grafikbibliothek verwendet, um grafische Anwendungen
                    zu erstellen. Da ihr jedoch im Modul GdP die
                    Prorammiersprache C++ erlernt, haben wir kurzerhand aus der
                    Python-Turtle die C-Turtle gemacht. Unser C-Turtle Programm
                    ermöglicht das Steuern einer virtuellen 'Schildkröte' namens
                    'Pebble', die ihr helfen müsst aus einem Labyrinth zu
                    kommen. Es bietet eine einfache Syntax und direkte visuelle
                    Rückmeldung, was es zu einem beliebten Werkzeug macht, um
                    Anfänger für das Programmieren zu begeistern. Weitere Infos
                    findet ihr{" "}
                    <Link href="https://github.com/walkerje/C-Turtle">
                      hier.
                    </Link>
                  </span>
                }
              ></Accordion>
              <Accordion
                titel="Verständnis der Algorithmik"
                inhalt="
                Algorithmen können manchmal sehr einschüchternd wirken, deshalb ist es hilfreich, 
                sie in einfache Schritte aufzuteilen. Durch diese schrittweise Herangehensweise
                könnt ihr ein grundlegendes Verständnis dafür entwickeln, wie Algorithmen zur
                Lösung von Problemen und zur Verarbeitung von Daten eingesetzt werden können.
                Es geht darum, die Komplexität zu reduzieren und einen klaren Plan zu erstellen, 
                um eine Aufgabe systematisch anzugehen."
              ></Accordion>
              <Accordion
                titel="Pseudocode zu C++ Code"
                inhalt="Es wird gezeigt, wie man einen Algorithmus in Pseudocode beschreibt und in C++ Code umsetzt.
                Dabei müsst ihr einen Algorithmus entwickeln, der Pebble aus den Labyrinth führt.
                Die Umwandlung von Pseudocode in C++ erfodert Kenntnisse der C++ Syntax und das
                Verständnis des Algorithmus selbst. Aber keine Panik, in dieser E-Learning Plattform
                erlangst du dieses Wissen, um erfolgreich einen eigenen Algorithmus zu schreiben!"
              ></Accordion>
            </div>
          </div>
          {/*dritter Absatz*/}
          <div className={styles.bildeinruecken}>
            <img
              src={"/undraw_elearning.svg"}
              alt="elearningImage"
              height={150}
            />
            <div>
              <Typography level="h3">
                <b>E-Learning Funktionen</b>
              </Typography>
              <Typography level="body1">
                • Gamification
                <br></br>• Visuelle Unterstützung durch Bilder
                <br></br>• Interaktive Bausteine
                <br></br>• Highscore-Anzeigen
                <br></br>• Sammelbare/Freischaltbare Elemente
              </Typography>
            </div>
          </div>
          {/*vierter Absatz*/}
          <div className={styles.bildeinruecken}>
            <div>
              <Typography level="h3">
                <b>Ziele</b>
              </Typography>
              <Typography level="body1">
                • Spaß am Programmieren<br></br>• Einfacher Einstieg in
                C++/Algorithmen<br></br>• Förderung der
                Problemlösungsfähigkeiten<br></br>• Entwicklung kreativer
                Algorithmen<br></br>
              </Typography>
            </div>
            <img src={"/undraw_ziele.svg"} alt="ziele" height={150} />
          </div>
          {/*fünfter Absatz*/}
          <div className={styles.bildeinruecken2}>
            <div>
              <Typography level="h3">
                <b>Pebbles Abenteuer</b>
              </Typography>
              <Typography level="body1">
                Nach einem schrecklichen Gewitter hat sich Pebble die
                Schildkröte verlaufen. Jetzt ist er im Garten der HTWK
                aufgewacht und weiß nicht wie er zurück zu seiner Familie
                findet. Zum Glück bist du da, um ihn zu helfen. Auf dem Weg aus
                dem Labyritnh wird dir Pebble vieles über Algorithmen
                beibringen. Bist du bereit für dieses Abenteuer?
              </Typography>
            </div>
            <img
              src={"/undraw_programming.svg"}
              alt="programmer"
              height={150}
            />
          </div>
        </div>
      </Navigation>
    </>
  );
}
