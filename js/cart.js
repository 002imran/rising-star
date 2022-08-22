const playerCartArray = [];

//chossing player and add the selected-v card
function displayCart(cartPlayer){

    const tableBody = document.getElementById("products-cart");
    tableBody.innerHTML = "";
    
    for(let i = 0; i < cartPlayer.length; i++){
        const playerName = playerCartArray[i].playerName;
        const tr = document.createElement('tr');

        if(cartPlayer.length>5){
            
            window.alert('Select only Five players')
            return window.location.reload();
            

        }
       else{
            tr.innerHTML = `
            <th>${i+1}</th>
            <td>${playerName}</td>
        `
        tableBody.appendChild(tr);

       }
        
        
    }




    //player budget functionality

document.getElementById('btn-calculate').addEventListener('click', function(){
    const perPlayerPrice = getInputValueById('player-price');
    const totalPlayerExpenseText = getInputValueById('player-expense');

    const totalPlayerExpense = perPlayerPrice * cartPlayer.length;
    
    if(isNaN(totalPlayerExpense)){
        alert('Please fill the Per Player input field with numbers')
    }
    else{
        setTextEelementValueById('player-expense', totalPlayerExpense);
    }

  
    document.getElementById('btn-total-calculate').addEventListener('click', function(){

        const managerPriceAmount = getInputValueById('manager-price');
        const coachPriceAmount = getInputValueById('coach-price');

        const totalAmountOfExpense = totalPlayerExpense + managerPriceAmount + coachPriceAmount;
        
        if(isNaN(totalAmountOfExpense)){
            alert('Please fill all empty field with number value')
        }
        else{
             setTextEelementValueById('total-expense', totalAmountOfExpense);
        }

})
    

})
}


// ***********Taking all selection button *********

function addToCart(element){
    const playerName = element.parentNode.parentNode.children[1].innerText;
    element.disabled = true;
  
    //  console.log(playerName);
    
     const playerObject = {
        playerName: playerName,
    }
    
   playerCartArray.push(playerObject);
    
    displayCart(playerCartArray);
}









