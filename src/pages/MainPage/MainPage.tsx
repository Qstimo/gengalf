import React from 'react'
import cls from './MainPage.module.scss'
import { classNames } from '../../components/helpers/Classnames/classnames'
import { WelcomePage } from '../../modules/WelcomePage'
import { AboutUs } from '../../modules/AboutUs'
import { Values } from '../../modules/Values'
import { Aside } from '../../modules/Aside'
import { FormList } from '../../modules/Form'

interface MainPageProps {
    className?: string
}

export const MainPage = ({ className = '' }: MainPageProps) => {
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            <WelcomePage />
            <AboutUs />
            <Values />
            <Aside />
            <FormList />
        </div>
    )
}