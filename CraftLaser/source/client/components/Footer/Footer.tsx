import React, { FC, useState } from "react";
import './Footer.css'
import { HeaderLink } from "../ui/HeaderLink/HeaderLink";
import { Button } from "../ui/Button/Button";
import { ModalFormFeedbackReq } from "../ModalFormFeedbackReq/ModalFormFeedbackReq";

interface FooterProps {
  openModal?: () => void,
}

export const Footer: FC<FooterProps> = ({ openModal }) => {
  return (
    <footer className="footer_wrapper">
      <div className="footer_wrapper_content">
        <picture className="footer_logo_pic">
          <a href="/">
            <img src="static/assets/img/header_logo.png" className="footer_logo_img" alt="" />
          </a>
        </picture>
        <ul className="footer_nav_list">
          <li className="footer_nav_item">
            <HeaderLink>
              Главная
            </HeaderLink>
          </li>
          <li className="footer_nav_item">
            <HeaderLink>
              О нас
            </HeaderLink>
          </li>
          <li className="footer_nav_item">
            <HeaderLink>
              Каталог
            </HeaderLink>
          </li>
          <li className="footer_nav_item">
            <HeaderLink>
              Отзывы
            </HeaderLink>
          </li>
        </ul>
        <Button padding="0" width="220px" height="55px" onClick={() => openModal()}>
          Оставить заявку
        </Button>
      </div>
      <div className="wrapper_footer_link">
        <a className="footer_link link-tel" href="tel:+70000000000">+7(000)000-00-00</a>
        <a className="footer_link link-email" href="mailto:craftlaser@mail.ru">craftlaser@mail.ru</a>
      </div>
    </footer>
  )
}