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

