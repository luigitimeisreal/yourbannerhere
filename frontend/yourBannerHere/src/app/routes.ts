import { Routes } from "@angular/router";
import { MainPage } from "./pages/main-page/main-page";
import { Management } from "./pages/management/management";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";

const routeConfig: Routes = [
  {
    path: "",
    redirectTo: "home", 
    pathMatch: "full"
  }, {
    path: "home",
    component: MainPage,
    title: "Main Page"
  }, {
    path: "auth",
    children: [
      { path: "", redirectTo: "login", pathMatch: "full" },
      {path: "login", component: Login, title: "Login"},
      {path: "register", component: Register, title: "Register"}
    ]
  }, {
    path: "admin",
    component: Management,
    title: "Administration"
  }
];

export default routeConfig