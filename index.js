document.getElementById('button-search').addEventListener('click',function(){
    const SearchField=document.getElementById('search-input')
    const searchText=SearchField.value;
    SearchField.value=''
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>displaySearch(data.meals))
 
})

const displaySearch=meals=>
{
   const searchResult= document.getElementById('display-search')
   meals.forEach(meal=>{
    console.log(meal)
    const div=document.createElement('div')
    div.classList.add('col')
    div.innerHTML=`
        <div class="card">
            <img src="${meal.strMealThumb
            }" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
                 <p class="card-text">${meal.strInstructions.slice(1,200)}</p>
    </div>
  </div>
     
    `
    searchResult.appendChild(div)

   })
}