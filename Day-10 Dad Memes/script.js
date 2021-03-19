const memeEl = document.getElementById('meme')
const img = document.getElementById('img')
const memeBtn = document.getElementById('memeBtn')

memeBtn.addEventListener('click', generateMeme)

generateMeme()


//using .then()
// function generateJoke() {
//     const config = {
//         headers: {
//             'Accept' : 'application/json',
//         }
//     }

//     fetch('https://rapidapi.com/collection/meme', config)
//         .then((res)=> {
//             res.json()
//         })
//         .then((data)=> {
//             console.log(data)
//             // jokeEl.innerHTML = data.joke
//         })

// }



//Using Async await
async function generateMeme() {
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }

    const res = await fetch('https://meme-api.herokuapp.com/gimme/wholesomememes', config)
    const data = await res.json()  
    
    memeEl.innerHTML = data.title
    document.getElementById('img').src = data.url
}