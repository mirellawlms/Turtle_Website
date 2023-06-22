import Head from "next/head";
import { Inter } from "next/font/google";
import { CodeEditor } from "@/components/CodeEditor";
import { Field, TurtleViewer } from "@/components/TurtleViewer";
import { Navigation } from "@/components/Navigation";
import { Typography } from "@mui/joy";

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
    pebble.moveForward();
    pebble.moveForward();
    pebble.moveForward();
}`;

//übergabe erfolgt hier
const maze: Field[][] = [
  [Field.START,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.EMPTY,],
  [Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.EMPTY,],
  [Field.EMPTY,Field.WALL,Field.WALL,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,],
  [Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.WALL,Field.WALL,Field.EMPTY,Field.WALL,],
  [Field.EMPTY,Field.WALL,Field.EMPTY,Field.WALL,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EMPTY,Field.EXIT,]
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
        <Typography level="h3">Kapitel1 - Einführung in C++</Typography>
          <Typography level="body1">
            Hallo, schreibe dein erstes c++ programm. Schreibe in die Klammer "HELLO WORLD " und schaue was passiert.
          </Typography>
        <CodeEditor title="Übung 1.1" defaultValue={code1_1} turtle = {false}></CodeEditor>
        </div>
        <div>
        <Typography level="body1">
          CTURTLE TEST
        </Typography>
        <CodeEditor title="Übung 1.2" defaultValue={code1_2} turtle = {true} labyrinth={maze}></CodeEditor>
        </div>

      </Navigation>
    </>
  );
}
