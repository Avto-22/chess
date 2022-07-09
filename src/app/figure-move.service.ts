import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Figure, Position } from './app.model';
import { FigureRulesService } from './figure-rules.service';
import { FigureFunctionService } from './figure-function.service';
import { CheckService } from './check.service';
import { GameOverService } from './game-over.service';


@Injectable({
  providedIn: 'root'
})
export class FigureMoveService {

  figureRulesService:FigureRulesService=new FigureRulesService(
    this.figureFunctionService,
    this,
    this.checkService,
    this.gameOverService
  );

constructor(
  private figureFunctionService:FigureFunctionService,
    private checkService:CheckService,
    private gameOverService:GameOverService
) { }

// rules functions
checkPawn(pawnName: string, positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
  this.figureFunctionService.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
  let returnArr: Position[] = [];
  let canKill: boolean = true;
  if (nextPositionX - positionX != 1 && !(positionX == 2 && nextPositionX - positionX == 2)) {

    return [];
  }
  if (nextPositionX == 8) {
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && nextPositionY == positionY) {
      return [];
    }
    app.endPawn = {
      pawnName,
      pawnPositionX: nextPositionX,
      pawnPositionY: nextPositionY
    }
    app.chooseWhite = true;
  }
  if (nextPositionX == positionX + 2 && nextPositionY == positionY) { canKill = false };
  if (nextPositionX == positionX + 1 && nextPositionY == positionY) { canKill = false };
  if (canKill) {
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)
      &&
      (
        (nextPositionX - positionX == 1 && nextPositionY - positionY == 1)
        ||
        (nextPositionX - positionX == 1 && nextPositionY - positionY == -1)
      )
    ) {
      if (Object.values(app).find(x => x.color == 'black' && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
          app.isKillTarget = true;
          let deleteFigure: Figure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
          let figureName: string = deleteFigure.name;
          app.lastKilledFigure = {
            killedName: figureName,
            killedColor: deleteFigure.color,
            killedPositionX: deleteFigure.positionX,
            killedPositionY: deleteFigure.positionY
          }
          this.figureFunctionService.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
          returnArr = [...returnArr, {
            positionX: nextPositionX,
            positionY: nextPositionY
          }]
      }
    }
  }
  if (!this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)) {
    if (positionX == 2) {
      returnArr = [...returnArr, {
        positionX: positionX + 2,
        positionY: positionY
      }]
    }
    returnArr = [...returnArr, {
      positionX: positionX + 1,
      positionY: positionY
    }]
  }
  if ((app.blackKing.positionX == nextPositionX + 1 && app.blackKing.positionY == nextPositionY + 1) || (app.blackKing.positionX == nextPositionX + 1 && app.blackKing.positionY == nextPositionY - 1)) {
    console.log('ქიში');
    app.checkMaker = {
      positionX,
      positionY
    }
  }

  return returnArr;
}

checkBlackkPawn(pawnName: string, positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
  this.figureFunctionService.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
  let returnArr: Position[] = [];
  let canKill: boolean = true;
  if (nextPositionX - positionX != -1 && !(positionX == 7 && nextPositionX - positionX == -2)) {
    return [];
  }

  if (nextPositionX == 1) {
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && nextPositionY == positionY) {
      return [];
    }
    app.endPawn = {
      pawnName,
      pawnPositionX: nextPositionX,
      pawnPositionY: nextPositionY
    }
    app.chooseBlack = true;
  }

  if (nextPositionX == positionX + 2 && nextPositionY == positionY) { canKill = false };
  if (nextPositionX == positionX + 1 && nextPositionY == positionY) { canKill = false };
  if (canKill) {
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)
      &&
      (
        (nextPositionX - positionX == -1 && nextPositionY - positionY == 1)
        ||
        (nextPositionX - positionX == -1 && nextPositionY - positionY == -1)
      )
    ) {
      if (Object.values(app).find(x => x.color == 'white' && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        app.isKillTarget = true;
        let deleteFigure: Figure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
        let figureName: string = deleteFigure.name;
        app.lastKilledFigure = {
          killedName: figureName,
          killedColor: deleteFigure.color,
          killedPositionX: deleteFigure.positionX,
          killedPositionY: deleteFigure.positionY
        }
        this.figureFunctionService.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
        returnArr = [...returnArr, {
          positionX: nextPositionX,
          positionY: nextPositionY
        }]
      }
    }
  }
  if (!this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)) {
    if (positionX == 7) {
      returnArr = [...returnArr, {
        positionX: positionX - 2,
        positionY: positionY
      }]
    }
    returnArr = [...returnArr, {
      positionX: positionX - 1,
      positionY: positionY
    }]
  }
  if ((app.whiteKing.positionX == nextPositionX - 1 && app.whiteKing.positionY == nextPositionY + 1) || (app.whiteKing.positionX == nextPositionX - 1 && app.whiteKing.positionY == nextPositionY - 1)) {
    console.log('ქიში');
    app.checkMaker = {
      positionX,
      positionY
    }
  }
  return returnArr;
}

