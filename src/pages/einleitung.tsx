import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Navigation } from "@/components/Navigation";
import { Textarea, Typography } from "@mui/joy";
import styles from "../styles/Einleitung.module.css";
import { Accordion } from "@/components/Accordion";
import { ProgressCheck } from "@/components/ProgressCheck";
import { useEffect, useState } from "react";
import { Field } from "@/components/TurtleViewer";

//CODE Plstzhalter
//EINLEITUNG
const einleitung = `// einbinden externer Definitionen (hier std::cout)
#include <iostream>
int main()
{ // Start des Programms
std::cout << "Hello World!";
return 0; // Rückgabe an das aufrufende Programm
} // Ende des Programms`;

//VARIABLEN
const var1 = `#include <iostream>

int main() {
  int myVar = 6;
  std::cout << myVar; 
}`;

//DATENTYPEN
const datentyp_bool = `#include <iostream>

int main() {
  bool ichKannProgrammieren = false;
  std::cout << ichKannProgrammieren;
  return 0;
}`;

const datentyp_zahl = `#include <iostream>
int main() {
  int a = 5;
  double b = 27.3;
  float c = 3.24;
  std::cout << "a ist: " << a << ", b ist: " << b << ", c ist: " << c << std::endl;
  return 0;
}`;

const datentyp_char1 = `#include <iostream>
int main () {
  char a = 'H';
  char b = 'a';

  std::cout << a << b << std::endl;
  return 0;
}`;
const datentyp_char2 = `#include <iostream>
int main () {
  char a = 80; //80 ist in der ASCII-Tabelle 'P'
  char b = 101; //101 ist inder ASCII-Tabelle 'e'
  /*--erweitere--*/

  std::cout << a << b << std::endl;
  return 0;
}`;

const datentyp_string = `#include <iostream>
#include <string> 
int main() {
  /*schreibe hier deinen Code*/
  std::string test = "test";
  std::cout << test << std::endl;
  return 0;
}`;

//OPERATOREN
const operatoren = `#include <iostream>
int main() {
  int num1 = 3;
  int num2 = 5;
  std::cout << (num1 > num2);
  return 0;
}`;

//KONTROLLSTRUKTUREN
//FALLUNTERSCHEIDUNG
const fallunterscheidung_if = `#include <iostream>
int main() {
  int zahl = 10;
  if (zahl > 11 ) {
    std::cout << "Super, du hast diese Aufgabe geschafft!";
  }
  return 0;
}`;

const fallunterscheidung_if_else = `#include <iostream>
int main() {
  int akku = 80;
  if (akku < 20 ) {
    std::cout << "Deine Akkuladung ist gering! Lade dein Handy.";
  } else {
    std::cout << "Deine Akkuladung reicht noch aus!";
  }
  return 0;
}`;

const fallunterscheidung_else_if = `#include <iostream>
int main() {
  int akku = 10;
  if (akku < 30 ) {
    std::cout << "Deine Akkuladung ist gering! Lade dein Handy.";
  } else if(akku < 50){
    std::cout << "Du solltest bald dein Handy laden!";
  } else {
    std::cout << "Deine Akkuladung reicht noch aus!";
  }
  return 0;
}`;
const fallunterscheidung_switch = `#include <iostream>
int main() {
    int sprache = 6;
    switch (sprache) {
        case 1:     // Fall, dass der Wert von var 1 ist
            std::cout << "Java" << std::endl;
            break;  // beendet die Ausführung des switch-Blocks
        case 2:     // Fall, dass der Wert von var 2 ist
            std::cout << "C++" << std::endl;
            break;
        default:     // Wird ausgeführt, wenn kein anderer Fall eintritt
            std::cout << "Python" << std::endl;
            break;
           }
    return 0;
}`;

//SCHLEIFEN
const schleifen_while = `#include <iostream>
int main() {
  int i = 1;
  while (i < 6) {
    std::cout << i << " ";
    i++;
  }
  return 0;
}`;

const schleifen_dowhile = `#include <iostream>
int main() {
  int i = 1;
  do{
    std::cout << i << " ";
    i++;
  }
  while (i < 11);
  return 0;
}`;

const schleifen_for = `#include <iostream>
int main() {
  for(int i=1; i < 6; ++i){
    std::cout << i << " " << std::endl;
  }
  return 0;
}`;

