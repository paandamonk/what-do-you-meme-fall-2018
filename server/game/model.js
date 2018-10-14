const captions  = require('./captions');
const pictures  = require('./pictures');

class Game {
    constructor(){
        this.picture = "";
        this.players = [];
        this.playedCaptions = captions;
        pictures().then(x=> 
            this.pictures = x
        );
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.captions = [];
        this.score = 0;
    }
}

module.exports = {
    Player, Game
}