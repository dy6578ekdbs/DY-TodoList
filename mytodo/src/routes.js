import Todo from "./pages.js/Todo";
import Calendar from "./pages.js/Calendar";

export default [
    {
        path:'/',
        component:Todo,
    },
    {
        path:'/calendar',
        component:Calendar,
    },
];