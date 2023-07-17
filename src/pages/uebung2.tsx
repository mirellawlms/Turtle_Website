import Head from "next/head";
import { Inter } from "next/font/google";
import { CodeEditor } from "@/components/CodeEditor";
import { Field, TurtleViewer } from "@/components/TurtleViewer";
import { Navigation } from "@/components/Navigation";
import { Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { ProgressCheck } from "@/components/ProgressCheck";

//Schriftart hier Inter
const inter = Inter({ subsets: ["latin"] });

//Standardwert, der hier steht
const code3_1 = `#include "turtle.h"
#include <stdio.h>
#include <iostream>

  int main(){
      Kroete pebble;
      int i;
      int p;

    for(i=0; i<9; i++){
        pebble.moveForward();
    }
    pebble.turnLeft();

    for(p=0; p<9; p++){
        pebble.moveForward();
    }
  }};`;

const code3_2 = `#include "turtle.h"

int main(){
    Kroete pebble;
    /*Alogrithmus, den Studis bsp schreiben*/
    pebble.moveForward();
    pebble.moveForward();
    pebble.moveForward();
}`;

const code3_3 = `#include "turtle.h"

int main(){
    Kroete pebble;
    /*Alogrithmus, den Studis bsp schreiben*/
    pebble.moveForward();
    pebble.moveForward();
    pebble.moveForward();
}`;

//übergabe erfolgt hier
const maze_1: Field[][] = [
  [Field.START,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.EMPTY,],
  [Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.WALL,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.WALL,],
  [Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EXIT,]
];

export default function Home() {
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  const [code1, setCode1] = useState(code3_1);
  const [code2, setCode2] = useState(code3_2);
  const [code3, setCode3] = useState(code3_3);
  const progress_gesamt = () => {
    const items = [
      "id_3_1",
      "id_3_2",
      "id_3_3",  
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
  const TaskErstellen = async (id: string, code_eingabe: string , complete: boolean) => {
    fetch("/api/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        code: code_eingabe,
        complete: complete
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
        const prog = data.task.reduce((acc: any , item: any) => {
          return{
            ...acc,[item.id]:item.complete
          };
        },{})
        console.log(data.task,prog);
        setProgress({
          id_3_1: prog["id_3_1"]??false,
          id_3_2: prog["id_3_2"]??false,
          id_3_3: prog["id_3_3"]??false,
        });
        setCode1(data.task.find((item: any)=> item.id === "id_3_1")?.code ?? code3_1);
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
      <Navigation currentNavigation="/uebung2" titel="Algorithmus Teil 2 ">
        <div>
          <Typography level="h3">Algorithmus Teil 2</Typography>
          <Typography level="body1">
            Am Ende dieses Kapitels sollst du mir helfen, mit Hilfe einem von
            dir geschriebenen Algorithmus, aus dem Labyrinth zu entkommen. Ich
            freue mich schon endlich wieder meine Familie zu sehen!
          </Typography>
          <Typography level="h5"
            endDecorator={
              <ProgressCheck
                done={progress["id_3_1"] ? 100 : 0}
              ></ProgressCheck>
            }
          >Einfaches Labyrinth
          </Typography>
          <div id="2.1"></div>
          <CodeEditor
            title="Übung 2.1"
            defaultValue={code1}
            turtle={true}
            labyrinth={maze_1}
            codeEinAusgabe={(code_eingabe: string, code_ausgabe: string , imZiel?: boolean)=>{
              setProgress({ ...progress, id_3_1: imZiel??false });
              TaskErstellen("id_3_1", code_eingabe, imZiel??false)}}
          ></CodeEditor>
        </div>
        <div>
          <Typography level="h5">Mittleres Labyrinth</Typography>
          <div id="2.2"></div>
          <CodeEditor
            title="Übung 3.2"
            defaultValue={code2}
            turtle={true}
            labyrinth={maze_1}

          ></CodeEditor>
        </div>
        <div>
          <Typography level="h5">Schweres Labyrinth</Typography>
          <div id="2.3"></div>
          <CodeEditor
            title="Übung 3.3"
            defaultValue={code3}
            turtle={true}
            labyrinth={maze_1}
          ></CodeEditor>
        </div>
      </Navigation>
    </>
  );
}