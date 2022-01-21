import Todo from "./pages.js/Todo";
import Calendar from "./pages.js/Calendar";
import Mon from "./pages.js/Mon";
import Tue from "./pages.js/Tue";
import Wen from "./pages.js/Wen";
import Thu from "./pages.js/Thu";
import Fri from "./pages.js/Fri";
import Sat from "./pages.js/Sat";
import Sun from "./pages.js/Sun";

export default [
    {
        path:'/calendar',
        component:Calendar,
    },
    {
        path:'/schedul-mon',
        component:Mon,
    },
    {
        path:'/schedul-tue',
        component:Tue,
    },
    {
        path:'/schedul-wen',
        component:Wen,
    },
    {
        path:'/schedul-thu',
        component:Thu,
    },
    {
        path:'/schedul-fri',
        component:Fri,
    },
    {
        path:'/schedul-sat',
        component:Sat,
    },
    {
        path:'/schedul-sun',
        component:Sun,
    },
   
];