import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Field, TurtleViewer } from "@/components/TurtleViewer";
import { Navigation } from "@/components/Navigation";
import {
  Button,
  Modal,
  ModalClose,
  ModalDialog,
  Textarea,
  Typography,
} from "@mui/joy";
import { useEffect, useState } from "react";
import { ProgressCheck } from "@/components/ProgressCheck";
import styles from "../styles/Uebung3.module.css";

//Standardwert der einzelnen CodeEditoren
const codeEingabe = `#include "turtle.h"
#include <stdio.h>
#include <iostream>

  int main(){
      Kroete pebble; //Element pebble kann nun aufgerufen werden
      // pebble.moveForward();
  };`;

const code_1 = `#include <iostream>
int main() {
    int zahl1 = 1; // Setze Variable "zahl1" auf den Wert 1
    int zahl2 = 3; // Setze Variable "zahl2" auf den Wert 3
    // Berechne die Summe der beiden Zahlen und speichere sie in der Variable "ergebnis"
    int ergebnis = zahl1 + zahl2;
    
    while(ergebnis < 10){ //SOLANGE das Ergebnis kleiner als 10 ist
      zahl1 += 1; //erhöhe den Wert um 1
      zahl2 += 1; //erhöhe den Wert um 1
      ergebnis = zahl1 + zahl2; //berechne summe
    }
    if(ergebnis >= 10){ //Gib das "ergebnis" aus, WENN die Summe größer als 10 ist.
      std::cout << "Die Summe ist: " << ergebnis << std::endl;
    }
    return 0;
}`;

//Labyrintherstellung
const maze_einfach: Field[][] = [
  [
    Field.START,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
  ],
  [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EXIT,
  ],
];
const maze_mittel: Field[][] = [
  [
    Field.START,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
  ],
  [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EXIT,
  ],
];

const maze_schwer: Field[][] = [
  [
    Field.START,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
  ],
  [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.WALL,
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
  ],
  [
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EXIT,
  ],
];

