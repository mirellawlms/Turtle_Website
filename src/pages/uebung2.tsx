import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Field, TurtleViewer } from "@/components/TurtleViewer";
import { Navigation } from "@/components/Navigation";
import { Textarea, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { ProgressCheck } from "@/components/ProgressCheck";
import styles from "../styles/Uebung2.module.css";
import router from "next/router";

//Standardwert der einzelnen CodeEditoren

const code_1 = `#include <iostream>
#include <string>

class Zweirad {         // Hier wird die Klasse "Zweirad" definiert
  public:               // Zugriffsmodifikator (public)
    int baujahr;        // Attribut (int variable)
    std::string farbe;  // Attribute (std::string variable)

    //Methoden Definition
    void hupen() {   // Methode hupen
      std::cout << "Tutuut!";
    }
};

int main() {          // Hauptfunktion
  Zweirad motorrad;  // Erstelle das objekt motorrad der Klasse Zweirad

  //Attribute Zuweisung
  motorrad.baujahr = 2014;
  motorrad.farbe = "weiß";

  // Gibt die Attribute des Objekts motorrad aus
  std::cout << "Baujahr: " << motorrad.baujahr << "\\n";
  std::cout << "Farbe: " <<  motorrad.farbe << "\\n";

  // Rufe die Methode hupen() auf
  motorrad.hupen();

  return 0;
}`;

const code_2 = `#include "turtle.h"
#include <stdio.h>
#include <iostream>

  int main(){
      Kroete pebble; //Element pebble kann nun aufgerufen werden
      for(int i = 0; i < 4 ; i++){
        pebble.moveForward(); //Methode moveForward() wird auf pebble aufgerufen
      }
  };
  `;
const code_3 = `#include "turtle.h"
#include <stdio.h>
#include <iostream>

  int main(){
      Kroete pebble; //Element pebble kann nun aufgerufen werden
      while(!pebble.imZiel()){ //solange Pebble noch nicht im Ziel ist
        pebble.moveForward(); //Methode moveForward() wird auf pebble aufgerufen
      }
  };
  `;

const code_4 = `#include "turtle.h"
#include <stdio.h>
#include <iostream>

  int main(){
      Kroete pebble; //Element pebble kann nun aufgerufen werden
      
      while(!pebble.imZiel()){
        if(!pebble.isWallInFront()){
          pebble.moveForward();
        }else{
          pebble.turnLeft();
        }
      }
  };
  `;

const code_5 = `#include "turtle.h"
#include <stdio.h>
#include <iostream>

  int main(){
      Kroete pebble; //Element pebble kann nun aufgerufen werden
      
  };
  `;

//Labyrintherstellung
const maze_one: Field[][] = [
  [Field.START, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EXIT, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
];

const maze_two: Field[][] = [
  [Field.START, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EMPTY, Field.EXIT],
];

const maze_three: Field[][] = [
  [Field.START, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.EXIT, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
  [Field.EMPTY, Field.WALL, Field.WALL, Field.WALL, Field.WALL],
];

export default function Home() {
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});

  //Progressbalken hier id zusammengerechnet
  const progress_gesamt = () => {
    const items = [
      "id_anwendung_2_6_a",
      "id_anwendung_2_6_b",
      "id_anwendung_2_6_c",
      "id_anwendung_2_6_d",
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Anwendungsfall zusammen
  const progress_anwendungsfall = () => {
    const items = [
      "id_anwendung_2_6_a",
      "id_anwendung_2_6_b",
      "id_anwendung_2_6_c",
      "id_anwendung_2_6_d",
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

  // Antworten werden geladen: ,[] === einmal am anfang aufgerufen
  useEffect(() => {
    fetch("/api/task", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        //redirect wenn status 401
        console.log(response.status);
        if (response.status === 401) {
          router.push("/signin");
        }
        return response.json();
      })
      .then((data) => {
        const prog = data.task.reduce((acc: any, item: any) => {
          return {
            ...acc,
            [item.id]: item.complete,
          };
        }, {});
        console.log(data.task, prog);
        setProgress({
          id_anwendung_2_6_a: prog["id_anwendung_2_6_a"] ?? false,
          id_anwendung_2_6_b: prog["id_anwendung_2_6_b"] ?? false,
          id_anwendung_2_6_c: prog["id_anwendung_2_6_c"] ?? false,
          id_anwendung_2_6_d: prog["id_anwendung_2_6_d"] ?? false,
        });
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
        titel="Algorithmus Teil 2 "
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
              Klassen und Objekte
            </Typography>
            <div id="algo.2.2"></div>
            <Typography level="body1">
              Klassen sind grundlegende Konzepte der objektorientierten
              Programmierung (OOP). <br></br>Eine Klasse definiert einen Bauplan
              für die Erstellung von <b>Objekten</b>. <br></br>Aus einer Klasse
              werden Objekte instanziiert, die <b>Attribute</b> oder
              <b> Methoden</b> besitzen können. <br></br>Als kurzes
              Einstiegsbeispiel:
              <br></br>
              Eine Motorrad ist ein Objekt der Klasse Zweirad. Das Motorrad hat
              Attribute, wie 'Baujahr' und 'Farbe' und Methoden, wie 'hupen' und
              'fahren'.
            </Typography>
          </div>

          {/*Attribute*/}
          <div>
            <Typography level="h5" sx={{ marginTop: "10px" }}>
              Attribute
            </Typography>
            <div id="algo.2.3"></div>
            <Typography level="body1">
              Eigenschaften und Zustände können in einem Attribut festgehalten
              werden.
            </Typography>
          </div>

          {/*Methoden*/}
          <div>
            <Typography level="h5" sx={{ marginTop: "10px" }}>
              Methoden (Funktionen)
            </Typography>
            <div id="algo.2.4"></div>
            <Typography level="body1">
              Klassen können Methoden enthalten, die bestimmte Aktionen
              ausführen.<br></br>
              Methoden werden nur ausgeführt, wenn sie aufgerufen werden.
            </Typography>
          </div>

          {/*Erklärung*/}
          <div>
            <Typography level="h5" sx={{ marginTop: "20px" }}>
              Erklärung am Beispiel
            </Typography>
            <div id="algo.2.5"></div>
            <Typography level="body1" sx={{ marginBottom: "10px" }}>
              Wir betrachten nun das oben gelehrte anhand des
              Einführungsbeispiels.
            </Typography>
            <CodeEditor
              height="600px"
              title="Anwendungsbeispiel"
              defaultValue={code_1}
              turtle={false}
            ></CodeEditor>
          </div>

          {/*Pebbles Labyrinth - Anwendungsfall*/}
          <div>
            <Typography
              level="h4"
              sx={{ marginTop: "30px" }}
              endDecorator={
                <ProgressCheck done={progress_anwendungsfall()}></ProgressCheck>
              }
            >
              Pebbles Labyrinth - Anwendungsfall
            </Typography>
            <div id="algo.2.6"></div>
            <Typography level="body1">
              Damit ihr im nächsten Kapitel euren Pseudocode in ein C++ Code
              umwandeln könnt, betrachten wir das zu lösende Problem nochmal
              genauer.<br></br>
              Das Ziel war es einen Pseudocode zu schreiben der mich durch ein
              Labyrinth führt. <br></br>
              Ihr müsst euch nicht um die Erstellung der Klasse Schildkröte
              kümmern, das wurde bereits gemacht. Die Klasse Schildkröte hat ein
              Objekt Pebble auf welches ihr Methoden- und Attributsaufrufe
              anwenden könnt.
            </Typography>
            <Typography level="body1">
              Ihr müsst einen C++ Code schreiben und dafür euren Pseudocode
              umwandeln. Diese Umwandlung könnt ihr mit Hilfe der folgenden
              Methoden und Attribute machen.
            </Typography>
            <Typography level="h5" sx={{ marginTop: "20px" }}>
              Methoden, für ein Objekt 'pebble' der Klasse Schildköte
            </Typography>
            <Typography level="body1" sx={{ marginTop: "5px" }}>
              <b>• moveRight();</b>
              <br></br>
              Pebble bewegt sich nach rechts<br></br>
              <b>• moveLeft();</b>
              <br></br>
              Pebble bewegt sich nach links<br></br>
              <b>• moveForward();</b>
              <br></br>
              Pebble bewegt sich nach vorne<br></br>
            </Typography>
            <Typography level="h5" sx={{ marginTop: "20px" }}>
              Attribute, für ein Objekt 'pebble' der Klasse Schildkröte
            </Typography>
            <Typography level="body1" sx={{ marginTop: "5px" }}>
              <b>• isWallInFront();</b>
              <br></br>
              Pebble prüft ob eine Wand vor ihm ist<br></br>
              <b>• isWallRight();</b>
              <br></br>
              Pebble prüft ob eine Wand rechts von ihm ist<br></br>
              <b>• isWallLeft();</b>
              <br></br>
              Pebble prüft ob eine Wand links von ihm ist<br></br>
              <b>• imZiel();</b>
              <br></br>
              Pebble prüft ob er bereits im Ziel ist<br></br>
            </Typography>
            {/*Anweundungsfall Pebble Beispiele*/}
            <div>
              {/*Anweundungsfall Pebble 1*/}
              <div>
                <Typography
                  level="h5"
                  sx={{ marginTop: "20px" }}
                  endDecorator={
                    <ProgressCheck
                      done={progress["id_anwendung_2_6_a"] ? 100 : 0}
                    ></ProgressCheck>
                  }
                >
                  Anwendungsfall 1
                </Typography>
                <div id="algo.2.6.1"></div>
                <Typography level="body1" sx={{ marginBottom: "10px" }}>
                  Wir schauen uns nun Schritt für Schritt an, wie du Pebble, mit
                  Hilfe von Attributen und Methoden, aus dem Labyrinth führen
                  kannst.<br></br>Führe den Code-Editor aus und schaue was
                  passiert.
                </Typography>
                <CodeEditor
                  title="Aufgabe: Erreiche das Ziel (grünes Feld)"
                  defaultValue={code_2}
                  turtle={true}
                  labyrinth={maze_one}
                  codeEinAusgabe={(
                    code_eingabe: string,
                    code_ausgabe: string,
                    imZiel?: boolean
                  ) => {
                    setProgress({
                      ...progress,
                      id_anwendung_2_6_a: imZiel ?? false,
                    });
                    TaskErstellen(
                      "id_anwendung_2_6_a",
                      code_eingabe,
                      imZiel ?? false
                    );
                  }}
                ></CodeEditor>
              </div>
              {/*Anweundungsfall Pebble 2*/}
              <div>
                <Typography
                  level="h5"
                  sx={{ marginTop: "20px" }}
                  endDecorator={
                    <ProgressCheck
                      done={progress["id_anwendung_2_6_b"] ? 100 : 0}
                    ></ProgressCheck>
                  }
                >
                  Anwendungsfall 2
                </Typography>
                <div id="algo.2.6.2"></div>
                <Typography level="body1" sx={{ marginBottom: "10px" }}>
                  In diesem Anwendungsbeispiel wird Pebble SOLANGE er noch nicht
                  im Ziel ist, immer eins nach vorne bewegt.
                </Typography>
                <CodeEditor
                  title="Aufgabe: Erreiche das Ziel (grünes Feld)"
                  defaultValue={code_3}
                  turtle={true}
                  labyrinth={maze_one}
                  codeEinAusgabe={(
                    code_eingabe: string,
                    code_ausgabe: string,
                    imZiel?: boolean
                  ) => {
                    setProgress({
                      ...progress,
                      id_anwendung_2_6_b: imZiel ?? false,
                    });
                    TaskErstellen(
                      "id_anwendung_2_6_b",
                      code_eingabe,
                      imZiel ?? false
                    );
                  }}
                ></CodeEditor>
              </div>
              {/*Anweundungsfall Pebble 3*/}
              <div>
                <Typography
                  level="h5"
                  sx={{ marginTop: "20px" }}
                  endDecorator={
                    <ProgressCheck
                      done={progress["id_anwendung_2_6_c"] ? 100 : 0}
                    ></ProgressCheck>
                  }
                >
                  Anwendungsfall 3
                </Typography>
                <div id="algo.2.6.3"></div>
                <Typography level="body1" sx={{ marginBottom: "10px" }}>
                  In diesem komplexeren Beispiel, wird geschaut, ob vor Pebble
                  eine Wand ist. Wenn nicht kann er nach vorne gehen. FALLS eine
                  Wand vor ihm ist dreht er sich einmal nach links. Das
                  geschieht solange bis das ZIEL erreicht wurde.
                </Typography>
                <CodeEditor
                  title="Aufgabe: Erreiche das Ziel (grünes Feld)"
                  defaultValue={code_4}
                  turtle={true}
                  labyrinth={maze_two}
                  codeEinAusgabe={(
                    code_eingabe: string,
                    code_ausgabe: string,
                    imZiel?: boolean
                  ) => {
                    setProgress({
                      ...progress,
                      id_anwendung_2_6_c: imZiel ?? false,
                    });
                    TaskErstellen(
                      "id_anwendung_2_6_c",
                      code_eingabe,
                      imZiel ?? false
                    );
                  }}
                ></CodeEditor>
              </div>
              {/*Anweundungsfall Pebble 4*/}
              <div>
                <Typography
                  level="h5"
                  sx={{ marginTop: "20px" }}
                  endDecorator={
                    <ProgressCheck
                      done={progress["id_anwendung_2_6_d"] ? 100 : 0}
                    ></ProgressCheck>
                  }
                >
                  Anwendungsfall 4
                </Typography>
                <div id="algo.2.6.4"></div>
                <Typography level="body1" sx={{ marginBottom: "10px" }}>
                  Versuche nun durch scharfes Überlegen das Ziel zu erreichen.
                  Schau dir nochmal alle Methoden und Attribute an. Es soll sich
                  hierbei natürlich um einen Algorithmus handeln.
                </Typography>
                <CodeEditor
                  title="Aufgabe: Erreiche das Ziel (grünes Feld)"
                  defaultValue={code_5}
                  turtle={true}
                  labyrinth={maze_three}
                  codeEinAusgabe={(
                    code_eingabe: string,
                    code_ausgabe: string,
                    imZiel?: boolean
                  ) => {
                    setProgress({
                      ...progress,
                      id_anwendung_2_6_d: imZiel ?? false,
                    });
                    TaskErstellen(
                      "id_anwendung_2_6_d",
                      code_eingabe,
                      imZiel ?? false
                    );
                  }}
                ></CodeEditor>
              </div>
            </div>
          </div>
        </div>
      </Navigation>
    </div>
  );
}
