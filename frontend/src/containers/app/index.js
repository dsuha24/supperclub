// REACT_APP_BACKEND_URL=https://supper-club.herokuapp.com/api
// REACT_APP_ASSET_URL=https://supper-club.herokuapp.com/

import React, { useState, useCallback } from "react";
import View from "./style";
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
} from "react-router-dom";

import MainNavigation from "../../clean/navigation/MainNavigation";
//import Users from './user/pages/Users';
// import Recipes from "./clean/recipes/containers/Recipes";
// import RecipeInstructions from "./clean/recipes/containers/RecipeInstructions";
// import UserProfile from "./clean/user/containers/UserProfile";
// import Users from "./clean/user/containers/Users";

import { AuthContext } from "../../clean/shared/context/auth-context";
import NewRecipe from "../recipe-form";
import Auth from "../../clean/shared/components/Auth";
// import UserRecipes from "./clean/recipes/containers/UserRecipes";

const App = () => {
    const [token, setToken] = useState(false);
    const [userId, setUserId] = useState(false);

    const login = useCallback((uid, token) => {
        setToken(token);
        setUserId(uid);
    }, []);

    const logout = useCallback(() => {
        setToken(null);
        setUserId(null);
    }, []);

    // // console.log(RECIPES);
    // let routes;

    // if (token) {
    //   routes = (
    //     <Switch>
    //       <Route path="/" exact>
    //         <Recipes RECIPES={RECIPES}/>
    //       </Route>
    //       {/* <Route path="/:userId/recipes" exact>
    //         <UserPlaces />
    //       </Route> */}
    //       {/* <Route path="/recipes/new" exact>
    //         <NewPlace />
    //       </Route> */}
    //       {/* <Route path="/recipes/:recipeId">
    //         <UpdateRecipe />
    //       </Route> */}
    //       <Redirect to="/" />
    //     </Switch>
    //   );
    // } else {
    //   routes = (
    //     <Switch>
    //       <Route path="/" exact>
    //         <Recipes RECIPES={RECIPES}/>
    //       </Route>
    //       {/* <Route path="/:userId/recipes" exact>
    //         <UserPlaces />
    //       </Route> */}
    //       <Route path="/auth">
    //         <Auth />
    //       </Route>
    //       <Redirect to="/auth" />
    //     </Switch>
    //   );
    // }

    // return (
    //   <AuthContext.Provider
    //     value={{
    //       isLoggedIn: isLoggedIn,
    //       userId: userId,
    //       login: login,
    //       logout: logout
    //     }}
    //   >
    //     <Router>
    //       <MainNavigation />
    //       <main>{routes}</main>
    //     </Router>
    //   </AuthContext.Provider>
    // );

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: !!token,
                token: token,
                userId: userId,
                login: login,
                logout: logout,
            }}
        >
            <View>
                <Router>
                    <div className='app__container'>
                        <MainNavigation />
                        <Switch>
                            {/* <Route path='/' exact>
                                <Recipes RECIPES={RECIPES} />
                            </Route> */}
                            {/* <Route path="/:recipeId" exact>
                <RecipeInstructions />
              </Route> */}
                            {/* <Route path='/uid' exact>
                                <UserProfile
                                    USERS={USERS}
                                    // USERS={userRecipeFilteredList}
                                    RECIPES={RECIPES}
                                />
                            </Route> */}
                            <Route path='/newrecipe' exact>
                                <NewRecipe />
                            </Route>
                            {/* <Route path='/chefs' exact>
                                <Users />
                            </Route>
                            <Route path='/chefs/:userId' exact>
                                <UserRecipes />
                            </Route> */}
                            <Route path='/login' exact>
                                <Auth />
                            </Route>
                            <Redirect to='/' />
                        </Switch>
                    </div>
                </Router>
            </View>
        </AuthContext.Provider>
    );
};

export default App;

