import { CheckService } from './check.service';
import { Injectable } from '@angular/core';
import { AppComponent } from './app.component';
import { Position } from './app.model';
import { FigureFunctionService } from './figure-function.service';


@Injectable({
  providedIn: 'root'
})
export class GameOverService {

  constructor(
    private figureFunctionService: FigureFunctionService,
    private checkService: CheckService
  ) { }


  gameOver(figure: Position, app: AppComponent) {
    let checkArr: Position[] = [];
    if (this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY, app) == 'white') {
      if (
        (figure.positionX == app.whiteQueen.positionX && figure.positionY == app.whiteQueen.positionY)
        ||
        (figure.positionX == app.chooseQueen.positionX && figure.positionY == app.chooseQueen.positionY)
      ) {
        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.blackKing.positionX && figure.positionY == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }

          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.blackKing.positionX && figure.positionY == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY + i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX == app.blackKing.positionX && figure.positionY + i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY - i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX == app.blackKing.positionX && figure.positionY - i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY - i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.blackKing.positionX && figure.positionY - i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }


        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY + i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.blackKing.positionX && figure.positionY + i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY - i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.blackKing.positionX && figure.positionY - i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY + i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.blackKing.positionX && figure.positionY + i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }
      }
      // rock
      if (
        (figure.positionX == app.whiteRock.positionX && figure.positionY == app.whiteRock.positionY)
        ||
        (figure.positionX == app.whiteRock2.positionX && figure.positionY == app.whiteRock2.positionY)
        ||
        (figure.positionX == app.chooseRock.positionX && figure.positionY == app.chooseRock.positionY)
      ) {
        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.blackKing.positionX && figure.positionY == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }

          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.blackKing.positionX && figure.positionY == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY + i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX == app.blackKing.positionX && figure.positionY + i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY - i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX == app.blackKing.positionX && figure.positionY - i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }
      }

      // bishop
      if (
        (figure.positionX == app.whiteBishop.positionX && figure.positionY == app.whiteBishop.positionY)
        ||
        (figure.positionX == app.whiteBishop2.positionX && figure.positionY == app.whiteBishop2.positionY)
        ||
        (figure.positionX == app.chooseBishop.positionX && figure.positionY == app.chooseBishop.positionY)
      ) {

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY - i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.blackKing.positionX && figure.positionY - i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }


        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY + i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.blackKing.positionX && figure.positionY + i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY - i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.blackKing.positionX && figure.positionY - i == app.blackKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY + i, app) == 'white') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.blackKing.positionX && figure.positionY + i == app.blackKing.positionY) {
            // checkArr = [...checkArr, {
            //   positionX: figure.positionX + i,
            //   positionY: figure.positionY + i
            // }];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.blackKing.positionX && x.positionY == app.blackKing.positionY)) { checkArr = []; }
      }

      // knight
      if (
        (figure.positionX == app.whiteKnight.positionX && figure.positionY == app.whiteKnight.positionY)
        ||
        (figure.positionX == app.whiteKnight2.positionX && figure.positionY == app.whiteKnight2.positionY)
        ||
        (figure.positionX == app.chooseKnight.positionX && figure.positionY == app.chooseKnight.positionY)
      ) {
        checkArr = [{
          positionX: figure.positionX,
          positionY: figure.positionY
        }];
        return checkArr;
      }

      //pawn
      if (
        (figure.positionX == app.whitePawn1.positionX && figure.positionY == app.whitePawn1.positionY)
        ||
        (figure.positionX == app.whitePawn2.positionX && figure.positionY == app.whitePawn2.positionY)
        ||
        (figure.positionX == app.whitePawn3.positionX && figure.positionY == app.whitePawn3.positionY)
        ||
        (figure.positionX == app.whitePawn4.positionX && figure.positionY == app.whitePawn4.positionY)
        ||
        (figure.positionX == app.whitePawn5.positionX && figure.positionY == app.whitePawn5.positionY)
        ||
        (figure.positionX == app.whitePawn6.positionX && figure.positionY == app.whitePawn6.positionY)
        ||
        (figure.positionX == app.whitePawn7.positionX && figure.positionY == app.whitePawn7.positionY)
        ||
        (figure.positionX == app.whitePawn8.positionX && figure.positionY == app.whitePawn8.positionY)
      ) {
        checkArr = [{
          positionX: figure.positionX,
          positionY: figure.positionY
        }];
        return checkArr;
      }
    }

    // ============================== black figure
    if (this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY, app) == 'black') {
      if (
        (figure.positionX == app.blackQueen.positionX && figure.positionY == app.blackQueen.positionY)
        ||
        (figure.positionX == app.chooseBlackQueen.positionX && figure.positionY == app.chooseBlackQueen.positionY)
      ) {
        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.whiteKing.positionX && figure.positionY == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }

          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.whiteKing.positionX && figure.positionY == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY + i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX == app.whiteKing.positionX && figure.positionY + i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY - i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX == app.whiteKing.positionX && figure.positionY - i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY - i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.whiteKing.positionX && figure.positionY - i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }


        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY + i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.whiteKing.positionX && figure.positionY + i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY - i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.whiteKing.positionX && figure.positionY - i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY + i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.whiteKing.positionX && figure.positionY + i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }
      }
      // rock
      if (
        (figure.positionX == app.blackRock.positionX && figure.positionY == app.blackRock.positionY)
        ||
        (figure.positionX == app.blackRock2.positionX && figure.positionY == app.blackRock2.positionY)
        ||
        (figure.positionX == app.chooseBlackRock.positionX && figure.positionY == app.chooseBlackRock.positionY)
      ) {
        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.whiteKing.positionX && figure.positionY == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }

          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.whiteKing.positionX && figure.positionY == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY + i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX == app.whiteKing.positionX && figure.positionY + i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX, figure.positionY - i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX == app.whiteKing.positionX && figure.positionY - i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }
      }

      // bishop
      if (
        (figure.positionX == app.blackBishop.positionX && figure.positionY == app.blackBishop.positionY)
        ||
        (figure.positionX == app.blackBishop2.positionX && figure.positionY == app.blackBishop2.positionY)
        ||
        (figure.positionX == app.chooseBlackBishop.positionX && figure.positionY == app.chooseBlackBishop.positionY)
      ) {

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY - i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.whiteKing.positionX && figure.positionY - i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }


        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX - i, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX - i, figure.positionY + i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX - i == app.whiteKing.positionX && figure.positionY + i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX - i,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY - i, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY - i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.whiteKing.positionX && figure.positionY - i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY - i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }

        for (let i = 1; i <= 8; i++) {
          if (this.figureFunctionService.checkFigure(figure.positionX + i, figure.positionY + i, app) && this.figureFunctionService.getFigureColor(figure.positionX + i, figure.positionY + i, app) == 'black') {
            checkArr = [];
            break;
          }
          if (figure.positionX + i == app.whiteKing.positionX && figure.positionY + i == app.whiteKing.positionY) {
            checkArr = [
              {
                positionX: figure.positionX,
                positionY: figure.positionY
              },
              ...checkArr
            ];
            return checkArr;
          }
          checkArr = [...checkArr, {
            positionX: figure.positionX + i,
            positionY: figure.positionY + i
          }];
        }

        if (!checkArr.find(x => x.positionX == app.whiteKing.positionX && x.positionY == app.whiteKing.positionY)) { checkArr = []; }
      }

      // knight
      if (
        (figure.positionX == app.blackKnight.positionX && figure.positionY == app.blackKnight.positionY)
        ||
        (figure.positionX == app.blackKnight2.positionX && figure.positionY == app.blackKnight2.positionY)
        ||
        (figure.positionX == app.chooseBlackKnight.positionX && figure.positionY == app.chooseBlackKnight.positionY)
      ) {
        checkArr = [{
          positionX: figure.positionX,
          positionY: figure.positionY
        }];
        return checkArr;
      }

      //pawn
      if (
        (figure.positionX == app.blackPawn1.positionX && figure.positionY == app.blackPawn1.positionY)
        ||
        (figure.positionX == app.blackPawn2.positionX && figure.positionY == app.blackPawn2.positionY)
        ||
        (figure.positionX == app.blackPawn3.positionX && figure.positionY == app.blackPawn3.positionY)
        ||
        (figure.positionX == app.blackPawn4.positionX && figure.positionY == app.blackPawn4.positionY)
        ||
        (figure.positionX == app.blackPawn5.positionX && figure.positionY == app.blackPawn5.positionY)
        ||
        (figure.positionX == app.blackPawn6.positionX && figure.positionY == app.blackPawn6.positionY)
        ||
        (figure.positionX == app.blackPawn7.positionX && figure.positionY == app.blackPawn7.positionY)
        ||
        (figure.positionX == app.blackPawn8.positionX && figure.positionY == app.blackPawn8.positionY)
      ) {
        checkArr = [{
          positionX: figure.positionX,
          positionY: figure.positionY
        }];
        return checkArr;
      }
    }
    return checkArr;
  }

  pawnMove(positionX: number, positionY: number, color: string, app: AppComponent) {
    let returnArr: Position[] = [];
    if (color == 'white') {
      if (this.figureFunctionService.getFigureColor(positionX + 1, positionY + 1, app) == 'black') {
        returnArr = [...returnArr, {
          positionX: positionX + 1,
          positionY: positionY + 1
        }]
      }
      if (this.figureFunctionService.getFigureColor(positionX + 1, positionY - 1, app) == 'black') {
        returnArr = [...returnArr, {
          positionX: positionX + 1,
          positionY: positionY - 1
        }]
      }
      if (positionX == 2 && !this.figureFunctionService.checkFigure(positionX + 2, positionY, app) && !this.figureFunctionService.checkFigure(positionX + 1, positionY, app)) {
        return [...returnArr,
        {
          positionX: positionX + 2,
          positionY
        },
        {
          positionX: positionX + 1,
          positionY
        }
        ]
      }
      if (!this.figureFunctionService.checkFigure(positionX + 1, positionY, app)) {
        return [...returnArr,
        {
          positionX: positionX + 1,
          positionY
        }
        ]
      }
      return returnArr;
    } else {
      if (this.figureFunctionService.getFigureColor(positionX - 1, positionY + 1, app) == 'white') {
        returnArr = [...returnArr, {
          positionX: positionX - 1,
          positionY: positionY + 1
        }]
      }
      if (this.figureFunctionService.getFigureColor(positionX - 1, positionY - 1, app) == 'white') {
        returnArr = [...returnArr, {
          positionX: positionX - 1,
          positionY: positionY - 1
        }]
      }

      if (positionX == 7 && !this.figureFunctionService.checkFigure(positionX - 2, positionY, app) && !this.figureFunctionService.checkFigure(positionX - 1, positionY, app)) {
        return [...returnArr,
        {
          positionX: positionX - 2,
          positionY
        },
        {
          positionX: positionX - 1,
          positionY
        }
        ]
      }
      if (!this.figureFunctionService.checkFigure(positionX - 1, positionY, app)) {
        return [...returnArr, {
          positionX: positionX - 1,
          positionY
        }]
      }
      return returnArr;
    }

  }

  knightMove(nextPositionX: number, nextPositionY: number) {
    return [
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
  }

  bishopMove(nextPositionX: number, nextPositionY: number, app: AppComponent) {
    let nextArr: Position[] = [];
    let endTopRightDiagonal: boolean = false;
    let endTopLeftDiagonal: boolean = false;
    let endBottomRightDiagonal: boolean = false;
    let endBottomLeftDiagonal: boolean = false;

    let isFirstEndTopLeftDiagonal: boolean = true;
    let isFirstEndTopRightDiagonal: boolean = true;
    let isFirstEndBottomLeftDiagonal: boolean = true;
    let isFirstEndBottomRightDiagonal: boolean = true;
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
    return nextArr;
  }

  rockMove(nextPositionX: number, nextPositionY: number, app: AppComponent) {
    let nextArr: Position[] = [];
    let xArr: number[] = [];
    let yArr: number[] = [];
    let nextX = nextPositionX;
    let nextY = nextPositionY;

    while (nextPositionX != 1) {

      nextPositionX -= 1;

      if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(nextX, nextY, app) != this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
        xArr = [...xArr, nextPositionX];
        break;
      }
      if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(nextX, nextY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
        break;
      }
      xArr = [...xArr, nextPositionX];
    }
    nextPositionX = nextX;

    while (nextPositionX != 8) {
      nextPositionX += 1;
      if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(nextX, nextY, app) != this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
        xArr = [...xArr, nextPositionX];
        break;
      }
      if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(nextX, nextY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
        xArr = [...xArr, nextPositionX];
        break;
      }
      xArr = [...xArr, nextPositionX];
    }
    nextPositionX = nextX;

    //=============== chnage positionY
    while (nextPositionY != 1) {
      nextPositionY -= 1;
      if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(nextX, nextY, app) != this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
        yArr = [...yArr, nextPositionY];
        break;
      }
      if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(nextX, nextY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
        break;
      }
      yArr = [...yArr, nextPositionY];
    }
    nextPositionY = nextY;

    while (nextPositionY != 8) {
      nextPositionY += 1;
      if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(nextX, nextY, app) != this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
        yArr = [...yArr, nextPositionY];
        break;
      }
      if (this.figureFunctionService.checkFigure(nextPositionX, nextPositionY, app) && (this.figureFunctionService.getFigureColor(nextX, nextY, app) == this.figureFunctionService.getFigureColor(nextPositionX, nextPositionY, app))) {
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
    return nextArr;
  }

  queenMove(positionX: number, positionY: number, app: AppComponent) {
    return [...this.rockMove(positionX, positionY, app), ...this.bishopMove(positionX, positionY, app)];
  }

  kingMove(positionX: number, positionY: number) {
    return [
      {
        positionX: positionX + 1,
        positionY
      },
      {
        positionX: positionX - 1,
        positionY
      },
      {
        positionX,
        positionY: positionY + 1
      },
      {
        positionX,
        positionY: positionY - 1
      },
      {
        positionX: positionX + 1,
        positionY: positionY + 1
      },
      {
        positionX: positionX + 1,
        positionY: positionY - 1
      },
      {
        positionX: positionX - 1,
        positionY: positionY + 1
      },
      {
        positionX: positionX - 1,
        positionY: positionY - 1
      }
    ]
  }

  end(checkArr: Position[], color: string, app: AppComponent): boolean {
    let moveArr: Position[];
    if (color == 'white') {
      // rock
      if (app.blackRock.positionX > 0) {
        moveArr = this.rockMove(app.blackRock.positionX, app.blackRock.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackRock2.positionX > 0) {
        moveArr = this.rockMove(app.blackRock2.positionX, app.blackRock2.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.chooseBlackRock.positionX > 0) {
        moveArr = this.rockMove(app.chooseBlackRock.positionX, app.chooseBlackRock.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      //knight
      if (app.blackKnight.positionX > 0) {
        moveArr = this.knightMove(app.blackKnight.positionX, app.blackKnight.positionY);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackKnight2.positionX > 0) {
        moveArr = this.knightMove(app.blackKnight2.positionX, app.blackKnight2.positionY);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.chooseBlackKnight.positionX > 0) {
        moveArr = this.knightMove(app.chooseBlackKnight.positionX, app.chooseBlackKnight.positionY);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      //bishop
      if (app.blackBishop.positionX > 0) {
        moveArr = this.bishopMove(app.blackBishop.positionX, app.blackBishop.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackBishop2.positionX > 0) {
        moveArr = this.bishopMove(app.blackBishop2.positionX, app.blackBishop2.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.chooseBlackBishop.positionX > 0) {
        moveArr = this.bishopMove(app.chooseBlackBishop.positionX, app.chooseBlackBishop.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      //queen
      if (app.blackQueen.positionX > 0) {
        moveArr = this.queenMove(app.blackQueen.positionX, app.blackQueen.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.chooseBlackQueen.positionX > 0) {
        moveArr = this.queenMove(app.chooseBlackQueen.positionX, app.chooseBlackQueen.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      //pawn
      if (app.blackPawn1.positionX > 0) {
        moveArr = this.pawnMove(app.blackPawn1.positionX, app.blackPawn1.positionY, 'black', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackPawn2.positionX > 0) {
        moveArr = this.pawnMove(app.blackPawn2.positionX, app.blackPawn2.positionY, 'black', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackPawn3.positionX > 0) {
        moveArr = this.pawnMove(app.blackPawn3.positionX, app.blackPawn3.positionY, 'black', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackPawn4.positionX > 0) {
        moveArr = this.pawnMove(app.blackPawn4.positionX, app.blackPawn4.positionY, 'black', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackPawn5.positionX > 0) {
        moveArr = this.pawnMove(app.blackPawn5.positionX, app.blackPawn5.positionY, 'black', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackPawn6.positionX > 0) {
        moveArr = this.pawnMove(app.blackPawn6.positionX, app.blackPawn6.positionY, 'black', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackPawn7.positionX > 0) {
        moveArr = this.pawnMove(app.blackPawn7.positionX, app.blackPawn7.positionY, 'black', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.blackPawn8.positionX > 0) {
        moveArr = this.pawnMove(app.blackPawn8.positionX, app.blackPawn8.positionY, 'black', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      moveArr = this.kingMove(app.blackKing.positionX, app.blackKing.positionY);
      for (let i = 0; i < checkArr.length; i++) {
        for (let j = 0; j < moveArr.length; j++) {
          if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
            let saveFigure = app.blackKing;
            app.blackKing = {
              ...app.blackKing,
              positionX: checkArr[i].positionX,
              positionY: checkArr[i].positionY
            }
            if (!this.checkService.checkScanner(app)) {
              app.blackKing = saveFigure;
              return false;
            }
            app.blackKing = saveFigure;
          }
        }
      }


      let saveFigure = app.blackKing;
      let left: boolean = false;
      let right: boolean = false;
      let topLef: boolean = false;
      let topRigt: boolean = false;
      let top: boolean = false;
      let bottom: boolean = false;
      let bottomLeft: boolean = false;
      let bottomRight: boolean = false;

      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY, app) != 'white' && saveFigure.positionX - 1 < 1)
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY, app) == 'black'
        )
      ) {
        top = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY, app) != 'white' && saveFigure.positionX + 1 > 8)
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY, app) == 'black'
        )
      ) {
        bottom = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX, saveFigure.positionY + 1, app) != 'white' && saveFigure.positionY + 1 > 8)
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX, saveFigure.positionY + 1, app) == 'black'
        )
      ) {
        right = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX, saveFigure.positionY - 1, app) != 'white' && saveFigure.positionY - 1 < 1)
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX, saveFigure.positionY - 1, app) == 'black'
        )
      ) {
        left = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY - 1, app) != 'white' && (saveFigure.positionX - 1 < 1 || (saveFigure.positionY - 1 < 1)))
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY - 1, app) == 'black'
        )
      ) {
        topLef = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY + 1, app) != 'white' && ((saveFigure.positionX - 1 < 1) || (saveFigure.positionY + 1 > 8)))
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY + 1, app) == 'black'
        )
      ) {
        topRigt = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY - 1, app) != 'white' && ((saveFigure.positionX + 1 > 8) || (saveFigure.positionY - 1 < 1)))
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY - 1, app) == 'black'
        )
      ) {
        bottomLeft = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY + 1, app) != 'white' && ((saveFigure.positionX + 1 > 8) || (saveFigure.positionY + 1 > 8)))
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY + 1, app) == 'black'
        )
      ) {
        bottomRight = true;
      }

      app.blackKing = {
        ...saveFigure,
        positionX: saveFigure.positionX + 1
      };

      if (this.checkService.checkScanner(app)) {
        bottom = true;
      }

      app.blackKing = {
        ...saveFigure,
        positionX: saveFigure.positionX - 1
      };

      if (this.checkService.checkScanner(app)) {
        top = true;
      }

      app.blackKing = {
        ...saveFigure,
        positionY: saveFigure.positionY + 1
      };

      if (this.checkService.checkScanner(app)) {
        right = true;
      }

      app.blackKing = {
        ...saveFigure,
        positionY: saveFigure.positionY - 1
      };

      if (this.checkService.checkScanner(app)) {
        left = true;
      }

      app.blackKing = {
        ...saveFigure,
        positionX: saveFigure.positionX + 1,
        positionY: saveFigure.positionY + 1
      };

      if (this.checkService.checkScanner(app)) {
        bottomRight = true;
      }

      app.blackKing = {
        ...saveFigure,
        positionX: saveFigure.positionX + 1,
        positionY: saveFigure.positionY - 1
      };

      if (this.checkService.checkScanner(app)) {
        bottomLeft = true;
      }

      app.blackKing = {
        ...saveFigure,
        positionX: saveFigure.positionX - 1,
        positionY: saveFigure.positionY - 1
      };

      if (this.checkService.checkScanner(app)) {
        topLef = true;
      }

      app.blackKing = {
        ...saveFigure,
        positionX: saveFigure.positionX - 1,
        positionY: saveFigure.positionY + 1
      };

      if (this.checkService.checkScanner(app)) {
        topRigt = true;
      }

      app.blackKing = saveFigure;

      if (left && right && top && topLef && topRigt && bottom && bottomLeft && bottomRight) {
        return true;
      } else {
        return false;
      }
    }

    if (color == 'black') {
      // rock
      if (app.whiteRock.positionX > 0) {
        moveArr = this.rockMove(app.whiteRock.positionX, app.whiteRock.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whiteRock2.positionX > 0) {
        moveArr = this.rockMove(app.whiteRock2.positionX, app.whiteRock2.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.chooseRock.positionX > 0) {
        moveArr = this.rockMove(app.chooseRock.positionX, app.chooseRock.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      //knight
      if (app.whiteKnight.positionX > 0) {
        moveArr = this.knightMove(app.whiteKnight.positionX, app.whiteKnight.positionY);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whiteKnight2.positionX > 0) {
        moveArr = this.knightMove(app.whiteKnight2.positionX, app.whiteKnight2.positionY);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.chooseKnight.positionX > 0) {
        moveArr = this.knightMove(app.chooseKnight.positionX, app.chooseKnight.positionY);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      //bishop
      if (app.whiteBishop.positionX > 0) {
        moveArr = this.bishopMove(app.whiteBishop.positionX, app.whiteBishop.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whiteBishop2.positionX > 0) {
        moveArr = this.bishopMove(app.whiteBishop2.positionX, app.whiteBishop2.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.chooseBishop.positionX > 0) {
        moveArr = this.bishopMove(app.chooseBishop.positionX, app.chooseBishop.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      //queen
      if (app.whiteQueen.positionX > 0) {
        moveArr = this.queenMove(app.whiteQueen.positionX, app.whiteQueen.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.chooseQueen.positionX > 0) {
        moveArr = this.queenMove(app.chooseQueen.positionX, app.chooseQueen.positionY, app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      //pawn
      if (app.whitePawn1.positionX > 0) {
        moveArr = this.pawnMove(app.whitePawn1.positionX, app.whitePawn1.positionY, 'white', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whitePawn2.positionX > 0) {
        moveArr = this.pawnMove(app.whitePawn2.positionX, app.whitePawn2.positionY, 'white', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whitePawn3.positionX > 0) {
        moveArr = this.pawnMove(app.whitePawn3.positionX, app.whitePawn3.positionY, 'white', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whitePawn4.positionX > 0) {
        moveArr = this.pawnMove(app.whitePawn4.positionX, app.whitePawn4.positionY, 'white', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whitePawn5.positionX > 0) {
        moveArr = this.pawnMove(app.whitePawn5.positionX, app.whitePawn5.positionY, 'white', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whitePawn6.positionX > 0) {
        moveArr = this.pawnMove(app.whitePawn6.positionX, app.whitePawn6.positionY, 'white', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whitePawn7.positionX > 0) {
        moveArr = this.pawnMove(app.whitePawn7.positionX, app.whitePawn7.positionY, 'white', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }
      if (app.whitePawn8.positionX > 0) {
        moveArr = this.pawnMove(app.whitePawn8.positionX, app.whitePawn8.positionY, 'white', app);
        for (let i = 0; i < checkArr.length; i++) {
          for (let j = 0; j < moveArr.length; j++) {
            if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
              return false;
            }
          }
        }
      }

      moveArr = this.kingMove(app.whiteKing.positionX, app.whiteKing.positionY);
      for (let i = 0; i < checkArr.length; i++) {
        for (let j = 0; j < moveArr.length; j++) {
          if (checkArr[i].positionX == moveArr[j].positionX && checkArr[i].positionY == moveArr[j].positionY) {
            let saveFigure = app.whiteKing;
            app.whiteKing = {
              ...app.whiteKing,
              positionX: checkArr[i].positionX,
              positionY: checkArr[i].positionY
            }
            if (!this.checkService.checkScanner(app)) {
              app.whiteKing = saveFigure;
              return false;
            }
            app.whiteKing = saveFigure;
          }
        }
      }

      let saveFigure = app.whiteKing;
      let left: boolean = false;
      let right: boolean = false;
      let topLef: boolean = false;
      let topRigt: boolean = false;
      let top: boolean = false;
      let bottom: boolean = false;
      let bottomLeft: boolean = false;
      let bottomRight: boolean = false;

      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY, app) != 'black' && saveFigure.positionX - 1 < 1)
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY, app) == 'white'
        )
      ) {
        top = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY, app) != 'black' && saveFigure.positionX + 1 > 8)
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY, app) == 'white'
        )
      ) {
        bottom = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX, saveFigure.positionY + 1, app) != 'black' && saveFigure.positionY + 1 > 8)
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX, saveFigure.positionY + 1, app) == 'white'
        )
      ) {
        right = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX, saveFigure.positionY - 1, app) != 'black' && saveFigure.positionY - 1 < 1)
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX, saveFigure.positionY - 1, app) == 'white'
        )
      ) {
        left = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY - 1, app) != 'black' && (saveFigure.positionX - 1 < 1 || (saveFigure.positionY - 1 < 1)))
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY - 1, app) == 'white'
        )
      ) {
        topLef = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY + 1, app) != 'black' && ((saveFigure.positionX - 1 < 1) || (saveFigure.positionY + 1 > 8)))
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX - 1, saveFigure.positionY + 1, app) == 'white'
        )
      ) {
        topRigt = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY - 1, app) != 'black' && ((saveFigure.positionX + 1 > 8) || (saveFigure.positionY - 1 < 1)))
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY - 1, app) == 'white'
        )
      ) {
        bottomLeft = true;
      }
      if (
        (
          (this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY + 1, app) != 'black' && ((saveFigure.positionX + 1 > 8) || (saveFigure.positionY + 1 > 8)))
          ||
          this.figureFunctionService.getFigureColor(saveFigure.positionX + 1, saveFigure.positionY + 1, app) == 'white'
        )
      ) {
        bottomRight = true;
      }

      app.whiteKing = {
        ...saveFigure,
        positionX: saveFigure.positionX + 1
      };

      if (this.checkService.checkScanner(app)) {
        bottom = true;
      }

      app.whiteKing = {
        ...saveFigure,
        positionX: saveFigure.positionX - 1
      };

      if (this.checkService.checkScanner(app)) {
        top = true;
      }

      app.whiteKing = {
        ...saveFigure,
        positionY: saveFigure.positionY + 1
      };

      if (this.checkService.checkScanner(app)) {
        right = true;
      }

      app.whiteKing = {
        ...saveFigure,
        positionY: saveFigure.positionY - 1
      };

      if (this.checkService.checkScanner(app)) {
        left = true;
      }

      app.whiteKing = {
        ...saveFigure,
        positionX: saveFigure.positionX + 1,
        positionY: saveFigure.positionY + 1
      };

      if (this.checkService.checkScanner(app)) {
        bottomRight = true;
      }

      app.whiteKing = {
        ...saveFigure,
        positionX: saveFigure.positionX + 1,
        positionY: saveFigure.positionY - 1
      };

      if (this.checkService.checkScanner(app)) {
        bottomLeft = true;
      }

      app.whiteKing = {
        ...saveFigure,
        positionX: saveFigure.positionX - 1,
        positionY: saveFigure.positionY - 1
      };

      if (this.checkService.checkScanner(app)) {
        topLef = true;
      }

      app.whiteKing = {
        ...saveFigure,
        positionX: saveFigure.positionX - 1,
        positionY: saveFigure.positionY + 1
      };

      if (this.checkService.checkScanner(app)) {
        topRigt = true;
      }

      app.whiteKing = saveFigure;

      if (left && right && top && topLef && topRigt && bottom && bottomLeft && bottomRight) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}

