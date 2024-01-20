import React from 'react'
import cls from './Card.module.scss'
type CardProps = {
    img: string,
    text: string,
    title: string,
}

export const Card: React.FC<CardProps> = ({ img, text, title }) => {
    return (
        <div className={cls.Card}>
            <img className={cls.Card_img} src={img} alt={title} />
            <h3 className={cls.Card_title}>{title}</h3>
            <p className={cls.Card_text}>{text}</p>
        </div>
    )
}