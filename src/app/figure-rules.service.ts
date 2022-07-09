import { AppComponent } from './app.component';
import { Injectable } from '@angular/core';
import { Position } from './app.model';
import { FigureFunctionService } from './figure-function.service';
import { FigureMoveService } from './figure-move.service';
import { CheckService } from './check.service';
import { GameOverService } from './game-over.service';


@Injectable({
  providedIn: 'root'
})
export class FigureRulesService {

  constructor(
    private figureFunctionService: FigureFunctionService,
    private figureMoveService: FigureMoveService,
    private checkService: CheckService,
    private gameOverService: GameOverService
  ) { }

  changePosition(positionX: number, positionY: number, app: AppComponent) {
    if (this.figureFunctionService.checkFigure(positionX, positionY, app)) {
      if (!this.figureFunctionService.checkFigure(app.nextPosition.positionX, app.nextPosition.positionY, app)) {
        app.nextPosition = {
          positionX: Object.values(app).find(x => x.positionX == positionX && x.positionY == positionY).positionX,
          positionY: Object.values(app).find(x => x.positionX == positionX && x.positionY == positionY).positionY
        }
      }

      if (
        (app.isWhiteMove && this.figureFunctionService.getFigureColor(positionX, positionY, app) == 'black' && app.lastFigureColor != 'white')
        ||
        (app.isBlackMove && this.figureFunctionService.getFigureColor(positionX, positionY, app) == 'white' && app.lastFigureColor != 'black')
      ) {
        
        return;
      } else if (
        (app.isWhiteMove && app.lastFigureColor != 'white')
        ||
        (app.isBlackMove && app.lastFigureColor != 'black')) {
        app.nextPosition.positionX = positionX;
        app.nextPosition.positionY = positionY;
      }

    } if (!this.figureFunctionService.checkFigure(positionX, positionY, app) || this.figureFunctionService.checkFigure(positionX, positionY, app)) {

      app.lastFigureColor = this.figureFunctionService.getFigureColor(positionX, positionY, app);

      if (this.figureFunctionService.scannFigure(app.whiteKing, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkKing(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whiteKing;
            app.whiteKing = {
              name: 'white-king',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whiteKing = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whiteRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whiteRock;
            app.whiteRock = {
              name: 'white-rock',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whiteRock = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whiteRock.positionX, positionY: app.whiteRock.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whiteBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whiteBishop;
            app.whiteBishop = {
              name: 'white-bishop',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whiteBishop = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whiteBishop.positionX, positionY: app.whiteBishop.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }
        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whiteKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whiteKnight;
            app.whiteKnight = {
              name: 'white-knight',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whiteKnight = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whiteKnight.positionX, positionY: app.whiteKnight.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whiteQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whiteQueen;
            app.whiteQueen = {
              name: 'white-queen',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whiteQueen = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whiteQueen.positionX, positionY: app.whiteQueen.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }

            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          }
          else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }
        }
        else {
          console.log('invalid position')
        }
      }
      // -----------------------------
      else if (this.figureFunctionService.scannFigure(app.whiteRock2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whiteRock2;
            app.whiteRock2 = {
              name: 'white-rock2',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whiteRock2 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whiteRock2.positionX, positionY: app.whiteRock2.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whiteBishop2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whiteBishop2;
            app.whiteBishop2 = {
              name: 'white-bishop2',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whiteBishop2 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whiteBishop2.positionX, positionY: app.whiteBishop2.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whiteKnight2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whiteKnight2;
            app.whiteKnight2 = {
              name: 'white-knight2',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whiteKnight2 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whiteKnight2.positionX, positionY: app.whiteKnight2.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      }
      // ----------------------------------------------------------------------------------------------
      else if (this.figureFunctionService.scannFigure(app.blackKing, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkKing(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackKing;
            app.blackKing = {
              name: 'black-king',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackKing = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }

            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackRock;
            app.blackRock = {
              name: 'black-rock',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackRock = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackRock.positionX, positionY: app.blackRock.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackBishop;
            app.blackBishop = {
              name: 'black-bishop',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackBishop = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackBishop.positionX, positionY: app.blackBishop.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackKnight;
            app.blackKnight = {
              name: 'black-knight',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackKnight = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackKnight.positionX, positionY: app.blackKnight.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackQueen;
            console.log(app.checkKing);
            app.blackQueen = {
              name: 'black-queen',
              color: 'black',
              positionX,
              positionY
            }

            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              console.log('shemovedi');
              app.blackQueen = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackQueen.positionX, positionY: app.blackQueen.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }

            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          }
          else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }
        }
        else {
          console.log('invalid position')
        }
      }

      // -----------------------------
      else if (this.figureFunctionService.scannFigure(app.blackRock2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackRock2;
            app.blackRock2 = {
              name: 'black-rock2',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackRock2 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackRock2.positionX, positionY: app.blackRock2.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackBishop2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackBishop2;
            app.blackBishop2 = {
              name: 'black-bishop2',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackBishop2 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackBishop2.positionX, positionY: app.blackBishop2.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackKnight2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackKnight2;
            app.blackKnight2 = {
              name: 'black-knight2',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackKnight2 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackKnight2.positionX, positionY: app.blackKnight2.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        }
        else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackPawn1, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBlackkPawn(app.blackPawn1.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackPawn1;
            app.blackPawn1 = {
              name: 'black-pawn1',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackPawn1 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackPawn1.positionX, positionY: app.blackPawn1.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      }
      else if (this.figureFunctionService.scannFigure(app.blackPawn2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBlackkPawn(app.blackPawn2.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackPawn2;
            app.blackPawn2 = {
              name: 'black-pawn2',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackPawn2 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackPawn2.positionX, positionY: app.blackPawn2.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackPawn3, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBlackkPawn(app.blackPawn3.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackPawn3;
            app.blackPawn3 = {
              name: 'black-pawn3',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackPawn3 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackPawn3.positionX, positionY: app.blackPawn3.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackPawn4, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBlackkPawn(app.blackPawn4.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackPawn4;
            app.blackPawn4 = {
              name: 'black-pawn4',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackPawn4 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackPawn4.positionX, positionY: app.blackPawn4.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackPawn5, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBlackkPawn(app.blackPawn5.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackPawn5;
            app.blackPawn5 = {
              name: 'black-pawn5',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackPawn5 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackPawn5.positionX, positionY: app.blackPawn5.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackPawn6, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBlackkPawn(app.blackPawn6.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackPawn6;
            app.blackPawn6 = {
              name: 'black-pawn6',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackPawn6 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackPawn6.positionX, positionY: app.blackPawn6.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackPawn7, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBlackkPawn(app.blackPawn7.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackPawn7;
            app.blackPawn7 = {
              name: 'black-pawn7',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackPawn7 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackPawn7.positionX, positionY: app.blackPawn7.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.blackPawn8, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBlackkPawn(app.blackPawn8.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.blackPawn8;
            app.blackPawn8 = {
              name: 'black-pawn8',
              color: 'black',
              positionX,
              positionY
            }
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.blackPawn8 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.blackPawn8.positionX, positionY: app.blackPawn8.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      }
      // ----------------------------------------------------------
      else if (this.figureFunctionService.scannFigure(app.whitePawn1, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkPawn(app.whitePawn1.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whitePawn1
            app.whitePawn1 = {
              name: 'white-pawn1',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whitePawn1 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whitePawn1.positionX, positionY: app.whitePawn1.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }

            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      }
      else if (this.figureFunctionService.scannFigure(app.whitePawn2, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkPawn(app.whitePawn2.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whitePawn2;
            app.whitePawn2 = {
              name: 'white-pawn2',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whitePawn2 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whitePawn2.positionX, positionY: app.whitePawn2.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whitePawn3, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkPawn(app.whitePawn3.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whitePawn3;
            app.whitePawn3 = {
              name: 'white-pawn3',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whitePawn3 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whitePawn3.positionX, positionY: app.whitePawn3.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position');
        }
      } else if (this.figureFunctionService.scannFigure(app.whitePawn4, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkPawn(app.whitePawn4.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whitePawn4;
            app.whitePawn4 = {
              name: 'white-pawn4',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whitePawn4 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whitePawn4.positionX, positionY: app.whitePawn4.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whitePawn5, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkPawn(app.whitePawn5.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whitePawn5;
            app.whitePawn5 = {
              name: 'white-pawn5',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whitePawn5 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whitePawn5.positionX, positionY: app.whitePawn5.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whitePawn6, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkPawn(app.whitePawn6.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whitePawn6;
            app.whitePawn6 = {
              name: 'white-pawn6',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whitePawn6 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whitePawn6.positionX, positionY: app.whitePawn6.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.whitePawn7, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkPawn(app.whitePawn7.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whitePawn7;
            app.whitePawn7 = {
              name: 'white-pawn7',
              color: 'white',
              positionX,
              positionY
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whitePawn7 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whitePawn7.positionX, positionY: app.whitePawn7.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }

      } else if (this.figureFunctionService.scannFigure(app.whitePawn8, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkPawn(app.whitePawn8.name, app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.whitePawn8;
            app.whitePawn8 = {
              name: 'white-pawn8',
              color: 'white',
              positionX,
              positionY
            };
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.whitePawn8 = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.whitePawn8.positionX, positionY: app.whitePawn8.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      }
      // choose figure
      else if (this.figureFunctionService.scannFigure(app.chooseQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.chooseQueen;
            app.chooseQueen = {
              name: 'queen',
              color: 'white',
              positionX: positionX,
              positionY: positionY
            };
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.chooseQueen = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.chooseQueen.positionX, positionY: app.chooseQueen.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.chooseBlackQueen, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkQueen(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.chooseBlackQueen;
            app.chooseBlackQueen = {
              name: 'black-queen',
              color: 'black',
              positionX: positionX,
              positionY: positionY
            };
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.chooseBlackQueen = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.chooseBlackQueen.positionX, positionY: app.chooseBlackQueen.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.chooseRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.chooseRock;
            app.chooseRock = {
              name: 'rock',
              color: 'white',
              positionX: positionX,
              positionY: positionY
            };
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.chooseRock = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.chooseRock.positionX, positionY: app.chooseRock.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.chooseBlackRock, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkRock(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.chooseBlackRock;
            app.chooseBlackRock = {
              name: 'black-rock',
              color: 'black',
              positionX: positionX,
              positionY: positionY
            };
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.chooseBlackRock = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.chooseBlackRock.positionX, positionY: app.chooseBlackRock.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.chooseBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.chooseBishop;
            app.chooseBishop = {
              name: 'bishop',
              color: 'white',
              positionX: positionX,
              positionY: positionY
            };
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.chooseBishop = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.chooseBishop.positionX, positionY: app.chooseBishop.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.chooseBlackBishop, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkBishop(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.chooseBlackBishop;
            app.chooseBlackBishop = {
              name: 'black-bishop',
              color: 'black',
              positionX: positionX,
              positionY: positionY
            };
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.chooseBlackBishop = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.chooseBlackBishop.positionX, positionY: app.chooseBlackBishop.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.chooseKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isWhiteMove) {
            let saveFigure = app.chooseKnight;
            app.chooseKnight = {
              name: 'knight',
              color: 'white',
              positionX: positionX,
              positionY: positionY
            };
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              app.chooseKnight = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'black') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.chooseKnight.positionX, positionY: app.chooseKnight.positionY }, app), 'white', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'white')) {
              app.isWhiteMove = false;
              app.isBlackMove = true;
            }
            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      } else if (this.figureFunctionService.scannFigure(app.chooseBlackKnight, app.nextPosition.positionX, app.nextPosition.positionY)) {
        if (this.figureMoveService.checkKnight(app.nextPosition.positionX, app.nextPosition.positionY, positionX, positionY, app).find(x => x.positionX == positionX && x.positionY == positionY)) {
          if (app.isBlackMove) {
            let saveFigure = app.chooseBlackKnight;
            app.chooseBlackKnight = {
              name: 'black-knight',
              color: 'black',
              positionX: positionX,
              positionY: positionY
            };
            if (app.checkKing == 'black' && this.checkService.checkScanner(app)) {
              app.chooseBlackKnight = saveFigure;
              if (app.isKillTarget) {
                this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
              }
              console.log('ქიში გეხსნება მეგობარო');
            }
            if (this.checkService.checkScanner(app) && app.checkKing == 'white') {
              if (app.checkMaker.positionX == saveFigure.positionX && app.checkMaker.positionY == saveFigure.positionY) {
                if (this.gameOverService.end(this.gameOverService.gameOver({ positionX: app.chooseBlackKnight.positionX, positionY: app.chooseBlackKnight.positionY }, app), 'black', app)) {
                  app.isGameOver = true;
                }
              }
            }
            app.isKillTarget = false;
            if (!(this.checkService.checkScanner(app) && app.checkKing == 'black')) {
              app.isBlackMove = false;
              app.isWhiteMove = true;
            }

            return;
          } else {
            app.nextPosition.positionX = positionX;
            app.nextPosition.positionY = positionY;
            if (app.isKillTarget) {
              this.figureFunctionService.deleteOrRestoreFigure(false, true, app.lastKilledFigure.killedName, app);
            }
          }

        } else {
          console.log('invalid position')
        }
      }
    }
  }
}