import React, { useEffect, useRef } from "react";

export enum Field {
  EMPTY,
  WALL,
  EXIT,
  START
};

export type Path = {
  start_x: number;
  start_y: number;
  end_x: number;
  end_y: number;
  direction: number;
};

interface Props {
  path: Path[];
  field: Field[][];
  width: number;
  height: number;
}

export const TurtleViewer: React.FC<Props> = (props) => {
  const { path, field, width, height } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  //useeffect ist funktion mit 2 parameter 1. eine funktion und 2. eine array und 1 funktion wird aufgerufen, falls sich eins der array inhalte ändert
  const draw = async (currentpath: Path[]) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    if (field.length === 0) return;

    const fieldWidth = field[0].length;
    const fieldHeight = field.length;

    //pixel/blockanzahl 400/10=40
    const fieldSize = Math.min(width / fieldWidth, height / fieldHeight);

    const Back_Swamp_Image = new Image();
    Back_Swamp_Image.src = "/swamp.png";
    await new Promise((r) => (Back_Swamp_Image.onload = r));
    ctx.drawImage(Back_Swamp_Image, 0, 0, width, height);

    const WallImage = new Image();
    WallImage.src = "/wall.png";
    await new Promise((r) => (WallImage.onload = r));

    //verschiede turtle pngs
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
          ctx.fillStyle = "#E9967A";
          ctx.fillRect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
        }
        if (field[y][x] === Field.EXIT) {
          ctx.fillStyle = "#3cb371";
          ctx.fillRect(x * fieldSize, y * fieldSize, fieldSize, fieldSize);
        }
      }
    }
    // Draw path as line
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    ctx.beginPath();

    for (const { start_x, start_y, end_x, end_y } of currentpath) {
      ctx.moveTo(
        //schiebe pinsel an startwert * 40px + 40/2 da ich es in der mitte haben will
        start_x * fieldSize + fieldSize / 2,
        start_y * fieldSize + fieldSize / 2
      );
      ctx.lineTo(
        end_x * fieldSize + fieldSize / 2,
        end_y * fieldSize + fieldSize / 2
      );
    }
    //strich wird gemalt
    ctx.stroke();

    //overlay turtle über den strich und hier muss geschsut werden welche poition angezeigt wird
    if (currentpath.length !== 0) {
      if(currentpath[currentpath.length-1].direction == 0){
        ctx.drawImage(TurtleImage_north,currentpath[currentpath.length - 1].end_x * fieldSize,currentpath[currentpath.length - 1].end_y * fieldSize,fieldSize,fieldSize);
      }
      if(currentpath[currentpath.length-1].direction == 1){
        ctx.drawImage(TurtleImage_east,currentpath[currentpath.length - 1].end_x * fieldSize,currentpath[currentpath.length - 1].end_y * fieldSize,fieldSize,fieldSize);
      }
      if(currentpath[currentpath.length-1].direction == 2){
        ctx.drawImage(TurtleImage_south,currentpath[currentpath.length - 1].end_x * fieldSize,currentpath[currentpath.length - 1].end_y * fieldSize,fieldSize,fieldSize);
      }
      if(currentpath[currentpath.length-1].direction == 3){
        ctx.drawImage(TurtleImage_west,currentpath[currentpath.length - 1].end_x * fieldSize,currentpath[currentpath.length - 1].end_y * fieldSize,fieldSize,fieldSize);
      }
    } else{
      ctx.drawImage(TurtleImage_south,0,0,fieldSize,fieldSize);
    }
  };

  useEffect(() => {
    //async damit das bild verzögert angezeigt wird
    const run = async () => {
      if (path.length === 0) {
        //labyrinth sehe ich
        draw([]);
        return;
      }
      for (let i = 1; i <= path.length; i++) {
        const temppath = path.slice(0, i);
        draw(temppath);
        await new Promise<void>((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 600);
        });
      }
    };
    run();
  }, [path, field]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};