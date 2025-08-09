import React from "react";
import './App.css'
import { AccountPage } from "./pages/AccountPage/AccountPage";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { ModalFormFeedbackReq } from "../../components/ModalFormFeedbackReq/ModalFormFeedbackReq";
import Cookies from "js-cookie";
import { User } from "../../shared/types/user.types";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { ModalFormUserInfoReplace } from "../../components/ModalFormUserInfoReplace/ModalFormUserInfoReplace";
import { Order } from "../../shared/types/order.types";

export type State = {
    visibleFeedbackModal: boolean,
    visibleSettingsModal: boolean,
    user: User | null,
    refreshUser: boolean,
    orders: Order[] | null,
}

export class App extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props);
        this.state = {
            visibleFeedbackModal: false,
            visibleSettingsModal: false,
            user: null,
            refreshUser: false,
            orders: null,
        };
    }

    async componentDidMount(): Promise<void> {
        await this.fetchUserForSess()
        await this.fetchOrders()
    }

    async fetchOrders() {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.selectReqProduct, {}, String(userSess), config)
            const data = await response.json()
            this.setState({orders: data.data})
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

    handleUserDataChanged = () => {
        this.setState({ refreshUser: true })
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>): void {
        if(this.state.refreshUser && !prevState.refreshUser) {
            this.fetchUserForSess().then(() => {
                this.setState({ refreshUser: false })
            })
        }
    }

    // Модалка 1
    handleOpenFeedbackModal = () => {
        this.setState({ visibleFeedbackModal: true });
    };

    handleCloseFeedbackModal = () => {
        this.setState({ visibleFeedbackModal: false });
    };

    // Модалка 2
    handleOpenSettingsModal = () => {
        this.setState({ visibleSettingsModal: true });
    };

    handleCloseSettingsModal = () => {
        this.setState({ visibleSettingsModal: false });
    };

    render(): React.ReactNode {

        const {user} = this.state
        const userSess = Cookies.get('user_sess')

        return (
            <>
                <ModalFormFeedbackReq userSess={userSess} visibleFlag={this.state.visibleFeedbackModal} closeModal={this.handleCloseFeedbackModal} />
                <ModalFormUserInfoReplace user={user ? user : null} visibleFlag={this.state.visibleSettingsModal} closeModal={this.handleCloseSettingsModal} onUserDataChanged={this.handleUserDataChanged}/>                
                <Header />
                <AccountPage orders={this.state.orders} user={user ? user : null} userSess={userSess} openModal={this.handleOpenSettingsModal}/>
                <Footer openModal={this.handleOpenFeedbackModal}/>
            </>

        )
    }
}