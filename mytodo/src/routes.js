import Todo from "./pages.js/Todo";
import Mon from "./pages.js/Mon";
import Start from "./pages.js/Start";
import Login from "./pages.js/Login";

export default [
    {
        path:'/',
        component:Start,
    },
    {
        path:'/login',
        component:Login,
    },
    {
        path:'/home',
        component:Mon,
    },
  
];