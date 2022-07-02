import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { ChooseFigure, Figure, Position } from './app.model';

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
      return figure.positionX == positionX && figure.positionY == positionY;
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
          name: 'white-pawn1',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'pawn']
      }
      if (restore) {
        app.whitePawn1 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        };
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    }
    if (figureName == app.whitePawn2.name) {
      if (deleted) {
        app.whitePawn2 = {
          name: 'white-pawn2',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'pawn']
      }
      if (restore) {
        app.whitePawn2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        };
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whitePawn3.name) {
      if (deleted) {
        app.whitePawn3 = {
          name: 'white-pawn3',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'pawn']
      }
      if (restore) {
        app.whitePawn3 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        };
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whitePawn4.name) {
      if (deleted) {
        app.whitePawn4 = {
          name: 'white-pawn4',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'pawn']
      }
      if (restore) {
        app.whitePawn4 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whitePawn5.name) {
      if (deleted) {
        app.whitePawn5 = {
          name: 'white-pawn5',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'pawn']
      }
      if (restore) {
        app.whitePawn5 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whitePawn6.name) {
      if (deleted) {
        app.whitePawn6 = {
          name: 'white-pawn6',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'pawn']
      }
      if (restore) {
        app.whitePawn6 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whitePawn7.name) {
      if (deleted) {
        app.whitePawn7 = {
          name: 'white-pawn7',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'pawn']
      }
      if (restore) {
        app.whitePawn7 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whitePawn8.name) {
      if (deleted) {
        app.whitePawn8 = {
          name: 'white-pawn8',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'pawn']
      }
      if (restore) {
        app.whitePawn8 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whiteKing.name) {
      if (deleted) {
        app.whiteKing = {
          name: 'white-king',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'king']
      }
      if (restore) {
        app.whiteKing = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }

    } if (figureName == app.whiteQueen.name) {
      if (deleted) {
        app.whiteQueen = {
          name: 'white-queen',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'queen']
      }
      if (restore) {
        app.whiteQueen = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whiteRock.name) {
      if (deleted) {
        app.whiteRock = {
          name: 'white-rock',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'rock']
      }
      if (restore) {
        app.whiteRock = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whiteRock2.name) {
      if (deleted) {
        app.whiteRock2 = {
          name: 'white-rock2',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'rock']
      }
      if (restore) {
        app.whiteRock2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whiteKnight.name) {
      if (deleted) {
        app.whiteKnight = {
          name: 'white-knight',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure,'knight']
      }
      if (restore) {
        app.whiteKnight = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whiteKnight2.name) {
      if (deleted) {
        app.whiteKnight2 = {
          name: 'white-knight2',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'knight']
      }
      if (restore) {
        app.whiteKnight2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whiteBishop.name) {
      if (deleted) {
        app.whiteBishop = {
          name: 'white-bishop',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'bishop']
      }
      if (restore) {
        app.whiteBishop = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    } if (figureName == app.whiteBishop2.name) {
      if (deleted) {
        app.whiteBishop2 = {
          name: 'white-bishop2',
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'bishop']
      }
      if (restore) {
        app.whiteBishop2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    }

    // ----------------------
    if (figureName == app.blackPawn1.name) {
      if (deleted) {
        app.blackPawn1 = {
          name: 'black-pawn1',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-pawn']
      }
      if (restore) {
        app.blackPawn1 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    }
    if (figureName == app.blackPawn2.name) {
      if (deleted) {
        app.blackPawn2 = {
          name: 'black-pawn2',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-pawn']
      }
      if (restore) {
        app.blackPawn2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackPawn3.name) {
      if (deleted) {
        app.blackPawn3 = {
          name: 'black-pawn3',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-pawn']
      }
      if (restore) {
        app.blackPawn3 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackPawn4.name) {
      if (deleted) {
        app.blackPawn4 = {
          name: 'black-pawn4',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-pawn']
      }
      if (restore) {
        app.blackPawn4 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackPawn5.name) {
      if (deleted) {
        app.blackPawn5 = {
          name: 'black-pawn5',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-pawn']
      }
      if (restore) {
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 2);
        app.blackPawn5 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackPawn6.name) {
      if (deleted) {
        app.blackPawn6 = {
          name: 'black-pawn6',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-pawn']
      }
      if (restore) {
        app.blackPawn6 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackPawn7.name) {
      if (deleted) {
        app.blackPawn7 = {
          name: 'black-pawn7',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-pawn']
      }
      if (restore) {
        app.blackPawn7 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackPawn8.name) {
      if (deleted) {
        app.blackPawn8 = {
          name: 'black-pawn8',
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-pawn']
      }
      if (restore) {
        app.blackPawn8 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
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
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackKing.name]
      }
      if (restore) {
        app.blackKing = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackQueen.name) {
      if (deleted) {
        app.blackQueen = {
          name: app.blackQueen.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackQueen.name]
      }
      if (restore) {
        app.blackQueen = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackRock.name) {
      if (deleted) {
        app.blackRock = {
          name: app.blackRock.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackRock.name]
      }
      if (restore) {
        app.blackRock = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackRock2.name) {
      if (deleted) {
        app.blackRock2 = {
          name: app.blackRock2.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackRock.name]
      }
      if (restore) {
        app.blackRock2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackKnight.name) {
      if (deleted) {
        app.blackKnight = {
          name: app.blackKnight.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackKnight.name]
      }
      if (restore) {
        app.blackKnight = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackKnight2.name) {
      if (deleted) {
        app.blackKnight2 = {
          name: app.blackKnight2.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackKnight.name]
      }
      if (restore) {
        app.blackKnight2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackBishop.name) {
      if (deleted) {
        app.blackBishop = {
          name: app.blackBishop.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackBishop.name]
      }
      if (restore) {
        app.blackBishop = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    } if (figureName == app.blackBishop2.name) {
      if (deleted) {
        app.blackBishop2 = {
          name: app.blackBishop2.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, app.blackBishop.name]
      }
      if (restore) {
        app.blackBishop2 = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    }
    if (figureName == app.chooseQueen.name) {
      if (deleted) {
        app.chooseQueen = {
          name: app.chooseQueen.name,
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'queen']
      }
      if (restore) {
        app.chooseQueen = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    }
    if (figureName == app.chooseBlackQueen.name) {
      if (deleted) {
        app.chooseBlackQueen = {
          name: app.chooseBlackQueen.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'black-queen']
      }
      if (restore) {
        app.chooseBlackQueen = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    }
    if (figureName == app.chooseRock.name) {
      if (deleted) {
        app.chooseRock = {
          name: app.chooseRock.name,
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'rock']
      }
      if (restore) {
        app.chooseRock = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    }
    if (figureName == app.chooseBlackRock.name) {
      if (deleted) {
        app.chooseBlackRock = {
          name: app.chooseBlackRock.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-rock']
      }
      if (restore) {
        app.chooseBlackRock = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    }
    if (figureName == app.chooseBishop.name) {
      if (deleted) {
        app.chooseBishop = {
          name: app.chooseBishop.name,
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'bishop']
      }
      if (restore) {
        app.chooseBishop = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    }
    if (figureName == app.chooseBlackBishop.name) {
      if (deleted) {
        app.chooseBlackBishop = {
          name: app.chooseBlackBishop.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-bishop']
      }
      if (restore) {
        app.chooseBlackBishop = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
      }
    }
    if (figureName == app.chooseKnight.name) {
      if (deleted) {
        app.chooseKnight = {
          name: app.chooseKnight.name,
          color: 'white',
          positionX: -1,
          positionY: -1
        }
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'knight']
      }
      if (restore) {
        app.chooseKnight = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedWhiteFigure.splice(app.deletedWhiteFigure.length - 1, 1);
      }
    }
    if (figureName == app.chooseBlackKnight.name) {
      if (deleted) {
        app.chooseBlackKnight = {
          name: app.chooseBlackKnight.name,
          color: 'black',
          positionX: -1,
          positionY: -1
        }
        app.deletedBlackFigure = [...app.deletedBlackFigure, 'black-knight']
      }
      if (restore) {
        app.chooseBlackKnight = {
          name: app.lastKilledFigure.killedName,
          color: app.lastKilledFigure.killedColor,
          positionX: app.lastKilledFigure.killedPositionX,
          positionY: app.lastKilledFigure.killedPositionY
        }
        app.deletedBlackFigure.splice(app.deletedBlackFigure.length - 1, 1);
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
          let saveFigure=app.whiteKing;
          app.whiteKing = {
            name: 'white-king',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whiteKing = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whiteRock;
          app.whiteRock = {
            name: 'white-rock',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whiteRock = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whiteBishop;
          app.whiteBishop = {
            name: 'white-bishop',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whiteBishop = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whiteKnight;
          app.whiteKnight = {
            name: 'white-knight',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whiteKnight = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whiteQueen;
          app.whiteQueen = {
            name: 'white-queen',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whiteQueen = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      }
      // -----------------------------
      else if (this.scannFigure(app.whiteRock2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whiteRock2;
          app.whiteRock2 = {
            name: 'white-rock2',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whiteRock2 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteBishop2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whiteBishop2;
          app.whiteBishop2 = {
            name: 'white-bishop2',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whiteBishop2 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteKnight2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whiteKnight2;
          app.whiteKnight2 = {
            name: 'white-knight2',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whiteKnight2 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      }
      // ----------------------------------------------------------------------------------------------
      else if (this.scannFigure(app.blackKing, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKing(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure=app.blackKing;
          app.blackKing = {
            name: 'black-king',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackKing = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackRock;
          app.blackRock = {
            name: 'black-rock',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackRock = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackBishop;
          app.blackBishop = {
            name: 'black-bishop',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackBishop = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackKnight;
          app.blackKnight = {
            name: 'black-knight',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackKnight = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackQueen;
          app.blackQueen = {
            name: 'black-queen',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackQueen = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      }

      // -----------------------------
      else if (this.scannFigure(app.blackRock2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackRock2;
          app.blackRock2 = {
            name: 'black-rock2',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackRock2 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackBishop2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackBishop2;
          app.blackBishop2 = {
            name: 'black-bishop2',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackBishop2 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackKnight2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackKnight2;
          app.blackKnight2 = {
            name: 'black-knight2',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackKnight2 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn1, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.blackPawn1.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackPawn1;
          app.blackPawn1 = {
            name: 'black-pawn1',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackPawn1 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }
      else if (this.scannFigure(app.blackPawn2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.blackPawn2.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackPawn2;
          app.blackPawn2 = {
            name: 'black-pawn2',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackPawn2 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn3, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.blackPawn3.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackPawn3;
          app.blackPawn3 = {
            name: 'black-pawn3',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackPawn3 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn4, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.blackPawn4.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackPawn4;
          app.blackPawn4 = {
            name: 'black-pawn4',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackPawn4 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn5, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.blackPawn5.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackPawn5;
          app.blackPawn5 = {
            name: 'black-pawn5',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackPawn5 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn6, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.blackPawn6.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackPawn6;
          app.blackPawn6 = {
            name: 'black-pawn6',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackPawn6 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn7, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.blackPawn7.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackPawn7;
          app.blackPawn7 = {
            name: 'black-pawn7',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackPawn7 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn8, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBlackkPawn(app.blackPawn8.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.blackPawn8;
          app.blackPawn8 = {
            name: 'black-pawn8',
            color: 'black',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.blackPawn8 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }
      // ----------------------------------------------------------
      else if (this.scannFigure(app.whitePawn1, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.whitePawn1.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn1
          app.whitePawn1 = {
            name: 'white-pawn1',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whitePawn1 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }
      else if (this.scannFigure(app.whitePawn2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.whitePawn2.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn2;
          app.whitePawn2 = {
            name: 'white-pawn2',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whitePawn2 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn3, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.whitePawn3.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn3;
          app.whitePawn3 = {
            name: 'white-pawn3',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whitePawn3 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position');
        }
      } else if (this.scannFigure(app.whitePawn4, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.whitePawn4.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn4;
          app.whitePawn4 = {
            name: 'white-pawn4',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whitePawn4 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn5, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.whitePawn5.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn5;
          app.whitePawn5 = {
            name: 'white-pawn5',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whitePawn5 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn6, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.whitePawn6.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn6;
          app.whitePawn6 = {
            name: 'white-pawn6',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whitePawn6 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn7, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.whitePawn7.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn7;
          app.whitePawn7 = {
            name: 'white-pawn7',
            color: 'white',
            positionX,
            positionY
          }
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whitePawn7 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }

      } else if (this.scannFigure(app.whitePawn8, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.whitePawn8.name,app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.whitePawn8;
          app.whitePawn8 = {
            name: 'white-pawn8',
            color: 'white',
            positionX,
            positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.whitePawn8 = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }
      // choose figure
      else if (this.scannFigure(app.chooseQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.chooseQueen;
          app.chooseQueen = {
            name: 'queen',
            color: 'white',
            positionX:positionX,
            positionY:positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.chooseQueen = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }else if (this.scannFigure(app.chooseBlackQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.chooseBlackQueen;
          app.chooseBlackQueen = {
            name: 'black-queen',
            color: 'black',
            positionX:positionX,
            positionY:positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.chooseBlackQueen = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }else if (this.scannFigure(app.chooseRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.chooseRock;
          app.chooseRock = {
            name: 'rock',
            color: 'white',
            positionX:positionX,
            positionY:positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.chooseRock = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }else if (this.scannFigure(app.chooseBlackRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.chooseBlackRock;
          app.chooseBlackRock = {
            name: 'black-rock',
            color: 'black',
            positionX:positionX,
            positionY:positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.chooseBlackRock = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }else if (this.scannFigure(app.chooseBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.chooseBishop;
          app.chooseBishop = {
            name: 'bishop',
            color: 'white',
            positionX:positionX,
            positionY:positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.chooseBishop = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }else if (this.scannFigure(app.chooseBlackBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.chooseBlackBishop;
          app.chooseBlackBishop = {
            name: 'black-bishop',
            color: 'black',
            positionX:positionX,
            positionY:positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.chooseBlackBishop = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }else if (this.scannFigure(app.chooseKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.chooseKnight;
          app.chooseKnight = {
            name: 'knight',
            color: 'white',
            positionX:positionX,
            positionY:positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'white') {
            app.chooseKnight = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }else if (this.scannFigure(app.chooseBlackKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          let saveFigure = app.chooseBlackKnight;
          app.chooseBlackKnight = {
            name: 'black-knight',
            color: 'black',
            positionX:positionX,
            positionY:positionY
          };
          if (this.checkScanner(app) && app.checkKing == 'black') {
            app.chooseBlackKnight = saveFigure;
            if (app.isKillTarget) {
              this.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
            console.log('ქიში გეხსნება მეგობარო');
          }
          app.isKillTarget = false;
          return;
        } else {
          console.log('invalid position')
        }
      }
    }
  }

  // rules functions
  checkPawn(pawnName:string,positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
    let returnArr: Position[] = [];
    let canKill: boolean = true;
    if (nextPositionX - positionX != 1 && !(positionX == 2 && nextPositionX - positionX == 2)) {
      
      return [];
    }
    if (nextPositionX == 8) {
      if(this.checkFigure(nextPositionX,nextPositionY,app) && nextPositionY==positionY){
        return [];
      }
      app.endPawn={
        pawnName,
        pawnPositionX:nextPositionX,
        pawnPositionY:nextPositionY
      }
      app.chooseWhite = true;
    }
    if (nextPositionX == positionX + 2 && nextPositionY == positionY) { canKill = false };
    if (nextPositionX == positionX + 1 && nextPositionY == positionY) { canKill = false };
    if (canKill) {
      if (this.checkFigure(nextPositionX, nextPositionY, app)
        &&
        (
          (nextPositionX - positionX == 1 && nextPositionY - positionY == 1)
          ||
          (nextPositionX - positionX == 1 && nextPositionY - positionY == -1)
        )
      ) {
        if (Object.values(app).find(x => x.color == 'black' && x.positionX == nextPositionX && x.positionY == nextPositionY)) {
          if (!this.checkScanner(app)) {
            app.isKillTarget = true;
            let deleteFigure: Figure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
            let figureName: string = deleteFigure.name;
            // if (parseInt(deleteFigure.name?.split('')[deleteFigure.name.split('').length - 1])) {
            //   figureName = deleteFigure.name?.split('').splice(0, deleteFigure.name.split('').length - 1).join('');
            // }
            app.lastKilledFigure = {
              killedName:  figureName,
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

  checkBlackkPawn(pawnName:string,positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    this.changeFigure(positionX, positionY, nextPositionX, nextPositionY, app);
    let returnArr: Position[] = [];
    let canKill: boolean = true;
    if (nextPositionX - positionX != -1 && !(positionX == 7 && nextPositionX - positionX == -2)) {
      return [];
    }

    if (nextPositionX == 1) {
      if(this.checkFigure(nextPositionX,nextPositionY,app) && nextPositionY==positionY){
        return [];
      }
      app.endPawn={
        pawnName,
        pawnPositionX:nextPositionX,
        pawnPositionY:nextPositionY
      }
      app.chooseBlack = true;
    }

    if (nextPositionX == positionX + 2 && nextPositionY == positionY) { canKill = false };
    if (nextPositionX == positionX + 1 && nextPositionY == positionY) { canKill = false };
    if (canKill) {
      if (this.checkFigure(nextPositionX, nextPositionY, app)
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
            this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
            returnArr = [...returnArr, {
              positionX: nextPositionX,
              positionY: nextPositionY
            }]
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
          let deleteFigure: Figure = Object.values(app).find(x => x.positionX == nextPositionX && x.positionY == nextPositionY);
          let figureName: string = deleteFigure.name;
          app.lastKilledFigure = {
            killedName: figureName,
            killedColor: deleteFigure.color,
            killedPositionX: deleteFigure.positionX,
            killedPositionY: deleteFigure.positionY
          }
          if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
            app.isKillTarget=true;
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
          let figureName: string = deleteFigure.name;
          app.lastKilledFigure = {
            killedName: figureName,
            killedColor: deleteFigure.color,
            killedPositionX: deleteFigure.positionX,
            killedPositionY: deleteFigure.positionY
          }
          if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
            app.isKillTarget = true;
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
          let figureName: string = deleteFigure.name;
          app.lastKilledFigure = {
            killedName: figureName,
            killedColor: deleteFigure.color,
            killedPositionX: deleteFigure.positionX,
            killedPositionY: deleteFigure.positionY
          };
          if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
            app.isKillTarget = true;
            this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
          }
      }
    }
    return returnArr;
  }


  checkRock(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    
    if(
      (positionX!=app.whiteRock.positionX && positionY!=app.whiteRock.positionY)
      &&
      (positionX!=app.whiteRock2.positionX && positionY!=app.whiteRock2.positionY)
      &&
      (positionX!=app.blackRock.positionX && positionY!=app.blackRock.positionY)
      &&
      (positionX!=app.blackRock2.positionX && positionY!=app.blackRock2.positionY)
      &&
      (positionX!=app.chooseRock.positionX && positionY!=app.chooseRock.positionY)
      &&
      (positionX!=app.chooseBlackRock.positionX && positionY!=app.chooseBlackRock.positionY)
      &&
      (positionX!=app.chooseQueen.positionX && positionY!=app.chooseQueen.positionY)
      &&
      (positionX!=app.chooseBlackQueen.positionX && positionY!=app.chooseBlackQueen.positionY)
      &&
      (positionX!=app.whiteQueen.positionX && positionY!=app.whiteQueen.positionY)
      &&
      (positionX!=app.blackQueen.positionX && positionY!=app.blackQueen.positionY)
    ){return []};
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
          let figureName: string = deleteFigure.name;
          app.lastKilledFigure = {
            killedName: figureName,
            killedColor: deleteFigure.color,
            killedPositionX: deleteFigure.positionX,
            killedPositionY: deleteFigure.positionY
          };
          if (returnArr.find(x => x.positionX == nextPositionX && x.positionY == nextPositionY)) {
            app.isKillTarget = true;
            this.deleteOrRestoreFigure(true, false, deleteFigure.name, app);
          }
      }
    }
    return returnArr;
  }

  checkScanner(app: AppComponent) {
    let kingPositionX: number;
    let kingPositionY: number;

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
          ||
          ((kingPositionX - i) == app.chooseBlackQueen.positionX && kingPositionY == app.chooseBlackQueen.positionY)
          ||
          ((kingPositionX - i) == app.chooseBlackRock.positionX && kingPositionY == app.chooseBlackRock.positionY)
        ) {
          app.checkKing = 'white';
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
          ||
          ((kingPositionX + i) == app.chooseBlackQueen.positionX && kingPositionY == app.chooseBlackQueen.positionY)
          ||
          ((kingPositionX + i) == app.chooseBlackRock.positionX && kingPositionY == app.chooseBlackRock.positionY)
        ) {
          app.checkKing = 'white';
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
          ||
          (kingPositionX == app.chooseBlackQueen.positionX && (kingPositionY - i) == app.chooseBlackQueen.positionY)
          ||
          (kingPositionX == app.chooseBlackRock.positionX && (kingPositionY - i) == app.chooseBlackRock.positionY)
        ) {
          app.checkKing = 'white';
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
          ||
          (kingPositionX == app.chooseBlackQueen.positionX && (kingPositionY + i) == app.chooseBlackQueen.positionY)
          ||
          (kingPositionX == app.chooseBlackRock.positionX && (kingPositionY + i) == app.chooseBlackRock.positionY)
        ) {
          app.checkKing = 'white';
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
          ||
          (kingPositionX + i == app.chooseBlackQueen.positionX && (kingPositionY + i) == app.chooseBlackQueen.positionY)
          ||
          (kingPositionX + i == app.chooseBlackBishop.positionX && (kingPositionY + i) == app.chooseBlackRock.positionY)
        ) {
          app.checkKing = 'white';
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
          ||
          (kingPositionX - i == app.chooseBlackQueen.positionX && (kingPositionY - i) == app.chooseBlackQueen.positionY)
          ||
          (kingPositionX - i == app.chooseBlackBishop.positionX && (kingPositionY - i) == app.chooseBlackRock.positionY)
        ) {
          app.checkKing = 'white';
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
          ||
          (kingPositionX - i == app.chooseBlackQueen.positionX && (kingPositionY + i) == app.chooseBlackQueen.positionY)
          ||
          (kingPositionX - i == app.chooseBlackBishop.positionX && (kingPositionY + i) == app.chooseBlackRock.positionY)
        ) {
          app.checkKing = 'white';
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
          ||
          (kingPositionX + i == app.chooseBlackQueen.positionX && (kingPositionY - i) == app.chooseBlackQueen.positionY)
          ||
          (kingPositionX + i == app.chooseBlackBishop.positionX && (kingPositionY - i) == app.chooseBlackRock.positionY)
        ) {
          app.checkKing = 'white';
          return true;
        }
      }
    } //--------end check white king

    kingPositionX = app.blackKing.positionX;
    kingPositionY = app.blackKing.positionY;

    // ==========================check black king
    // queen and rock
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX - i, kingPositionY, app)) {
        if (this.getFigureColor(kingPositionX - i, kingPositionY, app) == 'black') { break };
        if (((kingPositionX - i) == app.whiteQueen.positionX && kingPositionY == app.whiteQueen.positionY)
          ||
          ((kingPositionX - i) == app.whiteRock.positionX && kingPositionY == app.whiteRock.positionY)
          ||
          ((kingPositionX - i) == app.whiteRock2.positionX && kingPositionY == app.whiteRock2.positionY)
          ||
          (kingPositionX - i == app.chooseQueen.positionX && (kingPositionY) == app.chooseQueen.positionY)
          ||
          (kingPositionX - i == app.chooseRock.positionX && (kingPositionY) == app.chooseRock.positionY)
        ) {
          app.checkKing = 'black';
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX + i, kingPositionY, app)) {
        if (this.getFigureColor(kingPositionX + i, kingPositionY, app) == 'black') { break };
        if (((kingPositionX + i) == app.whiteQueen.positionX && kingPositionY == app.whiteQueen.positionY)
          ||
          ((kingPositionX + i) == app.whiteRock.positionX && kingPositionY == app.whiteRock.positionY)
          ||
          ((kingPositionX + i) == app.whiteRock2.positionX && kingPositionY == app.whiteRock2.positionY)
          ||
          (kingPositionX + i == app.chooseQueen.positionX && (kingPositionY) == app.chooseQueen.positionY)
          ||
          (kingPositionX + i == app.chooseRock.positionX && (kingPositionY) == app.chooseRock.positionY)
        ) {
          app.checkKing = 'black';
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX, kingPositionY - i, app)) {
        if (this.getFigureColor(kingPositionX, kingPositionY - i, app) == 'black') { break };
        if ((kingPositionX == app.whiteQueen.positionX && (kingPositionY - i) == app.whiteQueen.positionY)
          ||
          (kingPositionX == app.whiteRock.positionX && (kingPositionY - i) == app.blackRock.positionY)
          ||
          (kingPositionX == app.whiteRock2.positionX && (kingPositionY - i) == app.whiteRock2.positionY)
          ||
          (kingPositionX == app.chooseQueen.positionX && (kingPositionY - i) == app.chooseQueen.positionY)
          ||
          (kingPositionX == app.chooseRock.positionX && (kingPositionY - i) == app.chooseRock.positionY)
        ) {
          app.checkKing = 'black';
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX, kingPositionY + i, app)) {
        if (this.getFigureColor(kingPositionX, kingPositionY + i, app) == 'black') { break };
        if ((kingPositionX == app.whiteQueen.positionX && (kingPositionY + i) == app.whiteQueen.positionY)
          ||
          (kingPositionX == app.whiteRock.positionX && (kingPositionY + i) == app.whiteRock.positionY)
          ||
          (kingPositionX == app.whiteRock2.positionX && (kingPositionY + i) == app.whiteRock2.positionY)
          ||
          (kingPositionX == app.chooseQueen.positionX && (kingPositionY+i) == app.chooseQueen.positionY)
          ||
          (kingPositionX == app.chooseRock.positionX && (kingPositionY+i) == app.chooseRock.positionY)
        ) {
          app.checkKing = 'black';
          return true;
        }
      }
    }
    // queen and bishop
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX + i, kingPositionY + i, app)) {
        if (this.getFigureColor(kingPositionX + i, kingPositionY + i, app) == 'black') { break };
        if ((kingPositionX + i == app.whiteQueen.positionX && (kingPositionY + i) == app.whiteQueen.positionY)
          ||
          (kingPositionX + i == app.whiteBishop.positionX && (kingPositionY + i) == app.whiteBishop.positionY)
          ||
          (kingPositionX + i == app.whiteBishop2.positionX && (kingPositionY + i) == app.whiteBishop2.positionY)
          ||
          (kingPositionX + i == app.chooseQueen.positionX && (kingPositionY+i) == app.chooseQueen.positionY)
          ||
          (kingPositionX + i == app.chooseBishop.positionX && (kingPositionY + i) == app.chooseBishop.positionY)
        ) {
          app.checkKing = 'black';
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX - i, kingPositionY - i, app)) {
        if (this.getFigureColor(kingPositionX - i, kingPositionY - i, app) == 'black') { break };
        if ((kingPositionX - i == app.whiteQueen.positionX && (kingPositionY - i) == app.whiteQueen.positionY)
          ||
          (kingPositionX - i == app.whiteBishop.positionX && (kingPositionY - i) == app.whiteBishop.positionY)
          ||
          (kingPositionX - i == app.whiteBishop2.positionX && (kingPositionY - i) == app.whiteBishop2.positionY)
          ||
          (kingPositionX - i == app.chooseQueen.positionX && (kingPositionY-i) == app.chooseQueen.positionY)
          ||
          (kingPositionX - i == app.chooseBishop.positionX && (kingPositionY - i) == app.chooseBishop.positionY)
        ) {
          app.checkKing = 'black';
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX - i, kingPositionY + i, app)) {
        if (this.getFigureColor(kingPositionX - i, kingPositionY + i, app) == 'black') { break };
        if ((kingPositionX - i == app.whiteQueen.positionX && (kingPositionY + i) == app.whiteQueen.positionY)
          ||
          (kingPositionX - i == app.whiteBishop.positionX && (kingPositionY + i) == app.whiteBishop.positionY)
          ||
          (kingPositionX - i == app.whiteBishop2.positionX && (kingPositionY + i) == app.whiteBishop2.positionY)
          ||
          (kingPositionX - i == app.chooseQueen.positionX && (kingPositionY+i) == app.chooseQueen.positionY)
          ||
          (kingPositionX - i == app.chooseBishop.positionX && (kingPositionY + i) == app.chooseBishop.positionY)
        ) {
          app.checkKing = 'black';
          return true;
        }
      }
    }
    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(kingPositionX + i, kingPositionY - i, app)) {
        if (this.getFigureColor(kingPositionX + i, kingPositionY - i, app) == 'black') { break };
        if ((kingPositionX + i == app.whiteQueen.positionX && (kingPositionY - i) == app.whiteQueen.positionY)
          ||
          (kingPositionX + i == app.whiteBishop.positionX && (kingPositionY - i) == app.whiteBishop.positionY)
          ||
          (kingPositionX + i == app.whiteBishop2.positionX && (kingPositionY - i) == app.whiteBishop2.positionY)
          ||
          (kingPositionX + i == app.chooseQueen.positionX && (kingPositionY-i) == app.chooseQueen.positionY)
          ||
          (kingPositionX + i == app.chooseBishop.positionX && (kingPositionY - i) == app.chooseBishop.positionY)
        ) {
          app.checkKing = 'black';
          return true;
        }
      }
    }
    return false;
  }

  // gameOver(figure:Figure,app:AppComponent){
  //   if(figure.color=='white'){
  //     if(figure==app.whiteQueen){
  //       if(app.whiteQueen)
  //       for(let i=1;i<=8;i++){

  //       }
  //     }
  //   }
  // }
}