checkQueen(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
  this.figureFunctionService.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
  let returnArr: Position[] = [];
  returnArr = [
    ...returnArr,
    ...this.checkRock(positionX, positionY, nextPositionX, nextPositionY, app),
    ...this.checkBishop(positionX, positionY, nextPositionX, nextPositionY, app)
  ];
  return returnArr;
}

checkKing(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
  this.figureFunctionService.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
  let returnArr: Position[] = [];
  let opponnetColor: string = this.figureFunctionService.getOpponentColor(positionX, positionY, app);

  if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
    return [];
  }

  let nextArr = [
    {
      positionX: nextPositionX + 1,
      positionY: nextPositionY
    },
    {
      positionX: nextPositionX - 1,
      positionY: nextPositionY
    },
    {
      positionX: nextPositionX,
      positionY: nextPositionY + 1
    },
    {
      positionX: nextPositionX,
      positionY: nextPositionY - 1
    },
    {
      positionX: nextPositionX + 1,
      positionY: nextPositionY + 1
    },
    {
      positionX: nextPositionX - 1,
      positionY: nextPositionY - 1
    },
    {
      positionX: nextPositionX - 1,
      positionY: nextPositionY + 1
    },
    {
      positionX: nextPositionX + 1,
      positionY: nextPositionY - 1
    }
  ];
  if (nextArr.find(x => (x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) && (positionX == app.blackKing.positionX && positionY == app.blackKing.positionY)) {
    return [];
  }
  if (nextArr.find(x => (x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) && (positionX == app.whiteKing.positionX && positionY == app.whiteKing.positionY)) {
    return [];
  }

  returnArr = [
    ...returnArr,
    {
      positionX: positionX + 1,
      positionY: positionY
    },
    {
      positionX: positionX - 1,
      positionY: positionY
    },
    {
      positionX: positionX,
      positionY: positionY + 1
    },
    {
      positionX: positionX,
      positionY: positionY - 1
    },
    {
      positionX: positionX + 1,
      positionY: positionY + 1
    },
    {
      positionX: positionX - 1,
      positionY: positionY - 1
    },
    {
      positionX: positionX - 1,
      positionY: positionY + 1
    },
    {
      positionX: positionX + 1,
      positionY: positionY - 1
    }
  ];
  if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)) {
    if (Object.values(app).find(x => x.color == opponnetColor && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
      let deleteFigure: Figure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
      let figureName: string = deleteFigure.name;
      app.lastKilledFigure = {
        killedName: figureName,
        killedColor: deleteFigure.color,
        killedPositionX: deleteFigure.positionX,
        killedPositionY: deleteFigure.positionY
      }
      if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        app.isKillTarget = true;
        this.figureFunctionService.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
      }
    }
  }
  return returnArr;
}

