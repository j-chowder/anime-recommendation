import { Outlet } from "react-router-dom";
import FavoriteContextProvider from "./FavoriteContext";
import * as React from "react";

export default function FavContextLayout(){
    return (
         <FavoriteContextProvider>
            <Outlet />
         </ FavoriteContextProvider>
    )
}