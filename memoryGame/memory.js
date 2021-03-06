document.addEventListener('DOMContentLoaded', ()=>{
     const cardArray = [
         {
             name:'fries',
             img:'images/fries.png' 
         },
         {
            name:'fries',
            img:'images/fries.png' 
        }
         ,
         {
            name:'cheeseburger',
            img:'images/cheeseburger.png' 
        },
        {
            name:'cheeseburger',
            img:'images/cheeseburger.png' 
        },
        {
            name:'hotdog',
            img:'images/hotdog.png' 
        },
        {
            name:'hotdog',
            img:'images/hotdog.png' 
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png' 
        },
        {
            name:'ice-cream',
            img:'images/ice-cream.png' 
        },
        {
            name:'milkshake',
            img:'images/milkshake.png' 
        },
        {
            name:'milkshake',
            img:'images/milkshake.png' 
        },
        {
            name:'pizza',
            img:'images/pizza.png' 
        },
        {
            name:'pizza',
            img:'images/pizza.png' 
        },
     ]


     cardArray.sort( () => 0.5 - Math.random())

     const grid = document.querySelector('.grid')
     const resultDisplay = document.getElementById('result')
     let cardsChosen = []
     let cardsChosenId = []
     let cardsWon = []


     const reStartGame = (cards) => {
        setTimeout(() => {
            resultDisplay.textContent=0
            cards.forEach(element => {
                element.setAttribute('src','images/blank.png')
            });
         }, 3000 );
     }

     const checkForMatch = () =>{
         let cards = document.querySelectorAll('img')     
         const optionOneId = cardsChosenId[0]
         const optionTwoId = cardsChosenId[1]
    
         if (cardsChosen[0] === cardsChosen[1]) {
             alert('You found a match :-)')
             cards[optionOneId].setAttribute('src','images/found.png')
             cards[optionTwoId].setAttribute('src','images/found.png')
             cardsWon.push(cardsChosen)
         }else{
            cards[optionOneId].setAttribute('src','images/blank.png')
            cards[optionTwoId].setAttribute('src','images/blank.png')
            alert('Sorry for you :-( Try again')
         }
         cardsChosen = []
         cardsChosenId = []
         resultDisplay.textContent = cardsWon.length
         if (cardsWon.length === cardArray.length/2) {
             resultDisplay.textContent = 'Congratulations!! You found the all! =)'
             reStartGame(cards)
             

         }

     }

     const flipCard = (e) =>{
        let cardId = e.target.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        e.target.setAttribute('src',cardArray[cardId].img)//set the image from the array
        //check for a match, but only if the user has been selected two cards
        if (cardsChosen.length === 2) {
            setTimeout(() => {
                checkForMatch()
            }, 500);
        }
        
     }

     //Creating board
     const createBoard = ()=>{
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img')
            card.setAttribute('src','images/blank.png')
            card.setAttribute('data-id',i)
            card.setAttribute('class','element')
            card.addEventListener('click',flipCard)
            grid.appendChild(card)
            
        }
     }
     createBoard()

     
     

})