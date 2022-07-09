import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { FigureFunctionService } from './figure-function.service';

@Injectable({
  providedIn: 'root'
})
export class CheckService {

constructor(
  private figureFunctionService:FigureFunctionService
) { }

checkScanner(app: AppComponent) {
  let kingPositionX: number;
  let kingPositionY: number;

  kingPositionX = app.whiteKing.positionX;
  kingPositionY = app.whiteKing.positionY;


  //  ===================================check white king
  // queen and rock
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX - i, kingPositionY, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX - i, kingPositionY, app) == 'white') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX + i, kingPositionY, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX + i, kingPositionY, app) == 'white') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX, kingPositionY - i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX, kingPositionY - i, app) == 'white') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX, kingPositionY + i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX, kingPositionY + i, app) == 'white') { break };
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
      } else { break };
    }
  }
  // queen and bishop
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX + i, kingPositionY + i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX + i, kingPositionY + i, app) == 'white') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX - i, kingPositionY - i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX - i, kingPositionY - i, app) == 'white') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX - i, kingPositionY + i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX - i, kingPositionY + i, app) == 'white') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX + i, kingPositionY - i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX + i, kingPositionY - i, app) == 'white') { break };
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
      } else { break };
    }
  }
  // pawn

  if (this.figureFunctionService.checkFigure(kingPositionX + 1, kingPositionY + 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 1, kingPositionY + 1, app) == 'black') {
      if (Object.values(app).find(x => x.positionX == kingPositionX + 1 && x.positionY == kingPositionY + 1 && x.name.split('-')[1].split('')[0] == 'p')) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 1, kingPositionY - 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 1, kingPositionY - 1, app) == 'black') {
      if (Object.values(app).find(x => x.positionX == kingPositionX + 1 && x.positionY == kingPositionY - 1 && x.name.split('-')[1].split('')[0] == 'p')) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  // knight
  if (this.figureFunctionService.checkFigure(kingPositionX - 1, kingPositionY + 2, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 1, kingPositionY + 2, app) == 'black') {
      if (
        (app.blackKnight.positionX == kingPositionX - 1 && app.blackKnight.positionY == kingPositionY + 2)
        ||
        (app.blackKnight2.positionX == kingPositionX - 1 && app.blackKnight2.positionY == kingPositionY + 2)
        ||
        (app.chooseBlackKnight.positionX == kingPositionX - 1 && app.chooseBlackKnight.positionY == kingPositionY + 2)
      ) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX - 1, kingPositionY - 2, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 1, kingPositionY - 2, app) == 'black') {
      if (
        (app.blackKnight.positionX == kingPositionX - 1 && app.blackKnight.positionY == kingPositionY - 2)
        ||
        (app.blackKnight2.positionX == kingPositionX - 1 && app.blackKnight2.positionY == kingPositionY - 2)
        ||
        (app.chooseBlackKnight.positionX == kingPositionX - 1 && app.chooseBlackKnight.positionY == kingPositionY - 2)
      ) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 1, kingPositionY + 2, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 1, kingPositionY + 2, app) == 'black') {
      if (
        (app.blackKnight.positionX == kingPositionX + 1 && app.blackKnight.positionY == kingPositionY + 2)
        ||
        (app.blackKnight2.positionX == kingPositionX + 1 && app.blackKnight2.positionY == kingPositionY + 2)
        ||
        (app.chooseBlackKnight.positionX == kingPositionX + 1 && app.chooseBlackKnight.positionY == kingPositionY + 2)
      ) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 1, kingPositionY - 2, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 1, kingPositionY - 2, app) == 'black') {
      if (
        (app.blackKnight.positionX == kingPositionX + 1 && app.blackKnight.positionY == kingPositionY - 2)
        ||
        (app.blackKnight2.positionX == kingPositionX + 1 && app.blackKnight2.positionY == kingPositionY - 2)
        ||
        (app.chooseBlackKnight.positionX == kingPositionX + 1 && app.chooseBlackKnight.positionY == kingPositionY - 2)
      ) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 2, kingPositionY - 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 2, kingPositionY - 1, app) == 'black') {
      if (
        (app.blackKnight.positionX == kingPositionX + 2 && app.blackKnight.positionY == kingPositionY - 1)
        ||
        (app.blackKnight2.positionX == kingPositionX + 2 && app.blackKnight2.positionY == kingPositionY - 1)
        ||
        (app.chooseBlackKnight.positionX == kingPositionX + 2 && app.chooseBlackKnight.positionY == kingPositionY - 1)
      ) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 2, kingPositionY + 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 2, kingPositionY + 1, app) == 'black') {
      if (
        (app.blackKnight.positionX == kingPositionX + 2 && app.blackKnight.positionY == kingPositionY + 1)
        ||
        (app.blackKnight2.positionX == kingPositionX + 2 && app.blackKnight2.positionY == kingPositionY + 1)
        ||
        (app.chooseBlackKnight.positionX == kingPositionX + 2 && app.chooseBlackKnight.positionY == kingPositionY + 1)
      ) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX - 2, kingPositionY + 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 2, kingPositionY + 1, app) == 'black') {
      if (
        (app.blackKnight.positionX == kingPositionX - 2 && app.blackKnight.positionY == kingPositionY + 1)
        ||
        (app.blackKnight2.positionX == kingPositionX - 2 && app.blackKnight2.positionY == kingPositionY + 1)
        ||
        (app.chooseBlackKnight.positionX == kingPositionX - 2 && app.chooseBlackKnight.positionY == kingPositionY + 1)
      ) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX - 2, kingPositionY - 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 2, kingPositionY - 1, app) == 'black') {
      if (
        (app.blackKnight.positionX == kingPositionX - 2 && app.blackKnight.positionY == kingPositionY - 1)
        ||
        (app.blackKnight2.positionX == kingPositionX - 2 && app.blackKnight2.positionY == kingPositionY - 1)
        ||
        (app.chooseBlackKnight.positionX == kingPositionX - 2 && app.chooseBlackKnight.positionY == kingPositionY - 1)
      ) {
        app.checkKing = 'white';
        return true;
      }
    }
  }

  //--------end check white king

  kingPositionX = app.blackKing.positionX;
  kingPositionY = app.blackKing.positionY;

  // ==========================check black king
  // queen and rock
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX - i, kingPositionY, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX - i, kingPositionY, app) == 'black') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX + i, kingPositionY, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX + i, kingPositionY, app) == 'black') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX, kingPositionY - i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX, kingPositionY - i, app) == 'black') { break };
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
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX, kingPositionY + i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX, kingPositionY + i, app) == 'black') { break };
      if ((kingPositionX == app.whiteQueen.positionX && (kingPositionY + i) == app.whiteQueen.positionY)
        ||
        (kingPositionX == app.whiteRock.positionX && (kingPositionY + i) == app.whiteRock.positionY)
        ||
        (kingPositionX == app.whiteRock2.positionX && (kingPositionY + i) == app.whiteRock2.positionY)
        ||
        (kingPositionX == app.chooseQueen.positionX && (kingPositionY + i) == app.chooseQueen.positionY)
        ||
        (kingPositionX == app.chooseRock.positionX && (kingPositionY + i) == app.chooseRock.positionY)
      ) {
        app.checkKing = 'black';
        return true;
      } else { break };
    }
  }
  // queen and bishop
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX + i, kingPositionY + i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX + i, kingPositionY + i, app) == 'black') { break };
      if ((kingPositionX + i == app.whiteQueen.positionX && (kingPositionY + i) == app.whiteQueen.positionY)
        ||
        (kingPositionX + i == app.whiteBishop.positionX && (kingPositionY + i) == app.whiteBishop.positionY)
        ||
        (kingPositionX + i == app.whiteBishop2.positionX && (kingPositionY + i) == app.whiteBishop2.positionY)
        ||
        (kingPositionX + i == app.chooseQueen.positionX && (kingPositionY + i) == app.chooseQueen.positionY)
        ||
        (kingPositionX + i == app.chooseBishop.positionX && (kingPositionY + i) == app.chooseBishop.positionY)
      ) {
        app.checkKing = 'black';
        return true;
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX - i, kingPositionY - i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX - i, kingPositionY - i, app) == 'black') { break };
      if ((kingPositionX - i == app.whiteQueen.positionX && (kingPositionY - i) == app.whiteQueen.positionY)
        ||
        (kingPositionX - i == app.whiteBishop.positionX && (kingPositionY - i) == app.whiteBishop.positionY)
        ||
        (kingPositionX - i == app.whiteBishop2.positionX && (kingPositionY - i) == app.whiteBishop2.positionY)
        ||
        (kingPositionX - i == app.chooseQueen.positionX && (kingPositionY - i) == app.chooseQueen.positionY)
        ||
        (kingPositionX - i == app.chooseBishop.positionX && (kingPositionY - i) == app.chooseBishop.positionY)
      ) {
        app.checkKing = 'black';
        return true;
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX - i, kingPositionY + i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX - i, kingPositionY + i, app) == 'black') { break };
      if ((kingPositionX - i == app.whiteQueen.positionX && (kingPositionY + i) == app.whiteQueen.positionY)
        ||
        (kingPositionX - i == app.whiteBishop.positionX && (kingPositionY + i) == app.whiteBishop.positionY)
        ||
        (kingPositionX - i == app.whiteBishop2.positionX && (kingPositionY + i) == app.whiteBishop2.positionY)
        ||
        (kingPositionX - i == app.chooseQueen.positionX && (kingPositionY + i) == app.chooseQueen.positionY)
        ||
        (kingPositionX - i == app.chooseBishop.positionX && (kingPositionY + i) == app.chooseBishop.positionY)
      ) {
        app.checkKing = 'black';
        return true;
      } else { break };
    }
  }
  for (let i = 1; i <= 8; i++) {
    if (this.figureFunctionService.checkFigure(kingPositionX + i, kingPositionY - i, app)) {
      if (this.figureFunctionService.getFigureColor(kingPositionX + i, kingPositionY - i, app) == 'black') { break };
      if ((kingPositionX + i == app.whiteQueen.positionX && (kingPositionY - i) == app.whiteQueen.positionY)
        ||
        (kingPositionX + i == app.whiteBishop.positionX && (kingPositionY - i) == app.whiteBishop.positionY)
        ||
        (kingPositionX + i == app.whiteBishop2.positionX && (kingPositionY - i) == app.whiteBishop2.positionY)
        ||
        (kingPositionX + i == app.chooseQueen.positionX && (kingPositionY - i) == app.chooseQueen.positionY)
        ||
        (kingPositionX + i == app.chooseBishop.positionX && (kingPositionY - i) == app.chooseBishop.positionY)
      ) {
        app.checkKing = 'black';
        return true;
      } else { break };
    }
  }

  // pawn
  if (this.figureFunctionService.checkFigure(kingPositionX - 1, kingPositionY + 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 1, kingPositionY + 1, app) == 'white') {
      if (Object.values(app).find(x => x.positionX == kingPositionX - 1 && x.positionY == kingPositionY + 1 && x.name.split('-')[1].split('')[0] == 'p')) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX - 1, kingPositionY - 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 1, kingPositionY - 1, app) == 'white') {
      if (Object.values(app).find(x => x.positionX == kingPositionX - 1 && x.positionY == kingPositionY - 1 && x.name.split('-')[1].split('')[0] == 'p')) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  // knight
  if (this.figureFunctionService.checkFigure(kingPositionX - 1, kingPositionY + 2, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 1, kingPositionY + 2, app) == 'white') {
      if (
        (app.whiteKnight.positionX == kingPositionX - 1 && app.whiteKnight.positionY == kingPositionY + 2)
        ||
        (app.whiteKnight2.positionX == kingPositionX - 1 && app.whiteKnight2.positionY == kingPositionY + 2)
        ||
        (app.chooseKnight.positionX == kingPositionX - 1 && app.chooseKnight.positionY == kingPositionY + 2)
      ) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX - 1, kingPositionY - 2, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 1, kingPositionY - 2, app) == 'white') {
      if (
        (app.whiteKnight.positionX == kingPositionX - 1 && app.whiteKnight.positionY == kingPositionY - 2)
        ||
        (app.whiteKnight2.positionX == kingPositionX - 1 && app.whiteKnight2.positionY == kingPositionY - 2)
        ||
        (app.chooseKnight.positionX == kingPositionX - 1 && app.chooseKnight.positionY == kingPositionY - 2)
      ) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 1, kingPositionY + 2, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 1, kingPositionY + 2, app) == 'white') {
      if (
        (app.whiteKnight.positionX == kingPositionX + 1 && app.whiteKnight.positionY == kingPositionY + 2)
        ||
        (app.whiteKnight2.positionX == kingPositionX + 1 && app.whiteKnight2.positionY == kingPositionY + 2)
        ||
        (app.chooseKnight.positionX == kingPositionX + 1 && app.chooseKnight.positionY == kingPositionY + 2)
      ) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 1, kingPositionY - 2, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 1, kingPositionY - 2, app) == 'white') {
      if (
        (app.whiteKnight.positionX == kingPositionX + 1 && app.whiteKnight.positionY == kingPositionY - 2)
        ||
        (app.whiteKnight2.positionX == kingPositionX + 1 && app.whiteKnight2.positionY == kingPositionY - 2)
        ||
        (app.chooseKnight.positionX == kingPositionX + 1 && app.chooseKnight.positionY == kingPositionY - 2)
      ) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 2, kingPositionY - 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 2, kingPositionY - 1, app) == 'white') {
      if (
        (app.whiteKnight.positionX == kingPositionX + 2 && app.whiteKnight.positionY == kingPositionY - 1)
        ||
        (app.whiteKnight2.positionX == kingPositionX + 2 && app.whiteKnight2.positionY == kingPositionY - 1)
        ||
        (app.chooseKnight.positionX == kingPositionX + 2 && app.chooseKnight.positionY == kingPositionY - 1)
      ) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX + 2, kingPositionY + 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX + 2, kingPositionY + 1, app) == 'white') {
      if (
        (app.whiteKnight.positionX == kingPositionX + 2 && app.whiteKnight.positionY == kingPositionY + 1)
        ||
        (app.whiteKnight2.positionX == kingPositionX + 2 && app.whiteKnight2.positionY == kingPositionY + 1)
        ||
        (app.chooseKnight.positionX == kingPositionX + 2 && app.chooseKnight.positionY == kingPositionY + 1)
      ) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX - 2, kingPositionY + 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 2, kingPositionY + 1, app) == 'white') {
      if (
        (app.whiteKnight.positionX == kingPositionX - 2 && app.whiteKnight.positionY == kingPositionY + 1)
        ||
        (app.whiteKnight2.positionX == kingPositionX - 2 && app.whiteKnight2.positionY == kingPositionY + 1)
        ||
        (app.chooseKnight.positionX == kingPositionX - 2 && app.chooseKnight.positionY == kingPositionY + 1)
      ) {
        app.checkKing = 'black';
        return true;
      }
    }
  }

  if (this.figureFunctionService.checkFigure(kingPositionX - 2, kingPositionY - 1, app)) {
    if (this.figureFunctionService.getFigureColor(kingPositionX - 2, kingPositionY - 1, app) == 'white') {
      if (
        (app.whiteKnight.positionX == kingPositionX - 2 && app.whiteKnight.positionY == kingPositionY - 1)
        ||
        (app.whiteKnight2.positionX == kingPositionX - 2 && app.whiteKnight2.positionY == kingPositionY - 1)
        ||
        (app.chooseKnight.positionX == kingPositionX - 2 && app.chooseKnight.positionY == kingPositionY - 1)
      ) {
        app.checkKing = 'black';
        return true;
      }
    }
  }
  //--------end check white king

  return false;
}

}
