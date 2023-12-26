const result = document.getElementById('result');
const btn = document.querySelector('button');
const search = document.querySelector('input');


// function to fetch the data from Api
const  getMovies = () => {
    const searchParamas = search.value;
    
    if (searchParamas.length <= 0) {
         result.innerHTML = "<h2>Enter Your City Name.</h2>"
     }

     // if input field is not empty

      else{
        const Api_key = "962907b6";

        fetch(`https://www.omdbapi.com/?t=${searchParamas}&apikey=${Api_key}`)
        .then(response => response.json())
        .then(data =>    {

            // if data exist in Api then

            if (data.Response == 'True') {
                 result.innerHTML = `
                  <div class="info">
                   <img src=${data.Poster} class="img"/> 
                   <div/>
                   <h2><span>Title</span> : ${data.Title}</h2>  
                    
                    <h3><span>Writer</span> : ${data.Writer}</h3> 
                  
                 
               <div class="details">  
                 <span>${data.Rated}</span> 
                 <span>${data.Year}</span> 
                 <span>${data.Runtime}</span> 
               </div>

              <div class="other-details">
                 <span>${data.Genre}</span>
                 <h4>${data.Plot}</h4>
                 <h3><span>Actors</span> : ${data.Actors}</h3>
              </div> 
                 `
            }
            else{
                result.innerHTML = `<h3>Something Went Wrong ${data.Error}<h3/>`
            }
        })

       // if error occurs 
        
        .catch(() => {
            result.innerHTML = `<h3>Something Went Wrong</h3>` 
        })
    }
     
}


btn.addEventListener('click' , getMovies);
window.addEventListener('load', getMovies);
