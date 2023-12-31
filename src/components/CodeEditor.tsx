import { faPlay, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, CircularProgress, Tooltip } from "@mui/joy";
import React, { useEffect, useRef, useState } from "react";
import { Field, Path, TurtleViewer } from "./TurtleViewer";
import Editor from "@monaco-editor/react";
import styles from "../styles/CodeEditor.module.css";

interface Props {
  title: string;
  defaultValue: string;
  turtle: boolean;
  labyrinth?: Field[][];
  height?: string;
  codeEinAusgabe?: (
    code_eingabe: string,
    code_ausgabe: string,
    imZiel?: boolean
  ) => void;
  onChange?: (code: string) => void;
}

const server = "http://localhost:5236/run";

export const CodeEditor: React.FC<Props> = (props) => {
  const { title, defaultValue, turtle, labyrinth, height, codeEinAusgabe, onChange } =
    props;
  const editorRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [output, setStdout] = useState("");
  const [path, setPath] = useState<Path[]>([]);
  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  //hier wird onRun ausgeführt -> server post
  const onRun = async () => {
    setLoading(true);
    fetch(server, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: editorRef.current ? (editorRef.current as any).getValue() : "",
        labyrinth: labyrinth ?? [],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPath(data.path || []);
        const pfad = data.path || [];
        //let kann 0 Wert
        let zielX = 0;
        let zielY = 0;
        if(labyrinth){
          for(let y = 0 ; y < labyrinth?.length ; y++){
            for(let x = 0 ; x < labyrinth[y].length ; x++){
              if(labyrinth[y][x] === Field.EXIT){
                zielX = x;
                zielY = y;
              }
            }
          }
        }
        //prüft ob turtle true und dann ob ich bereits im Ziel bin
        const imZiel =
          pfad.length &&
          pfad[pfad.length - 1].end_x === zielX &&
          pfad[pfad.length - 1].end_y === zielY;

        if (turtle == true) {
          imZiel
            ? setStdout(
                "Super, du hast mich erfolgreich aus dem Labyrinth gebracht!"
              )
            : setStdout(
                data.compile +
                  data.output +
                  "Oh nein, ich bin noch gefangen im Labyrinth. Versuch es nochmal!"
              );
        } else {
          setStdout(data.compile + data.output || "");
        }

        //damit ich aus Übung heraus auf code, ausgabe und auf imziel prüfen kann
        codeEinAusgabe &&
          codeEinAusgabe(
            editorRef.current ? (editorRef.current as any).getValue() : "",
            data.output,
            imZiel
          );
        setLoading(false);
        setIsRunning(true);
      })
      .catch(console.error);
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div>
          <Tooltip title="Ausführung abbrechen">
            <Button
              style={{ marginRight: "5px" }}
              color="success"
              variant="soft"
              onClick={() => {
                setStdout("");
                setPath([]);
                setIsRunning(false);
              }}
            >
              <FontAwesomeIcon icon={faRotateRight} height={12} />
            </Button>
          </Tooltip>

          <Tooltip title="Ausführen">
            <Button color="success" onClick={onRun} loading={isLoading}>
              <FontAwesomeIcon icon={faPlay} height={12} />
            </Button>
          </Tooltip>
        </div>
      </div>

      <div className={styles.content} style={{height}}>
        <Editor
          height="100%"
          defaultLanguage="cpp"
          value={defaultValue}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          //onchange von editor und onchange aus den props
          //onchange von editor erwartet zwei eingaben, daher auch e mit _e signalisiert, dass nicht benutzt
          onChange={(value: string | undefined, _e: any) =>
            onChange && onChange(value ?? "")
          }
        />
        {/*wenn turtle true dann wird turtleviewer angezeigt*/}
        <div>
          {turtle && (
            <TurtleViewer
              path={path}
              field={labyrinth ?? []}
              width={400}
              height={400}
              running={isRunning}
              runningDone={() => setIsRunning(false)}
            />
          )}
          <div className={styles.terminal}>
            <div className={styles.terminalHeader}>
              <p>Ausgabe</p>
            </div>
            {output && <span className={styles.stdout}>{output}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
