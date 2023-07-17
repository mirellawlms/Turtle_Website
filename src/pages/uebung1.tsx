import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Navigation } from "@/components/Navigation";
import { Button, Textarea, Typography } from "@mui/joy";
import { TurtleViewer_Steuerung } from "@/components/TurtleViewer_Steuerung";
import { maze_mitel_1, maze_mitel_2, maze_mitel_3, maze_mitel_4 } from "@/Labyrinthe/mittel";
import { useState } from "react";
import styles from "../styles/Uebung1.module.css";

const labyrinth = [maze_mitel_1, maze_mitel_2, maze_mitel_3, maze_mitel_4];

export default function Home() {
  /*runde ab (zahl zwischen 0 und 1 * 3) => eine Zahl davon*/
  const [field, setField] = useState(
    labyrinth[Math.floor(Math.random() * labyrinth.length)]
  );
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      <Navigation currentNavigation="/uebung1" titel="Algorithmus Teil 1 ">
        <div>
          <Typography level="h3">Algorithmus Teil 1</Typography>
          <Typography level="h5">Algorithmen sind kompliziert!</Typography>
          <div id="1.1"></div>
          <div>
            <div className={styles.bildeinruecken}>
              <div>
                Kann jeder Programmieren? Diese Frage habe ich mir oft gestellt.
                Wer eine gute Tasse Kaffee (oder Kakao) machen kann, kann auch
                programmieren, ist mein Fazit. Viele würden die Ernsthaftigkeit
                der Aussage in Frage stellen und schmunzeln. Aber abwegig ist
                diese trozdem nicht.
                Um eine schöne heiße Tasse Kaffee zu bekommen (French
                Press), muss eine bestimmte Abfolge von Schritten eingehalten
                werden.
              </div>
              <img src={"/undraw_coffee.svg"} alt="coffeeImage" height={130} />
            </div>

            <div className={styles.Container}>
              1. Wir benötigen ein Boiler, um Wasser richtig zu
              erhitzen (brodeln)
              <br></br>2. Die gemahlene Kaffeemenge muss für eine Tasse
              abgestimmt sein
              <br></br>3. Die Brühzeit sollte nur wenige Minuten lang sein.
              <br></br>4. Gebrühten Kaffee in eine aufgewärmte Tasse gießen.
              <br></br>5. Mit Zucker oder Milch bei Bedarf individuell das Aroma
              ändern.
            </div>
            <br></br> Perfekt! Das war es.
            <br></br> Und so ist es auch beim Programmieren, ich muss mich auf
            klare, logische Abläufe einhalten und orientieren. Ein Programm
            besteht aus einzelnen Anweisungen - sprich Befehlen, die von oben
            nach unten abgearbeitet werden (Quelle). Viele Fragen sich, ich weiß
            gar nicht, womit ich beim Schreiben eines Programmes beginnenn soll?
            Um eine Strukur und Logik in seinen wirren Gedanken zu bekommen,
            helfen Entwurfstechniken wie Programmablaufplan, Struktogramm und
            UML. Ich ziehe die quick and dirty Methode - Pseudocode vor. Auf
            einem Blatt Papier werden die jeweiligen einzelnen Schritte
            untereinander niederscheiben. Immer mit der Frage, welcher Schritt
            kommt zuerst. Das fertige Ergebnis nennt der Programmierer
            Algorithmus (Lösungsansatz). Einen Leitfaden wie die Umsetzung
            aussehen kann. Kurz gesagt, wer die Dinge logisch in der richtigen
            Abfolge beschreiben kann, der kann programmieren. Der oder die darf
            sich Programmierer/in nennen! Ich meine hier nicht codieren.
            Codieren ist lediglich die Umsetzung der Beschreibung in einer
            Programmmiersprache wie C++, Java, Python etc. Um zu codieren, wird
            eine Entwicklungsumgebung zum Eingeben und Testen (Debugging) des
            Codes (Anweisungen) benötigt. Jetzt kommen Begriffe wie Variablen,
            Datentype, Operatoren, Verzweigungen und Schleifen in Spiel. Aber
            das erkläre ich nicht jetzt, aber später.
          </div>
          <Typography level="h5">Dein Algorithmus auf Papier</Typography>
          <Typography level="body1">
            Du hast in diesem Kapitel viel über Algorithmen und Pseudocode gelernt.
            Nun bist du an der Reihe. Schreibe einen Algorithmus, der mir hilft aus dem Labyrinth zu kommen.
           Mithilfe derinteraktiven Schaltfläche kannst du spielerisch testen, ob dein Pseudocode funktioniert.
           Gebe diesen anschließend für die Peer-Review frei!
          </Typography>
          <Textarea
            sx={{ width: "100vh", marginBlock: 2 }}
            color="success"
            minRows={5}
            variant="plain"
            placeholder="Dein Algorithmus"
          />
          <Typography>Laufe hier deinen Algorithmus durch!</Typography>
          <TurtleViewer_Steuerung
            field={field}
            width={500}
            height={500}
            labyrinthChange={() =>
              setField(labyrinth[Math.floor(Math.random() * labyrinth.length)])
            }
          ></TurtleViewer_Steuerung>
        </div>
      </Navigation>
    </>
  );
}
