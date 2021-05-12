console.info('js/app.js loaded');

var mgButton = document.getElementById("MargButton");

//checks to see if button is true
if(mgButton){
  mgButton.addEventListener('click', getMargarita);
 }

function getMargarita(){
  document.getElementById("MargButton").disabled = true; 
		
		const api = `https://www.thecocktaildb.com/api/json/v1/1/random.php`
		
		fetch(api)
  		.then(
      function(response) {
      	if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }

      // Examine the text in the response
      response.json().then(function(data) {
        //console.log(data);
        displayCocktail(data);
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });

  }
  function displayCocktail(cocktail){
    console.log(cocktail); 
    var cocktailArray = []; 

     //Gets the drink name
    let drinkSection = document.querySelector("#drink-section");
    let drinkName = document.createElement("h4");
    drinkName.innerHTML = cocktail.drinks[0].strDrink;
    console.log(cocktail.drinks[0].strDrink);
    drinkSection.appendChild(drinkName);

    cocktailArray.push(cocktail.drinks[0].strDrink);
    console.log(cocktailArray);

    // Gets the Drink Picture
    let img = document.createElement('img');
    img.src = cocktail.drinks[0].strDrinkThumb;
    drinkSection.appendChild(img);

    let title = document.createElement("h3");
    title.innerHTML = "Ingredients:"
    drinkSection.appendChild(title);
    //getting the ingredients 
    for(let i=1; i<16; i++){
    if(cocktail.drinks[0][`strIngredient${i}`] == null){
      break; 
    } 

      let ingredients = document.createElement('ons-list-item');
      ingredients.innerHTML = cocktail.drinks[0][`strMeasure${i}`] + ": "+ cocktail.drinks[0][`strIngredient${i}`]+ " ";
      
      var br = document.createElement("br");
      drinkSection.appendChild(br);

      let appendedIngred = drinkSection.appendChild(ingredients);

      cocktailArray.push(cocktail.drinks[0][`strMeasure${i}`] + ": "+ cocktail.drinks[0][`strIngredient${i}`]+ " ");
      console.log(cocktailArray)

    }
  var br = document.createElement("br");
  drinkSection.appendChild(br);

   var br2 = document.createElement("br");
  drinkSection.appendChild(br2);

  let title2 = document.createElement("h3");
  title2.innerHTML = "Instructions:"
  drinkSection.appendChild(title2);

  let card = document.createElement('ons-card');
  card.innerHTML = cocktail.drinks[0].strInstructions;
  drinkSection.appendChild(card);

   cocktailArray.push(cocktail.drinks[0].strInstructions);
   console.log(cocktailArray);
   
   sessionStorage.setItem("overallCocktail", cocktailArray);
   console.log(sessionStorage.getItem("overallCocktail"));
   var sessionData = sessionStorage.getItem("overallCocktail");

   displaySDLog(sessionData);
  }

//Displays the log info for the session 
    function displaySDLog(cocktailArray){
      console.log("in display log function");
      console.log(cocktailArray);

      var starButton = document.getElementById("star");
      if(starButton){
        console.log("in star button");
        starButton.addEventListener('click', () => displaySDScreen(cocktailArray));

    }
  }

    function displaySDScreen(cocktailArray) {
      document.getElementById("star").disabled = true; 
      console.log("in display sd screen");
      console.log(cocktailArray);

       let drinkSection = document.querySelector("#drink-section");

    let title = document.createElement("h3");
    title.innerHTML = "Copy and paste for later!"
    drinkSection.appendChild(title);


      var list = document.createElement("ul");
      list.innerHTML = cocktailArray;
      drinkSection.appendChild(list);


      }

  

  