// const RECIPES = [
//     {
//         key: "r1",
//         id: "r1",
//         recipeName: "Cronuts",
//         image:
//             "https://api.time.com/wp-content/uploads/2014/04/475848513.jpg?w=800&quality=85",
//         difficulty: 5,
//         time: 3,
//         cost: 2,
//         likes: 1234,
//         saved: 889,
//         description: "This impressive french pastry is off the tits",
//         author: "Daryl Suharli",
//         authorid: "u1",
//         username: "darylsuharli",
//         cuisine: [
//             {
//                 title: "French",
//             },
//             {
//                 title: "American Southern",
//             },
//         ],
//         commentList: [
//             {
//                 key: "c1",
//                 cid: "c1",
//                 username: "darylsuharli",
//                 comment: "WOW so fkn good",
//                 commentLikes: 103,
//                 commentDate: "4/20/2020",
//                 replies: [
//                     {
//                         key: "r1",
//                         cid: "r1",
//                         username: "darylsuharli",
//                         reply:
//                             "dude why are you replying to yourself heheheheh",
//                         replyLikes: 3,
//                         replyDate: "4/21/2020",
//                     },
//                 ],
//             },
//             {
//                 key: "c2",
//                 cid: "c2",
//                 username: "kobebryant",
//                 comment: "Nah it's not that good bich",
//                 commentLikes: 19398,
//                 commentDate: "4/20/2020",
//                 replies: [
//                     {
//                         key: "r2",
//                         cid: "r2",
//                         username: "",
//                         reply: "",
//                         replyLikes: "",
//                         replyDate: "",
//                     },
//                 ],
//             },
//         ],
//         ingredients: [
//             {
//                 ingredient: "Bread Flour",
//                 quantity: 3,
//                 units: "Cups",
//                 subs: "3",
//             },
//             {
//                 ingredient: "Instant Yeast",
//                 quantity: "1/3",
//                 units: "Tsp",
//                 subs: 2,
//             },
//             {
//                 ingredient: "Euro Butter",
//                 quantity: 1,
//                 units: "Cups",
//                 subs: 1,
//             },
//         ],
//         steps: [
//             {
//                 step: 1,
//                 shortDescription: "Mix wet and dry ingredients",
//                 longDescription:
//                     "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                 ingredients: ["Water", "Eggs", "Bread Flour"],
//                 ingredientsQty: [1, 1, 3],
//                 ingredientsUnits: ["cups", "pc", "cups"],
//                 equipments: ["Stand Mixer", "Silicone Scraper"],
//                 image:
//                     "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//             },
//             {
//                 step: 2,
//                 shortDescription: "Mix wet and dry ingredients",
//                 longDescription:
//                     "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                 ingredients: ["Water", "Eggs", "Bread Flour"],
//                 ingredientsQty: [1, 1, 3],
//                 ingredientsUnits: ["cups", "pc", "cups"],
//                 equipments: ["Stand Mixer", "Silicone Scraper"],
//                 image:
//                     "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//             },
//         ],
//         equipmentTable: [
//             {
//                 equipment: "Stand Mixer",
//                 subs: 2,
//                 equipmentSteps: "1",
//             },
//             {
//                 equipment: "Rolling Pin",
//                 subs: 2,
//                 equipmentSteps: "2, 3, 4",
//             },
//             {
//                 equipment: "Plastic Wrap",
//                 subs: 1,
//                 equipmentSteps: "2, 4, 5",
//             },
//         ],
//     },
//     {
//         key: "r2",
//         id: "r2",
//         recipeName: "Kouign Amann",
//         image:
//             "https://media.daysoftheyear.com/20171223132649/kouign-amann-day.jpg",
//         difficulty: 5,
//         time: 3,
//         cost: 2,
//         likes: 89723,
//         saved: 23490,
//         description: "Better than the cronut imho",
//         author: "Dominique Ansel",
//         authorid: "u2",
//         username: "darylsuharli",
//         cuisine: [
//             {
//                 title: "French",
//             },
//         ],
//         commentList: [
//             {
//                 key: "c3",
//                 cid: "c3",
//                 username: "TEST2 darylsuharli",
//                 comment: "WOW so fkn good",
//                 commentLikes: 103,
//                 commentDate: "4/20/2020",
//                 replies: [
//                     {
//                         key: "r1",
//                         cid: "r1",
//                         username: "darylsuharli",
//                         reply:
//                             "dude why are you replying to yourself heheheheh",
//                         replyLikes: 3,
//                         replyDate: "4/21/2020",
//                     },
//                 ],
//             },
//         ],
//         ingredients: [
//             {
//                 ingredient: "TEST DKA",
//                 amount: 3,
//                 units: "Cups",
//                 subs: "3",
//             },
//             {
//                 ingredient: "Instant Yeast",
//                 amount: "1/3",
//                 units: "Tsp",
//                 subs: 2,
//             },
//             {
//                 ingredient: "Water",
//                 amount: 1,
//                 units: "Cups",
//                 subs: 1,
//             },
//         ],
//         steps: [
//             {
//                 step: 1,
//                 shortDescription: "TEST DKA",
//                 longDescription:
//                     "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                 ingredients: ["Water", "Eggs", "Bread Flour"],
//                 ingredientsQty: [1, 1, 3],
//                 ingredientsUnits: ["cups", "pc", "cups"],
//                 equipments: ["Stand Mixer", "Silicone Scraper"],
//                 image:
//                     "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//             },
//             {
//                 step: 2,
//                 shortDescription: "Mix wet and dry ingredients",
//                 longDescription:
//                     "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                 ingredients: ["Water", "Eggs", "Bread Flour"],
//                 ingredientsQty: [1, 1, 3],
//                 ingredientsUnits: ["cups", "pc", "cups"],
//                 equipments: ["Stand Mixer", "Silicone Scraper"],
//                 image:
//                     "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//             },
//         ],
//         equipmentTable: [
//             {
//                 equipment: "TEST DKA",
//                 subs: 2,
//                 equipmentSteps: "1",
//             },
//             {
//                 equipment: "Rolling Pin",
//                 subs: 2,
//                 equipmentSteps: "2, 3, 4",
//             },
//             {
//                 equipment: "Plastic Wrap",
//                 subs: 1,
//                 equipmentSteps: "2, 4, 5",
//             },
//         ],
//     },
//     {
//         key: "r3",
//         id: "r3",
//         recipeName: "Bee Sting Pizza",
//         image:
//             "https://eatingwithziggy.files.wordpress.com/2015/04/img_1598.jpg",
//         difficulty: 5,
//         time: 3,
//         cost: 2,
//         likes: 83,
//         saved: 43,
//         description: "Napolean x NY",
//         author: "Nancy Silverton",
//         authorid: "u3",
//         username: "nancysilverton",
//         cuisine: [
//             {
//                 title: "Italian",
//             },
//         ],
//         commentList: [
//             {
//                 key: "c4",
//                 cid: "c4",
//                 username: "TEST3 darylsuharli",
//                 comment: "WOW so fkn good",
//                 commentLikes: 103,
//                 commentDate: "4/20/2020",
//                 replies: [
//                     {
//                         key: "r1",
//                         cid: "r1",
//                         username: "darylsuharli",
//                         reply:
//                             "dude why are you replying to yourself heheheheh",
//                         replyLikes: 3,
//                         replyDate: "4/21/2020",
//                     },
//                 ],
//             },
//         ],
//         ingredients: [
//             {
//                 ingredient: "TEST BEESTING PIZZA",
//                 amount: 3,
//                 units: "Cups",
//                 subs: "3",
//             },
//             {
//                 ingredient: "Yeast",
//                 amount: "1/3",
//                 units: "Tsp",
//                 subs: 2,
//             },
//             {
//                 ingredient: "Euro Butter",
//                 amount: 1,
//                 units: "Cups",
//                 subs: 1,
//             },
//         ],
//         steps: [
//             {
//                 step: 1,
//                 shortDescription: "TEST BEESTING PIZZA",
//                 longDescription:
//                     "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                 ingredients: ["Water", "Eggs", "Bread Flour"],
//                 ingredientsQty: [1, 1, 3],
//                 ingredientsUnits: ["cups", "pc", "cups"],
//                 equipments: ["Stand Mixer", "Silicone Scraper"],
//                 image:
//                     "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//             },
//             {
//                 step: 2,
//                 shortDescription: "Mix wet and dry ingredients",
//                 longDescription:
//                     "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                 ingredients: ["Water", "Eggs", "Bread Flour"],
//                 ingredientsQty: [1, 1, 3],
//                 ingredientsUnits: ["cups", "pc", "cups"],
//                 equipments: ["Stand Mixer", "Silicone Scraper"],
//                 image:
//                     "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//             },
//         ],
//         equipmentTable: [
//             {
//                 equipment: "TEST BEESTING PIZZA",
//                 subs: 2,
//                 equipmentSteps: "1",
//             },
//             {
//                 equipment: "Rolling Pin",
//                 subs: 2,
//                 equipmentSteps: "2, 3, 4",
//             },
//             {
//                 equipment: "Plastic Wrap",
//                 subs: 1,
//                 equipmentSteps: "2, 4, 5",
//             },
//         ],
//     },
//     {
//         key: "r4",
//         id: "r4",
//         recipeName: "Soup Tortellini",
//         image:
//             "https://ca-times.brightspotcdn.com/dims4/default/961ea02/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2F1f%2F70e48399903956ac70885ec66ad8%2Flat-fo-gold-alimento-photos-la0022728618-20141007",
//         difficulty: 5,
//         time: 3,
//         cost: 2,
//         likes: 25,
//         saved: 4567,
//         description: "inspired by xiaolongbao",
//         author: "Zach Pollack",
//         authorid: "u4",
//         username: "zachpollack",
//         cuisine: [
//             {
//                 title: "Spanish",
//             },
//         ],
//         commentList: [
//             {
//                 key: "c5",
//                 cid: "c5",
//                 username: "TEST4 darylsuharli",
//                 comment: "WOW so fkn good",
//                 commentLikes: 103,
//                 commentDate: "4/20/2020",
//                 replies: [
//                     {
//                         key: "r1",
//                         cid: "r1",
//                         username: "darylsuharli",
//                         reply:
//                             "dude why are you replying to yourself heheheheh",
//                         replyLikes: 3,
//                         replyDate: "4/21/2020",
//                     },
//                 ],
//             },
//         ],
//         ingredients: [
//             {
//                 ingredient: "TEST TORTELLINI",
//                 amount: 3,
//                 units: "Cups",
//                 subs: "3",
//             },
//             {
//                 ingredient: "Instant Yeast",
//                 amount: "1/3",
//                 units: "Tsp",
//                 subs: 2,
//             },
//             {
//                 ingredient: "Butter",
//                 amount: 1,
//                 units: "Cups",
//                 subs: 1,
//             },
//         ],
//         steps: [
//             {
//                 step: 1,
//                 shortDescription: "TEST TORTELLINI",
//                 longDescription:
//                     "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                 ingredients: ["Water", "Eggs", "Bread Flour"],
//                 ingredientsQty: [1, 1, 3],
//                 ingredientsUnits: ["cups", "pc", "cups"],
//                 equipments: ["Stand Mixer", "Silicone Scraper"],
//                 image:
//                     "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//             },
//             {
//                 step: 2,
//                 shortDescription: "TEST TORTELLINI",
//                 longDescription:
//                     "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                 ingredients: ["Water", "Eggs", "Bread Flour"],
//                 ingredientsQty: [1, 1, 3],
//                 ingredientsUnits: ["cups", "pc", "cups"],
//                 equipments: ["Stand Mixer", "Silicone Scraper"],
//                 image:
//                     "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//             },
//         ],
//         equipmentTable: [
//             {
//                 equipment: "Stand Mixer",
//                 subs: 2,
//                 equipmentSteps: "1",
//             },
//             {
//                 equipment: "Test",
//                 subs: 2,
//                 equipmentSteps: "2, 3, 4",
//             },
//             {
//                 equipment: "Plastic Wrap",
//                 subs: 1,
//                 equipmentSteps: "2, 4, 5",
//             },
//         ],
//     },
// ];

