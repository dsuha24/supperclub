import React from 'react';

import RecipeList from '../components/RecipeList';

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
      id: 'u1',
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
      id: 'u1',
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
      id: 'u1',
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
    <div>
      <div>
        <RecipeList items={RECIPES} />
      </div>
      <br></br>
      <div>
        <RecipeList items={RECIPES}/>
      </div>
    </div>
  );
};

export default Recipes;