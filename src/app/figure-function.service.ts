import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Figure } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class FigureFunctionService {

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
        app.deletedWhiteFigure = [...app.deletedWhiteFigure, 'knight']
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
}
