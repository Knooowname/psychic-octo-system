import React from "react";
import './App.css'
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage/AboutPage";
import Cookies from "js-cookie";
import { ModalFormFeedbackReq } from "../../components/ModalFormFeedbackReq/ModalFormFeedbackReq";

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
        this.setState({ visible: false })
    }

    handleOpenModal = () => {
        this.setState({ visible: true })
    }

    render(): React.ReactNode {

        const userSess = Cookies.get('user_sess')

        return (
            <>
                <ModalFormFeedbackReq userSess={userSess} visibleFlag={this.state.visible} closeModal={this.handleCloseModal} />
                <Header />

                <AboutPage />

                <Footer openModal={this.handleOpenModal}/>
            </>

        )
    }
}