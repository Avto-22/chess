import { Component, OnInit } from '@angular/core';
import { ChooseFigure, EndPawn, Position, KilledFigure } from './app.model';
import { FigureFunctionService } from './figure-function.service';
import { FigureRulesService } from './figure-rules.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chess';

  constructor(
    public figureRulesService: FigureRulesService,
    public figureFunctionService:FigureFunctionService
    ) { }

  columnrray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  rowArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  nextPosition: Position = {
    positionX: -1,
    positionY: -1
  };
  checkMaker: Position;

  checkKing: string = '';

  isGameOver: boolean = false;

  isKillTarget: boolean = false;

  isWhiteMove: boolean = true;
  isBlackMove: boolean = false;

  chooseWhiteFigure: string[] = ['queen', 'rock', 'bishop', 'knight'];
  chooseBlackFigure: string[] = ['black-queen', 'black-rock', 'black-bishop', 'black-knight'];

  chooseWhite: boolean = false;
  chooseBlack: boolean = false;

  endPawn: EndPawn;

  lastKilledFigure: KilledFigure = {
    killedName: '',
    killedColor: '',
    killedPositionX: 0,
    killedPositionY: 0
  }

  isSubmited: boolean;

  check: boolean = false;

  deletedBlackFigure: string[] = [];

  deletedWhiteFigure: string[] = [];

  whiteKing = {
    name: 'white-king',
    color: 'white',
    positionY: 4,
    positionX: 1
  };

  whiteRock = {
    name: 'white-rock',
    color: 'white',
    positionY: 1,
    positionX: 1
  };

  whiteBishop = {
    name: 'white-bishop',
    color: 'white',
    positionY: 3,
    positionX: 1
  };
  whiteQueen = {
    name: 'white-queen',
    color: 'white',
    positionY: 5,
    positionX: 1
  }

  whiteKnight = {
    name: 'white-knight',
    color: 'white',
    positionY: 2,
    positionX: 1
  }


  whitePawn1 = {
    name: 'white-pawn1',
    color: 'white',
    positionX: 2,
    positionY: 1
  }

  whitePawn2 = {
    name: 'white-pawn2',
    color: 'white',
    positionX: 2,
    positionY: 2
  }

  whitePawn3 = {
    name: 'white-pawn3',
    color: 'white',
    positionX: 2,
    positionY: 3
  }

  whitePawn4 = {
    name: 'white-pawn4',
    color: 'white',
    positionX: 2,
    positionY: 4
  }

  whitePawn5 = {
    name: 'white-pawn5',
    color: 'white',
    positionX: 2,
    positionY: 5
  }

  whitePawn6 = {
    name: 'white-pawn6',
    color: 'white',
    positionX: 2,
    positionY: 6
  }

  whitePawn7 = {
    name: 'white-pawn7',
    color: 'white',
    positionX: 2,
    positionY: 7
  }

  whitePawn8 = {
    name: 'white-pawn8',
    color: 'white',
    positionX: 2,
    positionY: 8
  }

  blackPawn1 = {
    name: 'black-pawn1',
    color: 'black',
    positionX: 7,
    positionY: 1
  }

  blackPawn2 = {
    name: 'black-pawn2',
    color: 'black',
    positionX: 7,
    positionY: 2
  }

  blackPawn3 = {
    name: 'black-pawn3',
    color: 'black',
    positionX: 7,
    positionY: 3
  }

  blackPawn4 = {
    name: 'black-pawn4',
    color: 'black',
    positionX: 7,
    positionY: 4
  }

  blackPawn5 = {
    name: 'black-pawn5',
    color: 'black',
    positionX: 7,
    positionY: 5
  }

  blackPawn6 = {
    name: 'black-pawn6',
    color: 'black',
    positionX: 7,
    positionY: 6
  }

  blackPawn7 = {
    name: 'black-pawn7',
    color: 'black',
    positionX: 7,
    positionY: 7
  }

  blackPawn8 = {
    name: 'black-pawn8',
    color: 'black',
    positionX: 7,
    positionY: 8
  }

  blackKing = {
    name: 'black-king',
    color: 'black',
    positionY: 4,
    positionX: 8
  };

  blackRock = {
    name: 'black-rock',
    color: 'black',
    positionY: 1,
    positionX: 8
  };

  blackBishop = {
    name: 'black-bishop',
    color: 'black',
    positionY: 3,
    positionX: 8
  };

  blackQueen = {
    name: 'black-queen',
    color: 'black',
    positionY: 5,
    positionX: 8
  };

  blackKnight = {
    name: 'black-knight',
    color: 'black',
    positionY: 2,
    positionX: 8
  };

  whiteRock2 = {
    name: 'white-rock2',
    color: 'white',
    positionY: 8,
    positionX: 1
  };

  whiteBishop2 = {
    name: 'white-bishop2',
    color: 'white',
    positionY: 6,
    positionX: 1
  };


  whiteKnight2 = {
    name: 'white-knight2',
    color: 'white',
    positionY: 7,
    positionX: 1
  };

  blackRock2 = {
    name: 'black-rock2',
    color: 'black',
    positionY: 8,
    positionX: 8
  };

  blackBishop2 = {
    name: 'black-bishop2',
    color: 'black',
    positionY: 6,
    positionX: 8
  };

  blackKnight2 = {
    name: 'black-knight2',
    color: 'black',
    positionY: 7,
    positionX: 8
  };

  chooseQueen = {
    name: 'white_queen',
    color: 'white',
    positionX: -1,
    positionY: -1
  }

  chooseBlackQueen = {
    name: 'black_queen',
    color: 'black',
    positionX: -1,
    positionY: -1
  }

  chooseRock = {
    name: 'white_rock',
    color: 'white',
    positionX: -1,
    positionY: -1
  }

  chooseBlackRock = {
    name: 'black_rock',
    color: 'black',
    positionX: -1,
    positionY: -1
  }

  chooseBishop = {
    name: 'white_bishop',
    color: 'white',
    positionX: -1,
    positionY: -1
  }

  chooseBlackBishop = {
    name: 'black_bishop',
    color: 'black',
    positionX: -1,
    positionY: -1
  }

  chooseKnight = {
    name: 'white_knight',
    color: 'white',
    positionX: -1,
    positionY: -1
  }

  chooseBlackKnight = {
    name: 'black_knight',
    color: 'black',
    positionX: -1,
    positionY: -1
  }

  submit() {
    this.isSubmited = !this.isSubmited;
  }

  chooseFigure(figure: string) {
    let positionX: number = this.endPawn.pawnPositionX;
    let positionY: number = this.endPawn.pawnPositionY;
    this.figureFunctionService.deleteOrRestoreFigure(true, false, this.endPawn.pawnName, this);
    // ------------------------- white figure
    if (figure == 'queen') {
      this.chooseQueen = {
        ...this.chooseQueen,
        positionX,
        positionY
      }
    }
    if (figure == 'rock') {
      this.chooseRock = {
        ...this.chooseRock,
        positionX,
        positionY
      }
    }
    if (figure == 'bishop') {
      this.chooseBishop = {
        ...this.chooseBishop,
        positionX,
        positionY
      }
    }
    if (figure == 'knight') {
      this.chooseKnight = {
        ...this.chooseKnight,
        positionX,
        positionY
      }
    }

    // -------------------- black figure
    if (figure == 'black-queen') {
      this.chooseBlackQueen = {
        ...this.chooseBlackQueen,
        positionX,
        positionY
      }
      console.log(this.chooseQueen)
    }
    if (figure == 'black-rock') {
      this.chooseBlackRock = {
        ...this.chooseBlackRock,
        positionX,
        positionY
      }
    }
    if (figure == 'black-bishop') {
      this.chooseBlackBishop = {
        ...this.chooseBlackBishop,
        positionX,
        positionY
      }
    }
    if (figure == 'black-knight') {
      this.chooseBlackKnight = {
        ...this.chooseBlackKnight,
        positionX,
        positionY
      }
    }
    this.chooseWhite = false;
    this.chooseBlack = false;
  }

  rematch() {
    this.checkKing = '';
    this.isGameOver = false;
    this.isKillTarget = false;
    this.isWhiteMove = true;
    this.isBlackMove = false;
    this.chooseWhite = false;
    this.chooseBlack = false;
    this.isSubmited = false;
    this.check = false;
    this.deletedBlackFigure = [];
    this.deletedWhiteFigure = [];

    this.lastKilledFigure = {
      killedName: '',
      killedColor: '',
      killedPositionX: 0,
      killedPositionY: 0
    }

    this.check = false;
    this.deletedBlackFigure = [];
    this.deletedWhiteFigure = [];
    this.whiteKing = {
      name: 'white-king',
      color: 'white',
      positionY: 4,
      positionX: 1
    };

    this.whiteRock = {
      name: 'white-rock',
      color: 'white',
      positionY: 1,
      positionX: 1
    };

    this.whiteBishop = {
      name: 'white-bishop',
      color: 'white',
      positionY: 3,
      positionX: 1
    };
    this.whiteQueen = {
      name: 'white-queen',
      color: 'white',
      positionY: 5,
      positionX: 1
    }

    this.whiteKnight = {
      name: 'white-knight',
      color: 'white',
      positionY: 2,
      positionX: 1
    }


    this.whitePawn1 = {
      name: 'white-pawn1',
      color: 'white',
      positionX: 2,
      positionY: 1
    }

    this.whitePawn2 = {
      name: 'white-pawn2',
      color: 'white',
      positionX: 2,
      positionY: 2
    }

    this.whitePawn3 = {
      name: 'white-pawn3',
      color: 'white',
      positionX: 2,
      positionY: 3
    }

    this.whitePawn4 = {
      name: 'white-pawn4',
      color: 'white',
      positionX: 2,
      positionY: 4
    }

    this.whitePawn5 = {
      name: 'white-pawn5',
      color: 'white',
      positionX: 2,
      positionY: 5
    }

    this.whitePawn6 = {
      name: 'white-pawn6',
      color: 'white',
      positionX: 2,
      positionY: 6
    }

    this.whitePawn7 = {
      name: 'white-pawn7',
      color: 'white',
      positionX: 2,
      positionY: 7
    }

    this.whitePawn8 = {
      name: 'white-pawn8',
      color: 'white',
      positionX: 2,
      positionY: 8
    }

    this.blackPawn1 = {
      name: 'black-pawn1',
      color: 'black',
      positionX: 7,
      positionY: 1
    }

    this.blackPawn2 = {
      name: 'black-pawn2',
      color: 'black',
      positionX: 7,
      positionY: 2
    }

    this.blackPawn3 = {
      name: 'black-pawn3',
      color: 'black',
      positionX: 7,
      positionY: 3
    }

    this.blackPawn4 = {
      name: 'black-pawn4',
      color: 'black',
      positionX: 7,
      positionY: 4
    }

    this.blackPawn5 = {
      name: 'black-pawn5',
      color: 'black',
      positionX: 7,
      positionY: 5
    }

    this.blackPawn6 = {
      name: 'black-pawn6',
      color: 'black',
      positionX: 7,
      positionY: 6
    }

    this.blackPawn7 = {
      name: 'black-pawn7',
      color: 'black',
      positionX: 7,
      positionY: 7
    }

    this.blackPawn8 = {
      name: 'black-pawn8',
      color: 'black',
      positionX: 7,
      positionY: 8
    }

    this.blackKing = {
      name: 'black-king',
      color: 'black',
      positionY: 4,
      positionX: 8
    };

    this.blackRock = {
      name: 'black-rock',
      color: 'black',
      positionY: 1,
      positionX: 8
    };

    this.blackBishop = {
      name: 'black-bishop',
      color: 'black',
      positionY: 3,
      positionX: 8
    };

    this.blackQueen = {
      name: 'black-queen',
      color: 'black',
      positionY: 5,
      positionX: 8
    };

    this.blackKnight = {
      name: 'black-knight',
      color: 'black',
      positionY: 2,
      positionX: 8
    };

    this.whiteRock2 = {
      name: 'white-rock2',
      color: 'white',
      positionY: 8,
      positionX: 1
    };

    this.whiteBishop2 = {
      name: 'white-bishop2',
      color: 'white',
      positionY: 6,
      positionX: 1
    };


    this.whiteKnight2 = {
      name: 'white-knight2',
      color: 'white',
      positionY: 7,
      positionX: 1
    };

    this.blackRock2 = {
      name: 'black-rock2',
      color: 'black',
      positionY: 8,
      positionX: 8
    };

    this.blackBishop2 = {
      name: 'black-bishop2',
      color: 'black',
      positionY: 6,
      positionX: 8
    };

    this.blackKnight2 = {
      name: 'black-knight2',
      color: 'black',
      positionY: 7,
      positionX: 8
    };

    this.chooseQueen = {
      name: 'white_queen',
      color: 'white',
      positionX: -1,
      positionY: -1
    }

    this.chooseBlackQueen = {
      name: 'black_queen',
      color: 'black',
      positionX: -1,
      positionY: -1
    }

    this.chooseRock = {
      name: 'white_rock',
      color: 'white',
      positionX: -1,
      positionY: -1
    }

    this.chooseBlackRock = {
      name: 'black_rock',
      color: 'black',
      positionX: -1,
      positionY: -1
    }

    this.chooseBishop = {
      name: 'white_bishop',
      color: 'white',
      positionX: -1,
      positionY: -1
    }

    this.chooseBlackBishop = {
      name: 'black_bishop',
      color: 'black',
      positionX: -1,
      positionY: -1
    }

    this.chooseKnight = {
      name: 'white_knight',
      color: 'white',
      positionX: -1,
      positionY: -1
    }

    this.chooseBlackKnight = {
      name: 'black_knight',
      color: 'black',
      positionX: -1,
      positionY: -1
    }
  }

  ngOnInit(): void {
    if (this.isWhiteMove) {
      this.submit();
    }
  }
}
