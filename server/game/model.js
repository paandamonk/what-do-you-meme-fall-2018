const captions  = require('./captions');
const picture_loader  = require('./pictures');

let pictures = [];
picture_loader().then(x=> 
    pictures = x
);
let iCaptions = 0;
let iPicture = 0;

class Game {
    constructor(){
        this.picture = "";
        this.players = [];
        this.playedCaptions = [];
    }

    flipPicture(){
        this.picture = pictures[(iPicture++) % pictures.length];
    }
}

class Player{
    constructor(name){
        let _Captions = captions.slice(iCaptions, iCaptions += 7);

        this.name = name;
        this.score = 0;
        this.captions = () => _Captions;


    }
}

module.exports = {
    Player, Game
}