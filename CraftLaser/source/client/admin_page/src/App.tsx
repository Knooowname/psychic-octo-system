import React from "react";
import './App.css'
import { AdminPage } from "./pages/AdminPage/AdminPage";
import Cookies from "js-cookie";
import { api } from "../../api/api";
import { APICOMMAND } from "../../shared/types/command.types";
import config from '../../../config/config.json'
import { User } from "../../shared/types/user.types";
import { AdminModalFormAddManager } from "../../components/AdminModalFormAddManager/AdminModalFormAddManager";
import { AdminModalAddNewProduct } from "../../components/AdminModalAddNewProduct/AdminModalAddNewProduct";
import { Material } from "../../shared/types/material.types";
import { Filter } from "../../shared/types/filter.types";
import { AdminModalAddNewFilter } from "../../components/AdminModalAddNewFilter/AdminModalAddNewFilter";
import { AdminModalAddNewMaterial } from "../../components/AdminModalAddNewMaterial/AdminModalAddNewMaterial";
import { Order } from "../../shared/types/order.types";
import { Status } from "../../shared/types/status.types";


type State = {
    visibleAddManagerModal: boolean,
    visibleAddNewProductModal: boolean,
    visibleAddNewFilterModal: boolean,
    visibleAddNewMaterialModal: boolean,
    user: User | null,
    materials: Material[] | null,
    filters: Filter[] | null,
    orders: Order[] | null,
    status: Status[] | null,
    allUsers: User[] | null,
    refreshUsers: boolean,
}

export class App extends React.Component<{}, State> {

    constructor(props: {}) {
        super(props)
        this.state = {
            visibleAddManagerModal: false,
            visibleAddNewProductModal: false,
            visibleAddNewFilterModal: false,
            visibleAddNewMaterialModal: false,
            user: null,
            materials: null,
            filters: null,
            orders: null,
            status: null,
            allUsers: null,
            refreshUsers: false
        }
    }

    async componentDidMount(): Promise<void> {
        await this.fetchUserForSess()
        await this.fetchMaterials()
        await this.fetchFilters()
        await this.fetchOrders()
        await this.fetchStatus()
        await this.fetchUsers()
    }

    async fetchUserForSess() {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.authCode, {}, String(userSess), config)
            const data = await response.json()
            this.setState({ user: data.data })
        } catch (error) {
            console.error(error)
        }
    }

    async fetchMaterials() {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.selectMaterial, {}, String(userSess), config)
            const data = await response.json()
            this.setState({ materials: data.data })
        } catch (error) {
            console.error(error)
        }
    }

    async fetchFilters() {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.selectFilters, {}, String(userSess), config)
            const data = await response.json()
            this.setState({ filters: data.data })
        } catch (error) {
            console.error(error)
        }
    }

    async fetchOrders() {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.selectReqProduct, {}, userSess, config)
            const data = await response.json()
            this.setState({ orders: data.data })
        } catch (error) {
            console.error(error)
        }
    }

    async fetchStatus() {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.selectStatus, {}, userSess, config)
            const data = await response.json()
            this.setState({ status: data.data })
        } catch (error) {
            console.error(error)
        }
    }

    async fetchUsers() {
        const userSess = Cookies.get('user_sess')
        try {
            const response = await api(APICOMMAND.selectUsers, {}, userSess, config)
            const data = await response.json()
            this.setState({ allUsers: data.data })
        } catch (error) {
            console.error(error)
        }
    }

    //-----------------------------

    handleUsersDataChanged = () => {
        this.setState({ refreshUsers: true })
    }

    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<State>): void {
        if (this.state.refreshUsers && !prevState.refreshUsers) {
            this.fetchUsers().then(() => {
                this.setState({ refreshUsers: false })
            })
        }
    }

    //----------------------------------


    handleCloseAddNewMaterialModal = () => {
        this.setState({ visibleAddNewMaterialModal: false })
    }

    handleOpenAddNewMaterialModal = () => {
        this.setState({ visibleAddNewMaterialModal: true })
    }

    handleCloseAddNewFilterModal = () => {
        this.setState({ visibleAddNewFilterModal: false })
    }

    handleOpenAddNewFilterModal = () => {
        this.setState({ visibleAddNewFilterModal: true })
    }

    handleCloseAddManagerModal = () => {
        this.setState({ visibleAddManagerModal: false })
    }

    handleOpenAddManagerModal = () => {
        this.setState({ visibleAddManagerModal: true })
    }

    handleCloseAddNewProductModal = () => {
        this.setState({ visibleAddNewProductModal: false })
    }

    handleOpenAddNewProductModal = () => {
        this.setState({ visibleAddNewProductModal: true })
    }

    render(): React.ReactNode {

        const userSess = Cookies.get('user_sess')

        return (
            <>
                <AdminModalAddNewMaterial userSess={userSess} closeModal={this.handleCloseAddNewMaterialModal} visibleFlag={this.state.visibleAddNewMaterialModal} filters={this.state.filters} />
                <AdminModalAddNewFilter userSess={userSess} closeModal={this.handleCloseAddNewFilterModal} visibleFlag={this.state.visibleAddNewFilterModal} />
                <AdminModalAddNewProduct userSess={userSess} closeModal={this.handleCloseAddNewProductModal} visibleFlag={this.state.visibleAddNewProductModal} filters={this.state.filters} materials={this.state.materials} />
                <AdminModalFormAddManager closeModal={this.handleCloseAddManagerModal} visibleFlag={this.state.visibleAddManagerModal} />
                <AdminPage onManagersChange={this.handleUsersDataChanged} filters={this.state.filters} materials={this.state.materials} users={this.state.allUsers} status={this.state.status} orders={this.state.orders} user={this.state.user} userSess={userSess} openAddNewMaterialModal={this.handleOpenAddNewMaterialModal} openAddManagerModal={this.handleOpenAddManagerModal} openAddNewProductModal={this.handleOpenAddNewProductModal} openAddNewFilterModal={this.handleOpenAddNewFilterModal} />
            </>

        )
    }
}