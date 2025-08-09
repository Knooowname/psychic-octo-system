import React from "react";
import './App.css'
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ReviewsPage } from "./pages/ReviewsPage/ReviewsPage";
import Cookies from "js-cookie";
import { ModalFormFeedbackReq } from "../../components/ModalFormFeedbackReq/ModalFormFeedbackReq";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { User } from "../../shared/types/user.types";
import { Review } from "../../shared/types/review.types";

type State = {
    visible: boolean,
    user: User | null,
    review: Review[] | null,
}

export class App extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props)
        this.state = {
            visible: false,
            user: null,
            review: null,
        }
    }

    async componentDidMount(): Promise<void> {
        await this.fetchUserForSess()
        await this.fetchReview()
    }

    async fetchReview() {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.selectReviews, {}, userSess, config)
            const data = await response.json()
            this.setState({ review: data.data })
        } catch (error) {
            console.error(error)
        }
    }

    async fetchUserForSess () {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.authCode, {}, String(userSess), config)
            const data = await response.json()
            this.setState({user: data.data})
        } catch (error) {
            console.error(error)
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

                <ReviewsPage review={this.state.review} user={this.state.user} userSess={userSess}/>

                <Footer openModal={this.handleOpenModal}/>
            </>

        )
    }
}