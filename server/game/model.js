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
    submitCaption(playerId, text){
        this.playedCaptions.push({ playerId: playerId, text: text, isChosen: false })
        let playersCaptions = this.players[playerId].captions();
        playersCaptions.splice(playersCaptions.indexOf( text ) ,1);
        playersCaptions.push(captions[iCaptions += 1])
        return playersCaptions[playersCaptions.length - 1]
    }
    chooseCaption(text){
        const chosenCaption = this.playedCaptions.find(x=> x.text == text)
        chosenCaption.isChosen = true;
        this.players[chosenCaption.playerId].score++;
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