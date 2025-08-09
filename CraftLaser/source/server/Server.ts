import path from "path";
import express from "express"
import http from 'http'
import bodyParser from 'body-parser';
import config from '../config/config.json'

import { Router } from "./Router";

import cors from "cors"

import hbs from 'hbs'



class Server {
    app: express.Express = null;
    server: http.Server = null;


    constructor() {
        this.app = express();
        this.server = http.createServer(this.app); //Создание сервера

        hbs.registerHelper('json', function (context) {
            return JSON.stringify(context)
        })

        this.app.set('view engine', 'hbs'); //Подключение шаблонизатора
        console.log(path.normalize(path.join(__dirname, '..', 'views')))
        this.app.set('views', path.normalize(path.join(__dirname, '..', 'views'))) //Путь к шаблонизатору 
        console.log(path.join(__dirname, '..', 'public'))
        this.app.use('/static', express.static(path.join(__dirname, '..', 'public'))) //Путь к статическому файлу 
    }

    //Маршрутизация по ссылкам
    route() {
        this.app.use(cors());
        this.app.get("/", (req, res) => {
            res.render("index.hbs", {app:"home"}) //отрисовка шаблонизатора главная страница
        });

        this.app.get("/about", (req, res) => {
            res.render("index.hbs",{app:"about"}) //отрисовка шаблонизатора страница о нас
        });

        this.app.get("/catalog", (req, res) => {
            res.render("index.hbs", {app:"catalog"}) //отрисовка шаблонизатора страница каталога
        });

        this.app.get("/reviews", (req, res) => {
            res.render("index.hbs", {app:"reviews"}) //отрисовка шаблонизатора страница отзывов
        });

        this.app.get("/auth", (req, res) => {
            res.render("index.hbs", {app:"auth"}) //отрисовка шаблонизатора страница авторизации
        });

        this.app.get("/register", (req, res) => {
            res.render("index.hbs", {app:"register"}) //отрисовка шаблонизатора страница регистрации
        });

        this.app.get("/account", (req, res) => {
            res.render("index.hbs", {app:"account"}) //отрисовка шаблонизатора страница аккаунта
        });

        this.app.get("/admin", (req, res) => {
            res.render("index.hbs", {app:"admin"}) //отрисовка шаблонизатора страница админки
        });

        


        this.app.use(bodyParser.json({ limit: '300mb' })) //Парсер для post запросов 
        //Маршрут для API
        this.app.post("/api", async (req: express.Request, res: express.Response) => {
            res.send(await Router(req.body));
        })
    }

    //Запуск сервера 
    run() {
        this.route();
        this.server.listen(config.server_config.port, () => { console.log(`Сервер запушен: http://${config.server_config.host}:${config.server_config.port}`) })
    }
}

var srv = new Server();
srv.run();