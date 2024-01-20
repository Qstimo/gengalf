import React from 'react'
import cls from './Header.module.scss'
import { Link } from 'react-router-dom'
import { Logo } from '../assets/logo'
import { Button } from '../../../UI/Button'
import { ButtonTheme } from '../../../UI/Button/ui/Button'
import { classNames } from '../../../components/helpers/Classnames/classnames'
import svgSearch from '../assets/icons/search.svg'
import cartSvg from '../assets/icons/card.svg'
import svgUser from '../assets/icons/user.svg'
interface HeaderProps {
    className?: string
}
const LinksHeader = [
    { name: 'Профориентация', link: '/' },
    { name: 'Выбрать вакансию', link: '/' },
    { name: 'Карьера в ГЭНДАЛЬФ', link: '/' },
    { name: 'Стажерство', link: '/' },
    { name: 'Отзывы', link: '/' },
]
export const Header = ({ className }: HeaderProps) => {
    const [open, setOpen] = React.useState(false);

    const toglleNavbar = () => {
        setOpen(prev => !prev)
    }
    return (
        <div className={cls.Header} >
            <div className="content">
                <div className={cls.Header_container}>
                    <button className={cls.icon}><img src={svgSearch} alt="search" /></button>
                    <button className={cls.icon}><img src={cartSvg} alt="cart" /></button>
                    <Logo />
                    <button className={cls.icon}><img src={svgUser} alt="user" /></button>
                    <button onClick={toglleNavbar} className={classNames(cls.BtnClose, { [cls._active_btn]: open }, [])}>
                        <span></span>
                    </button>
                    <div className={classNames(cls.Navbar, { [cls._active_nav]: open }, [])}>

                        <ul >
                            {LinksHeader.map(link =>
                            (<Link key={link.name} to={link.link}>
                                <li >{link.name}</li>
                            </Link>
                            ))}
                        </ul>
                    </div>
                    <Button theme={ButtonTheme.CLEAR_BLUE} className={cls['header-btn']}>
                        Запись на собеседование
                    </Button>
                </div>
            </div>
        </div >
    )
}