import React from 'react';

import RecipeList from '../components/RecipeList';
import RecipeModal from '../components/UIElements/RecipeModal';

import "./Recipes.css";
// import RecipeInstructions from './RecipeInstructions';

const Recipes = () => {
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
      author: "Daryl Suharli"
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
      author: "Dominique Ansel"
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
      author: "Nancy Silverton"
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
      author: "Zach Pollack"
    },
  ];

  return (
    <div className="main-recipe-page">
      <h1>Challenge of the month</h1>
      <div>
        <RecipeList items={RECIPES}>
          {/* <RecipeModal /> */}
        </RecipeList>
      </div>
      <br></br>
      <RecipeModal />
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