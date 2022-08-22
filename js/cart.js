//to get the all button

// var buttons = document.querySelectorAll('.btn-primary').length;

// for(let i = 0; i<buttons; i++){
//     document.querySelectorAll(".btn-primary")[i].addEventListener("click", function(){
//         alert("clicked")
//     })
// }



// 

const playerCartArray = [];



function displayCart(cartPlayer){
    // console.log(cartPlayer.length,'size');
    
    const tableBody = document.getElementById("products-cart");
    tableBody.innerHTML = "";
    
    for(let i = 0; i < cartPlayer.length; i++){
        const playerName = playerCartArray[i].playerName;
        const tr = document.createElement('tr');

        if(cartPlayer.length>5){
            
            cartPlayer.value = ''
            // return ('You can not select more then five players');
            window.alert('Select only Five players')

        }
        

        tr.innerHTML = `
            <th>${i+1}</th>
            <td>${playerName}</td>
        `
        tableBody.appendChild(tr);
    }




    //player budget functionality

document.getElementById('btn-calculate').addEventListener('click', function(){
    // const playerPriceInput = document.getElementById('player-price');
    // const playerPriceInputString = playerPriceInput.value;

    // const perPlayerPrice = parseFloat(playerPriceInputString);
    
    const perPlayerPrice = getInputValueById('player-price');

    


    // const playerExpense = document.getElementById('player-expense');
    // const playerExpenseString = playerExpense.innerText;
    // const totalExpense = parseFloat(playerExpenseString);


    const totalExpense = getInputValueById('player-expense');

    
    
    const totalPlayerExpense = perPlayerPrice * cartPlayer.length;
    // playerExpense.innerText = totalPlayerExpense;
    setTextEelementValueById('player-expense', totalPlayerExpense);
    
    

    document.getElementById('btn-total-calculate').addEventListener('click', function(){

        // const managerPriceInput = document.getElementById('manager-price');
        // const managerPriceTotal = parseFloat(managerPriceInput.value);


        const managerPriceAmount = getInputValueById('manager-price');

        // const coachPriceInput = document.getElementById('coach-price');
        // const coachPriceTotal = parseFloat(coachPriceInput.value);

        const coachPriceAmount = getInputValueById('coach-price');


        // const totalExpenseField = document.getElementById('total-expense');
        // const totalExpense = parseFloat(totalExpenseField.innerText);

      


        // const totalAmountOfExpense = totalPlayerExpense + managerPriceTotal + coachPriceTotal;
        // totalExpenseField.innerText = totalAmountOfExpense; 


        
        // const previousTotal = getTextElementValueById('total-expense');
        const totalAmountOfExpense = totalPlayerExpense + managerPriceAmount + coachPriceAmount;
        // console.log(totalAmountOfExpense, 'll');
        setTextEelementValueById('total-expense', totalAmountOfExpense);

        

    console.log(managerPriceTotal,'clicked');
    console.log(coachPriceTotal,'clicked');
    console.log(totalExpense, 'countt');

})
    

})
}



function addToCart(element){
    const playerName = element.parentNode.parentNode.children[1].innerText;
    
    element.disabled = true;
  
     

    console.log(playerName);
    
    const playerObject = {
        playerName: playerName,
    }
    
   playerCartArray.push(playerObject);
    
    displayCart(playerCartArray);
}




/*

//player budget functionality

document.getElementById('btn-calculate').addEventListener('click', function(){
    const playerPriceInput = document.getElementById('player-price');
    const playerPriceInputString = playerPriceInput.value;

    const perPlayerPrice = parseFloat(playerPriceInputString);
    
    // console.log(playerNumber, 'player');


    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const totalExpense = parseFloat(playerExpenseString);
    
    // const player = 5;
    const totalPlayerExpense = perPlayerPrice * player;
    playerExpense.innerText = totalPlayerExpense;
    console.log(totalPlayerExpense);



})

*/



// document.getElementById('btn-total-calculate').addEventListener('click', function(){

//         const managerPriceInput = document.getElementById('manager-price');
//         const managerPriceTotal = parseFloat(managerPriceInput.value);

//         const coachPriceInput = document.getElementById('coach-price');
//         const coachPriceTotal = parseFloat(coachPriceInput.value);


//         const totalExpenseField = document.getElementById('total-expense');
//         const totalExpense = parseFloat(totalExpenseField.innerText);


//         const totalAmountOfExpense = managerPriceTotal + coachPriceTotal;
//         totalExpenseField.innerText = totalAmountOfExpense; 
        

//     console.log(managerPriceTotal,'clicked');
//     console.log(coachPriceTotal,'clicked');
//     console.log(totalExpense, 'countt');

// })




