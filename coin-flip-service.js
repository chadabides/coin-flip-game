
 class CoinFlip {

   static main(inaRowCount=5,tails=true, difficulty=.5) {
    let headsCount=0;
    let tailsCount=0;
    let roundsCount=1;
    let winner = false
    let flipResults = [];
    

    //In the first round we use a 50 percent guess 


    let coin = new Coin();
    console.log("Starting the hash rate test")
    console.log(`We need ${inaRowCount} # of Tails in a row for a successfull Test`);
    do 
    {
        console.log("Flipping the coin")
        let flip = coin.flip();
      
        if(flip != 1)
        {
               console.log("Flip was tails");
               flipResults.push(flip);
               console.log( `Tails in a row is ${flipResults.length}`);
        }
        else
        {
            console.log("Flip was heads");
            flipResults = [];
            roundsCount = roundsCount + 1;
            console.log( `Reset Proof of Work, Tails in a row is ${flipResults.length}`);
        }
        
        if (flipResults.length === inaRowCount)
        {
            winner = true;
        }
    

    } while(!winner)

    return (`**********************************************
             Winner Winner Chicken Dnner! It only took ${roundsCount} rounds!
             Here is the proof of work ${flipResults.join()}`);
}

 }

// this is coin flip computer guess
 
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