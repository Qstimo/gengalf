import React from 'react';
import cls from './AboutUs.module.scss';
import { Button } from '../../../UI/Button';
import { ButtonTheme } from '../../../UI/Button/ui/Button';
import womenImg from './assets/img/women.jpg'
import womenG from './assets/img/Group.png'

export const AboutUs = () => {
  return (
    <div >
      <div className="content">
        <div className={cls.AboutUs}>
          <div className={cls.info}>
            <h2>О том, чем мы занимаемся</h2>
            <p>
              ГЭНДАЛЬФ – один из крупнейших игроков на рынке информационных технологий, занимающий 4
              место среди 7000 партнеров фирмы «1С». У нас есть представительства в 15 городах России, а
              нашими услугами пользуются 23 000 организаций-клиентов, в числе которых «Базэл Аэро»,
              «Ростсельмаш», UTG. Аэропорт Кольцово и многие другие.
            </p>
            <p>
              Мы тщательно подходим к выбору сотрудников, которые становятся частью команды
              профессионалов.
            </p>
            <p>
              У нас работают специалисты разных областей: программисты, маркетологи, менеджеры,
              копирайтеры, методисты и другие, чей карьерный рост не ограничен привычными рамками.
            </p>
            <div className={cls.btn_container}>
              <Button theme={ButtonTheme.BLUE}>Узнать больше</Button>
              <Button theme={ButtonTheme.CLEAR_BLUE}>Записаться на собеседование</Button>
            </div>
          </div>
          <div className={cls.img}>
            <img src={womenG} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};
