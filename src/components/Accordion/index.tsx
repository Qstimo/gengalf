import React from 'react'
import cls from './Accordion.module.scss'
import { classNames } from '../helpers/Classnames/classnames'
import checkSvg from './assets/icon/check_svg.svg'

interface indexProps {
    ans: string,
    qwest: string,

}
export const Accordion = ({ ans, qwest }: indexProps) => {
    const [isActiveAccordion, setIsActiveAccordion] = React.useState(false);
    return (<>
        <li
            onClick={() => setIsActiveAccordion(prev => !prev)}
            key={qwest}
            className={cls.item}>
            <img className={cls.item_img} src={checkSvg}
                alt="check" />
            <p className={cls.item_title}> {qwest}</p>
            <div
                className={classNames(cls.item_answer, { [cls.item_answer_active]: isActiveAccordion }, [])}>
                <p className={cls.item_answer_text}> {ans}</p>
            </div>
        </li>
    </>
    )
}