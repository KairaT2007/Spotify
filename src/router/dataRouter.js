//pages
import Main from "../pages/Main";
import Search from "../pages/Search";
import Mediateka from "../pages/Mediateka";

//Utils
import { routes } from "../utils/routes";

export const dataRouter = [
    {
        url: routes.main,
        component: Main,
        title: "Ogogofy | main"
    },
    {
        url: routes.search,
        component: Search,
        title: "Ogogofy | search"
    },
    {
        url: routes.mediateka,
        component: Mediateka,
        title: "Ogogofy | mediateka"
    }
]