export default function Home() {
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  const [c_codeEingabe, set_c_codeEingabe] = useState(codeEingabe);

  const [finalOpen, setFinalOpen] = useState(false);

  //Progressbalken hier id zusammengerechnet
  const progress_gesamt = () => {
    const items = ["id_3_1", "id_3_2", "id_3_3", "id_urkunde"];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //POST auf DB
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

  // Antworten werden geladen: ,[] === einmal am anfang aufgerufen
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
          id_3_1: prog["id_3_1"] ?? false,
          id_3_2: prog["id_3_2"] ?? false,
          id_3_3: prog["id_3_3"] ?? false,
          id_urkunde: prog["id_urkunde"] ?? false,
        });
        set_c_codeEingabe(
          data.task.find((item: any) => item.id === "id_algo_3_code_eingabe")?.code ??
            codeEingabe
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      <Navigation
        visible={true}
        currentNavigation="/uebung3"
        titel="Algorithmus Teil 3 "
        progress={progress_gesamt()}
      >
        <div>
          <Typography level="h3">Algorithmus Teil 3</Typography>
          <div id="algo.3.1"></div>
          <div className={styles.bildeinruecken2}>
            <Typography level="body1">
              In dieser Lektion lernst du, wie man einen Pseudocode in C++ Code
              umwandelt. Es handelt sich um den letzten Kursabschnitt. Falls du
              dich noch unsicher fühlst hier fortzufahren, kannst du gerne
              nochmal die anderen Lektionen anschauen. Kehre aber anschließend
              hierher zurück um mir zu helfen, aus dem Labyrinth zu entkommen!
              Ich bin mir sicher, dass du auch dieses Kapitel meistern wirst!{" "}
              <br></br>
            </Typography>
            <img
              src={"/undraw_thought_process.svg"}
              alt="thoughtsImage"
              height={150}
            />
          </div>

          {/*Pseudocode in C++ Code*/}
          <div>
            <Typography level="h3" sx={{ marginTop: "30px" }}>
              Pseudocode zu C++ Code
            </Typography>
            <div id="algo.3.2"></div>
            <Typography level="body1">
              Bevor du deinen eigenen Pseudocode in ein C++ Code uberführst,
              schauen wir uns zusammen eine Überführung anhand eines Beispiels
              an.
            </Typography>
            <Typography level="h4" sx={{ marginTop: "10px" }}>
              Anwendungsbeispiel
            </Typography>
            <div id="algo.3.2.1"></div>
          </div>
          <div>
            <Typography level="body1" sx={{ marginTop: "5px" }}>
              <b>Pseudocode:</b>
              <br></br>
              Weise einer Variable "zahl1" den Wert eins zu. <br></br>
              Weise einer Variable "zahl2" den Wert drei zu. <br></br>
              Berechne die Summe der beiden Zahlen und speichere sie in der
              Variable "ergebnis" ab.<br></br>
              SOLANGE das Ergebnis der Summe kleiner als 10 ist, erhöhe den wert
              beider Zahlen um 1.<br></br>
              Gib das "ergebnis" aus, WENN die Summe größer-gleich 10 ist.
            </Typography>
            <Typography level="body1" sx={{ marginTop: "10px" }}>
              <b>C++:</b>
              <br></br>
            </Typography>
            <CodeEditor
              title="C++ Code"
              defaultValue={code_1}
              turtle={false}
            ></CodeEditor>
          </div>
          <Typography level="h4" sx={{ marginTop: "30px" }}>
            Guideline
          </Typography>
          <div id="algo.3.2.2"></div>
          <div className={styles.bildeinruecken}>
            <img
              src={"/undraw_learning.svg"}
              alt="learningImage"
              height={150}
            />
            <Typography level="body1">
              <b>1. Verstehe deinen Pseudocode:</b>
              <br></br>
              Hast du deinen Pseudocode vollständig verstanden und ist dir die
              Bedeutung jeder Anweisung klar? Stelle sicher, dass du alle
              Variablen und ihre Bedeutung kennst.<br></br>
              <b>2. Identifiziere Variablen und Datentypen:</b>
              <br></br>
              Überprüfe deinen Pseudocode auf verwendete Variablen und weise
              ihnen Datentypen zu.<br></br>
              <b>3. Strukturiere deinen Code:</b>
              <br></br>
              Überlege wie du Schleifen, Bedingungen und andere Strukturen
              deines Pseudocode in entsprechende C++ Codeblöcke überführen
              kannst. Schaue wie du "if"-Anweisungen, "while"/"for"-Schleifen
              einsetzen kanst.
              <br></br>
              <b>4. Überführung:</b>
              <br></br>
              Schreib mit Hilfe deines erlenten Wissens den Pseudocode in C++
              Code um.
              <br></br>
              <b>5.Teste deinen C++ Code:</b>
              <br></br>
              Laufe deinen C++ Code im Pebble Simulator durch. Leg deinen C++
              Code daneben und schau dir an, ob du alles richtig eingebunden
              hast.
            </Typography>
          </div>
          <Typography level="h4" sx={{ marginTop: "30px" }}>
            Dein C++ Code
          </Typography>
          <div id="algo.3.2.3"></div>
          <div className={styles.bildeinruecken}>
            <div>
              <Typography level="body1">
                Nimm nun deinen Pseudocode und den Kommentar deines Komilitonen
                aus dem Peer-Review zur Hand. <br></br>Versuche die einzelnen
                Segmente des Pseudocodes wie im vorherigen Beispiel in ein C++
                Code umzuwandeln.
              </Typography>
              <Typography level="body1" sx={{ marginTop: "10px" , marginBottom:"20px"}}>
                Erinne dich, du kannst:
                <br></br>• Pebble nach vorne gehen lassen mit
                <b> pebble.moveForward();</b>
                <br></br>• Pebble nach rechts drehen mit{" "}
                <b>pebble.turnRight();</b>
                <br></br>• Pebble nach links drehen mit{" "}
                <b>pebble.turnLeft();</b>
                <br></br>• Prüfen, ob eine Wand vor Pebble ist mit
                <b> pebble.isWallInFront();</b>
                <br></br>• Prüfen, ob eine Wand rechts von Pebble ist mit
                <b> pebble.isWallRight();</b>
                <br></br>• Prüfen, ob eine Wand links von Pebble ist mit
                <b> pebble.isWallLeft();</b>
                <br></br>• Prüfen, ob Pebble bereits im Ziel ist mit
                <b> pebble.imZiel();</b>
              </Typography>
            </div>
            <img
              src={"/undraw_proud_coder.svg"}
              alt="ProudCodeImage"
              height={150}
            />
          </div>

          <div style={{ display: "flex", gap: "40px" }}>
            <Textarea
              sx={{ width: "50%", marginBlock: 2 }}
              minRows={15}
              variant="plain"
              placeholder="Dein C++ Code"
              value={c_codeEingabe}
              onChange={(e) => set_c_codeEingabe(e.target.value)}
            />
            <Textarea
              sx={{ width: "50%", marginBlock: 2 }}
              minRows={5}
              variant="plain"
              placeholder="Dein Pseudocode"
              value={""}
            />
          </div>
          <Button
            color="success"
            variant="solid"
            sx={{ marginRight: "10px" }}
            onClick={() => TaskErstellen("id_algo_3_code_eingabe", c_codeEingabe, false)}
          >
            Speichern
          </Button>
          {/*Labyrinthe */}
          <Typography level="h3" sx={{ marginTop: "50px" }}>
            Labyrinthe
          </Typography>
          <div id="algo.3.3"></div>
          <Typography level="body1">
            Es ist nun so weit! schreibe deinen Algorithmus und führe diesen
            anschließend aus. Dein Ziel ist es mich aus drei Labyrinthen mit
            verschiedenen Schwierigkeitsstufen zu führen. Ich hoffe ich kann
            meiner Familie bald wieder sehen!
          </Typography>
          <Typography
            level="h5"
            endDecorator={
              <ProgressCheck
                done={progress["id_3_1"] ? 100 : 0}
              ></ProgressCheck>
            }
            sx={{ marginTop: "10px", marginBottom: "5px" }}
          >
            Einfaches Labyrinth
          </Typography>
          <div id="algo.3.3.1"></div>
          <CodeEditor
            title="einfach"
            defaultValue={c_codeEingabe}
            turtle={true}
            labyrinth={maze_einfach}
            onChange={(code) => set_c_codeEingabe(code)}
            codeEinAusgabe={(
              code_eingabe: string,
              code_ausgabe: string,
              imZiel?: boolean
            ) => {
              setProgress({ ...progress, id_3_1: imZiel ?? false });
              TaskErstellen("id_3_1", code_eingabe, imZiel ?? false);
            }}
          ></CodeEditor>
        </div>
        <div>
          <Typography
            level="h5"
            endDecorator={
              <ProgressCheck
                done={progress["id_3_2"] ? 100 : 0}
              ></ProgressCheck>
            }
            sx={{ marginTop: "10px", marginBottom: "5px" }}
          >
            Mittleres Labyrinth
          </Typography>
          <div id="algo.3.3.2"></div>
          <CodeEditor
            title="mittel"
            defaultValue={c_codeEingabe}
            turtle={true}
            labyrinth={maze_mittel}
            onChange={(code) => set_c_codeEingabe(code)}
            codeEinAusgabe={(
              code_eingabe: string,
              code_ausgabe: string,
              imZiel?: boolean
            ) => {
              setProgress({ ...progress, id_3_2: imZiel ?? false });
              TaskErstellen("id_3_2", code_eingabe, imZiel ?? false);
            }}
          ></CodeEditor>
        </div>
        <div>
          <Typography
            level="h5"
            endDecorator={
              <ProgressCheck
                done={progress["id_3_3"] ? 100 : 0}
              ></ProgressCheck>
            }
            sx={{ marginTop: "10px", marginBottom: "5px" }}
          >
            Schweres Labyrinth
          </Typography>
          <div id="algo.3.3.3"></div>
          <CodeEditor
            title="schwer"
            defaultValue={c_codeEingabe}
            turtle={true}
            labyrinth={maze_schwer}
            onChange={(code) => set_c_codeEingabe(code)}
            codeEinAusgabe={(
              code_eingabe: string,
              code_ausgabe: string,
              imZiel?: boolean
            ) => {
              setProgress({ ...progress, id_3_3: imZiel ?? false });
              TaskErstellen("id_3_3", code_eingabe, imZiel ?? false);
            }}
          ></CodeEditor>
        </div>
        <div
          style={{
            marginTop: "30px",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
            gap: "50px",
            flexDirection: "row",
          }}
        >
          <img
            src={"/undraw_certificate2.svg"}
            alt="Zertifikat2"
            height={130}
          />
          <Button
            color="success"
            disabled={
              !(progress["id_3_1"] && progress["id_3_2"] && progress["id_3_3"])
            }
            onClick={() => {
              setProgress({ ...progress, id_urkunde: true });
              TaskErstellen("id_urkunde", "", true);
              setFinalOpen(true);
            }}
          >
            Kurs abschließen
          </Button>
          <div id="algo.3.4"></div>
          <img
            src={"/undraw_certificate1.svg"}
            alt="Zertifikat1"
            height={130}
          />
        </div>
        <div
          style={{
            marginTop: "20px",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <Modal
            open={finalOpen}
            onClose={() => {
              setFinalOpen(false);
            }}
          >
            <ModalDialog color="success" variant="plain">
              <ModalClose />
              <Typography level="h5">Glückwunsch!!!</Typography>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography>
                  Super, dank dir habe ich es aus dem Labyrinth zurück zu meiner
                  Familie geschafft!Ich bin sehr stolz auf dich, dass du diesen
                  Kurs absoliviert hast und bedanke mich nochmal herzlich bei
                  dir für deine Hilfe! Ich hoffe ich konnte dir auch
                  weiterhelfen und dir einiges Wissenswertes auf deinen Weg
                  geben! Ich werde meiner Familie alles über unser Abenteuer
                  erzählen. Bis hoffentlich bald mein Freund! -Pebble
                </Typography>
                <img src={"/kroete.svg"} alt="PebbleImage" height={150} />
              </div>
              <a href="/urkunde.pdf" download>
                <Button color="success">Urkunde</Button>
              </a>
            </ModalDialog>
          </Modal>
        </div>
      </Navigation>
    </div>
  );
}