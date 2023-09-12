//global variables, functions, and event listeners
getPercData();
const percInstContainer = document.getElementById('instrument-container');
const copyOfPercData = [];
const displayAllBtn = document.getElementById('displayAllBtn');
displayAllBtn.addEventListener('click', function (e){
  handleDisplayAllBtn(copyOfPercData)
});

const dropDownMenu = document.querySelector('.instrument-dropdown');
dropDownMenu.addEventListener('change', function (e){
  const selectedCategory = dropDownMenu.value.toLowerCase();
  handleDropDown(copyOfPercData, selectedCategory);
})

const clearAllBtn = document.getElementById('clearAllBtn');
clearAllBtn.addEventListener('click', function (e){
  handleClearAll(copyOfPercData);
});

const newInstForm = document.querySelector('.perc-form');
newInstForm.addEventListener('submit', function (e){
  e.preventDefault();
  handleForm();
})


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
  handleClearAll();
  renderPercItem(array)
}

//drownDown Function
function handleDropDown(array, category){
  handleClearAll();
  const selectedPercItems = array.filter((element)=>{
    return element.category.toLowerCase() === category;
  })
  console.log(selectedPercItems);
  renderPercItem(selectedPercItems);
};

//clear All Function
function handleClearAll(){
  let cardsOnPage = document.querySelectorAll('.card');
  for(let i = 0; i<cardsOnPage.length; i++){
    let element = cardsOnPage[i];
    element.remove();
  }
}

function handleForm(){
  let newPercObj = {
    name: e.target.name.value,
  }
}


//render items to page
function renderPercItem(array){
    array.forEach((element)=>{

        const percInstCard = document.createElement('div');
        percInstCard.setAttribute('class', 'card');
        
        const instName = document.createElement('h3');
        instName.textContent = element.name;

        const instBrand = document.createElement('p');
        instBrand.textContent = `Brand: ${element.brand}`;

        const instModel = document.createElement('p');
        instModel.textContent = `Model: ${element.model}`;

        const instSize = document.createElement('p');
        instSize.textContent =  `Size: ${element.size}`;

        const instColor = document.createElement('p');
        instColor.textContent =  `Color: ${element.color}`;

        const instDesc = document.createElement('p');
        instDesc.textContent =  `Description: ${element.description}`;

        const instImg = document.createElement('img');
        instImg.setAttribute('class', 'cardImg');
        instImg.src = `${element.image}`;

        percInstCard.append(instName, instBrand, instModel, instSize, instColor, instDesc, instImg)
        percInstContainer.append(percInstCard)
  
    })

    
  }