checkBishop(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
  this.figureFunctionService.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
  let returnArr: Position[] = [];
  let nextArr: Position[] = [];
  let endTopRightDiagonal: boolean = false;
  let endTopLeftDiagonal: boolean = false;
  let endBottomRightDiagonal: boolean = false;
  let endBottomLeftDiagonal: boolean = false;

  let isFirstEndTopLeftDiagonal: boolean = true;
  let isFirstEndTopRightDiagonal: boolean = true;
  let isFirstEndBottomLeftDiagonal: boolean = true;
  let isFirstEndBottomRightDiagonal: boolean = true;

  if (
    this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)
    &&
    (this.figureFunctionService.getFigureColor(positionX, positionY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))
  ) {
    return [];
  }

  for (let i = 1; i <= 8; i++) {

    if (isFirstEndTopLeftDiagonal) {
      if (this.figureFunctionService.checkFigure(nextPositionX - i, nextPositionY - i, app)) {
        endTopLeftDiagonal = true;
        nextArr = [...nextArr, {
          positionX: nextPositionX - i,
          positionY: nextPositionY - i
        }];
        isFirstEndTopLeftDiagonal = false;
      }
    }
    if (isFirstEndBottomRightDiagonal) {
      if (this.figureFunctionService.checkFigure(nextPositionX + i, nextPositionY + i, app)) {
        endBottomRightDiagonal = true;
        nextArr = [...nextArr, {
          positionX: nextPositionX + i,
          positionY: nextPositionY + i
        }];
        isFirstEndBottomRightDiagonal = false;
      }
    }
    if (isFirstEndBottomLeftDiagonal) {
      if (this.figureFunctionService.checkFigure(nextPositionX + i, nextPositionY - i, app)) {
        endBottomLeftDiagonal = true;
        nextArr = [...nextArr, {
          positionX: nextPositionX + i,
          positionY: nextPositionY - i
        }];
        isFirstEndBottomLeftDiagonal = false;
      }
    }
    if (isFirstEndTopRightDiagonal) {
      if (this.figureFunctionService.checkFigure(nextPositionX - i, nextPositionY + i, app)) {
        endTopRightDiagonal = true;
        nextArr = [...nextArr, {
          positionX: nextPositionX - i,
          positionY: nextPositionY + i
        }];
        isFirstEndTopRightDiagonal = false;
      }
    }

    if (!endBottomRightDiagonal) {
      nextArr = [...nextArr, {
        positionX: nextPositionX + i,
        positionY: nextPositionY + i
      }];
    }
    if (!endTopLeftDiagonal) {
      nextArr = [...nextArr, {
        positionX: nextPositionX - i,
        positionY: nextPositionY - i
      }];
    }
    if (!endTopRightDiagonal) {
      nextArr = [...nextArr, {
        positionX: nextPositionX - i,
        positionY: nextPositionY + i
      }];
    }
    if (!endBottomLeftDiagonal) {
      nextArr = [...nextArr, {
        positionX: nextPositionX + i,
        positionY: nextPositionY - i
      }];
    }
  }

  if (nextArr.find(x => (x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) && this.figureFunctionService.getFigureColor(positionX, positionY, app) == 'black') {
    console.log('ქიში');
    app.checkMaker = {
      positionX,
      positionY
    }
  }

  if (nextArr.find(x => (x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) && this.figureFunctionService.getFigureColor(positionX, positionY, app) == 'white') {
    app.checkMaker = {
      positionX,
      positionY
    }
    console.log('ქიში');
  }

  endTopLeftDiagonal = false;
  endTopRightDiagonal = false;
  endBottomRightDiagonal = false;
  endBottomLeftDiagonal = false;

  isFirstEndTopLeftDiagonal = true;
  isFirstEndTopRightDiagonal = true;
  isFirstEndBottomLeftDiagonal = true;
  isFirstEndBottomRightDiagonal = true;

  for (let i = 1; i <= 8; i++) {

    if (isFirstEndTopLeftDiagonal) {
      if (this.figureFunctionService.checkFigure(positionX - i, positionY - i, app)) {
        endTopLeftDiagonal = true;
        returnArr = [...returnArr, {
          positionX: positionX - i,
          positionY: positionY - i
        }];
        isFirstEndTopLeftDiagonal = false;
      }
    }
    if (isFirstEndBottomRightDiagonal) {
      if (this.figureFunctionService.checkFigure(positionX + i, positionY + i, app)) {
        endBottomRightDiagonal = true;
        returnArr = [...returnArr, {
          positionX: positionX + i,
          positionY: positionY + i
        }];
        isFirstEndBottomRightDiagonal = false;
      }
    }
    if (isFirstEndBottomLeftDiagonal) {
      if (this.figureFunctionService.checkFigure(positionX + i, positionY - i, app)) {
        endBottomLeftDiagonal = true;
        returnArr = [...returnArr, {
          positionX: positionX + i,
          positionY: positionY - i
        }];
        isFirstEndBottomLeftDiagonal = false;
      }
    }
    if (isFirstEndTopRightDiagonal) {
      if (this.figureFunctionService.checkFigure(positionX - i, positionY + i, app)) {
        endTopRightDiagonal = true;
        returnArr = [...returnArr, {
          positionX: positionX - i,
          positionY: positionY + i
        }];
        isFirstEndTopRightDiagonal = false;
      }
    }

    if (!endBottomRightDiagonal) {
      returnArr = [...returnArr, {
        positionX: positionX + i,
        positionY: positionY + i
      }]
    }
    if (!endTopLeftDiagonal) {
      returnArr = [...returnArr, {
        positionX: positionX - i,
        positionY: positionY - i
      }]
    }
    if (!endTopRightDiagonal) {
      returnArr = [...returnArr, {
        positionX: positionX - i,
        positionY: positionY + i
      }]
    }
    if (!endBottomLeftDiagonal) {
      returnArr = [...returnArr, {
        positionX: positionX + i,
        positionY: positionY - i
      }]
    }
  }

  if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)) {
    if (Object.values(app).find(x => x.color == this.figureFunctionService.getOpponentColor(positionX, positionY, app) && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
      let deleteFigure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
      let figureName: string = deleteFigure.name;
      app.lastKilledFigure = {
        killedName: figureName,
        killedColor: deleteFigure.color,
        killedPositionX: deleteFigure.positionX,
        killedPositionY: deleteFigure.positionY
      }
      if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        app.isKillTarget = true;
        this.figureFunctionService.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
      }
    }
  }
  return returnArr;
}

