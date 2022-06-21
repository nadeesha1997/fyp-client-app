import React from "react";
import { About } from "../about";
import { Header } from "../header";
export const HomePage=(props)=>{
    return(
        <>
        <Header/>
        <About data={props.data}/>
        </>
    )
}