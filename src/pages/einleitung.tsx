import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Navigation } from "@/components/Navigation";
import { Typography } from "@mui/joy";
import styles from "../styles/Einleitung.module.css";
import { Accordion } from "@/components/Accordion";
import { ProgressCheck } from "@/components/ProgressCheck";
import { useState } from "react";

//Standardwert, der hier steht
const einleitung_1 = `#include <iostream>
int main() {
  std::cout<< "Hello world!";
};`;

const einleitung_2 = `#include <iostream>
int main() {
  std::cout<< "Hallo Welt!";
}`;

export default function Home() {
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});
  
  const Auswertung_einleitung_1_1 = (code: string)=> {
      if(code === "Hello world!"){
        setProgress({ ...progress, id_einleitung_1_1: true })
      }
  }

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
      "id_einleitung_1_1"
    ];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  return (<>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      <Navigation currentNavigation="/einleitung" titel="C++ Kurs " progress={progress_gesamt()}>
        <Typography level="h3">C++ Kurs</Typography>
        <div className={styles.bildeinruecken}>
          <div>
            In diesem Kurs erhälst du Einblicke in die Programmiersprache C++.
            Es ist nicht erfoderlich, dass du bereits Programmiererfahrungen
            hast. Dieser Kurs ist für alle gedacht und wurde aus dem
            Vorlesungsskript des Moduls GdP erstellt. Schließe diesen C++ Kurs
            ab, um dein Wissen unter Beweis zu stellen.
          </div>
          <img
            src={"/undraw_programming2.svg"}
            alt="Programming2Image"
            height={100}
          />
        </div>
        <div>
          <Typography
            level="h4"
            endDecorator={<ProgressCheck done={progress1_1()}></ProgressCheck>}>
            Wissenswertes zu Beginn
          </Typography>
          <div id="c.1.1"></div>
          <Accordion
            titel="Was ist ein Algorithmus?"
            inhalt="Ein Algorithmus ist ein Verhaltensmuster, 
          das eine Menge auszuführender Aktionen (Handlungen) 
          und deren zeitliche Abfolge festlegt."
            wasClicked={() => setProgress({ ...progress, id_1_1_a: true })}
          ></Accordion>
          <Accordion
            titel="Was ist ein Programm?"
            inhalt="'Ein Programm ist ein strengformalisierter, eindeutiger und detaillierter Algorithmus, der maschinell ausgeführt werden kann' - Prof. B. Jung, Grundlagen der Informatik, Skript WS2007/08"
            wasClicked={() => setProgress({ ...progress, id_1_1_b: true })}
          ></Accordion>
          <Accordion
            titel="Was ist eine Programmiersprache?"
            inhalt="Eine Programmiersprache ist eine formalisierte Sprache zum (auf-/be-)schreiben von Algorithmen, die ausgeführt werden sollen.
          Die im Rahmen dieses Kurs erlernte Programmiersprache heißt C++."
            wasClicked={() => setProgress({ ...progress, id_1_1_c: true })}
          ></Accordion>
          <Accordion
            titel="Die Syntax..."
            inhalt="...regelt,welche Symbole aus Zeichen in deinem Programm zusammengesetzt werden können."
            wasClicked={() => setProgress({ ...progress, id_1_1_d: true })}
          ></Accordion>
          <Accordion
            titel="Die Grammatik..."
            inhalt="...regelt welche Kombinationen von Symbolen Sinn ergeben."
            wasClicked={() => setProgress({ ...progress, id_1_1_e: true })}
          ></Accordion>
          <Accordion
            titel="Die Semantik..."
            inhalt="...regelt die Bedeutung der Abfolgen von Symbolen."
            wasClicked={() => setProgress({ ...progress, id_1_1_f: true })}
          ></Accordion>
        </div>
        <div>
          <Typography
            level="h4"
            endDecorator={
              <ProgressCheck done={progress["id_einleitung_1_1"] ? 100 : 0}></ProgressCheck>}>
                Mein erstes C++ Programm
          </Typography>
          <div id="c.1.2"></div>
          <Typography>
            Nachdem du nun viele neue Begriffe gelernt hast, ist es nun an der
            Zeit gekommen, dass du dein erstes C++ Programm schreibst. Führe
            dafür den Code aus, indem du auf den rechten Rand auf den Play
            Button drückst. Tausche den Text gerne aus um etwas anderes
            anzuzeigen!
          </Typography>
          <CodeEditor
            title="Aufgabe 1"
            defaultValue={einleitung_1}
            turtle={false}
            codeAusgabe={Auswertung_einleitung_1_1}
            ></CodeEditor>
        </div>
        <div>
          <Typography level="h4"
           endDecorator={
            <ProgressCheck done={progress["id_1_3"] ? 100 : 0}></ProgressCheck>}>
            Addition zweier nichtnegativer Zahlen
          </Typography>
          <div id="c.1.3"></div>
          <Typography>In dieser Aufgabe wollen wir nun zwei nichtnegative Zahlen zusammenaddieren</Typography>
          <CodeEditor
            title="Aufgabe 2"
            defaultValue={einleitung_2}
            turtle={false}
          ></CodeEditor>
        </div>
      </Navigation>
    </>
  );
}
