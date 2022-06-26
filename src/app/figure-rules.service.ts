import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { Figure, Position } from './app.model';

@Injectable({
  providedIn: 'root'
})
export class FigureRulesService {

  constructor() { }

  getFigure(figure: Position, positionX: number, positionY: number) {
    return figure.positionX == positionX && figure.positionY == positionY
  }

  checkFigure(positionX: number, positionY: number, app: AppComponent): boolean {
    if (Object.values(app).find(x => x.positionX == positionX && x.positionY == positionY)) {
      return true;
    }
    return false;
  }

  scannFigure(figure: Figure, positionX: number, positionY: number): boolean {
    if (figure.positionX == positionX && figure.positionY == positionY) {
      return true;
    }
    return false;
  }

  changePosition(positionX: number, positionY: number, app: AppComponent) {
    if (this.checkFigure(positionX, positionY, app)) {
      app.nextPosition = {
        positionX: Object.values(app).find(x => x.positionX == positionX && x.positionY == positionY).positionX,
        positionY: Object.values(app).find(x => x.positionX == positionX && x.positionY == positionY).positionY
      }
    } if (!this.checkFigure(positionX, positionY, app)) {
      if (this.scannFigure(app.whiteKing, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKing(app.nextPosition.positionX, app.nextPosition.positionY).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteKing = {
            name: 'white-king',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteRock = {
            name: 'white-rock',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteBishop = {
            name: 'white-bishop',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteKnight = {
            name: 'white-knight',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteQueen = {
            name: 'white-queen',
            positionX,
            positionY
          }
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
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteBishop2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteBishop2 = {
            name: 'white-bishop2',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whiteKnight2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whiteKnight2 = {
            name: 'white-knight2',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      }
      // ----------------------------------------------------------------------------------------------
      else if (this.scannFigure(app.blackKing, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKing(app.nextPosition.positionX, app.nextPosition.positionY).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackKing = {
            name: 'black-king',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackRock = {
            name: 'black-rock',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackBishop = {
            name: 'black-bishop',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackKnight = {
            name: 'black-knight',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackQueen = {
            name: 'black-queen',
            positionX,
            positionY
          }
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
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackBishop2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackBishop2 = {
            name: 'black-bishop2',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackKnight2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackKnight2 = {
            name: 'black-knight2',
            positionX,
            positionY
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn1, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn1 = {
            name: 'black-pawn1',
            positionX,
            positionY
          }
        } else {
          console.log('invalid position')
        }
      }
      else if (this.scannFigure(app.blackPawn2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn2 = {
            name: 'black-pawn2',
            positionX,
            positionY
          }
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn3, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn3 = {
            name: 'black-pawn3',
            positionX,
            positionY
          }
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn4, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn4 = {
            name: 'black-pawn4',
            positionX,
            positionY
          }
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn5, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn5 = {
            name: 'black-pawn5',
            positionX,
            positionY
          }
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn6, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn6 = {
            name: 'black-pawn6',
            positionX,
            positionY
          }
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn7, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn7 = {
            name: 'black-pawn7',
            positionX,
            positionY
          }
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.blackPawn8, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checBlackkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.blackPawn8 = {
            name: 'black-pawn8',
            positionX,
            positionY
          }
        } else {
          console.log('invalid position')
        }
      }
      // ----------------------------------------------------------
      else if (this.scannFigure(app.whitePawn1, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn1 = {
            name: 'white-pawn1',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      }
      else if (this.scannFigure(app.whitePawn2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn2 = {
            name: 'white-pawn2',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn3, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn3 = {
            name: 'white-pawn3',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn4, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn4 = {
            name: 'white-pawn4',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn5, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn5 = {
            name: 'white-pawn5',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn6, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn6 = {
            name: 'white-pawn6',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }
      } else if (this.scannFigure(app.whitePawn7, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn7 = {
            name: 'white-pawn7',
            positionX,
            positionY
          }
          return;
        } else {
          console.log('invalid position')
        }

      } else if (this.scannFigure(app.whitePawn8, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.checkPawn(app.nextPosition.positionX, app.nextPosition.positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          app.whitePawn8 = {
            name: 'white-pawn8',
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
  checkPawn(positionX: number, positionY: number, app: AppComponent) {
    if (this.checkFigure(positionX + 1, positionY, app)) {
      return [];
    }
    if (positionX == 2) {
      return [
        {
          positionX: positionX + 2,
          positionY: positionY
        },
        {
          positionX: positionX + 1,
          positionY: positionY
        }
      ]
    }
    return [
      {
        positionX: positionX + 1,
        positionY: positionY
      }
    ]
  }

  checBlackkPawn(positionX: number, positionY: number, app: AppComponent) {
    if (this.checkFigure(positionX - 1, positionY, app)) {
      return [];
    }
    if (positionX == 7) {
      return [
        {
          positionX: positionX - 2,
          positionY: positionY
        },
        {
          positionX: positionX - 1,
          positionY: positionY
        }
      ]
    }
    return [
      {
        positionX: positionX - 1,
        positionY: positionY
      }
    ]
  }

  checkQueen(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    return [
      ...this.checkRock(positionX, positionY, nextPositionX, nextPositionY, app),
      ...this.checkBishop(positionX, positionY, nextPositionX, nextPositionY, app)
    ]
  }

  checkKing(positionX: number, positionY: number) {
    return [
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
    ]
  }

  checkBishop(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    if (this.checkFigure(nextPositionX, nextPositionY, app)) {
      return [];
    }
    let returnArr: Position[] = [];
    let endTopRightDiagonal: boolean = false;
    let endTopLeftDiagonal: boolean = false;
    let endBottomRightDiagonal: boolean = false;
    let endBottomLeftDiagonal: boolean = false;

    for (let i = 1; i <= 8; i++) {
      if (this.checkFigure(positionX + i, positionY + i, app)) { endBottomRightDiagonal = true };
      if (this.checkFigure(positionX - i, positionY - i, app)) { endTopLeftDiagonal = true };
      if (this.checkFigure(positionX - i, positionY + i, app)) { endTopRightDiagonal = true };
      if (this.checkFigure(positionX + i, positionY - i, app)) { endBottomLeftDiagonal = true };

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
    return returnArr;
  }

  checkKnight(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    if (this.checkFigure(nextPositionX, nextPositionY, app)) {
      return [];
    }
    return [
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

  }


  checkRock(positionX: number, positionY: number, nextPositionX: number, nextPositionY: number, app: AppComponent) {
    let returnArr: Position[] = [];
    let xArr: number[] = [];
    let yArr: number[] = [];
    let x = positionX;
    let y = positionY;
    //=============== chnage positionX
    if (nextPositionX < positionX) {
      while (positionX != nextPositionX) {
        positionX -= 1;
        if (this.checkFigure(positionX, positionY, app)) {
          break;
        }
        xArr = [...xArr, positionX];
      }
      positionX = x;
    }

    if (nextPositionX > positionX) {
      while (positionX != nextPositionX) {
        positionX += 1;
        if (this.checkFigure(positionX, positionY, app)) {
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
        if (this.checkFigure(positionX, positionY, app)) {
          break;
        }
        yArr = [...yArr, positionY];
      }
      positionY = y;
    }

    if (nextPositionY > positionY) {
      while (positionY != nextPositionY) {
        positionY += 1;
        if (this.checkFigure(positionX, positionY, app)) {
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
    return returnArr;
  }

}
