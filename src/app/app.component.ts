import { Component, OnInit } from '@angular/core';
import { Position } from './app.model';
import {FigureRulesService} from './figure-rules.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'chess';
  constructor(public figureRulesService:FigureRulesService){}
  columnrray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  rowArray: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  nextPosition: Position = {
    positionX: -1,
    positionY: -1
  };

  isSubmited: boolean;

  whiteKing = {
    name: 'white-king',
    color:'white',
    positionY: 4,
    positionX: 1
  };

  whiteRock = {
    name: 'white-rock',
    color:'white',
    positionY: 1,
    positionX: 1
  };

  whiteBishop = {
    name: 'white-bishop',
    color:'white',
    positionY: 3,
    positionX: 1
  };
  whiteQueen = {
    name: 'white-queen',
    color:'white',
    positionY: 5,
    positionX: 1
  }

  whiteKnight = {
    name: 'white-knight',
    color:'white',
    positionY: 2,
    positionX: 1
  }


  whitePawn1 = {
    name: 'white-pawn1',
    color:'white',
    positionX: 2,
    positionY: 1
  }

  whitePawn2 = {
    name: 'white-pawn2',
    color:'white',
    positionX: 2,
    positionY: 2
  }

  whitePawn3 = {
    name: 'white-pawn3',
    color:'white',
    positionX: 2,
    positionY: 3
  }

  whitePawn4 = {
    name: 'white-pawn4',
    color:'white',
    positionX: 2,
    positionY: 4
  }

  whitePawn5 = {
    name: 'white-pawn5',
    color:'white',
    positionX: 2,
    positionY: 5
  }

  whitePawn6 = {
    name: 'white-pawn6',
    color:'white',
    positionX: 2,
    positionY: 6
  }

  whitePawn7 = {
    name: 'white-pawn7',
    color:'white',
    positionX: 2,
    positionY: 7
  }

  whitePawn8 = {
    name: 'white-pawn8',
    color:'white',
    positionX: 2,
    positionY: 8
  }

  blackPawn1 = {
    name: 'black-pawn1',
    color:'black',
    positionX: 7,
    positionY: 1
  }

  blackPawn2 = {
    name: 'black-pawn2',
    color:'black',
    positionX: 7,
    positionY: 2
  }

  blackPawn3 = {
    name: 'black-pawn3',
    color:'black',
    positionX: 7,
    positionY: 3
  }

  blackPawn4 = {
    name: 'black-pawn4',
    color:'black',
    positionX: 7,
    positionY: 4
  }

  blackPawn5 = {
    name: 'black-pawn5',
    color:'black',
    positionX: 7,
    positionY: 5
  }

  blackPawn6 = {
    name: 'black-pawn6',
    color:'black',
    positionX: 7,
    positionY: 6
  }

  blackPawn7 = {
    name: 'black-pawn7',
    color:'black',
    positionX: 7,
    positionY: 7
  }

  blackPawn8 = {
    name: 'black-pawn8',
    color:'black',
    positionX: 7,
    positionY: 8
  }

  blackKing = {
    name: 'black-king',
    color:'black',
    positionY: 4,
    positionX: 8
  };

  blackRock = {
    name: 'black-rock',
    color:'black',
    positionY: 1,
    positionX: 8
  };

  blackBishop = {
    name: 'black-bishop',
    color:'black',
    positionY: 3,
    positionX: 8
  };

  blackQueen = {
    name: 'black-queen',
    color:'black',
    positionY: 5,
    positionX: 8
  };

  blackKnight = {
    name: 'black-knight',
    color:'black',
    positionY: 2,
    positionX: 8
  };

  whiteRock2 = {
    name: 'white-rock2',
    color:'white',
    positionY: 8,
    positionX: 1
  };

  whiteBishop2 = {
    name: 'white-bishop2',
    color:'white',
    positionY: 6,
    positionX: 1
  };


  whiteKnight2 = {
    name: 'white-knight2',
    color:'white',
    positionY: 7,
    positionX: 1
  };

  blackRock2 = {
    name: 'black-rock2',
    color:'black',
    positionY: 8,
    positionX: 8
  };

  blackBishop2 = {
    name: 'black-bishop2',
    color:'black',
    positionY: 6,
    positionX: 8
  };

  blackKnight2 = {
    name: 'black-knight2',
    color:'black',
    positionY: 7,
    positionX: 8
  };
  
  submit() {
    this.isSubmited = !this.isSubmited;
  }

  ngOnInit(): void {
    // ...
  }
}
