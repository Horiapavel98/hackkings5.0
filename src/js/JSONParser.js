var response = fetch('https://developers.zomato.com/api/v2.1/geocode?lat=51.5125928&lon=-0.1170672', {
  method: 'GET', // or 'PUT'
  headers:{
    'Content-Type': 'application/json',
    'user-key': '060511cd54d4bb904dca25b8d9536ed5'
  }
}).then(res => res.json()).then(data => response = data);

console.log(response)
