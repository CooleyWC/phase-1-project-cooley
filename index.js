const percInstContainer = document.getElementById('instrument-container')

document.addEventListener('DOMContentLoaded', (e)=>{
    fetch('http://localhost:3000/percussionInstruments', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Accept': 'application/json',
      }
    })
    .then(res=>res.json())
    .then(percInvData=>{
      processData(percInvData);
      
    })
  }
  )
  
  function processData(percInvData){
    percInvData.forEach((element)=>{
        const percInstCard = document.createElement('div');
        percInstCard.setAttribute('class', 'card');
        
        const instName = document.createElement('h3');
        instName.textContent = element.name;

        const instBrand = document.createElement('p');
        instBrand.textContent = `Brand: ${element.brand}`;
        
        percInstCard.append(instName, instBrand)
        percInstContainer.append(percInstCard)
  
    })
    // console.log(data)
    
  }