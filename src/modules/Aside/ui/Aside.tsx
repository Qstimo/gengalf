import React from 'react'
import cls from './Aside.module.scss'
import videoPrew from './assets/img/video_prew.jpg'
import videoPrewMob from './assets/img/video_prew_mob.jpg'
import PlayIc from './assets/img/play_btn.svg'
import { Button } from '../../../UI/Button'
import { ButtonTheme } from '../../../UI/Button/ui/Button'
import qwestMen from './assets/img/qwest_men.png'
import { Accordion } from '../../../components/Accordion'


const qwestArray = [
    {
        qwest: 'На что нужно обратить внимание на собеседовании?',
        ans: ""

    },
    {
        qwest: 'Как правильно составить резюме?',
        ans: ' '
    },
    {
        qwest: 'Возможно ли устроиться без опыта?',
        ans: ' '
    },
    {
        qwest: 'Ошибки на собеседовании. Чего нужно избегать?',
        ans: ' '
    },

]

export const Aside = () => {
    return (
        <div className={cls.Aside}>
            <div className={cls.Aside_video}>
                <div className="content">
                    <h2 className={cls.Aside_title}>Инфраструктура для твоего развития и роста</h2>
                    <div className={cls.Aside_video_container} >
                        <div className={cls.Aside_video_text}>
                            <p className={cls.Aside_text}>Мы создаем платформу для профессионального развития каждого сотрудника.
                                Главная цель – дать возможность учиться, работать и получать удовольствие от каждой успешной задачи.
                            </p>
                            <p className={cls.Aside_text}>О возможностях личностного роста в ГЭНДАЛЬФ расскажет руководитель Департамента
                                персонала и карьеры Татьяна Арсенович.</p>
                        </div>
                        <div className={cls.Aside_video_img}>
                            <button className={cls.Aside_video_img_btn}><img src={PlayIc} alt="play" /></button>
                            <picture>
                                <source media="(min-width:800px)" srcSet={videoPrew} />
                                <img className={cls.Aside_video_img_pic} src={videoPrewMob} alt="Видео превью" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
            <div className={cls.Invite}>
                <div className="content">
                    <div className={cls.Invite_container}>
                        <h2>Ты студент и хочешь устроиться на практику?</h2>
                        <Button theme={ButtonTheme.GREEN}>Оставить заявку</Button>
                    </div>
                </div>
            </div>
            <div className={cls.FAQ}>
                <div className="content">
                    <div className={cls.FAQ_container}>
                        <div className={cls.FAQ_list}>
                            <h3>Ответы на вопросы</h3>
                            <ul>
                                {qwestArray
                                    .map(e => <Accordion key={e.qwest} qwest={e.qwest} ans={e.ans} />)
                                }
                            </ul>
                        </div>
                        <img className={cls.FAQ_img} width={378} height={320} src={qwestMen} alt="Вопросы" />
                    </div>
                </div></div>
        </div>
    )
}