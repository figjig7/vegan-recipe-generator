const recipes = [
  { name: "Avocado Toast", ingredients: ["bread", "avocado", "lemon"], type: "breakfast" },
  { name: "Vegan Tacos", ingredients: ["tortilla", "black beans", "tomato", "lettuce"], type: "lunch" },
  { name: "Garlic Pasta", ingredients: ["pasta", "garlic", "olive oil"], type: "dinner" },
  { name: "Fruit Bowl", ingredients: ["banana", "apple", "grapes"], type: "snack" },
  { name: "Chickpea Salad", ingredients: ["chickpeas", "cucumber", "tomato"], type: "lunch" },
  { name: "Vegan Smoothie", ingredients: ["banana", "plant milk", "peanut butter"], type: "breakfast" },
  { name: "Quinoa Bowl", ingredients: ["quinoa", "black beans", "corn", "avocado"], type: "lunch" },
  { name: "Lentil Soup", ingredients: ["lentils", "carrot", "celery", "onion"], type: "dinner" },
  { name: "Oatmeal", ingredients: ["oats", "plant milk", "banana"], type: "breakfast" },
  { name: "Grain Salad", ingredients: ["barley", "cucumber", "cherry tomato", "lemon"], type: "lunch" },
  { name: "Stir Fry Rice", ingredients: ["rice", "tofu", "broccoli", "soy sauce"], type: "dinner" },
  { name: "Peanut Noodles", ingredients: ["noodles", "peanut butter", "soy sauce", "lime"], type: "dinner" },
  { name: "Bulgur Pilaf", ingredients: ["bulgur", "tomato", "onion", "parsley"], type: "dinner" },
  { name: "Couscous Salad", ingredients: ["couscous", "cucumber", "mint", "lemon"], type: "lunch" },
  { name: "Tofu Scramble", ingredients: ["tofu", "turmeric", "spinach", "pepper"], type: "breakfast" },
  { name: "Rice and Beans", ingredients: ["rice", "black beans", "onion", "garlic"], type: "lunch" },
  { name: "Hummus Wrap", ingredients: ["tortilla", "hummus", "carrot", "lettuce"], type: "snack" },
  { name: "Veggie Sushi", ingredients: ["sushi rice", "nori", "cucumber", "avocado"], type: "lunch" },
  { name: "Tabbouleh", ingredients: ["bulgur", "parsley", "tomato", "lemon"], type: "lunch" },
  { name: "Stuffed Peppers", ingredients: ["bell pepper", "rice", "black beans", "corn"], type: "dinner" },
  { name: "Sweet Potato Bowl", ingredients: ["sweet potato", "quinoa", "black beans", "lime"], type: "dinner" },
  { name: "Pita and Falafel", ingredients: ["pita", "falafel", "lettuce", "tomato"], type: "lunch" },
  { name: "Chia Pudding", ingredients: ["chia seeds", "plant milk", "maple syrup"], type: "breakfast" },
  { name: "Barley Stew", ingredients: ["barley", "carrot", "potato", "celery"], type: "dinner" },
  { name: "Veggie Burrito", ingredients: ["tortilla", "rice", "black beans", "avocado"], type: "lunch" },
  { name: "Farro Veggie Bowl", ingredients: ["farro", "zucchini", "chickpeas", "tahini"], type: "lunch" },
  { name: "Brown Rice Stir Fry", ingredients: ["brown rice", "carrot", "peas", "soy sauce"], type: "dinner" },
  { name: "Millet Breakfast Porridge", ingredients: ["millet", "plant milk", "maple syrup", "berries"], type: "breakfast" },
  { name: "Buckwheat Pancakes", ingredients: ["buckwheat flour", "plant milk", "banana", "baking powder"], type: "breakfast" },
  { name: "Barley Mushroom Risotto", ingredients: ["barley", "mushroom", "garlic", "onion"], type: "dinner" },
  { name: "Lentil and Rice Pilaf", ingredients: ["lentils", "rice", "onion", "cumin"], type: "dinner" },
  { name: "Vegan Mac & Cheese", ingredients: ["pasta", "cashews", "nutritional yeast", "garlic"], type: "dinner" },
  { name: "Wild Rice Medley", ingredients: ["wild rice", "cranberries", "pecans", "parsley"], type: "lunch" },
  { name: "Quinoa Breakfast Bowl", ingredients: ["quinoa", "apple", "cinnamon", "maple syrup"], type: "breakfast" },
  { name: "Couscous Veggie Stir Fry", ingredients: ["couscous", "carrot", "peas", "onion"], type: "dinner" },

  // Additional 50 recipes added here...
  { name: "Tofu Buddha Bowl", ingredients: ["quinoa", "tofu", "spinach", "carrot"], type: "lunch" },
  { name: "Lentil Patties", ingredients: ["lentils", "carrot", "onion", "breadcrumbs"], type: "dinner" },
  { name: "Rice Stuffed Tomatoes", ingredients: ["tomato", "rice", "herbs", "onion"], type: "dinner" },
  { name: "Mushroom Stroganoff", ingredients: ["mushroom", "pasta", "onion", "cashew cream"], type: "dinner" },
  { name: "Zucchini Fritters", ingredients: ["zucchini", "flour", "garlic", "parsley"], type: "snack" },
  { name: "Vegan Chili", ingredients: ["beans", "tomato", "onion", "pepper"], type: "dinner" },
  { name: "Carrot Ginger Soup", ingredients: ["carrot", "ginger", "onion", "coconut milk"], type: "dinner" },
  { name: "Green Smoothie", ingredients: ["spinach", "banana", "plant milk", "chia seeds"], type: "breakfast" },
  { name: "Quinoa Chickpea Salad", ingredients: ["quinoa", "chickpeas", "cucumber", "lemon"], type: "lunch" },
  { name: "Veggie Fried Rice", ingredients: ["rice", "carrot", "peas", "soy sauce"], type: "dinner" },
  { name: "Sweet Potato Tacos", ingredients: ["sweet potato", "tortilla", "black beans", "avocado"], type: "lunch" },
  { name: "Tofu Banh Mi", ingredients: ["baguette", "tofu", "carrot", "cucumber"], type: "lunch" },
  { name: "Tempeh Stir Fry", ingredients: ["tempeh", "broccoli", "carrot", "soy sauce"], type: "dinner" },
  { name: "Vegan Pancakes", ingredients: ["flour", "plant milk", "banana", "baking powder"], type: "breakfast" },
  { name: "Coconut Curry Lentils", ingredients: ["lentils", "coconut milk", "tomato", "garlic"], type: "dinner" },
  { name: "Roasted Veggie Wrap", ingredients: ["tortilla", "zucchini", "bell pepper", "hummus"], type: "lunch" },
  { name: "Noodle Salad", ingredients: ["noodles", "carrot", "cucumber", "sesame oil"], type: "lunch" },
  { name: "Vegan Bolognese", ingredients: ["pasta", "lentils", "tomato", "garlic"], type: "dinner" },
  { name: "Tomato Basil Soup", ingredients: ["tomato", "basil", "onion", "garlic"], type: "dinner" },
  { name: "Cauliflower Tacos", ingredients: ["cauliflower", "tortilla", "lettuce", "salsa"], type: "lunch" },
  { name: "Spinach Rice", ingredients: ["rice", "spinach", "onion", "garlic"], type: "dinner" },
  { name: "Cabbage Stir Fry", ingredients: ["cabbage", "carrot", "soy sauce", "onion"], type: "dinner" },
  { name: "Pumpkin Soup", ingredients: ["pumpkin", "onion", "garlic", "coconut milk"], type: "dinner" },
  { name: "Spaghetti Aglio e Olio", ingredients: ["spaghetti", "garlic", "olive oil", "parsley"], type: "dinner" },
  { name: "Rice Pudding", ingredients: ["rice", "plant milk", "cinnamon", "maple syrup"], type: "breakfast" },
  { name: "Pear and Walnut Salad", ingredients: ["pear", "walnut", "lettuce", "vinaigrette"], type: "lunch" },
  { name: "Black Bean Burger", ingredients: ["black beans", "onion", "breadcrumbs", "garlic"], type: "dinner" },
  { name: "Grilled Veggie Sandwich", ingredients: ["bread", "zucchini", "bell pepper", "hummus"], type: "lunch" },
  { name: "Avocado Chickpea Toast", ingredients: ["bread", "chickpeas", "avocado", "lemon"], type: "breakfast" },
  { name: "Vegan Ramen", ingredients: ["noodles", "mushroom", "tofu", "soy sauce"], type: "dinner" },
  { name: "Broccoli Quinoa Casserole", ingredients: ["quinoa", "broccoli", "plant milk", "nutritional yeast"], type: "dinner" },
  { name: "Banana Oat Cookies", ingredients: ["banana", "oats", "maple syrup", "cinnamon"], type: "snack" },
  { name: "Tofu Lettuce Wraps", ingredients: ["tofu", "lettuce", "carrot", "soy sauce"], type: "lunch" },
  { name: "Mango Quinoa Salad", ingredients: ["quinoa", "mango", "cucumber", "lime"], type: "lunch" },
  { name: "Peanut Butter Banana Toast", ingredients: ["bread", "peanut butter", "banana"], type: "breakfast" },
  { name: "Spinach Tofu Curry", ingredients: ["tofu", "spinach", "coconut milk", "curry powder"], type: "dinner" },
  { name: "Mashed Chickpea Salad", ingredients: ["chickpeas", "celery", "onion", "vegan mayo"], type: "lunch" },
  { name: "Almond Butter Oats", ingredients: ["oats", "almond butter", "banana", "plant milk"], type: "breakfast" },
  { name: "Soba Noodle Bowl", ingredients: ["soba noodles", "broccoli", "tofu", "soy sauce"], type: "dinner" },
  { name: "Mushroom Tacos", ingredients: ["mushroom", "tortilla", "onion", "cilantro"], type: "lunch" },
  { name: "Sweet Potato Hash", ingredients: ["sweet potato", "onion", "pepper", "garlic"], type: "breakfast" },
  { name: "Zoodle Stir Fry", ingredients: ["zucchini noodles", "carrot", "soy sauce", "tofu"], type: "dinner" },
  { name: "Chickpea Pancakes", ingredients: ["chickpea flour", "water", "onion", "cumin"], type: "breakfast" },
  { name: "Apple Cinnamon Oats", ingredients: ["oats", "apple", "cinnamon", "plant milk"], type: "breakfast" },
  { name: "Beetroot Hummus Wrap", ingredients: ["tortilla", "beetroot hummus", "lettuce", "cucumber"], type: "lunch" }
];

