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
import styles from "../styles/Uebung2.module.css";

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
          data.task.find((item: any) => item.id === "id_algo_2_code_eingabe")
            ?.code ?? codeEingabe
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
        currentNavigation="/uebung2"
        titel="Algorithmus Teil 3 "
        progress={progress_gesamt()}
      >
        <div>
          <Typography level="h3">Algorithmus Teil 2</Typography>
          <div id="algo.2.1"></div>
          <Typography level="body1">
            In diesem Kapitel wirst du darauf vorbereitet Algorithmus Teil 3 zu
            lösen. Dort bekommst du die Aufgabe deinen in Algorithmus Teil 1
            erstellten Pseudocode in ein C++ Code umzuwandeln. Dafür musst du
            aber noch einiges lernen, was wir uns zusammen in diesem Kapitel
            anschauen.
            <br></br>
          </Typography>

          {/*Klassen*/}
          <div>
            <Typography level="h4" sx={{ marginTop: "30px" }}>
              Klassen
            </Typography>
            <div id="algo.2.2"></div>
            <Typography level="body1">Klassen</Typography>
          </div>


          {/*Methoden*/}
          <div>
          <Typography level="h4" sx={{ marginTop: "10px" }}>
            Methoden
          </Typography>
          <div id="algo.2.3"></div>
          <Typography level="body1">Methoden</Typography>
          </div>
          

         </div>
      </Navigation>
    </div>
  );
}
