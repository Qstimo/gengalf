import React from 'react'
import cls from './Values.module.scss'
import { ValuesCard } from './assets/ValuesCard'
import { Card } from '../../../components/Card/Card'
import MySlider from '../../../components/Slider/MySlider'
interface ValuesProps {
    className?: string
}
export const Values = ({ className }: ValuesProps) => {
    return (
        <div className={cls.Values}>
            <div className="content">
                <div className={cls.Values_container}>
                    <h2>Наши ценности скажут о нас больше:</h2>
                    <div className={cls.slider}>
                        <MySlider slides={ValuesCard.map(e => (<Card
                            title={e.title}
                            img={e.img}
                            text={e.text}
                            key={e.img}
                        />

                        ))} />
                        { }
                    </div>
                </div>
            </div>
        </div>
    )
}