function findRecipes() {
  const input = document.getElementById("ingredientsInput").value.toLowerCase();
  const ingredients = input.split(",").map(i => i.trim());
  const mealType = document.getElementById("mealType").value;
  const simpleMode = document.getElementById("simpleMode").checked;

  const matches = recipes.filter(recipe => {
    const hasAllIngredients = recipe.ingredients.every(ing => ingredients.includes(ing));
    const matchesType = !mealType || recipe.type === mealType;
    const isSimple = !simpleMode || recipe.ingredients.length <= 3;
    return hasAllIngredients && matchesType && isSimple;
  });

  showResults(matches);
}

function surpriseMe() {
  const mealType = document.getElementById("mealType").value;
  const simpleMode = document.getElementById("simpleMode").checked;
  const filtered = recipes.filter(recipe => {
    const matchesType = !mealType || recipe.type === mealType;
    const isSimple = !simpleMode || recipe.ingredients.length <= 3;
    return matchesType && isSimple;
  });

  const random = filtered[Math.floor(Math.random() * filtered.length)];
  showResults(random ? [random] : []);
}

function showResults(list) {
  const results = document.getElementById("results");
  results.innerHTML = "";

  if (list.length === 0) {
    results.innerHTML = "<p>No matching recipes found. Try different ingredients.</p>";
    return;
  }

  list.forEach(recipe => {
    const div = document.createElement("div");
    div.className = "recipe";
    div.innerHTML = `<h3>${recipe.name}</h3><p>Ingredients: ${recipe.ingredients.join(", ")}</p><p>Type: ${recipe.type}</p>`;
    results.appendChild(div);
  });
}
