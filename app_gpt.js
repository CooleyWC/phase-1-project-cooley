
document.addEventListener('DOMContentLoaded', (e)=>{
  fetch('http://localhost:3000/percussionInstruments', {
    method: 'GET',
    headers: {
      'Content-type': 'application/json',
      'Accept': 'application/json',
    }
  })
  .then(res=>res.json())
  .then(data=>{
    console.log(data);
    
  })
}
)

