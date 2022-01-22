// async function findShow(query) {
//   let response = await fetch(
//     `https://api.tvmaze.com/search/shows?q=${query}`
//   );
//   let data = await response.json();
//   return data;
// }

// findShow("war").then((shows) => {
//   console.log(shows);
//   let queryShowData = shows.map((show) => {
//     return `<div>
//           <img src=${show.show.image.medium}>
//         </div>
//         `;
//   });

//   document.body.innerHTML = queryShowData.join(" ");
// });

/* 
    Bonus Challenge 

    Fetch the list of 642 open APIs from
        https://api.publicapis.org/entries
        
    Create a my-api component
        display the name and category of the API,
        the description, and also display the type 
        of Auth (if any) and whether or not the API 
        supports HTTPS
    
    Use CSS Grid to style my-api
        The title and category should be 
        listed as Title (Category) 
        and should link to the API docs
        
    The grid should have 4 rows
        3rem, 1rem, 4rem, 3rem respectively
        and 3 columns each 1/3rd of available width
        
    Finally, display all of the APIs
*/

async function getAPIs() {
    let response = await fetch("https://api.publicapis.org/entries")
    let data = await response.json()
    return data
}

getAPIs().then(apis => {
     let allApis = apis.entries.map(apiEntry => {
         return `<div class="myApis"> 
            <h3>Name: <a href=${apiEntry.Link} target="_blank">${apiEntry.API}</a></h3>
            <h4>Category: ${apiEntry.Category}</h4>
            <p>Description: ${apiEntry.Description}</p>
            <p>Auth Type: ${apiEntry.Auth}</p>
            <p>HTTPS: ${apiEntry.HTTPS}</p>
            </div>
    `
     })
     document.body.innerHTML  = `<div class="apis-container"> 
            ${allApis.join(" ")}
            </div>
    `
})