import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Navigation } from "@/components/Navigation";
import { Button, Textarea, Typography } from "@mui/joy";
import { TurtleViewer_Steuerung } from "@/components/TurtleViewer_Steuerung";
import {
  maze_mitel_1,
  maze_mitel_2,
  maze_mitel_3,
  maze_mitel_4,
} from "@/Labyrinthe/mittel";
import { useEffect, useState } from "react";
import styles from "../styles/Uebung1.module.css";
import { ProgressCheck } from "@/components/ProgressCheck";

const labyrinth = [maze_mitel_1, maze_mitel_2, maze_mitel_3, maze_mitel_4];

export default function Home() {
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  /*runde ab (zahl zwischen 0 und 1 * 3) => eine Zahl davon*/
  const [field, setField] = useState(
    labyrinth[Math.floor(Math.random() * labyrinth.length)]
  );
  const [pseudocodeValue, setPseudocodeValue] = useState("");

  //Progressbalken hier id zusammengerechnet
  const progress_gesamt = () => {
    const items = ["id_algo_1_1", "id_algo_1_2"];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };
  //Task mit ID wird erstellt und in DB abgespeichert
  const TaskErstellen = async (
    id: string,
    code_eingabe: string,
    complete: boolean
  ) => {
    fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        code: code_eingabe,
        complete: complete,
      }),
    }).catch((error) => {
      console.error(error);
    });
  };
  //lade Wert wieder zurück, wenn reload
  useEffect(() => {
    fetch("/api/task", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const prog = data.task.reduce((acc: any, item: any) => {
          return {
            ...acc,
            [item.id]: item.complete,
          };
        }, {});
        console.log(data.task, prog);
        setProgress({
          id_algo_1_1: prog["id_algo_1_1"] ?? false,
          id_algo_1_2: prog["id_algo_1_2"] ?? false,
        });
        setPseudocodeValue(
          data.task.find((item: any) => item.id === "id_algo_1_2")?.code ??
            pseudocodeValue
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const Submitten = async () => {
    fetch("/api/peerReview/submit", {
      method: "POST",
    }).catch((error) => {
      console.error(error);
    });
  };
  
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      <Navigation visible={true} currentNavigation="/uebung1" titel="Algorithmus Teil 1 " progress={progress_gesamt()}>
        <div>
          <Typography level="h3">Algorithmus Teil 1</Typography>
          <Typography level="h5">Algorithmen sind kompliziert!</Typography>
          <div id="algo.1.1"></div>
          <div>
            <div className={styles.bildeinruecken}>
              <div>
                Kann jeder Programmieren? Diese Frage habe ich mir oft gestellt.
                Wer eine gute Tasse Kaffee (oder Kakao) machen kann, kann auch
                programmieren, ist mein Fazit. Viele würden die Ernsthaftigkeit
                der Aussage in Frage stellen und schmunzeln. Aber abwegig ist
                diese trozdem nicht. Um eine schöne heiße Tasse Kaffee zu
                bekommen (French Press), muss eine bestimmte Abfolge von
                Schritten eingehalten werden.
              </div>
              <img src={"/undraw_coffee.svg"} alt="coffeeImage" height={130} />
            </div>
            <div className={styles.Container}>
              1. Wir benötigen ein Boiler, um Wasser richtig zu erhitzen
              (brodeln)
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
            helfen Entwurfstechniken wie Programmablaufplan, Struktogramm, UML
            und die quick and dirty Methode - Pseudocode.
            <Typography level="h5" sx={{ marginTop: "10px" }}>
              Pseudocode
            </Typography>
            <div id="algo.1.2"></div>
            <div>
              Auf einem Blatt Papier werden die jeweiligen einzelnen Schritte
              untereinander niedergeschrieben. Immer mit der Frage, welcher
              Schritt kommt zuerst. Kurz gesagt, wer die Dinge logisch in der
              richtigen Abfolge beschreiben kann, der kann programmieren.Ich
              meine hier nicht codieren. Codieren ist lediglich die Umsetzung
              der Beschreibung in einer Programmmiersprache wie C++, Java,
              Python etc. Um zu codieren, wird eine Entwicklungsumgebung zum
              Eingeben und Testen (Debugging) des Codes (Anweisungen) benötigt.
            </div>
          </div>
          <Typography
            level="h5"
            endDecorator={
              <ProgressCheck
                done={progress["id_algo_1_1"] ? 100 : 0}
              ></ProgressCheck>
            }
            sx={{ marginTop: "20px" }}
          >
            Gamification - Sei Pebble!
          </Typography>
          <div id="algo.1.3"></div>
          <div style={{ marginBottom: "20px" }}>
            Laufe hier deinen Algorithmus durch und schlüpfe in die Rolle von
            Pebble.
            <br></br>Hier kannst du auch deinen Algorithmus testen, den du im
            nächsten Kapitel anhschließend für eine PeerReview freigeben kannst.
          </div>
          <TurtleViewer_Steuerung
            field={field}
            width={500}
            height={500}
            labyrinthChange={() =>
              setField(labyrinth[Math.floor(Math.random() * labyrinth.length)])
            }
            istImZiel={() => {
              setProgress({ ...progress, id_algo_1_1: true }),
              TaskErstellen("id_algo_1_1", "", true);
            }}
          ></TurtleViewer_Steuerung>

          <Typography
            level="h5"
            endDecorator={
              <ProgressCheck
                done={progress["id_algo_1_2"] ? 100 : 0}
              ></ProgressCheck>
            }
            sx={{ marginTop: "20px" }}
          >
            Dein Pseudocode
          </Typography>
          <div id="algo.1.4"></div>
          <Typography level="body1">
            Du hast in diesem Kapitel viel über Algorithmen und Pseudocode
            gelernt. Nun bist du an der Reihe. Schreibe einen Algorithmus, der
            mir hilft aus dem Labyrinth zu kommen. Mithilfe derinteraktiven
            Schaltfläche kannst du spielerisch testen, ob dein Pseudocode
            funktioniert. Gebe diesen anschließend für die Peer-Review frei!
          </Typography>
          <Textarea
            sx={{ width: "100%", marginBlock: 2 }}
            color="success"
            minRows={5}
            variant="plain"
            placeholder="Dein Algorithmus"
            value={pseudocodeValue}
            onChange={(e) => setPseudocodeValue(e.target.value)}
            disabled={!!progress["id_algo_1_2"]}
          />
          <Button
            color="success"
            variant="soft"
            onClick={() => TaskErstellen("id_algo_1_2", pseudocodeValue, false)}
            sx={{ marginRight: "10px" }}
            disabled={!!progress["id_algo_1_2"]}
          >
            Speichern
          </Button>
          <Button 
          color="success"
          onClick={() => {
            if(confirm("Die PeerReview kann von deinem Professor und Komilitonnen eingesehen werden. Schicke deinen Pseudocode nur ab, wenn du damit fertig bist und Feedback erhalten möchtest.")){
              setProgress({ ...progress, id_algo_1_2: true });
              TaskErstellen("id_algo_1_2", pseudocodeValue, true);
              Submitten();
            }
          }}
          disabled={!!progress["id_algo_1_2"]}
          >Zur Peer Review freigeben</Button>
        </div>
      </Navigation>
    </>
  );
}
