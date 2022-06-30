import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { Figure, Position } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class FigureRulesService {


  constructor() { }

  checkFigure(positionX: number, positionY: number, app: AppComponent): boolean {
    if (Object.values(app).find(x => x.positionX == positionX && x.positionY == positionY && x.name)) {
      return true;
    }
    return false;
  }

  scannFigure(figure: Figure, positionX: number, positionY: number): boolean {
    return figure.positionX == positionX && figure.positionY == positionY
  }

  getOpponentColor(positionX: number, positionY: number, app: AppComponent): string {
    let color: string = '';
    if (Object.values(app).find(x => x.color == 'white' && x.positionX == positionX && x.positionY == positionY)) {
      color = 'black';
    }
    else if (Object.values(app).find(x => x.color == 'black' && x.positionX == positionX && x.positionY == positionY)) {
      color = 'white';
    }
    return color;
  }

  getFigureColor(positionX: number, positionY: number, app: AppComponent): string {
    let color: string = '';
    if (Object.values(app).find(x => x.color == 'white' && x.positionX == positionX && x.positionY == positionY)) {
      color = 'white';
    }
    else if (Object.values(app).find(x => x.color == 'black' && x.positionX == positionX && x.positionY == positionY)) {
      color = 'black';
    }
    return color;
  }

  changeFigure(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    if (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app)) {
      app.nextPosition = {
        positionX: nextPositionX,
        positionY: nextPositionY
      }
    }
  }

  deleteOrRestoreFigure(deleted: boolean, restore: boolean, figureName: string, app: AppComponent) {

    if (figureName == app.whitePawn1.name) {
      if (deleted) {
        app.whitePawn1 = {
          name: 'pawn',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whitePawn1]
      }
      if (restore) {
        app.whitePawn1 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    }
    if (figureName == app.whitePawn2.name) {
      if (deleted) {
        app.whitePawn2 = {
          name: 'pawn',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whitePawn2]
      }
      if (restore) {
        app.whitePawn2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whitePawn3.name) {
      if (deleted) {
        app.whitePawn3 = {
          name: 'pawn',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whitePawn3]
      }
      if (restore) {
        app.whitePawn3 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whitePawn4.name) {
      if (deleted) {
        app.whitePawn4 = {
          name: 'pawn',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whitePawn4]
      }
      if (restore) {
        app.whitePawn4 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whitePawn5.name) {
      if (deleted) {
        app.whitePawn5 = {
          name: 'pawn',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whitePawn5]
      }
      if (restore) {
        app.whitePawn5 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whitePawn6.name) {
      if (deleted) {
        app.whitePawn6 = {
          name: 'pawn',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whitePawn6]
      }
      if (restore) {
        app.whitePawn6 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whitePawn7.name) {
      if (deleted) {
        app.whitePawn7 = {
          name: 'pawn',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whitePawn7]
      }
      if (restore) {
        app.whitePawn7 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whitePawn8.name) {
      if (deleted) {
        app.whitePawn8 = {
          name: 'pawn',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whitePawn8]
      }
      if (restore) {
        app.whitePawn8 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whiteKing.name) {
      if (deleted) {
        app.whiteKing = {
          name: 'king',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whiteKing]
      }
      if (restore) {
        app.whiteKing = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }

    } if (figureName == app.whiteQueen.name) {
      if (deleted) {
        app.whiteQueen = {
          name: 'queen',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whiteQueen]
      }
      if (restore) {
        app.whiteQueen = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whiteRock.name) {
      if (deleted) {
        app.whiteRock = {
          name: 'rock',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whiteRock]
      }
      if (restore) {
        app.whiteRock = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whiteRock2.name) {
      if (deleted) {
        app.whiteRock2 = {
          name: 'rock',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whiteRock2]
      }
      if (restore) {
        app.whiteRock2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whiteKnight.name) {
      if (deleted) {
        app.whiteKnight = {
          name: 'knight',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whiteKnight]
      }
      if (restore) {
        app.whiteKnight = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whiteKnight2.name) {
      if (deleted) {
        app.whiteKnight2 = {
          name: 'knight',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whiteKnight2]
      }
      if (restore) {
        app.whiteKnight2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whiteBishop.name) {
      if (deleted) {
        app.whiteBishop = {
          name: 'bishop',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whiteBishop]
      }
      if (restore) {
        app.whiteBishop = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.whiteBishop2.name) {
      if (deleted) {
        app.whiteBishop2 = {
          name: 'bishop',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, app.whiteBishop2]
      }
      if (restore) {
        app.whiteBishop2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    }

    // ----------------------
    if (figureName == app.blackPawn1.name) {
      if (deleted) {
        app.blackPawn1 = {
          name: 'black-pawn',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackPawn1]
      }
      if (restore) {
        app.blackPawn1 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    }
    if (figureName == app.blackPawn2.name) {
      if (deleted) {
        app.blackPawn2 = {
          name: 'black-pawn',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackPawn2]
      }
      if (restore) {
        app.blackPawn2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackPawn3.name) {
      if (deleted) {
        app.blackPawn3 = {
          name: 'black-pawn',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackPawn3]
      }
      if (restore) {
        app.blackPawn3 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackPawn4.name) {
      if (deleted) {
        app.blackPawn4 = {
          name: 'black-pawn',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackPawn4]
      }
      if (restore) {
        app.blackPawn4 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackPawn5.name) {
      if (deleted) {
        app.blackPawn5 = {
          name: 'black-pawn',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackPawn5]
      }
      if (restore) {

        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 2);
        app.blackPawn5 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackPawn6.name) {
      if (deleted) {
        app.blackPawn6 = {
          name: 'black-pawn',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackPawn6]
      }
      if (restore) {
        app.blackPawn6 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackPawn7.name) {
      if (deleted) {
        app.blackPawn7 = {
          name: 'black-pawn',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackPawn7]
      }
      if (restore) {
        app.blackPawn7 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackPawn8.name) {
      if (deleted) {
        app.blackPawn8 = {
          name: 'black-pawn',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackPawn8]
      }
      if (restore) {
        app.blackPawn8 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    }
    // -----------------
    if (figureName == app.blackKing.name) {
      if (deleted) {
        app.blackKing = {
          name: app.blackKing.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackKing]
      }
      if (restore) {
        app.blackKing = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackQueen.name) {
      if (deleted) {
        app.blackQueen = {
          name: app.blackQueen.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackQueen]
      }
      if (restore) [
        app.blackQueen = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      ]
    } if (figureName == app.blackRock.name) {
      if (deleted) {
        app.blackRock = {
          name: app.blackRock.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackRock]
      }
      if (restore) {
        app.blackRock = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackRock2.name) {
      if (deleted) {
        app.blackRock2 = {
          name: app.blackRock.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackRock2]
      }
      if (restore) {
        app.blackRock2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackKnight.name) {
      if (deleted) {
        app.blackKnight = {
          name: app.blackKnight.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackKnight]
      }
      if (restore) {
        app.blackKnight = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackKnight2.name) {
      if (deleted) {
        app.blackKnight2 = {
          name: app.blackKnight.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackKnight2]
      }
      if (restore) {
        app.blackKnight2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackBishop.name) {
      if (deleted) {
        app.blackBishop = {
          name: app.blackBishop.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackBishop]
      }
      if (restore) {
        app.blackBishop = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    } if (figureName == app.blackBishop2.name) {
      if (deleted) {
        app.blackBishop2 = {
          name: app.blackBishop.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackBishop2]
      }
      if (restore) {
        app.blackBishop2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
      }
    }
  }

  changePosition(positionX: number, positionY: number, app: AppComponent) {
    if (this.checkFigure(positionX, positionY, app)) {
      if (!this.checkFigure(app.nextPosition.positionX, app.nextPosition.positionY, app)) {
        app.nextPosition = {
          positionX: Object.values(app).find(x => x.positionX == positionX && x.positionY == positionY).positionX,
          positionY: Object.values(app).find(x => x.positionX == positionX && x.positionY == positionY).positionY
        }
      }

    } if (!this.checkFigure(positionX, positionY, app) || this.checkFigure(positionX, positionY, app)) {
      if (this.scannFigure(app.whiteKing, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKing(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteKing = {
            name: 'white-king',
            color: 'white',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteRock = {
            name: 'white-rock',
            color: 'white',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteBishop = {
            name: 'white-bishop',
            color: 'white',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteKnight = {
            name: 'white-knight',
            color: 'white',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteQueen = {
            name: 'white-queen',
            color: 'white',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      }
      // -----------------------------
      else if (this.scannFigure(app.whiteRock2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteRock2 = {
            name: 'white-rock2',
            color: 'white',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteBishop2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteBishop2 = {
            name: 'white-bishop2',
            color: 'white',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteKnight2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteKnight2 = {
            name: 'white-knight2',
            color: 'white',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      }
      // ----------------------------------------------------------------------------------------------
      else if (this.scannFigure(app.blackKing, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKing(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackKing = {
            name: 'black-king',
            color: 'black',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackRock = {
            name: 'black-rock',
            color: 'black',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackBishop = {
            name: 'black-bishop',
            color: 'black',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackKnight = {
            name: 'black-knight',
            color: 'black',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackQueen = {
            name: 'black-queen',
            color: 'black',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      }

      // -----------------------------
      else if (this.scannFigure(app.blackRock2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackRock2 = {
            name: 'black-rock2',
            color: 'black',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackBishop2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackBishop2 = {
            name: 'black-bishop2',
            color: 'black',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackKnight2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackKnight2 = {
            name: 'black-knight2',
            color: 'black',
            positionX,
            positionY
          }
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn1, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn1 = {
            name: 'black-pawn1',
            color: 'black',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      }
      else if (this.scannFigure(app.blackPawn2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn2 = {
            name: 'black-pawn2',
            color: 'black',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn3, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn3 = {
            name: 'black-pawn3',
            color: 'black',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn4, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn4 = {
            name: 'black-pawn4',
            color: 'black',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn5, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn5 = {
            name: 'black-pawn5',
            color: 'black',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn6, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn6 = {
            name: 'black-pawn6',
            color: 'black',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn7, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn7 = {
            name: 'black-pawn7',
            color: 'black',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn8, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn8 = {
            name: 'black-pawn8',
            color: 'black',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      }
      // ----------------------------------------------------------
      else if (this.scannFigure(app.whitePawn1, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn1
          app.whitePawn1 = {
            name: 'white-pawn1',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app)) {
            app.whitePawn1 = saveFigure;
            this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            console.log('ქიში გეხსნება მეგობარო');
          }
          return;
        } else {
          console.log('invalid position')
        }
      }
      else if (this.scannFigure(app.whitePawn2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn2 = {
            name: 'white-pawn2',
            color: 'white',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn3, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn3;
          app.whitePawn3 = {
            name: 'white-pawn3',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app)) {
            app.whitePawn3 = saveFigure;
            this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            console.log('ქიში გეხსნება მეგობარო');
          }
          return;
        } else {
          console.log('invalid position');
        }
      } else if (this.scannFigure(app.whitePawn4, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn4;
          app.whitePawn4 = {
            name: 'white-pawn4',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app)) {
            app.whitePawn4 = saveFigure;
            this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            console.log('ქიში გეხსნება მეგობარო');
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn5, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn5 = {
            name: 'white-pawn5',
            color: 'white',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn6, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn6 = {
            name: 'white-pawn6',
            color: 'white',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn7, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn7 = {
            name: 'white-pawn7',
            color: 'white',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }

      } else if (this.scannFigure(app.whitePawn8, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn8 = {
            name: 'white-pawn8',
            color: 'white',
            positionX,
            positionY
          };
          return;
        } else {
          console.log('invalid position')
        }
      }
    }
  }

  // rules functions
  checkPawn(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
    let returnArr: Position[] = [];
    let canKill: boolean = true;
    if (nextPositionX - positionX != 1 && !(positionX == 2 && nextPositionX - positionX == 2)) {
      return [];
    }
    if (nextPositionX == 8) {
      app.chooseWhite = true;
    }
    if (nextPositionX == positionX + 2 && nextPositionY == positionY) { canKill = false };
    if (nextPositionX == positionX + 1 && nextPositionY == positionY) { canKill = false };
    if (canKill) {
      if (this.checkFigure(nextPositionX, nextPositionY, app)) {
        if (Object.values(app).find(x => x.color == 'black' && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
          if (!this.checkScanner(app)) {
            let deleteFigure: Figure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
            let figureName: string = deleteFigure.name;
            if (parseInt(deleteFigure.name?.split('')[deleteFigure.name.split('').length - 1])) {
              figureName = deleteFigure.name?.split('').splice(0, deleteFigure.name.split('').length - 1).join('');
            }
            app.lastKilledFigure = {
              killedName: figureName,
              killedColor: deleteFigure.color,
              killedPositionX: deleteFigure.positionX,
              killedPositionY: deleteFigure.positionY
            }
            this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
            returnArr = [...returnArr, {
              positionX: nextPositionX,
              positionY: nextPositionY
            }]
          } else if (this.checkScanner(app)) {
            console.log('ქიში გეხსნება');
          }
        }
      }
    }
    if (!this.checkFigure(nextPositionX, nextPositionY, app)) {
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
    }

    return returnArr;
  }

  checkBlackkPawn(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
    let returnArr: Position[] = [];
    let canKill: boolean = true;
    if (nextPositionX - positionX != -1 && !(positionX == 7 && nextPositionX - positionX == -2)) {
      return [];
    }
    if (nextPositionX == positionX + 2 && nextPositionY == positionY) { canKill = false };
    if (nextPositionX == positionX + 1 && nextPositionY == positionY) { canKill = false };
    if (canKill) {
      if (this.checkFigure(nextPositionX, nextPositionY, app)) {
        if (Object.values(app).find(x => x.color == 'white' && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
          if (!this.checkScanner(app)) {
            let deleteFigure: Figure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
            let figureName: string = deleteFigure.name;
            if (parseInt(deleteFigure.name?.split('')[deleteFigure.name.split('').length - 1])) {
              figureName = deleteFigure.name?.split('').splice(0, deleteFigure.name.split('').length - 1).join('');
            }
            app.lastKilledFigure = {
              killedName: figureName,
              killedColor: deleteFigure.color,
              killedPositionX: deleteFigure.positionX,
              killedPositionY: deleteFigure.positionY
            }
            this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
            returnArr = [...returnArr, {
              positionX: nextPositionX,
              positionY: nextPositionY
            }]
          } else if (this.checkScanner(app)) {
            console.log('ქიში გეხსნება');
          }
        }
      }
    }
    if (!this.checkFigure(nextPositionX, nextPositionY, app)) {
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
    }
    return returnArr;
  }

  checkQueen(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
    let returnArr: Position[] = [];
    returnArr = [
      ...returnArr,
      ...this.checkRock(positionX, positionY, nextPositionX, nextPositionY, app),
      ...this.checkBishop(positionX, positionY, nextPositionX, nextPositionY, app)
    ];
    return returnArr;
  }



  checkKing(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
    let returnArr: Position[] = [];
    let opponnetColor: string = this.getOpponentColor(positionX, positionY, app);

    if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app))) {
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
    if (this.checkFigure(nextPositionX, nextPositionY, app)) {
      if (Object.values(app).find(x => x.color == opponnetColor && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        let deleteFigure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
        if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
          this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
        }
      }
    }
    return returnArr;
  }

  checkBishop(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
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
      this.checkFigure(nextPositionX, nextPositionY, app)
      &&
      (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app))
    ) {
      return [];
    }

    for (let i = 1; i <= 8; i++) {

      if (isFirstEndTopLeftDiagonal) {
        if (this.checkFigure(nextPositionX - i, nextPositionY - i, app)) {
          endTopLeftDiagonal = true;
          nextArr = [...nextArr, {
            positionX: nextPositionX - i,
            positionY: nextPositionY - i
          }];
          isFirstEndTopLeftDiagonal = false;
        }
      }
      if (isFirstEndBottomRightDiagonal) {
        if (this.checkFigure(nextPositionX + i, nextPositionY + i, app)) {
          endBottomRightDiagonal = true;
          nextArr = [...nextArr, {
            positionX: nextPositionX + i,
            positionY: nextPositionY + i
          }];
          isFirstEndBottomRightDiagonal = false;
        }
      }
      if (isFirstEndBottomLeftDiagonal) {
        if (this.checkFigure(nextPositionX + i, nextPositionY - i, app)) {
          endBottomLeftDiagonal = true;
          nextArr = [...nextArr, {
            positionX: nextPositionX + i,
            positionY: nextPositionY - i
          }];
          isFirstEndBottomLeftDiagonal = false;
        }
      }
      if (isFirstEndTopRightDiagonal) {
        if (this.checkFigure(nextPositionX - i, nextPositionY + i, app)) {
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

    if (nextArr.find(x => (x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) && this.getFigureColor(positionX, positionY, app) == 'black') {
      console.log('ქიში');
    }

    if (nextArr.find(x => (x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) && this.getFigureColor(positionX, positionY, app) == 'white') {
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
        if (this.checkFigure(positionX - i, positionY - i, app)) {
          endTopLeftDiagonal = true;
          returnArr = [...returnArr, {
            positionX: positionX - i,
            positionY: positionY - i
          }];
          isFirstEndTopLeftDiagonal = false;
        }
      }
      if (isFirstEndBottomRightDiagonal) {
        if (this.checkFigure(positionX + i, positionY + i, app)) {
          endBottomRightDiagonal = true;
          returnArr = [...returnArr, {
            positionX: positionX + i,
            positionY: positionY + i
          }];
          isFirstEndBottomRightDiagonal = false;
        }
      }
      if (isFirstEndBottomLeftDiagonal) {
        if (this.checkFigure(positionX + i, positionY - i, app)) {
          endBottomLeftDiagonal = true;
          returnArr = [...returnArr, {
            positionX: positionX + i,
            positionY: positionY - i
          }];
          isFirstEndBottomLeftDiagonal = false;
        }
      }
      if (isFirstEndTopRightDiagonal) {
        if (this.checkFigure(positionX - i, positionY + i, app)) {
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

    if (this.checkFigure(nextPositionX, nextPositionY, app)) {
      if (Object.values(app).find(x => x.color == this.getOpponentColor(positionX, positionY, app) && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        let deleteFigure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
        if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
          this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
        }
      }
    }
    return returnArr;
  }

  checkKnight(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
    if (
      this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app))) {
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

    if (nextArr.find(x => (x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) && this.getFigureColor(positionX, positionY, app) == 'black') {
      console.log('ქიში');
    }

    if (nextArr.find(x => (x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) && this.getFigureColor(positionX, positionY, app) == 'white') {
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
    if (this.checkFigure(nextPositionX, nextPositionY, app)) {
      if (Object.values(app).find(x => x.color == this.getOpponentColor(positionX, positionY, app) && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        let deleteFigure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
        if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
          this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
        }
      }
    }
    return returnArr;
  }


  checkRock(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
    let returnArr: Position[] = [];
    let nextArr: Position[] = [];
    let xArr: number[] = [];
    let yArr: number[] = [];
    let x = positionX;
    let y = positionY;
    let nextX = nextPositionX;
    let nextY = nextPositionY;

    if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app))) {
      return [];
    }

    //================ make nextArr
    while (nextPositionX != 1) {
      nextPositionX -= 1;
      if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) != this.getFigureColor(nextPositionX, nextPositionY, app))) {
        xArr = [...xArr, nextPositionX];
        break;
      }
      if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app))) {
        break;
      }
      xArr = [...xArr, nextPositionX];
    }
    nextPositionX = nextX;

    while (nextPositionX != 8) {
      nextPositionX += 1;
      if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) != this.getFigureColor(nextPositionX, nextPositionY, app))) {
        xArr = [...xArr, nextPositionX];
        break;
      }
      if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app))) {
        xArr = [...xArr, nextPositionX];
        break;
      }
      xArr = [...xArr, nextPositionX];
    }
    nextPositionX = nextX;

    //=============== chnage positionY
    while (nextPositionY != 1) {
      nextPositionY -= 1;
      if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) != this.getFigureColor(nextPositionX, nextPositionY, app))) {
        yArr = [...yArr, nextPositionY];
        break;
      }
      if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app))) {
        break;
      }
      yArr = [...yArr, nextPositionY];
    }
    nextPositionY = nextY;

    while (nextPositionY != 8) {
      nextPositionY += 1;
      if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) != this.getFigureColor(nextPositionX, nextPositionY, app))) {
        yArr = [...yArr, nextPositionY];
        break;
      }
      if (this.checkFigure(nextPositionX, nextPositionY, app) && (this.getFigureColor(positionX, positionY, app) == this.getFigureColor(nextPositionX, nextPositionY, app))) {
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
    if (nextArr.find(x => (x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) && this.getFigureColor(positionX, positionY, app) == 'black') {
      console.log('ქიში');
    }

    if (nextArr.find(x => (x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) && this.getFigureColor(positionX, positionY, app) == 'white') {
      console.log('ქიში');
    }

    xArr = [];
    yArr = [];

    //=============== chnage positionX
    if (nextPositionX < positionX) {
      while (positionX != nextPositionX) {
        positionX -= 1;
        if (this.checkFigure(positionX, positionY, app) && (this.getFigureColor(x, y, app) != this.getFigureColor(positionX, positionY, app))) {
          xArr = [...xArr, positionX];
          break;
        }
        if (this.checkFigure(positionX, positionY, app) && (this.getFigureColor(x, y, app) == this.getFigureColor(positionX, positionY, app))) {
          break;
        }
        xArr = [...xArr, positionX];
      }
      positionX = x;
    }

    if (nextPositionX > positionX) {
      while (positionX != nextPositionX) {
        positionX += 1;
        if (this.checkFigure(positionX, positionY, app) && (this.getFigureColor(x, y, app) != this.getFigureColor(positionX, positionY, app))) {
          xArr = [...xArr, positionX];
          break;
        }
        if (this.checkFigure(positionX, positionY, app) && (this.getFigureColor(x, y, app) == this.getFigureColor(positionX, positionY, app))) {
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
        if (this.checkFigure(positionX, positionY, app) && (this.getFigureColor(x, y, app) != this.getFigureColor(positionX, positionY, app))) {
          yArr = [...yArr, positionY];
          break;
        }
        if (this.checkFigure(positionX, positionY, app) && (this.getFigureColor(x, y, app) == this.getFigureColor(positionX, positionY, app))) {
          break;
        }
        yArr = [...yArr, positionY];
      }
      positionY = y;
    }

    if (nextPositionY > positionY) {
      while (positionY != nextPositionY) {
        positionY += 1;
        if (this.checkFigure(positionX, positionY, app) && (this.getFigureColor(x, y, app) != this.getFigureColor(positionX, positionY, app))) {
          yArr = [...yArr, positionY];
          break;
        }
        if (this.checkFigure(positionX, positionY, app) && (this.getFigureColor(x, y, app) == this.getFigureColor(positionX, positionY, app))) {
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
    if (this.checkFigure(nextPositionX, nextPositionY, app)) {
      if (Object.values(app).find(x => x.color == this.getOpponentColor(positionX, positionY, app) && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
        let deleteFigure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
        if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
          this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
        }
      }
    }
    return returnArr;
  }

  checkScanner(app: AppComponent) {
    let kingPositionX: number;
    let kingPositionY: number;
    let isCheck: boolean = false;

    kingPositionX = app.whiteKing.positionX;
    kingPositionY = app.whiteKing.positionY;


    //  ===================================check white king
    // queen and rock
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX - i, kingPositionY, app)) {
        if (this.getFigureColor(kingPositionX - i, kingPositionY, app) == 'white') { break };
        if (((kingPositionX - i) == app.blackQueen.positionX && kingPositionY == app.blackQueen.positionY)
          ||
          ((kingPositionX - i) == app.blackRock.positionX && kingPositionY == app.blackRock.positionY)
          ||
          ((kingPositionX - i) == app.blackRock2.positionX && kingPositionY == app.blackRock2.positionY)
        ) {
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX + i, kingPositionY, app)) {
        if (this.getFigureColor(kingPositionX + i, kingPositionY, app) == 'white') { break };
        if (((kingPositionX + i) == app.blackQueen.positionX && kingPositionY == app.blackQueen.positionY)
          ||
          ((kingPositionX + i) == app.blackRock.positionX && kingPositionY == app.blackRock.positionY)
          ||
          ((kingPositionX + i) == app.blackRock2.positionX && kingPositionY == app.blackRock2.positionY)
        ) {
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX, kingPositionY - i, app)) {
        if (this.getFigureColor(kingPositionX, kingPositionY - i, app) == 'white') { break };
        if ((kingPositionX == app.blackQueen.positionX && (kingPositionY - i) == app.blackQueen.positionY)
          ||
          (kingPositionX == app.blackRock.positionX && (kingPositionY - i) == app.blackRock.positionY)
          ||
          (kingPositionX == app.blackRock2.positionX && (kingPositionY - i) == app.blackRock2.positionY)
        ) {
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX, kingPositionY + i, app)) {
        if (this.getFigureColor(kingPositionX, kingPositionY + i, app) == 'white') { break };
        if ((kingPositionX == app.blackQueen.positionX && (kingPositionY + i) == app.blackQueen.positionY)
          ||
          (kingPositionX == app.blackRock.positionX && (kingPositionY + i) == app.blackRock.positionY)
          ||
          (kingPositionX == app.blackRock2.positionX && (kingPositionY + i) == app.blackRock2.positionY)
        ) {
          return true;
        }
      }
    }
    // queen and bishop
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX + i, kingPositionY + i, app)) {
        if (this.getFigureColor(kingPositionX + i, kingPositionY + i, app) == 'white') { break };
        if ((kingPositionX + i == app.blackQueen.positionX && (kingPositionY + i) == app.blackQueen.positionY)
          ||
          (kingPositionX + i == app.blackBishop.positionX && (kingPositionY + i) == app.blackBishop.positionY)
          ||
          (kingPositionX + i == app.blackBishop2.positionX && (kingPositionY + i) == app.blackBishop2.positionY)
        ) {
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX - i, kingPositionY - i, app)) {
        if (this.getFigureColor(kingPositionX - i, kingPositionY - i, app) == 'white') { break };
        if ((kingPositionX - i == app.blackQueen.positionX && (kingPositionY - i) == app.blackQueen.positionY)
          ||
          (kingPositionX - i == app.blackBishop.positionX && (kingPositionY - i) == app.blackBishop.positionY)
          ||
          (kingPositionX - i == app.blackBishop2.positionX && (kingPositionY - i) == app.blackBishop2.positionY)
        ) {
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX - i, kingPositionY + i, app)) {
        if (this.getFigureColor(kingPositionX - i, kingPositionY + i, app) == 'white') { break };
        if ((kingPositionX - i == app.blackQueen.positionX && (kingPositionY + i) == app.blackQueen.positionY)
          ||
          (kingPositionX - i == app.blackBishop.positionX && (kingPositionY + i) == app.blackBishop.positionY)
          ||
          (kingPositionX - i == app.blackBishop2.positionX && (kingPositionY + i) == app.blackBishop2.positionY)
        ) {
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX + i, kingPositionY - i, app)) {
        if (this.getFigureColor(kingPositionX + i, kingPositionY - i, app) == 'white') { break };
        if ((kingPositionX + i == app.blackQueen.positionX && (kingPositionY - i) == app.blackQueen.positionY)
          ||
          (kingPositionX + i == app.blackBishop.positionX && (kingPositionY - i) == app.blackBishop.positionY)
          ||
          (kingPositionX + i == app.blackBishop2.positionX && (kingPositionY - i) == app.blackBishop2.positionY)
        ) {
          return true;
        }
      }
    }
    return false;
  }
}