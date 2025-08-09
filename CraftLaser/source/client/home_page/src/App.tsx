import React, { useState } from "react";
import './App.css'
import { Header } from "../../components/Header/Header";
import { HomePage } from "./pages/HomePage/HomePage";
import { Footer } from "../../components/Footer/Footer";
import { ModalFormFeedbackReq } from "../../components/ModalFormFeedbackReq/ModalFormFeedbackReq";
import Cookies from "js-cookie";

type State = {
    visible: boolean
}

export class App extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props)
        this.state = {
            visible: false
        }
    }
    
    handleCloseModal = () => {
        this.setState({visible: false})
    }

    handleOpenModal = () => {
        this.setState({visible: true})
    }

    render(): React.ReactNode {
        
        const userSess = Cookies.get('user_sess')


        return (
            <>
                <ModalFormFeedbackReq userSess={userSess} visibleFlag={this.state.visible} closeModal={this.handleCloseModal}/>
                <Header />
                <HomePage />
                <Footer openModal={this.handleOpenModal}/>
            </>
        )
    }
}