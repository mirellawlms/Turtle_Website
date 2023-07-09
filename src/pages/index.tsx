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

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.svg" />
      </Head>
      <Navigation currentNavigation="/">
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
            <div className={styles.TextContainer}>
              <Typography level="body1">
                Hallo liebe Erstis der Studiengänge Informatik und
                Medieninformatik der HTWK. Mein Name ist Pebble und ich begleite
                euch in den nächsten Wochen in diesem für euch erstellen
                Einführungskurs für C++. Diese E-Learning Plattform wird in dem
                Modul Grundlagen der Programmierung eingesetzt. Manche von euch
                haben sicher schon etwas Programmiererfahrung, aber wenn nicht,
                ist das auch kein Problem! Mit diesem Kurs holen wir alle ab und
                zeigen, dass Programmieren garnicht so schwer ist und auch Spaß
                machen kann. Wir werden zusammen verschiedene Lektionen
                bearbeiten und du wirst mir hoffentlich dabei helfen wieder nach
                Hause zu finden, da ich mich leider verlaufen habe! Ich freue
                mich dir eine Einführung in C++ zu geben und wäre dir dankbar,
                wenn du mir helfen könntest, wieder nach Hause zu finden.
                <br></br>
              </Typography>
            </div>
            <img src={"/kroete.svg"} alt="PebbleImage" height={150} />
          </div>
          {/*Umfrage*/}
          <FormControl>
            <FormLabel htmlFor="umfrage1">
              Nimm gerne an dieser kleinen Umfrage teil und erzähl mir, ob du
              bereits Programmiererfahrungen hast.
            </FormLabel>
            <RadioGroup name="umfrage1">
              <Radio
                value="outlined"
                label="Anfänger (wenig Erfahrung)"
                variant="soft"
                color="success"
              />
              <Radio
                value="soft"
                label="Amateuer (etwas Erfahrung)"
                variant="soft"
                color="success"
              />
              <Radio
                value="solid"
                label="Fortgeschritten (viel Erfahrung)"
                variant="soft"
                color="success"
              />
            </RadioGroup>
          </FormControl>
          {/*Zweiter Absatz*/}
          <div className={styles.CenterContainer}>
            <div className={styles.HomeFlexCenter}>
              <Typography level="h3">
                <b>Kursinhalte</b>
              </Typography>
            </div>
            {/*Accordion*/}
            <div>
              <Accordion titel="Einführungskurs in C++" inhalt="Auf Basis des Skript vom Modul 'Grundlagen der
              Programmierung' wurde ein Einstiegskurs erstellt. Man lernt in den
              verschiedenen Kapiteln die Grundlagen der Programmiersprache C++
              kennen und kann direkt in dem integrieten CodeEditor sein Wissen
              testen und zur Probe stellen. Dabei wird der Fortschritt
              dokumentiert und beim Abschluss aller Kapitel wartet ein
              Zertifikat auf die Teilnehmer*innen."></Accordion>
              <Accordion titel="C-Turtle als Einstieg" inhalt={<span>Ursprünglich wurde die Turtle in
              der Programmiersprache Python entwickelt und ist ein Modul, das
              eine Turtle-Grafikbibliothek verwendet, um grafische Anwendungen
              zu erstellen. Da ihr jedoch im Modul GdP die Prorammiersprache C++
              erlernt, haben wir kurzerhand aus der Python-Turtle die C-Turtle
              gemacht. Unser C-Turtle Programm ermöglicht das Steuern einer
              virtuellen 'Schildkröte' namens 'Pebble', die ihr helfen müsst aus
              einem Labyrinth zu kommen. Es bietet eine einfache Syntax und
              direkte visuelle Rückmeldung, was es zu einem beliebten Werkzeug
              macht, um Anfänger für das Programmieren zu begeistern. Weitere
              Infos findet ihr  <Link href="https://github.com/walkerje/C-Turtle">hier.</Link></span>}></Accordion>
              <Accordion titel="Algorithmus leicht gemacht" inhalt="Algortihmen können manchmal
              sehr einschüchternd sein, daher brechen wir diese in einfache
              Schritte auf, damit jeder sie verstehen kann!"></Accordion>
              <Accordion titel="Anwedung des Algorithmus" inhalt="Ihr könnt direkt über den
              CodeEditor euren Algorithmus testen und Pebble helfen aus dem
              Labyrinth zurück zu seiner Familie zu finden."></Accordion>
            </div>
          </div>

          <br></br>
          <div className={styles.bildeinruecken2}>
            <div>
              <Typography level="h3">
                <b>E-Learning</b>
              </Typography>
              <div>
                <br></br>- Gamification
                <br></br>- Visuelle Unterstützung durch Bilder
                <br></br>- Highscore-Anzeigen
                <br></br>- Sammelbare/Freischaltbare Elemente
              </div>
            </div>
            <img src={"/undraw_elearning.svg"} alt="elearningImage" height={150} />
          </div>
        </div>
      </Navigation>
    </>
  );
}
