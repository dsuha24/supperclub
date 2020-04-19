
const users = { // eslint-disable-line no-unused-vars
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
  