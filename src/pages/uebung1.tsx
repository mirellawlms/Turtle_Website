import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Navigation } from "@/components/Navigation";
import { Button, Typography } from "@mui/joy";
import { TurtleViewer_Steuerung } from "@/components/TurtleViewer_Steuerung";
import { maze_mitel_1, maze_mitel_2, maze_mitel_3 } from "@/Labyrinthe/mittel";
import { useState } from "react";

const labyritnh = [maze_mitel_1, maze_mitel_2, maze_mitel_3];

export default function Home() {
  /*runde ab (zahl zwischen 0 und 1 * 3) => eine Zahl davon*/
  const [field, setField] = useState(labyritnh[Math.floor(Math.random()*labyritnh.length)])
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      <Navigation showback={true} currentNavigation="/uebung1" titel="Übung1 ">
        <div>
        <Typography level="h3">Algorithmen leicht gemacht</Typography>
        <Typography>In diesem Kapitel veruschen wir Algorithmen zu verstehen indem wir sie aufbrechen und von ganz vorne beginnen.</Typography>
        <Typography level="h5">Algorithmus auf Papier </Typography>
        <div id="1.1"></div>
          <Typography level="body1">
            Bewege die Turtle mit den Pfeiltasten
          </Typography>
          
          <TurtleViewer_Steuerung field={field} width={500} height={500} labyrinthChange={()=>setField(labyritnh[Math.floor(Math.random()*labyritnh.length)])}></TurtleViewer_Steuerung>
        </div>
      </Navigation>
    </>
  );
}
