import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Navigation } from "@/components/Navigation";
import { Textarea, Typography } from "@mui/joy";
import styles from "../styles/Einleitung.module.css";
import { Accordion } from "@/components/Accordion";
import { ProgressCheck } from "@/components/ProgressCheck";
import { useEffect, useState } from "react";
import { Field } from "@/components/TurtleViewer";

//Standardwert, der hier steht
const einleitung_1 = `// einbinden externer Definitionen (hier std::cout)
#include <iostream>
int main()
{ // Start des Programms
std::cout << "Hello World!";
return 0; // Rückgabe an das aufrufende Programm
} // Ende des Programms`;

const var1 = `#include <iostream>
int main() {
  int myVar = 6;
  std::cout << myVar; 
}`;

const var2 = `#include <iostream>
int main() {
  int myVar = 6; //alter Wert
  myVar= 8; //neuer Wert
  std::cout << myVar; 
}`;

const operatoren = `#include <iostream>
int main() {
  int num1 = 3;
  int num2 = 5;
  std::cout << (num1 > num2);
  return 0;
}
`;

const einleitung_3 = `#include "turtle.h"
#include <stdio.h>
#include <iostream>

  int main(){
      Kroete pebble;
      int i;
      int p;

    for(p=0; p<4; p++){
      if(!pebble.isWallLeft()){
        pebble.moveForward();
      }
      for(i=0; i<4 ; i++){
        while(pebble.isWallLeft()){
          pebble.moveForward();
        }
        pebble.turnLeft();
        pebble.moveForward();
      }
    }
}`;

// Aufgabe 3 kleines Labyrinth
const maze_aufgabe3: Field[][] = [
  [Field.START, Field.EMPTY, Field.EMPTY, Field.EMPTY],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.EMPTY],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.EMPTY],
  [Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY],
];