const schleifen = `#include "turtle.h"
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

//Aufgabe schleifen kleines Labyrinth
const maze_schleifen: Field[][] = [
  [Field.START, Field.EMPTY, Field.EMPTY, Field.EMPTY],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.EMPTY],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.EMPTY],
  [Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY],
];

export default function Home() {
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  const [code_2_a, setCode_2_a] = useState(einleitung);
  const [code_4_a, setCode_4_a] = useState(var1);
  const [code_5_1_a, setCode_5_1_a] = useState(datentyp_bool);
  const [code_5_2_a, setCode_5_2_a] = useState(datentyp_zahl);
  const [code_5_3_a, setCode_5_3_a] = useState(datentyp_char1);
  const [code_5_3_b, setCode_5_3_b] = useState(datentyp_char2);
  const [code_5_4_a, setCode_5_4_a] = useState(datentyp_string);
  const [code_6_2_a, setCode_6_2_a] = useState(operatoren);
  const [code_7_1_1_a, setCode_7_1_1_a] = useState(fallunterscheidung_if);
  const [code_7_1_2_a, setCode_7_1_2_a] = useState(fallunterscheidung_if_else);
  const [code_7_1_3_a, setCode_7_1_3_a] = useState(fallunterscheidung_else_if);
  const [code_7_1_4_a, setCode_7_1_4_a] = useState(fallunterscheidung_switch);
  const [code_7_2_1_a, setCode_7_2_1_a] = useState(schleifen_while);
  const [code_7_2_2_a, setCode_7_2_2_a] = useState(schleifen_dowhile);
  const [code_7_2_3_a, setCode_7_2_3_a] = useState(schleifen_for);

  /*CODEAUSWERTUNGEN PRÜFUNG*/
  //mein erstes C++ Programm
  const Auswertung_id_ckurs_2_a = (code: string) => {
    if (
      code.trim() === "Hello world!" ||
      "Hello world" ||
      "hello world" ||
      "hello world!"
    ) {
      setProgress({ ...progress, id_ckurs_2_a: true });
      return true;
    }
    return false;
  };
  //Variablen
  const Auswertung_id_ckurs_4_a = (code: string) => {
    if (code.trim() === "2") {
      setProgress({ ...progress, id_ckurs_4_a: true });
      return true;
    }
    return false;
  };
  //Datentypen
  //bool
  const Auswertung_id_ckurs_5_1_a = (code: string) => {
    if (code.trim() === "1") {
      setProgress({ ...progress, id_ckurs_5_1_a: true });
      return true;
    }
    return false;
  };
  //zahl
  const Auswertung_id_ckurs_5_2_a = (code: string) => {
    if (code.trim() === "a ist: 5, b ist: 27.3, c ist: 3.24") {
      setProgress({ ...progress, id_ckurs_5_2_a: true });
      return true;
    }
    return false;
  };
  //char
  const Auswertung_id_ckurs_5_3_a = (code: string) => {
    if (code.trim() === "Hallo" || "H a l l o" || "hallo" || "h a l l o") {
      setProgress({ ...progress, id_ckurs_5_3_a: true });
      return true;
    }
    return false;
  };
  const Auswertung_id_ckurs_5_3_b = (code: string) => {
    if (
      code.trim() === "Pebble" ||
      "P e b b l e" ||
      "pebble" ||
      "p e b b l e" ||
      "PEBBLE" ||
      "P E B B L E"
    ) {
      setProgress({ ...progress, id_ckurs_5_3_b: true });
      return true;
    }
    return false;
  };
  //string
  const Auswertung_id_ckurs_5_4_a = (code: string) => {
    if (code.trim() === "Hallo" || "H a l l o" || "hallo" || "h a l l o") {
      setProgress({ ...progress, id_ckurs_5_4_a: true });
      return true;
    }
    return false;
  };

  //operatoren
  const Auswertung_id_ckurs_6_2_a = (code: string) => {
    if (code.trim() === "1") {
      setProgress({ ...progress, id_ckurs_6_2_a: true });
      return true;
    }
    return false;
  };
  //Kontrollstrukturen
  //Fallunterscheidung
  //if else
  const Auswertung_id_ckurs_7_1_1_a = (code: string) => {
    if (code.trim() === "Deine Akkuladung ist gering! Lade dein Handy" ||
      "Deine Akkuladung ist gering! Lade dein Handy.") {
      setProgress({ ...progress, id_ckurs_7_1_1_a: true });
      return true;
    }
    return false;
  };
  //if else
  const Auswertung_id_ckurs_7_1_2_a = (code: string) => {
    if (
      code.trim() === "Super, du hast diese Aufgabe geschafft" ||
      "Super, du hast diese Aufgabe geschafft!") {
      setProgress({ ...progress, id_ckurs_7_1_2_a: true });
      return true;
    }
    return false;
  };
  //else if
  const Auswertung_id_ckurs_7_1_3_a = (code: string) => {
    if (
      code.trim() === "Du solltest bald dein Handy laden" ||
      "Du solltest bald dein Handy laden!") {
      setProgress({ ...progress, id_ckurs_7_1_3_a: true });
      return true;
    }
    return false;
  };
  //switch case
  const Auswertung_id_ckurs_7_1_4_a = (code: string) => {
    if (code.trim() === "C++" || "c++") {
      setProgress({ ...progress, id_ckurs_7_1_4_a: true });
      return true;
    }
    return false;
  };
  //Schleifen
  //while
  const Auswertung_id_ckurs_7_2_1_a = (code: string) => {
    if (code.trim() === "1 2 3 4 5 6 7 8 9" || "123456789") {
      setProgress({ ...progress, id_ckurs_7_2_1_a: true });
      return true;
    }
    return false;
  };
  //do while
  const Auswertung_id_ckurs_7_2_2_a = (code: string) => {
    if (code.trim() === "1 2 3 4 5 6 7 8 9" || "123456789") {
      setProgress({ ...progress, id_ckurs_7_2_2_a: true });
      return true;
    }
    return false;
  };
  //for
  const Auswertung_id_ckurs_7_2_3_a = (code: string) => {
    if (code.trim() === "1 2 3 4 5 6 7 8 9" || "123456789") {
      setProgress({ ...progress, id_ckurs_7_2_3_a: true });
      return true;
    }
    return false;
  };

  /*PROGRESSE MEHRERER */
  //Wissenwertes zu Beginn
  const progress_ckurs_1 = () => {
    const items = [
      "id_ckurs_1_a",
      "id_ckurs_1_b",
      "id_ckurs_1_c",
      "id_ckurs_1_d",
      "id_ckurs_1_e",
      "id_ckurs_1_f",
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Datentypen
  const progress_ckurs_5 = () => {
    const items = [
      "id_ckurs_5_1_a",
      "id_ckurs_5_2_a",
      "id_ckurs_5_3_a",
      "id_ckurs_5_3_b",
      "id_ckurs_5_4_a",
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Datentypen - char zusammen
  const progress_ckurs_5_3 = () => {
    const items = ["id_ckurs_5_3_a", "id_ckurs_5_3_b"];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Operatoren gesamt
  const progress_ckurs_6 = () => {
    const items = [
      "id_ckurs_6_1_a",
      "id_ckurs_6_1_b",
      "id_ckurs_6_1_c",
      "id_ckurs_6_1_d",
      "id_ckurs_6_2_a",
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Kontrollstrukturen gesamt
  const progress_ckurs_7 = () => {
    const items = [
      "id_ckurs_7_1_1_a",
      "id_ckurs_7_1_2_a",
      "id_ckurs_7_1_3_a",
      "id_ckurs_7_1_4_a",
      "id_ckurs_7_2_1_a",
      "id_ckurs_7_2_2_a",
      "id_ckurs_7_2_3_a",
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Kontrollstrukturen - Fallunterscheidung zusammen
  const progress_ckurs_7_1 = () => {
    const items = [
      "id_ckurs_7_1_1_a",
      "id_ckurs_7_1_2_a",
      "id_ckurs_7_1_3_a",
      "id_ckurs_7_1_4_a",
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Kontrollstrukturen - Schleifen zusammen
  const progress_ckurs_7_2 = () => {
    const items = ["id_ckurs_7_2_1_a", "id_ckurs_7_2_2_a", "id_ckurs_7_2_3_a"];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //*ALLE PROGRESSE ZUSAMMEN */
  const progress_gesamt = () => {
    const items = [
      //Wissenwertes zu Beginn
      "id_ckurs_1_a",
      "id_ckurs_1_b",
      "id_ckurs_1_c",
      "id_ckurs_1_d",
      "id_ckurs_1_e",
      "id_ckurs_1_f",
      //Mein erstes C++ Programm
      "id_ckurs_2_a",
      //Variablen
      "id_ckurs_4_a",
      //Datentyp
      "id_ckurs_5_1_a",
      "id_ckurs_5_2_a",
      "id_ckurs_5_3_a",
      "id_ckurs_5_3_b",
      "id_ckurs_5_4_a",
      //Opoeratoren
      "id_ckurs_6_1_a",
      "id_ckurs_6_1_b",
      "id_ckurs_6_1_c",
      "id_ckurs_6_1_d",
      "id_ckurs_6_2_a",
      //Kontrollstrukturen
      //Fallunterscheidung
      "id_ckurs_7_1_1_a",
      "id_ckurs_7_1_2_a",
      "id_ckurs_7_1_3_a",
      "id_ckurs_7_1_4_a",
      //Schleifen
      "id_ckurs_7_2_1_a",
      "id_ckurs_7_2_2_a",
      "id_ckurs_7_2_3_a",
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  /*POST AUF DB*/
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

  /*LADE DATEN AUS DB */
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
          //Wissenwertes zu Beginn
          id_ckurs_1_a: prog["id_ckurs_1_a"] ?? false,
          id_ckurs_1_b: prog["id_ckurs_1_b"] ?? false,
          id_ckurs_1_c: prog["id_ckurs_1_c"] ?? false,
          id_ckurs_1_d: prog["id_ckurs_1_d"] ?? false,
          id_ckurs_1_e: prog["id_ckurs_1_e"] ?? false,
          id_ckurs_1_f: prog["id_ckurs_1_f"] ?? false,
          //Mein erstes C++ Programm
          id_ckurs_2_a: prog["id_ckurs_2_a"] ?? false,
          //Variablen
          id_ckurs_4_a: prog["id_ckurs_4_a"] ?? false,
          //Datentypen
          id_ckurs_5_1_a: prog["id_ckurs_5_1_a"] ?? false,
          id_ckurs_5_2_a: prog["id_ckurs_5_2_a"] ?? false,
          id_ckurs_5_3_a: prog["id_ckurs_5_3_a"] ?? false,
          id_ckurs_5_3_b: prog["id_ckurs_5_3_b"] ?? false,
          id_ckurs_5_4_a: prog["id_ckurs_5_4_a"] ?? false,
          //Operatoren
          id_ckurs_6_1_a: prog["id_ckurs_6_1_a"] ?? false,
          id_ckurs_6_1_b: prog["id_ckurs_6_1_b"] ?? false,
          id_ckurs_6_1_c: prog["id_ckurs_6_1_c"] ?? false,
          id_ckurs_6_1_d: prog["id_ckurs_6_1_d"] ?? false,
          id_ckurs_6_2_a: prog["id_ckurs_6_2_a"] ?? false,
          //Kontrollstrukturen
          //Fallunterscheidung
          id_ckurs_7_1_1_a: prog["id_ckurs_7_1_1_a"] ?? false,
          id_ckurs_7_1_2_a: prog["id_ckurs_7_1_2_a"] ?? false,
          id_ckurs_7_1_3_a: prog["id_ckurs_7_1_3_a"] ?? false,
          id_ckurs_7_1_4_a: prog["id_ckurs_7_1_4_a"] ?? false,
          //Schleifen
          id_ckurs_7_2_1_a: prog["id_ckurs_7_2_1_a"] ?? false,
          id_ckurs_7_2_2_a: prog["id_ckurs_7_2_2_a"] ?? false,
          id_ckurs_7_2_3_a: prog["id_ckurs_7_2_3_a"] ?? false,
        });
        setCode_2_a(
          data.task.find((item: any) => item.id === "id_ckurs_2_a")?.code ??
            einleitung
        );
        setCode_4_a(
          data.task.find((item: any) => item.id === "id_ckurs_4_a")?.code ??
            var1
        );
        setCode_5_1_a(
          data.task.find((item: any) => item.id === "id_ckurs_5_1_a")?.code ??
            datentyp_bool
        );
        setCode_5_2_a(
          data.task.find((item: any) => item.id === "id_ckurs_5_2_a")?.code ??
            datentyp_zahl
        );
        setCode_5_3_a(
          data.task.find((item: any) => item.id === "id_ckurs_5_3_a")?.code ??
            datentyp_char1
        );
        setCode_5_3_b(
          data.task.find((item: any) => item.id === "id_ckurs_5_3_b")?.code ??
            datentyp_char2
        );
        setCode_5_4_a(
          data.task.find((item: any) => item.id === "id_ckurs_5_4_a")?.code ??
            datentyp_string
        );
        setCode_6_2_a(
          data.task.find((item: any) => item.id === "id_ckurs_6_2_a")?.code ??
            operatoren
        );
        setCode_7_1_1_a(
          data.task.find((item: any) => item.id === "id_ckurs_7_1_1_a")?.code ??
            fallunterscheidung_if
        );
        setCode_7_1_2_a(
          data.task.find((item: any) => item.id === "id_ckurs_7_1_2_a")?.code ??
            fallunterscheidung_if_else
        );
        setCode_7_1_3_a(
          data.task.find((item: any) => item.id === "id_ckurs_7_1_3_a")?.code ??
            fallunterscheidung_else_if
        );
        setCode_7_1_4_a(
          data.task.find((item: any) => item.id === "id_ckurs_7_1_4_a")?.code ??
            fallunterscheidung_switch
        );
        setCode_7_2_1_a(
          data.task.find((item: any) => item.id === "id_ckurs_7_2_1_a")?.code ??
            schleifen_while
        );
        setCode_7_2_2_a(
          data.task.find((item: any) => item.id === "id_ckurs_7_2_2_a")?.code ??
            schleifen_dowhile
        );
        setCode_7_2_3_a(
          data.task.find((item: any) => item.id === "id_ckurs_7_2_3_a")?.code ??
            schleifen_for
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
            endDecorator={
              <ProgressCheck done={progress_ckurs_1()}></ProgressCheck>
            }
          >
            Wissenswertes zu Beginn
          </Typography>
          <div id="ckurs.1"></div>
          <Accordion
            titel="Was ist ein Algorithmus?"
            inhalt="Ein Algorithmus ist ein Verhaltensmuster, 
          das eine Menge auszuführender Aktionen (Handlungen) 
          und deren zeitliche Abfolge festlegt."
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_1_a: true });
              TaskErstellen("id_ckurs_1_a", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Was ist ein Programm?"
            inhalt="'Ein Programm ist ein strengformalisierter, eindeutiger und detaillierter Algorithmus, der maschinell ausgeführt werden kann' - Prof. B. Jung, Grundlagen der Informatik, Skript WS2007/08"
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_1_b: true });
              TaskErstellen("id_ckurs_1_b", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Was ist eine Programmiersprache?"
            inhalt="Eine Programmiersprache ist eine formalisierte Sprache zum (auf-/be-)schreiben von Algorithmen, die ausgeführt werden sollen.
          Die im Rahmen dieses Kurs erlernte Programmiersprache heißt C++."
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_1_c: true });
              TaskErstellen("id_ckurs_1_c", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Die Syntax..."
            inhalt="...regelt,welche Symbole aus Zeichen in deinem Programm zusammengesetzt werden können."
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_1_d: true });
              TaskErstellen("id_ckurs_1_d", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Die Grammatik..."
            inhalt="...regelt welche Kombinationen von Symbolen Sinn ergeben."
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_1_e: true });
              TaskErstellen("id_ckurs_1_e", "", true);
            }}
          ></Accordion>
          <Accordion
            titel="Die Semantik..."
            inhalt="...regelt die Bedeutung der Abfolgen von Symbolen."
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_1_f: true });
              TaskErstellen("id_ckurs_1_f", "", true);
            }}
          ></Accordion>
        </div>
        {/*Erstes programm*/}
        <div>
          <Typography
            sx={{ marginTop: "40px" }}
            level="h4"
            endDecorator={
              <ProgressCheck
                done={progress["id_ckurs_2_a"] ? 100 : 0}
              ></ProgressCheck>
            }
          >
            Mein erstes C++ Programm
          </Typography>
          <div id="ckurs.2"></div>
          <Typography sx={{ marginBottom: "10px" }} level="body1">
            Nachdem du nun viele neue Begriffe gelernt hast, ist es nun an der
            Zeit gekommen, dass du dein erstes C++ Programm schreibst.
          </Typography>
          <CodeEditor
            title="Aufgabe: Gib 'Hello world!' aus, indem du rechts den Code über den Play
            Button ausführst."
            defaultValue={code_2_a}
            turtle={false}
            codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
              Auswertung_id_ckurs_2_a(code_ausgabe);
              TaskErstellen(
                "id_ckurs_2_a",
                code_eingabe,
                Auswertung_id_ckurs_2_a(code_ausgabe)
              );
            }}
          ></CodeEditor>
        </div>
        {/*Kommentar*/}
        <div>
          <Typography sx={{ marginTop: "40px" }} level="h4">
            Kommentar
          </Typography>
          <div id="ckurs.3"></div>
          <Typography level="body1">
            Alles, was in einer Zeile <b>//</b> folgt ist ein Kommentar.
            <br></br>
            Kommentare werden nicht interpretiert, sondern vom Computer
            überlesen. <br></br>Eine andere Art Kommentare zu schreiben ist, den
            Kommentar mit <b>/* Kommentar */</b> zu klammern.
          </Typography>
        </div>
        {/*Variablen*/}
        <div>
          <Typography
            sx={{ marginTop: "40px" }}
            level="h4"
            endDecorator={
              <ProgressCheck
                done={progress["id_ckurs_4_a"] ? 100 : 0}
              ></ProgressCheck>
            }
          >
            Variablen
          </Typography>
          <div id="ckurs.4"></div>
          <Typography level="body1">
            Variablen sind Platzhalter im Speicher des Rechners (“Merkzettel”)
            in denen Information gespeichert werden kann. C++ ist eine streng
            typisierte Sprache, das heißt, dass jeder Variablen neben einem
            Namen, ein eindeutiger Datentyp zuzuweisen ist. Die Syntax sieht
            also so aus:
          </Typography>
          <Textarea
            sx={{ width: "250px", marginTop: "10px", marginBottom: "10px" }}
            color="neutral"
            disabled={true}
            minRows={1}
            placeholder="datentyp variabelName = wert;"
            size="sm"
            variant="outlined"
          />
          <CodeEditor
            title="Aufgabe: Erstelle eine Variable mit dem namen 'myVar' vom Datentypen 'int'
            und weise es der Zahl 2 zu"
            defaultValue={code_4_a}
            turtle={false}
            codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
              Auswertung_id_ckurs_4_a(code_ausgabe);
              TaskErstellen(
                "id_ckurs_4_a",
                code_eingabe,
                Auswertung_id_ckurs_4_a(code_ausgabe)
              );
            }}
          ></CodeEditor>
        </div>
        {/*Datentypen*/}
        <div>
          <Typography
            sx={{ marginTop: "40px" }}
            level="h4"
            endDecorator={
              <ProgressCheck done={progress_ckurs_5()}></ProgressCheck>
            }
          >
            Datentypen
          </Typography>
          <div id="ckurs.5"></div>
          <Typography level="body1" sx={{ marginBottom: "10px" }}>
            Du hast im vorherigen Kapitel bereits den Datentyp 'int'
            kennengelernt. Es gibt aber noch viele weitere grundlegende
            Datentypen.
          </Typography>
          <div>
            <Typography
              level="h5"
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_5_1_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Datentyp - Boolean
            </Typography>
            <div id="ckurs.5.1"></div>
            <Typography sx={{ marginBottom: "10px" }} level="body1">
              Die Werte von dem Datenyp boolean können nur 0 und 1 annehmen.
              Dabei bedeutet 0 "false" und 1 “true".
            </Typography>
            <CodeEditor
              title="Aufgabe: Ändere den Wert um, sodass die Aussage wahr ist! :)"
              defaultValue={code_5_1_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_5_1_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_5_1_a",
                  code_eingabe,
                  Auswertung_id_ckurs_5_1_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
          </div>
          <div>
            <Typography
              level="h5"
              sx={{ marginTop: "20px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_5_2_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Datentyp - Zahlen {"(int, double, float)"}
            </Typography>
            <div id="ckurs.5.2"></div>
            <Typography sx={{ marginBottom: "10px" }} level="body1">
              Man kann Zahlen mit verschiedenen Datentypen darstellen.<br></br>•
              "int" wird für ganze Zahlen ohne Dezimalstellen verwendet
              <br></br>• "double" und "float" werden für Zahlen mit
              Dezimalstellen verwendet, wobei "double" eine höheren Wertebereich
              erreicht als "float".
            </Typography>
            <CodeEditor
              title="Aufgabe: Führe den Code aus. "
              defaultValue={code_5_2_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_5_2_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_5_2_a",
                  code_eingabe,
                  Auswertung_id_ckurs_5_2_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
          </div>
          <div>
            <Typography
              level="h5"
              sx={{ marginTop: "20px" }}
              endDecorator={
                <ProgressCheck done={progress_ckurs_5_3()}></ProgressCheck>
              }
            >
              Datentyp - Zeichen (char)
            </Typography>
            <div id="ckurs.5.3"></div>
            <Typography sx={{ marginBottom: "10px" }} level="body1">
              Der Datentyp "char" wird verwendet, um ein einzelnes Zeichen zu
              speichern. <br></br>Das Zeichen muss dafür von einem einfachen
              Anführungszeichen umgeben sein {"('A' oder 'a')"}.
            </Typography>
            <CodeEditor
              title="Aufgabe: Gib 'Hallo' aus. "
              defaultValue={code_5_3_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_5_3_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_5_3_a",
                  code_eingabe,
                  Auswertung_id_ckurs_5_3_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
            <Typography sx={{ marginTop: "20px", marginBottom: "10px" }}>
              Man kann auch ASCII-Werte verwenden, um bestimmte Zeichen
              anzuzeigen.
            </Typography>
            <CodeEditor
              title="Aufgabe: Gib 'Pebble' mit Hilfe der ASCII-Tabelle aus."
              defaultValue={code_5_3_b}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_5_3_b(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_5_3_b",
                  code_eingabe,
                  Auswertung_id_ckurs_5_3_b(code_ausgabe)
                );
              }}
            ></CodeEditor>
          </div>
          <div>
            <Typography
              level="h5"
              sx={{ marginTop: "20px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_5_4_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Datentyp - string
            </Typography>
            <div id="ckurs.5.4"></div>
            <Typography sx={{ marginBottom: "10px" }} level="body1">
              Der Datentyp "std::string" ist eine Sequenz von Zeichen, die als
              Text interpretiert wird. Strings können Buchstaben, Zahlen,
              Leerzeichen und Sonderzeichen enthalten und ermöglichen die
              Darstellung von Wörtern, Sätzen oder Texten. Der Inhalt muss dafür
              von Anführungszeichen umgeben sein <span>("Text").</span>
            </Typography>
            <CodeEditor
              title="Aufgabe: Gib 'Hallo' aus. "
              defaultValue={code_5_4_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_5_4_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_5_4_a",
                  code_eingabe,
                  Auswertung_id_ckurs_5_4_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
          </div>
          <Typography level="h5" sx={{ marginTop: "20px" }}>
            Datentypen - Zusammenfassung
          </Typography>
          <div id="ckurs.5.5"></div>
          <img
            src={"/Datentypen.png"}
            alt="Datentypen"
            height={150}
            style={{ marginTop: "10px" }}
          />
        </div>
        {/*Operatoren*/}
        <div>
          <Typography
            level="h4"
            endDecorator={
              <ProgressCheck done={progress_ckurs_6()}></ProgressCheck>
            }
            sx={{ marginTop: "40px" }}
          >
            Operatoren
          </Typography>
          <div id="ckurs.6"></div>
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
          <div id="ckurs.6.1.a"></div>
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
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_6_1_a: true });
              TaskErstellen("id_ckurs_6_1_a", "", true);
            }}
          ></Accordion>
          <div id="ckurs.6.1.b"></div>
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
                  height={130}
                />
              </span>
            }
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_6_1_b: true });
              TaskErstellen("id_ckurs_6_1_b", "", true);
            }}
          ></Accordion>
          <div id="ckurs.6.1.c"></div>
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
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_6_1_c: true });
              TaskErstellen("id_ckurs_6_1_c", "", true);
            }}
          ></Accordion>
          <div id="ckurs.6.1.d"></div>
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
                  height={130}
                />
              </span>
            }
            wasClicked={() => {
              setProgress({ ...progress, id_ckurs_6_1_d: true });
              TaskErstellen("id_ckurs_6_1_d", "", true);
            }}
          ></Accordion>
          <Typography sx={{ marginBottom: "10px" }}></Typography>
          <div id="ckurs.6.2.a"></div>
          {/*Operatoren Code*/}
          <CodeEditor
            title="Aufgabe: Ändere den Code so um, dass das Ergebnis Wahrheitswert '1' (true)
            ausgibt."
            defaultValue={code_6_2_a}
            turtle={false}
            codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
              Auswertung_id_ckurs_6_2_a(code_ausgabe);
              TaskErstellen(
                "id_ckurs_6_2_a",
                code_eingabe,
                Auswertung_id_ckurs_6_2_a(code_ausgabe)
              );
            }}
          ></CodeEditor>
        </div>
        {/*Kontrollstrukturen*/}
        <div>
          <Typography
            sx={{ marginTop: "40px" }}
            level="h4"
            endDecorator={
              <ProgressCheck done={progress_ckurs_7()}></ProgressCheck>
            }
          >
            Kontrollstrukturen (Fallunterscheidungen, Schleifen,
            Sprunganweisungen)
          </Typography>
          <div id="ckurs.7"></div>
          <Typography level="body1" sx={{ marginBottom: "20px" }}>
            Kontrollstrukturen sind Konstrukte, welche die Reihenfolge der
            Ausführung von Anweisungen steuern. Durch sie ist es möglich,
            bestimmte Codeblöcke basierend auf Bedingungen auszuführen oder
            komplett zu überspringen. Mit ihrer Hilfe kann man komplexe Aufgaben
            lösen.
          </Typography>
          {/*Fallunterscheidung */}
          <div>
            <Typography
              level="h5"
              endDecorator={
                <ProgressCheck done={progress_ckurs_7_1()}></ProgressCheck>
              }
            >
              <b>Fallunterscheidung</b>
            </Typography>
            <div id="ckurs.7.1"></div>
            <Typography
              level="h5"
              sx={{ marginTop: "5px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_7_1_1_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Fallunterscheidung - if else
            </Typography>
            <div id="ckurs.7.1.1"></div>
            <Typography level="body1" sx={{ marginBottom: "10px" }}>
              Das If-Else-Konstrukt ist eine Möglichkeit, komplexe Algorithmen
              zu erstellen, die auf unterschiedliche Ergebnisse reagieren. Es
              ermöglicht uns, Bedingungen zu prüfen und je nachdem, ob sie wahr
              oder falsch sind, verschiedenen Code auszuführen. Wir verwenden
              die Schlüsselwörter "if" und "else", um diese Bedingungen zu
              setzen. Wenn die Bedingung in der "if"-Anweisung wahr ist, wird
              der darin enthaltene Code ausgeführt, andernfalls wird der Code im
              "else"-Anweisungsblock ausgeführt. So können wir den Ablauf
              unseres C++-Programms kontrollieren und verschiedene Pfade
              basierend auf den Bedingungen durchlaufen.
            </Typography>
            <CodeEditor
              title="Aufgabe: Ändere den Code so um , dass 'Deine Akkuladung ist gering! Lade dein Handy.' angezeigt wird."
              defaultValue={code_7_1_1_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_7_1_1_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_7_1_1_a",
                  code_eingabe,
                  Auswertung_id_ckurs_7_1_1_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
            <Typography
              level="h5"
              sx={{ marginTop: "20px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_7_1_2_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Fallunterscheidung - if
            </Typography>
            <div id="ckurs.7.1.2"></div>
            <Typography level="body1" sx={{ marginBottom: "10px" }}>
              Das Schlüsselwort "if" kann auch allein stehen, falls dieses ohne
              der dazugehörigen "else"-Anweisung verwendet wird. In diesem Fall
              wird der Block von C++-Code innerhalb der "if"-Anweisung nur dann
              ausgeführt, wenn die Bedingung wahr ist. Wenn die Bedingung falsch
              ist, wird der Codeblock übersprungen, und es gibt keinen
              alternativen Codepfad, der in der "else"-Anweisung ausgeführt
              wird.
            </Typography>
            <CodeEditor
              title="Aufgabe: Ändere den Code so um, dass die Bedingung erfüllt ist und 'Super, du hast diese Aufgabe geschafft!' ausgegeben wird."
              defaultValue={code_7_1_2_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_7_1_2_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_7_1_2_a",
                  code_eingabe,
                  Auswertung_id_ckurs_7_1_2_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
            <Typography
              level="h5"
              sx={{ marginTop: "20px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_7_1_3_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Fallunterscheidung - else if
            </Typography>
            <div id="ckurs.7.1.3"></div>
            <Typography sx={{ marginBottom: "10px" }}>
              Verwende "else if", um eine weitere Bedingung anzugeben. Sobald
              eine Bedingung erfüllt ist , werden die anderen Bedingungen
              nichtmehr gepürft. Wenn die erste Bedingung falsch ist, wird die
              zweite Bedingung gepüft und falls auch diese falsch ist, wird der
              "else" Zweig ausgeführt.
            </Typography>
            <CodeEditor
              title="Aufgabe: Ändere den Code so um, dass 'Du solltest bald dein Handy laden!' ausgegeben wird."
              defaultValue={code_7_1_3_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_7_1_3_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_7_1_3_a",
                  code_eingabe,
                  Auswertung_id_ckurs_7_1_3_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
            <Typography
              level="h5"
              sx={{ marginTop: "20px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_7_1_4_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Fallunterscheidung - switch case
            </Typography>
            <div id="ckurs.7.1.4"></div>
            <Typography level="body1" sx={{ marginBottom: "10px" }}>
              Verwende "switch case", wenn es viele verschiedene Werte gibt, die
              geprüft werden müssen. Es ist eine alternative Möglichkeit zur
              "if-else"-Anweisung, um mehrere Fälle gleichzeitig abzuarbeiten.
            </Typography>
            <CodeEditor
              title="Aufgabe: Gib den Namen der Programmiersprache aus, mit der wir programmieren."
              defaultValue={code_7_1_4_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_7_1_4_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_7_1_4_a",
                  code_eingabe,
                  Auswertung_id_ckurs_7_1_4_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
          </div>
          {/*Schleifen */}
          <Typography
            level="h5"
            sx={{ marginTop: "30px" }}
            endDecorator={
              <ProgressCheck done={progress_ckurs_7_2()}></ProgressCheck>
            }
          >
            <b>Schleifen</b>
          </Typography>
          <div id="ckurs.7.2"></div>
          <Typography level="body1">
            Schleifen (auch "Zyklus", "Wiederholung" oder "Loop") werden
            verwendet, um die wiederholte Ausführung von Teilen eines Programms
            zu beschreiben. Sie ist durch eine Schleifenbedingung
            gekennzeichnet, die angibt, wie oft oder unter welchen Bedingungen
            die Schleife ausgeführt wird. Falls Programme Schleifen enthalten
            definiert man sogenannte "Schleifeninvarianten". Das sind
            Bedingungen, die nach jeder Ausführung gültig sind.
          </Typography>
          <div>
            <Typography
              level="h5"
              sx={{ marginTop: "10px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_7_2_1_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Schleifen - while
            </Typography>
            <div id="ckurs.7.2.1"></div>
            <Typography level="body1" sx={{ marginBottom: "10px" }}>
              Die "while"-Schleife wird auch Schleife mit vorangestellter
              Bedingung/Kopfgesteuerter Schleife genannt. Sie läuft solange
              durch, wie die angegebene Bedingung wahr ist.
            </Typography>
            <CodeEditor
              title="Aufgabe: Gib die Zahlen 1 bis 9 aus (1 2 3 4 5 6 7 8 9)"
              defaultValue={code_7_2_1_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_7_2_1_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_7_2_1_a",
                  code_eingabe,
                  Auswertung_id_ckurs_7_2_1_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
          </div>
          <div>
            <Typography
              level="h5"
              sx={{ marginTop: "20px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_7_2_2_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Schleifen - do while
            </Typography>
            <div id="ckurs.7.2.2"></div>
            <Typography level="body1" sx={{ marginBottom: "10px" }}>
              Die "do-while"-Schleife ist eine Varainte der "while"-Schleife.
              <br></br>
              Sie wird auch Schleife mit nachgestellter Bedingung /Fußgesteuerte
              Schleife genannt.<br></br>
              Hierbei ist zu beachten, dass der Codeblock mindestens einmal
              ausgeführt wird.
            </Typography>
            <CodeEditor
              title="Aufgabe: Gib die Zahlen 1 bis 9 aus (1 2 3 4 5 6 7 8 9)"
              defaultValue={code_7_2_2_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_7_2_2_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_7_2_2_a",
                  code_eingabe,
                  Auswertung_id_ckurs_7_2_2_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
          </div>
          <div>
            <Typography
              level="h5"
              sx={{ marginTop: "20px" }}
              endDecorator={
                <ProgressCheck
                  done={progress["id_ckurs_7_2_3_a"] ? 100 : 0}
                ></ProgressCheck>
              }
            >
              Schleifen - for
            </Typography>
            <div id="ckurs.7.2.3"></div>
            <Typography level="body1" sx={{ marginBottom: "10px" }}>
              Die "for"-Schleife ist besonders nützlich, wenn man die Anzahl der
              Durchläufe kennt. Sie wird auch Zählzyklus genannt und führt einen
              Codeblock aus, solange die Schleifenbedingung wahr ist. Zu Beginn
              wird eine Initialisierung gemacht, welche die Startwerte bestimmt.
              Nach jedem Durchlauf erfolgt eine Inkrementierungt. Dadruch kann
              man die Bedingung für den nächsten Durchlauf ändern oder den
              Zähler erhöhen.
            </Typography>
            <CodeEditor
              title="Aufgabe: Gib die Zahlen 1 bis 9 aus (1 2 3 4 5 6 7 8 9)"
              defaultValue={code_7_2_3_a}
              turtle={false}
              codeEinAusgabe={(code_eingabe: string, code_ausgabe: string) => {
                Auswertung_id_ckurs_7_2_3_a(code_ausgabe);
                TaskErstellen(
                  "id_ckurs_7_2_3_a",
                  code_eingabe,
                  Auswertung_id_ckurs_7_2_3_a(code_ausgabe)
                );
              }}
            ></CodeEditor>
          </div>
        </div>
      </Navigation>
    </>
  );
}
