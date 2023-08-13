import Head from "next/head";
import { CodeEditor } from "@/components/CodeEditor";
import { Navigation } from "@/components/Navigation";
import { Button, Textarea, Typography } from "@mui/joy";
import { TurtleViewer_Steuerung } from "@/components/TurtleViewer_Steuerung";
import {
  maze_mitel_1,
  maze_mitel_2,
  maze_mitel_3,
  maze_mitel_4,
} from "@/Labyrinthe/mittel";
import { useEffect, useState } from "react";
import styles from "../styles/Uebung1.module.css";
import { ProgressCheck } from "@/components/ProgressCheck";
import { Accordion } from "@/components/Accordion";

const labyrinth = [maze_mitel_1, maze_mitel_2, maze_mitel_3, maze_mitel_4];

export default function Home() {
  const [pseudocodeValue, setPseudocodeValue] = useState("");
  const [progress, setProgress] = useState<{ [key: string]: boolean }>({});

  /*runde ab (zahl zwischen 0 und 1 * 3) => eine Zahl davon*/
  const [field, setField] = useState(
    labyrinth[Math.floor(Math.random() * labyrinth.length)]
  );

  //Progressbalken hier id zusammengerechnet
  const progress_gesamt = () => {
    const items = ["id_algo_1_1", "id_algo_1_2"];
    let totalProgress = 0;
    for (let index = 0; index < items.length; index++) {
      if (progress[items[index]] === true) {
        totalProgress += 100 / items.length;
      }
    }
    return totalProgress;
  };

  //Task mit ID wird erstellt und in DB abgespeichert
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

  //lade Wert wieder zurück, wenn reload
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
          id_algo_1_1: prog["id_algo_1_1"] ?? false,
          id_algo_1_2: prog["id_algo_1_2"] ?? false,
        });
        setPseudocodeValue(
          data.task.find((item: any) => item.id === "id_algo_1_2")?.code ??
            pseudocodeValue
        );
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  //submittet und teilt peer partner zu
  const Submitten = async () => {
    fetch("/api/peerReview/submit", {
      method: "POST",
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Created by Mirella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/kroete.webp" />
      </Head>
      <Navigation
        visible={true}
        currentNavigation="/uebung1"
        titel="Algorithmus Teil 1 "
        progress={progress_gesamt()}
      >
        <div>
          <Typography level="h3">Algorithmus Teil 1</Typography>
          <Typography level="body1">
            In diesem Kapitel beschäftigen wir uns mit den ersten Schritten zum
            erfolgreichen schreiben eines Algorithmus...
          </Typography>
          {/*Definitionen */}
          <Typography level="h4" sx={{ marginTop: "30px" }}>
            Definitionen zu Beginn
          </Typography>
          <div id="algo.1.1"></div>
          <Accordion
            titel="Determiniertheit"
            inhalt="Ein Algorithmus ist determiniert,
             wenn dieser bei jeder Ausführung mit gleichen 
             Startbedingungen und Eingaben gleiche Ergebnisse liefert."
          ></Accordion>
          <Accordion
            titel="Deterministisch"
            inhalt="Ein Algorithmus ist deterministisch, 
            wenn zu jedem Zeitpunkt der Algorithmusausführung 
            der nächste Handlungsschritt eindeutig definiert ist."
          ></Accordion>
          <Accordion
            titel="Statische Finitheit"
            inhalt="Ein Algorithmus ist statisch finit, 
            wenn seine Beschreibung eine endliche Länge besitzt."
          ></Accordion>
          <Accordion
            titel="Dynamische Finitheit"
            inhalt="Ein Algorithmus ist dynamisch finit, 
            dann darf er zu jedem Zeitpunkt seiner Ausführung 
            nur begrenzt viel Speicherplatz benötigen."
          ></Accordion>
          <Accordion
            titel="Terminiertheit"
            inhalt="Ein Algorithmus terminiert überall oder
             ist terminierend, wenn er für jede mögliche Eingabe
              nach endlich vielen Schritten anhält (oder kontrolliert abbricht). "
          ></Accordion>
          {/*Begin*/}
          <Typography level="h4" sx={{ marginTop: "30px" }}>
            Kann jeder Programmieren?
          </Typography>
          <div id="algo.1.2"></div>
          <div className={styles.bildeinruecken}>
            <Typography level="body1">
              Diese Frage habe ich mir oft gestellt. Wer eine gute Tasse Kaffee
              (oder Kakao) machen kann, kann auch programmieren, ist mein Fazit.
              Viele würden die Ernsthaftigkeit der Aussage in Frage stellen und
              schmunzeln. Aber abwegig ist diese trozdem nicht. Um eine schöne
              heiße Tasse Kaffee zu bekommen (French Press), muss eine bestimmte
              Abfolge von Schritten eingehalten werden.
            </Typography>
            <img src={"/undraw_coffee.svg"} alt="coffeeImage" height={130} />
          </div>
          <div className={styles.Container}>
            <Typography level="body1">
              1. Wir benötigen ein Wasserkocher, um Wasser richtig zu erhitzen
              <br></br>2. Die gemahlene Kaffeemenge muss für eine Tasse
              abgestimmt sein
              <br></br>3. Die Brühzeit sollte nur wenige Minuten lang sein
              <br></br>4. Gebrühten Kaffee in eine Tasse gießen
              <br></br>5. Mit Zucker oder Milch bei Bedarf abschmecken Perfekt!
              <br></br>Das war es!
            </Typography>
          </div>
          <Typography level="body1" sx={{ marginTop: "20px" }}>
            Und so ist es auch beim Schreiben eines Programms, ich muss klare,
            logische Abläufe einhalten und mich orientieren. Ein Programm
            besteht aus einzelnen Anweisungen - sprich Befehlen, die von oben
            nach unten abgearbeitet werden. Viele Fragen sich, ich weiß gar
            nicht, womit ich beim Schreiben eines Programmes beginnenn soll? Um
            zuallerst eine Strukur und Logik in seinen wirren Gedanken zu
            bekommen, helfen Entwurfstechniken wie Programmablaufplan,
            Struktogramm und die quick and dirty Methode - Pseudocode. Bei der
            Verwendung dieser Entwurfstechnicken sollte man sich immer
            überlegen, welcher Schritt zuerst kommt und welcher danach. Kurz
            gesagt, wer die Dinge logisch in der richtigen Abfolge beschreiben
            kann, der kann ein Programm schreiben! Der oder die darf sich
            Programmierer/in nennen! Ich meine hier nicht codieren. Codieren ist
            lediglich die Umsetzung der Beschreibung in einer
            Programmmiersprache wie C++, bei der eine Entwicklungsumgebung zum
            Eingeben und Testen des Codes benötigt wird. Das schauen wir uns in
            der nächsten Lektion auch noch an, aber alles zu seiner Zeit!
          </Typography>
          <Typography level="h4" sx={{ marginTop: "30px" }}>
            Entwurfstechnik
          </Typography>
          <div id="algo.1.3"></div>
          {/*Programmablaufplan*/}
          <Typography level="h5">Programmablaufplan (PAP)</Typography>
          <div id="algo.1.3.1"></div>
          <div>
            <Typography level="body1">
              Ablaufpläne beschreiben welche Anweisungen in welcher Reihenfolge
              ausgeführt werden müssen. Sie verfügen über einen klar definierten
              Start und Endpunkt. Einzelne Abläufe (Prozesse) können dabei
              wieder durch Programmablaufpläne dargestellt werden bis sie
              vollständig durch triviale Anweisungen beschrieben sind.
            </Typography>
            <div className={styles.bildeinruecken2}>
              <img src={"/PAP.png"} alt="PAPImage" height={300} />
            </div>
            <Typography
              level="body5"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Bitte schaue für die genaue Erklärung in das GdP-Skript. Dort wird
              alles nochmal detailliert erklärt.
            </Typography>
          </div>
          {/*Struktogramm*/}
          <Typography level="h5" sx={{ marginTop: "30px" }}>
            Struktogramm (Nassi-Shneidermann Diagramm)
          </Typography>
          <div id="algo.1.3.2"></div>
          <div>
            <Typography level="body1">
              Struktogramme bieten eine alternative Möglichkeit, Algorithmen
              darzustellen. Ihr Bausteine sind Blöcke, die durch spezielle
              Operationen verschachtelt werden können. Die einfachste Version
              eines Blocks ist eine Anweisung oder ein Folge von Anweisungen,
              die wir Sequenz nennen. Sie sind näher am späteren
              Programmquelltext, da sie eine klare lineare Struktur haben. Sie
              eignen sich besser, einen Programmablauf “von oben nach unten”
              darzustellen.
            </Typography>
            <div className={styles.bildeinruecken2}>
              <img
                src={"/Struktogramm.png"}
                alt="StruktogrammImage"
                height={300}
              />
            </div>
            <Typography
              level="body5"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              Bitte schaue für die genaue Erklärung in das GdP-Skript. Dort wird
              alles nochmal detailliert erklärt.
            </Typography>
          </div>
          {/*Pseudocode*/}
          <Typography level="h5" sx={{ marginTop: "20px" }}>
            Pseudocode
          </Typography>
          <div id="algo.1.3.3"></div>
          <div>
            <Typography level="body1">
              Beim Pseudocode soll es sich erstmals um eine Schritt für Schritt
              Anleitung/Beschreibung handeln, die man anschließend in Code
              überführen will. Das Ziel ist es den Algorithmus abstrakt zu
              beschreiben, aber jedoch eine Struktur beizubehalten. Auf einem
              Blatt Papier werden die jeweiligen einzelnen Schritte
              untereinander niedergeschrieben.
            </Typography>
            <Accordion
              titel="Pseudocode Faustregel"
              inhalt={
                <span>
                  1. Verstehe das Problem was du Lösen möchtest <br></br>
                  2. Versuche das Problem in Schritte aufzubrechen, um ein
                  besseres Verständnis dafür zu entwickeln
                  <br></br>
                  3. Überlege in welcher Reihenfolge die Schritte erfolgen
                  sollen<br></br>
                  4. Schreibe deinen Pseudocode möglichst mit einfachen Worten
                  <br></br>
                  5. Teste deinen Pseudocode<br></br>
                  6. Führe deinen Pseudocode anschließend in ein Programm über
                </span>
              }
            ></Accordion>
            <Typography level="h5" sx={{ marginTop: "20px" }}>
              Pseudocode - TK Pizza backen
            </Typography>
            <div className={styles.bildeinruecken}>
              <Typography level="body1">
                Wir schauen uns nun gemeinsam ein Pseudocode Beispiel an. Dieses
                Anwendungsbeispiel hast du definitv schon mal selber gemacht! Es
                handelt sich natürlich um das Backen einer Tiefkühl-Pizza
                (TK-Pizza). Das ist ein sehr schönes Beispiel um dir zu zeigen,
                wie man einen Algorithmus als Pseudocode schreibt. Alle
                Schritte, die man beim Backen einer TK-Pizza macht werden nun
                als Pseudocode Algorithmus geschrieben.
              </Typography>
              <img src={"/pizza-svgrepo.svg"} alt="pizza" height={90} />
            </div>
            <div className={styles.bildeinruecken2}>
              <img src={"/pizza1.png"} alt="pizza1" height={120} />
            </div>
            <Typography level="body1" sx={{ marginTop: "20px" }}>
              Wie du siehst, ist dieser Pseudocode eine Anleitung für eine
              Person (Bäcker*in), die einen Backofen hat und eine TK-Pizza
              backen möchte. Diesen Pseudocode könnte ein Computer nicht
              ausführen. Es gibt den Pizzabäcker eine klare, eindeutige,
              strkuturierte und druchführbare Anweisungen. Dieser Algorithmus
              hat verschiedene Sequenzen, die immer nacheinander abgearbeitet
              werden. In diesem Pseudocode haben wir aber noch keine
              Kontrollstrukturen verwendet. Diese sind aber essentiell, für das
              schreiben eines guten Algorithmus.
            </Typography>
            {/*Kontrollstrukturen */}
            <Typography level="h5" sx={{ marginTop: "30px" }}>
              Pseudocode - Kontrollstrukturen
            </Typography>
            <div id="algo.1.4"></div>
            <Typography level="body1">
              Du hast im C++ Einführungskurs bereits einiges über
              Kontrollstrukturen gelernt. Wir versuchen sie nun nochmal im
              Zusammenhang mit dem Begriff 'Pseudocode' zu betrachten. Falls du
              noch Schwierigkeiten hast, Kontrollstrukturen zu verstehen, kehre
              einfach zum Einführungskurs zurück und schau außerdem in deinem
              GdP Skript nach.
            </Typography>
            {/*Fallunterscheidung*/}
            <Typography level="h5" sx={{ marginTop: "10px" }}>
              Pseudocode - Fallunterscheidung
            </Typography>
            <div id="algo.1.4.1"></div>
            <Typography level="body1">
              Die Fallunterscheidung (Bedingte Verzweigung) sagt einem, dass
              anhand einer Bedingung/Fall entschieden wird, ob eine bestimmte
              Anweisung durchgeführt wird oder nicht. In der Programmiersprache
              C++ sind "if" und "else" notwendigen Schlüsselwörter dafür. Wir
              erweitern das TK-Pizza Beispiel und schauen uns an, wie man eine
              Fallunterscheidung in Pseudocode schreibt.
            </Typography>
            <div className={styles.bildeinruecken2}>
              <img src={"/pizza2.png"} alt="pizza" height={210} />
            </div>
            <Typography level="body1" sx={{ marginTop: "10px" }}>
              Hier sieht man schön, dass WENN die Bedingung eintrifft, dass die
              Pizza in einer Plastikfolie eingewicklet ist, muss man diese
              zuerst entfernen, bevor man weitermachen kann. Genauso wird
              geschaut, ob das Backblech bereits mit Backpapier ausgelegt wurde
              und WENN nicht, wird dies zuerst gemacht.
            </Typography>
            {/*Schleife*/}
            <Typography level="h5" sx={{ marginTop: "10px" }}>
              Pseudocode - Schleife
            </Typography>
            <div id="algo.1.4.2"></div>
            <Typography level="body1">
              Der Begriff Zyklus (auch Schleife, Wiederholung, Loop) in der
              Programmierung, bezeichnet die wiederholte Ausführung von Teilen
              eines Programms.<br></br> Eine Schleife hat eine
              Schleifenbedingung, die angibt, wie oft oder bei welcher Bedingung
              die Schleife ausgeführt werden soll.<br></br>Wenn man Programme
              mit Schleifen schreibt definiert man sich Schleifeninvarianten.
              Das sind Bedingungen, die nach jeder Ausführung der Schleife
              gelten.
              <br></br>
              Gehen wir mal davon aus, dass die Person (Bäcker/in) die genaue
              Backzeit der Pizza nicht mehr weiß, da sie die Verpackung
              weggeworfen hat.<br></br>(ist uns natürlich noch nie passiert :D)
              <br></br>
              Hier müsste man, SOLANGE die Pizza noch nicht lecker, knusprig,
              goldbraun gebacken ist, immer wieder nach einer gewissen Zeit
              nachschauen, ob sie fertig ist.
            </Typography>
            <div className={styles.bildeinruecken2}>
              <img src={"/pizza3.png"} alt="pizza3" height={230} />
            </div>
            <Typography level="body1" sx={{ marginTop: "20px" }}>
              Super, du hast nun gelernt, wie man einen Pseudocode schreibt. Nun
              bist du bestens vorbereitet einen eigenen Pseudocode zu erstellen.
            </Typography>
            <div className={styles.bildeinruecken2}>
              <img src={"/undraw_pizza.svg"} alt="pizzaSVG" height={200} />
            </div>
          </div>
          <Typography
            level="h4"
            endDecorator={
              <ProgressCheck
                done={progress["id_algo_1_1"] ? 100 : 0}
              ></ProgressCheck>
            }
            sx={{ marginTop: "50px" }}
          >
            Pebble-Simulator
          </Typography>
          <div id="algo.1.5"></div>
          <Typography level="body1" sx={{ marginBottom: "20px" }}>
            Das war jetzt aber auch sehr viel Input! Spiel doch zur Belohnung
            eine kleine Runde Pebble-Simulator. Schlüpfe in meine Rolle als
            Pebble die Schildkröte und beweg dich aus dem Labyrinth indem du von
            dem roten Feld auf das grüne Feld gelangst.
          </Typography>
          <TurtleViewer_Steuerung
            field={field}
            width={500}
            height={500}
            labyrinthChange={() =>
              setField(labyrinth[Math.floor(Math.random() * labyrinth.length)])
            }
            istImZiel={() => {
              setProgress({ ...progress, id_algo_1_1: true }),
                TaskErstellen("id_algo_1_1", "", true);
            }}
          ></TurtleViewer_Steuerung>
          {/*DeinPseudocode*/}
          <Typography
            level="h4"
            endDecorator={
              <ProgressCheck
                done={progress["id_algo_1_2"] ? 100 : 0}
              ></ProgressCheck>
            }
            sx={{ marginTop: "20px" }}
          >
            Dein Pseudocode
          </Typography>
          <div id="algo.1.6"></div>
          <Typography sx={{ marginTop: "10px" }} level="body1">
            Du hast in diesem Kapitel viel über Algorithmen und Pseudocode
            gelernt. Nun bist du an der Reihe einen Pseudocode zu schreiben!
            <br></br>
            Die Aufgabe für deinen Pseudocode lautet:
            <br></br>
          </Typography>
          <Typography level="body1" color="success">
            Schreibe einen Pseudocode, der mir (Pebble die Schildkröte) hilft
            aus dem Labyrinth zu gelangen.
          </Typography>
          <Typography sx={{ marginTop: "10px" }} level="body1">
            Denk dran, ich bin nur eine Schildkröte daher kann ich nur folgendes
            machen:<br></br>• nach vorne gehen<br></br>• nach links/rechts
            drehen<br></br>• schauen ob ich im Ziel ist <br></br>• schauen ob
            vor mir eine Wand ist <br></br>• schauen ob links/rechts von mir
            eine Wand ist <br></br>
          </Typography>
          <Typography sx={{ marginTop: "10px" }} level="body1">
            Teste deinen Pseudocode/Algorithmus gerne mit dem Spiel
            "Pebble-Simulator" durch. Schreibe deinen Pseudocode in dem dafür
            vorgesehenen Feld.
          </Typography>
          <Textarea
            sx={{ width: "100%", marginBlock: 2 }}
            color="success"
            minRows={5}
            variant="plain"
            placeholder="Dein Algorithmus"
            value={pseudocodeValue}
            onChange={(e) => setPseudocodeValue(e.target.value)}
            disabled={!!progress["id_algo_1_2"]}
          />
          <Button
            color="success"
            variant="soft"
            onClick={() => TaskErstellen("id_algo_1_2", pseudocodeValue, false)}
            sx={{ marginRight: "10px" }}
            disabled={!!progress["id_algo_1_2"]}
          >
            Speichern
          </Button>
          <Typography sx={{ marginTop: "20px", marginBottom: "10px" }} level="body1">
            Um dieses Kapitel abzuschließen musst du deinen Pseudocode für eine
            Peer-Review freigeben. Das bedeutet, dass dein Pseudocode einem
            deiner Komilitonnen zugewiesen wird, der dir darauf einen Kommentar
            gibt, was du beispielsweise noch verbessern kannst, oder ob soweit
            alles passt und du dann mit der codierung beginnen kannst. Auch du
            musst einen Pseudocode deines Kommilitonen kommentieren.
          </Typography>
          
          <Button
            color="success"
            onClick={() => {
              if (
                confirm(
                  "Die PeerReview kann von deinem Professor und Komilitonnen eingesehen werden. Schicke deinen Pseudocode nur ab, wenn du damit fertig bist und Feedback erhalten möchtest."
                )
              ) {
                setProgress({ ...progress, id_algo_1_2: true });
                TaskErstellen("id_algo_1_2", pseudocodeValue, true);
                Submitten();
              }
            }}
            disabled={!!progress["id_algo_1_2"]}
          >
            Zur Peer Review freigeben
          </Button>
        </div>
      </Navigation>
    </>
  );
}
