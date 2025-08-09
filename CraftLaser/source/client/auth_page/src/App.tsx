import React from "react";
import './App.css'
import {AuthPage} from "../src/pages/AuthPage/AuthPage"

export class App extends React.Component {


    render(): React.ReactNode {
        return (
            <>
                <AuthPage />
            </>

        )
    }
}