checkKnight(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
  this.figureFunctionService.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
  if (
    this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
    return [];
  }
  let returnArr: Position[] = [];
  let nextArr: Position[] = [
    {
      positionX: nextPositionX - 2,
      positionY: nextPositionY + 1
    },
    {
      positionX: nextPositionX - 2,
      positionY: nextPositionY - 1
    },
    {
      positionX: nextPositionX + 2,
      positionY: nextPositionY - 1
    },
    {
      positionX: nextPositionX + 2,
      positionY: nextPositionY + 1
    },
    {
      positionX: nextPositionX - 1,
      positionY: nextPositionY + 2
    },
    {
      positionX: nextPositionX - 1,
      positionY: nextPositionY - 2
    },
    {
      positionX: nextPositionX + 1,
      positionY: nextPositionY - 2
    },
    {
      positionX: nextPositionX + 1,
      positionY: nextPositionY + 2
    }
  ];

  if (nextArr.find(x => (x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) && this.figureFunctionService.getFigureColor(positionX, positionY, app) == 'black') {
    console.log('ქიში');
    app.checkMaker = {
      positionX,
      positionY
    }
  }

  if (nextArr.find(x => (x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) && this.figureFunctionService.getFigureColor(positionX, positionY, app) == 'white') {
    app.checkMaker = {
      positionX,
      positionY
    }
    console.log('ქიში');
  }

  returnArr = [
    ...returnArr,
    {
      positionX: positionX - 2,
      positionY: positionY + 1
    },
    {
      positionX: positionX - 2,
      positionY: positionY - 1
    },
    {
      positionX: positionX + 2,
      positionY: positionY - 1
    },
    {
      positionX: positionX + 2,
      positionY: positionY + 1
    },
    {
      positionX: positionX - 1,
      positionY: positionY + 2
    },
    {
      positionX: positionX - 1,
      positionY: positionY - 2
    },
    {
      positionX: positionX + 1,
      positionY: positionY - 2
    },
    {
      positionX: positionX + 1,
      positionY: positionY + 2
    }
  ]
  if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)) {
    if (Object.values(app).find(x => x.color == this.figureFunctionService.getOpponentColor(positionX, positionY, app) && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
      let deleteFigure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
      let figureName: string = deleteFigure.name;
      app.lastKilledFigure = {
        killedName: figureName,
        killedColor: deleteFigure.color,
        killedPositionX: deleteFigure.positionX,
        killedPositionY: deleteFigure.positionY
      };
      if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        app.isKillTarget = true;
        this.figureFunctionService.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
      }
    }
  }
  return returnArr;
}


