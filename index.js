getPercData();
const percInstContainer = document.getElementById('instrument-container');

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
      // console.log(percInvData)
      processData(percInvData);
      
    })
  }


  function processData(percInvData){
    percInvData.forEach((element)=>{

        const percInstCard = document.createElement('div');
        percInstCard.setAttribute('class', 'card');
        
        const instName = document.createElement('h3');
        instName.textContent = element.name;

        const instBrand = document.createElement('p');
        instBrand.textContent = `Brand: ${element.brand}`;

        const instSize = document.createElement('p');
        instSize.textContent =  `Size: ${element.size}`;

        const instColor = document.createElement('p');
        instColor.textContent =  `Color: ${element.color}`;

        
        
        percInstCard.append(instName, instBrand, instSize, instColor)
        console.log(percInstCard)
        console.log(percInstContainer)
        percInstContainer.append(percInstCard)
  
    })

    
  }