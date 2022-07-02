export interface Figure {
    name: string;
    color:string;
    positionX: number;
    positionY: number;
  }

  export interface KilledFigure {
    killedName: string;
    killedColor:string;
    killedPositionX: number;
    killedPositionY: number;
  }
  
export interface Position {
    positionX: number;
    positionY: number;
  }

  export interface ChooseFigure{
    chooseName:string;
    chooseColor:string;
    choosePositionX:number;
    choosePositionY:number;
  }

  export interface EndPawn{
    pawnName:string;
    pawnPositionX:number;
    pawnPositionY:number;
  }