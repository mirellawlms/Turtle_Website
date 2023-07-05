import { faPlay, faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, CircularProgress } from "@mui/joy";
import React, { useRef, useState } from "react";
import { Field, Path, TurtleViewer } from "./TurtleViewer";
import Editor from "@monaco-editor/react";
import styles from "../styles/CodeEditor.module.css";

interface Props {
  title: string;
  defaultValue: string;
  turtle: boolean;
  labyrinth?: Field[][];
}

const server = "http://localhost:5236/run";

export const CodeEditor: React.FC<Props> = (props) => {
  //const title = props.title;
  const { title, defaultValue, turtle, labyrinth} = props;
  const editorRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setStdout] = useState("");
  const [path, setPath] = useState<Path[]>([]);
  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;
  };

  const onRun = async () => {
    setIsRunning(true);
    fetch(server, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: editorRef.current ? (editorRef.current as any).getValue() : "",
        /*if labyrinth!null mach erstes ansonsten mach leeren String*/
        labyrinth: labyrinth?labyrinth.map(value=>value.join(",")).join(";"):("")
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStdout(data.compile + data.output || "");
        setPath(data.path || []);
        setIsRunning(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2>{title}</h2>
        <div>
        <Button
            style={{marginRight: "5px"}}
            color="success"
            variant="soft"
            onClick={() => {
              setStdout("");
              setPath([]);
            }}><FontAwesomeIcon icon={faRotateRight} height={12} />
          </Button>
        <Button color="success" onClick={onRun}>
          {isRunning ? (
            <CircularProgress size="sm" />
          ) : (
            <FontAwesomeIcon icon={faPlay} height={12} />
          )}
        </Button>
        </div>
      </div>
      <div className={styles.content}>
        <Editor
          height="200px"
          defaultLanguage="cpp"
          defaultValue={defaultValue}
          theme="vs-dark"
          onMount={handleEditorDidMount}
        />
        <div>
          {turtle && (
            <TurtleViewer path={path} field={labyrinth ?? []} width={400} height={400} />
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
