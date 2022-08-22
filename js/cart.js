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
            return ('You can not select more then five players');


        }

        tr.innerHTML = `
            <th>${i+1}</th>
            <td>${playerName}</td>
        `
        tableBody.appendChild(tr);
    }




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
    const totalPlayerExpense = perPlayerPrice * cartPlayer.length;
    playerExpense.innerText = totalPlayerExpense;
    console.log(totalPlayerExpense);



})









}

function addToCart(element){
    const playerName = element.parentNode.parentNode.children[1].innerText;
    console.log(playerName);

    const playerObject = {
        playerName: playerName,
    }
    
  playerCartArray.push(playerObject);
    
    // console.log(playerCartArray);

    // console.log(playerCartArray.length);

    displayCart(playerCartArray)
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




