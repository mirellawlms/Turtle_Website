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
  codeEinAusgabe?: (
    code_eingabe: string,
    code_ausgabe: string,
    imZiel?: boolean
  ) => void;
  onChange?: (code: string) => void;
}

const server = "http://localhost:5236/run";

export const CodeEditor: React.FC<Props> = (props) => {
  const { title, defaultValue, turtle, labyrinth, codeEinAusgabe, onChange } =
    props;
  const editorRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [output, setStdout] = useState("");
  const [path, setPath] = useState<Path[]>([]);
  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  /*useEffect(() => {
    if (defaultValue && editorRef.current) {
      (editorRef.current as any).setValue(defaultValue);
    }
  }, [defaultValue]);*/

  //hier wird onRun ausgeführt -> server post
  const onRun = async () => {
    setLoading(true);
    fetch(server, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        //(etwas ? x : y) === (if etwas !null oder true -> x else y)
        code: editorRef.current ? (editorRef.current as any).getValue() : "",
        labyrinth: labyrinth ?? [],
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setPath(data.path || []);
        const pfad = data.path || [];

        const imZiel =
          pfad.length &&
          pfad[pfad.length - 1].end_x === 9 &&
          pfad[pfad.length - 1].end_y === 9;

        if (turtle == true) {
          imZiel
            ? setStdout(
                "Super, du hast mich erfolgreich aus dem Labyrinth gebracht!"
              )
            : setStdout(
                data.compile +
                  data.output +
                  "Oh nein, das hat leider nicht geklappt! Ich bin noch gefangen im Labyrinth. Versuch es doch nochmal!"
              );
        } else {
          setStdout(data.compile + data.output || "");
        }
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

      <div className={styles.content}>
        <Editor
          height="100%"
          defaultLanguage="cpp"
          value={defaultValue}
          theme="vs-dark"
          onMount={handleEditorDidMount}
          onChange={(value: string | undefined, _e: any) =>
            onChange && onChange(value ?? "")
          }
        />
        {/*(turtle && (...))===(if turtle == true {...})*/}
        {/*(labyrinth ?? x) === (if labyrinth undefined gibt wert x) */}
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