export default function Home() {
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  const [code1, setCode1] = useState(einleitung_1);
  const [code2, setCode2] = useState(operatoren);
  const [code3, setCode3] = useState(einleitung_3);

  const Auswertung_einleitung_1_1 = (code: string) => {
    if (
      code.trim() === "Hello world!" ||
      "Hello world" ||
      "hello world" ||
      "hello world!"
    ) {
      setProgress({ ...progress, id_einleitung_1_1: true });
      return true;
    }
    return false;
  };

  const progress1_1 = () => {
    const items = [
      "id_1_1_a",
      "id_1_1_b",
      "id_1_1_c",
      "id_1_1_d",
      "id_1_1_e",
      "id_1_1_f",
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  const progress_gesamt = () => {
    const items = [
      "id_1_1_a",
      "id_1_1_b",
      "id_1_1_c",
      "id_1_1_d",
      "id_1_1_e",
      "id_1_1_f",
      "id_einleitung_1_1",
    ];
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

  //nichts drinnen [] -> einmal am anfang aufgerufen
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
          id_1_1_a: prog["id_1_1_a"] ?? false,
          id_1_1_b: prog["id_1_1_b"] ?? false,
          id_1_1_c: prog["id_1_1_c"] ?? false,
          id_1_1_d: prog["id_1_1_d"] ?? false,
          id_1_1_e: prog["id_1_1_e"] ?? false,
          id_1_1_f: prog["id_1_1_f"] ?? false,
          id_einleitung_1_1: prog["id_einleitung_1_1"] ?? false,
        });
        setCode1(
          data.task.find((item: any) => item.id === "id_einleitung_1_1")
            ?.code ?? einleitung_1
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      {/*Einleitung*/}
      <Navigation
        visible={true}
        currentNavigation="/einleitung"
        titel="C++ Kurs "
        progress={progress_gesamt()}
      >
        <Typography level="h3">C++ Kurs</Typography>
        <div className={styles.bildeinruecken}>
          <Typography>
            In diesem Kurs erhälst du Einblicke in die Programmiersprache C++.
            Es ist nicht erfoderlich, dass du bereits Programmiererfahrungen
            hast. Dieser Kurs ist für alle gedacht und wurde aus dem
            Vorlesungsskript des Moduls GdP erstellt. Schließe diesen C++ Kurs
            ab, um dein Wissen unter Beweis zu stellen.
          </Typography>
          <img
            src={"/undraw_programming2.svg"}
            alt="Programming2Image"
            height={100}
          />
        </div>
        {/*Accordion*/}
        <div>
          <Typography
            level="h4"
            endDecorator={<ProgressCheck done={progress1_1()}></ProgressCheck>}
          >
            Wissenswertes zu Beginn
          </Typography>
          <div id="c.1.1"></div>
          <Accordion
            titel="Was ist ein Algorithmus?"
            inhalt="Ein Algorithmus ist ein Verhaltensmuster, 
          das eine Menge auszuführender Aktionen (Handlungen) 
          und deren zeitliche Abfolge festlegt."
            wasClicked={() => {
              setProgress({ ...progress, id_1_1_a: true });
              TaskErstellen("id_1_1_a", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Was ist ein Programm?"
            inhalt="'Ein Programm ist ein strengformalisierter, eindeutiger und detaillierter Algorithmus, der maschinell ausgeführt werden kann' - Prof. B. Jung, Grundlagen der Informatik, Skript WS2007/08"
            wasClicked={() => {
              setProgress({ ...progress, id_1_1_b: true });
              TaskErstellen("id_1_1_b", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Was ist eine Programmiersprache?"
            inhalt="Eine Programmiersprache ist eine formalisierte Sprache zum (auf-/be-)schreiben von Algorithmen, die ausgeführt werden sollen.
          Die im Rahmen dieses Kurs erlernte Programmiersprache heißt C++."
            wasClicked={() => {
              setProgress({ ...progress, id_1_1_c: true });
              TaskErstellen("id_1_1_c", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Die Syntax..."
            inhalt="...regelt,welche Symbole aus Zeichen in deinem Programm zusammengesetzt werden können."
            wasClicked={() => {
              setProgress({ ...progress, id_1_1_d: true });
              TaskErstellen("id_1_1_d", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Die Grammatik..."
            inhalt="...regelt welche Kombinationen von Symbolen Sinn ergeben."
            wasClicked={() => {
              setProgress({ ...progress, id_1_1_e: true });
              TaskErstellen("id_1_1_e", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Die Semantik..."
            inhalt="...regelt die Bedeutung der Abfolgen von Symbolen."
            wasClicked={() => {
              setProgress({ ...progress, id_1_1_f: true });
              TaskErstellen("id_1_1_f", "", true);
            }}
          ></Accordion>
        </div>
        {/*Erstes programm*/}
        <div>
          <Typography
            sx={{ marginTop: "20px" }}
            level="h4"
            endDecorator={
              <ProgressCheck
                done={progress["id_einleitung_1_1"] ? 100 : 0}
              ></ProgressCheck>
            }
          >
            Mein erstes C++ Programm
          </Typography>
          <div id="c.1.2"></div>
          <Typography>
            Nachdem du nun viele neue Begriffe gelernt hast, ist es nun an der
            Zeit gekommen, dass du dein erstes C++ Programm schreibst. Führe
            dafür den Code aus, indem du auf den rechten Rand auf den Play
            Button drückst.
          </Typography>
          <CodeEditor
            title="Beispiel"
            defaultValue={code1}
            turtle={false}
            codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
              Auswertung_einleitung_1_1(code_ausgabe);
              TaskErstellen(
                "id_einleitung_1_1",
                code_eingabe,
                Auswertung_einleitung_1_1(code_ausgabe)
              );
            }}
          ></CodeEditor>
        </div>
        {/*Kommentar*/}
        <div>
          <Typography sx={{ marginTop: "20px" }} level="h4">
            Kommentar
          </Typography>
          <Typography level="body1">
            Alles, was in einer Zeile <b>//</b> folgt ist ein Kommentar.
            <br></br>
            Kommentare werden nicht interpretiert, sondern vom Computer
            überlesen. <br></br>Eine andere Art Kommentare zu schrieben ist, den
            Kommentar mit <b>/* Kommentar */</b> zu klammern.
          </Typography>
        </div>
        {/*Varaiblen*/}
        <div>
          <Typography sx={{ marginTop: "20px" }} level="h4">
            Variablen
          </Typography>
          <Typography level="body1">
            Variablen sind Platzhalter im Speicher des Rechners (“Merkzettel”)
            in denen Information gespeichert werden kann. C++ ist eine streng
            typisierte Sprache, das heißt, dass jeder Variablen neben einem
            Namen, ein eindeutiger Datentyp zuzuweisen ist. Die Syntax sieht
            also so aus:
          </Typography>
          <Textarea
            sx={{ width: "250px" }}
            color="neutral"
            disabled={true}
            minRows={1}
            placeholder="datentyp variabelName = wert;"
            size="sm"
            variant="outlined"
          />
          <Typography level="body1">
            Erstelle eine Variable mit dem namen 'myVar' vom Datentypen 'int'
            und weise es der Zahl 2 zu.
          </Typography>
          <CodeEditor
            title="Beispiel"
            defaultValue={var1}
            turtle={false}
          ></CodeEditor>
          <Typography level="body1">
            Falls du deiner Variable einen neuen Wert übergibst überschreibt das
            den alten Wert.
          </Typography>
          <CodeEditor
            title="Beispiel"
            defaultValue={var2}
            turtle={false}
          ></CodeEditor>
        </div>
        {/*Datentypen*/}
        <div>
          <Typography sx={{ marginTop: "20px" }} level="h4">
            Datentypen
          </Typography>
          <Typography level="body1">
            Du hast im vorherigen Kapitel bereits den Datentyp int
            kennengelernt. Es gibt aber noch viele weitere grundlegende
            Datentypen, die in dieser Grafik zusammengetragen wurden:
          </Typography>
          <img
            src={"/Datentypen.png"}
            alt="Datentypen"
            height={130}
            style={{ marginTop: "10px", marginBottom: "10px" }}
          />
        </div>
        {/*Operatoren*/}
        <div>
          <Typography
            level="h4"
            endDecorator={
              <ProgressCheck
                done={progress["id_1_3"] ? 100 : 0}
              ></ProgressCheck>
            }
          >
            Operatoren
          </Typography>
          <div id="c.1.3"></div>
          <Typography>
            Operatoren sind essentielle Bausteine in der Programmierung, die es
            ermöglichen Operationen auf Variablen und Werten auszuführen. Zu den
            gängigen Arten von Operatoren in der Programmiersprachen C++ gehören
            arithmetische Operatoren, logische Operatoren, Vergleichsoperatoren
            Gleichheit und Zuweisungsoperatoren.Sie spielen eine zentrale Rolle
            bei der Verarbeitung von Daten und beeinflussen den Ablauf des
            Programms maßgeblich.
          </Typography>
          {/*arithmetische Operatoren*/}
          <Accordion
            titel="Arithemtische Operatoren..."
            inhalt={
              <span>
                <Typography level="body1">
                  ...werden verwendet um mathematische Operationen auf Zahlen
                  anzuwenden.
                </Typography>
                <img
                  style={{ marginTop: "10px" }}
                  src={"/arithmetisch.png"}
                  alt="ArithOperatoren"
                  height={150}
                />
              </span>
            }
          ></Accordion>
          {/*Zuweisungs Operatoren*/}
          <Accordion
            titel="Zuweisungs Operatoren..."
            inhalt={
              <span>
                <Typography level="body1">
                  ...werden verwendet, um Werte einer Variable zuzuweisen. Das
                  bedeutet, dass der Wert auf der rechten Seite des
                  Zuweisungsoperators einer Variablen auf der linken Seite
                  zugewiesen wird.<br></br>
                </Typography>
                <img
                  style={{ marginTop: "10px" }}
                  src={"/zuweisung.png"}
                  alt="ZuweisungOperatoren"
                  height={80}
                />
              </span>
            }
          ></Accordion>
          {/*vergleichs Operatoren*/}
          <Accordion
            titel="Vergleichs Operatoren..."
            inhalt={
              <span>
                <Typography level="body1">
                  ...werden verwendet, um den Wert oder Zustand von zwei
                  Variablen oder Ausdrücken zu vergleichen. <br></br>Der
                  Rückgabewert eines Vergleichs ist entweder 1 (wahr) oder 0
                  (falsch).
                  <br></br>
                </Typography>
                <img
                  style={{ marginTop: "10px" }}
                  src={"/vergleich.png"}
                  alt="VergleichOperatoren"
                  height={150}
                />
              </span>
            }
          ></Accordion>
          {/*logische Operatoren*/}
          <Accordion
            titel="Logische Operatoren..."
            inhalt={
              <span>
                <Typography level="body1">
                  ...werden verwendet, um logische Ausdrücke in
                  Programmiersprachen zu erstellen. Sie sind besonders nützlich,
                  wenn wir mit booleschen Werten arbeiten oder viele Bedingungen
                  kombinieren möchten.
                  <br></br>
                </Typography>
                <img
                  style={{ marginTop: "10px" }}
                  src={"/logisch.png"}
                  alt="LogOperatoren"
                  height={80}
                />
              </span>
            }
          ></Accordion>
          {/*Operatoren Code*/}
          <Typography level="body1"> Ändere den Code so um, dass das Ergebnis Wahrheitswert "1" (true) ausgibt.</Typography>
          <CodeEditor
            title="Operatoren"
            defaultValue={operatoren}
            turtle={false}
          ></CodeEditor>
        </div>
        <div>
          <Typography>Übung3</Typography>
          <CodeEditor
            title="Aufgabe2"
            defaultValue={einleitung_3}
            turtle={true}
            labyrinth={maze_aufgabe3}
          ></CodeEditor>
        </div>
      </Navigation>
    </>
  );
}