// const USERS = {
//     name: "Daryl",
//     username: "darylsuharli",
//     email: "dsuharli@gmail.com",
//     profileImage:
//         "https://images-na.ssl-images-amazon.com/images/I/71ZUSC6nGWL.jpg",
//     password: "12345678",
//     numPoints: 22324,
//     numFollowers: 1893,
//     location: "Los Angeles, CA",
//     bio: "5 beets a day for 3 summers",
//     recipes: [
//         {
//             id: "u1",
//             recipeName: "Cronuts",
//             image:
//                 "https://api.time.com/wp-content/uploads/2014/04/475848513.jpg?w=800&quality=85",
//             difficulty: 5,
//             time: 3,
//             cost: 2,
//             description: "This impressive french pastry is off the tits",
//             author: "Daryl Suharli",
//             cuisine: "French",
//             ingredients: [
//                 {
//                     ingredient: "Bread Flour",
//                     amount: 3,
//                     units: "Cups",
//                     subs: "3",
//                 },
//                 {
//                     ingredient: "Instant Yeast",
//                     amount: "1/3",
//                     units: "Tsp",
//                     subs: 2,
//                 },
//                 {
//                     ingredient: "Euro Butter",
//                     amount: 1,
//                     units: "Cups",
//                     subs: 1,
//                 },
//             ],
//             steps: [
//                 {
//                     step: 1,
//                     shortDescription: "Mix wet and dry ingredients",
//                     longDescription:
//                         "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                     ingredients: ["Water", "Eggs", "Bread Flour"],
//                     ingredientsQty: [1, 1, 3],
//                     ingredientsUnits: ["cups", "pc", "cups"],
//                     equipments: ["Stand Mixer", "Silicone Scraper"],
//                     image:
//                         "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//                 },
//                 {
//                     step: 2,
//                     shortDescription: "Mix wet and dry ingredients",
//                     longDescription:
//                         "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                     ingredients: ["Water", "Eggs", "Bread Flour"],
//                     ingredientsQty: [1, 1, 3],
//                     ingredientsUnits: ["cups", "pc", "cups"],
//                     equipments: ["Stand Mixer", "Silicone Scraper"],
//                     image:
//                         "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//                 },
//             ],
//             equipmentTable: [
//                 {
//                     equipment: "Stand Mixer",
//                     subs: 2,
//                     equipmentSteps: "1",
//                 },
//                 {
//                     equipment: "Rolling Pin",
//                     subs: 2,
//                     equipmentSteps: "2, 3, 4",
//                 },
//                 {
//                     equipment: "Plastic Wrap",
//                     subs: 1,
//                     equipmentSteps: "2, 4, 5",
//                 },
//             ],
//         },
//         {
//             id: "u2",
//             recipeName: "Kouign Amann",
//             image:
//                 "https://media.daysoftheyear.com/20171223132649/kouign-amann-day.jpg",
//             difficulty: 5,
//             time: 3,
//             cost: 2,
//             description: "Better than the cronut imho",
//             author: "Dominique Ansel",
//             cuisine: "French",
//             ingredients: [
//                 {
//                     ingredient: "TEST DKA",
//                     amount: 3,
//                     units: "Cups",
//                     subs: "3",
//                 },
//                 {
//                     ingredient: "Instant Yeast",
//                     amount: "1/3",
//                     units: "Tsp",
//                     subs: 2,
//                 },
//                 {
//                     ingredient: "Euro Butter",
//                     amount: 1,
//                     units: "Cups",
//                     subs: 1,
//                 },
//             ],
//             steps: [
//                 {
//                     step: 1,
//                     shortDescription: "TEST DKA",
//                     longDescription:
//                         "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                     ingredients: ["Water", "Eggs", "Bread Flour"],
//                     ingredientsQty: [1, 1, 3],
//                     ingredientsUnits: ["cups", "pc", "cups"],
//                     equipments: ["Stand Mixer", "Silicone Scraper"],
//                     image:
//                         "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//                 },
//                 {
//                     step: 2,
//                     shortDescription: "Mix wet and dry ingredients",
//                     longDescription:
//                         "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                     ingredients: ["Water", "Eggs", "Bread Flour"],
//                     ingredientsQty: [1, 1, 3],
//                     ingredientsUnits: ["cups", "pc", "cups"],
//                     equipments: ["Stand Mixer", "Silicone Scraper"],
//                     image:
//                         "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//                 },
//             ],
//             equipmentTable: [
//                 {
//                     equipment: "TEST DKA",
//                     subs: 2,
//                     equipmentSteps: "1",
//                 },
//                 {
//                     equipment: "Rolling Pin",
//                     subs: 2,
//                     equipmentSteps: "2, 3, 4",
//                 },
//                 {
//                     equipment: "Plastic Wrap",
//                     subs: 1,
//                     equipmentSteps: "2, 4, 5",
//                 },
//             ],
//         },
//         {
//             id: "u3",
//             recipeName: "Bee Sting Pizza",
//             image:
//                 "https://eatingwithziggy.files.wordpress.com/2015/04/img_1598.jpg",
//             difficulty: 5,
//             time: 3,
//             cost: 2,
//             description: "Napolean x NY",
//             author: "Nancy Silverton",
//             cuisine: "Italian",
//             ingredients: [
//                 {
//                     ingredient: "TEST BEESTING PIZZA",
//                     amount: 3,
//                     units: "Cups",
//                     subs: "3",
//                 },
//                 {
//                     ingredient: "Instant Yeast",
//                     amount: "1/3",
//                     units: "Tsp",
//                     subs: 2,
//                 },
//                 {
//                     ingredient: "Euro Butter",
//                     amount: 1,
//                     units: "Cups",
//                     subs: 1,
//                 },
//             ],
//             steps: [
//                 {
//                     step: 1,
//                     shortDescription: "TEST BEESTING PIZZA",
//                     longDescription:
//                         "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                     ingredients: ["Water", "Eggs", "Bread Flour"],
//                     ingredientsQty: [1, 1, 3],
//                     ingredientsUnits: ["cups", "pc", "cups"],
//                     equipments: ["Stand Mixer", "Silicone Scraper"],
//                     image:
//                         "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//                 },
//                 {
//                     step: 2,
//                     shortDescription: "Mix wet and dry ingredients",
//                     longDescription:
//                         "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                     ingredients: ["Water", "Eggs", "Bread Flour"],
//                     ingredientsQty: [1, 1, 3],
//                     ingredientsUnits: ["cups", "pc", "cups"],
//                     equipments: ["Stand Mixer", "Silicone Scraper"],
//                     image:
//                         "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//                 },
//             ],
//             equipmentTable: [
//                 {
//                     equipment: "TEST BEESTING PIZZA",
//                     subs: 2,
//                     equipmentSteps: "1",
//                 },
//                 {
//                     equipment: "Test",
//                     subs: 2,
//                     equipmentSteps: "2, 3, 4",
//                 },
//                 {
//                     equipment: "Plastic Wrap",
//                     subs: 1,
//                     equipmentSteps: "2, 4, 5",
//                 },
//             ],
//         },
//         {
//             id: "u4",
//             recipeName: "Soup Tortellini",
//             image:
//                 "https://ca-times.brightspotcdn.com/dims4/default/961ea02/2147483647/strip/true/crop/2048x1365+0+0/resize/840x560!/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F37%2F1f%2F70e48399903956ac70885ec66ad8%2Flat-fo-gold-alimento-photos-la0022728618-20141007",
//             difficulty: 5,
//             time: 3,
//             cost: 2,
//             description: "inspired by xiaolongbao",
//             author: "Zach Pollack",
//             cuisine: "Spanish",
//             ingredients: [
//                 {
//                     ingredient: "TEST TORTELLINI",
//                     amount: 3,
//                     units: "Cups",
//                     subs: "3",
//                 },
//                 {
//                     ingredient: "Instant Yeast",
//                     amount: "1/3",
//                     units: "Tsp",
//                     subs: 2,
//                 },
//                 {
//                     ingredient: "Euro Butter",
//                     amount: 1,
//                     units: "Cups",
//                     subs: 1,
//                 },
//             ],
//             steps: [
//                 {
//                     step: 1,
//                     shortDescription: "TEST TORTELLINI",
//                     longDescription:
//                         "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                     ingredients: ["Water", "Eggs", "Bread Flour"],
//                     ingredientsQty: [1, 1, 3],
//                     ingredientsUnits: ["cups", "pc", "cups"],
//                     equipments: ["Stand Mixer", "Silicone Scraper"],
//                     image:
//                         "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//                 },
//                 {
//                     step: 2,
//                     shortDescription: "TEST TORTELLINI",
//                     longDescription:
//                         "Mix all dry ingredients first. Then slowly pour wet ingredients in the mixer at low level. Gradually increase to medium level for about 3-4 minutes until the texture is nice and bouncy.",
//                     ingredients: ["Water", "Eggs", "Bread Flour"],
//                     ingredientsQty: [1, 1, 3],
//                     ingredientsUnits: ["cups", "pc", "cups"],
//                     equipments: ["Stand Mixer", "Silicone Scraper"],
//                     image:
//                         "https://www.kingarthurflour.com/sites/default/files/blog-images/2016/10/Make-pie-crust-4.jpg",
//                 },
//             ],
//             equipmentTable: [
//                 {
//                     equipment: "Stand Mixer",
//                     subs: 2,
//                     equipmentSteps: "1",
//                 },
//                 {
//                     equipment: "Rolling Pin",
//                     subs: 2,
//                     equipmentSteps: "2, 3, 4",
//                 },
//                 {
//                     equipment: "Plastic Wrap",
//                     subs: 1,
//                     equipmentSteps: "2, 4, 5",
//                 },
//             ],
//         },
//     ],
// };
