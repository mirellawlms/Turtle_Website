import React, { useCallback, useEffect, useRef } from "react";

export enum Field {
  EMPTY,
  WALL,
  EXIT,
  START,
}

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
  running: boolean;
  runningDone: () => void;
}

export const TurtleViewer: React.FC<Props> = (props) => {
  const { path, field, width, height, running, runningDone } = props;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const back_ground = useRef<HTMLImageElement>();
  const wall_image = useRef<HTMLImageElement>();
  const turtle_n = useRef<HTMLImageElement>();
  const turtle_s = useRef<HTMLImageElement>();
  const turtle_w = useRef<HTMLImageElement>();
  const turtle_e = useRef<HTMLImageElement>();
  const step = useRef(0);
  const running_2 = useRef(false);

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

    //load images
    //background
    if (!back_ground.current) {
      const Back_Swamp_Image = new Image();
      Back_Swamp_Image.src = "/swamp.png";
      await new Promise((r) => (Back_Swamp_Image.onload = r));
      back_ground.current = Back_Swamp_Image;
    }
    //an stelle 0.0 über breit und höhe das Bild
    if (back_ground.current) {
      ctx.drawImage(back_ground.current, 0, 0, width, height);
    }

    //wall
    if (!wall_image.current) {
      const WallImage = new Image();
      WallImage.src = "/wall.png";
      await new Promise((r) => (WallImage.onload = r));
      wall_image.current = WallImage;
    }

    //turtle pngs
    if (!turtle_e.current) {
      const TurtleImage_east = new Image();
      TurtleImage_east.src = "/turtle_east.png";
      await new Promise((r) => (TurtleImage_east.onload = r));
      turtle_e.current = TurtleImage_east;
    }

    if (!turtle_w.current) {
      const TurtleImage_west = new Image();
      TurtleImage_west.src = "/turtle_west.png";
      await new Promise((r) => (TurtleImage_west.onload = r));
      turtle_w.current = TurtleImage_west;
    }

    if (!turtle_s.current) {
      const TurtleImage_south = new Image();
      TurtleImage_south.src = "/turtle_south.png";
      await new Promise((r) => (TurtleImage_south.onload = r));
      turtle_s.current = TurtleImage_south;
    }

    if (!turtle_n.current) {
      const TurtleImage_north = new Image();
      TurtleImage_north.src = "/turtle_north.png";
      await new Promise((r) => (TurtleImage_north.onload = r));
      turtle_n.current = TurtleImage_north;
    }

    for (let y = 0; y < fieldHeight; y++) {
      for (let x = 0; x < fieldWidth; x++) {
        if (field[y][x] === Field.WALL) {
          ctx.drawImage(
            wall_image.current,
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
    //Strich wird gemalt
    ctx.stroke();

    //Overlay turtle über den strich und hier muss geschaut werden welche poition angezeigt wird
    if (currentpath.length !== 0) {
      if (currentpath[currentpath.length - 1].direction == 0) {
        ctx.drawImage(
          turtle_n.current,
          currentpath[currentpath.length - 1].end_x * fieldSize,
          currentpath[currentpath.length - 1].end_y * fieldSize,
          fieldSize,
          fieldSize
        );
      }
      if (currentpath[currentpath.length - 1].direction == 1) {
        ctx.drawImage(
          turtle_e.current,
          currentpath[currentpath.length - 1].end_x * fieldSize,
          currentpath[currentpath.length - 1].end_y * fieldSize,
          fieldSize,
          fieldSize
        );
      }
      if (currentpath[currentpath.length - 1].direction == 2) {
        ctx.drawImage(
          turtle_s.current,
          currentpath[currentpath.length - 1].end_x * fieldSize,
          currentpath[currentpath.length - 1].end_y * fieldSize,
          fieldSize,
          fieldSize
        );
      }
      if (currentpath[currentpath.length - 1].direction == 3) {
        ctx.drawImage(
          turtle_w.current,
          currentpath[currentpath.length - 1].end_x * fieldSize,
          currentpath[currentpath.length - 1].end_y * fieldSize,
          fieldSize,
          fieldSize
        );
      }
    } else {
      ctx.drawImage(turtle_s.current, 0, 0, fieldSize, fieldSize);
    }
  };

  useEffect(() => {
    console.log(running);
    running_2.current = running;
  }, [running]);
  
  const drawStep = async () => {
    const temppath = path.slice(0, step.current);
    draw(temppath);
    console.log("Drawn", step.current, "of", path.length, running_2);
    step.current++;
  
    if (step.current <= path.length && running_2.current) {
      await new Promise<void>((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 600);
      });
      drawStep();
    } else {
      if (!running_2.current) {
        draw([]);
      } else {
        draw(path);
      }
      if (running_2.current) {
        runningDone();
      }
    }
  };
  
  useEffect(() => {
    draw([]);
    if (running) {
      step.current = 0;
      drawStep();
    }else{
      draw(path);
    }
  }, [path, field, running]);

  return <canvas ref={canvasRef} width={width} height={height} />;
};
