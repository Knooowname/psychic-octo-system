import React from "react";
import './App.css'
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";

export class App extends React.Component {


    render(): React.ReactNode {
        return (
            <>
                <RegisterPage />
            </>

        )
    }
}