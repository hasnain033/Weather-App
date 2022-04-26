


// const baseurl='http://api.openweathermap.org/data/2.5/forecast?zip=';

// const key= "&appid=85d0e8434103650f04405025430c0710&units=metric";

const baseUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=';
const key = '&appid=65c3c175ab4928ffa8bafe2a87b1d3d4&units=metric';


let d= new Date();

let newDate=d.getMonth()+1+'/'+d.getDate() + '/' + d.getFullYear();



const submitBtn = document.getElementById('generate');

submitBtn.addEventListener('click', e =>{
     let zip=document.getElementById('zip').value;
     console.log(zip)
     let feelings= document.getElementById('feelings').value;
     // Get Request
     get(baseUrl + zip + key)
     .then(data=>{
         console.log(data)
         post('/post', {date: newDate, temperature: data.list[0].main.temp, user: feelings})
         ChangeUi();
     })    
})

 const get = (url="") => {
     return fetch(url)
    .then(data=>data.json())
    .then(d=> d)
    .catch(error=>console.log(error))}

    // const get = async (url = '') => { 
       // const request = await fetch(url);
       // try {
            // Transform into JSON
         //   return await request.json();
       // }
        //catch(error) {
          //  console.log("error", error);
       // }
     // }


const post = (url='', data={})=> {
   fetch(url,{
   method:'POST',
   // credentials:'same-origin',
   headers:{
       'Content-Type': 'application/json',
   },
   body:  JSON.stringify(data)     
})}
// .then(data=>data.json()).catch(error=>console.log(error))}


// const post = async ( url = '', data = {}) => {

//     const response = await fetch(url, {
//     method: 'POST', 
//     credentials: 'same-origin', 
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),     
//   });

//   try {
//     return await response.json();
//   } catch(error) {
//       console.log(error) }
// }



//const ChangeUi =()=> {fetch('/get').then(data=>data.json()).then(allData=>{
  //  document.getElementById('date').innerHTML = `Date: ${allData.date}`;
   // document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature} C`;
   // document.getElementById('content').innerHTML = `Feeling: ${allData.userResponse}`;
// }).catch(error=>console.log(error))}

 const ChangeUi = async () => {
    const response = await fetch('/get');
    try {
        document.getElementById('app').style.background = `#${Math.floor(Math.random()*16777215).toString(16)}`;
        const allData = await response.json();
      console.log(allData)
        document.getElementById('date').innerHTML = `Date: ${allData.date}`;
        document.getElementById('temp').innerHTML = `Temperature: ${allData.temperature}`;
        document.getElementById('content').innerHTML = `Feeling: ${allData.Feelings}`;
    } catch(error){
        console.log("error", error);
    }
  }
