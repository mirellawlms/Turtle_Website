import React, { useCallback, useEffect, useRef, useState } from "react";
import { Field } from "./TurtleViewer";
import { Button, Select, Option, Typography, Textarea } from "@mui/joy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";

interface Props {
  field: Field[][];
  width: number;
  height: number;
  labyrinthChange: ()=>void;
  istImZiel: ()=>void;
}

export const TurtleViewer_Steuerung: React.FC<Props> = (props) => {
  const { field, width, height, labyrinthChange, istImZiel} = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [x, setx] = useState(0);
  const [y, sety] = useState(0);
  const [direction, setDirection] = useState(0);
  const [imZiel, setimZiel] = useState(false);
  const back_ground = useRef<HTMLImageElement>();
  const [hintergrund, setHintergrund] = useState("swamp");
  const [consoleLog, setConsoleLog] = useState("");

  const draw = useCallback(async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    if (field.length === 0) return;

    const fieldWidth = field[0].length;
    const fieldHeight = field.length;

    //pixel/blockanzahl
    const fieldSize = Math.min(width / fieldWidth, height / fieldHeight);

    //lade die Images
    const WallImage = new Image();
    WallImage.src = "/wall.png";
    await new Promise((r) => (WallImage.onload = r));

    const TurtleImage_east = new Image();
    TurtleImage_east.src = "/turtle_east.png";
    await new Promise((r) => (TurtleImage_east.onload = r));

    const TurtleImage_west = new Image();
    TurtleImage_west.src = "/turtle_west.png";
    await new Promise((r) => (TurtleImage_west.onload = r));

    const TurtleImage_south = new Image();
    TurtleImage_south.src = "/turtle_south.png";
    await new Promise((r) => (TurtleImage_south.onload = r));

    const TurtleImage_north = new Image();
    TurtleImage_north.src = "/turtle_north.png";
    await new Promise((r) => (TurtleImage_north.onload = r));

    //Hintergrundbild wird anders geladen
    if (!back_ground.current) {
      if(hintergrund ==="swamp"){
        const Back_Swamp_Image = new Image();
        Back_Swamp_Image.src = "/swamp.png";
        await new Promise((r) => (Back_Swamp_Image.onload = r));
        back_ground.current = Back_Swamp_Image;
        }
      if(hintergrund ==="water"){
        const Back_Water_Image = new Image();
        Back_Water_Image.src = "/water.png";
        await new Promise((r) => (Back_Water_Image.onload = r));
        back_ground.current = Back_Water_Image;
        }
      if(hintergrund ==="sand"){
        const Back_Sand_Image = new Image();
        Back_Sand_Image.src = "/sand.png";
        await new Promise((r) => (Back_Sand_Image.onload = r));
        back_ground.current = Back_Sand_Image;
        }
    }
    if (back_ground.current) {
      ctx.drawImage(back_ground.current, 0, 0, width, height);
    }

    for (let y = 0; y < fieldHeight; y++) {
      for (let x = 0; x < fieldWidth; x++) {
        if (field[y][x] === Field.WALL) {
          ctx.drawImage(
            WallImage,
            x * fieldSize,
            y * fieldSize,
            fieldSize,
            fieldSize
          );
        }
        if (field[y][x] === Field.START) {
          ctx.fillStyle ="#E9967A";
          ctx.fillRect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
        }
        if (field[y][x] === Field.EXIT) {
          ctx.fillStyle = "#3cb371";
          ctx.fillRect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
        }
      }
    }

    //overlay turtle über den strich und hier muss geschaut werden welche poition angezeigt wird
    console.log(x, y, direction);
    if (direction === 0) {
      ctx.drawImage(
        TurtleImage_north,
        x * fieldSize,
        y * fieldSize,
        fieldSize,
        fieldSize
      );
    }
    if (direction === 1) {
      ctx.drawImage(
        TurtleImage_east,
        x * fieldSize,
        y * fieldSize,
        fieldSize,
        fieldSize
      );
    }
    if (direction === 2) {
      ctx.drawImage(
        TurtleImage_south,
        x * fieldSize,
        y * fieldSize,
        fieldSize,
        fieldSize
      );
    }
    if (direction === 3) {
      ctx.drawImage(
        TurtleImage_west,
        x * fieldSize,
        y * fieldSize,
        fieldSize,
        fieldSize
      );
    }
  }, [x, y, direction, hintergrund, field]);

  const isWallInFront = () => {
    switch (direction) {
      case 0:
        return y - 1 < 0 || field[y - 1][x] === Field.WALL;

      case 1:
        return x + 1 >= field.length || field[y][x + 1] === Field.WALL;

      case 2:
        return y + 1 >= field.length || field[y + 1][x] === Field.WALL;

      case 3:
        return x - 1 < 0 || field[y][x - 1] === Field.WALL;

      default:
        return false;
    }
  };

  const moveForward = () => {
    if (!isWallInFront()) {
      switch (direction) {
        case 0:
          sety(y - 1);
          break;

        case 1:
          setx(x + 1);
          break;

        case 2:
          sety(y + 1);
          break;

        case 3:
          setx(x - 1);
          break;
      }
    }
  };
  //beim Ende erscheint eine ausgabe
  useEffect(() => {
    if (field[y][x] === Field.EXIT) {
      console.log("Pebble hat das Ziel erreicht!");
      setimZiel(true);
      istImZiel();
    }
  }, [y, x]);

  //schaue welche key gedrückt wird
  useEffect(() => {
    draw();
    const handleKeyDown = (event: any) => {
      //wenn ich in eins von ignore bin (wo ich mich gerade befinde) 
      const ignore = ["input","textarea","button"];
      if(ignore.includes(event.target.tagName.toLowerCase())){
        return;
      }
      console.log(event.target);
      switch (event.key) {
        case "w":
          moveForward();
          setConsoleLog("Pebble geht nach vorne");
          break;

        case "a":
          const newDirection = (direction - 1) % 4;
          if (newDirection === -1) {
            setDirection(3);
          } else {
            setDirection(newDirection);
          }
          setConsoleLog("Pebble dreht sich nach links");
          break;

        case "d":
          setDirection((direction + 1) % 4);
          setConsoleLog("Pebble dreht sich nach rechts");
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [draw]);

  //wenn bei field änderung, direkt draw
  useEffect(() => {
    setx(0);
    sety(0);
  }, [field])

  return (
    <div style={{display:"flex" , flexDirection:"row" , alignItems:"flex-start", gap:"10px"}}>
      <canvas ref={canvasRef} width={width} height={height} />
      <div style={{display:"flex",flexDirection:"column", gap:"10px", justifyContent:"space-between", height}}>
        <div style={{display:"flex",flexDirection:"column", gap:"10px"}}>
        {imZiel && (
            <Button
              onClick={() => {
                setx(0);
                sety(0);
                setimZiel(false);
              }}
              color="success"
              ><FontAwesomeIcon style={{marginRight:"10px"}} icon={faRotateRight} height={12}/>Neustart</Button>
        )}
        <Select defaultValue="swamp" sx={{width: 250}} value={hintergrund}onChange={(_, value) => {setHintergrund(value ?? "swamp");back_ground.current=undefined}}>
          <Option value="swamp">Sumpf</Option>
          <Option value="water">Wasser</Option>
          <Option value="sand">Wüste</Option>
        </Select>
        <Button color="success" variant="soft" onClick={labyrinthChange}>Generate Maze</Button>
        </div>
        <div>
          <Textarea name="Solid" variant="outlined" disabled value={consoleLog} sx={{height:'40px', width:"250px" ,marginBottom:'20px'}}/>
          <Typography><b>W:</b> Vorwärts</Typography>
          <Typography><b>D:</b> Rechts drehen</Typography>
          <Typography><b>A:</b> Links drehen</Typography>
        </div>
      </div>
    </div>
  );
};