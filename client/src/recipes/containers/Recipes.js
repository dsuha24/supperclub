import React from 'react';

import RecipeList from '../components/RecipeList';
// import RecipeModal from '../components/UIElements/RecipeModal';
import FilterBar from '../../layout/navigation/Filters/FilterBar';

import "./Recipes.css";
// import RecipeInstructions from './RecipeInstructions';

const Recipes = props => {
  const RECIPES = [
    {
      id: 'u1',
      recipeName: 'Cronuts',
      image:
        'https://api.time.com/wp-content/uploads/2014/04/475848513.jpg?w=800&quality=85',
      difficulty: 5,
      time: 3,
      cost: 2,
      description: "This impressive french pastry is off the tits",
      author: "Daryl Suharli",
      cuisine: "French",
      ingredients: [
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
      ],
      equipmentTable: [
        {
            equipment: 'Stand Mixer',
            subs: 2,
            equipmentSteps: '1'
        },
        {
            equipment: 'Rolling Pin',
            subs: 2,
            equipmentSteps: '2, 3, 4'
        },
        {
            equipment: 'Plastic Wrap',
            subs: 1,
            equipmentSteps: '2, 4, 5'
        },
      ]
    },
    {
      id: 'u2',
      recipeName: 'Kouign Amann',
      image:
        'https://media.daysoftheyear.com/20171223132649/kouign-amann-day.jpg',
      difficulty: 5,
      time: 3,
      cost: 2,
      description: "Better than the cronut imho",
      author: "Dominique Ansel",
      cuisine: "French",
      ingredients: [
        {
            ingredient: 'TEST DKA',
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
      ],
      steps: [
        {
            step: 1,
            shortDescription: "TEST DKA",
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
      ],
      equipmentTable: [
        {
            equipment: 'TEST DKA',
            subs: 2,
            equipmentSteps: '1'
        },
        {
            equipment: 'Rolling Pin',
            subs: 2,
            equipmentSteps: '2, 3, 4'
        },
        {
            equipment: 'Plastic Wrap',
            subs: 1,
            equipmentSteps: '2, 4, 5'
        },
      ]
    },
    {
      id: 'u3',
      recipeName: 'Bee Sting Pizza',
      image:
        'https://eatingwithziggy.files.wordpress.com/2015/04/img_1598.jpg',
      difficulty: 5,
      time: 3,
      cost: 2,
      description: "Napolean x NY",
      author: "Nancy Silverton",
      cuisine: "Italian",
      ingredients: [
        {
            ingredient: 'TEST BEESTING PIZZA',
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
      ],
      steps: [
        {
            step: 1,
            shortDescription: "TEST BEESTING PIZZA",
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
      ],
      equipmentTable: [
        {
            equipment: 'TEST BEESTING PIZZA',
            subs: 2,
            equipmentSteps: '1'
        },
        {
            equipment: 'Rolling Pin',
            subs: 2,
            equipmentSteps: '2, 3, 4'
        },
        {
            equipment: 'Plastic Wrap',
            subs: 1,
            equipmentSteps: '2, 4, 5'
        },
      ]
    },
    {
      id: 'u4',
      recipeName: 'Soup Tortellini',
      image:
        'https://ca-times.brightspotcdn.com/dims4/default/961ea02/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2F1f%2F70e48399903956ac70885ec66ad8%2Flat-fo-gold-alimento-photos-la0022728618-20141007',
      difficulty: 5,
      time: 3,
      cost: 2,
      description: "inspired by xiaolongbao",
      author: "Zach Pollack",
      cuisine: "Spanish",
      ingredients: [
        {
            ingredient: 'TEST TORTELLINI',
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
      ],
      steps: [
        {
            step: 1,
            shortDescription: "TEST TORTELLINI",
            longDescription: "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
            ingredients:['Water','Eggs','Bread Flour'],
            ingredientsQty: [1,1,3],
            ingredientsUnits: ['cups','pc','cups'],
            equipments:['Stand Mixer', 'Silicone Scraper'],
            image:'https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg'
        },
        {
            step: 2,
            shortDescription: "TEST TORTELLINI",
            longDescription: "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
            ingredients:['Water','Eggs','Bread Flour'],
            ingredientsQty: [1,1,3],
            ingredientsUnits: ['cups','pc','cups'],
            equipments:['Stand Mixer', 'Silicone Scraper'],
            image:'https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg'
        },
      ],
      equipmentTable: [
        {
            equipment: 'Stand Mixer',
            subs: 2,
            equipmentSteps: '1'
        },
        {
            equipment: 'Rolling Pin',
            subs: 2,
            equipmentSteps: '2, 3, 4'
        },
        {
            equipment: 'Plastic Wrap',
            subs: 1,
            equipmentSteps: '2, 4, 5'
        },
      ]
    },
  ];

  // const cuisineList = "fRENCH";
  // const cuisineList = props.cuisineFilter;

  const [open, toggleModal] = React.useState(false);
  
  const handleModalOpen = () => {
    toggleModal(true);
  };

  const handleModalClose = () => {
    toggleModal(false);
  };

  const [filterArray, handleFilter] = React.useState([]);

  const filteredRecipes = RECIPES.filter((item) => {
    // return item.cuisine.toLowerCase().includes(cuisineList.toLowerCase())
    if(filterArray.length === 0) {
      return item;
    }
    return filterArray.includes(item.cuisine);
  })


  return (
    <div className="main-recipe-page">
      <FilterBar 
        //getting data from child
        handleFilter={handleFilter}
      />
      <h1>Challenge of the month</h1>
      <div>
        <RecipeList 
          items = {filteredRecipes}
          // items={RECIPES} 
          onItemclick={handleModalOpen} 
          open={open} 
          handleModalClose={handleModalClose}
          // ingredients={INGREDIENTS}
          // steps={STEPS}
          // equipmentTable={equipmentTable}
        >
          {/* <RecipeModal /> */}
        </RecipeList>
      </div>
      <br></br>
      {/* <RecipeModal onClose={handleModalClose} open={open}/> */}
      <h1>Trending</h1>
      <div>
        <RecipeList items={RECIPES} />
      </div>
      <h1>Best recipes of the month</h1>
      <div>
        <RecipeList items={RECIPES} />
      </div>
    </div>
  );
};

export default Recipes;