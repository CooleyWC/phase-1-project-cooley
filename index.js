
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
      // console.log(percInvData);
      processData(percInvData)
      
    })
  }
  )
  
  function processData(data){
    console.log(data)
    
  }