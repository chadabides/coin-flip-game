 class CoinFlip {

   static main(args) {
    let bank = 500;
    let headsCount=0;
    let tailsCount=0;
    let winCounter=0;
    let lossCounter=0;
    let flipResults = [];
    

    //In the first round we use a 50 percent guess 

    let randomPlayer = new ComputerPlayer();
    let coin = new Coin();
    console.log("Starting the game the coin")
    let bet =0
    for (let i = 0; i < 4e3; i++) {
        if(i > 50){
        console.log("Place Bet");
        bet = randomPlayer.placeBet(headsCount,tailsCount,i)
        }
        console.log("Flipping the coin");
      
        flipResults[i] = coin.flip();
      
        if(flipResults[i] === 0){
            headsCount += 1;
        }
        else{
            tailsCount += 1;
        }
         if(i > 50)
         {
           if(flipResults[i] === bet){
            bank += 50;
            winCounter+=1;
        }
        else
        {
            if(bank > 50)
            {
             bank -=50;
            lossCounter+=1;
         }
            else
            {
             console.log(`Wins: ${winCounter}`);
              console.log(`losses:${lossCounter}`);
              console.log(`Bank: ${bank}`);
              return ('You Loose!');
             }
            
        }
         }
       
           
    }
              console.log(`Wins: ${winCounter}`);
              console.log(`losses:${lossCounter}`);
              console.log(`bank: ${bank}`);
              return ('Winner Winner Chicken Dnner!');
}

 }

// this is coin flip computer guess
 class ComputerPlayer{
  constructor(){
      let bet;
      let heads = 0;
      let tails = 1;

  
     let placeRandomBet = ()=> {
        bet = Math.random();
        if(bet < .5){
            return heads;
        }
        else return tails;
    }

     let placeLearnedBet= (heads=0, tails=0, rounds=0) =>{
        //not sure where to start
        let headsPercent = (heads/rounds).toPrecision();
        let tailsPercent = (tails/rounds).toPrecision();

        console.log(`Percent heads:${heads} = ${headsPercent} %`);
        console.log(`Percent tails:${tails} = ${tailsPercent} %`);

        return (headsPercent > tailsPercent) ? 0 : 1;

    }
 
 return{
            placeBet: placeLearnedBet
        }
  }
 }


 class Coin {
   constructor(){
        let coin;
        let heads = 0;
        let tails = 1;
     console.log("Flipping the coin")
     let flip=()=> {
          if (Math.random() < .5) {
            console.log(`Flip:${heads}`);
            return heads;
        } else {
            console.log(`Flip:${tails}`);
            return tails;
        }
    }
     return{
            flip: flip
        }
   }
}

module.exports = CoinFlip;