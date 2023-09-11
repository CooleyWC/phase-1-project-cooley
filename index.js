//global variables, functions, and event listeners
getPercData();
const percInstContainer = document.getElementById('instrument-container');
const copyOfPercData = [];
const displayAllBtn = document.getElementById('displayAllBtn');
displayAllBtn.addEventListener('click', function (e){
  handleDisplayAllBtn(copyOfPercData)
});
const clearAllBtn = document.getElementById('clearAllBtn');
clearAllBtn.addEventListener('click', function (e){
  handleClearAllBtn();
});


//fetch - get data from the server
function getPercData(){
    fetch('http://localhost:3000/percussionInstruments', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(res=>res.json())
    .then(percInvData=>{
      makeCopyOfData(percInvData);
      
    })
  }

//make a copy of all the data  
function makeCopyOfData(percInvData){
  percInvData.forEach((element)=>{
    copyOfPercData.push(element);
  })
}

//display All Function
function handleDisplayAllBtn(array){
  renderPercItem(array)
}

//clear All Function
function handleClearAllBtn(){
  let cardsOnPage = document.querySelectorAll('.card');
  for(let i = 0; i<cardsOnPage.length; i++){
    let element = cardsOnPage[i];
    console.log(element)
    element.remove();
  }
}

//render items to page
function renderPercItem(array){
    array.forEach((element)=>{

        const percInstCard = document.createElement('div');
        percInstCard.setAttribute('class', 'card');
        // percInstCard.setAttribute('class', 'hidden');
        
        const instName = document.createElement('h3');
        instName.textContent = element.name;

        const instBrand = document.createElement('p');
        instBrand.textContent = `Brand: ${element.brand}`;

        const instSize = document.createElement('p');
        instSize.textContent =  `Size: ${element.size}`;

        const instColor = document.createElement('p');
        instColor.textContent =  `Color: ${element.color}`;

        percInstCard.append(instName, instBrand, instSize, instColor)
        percInstContainer.append(percInstCard)
  
    })

    
  }