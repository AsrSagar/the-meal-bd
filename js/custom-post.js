// dummy data

const postsElement = document.querySelector(".card-body");

const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a';

fetch(url)
.then((resp) => resp.json())
.then(function(data) {

    let mealsData = data.meals;

    console.log(mealsData);

    return mealsData.map(function(mealsDataValue) {

        const postElement = document.createElement("div");
        postElement.classList.add("col-md-4");
        postElement.innerHTML = `<div class="posts">
            <div class="post">
            <img src="${mealsDataValue.strMealThumb}">
            <h4 class="post-title">${mealsDataValue.strMeal}</h4>
            <p class="post-body">${mealsDataValue.strCategory}</p>
            <a data-toggle="modal" 
            meal-title="${mealsDataValue.strMeal}" 
            meal-category="${mealsDataValue.strCategory}" 
            meal-img="${mealsDataValue.strMealThumb}"  
            meal-description="${mealsDataValue.strInstructions}"  
            class="open-AddBookDialog btn btn-primary">View More
            </a>
            </div>
        </div>`;

        postsElement.appendChild(postElement);

    })
})
.catch(function(error) {
    console.log(error);
})

var getFoodDetails = function() {
    document.onclick = function(e) {

        if (e.target.tagName == 'A') {

            let modal = document.getElementById("myModal");

            let mealtitle       = e.target.getAttribute("meal-title");
            let image           = e.target.getAttribute("meal-img");
            let mealcategory    = e.target.getAttribute("meal-category");
            let mealdescription = e.target.getAttribute("meal-description");
            
            let alldata = {
                mealtitle       : mealtitle,
                image           : image,
                mealcategory    : mealcategory,
                mealdescription : mealdescription,

            }

            modal.style.display = "block";

            modal.innerHTML = `<div class="modal-content"><span class="close" onclick="clooseFunction()">&times;</span><div class="image-thumbnail"><img src="`+image+`"></div><div class="food-details"><h3>`+mealtitle+`</h3>Category: <span class="category-class"> `+mealcategory+`</span><p>`+mealdescription+`</p></div></div>`;

            console.log(alldata);

        }
    }
}
getFoodDetails();


function clooseFunction() {

    let modal    = document.getElementById("myModal");

    modal.style.display = "none";

}


