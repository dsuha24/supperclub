// import React from 'react';


// const id = 'u1'
// const recipe = users.recipes.find(item => item.id === id)


// const ingredients  = recipe && recipe.ingredients.map(ingredientitem => {
//   <div>
//     <p></p>
//   </div>

// } )

// const filterString = 'French'; // comes from ui filter
// const user = user[0];

// const filteredRecipes = user.recipes.filter(recipe => recipe.cuisine === filterString)
// pass to recipelist

// const [recipes, setRecipes] = useState(recipes);


// useEffect(() => {
//   axios.get('/recipes').then(data=> setData(data))
// })


// const filter = (item) => {
//   const recipes = recipes.filter(recipe => recipe.cuisine === item)
//   setData(recipes)
// }


//   <Filter onChage={filter}>

//   <RecipeList data={recipes}>

export default function ROWS1 () {
  
  const ROWS1 = [ // eslint-disable-line no-unused-vars
    {
        ingredient: 'Bread Flour',
        amount: 3,
        units: 'Cups',
        subs: '3'
    },
    {
        ingredient: 'Instant Yeast',
        amount: '1/3',
        units: 'Tsp',
        subs: 2
    },
    {
        ingredient: 'Euro Butter',
        amount: 1,
        units: 'Cups',
        subs: 1
    }
  ]

  return {ROWS1};

}

const users = [ // eslint-disable-line no-unused-vars
    {
      username: "darylsuharli",
      first_name: "Daryl",
      last_name: "Suharli",
      password: "asdf;lkj",
      recipes: [
          {
            id: 'u1',
            recipeName: 'Cronuts',
            image:
              'https://api.time.com/wp-content/uploads/2014/04/475848513.jpg?w=800&quality=85',
            difficulty: 5,
            time: 3,
            cost: 2,
            cuisine: "French",
            description: "This impressive french pastry is off the tits",
            author: "Daryl Suharli",
            ingredients: [
                {
                  ingredientName: "Bread Flour",
                  ingredientAmount: "3",
                  ingredientUnits: "cups",
                  ingredientSub: "3"
                },
                {
                  ingredientName: 'Instant Yeast',
                  ingredientAmount: '1/3',
                  ingredientUnits: 'Tsp',
                  ingredientSub: 2
              },
              {
                  ingredientName: 'Euro Butter',
                  ingredientAmount: 1,
                  ingredientUnits: 'Cups',
                  ingredientSub: 1
              }

            ],
            equipment: [
              "Stand mixer",
              "Rolling pin",
              "Metal pan"
            ],
            steps: [
              {
                  step: 1,
                  shortDescription: "Mix wet and dry ingredients",
                  longDescription: "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
                  ingredients:['Water','Eggs','Bread Flour'],
                  ingredientsQty: [1,1,3],
                  ingredientsUnits: ['cups','pc','cups'],
                  equipments:['Stand Mixer', 'Silicone Scraper'],
                  image:'https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg'
              },
              {
                  step: 2,
                  shortDescription: "Mix wet and dry ingredients",
                  longDescription: "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
                  ingredients:['Water','Eggs','Bread Flour'],
                  ingredientsQty: [1,1,3],
                  ingredientsUnits: ['cups','pc','cups'],
                  equipments:['Stand Mixer', 'Silicone Scraper'],
                  image:'https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg'
              },
            ]
          }
      ],
    }
  ]
  