checkRock(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {

  if (
    (positionX != app.whiteRock.positionX && positionY != app.whiteRock.positionY)
    &&
    (positionX != app.whiteRock2.positionX && positionY != app.whiteRock2.positionY)
    &&
    (positionX != app.blackRock.positionX && positionY != app.blackRock.positionY)
    &&
    (positionX != app.blackRock2.positionX && positionY != app.blackRock2.positionY)
    &&
    (positionX != app.chooseRock.positionX && positionY != app.chooseRock.positionY)
    &&
    (positionX != app.chooseBlackRock.positionX && positionY != app.chooseBlackRock.positionY)
    &&
    (positionX != app.chooseQueen.positionX && positionY != app.chooseQueen.positionY)
    &&
    (positionX != app.chooseBlackQueen.positionX && positionY != app.chooseBlackQueen.positionY)
    &&
    (positionX != app.whiteQueen.positionX && positionY != app.whiteQueen.positionY)
    &&
    (positionX != app.blackQueen.positionX && positionY != app.blackQueen.positionY)
  ) { return [] };
  this.figureFunctionService.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
  let returnArr: Position[] = [];
  let nextArr: Position[] = [];
  let xArr: number[] = [];
  let yArr: number[] = [];
  let x = positionX;
  let y = positionY;
  let nextX = nextPositionX;
  let nextY = nextPositionY;

  if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
    return [];
  }

  //================ make nextArr
  while (nextPositionX != 1) {

    nextPositionX -= 1;

    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) != this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
      xArr = [...xArr, nextPositionX];
      break;
    }
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
      break;
    }
    xArr = [...xArr, nextPositionX];
  }
  nextPositionX = nextX;

  while (nextPositionX != 8) {
    nextPositionX += 1;
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) != this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
      xArr = [...xArr, nextPositionX];
      break;
    }
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
      xArr = [...xArr, nextPositionX];
      break;
    }
    xArr = [...xArr, nextPositionX];
  }
  nextPositionX = nextX;

  //=============== chnage positionY
  while (nextPositionY != 1) {
    nextPositionY -= 1;
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) != this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
      yArr = [...yArr, nextPositionY];
      break;
    }
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
      break;
    }
    yArr = [...yArr, nextPositionY];
  }
  nextPositionY = nextY;

  while (nextPositionY != 8) {
    nextPositionY += 1;
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) != this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
      yArr = [...yArr, nextPositionY];
      break;
    }
    if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(positionX, positionY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
      break;
    }
    yArr = [...yArr, nextPositionY];
  }
  nextPositionY = nextY;

  for (let i = 0; i < xArr.length; i++) {
    nextArr = [...nextArr, {
      positionX: xArr[i],
      positionY: nextY
    }]
  }
  for (let i = 0; i < yArr.length; i++) {
    nextArr = [...nextArr, {
      positionX: nextX,
      positionY: yArr[i]
    }]
  }
  // ==============================
  if (nextArr.find(x => (x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) && this.figureFunctionService.getFigureColor(positionX, positionY, app) == 'black') {
    console.log('ქიში');
    app.checkMaker = {
      positionX,
      positionY
    }
  }

  if (nextArr.find(x => (x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) && this.figureFunctionService.getFigureColor(positionX, positionY, app) == 'white') {
    app.checkMaker = {
      positionX,
      positionY
    }
    console.log('ქიში');
  }

  xArr = [];
  yArr = [];

  //=============== chnage positionX
  if (nextPositionX < positionX) {
    while (positionX != nextPositionX) {
      positionX -= 1;
      if (this.figureFunctionService.checkFigure(positionX, positionY, app) && (this.figureFunctionService.getFigureColor(x, y, app) != this.figureFunctionService.getFigureColor(positionX, positionY, app))) {
        xArr = [...xArr, positionX];
        break;
      }
      if (this.figureFunctionService.checkFigure(positionX, positionY, app) && (this.figureFunctionService.getFigureColor(x, y, app) == this.figureFunctionService.getFigureColor(positionX, positionY, app))) {
        break;
      }
      xArr = [...xArr, positionX];
    }
    positionX = x;
  }

  if (nextPositionX > positionX) {
    while (positionX != nextPositionX) {
      positionX += 1;
      if (this.figureFunctionService.checkFigure(positionX, positionY, app) && (this.figureFunctionService.getFigureColor(x, y, app) != this.figureFunctionService.getFigureColor(positionX, positionY, app))) {
        xArr = [...xArr, positionX];
        break;
      }
      if (this.figureFunctionService.checkFigure(positionX, positionY, app) && (this.figureFunctionService.getFigureColor(x, y, app) == this.figureFunctionService.getFigureColor(positionX, positionY, app))) {
        break;
      }
      xArr = [...xArr, positionX];
    }
    positionX = x;
  }
  //=============== chnage positionY
  if (nextPositionY < positionY) {
    while (positionY != nextPositionY) {
      positionY -= 1;
      if (this.figureFunctionService.checkFigure(positionX, positionY, app) && (this.figureFunctionService.getFigureColor(x, y, app) != this.figureFunctionService.getFigureColor(positionX, positionY, app))) {
        yArr = [...yArr, positionY];
        break;
      }
      if (this.figureFunctionService.checkFigure(positionX, positionY, app) && (this.figureFunctionService.getFigureColor(x, y, app) == this.figureFunctionService.getFigureColor(positionX, positionY, app))) {
        break;
      }
      yArr = [...yArr, positionY];
    }
    positionY = y;
  }

  if (nextPositionY > positionY) {
    while (positionY != nextPositionY) {
      positionY += 1;
      if (this.figureFunctionService.checkFigure(positionX, positionY, app) && (this.figureFunctionService.getFigureColor(x, y, app) != this.figureFunctionService.getFigureColor(positionX, positionY, app))) {
        yArr = [...yArr, positionY];
        break;
      }
      if (this.figureFunctionService.checkFigure(positionX, positionY, app) && (this.figureFunctionService.getFigureColor(x, y, app) == this.figureFunctionService.getFigureColor(positionX, positionY, app))) {
        break;
      }
      yArr = [...yArr, positionY];
    }
    positionY = y;
  }
  // ============= push valid positions in Araay
  for (let i = 0; i < xArr.length; i++) {
    returnArr = [...returnArr, {
      positionX: xArr[i],
      positionY: y
    }]
  }
  for (let i = 0; i < yArr.length; i++) {
    returnArr = [...returnArr, {
      positionX: x,
      positionY: yArr[i]
    }]
  }
  if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app)) {
    if (Object.values(app).find(x => x.color == this.figureFunctionService.getOpponentColor(positionX, positionY, app) && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
      let deleteFigure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
      let figureName: string = deleteFigure.name;
      app.lastKilledFigure = {
        killedName: figureName,
        killedColor: deleteFigure.color,
        killedPositionX: deleteFigure.positionX,
        killedPositionY: deleteFigure.positionY
      };
      if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        app.isKillTarget = true;
        this.figureFunctionService.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
      }
    }
  }
  return returnArr;
}

}
