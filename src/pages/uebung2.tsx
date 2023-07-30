import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Field, TurtleViewer } from "@/components/TurtleViewer";
import { Navigation } from "@/components/Navigation";
import { Button, Modal, ModalClose, ModalDialog, Typography } from "@mui/joy";
import { useEffect, useState } from "react";
import { ProgressCheck } from "@/components/ProgressCheck";

//Standardwert der einzelnen CodeEditoren
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
  };`;

const code3_2 = `#include "turtle.h"
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
  };`;

const code3_3 = `#include "turtle.h"
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
  };`;

//Labyrintherstellung
const maze_einfach: Field[][] = [
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
const maze_mittel: Field[][] = [
  [Field.START,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.EMPTY,],
  [Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.WALL,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.WALL,],
  [Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EXIT,]
];

const maze_schwer: Field[][] = [
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
  const [finalOpen, setFinalOpen] = useState(false);

  //Progressbalken hier id zusammengerechnet
  const progress_gesamt = () => {
    const items = [
      "id_3_1",
      "id_3_2",
      "id_3_3",
      "id_urkunde"  
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
          id_urkunde: prog["id_urkunde"]??false
        });
        setCode1(data.task.find((item: any)=> item.id === "id_3_1")?.code ?? code3_1);
        setCode2(data.task.find((item: any)=> item.id === "id_3_2")?.code ?? code3_2);
        setCode3(data.task.find((item: any)=> item.id === "id_3_3")?.code ?? code3_3);
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
      progress={progress_gesamt()}>
        <div>
          <Typography level="h3">Algorithmus Teil 2</Typography>
          <Typography level="body1">
            Am Ende dieses Kapitels sollst du mir helfen, mit Hilfe einem von
            dir geschriebenen Algorithmus, aus dem Labyrinth zu entkommen. Ich
            freue mich schon endlich wieder meine Familie zu sehen!
          </Typography>
          <div>
          <br></br>Folgende Aussagen treffen auf den Algorithmus zu:
            <br></br>• Das Ergebnis ist hier immer eindeutig und wohldefiniert.
            <br></br>• Der Algorithmus macht bei gleicher Eingabe in jedem
            Schritt exakt das gleiche (er ist deterministisch).
            <br></br>• Der Algorithmus besitzt sich wiederholende
            Anweisungen(einen Zyklus).
          </div>
          <Typography level="h5"
            endDecorator={
              <ProgressCheck
                done={progress["id_3_1"] ? 100 : 0}
              ></ProgressCheck>
            }
          >Einfaches Labyrinth
          </Typography>
          <div id="algo.2.1"></div>
          <CodeEditor
            title="Algorithmus 2.1 (einfach)"
            defaultValue={code1}
            turtle={true}
            labyrinth={maze_einfach}
            codeEinAusgabe={(code_eingabe: string, code_ausgabe: string , imZiel?: boolean)=>{
              setProgress({ ...progress, id_3_1: imZiel??false });
              TaskErstellen("id_3_1", code_eingabe, imZiel??false)}}
          ></CodeEditor>
        </div>
        <div>
          <Typography level="h5"
          endDecorator={
            <ProgressCheck
              done={progress["id_3_2"] ? 100 : 0}
            ></ProgressCheck>}>Mittleres Labyrinth</Typography>
          <div id="algo.2.2"></div>
          <CodeEditor
            title="Algorithmus 2.2 (mittel)"
            defaultValue={code2}
            turtle={true}
            labyrinth={maze_mittel}
            codeEinAusgabe={(code_eingabe: string, code_ausgabe: string , imZiel?: boolean)=>{
              setProgress({ ...progress, id_3_2: imZiel??false });
              TaskErstellen("id_3_2", code_eingabe, imZiel??false)}}
          ></CodeEditor>
        </div>
        <div>
          <Typography level="h5"
          endDecorator={
            <ProgressCheck
              done={progress["id_3_3"] ? 100 : 0}
            ></ProgressCheck>
          }
          >Schweres Labyrinth</Typography>
          <div id="algo.2.3"></div>
          <CodeEditor
            title=" Algorithmus 2.3 (schwer)"
            defaultValue={code3}
            turtle={true}
            labyrinth={maze_schwer}
            codeEinAusgabe={(code_eingabe: string, code_ausgabe: string , imZiel?: boolean)=>{
              setProgress({ ...progress, id_3_3: imZiel??false });
              TaskErstellen("id_3_3", code_eingabe, imZiel??false)}}
          ></CodeEditor>
        </div>
        <div style={{marginTop:"20px",justifyContent:"center", display:"flex"}}>

        <Button color="success" 
        disabled={
          !(progress["id_3_1"] && progress["id_3_2"] && progress["id_3_3"])
        }
        onClick={()=> {
          setProgress({ ...progress, id_urkunde: true });
          TaskErstellen("id_urkunde", "", true);
          setFinalOpen(true);
          }
        }>
          Kurs abschließen
        </Button>
        <Modal
        open={finalOpen}
        onClose={()=>{
          setFinalOpen(false);
        }}>
            <ModalDialog
              color="success"
              variant="plain">
              <ModalClose />
              <Typography level="h5">Glückwunsch!!!</Typography>
              <div style={{display: "flex" ,flexDirection:"row", alignItems:"center"}}>
                <Typography>Super, dank dir habe ich es aus dem Labyrinth zurück zu meiner Familie geschafft!Ich bin sehr stolz auf dich, dass du diesen Kurs absoliviert hast und bedanke mich nochmal herzlich bei dir für deine Hilfe! Ich hoffe ich konnte dir auch weiterhelfen und dir einiges Wissenswertes auf deinen Weg geben! Ich werde meiner Familie alles über unser Abenteuer erzählen. Bis hoffentlich bald mein Freund! -Pebble
                </Typography><img src={"/kroete.svg"} alt="PebbleImage" height={150} />
              </div>
              <a href='/urkunde.pdf' download><Button color="success">Urkunde</Button></a>
            </ModalDialog>
        </Modal>
        </div>  
      </Navigation>
    </div>
  );
}