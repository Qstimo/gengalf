import React from 'react'
import cls from './WelcomePage.module.scss'
import { Button } from '../../../UI/Button'
import { ButtonTheme } from '../../../UI/Button/ui/Button'
interface WelcomePageProps {
    className?: string
}
export const WelcomePage = ({ className }: WelcomePageProps) => {
    return (
        <div className={cls.WelcomePage}>
            <div className="content">
                <div className={cls.WelcomePage_container}>
                    <h1>Добро пожаловать <br /> в ГЭНДАЛЬФ!</h1>
                    <p className={cls.title}>Мы готовы поделиться секретом, почему любим компанию,
                        в которой работаем. Если тебе будут близки наши ценности и идеи,
                        то смело записывайся на собеседование!</p>
                    <div className={cls.btn_container}>
                        <Button theme={ButtonTheme.GREEN}>Почему мы</Button>
                        <Button theme={ButtonTheme.CLEAR_GREEN}>Записаться на собеседование</Button>
                    </div>
                </div>
            </div>
        </div >
    )
}
