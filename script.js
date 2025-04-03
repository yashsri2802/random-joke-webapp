{/* <div id="joke" class="joke">Awesome joke is loading...</div>
        <button id="jokebtn" class="btn">Next Joke</button> */}

//Promises  to fetch API without XMLHttp request
//GET https://icanhazdadjoke.com/

// const jokes=document.querySelector('#joke');
// const jokebtn=document.querySelector('#jokebtn');
// const generateJokes = () => {

//     const setHeader ={
//         headers:{
//             Accept : "application/json"
//         }
//     }
//     fetch('https://icanhazdadjoke.com/',setHeader)   //returns promise(data in html form)
//     .then((res) => res.json())   //if response received,convert to json form
//     .then((data) => {
//         jokes.innerHTML=data.joke;
//     }).catch((error) => {   //if promise not fulfilled(server,network error) return an error
//         console.log(error);
//     })
// }

// jokebtn.addEventListener('click', generateJokes);
// generateJokes();

//through async await
const jokes=document.querySelector('#joke');
const jokebtn=document.querySelector('#jokebtn');
const generateJokes = async () => {

    try{
        const setHeader ={
            headers:{
                Accept : "application/json"
            }
        }
        const res = await fetch('https://icanhazdadjoke.com/',setHeader) 
        const data = await res.json();  
        jokes.innerHTML = data.joke;
    }catch(err){      //error handling
        console.log(`the error is ${err}`);
    }
}


jokebtn.addEventListener('click', generateJokes);
generateJokes();