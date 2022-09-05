document.getElementById('button-search').addEventListener('click',function(){
    const SearchField=document.getElementById('search-input')
    const searchText=SearchField.value;
    SearchField.value=''
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
   fetch(url)
   .then(res=>res.json())
   .then(data=>console.log(data.meals))
 
})