import Head from "next/head";
import { Inter } from "next/font/google";
import { CodeEditor } from "@/components/CodeEditor";
import { Field, TurtleViewer } from "@/components/TurtleViewer";
import { Navigation } from "@/components/Navigation";
import { Typography } from "@mui/joy";
import { TurtleViewer_Steuerung } from "@/components/TurtleViewer_Steuerung";

//Schriftart hier Inter
const inter = Inter({ subsets: ["latin"] });

//Standardwert, der hier steht
const code1_1 = `#include <iostream>

int main() {
  std::cout<< "Hallo Welt!";

};`;

const code1_2 = `#include "turtle.h"

int main(){
    Kroete pebble;

    /*Alogrithmus, den Studis bsp schreiben*/
    pebble.moveDown();
    pebble.moveDown();
    pebble.moveDown();
    pebble.moveRight();
    pebble.moveRight();
    pebble.moveDown();
}`;

//übergabe erfolgt hier
const maze: Field[][] = [
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
    Field.WALL,
    Field.EMPTY,
    Field.WALL,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EMPTY,
    Field.EXIT,
  ]
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      <Navigation showback={true}>
        <div>
        <Typography level="h3">Kapitel2 - Sei Pebble</Typography>
          <Typography level="body1">
            Bewege die Turtle mit den pfeiltasten
          </Typography>
          <TurtleViewer_Steuerung field={maze} width={400} height={400}></TurtleViewer_Steuerung>
        </div>
      </Navigation>
    </>
  );
}
