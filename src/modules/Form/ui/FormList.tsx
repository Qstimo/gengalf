import React from 'react'
import cls from './Form.module.scss'
import { Input } from '../../../UI/Input'
import { classNames } from '../../../components/helpers/Classnames/classnames'
import iconFalse from './assets/icon/false_ic.svg'
import iconTrue from './assets/icon/true_ic.svg'
import { useInput } from '../helpers/InputHook'
import { Button } from '../../../UI/Button'
import { ButtonTheme } from '../../../UI/Button/ui/Button'
import scrapImg from './assets/icon/scrap_ic.svg'

export const FormList = () => {
    const name = useInput('', { isEmpty: true, minLength: 3, });
    const phone = useInput('', { isEmpty: true, isPhone: true, minLength: 8, });
    const email = useInput('', { isEmpty: true, IsEmail: true, });
    const job = useInput('', { isEmpty: true, minLength: 3, });
    const dataFile = (e: any) => {
        e.preventDefault()
    }
    return (
        <div className={cls.FormList}>
            <div className="content">
                <div className={cls.FormList_container}>
                    <form method='POST' action='' encType="multipart/form-data" className={cls.Form_list_register}>
                        <h3>Записаться на собеседование</h3>
                        <div className={cls.Form_list_register_data}>
                            <label className={cls.Form_list_register_label} htmlFor="name">
                                <Input
                                    value={name.value}
                                    onBlur={e => name.onBlur(e)}
                                    onChange={e => name.onChange(e)}
                                    required={true}
                                    name='name'
                                    id='name'
                                    type='text'
                                    placeholder='Как к вам обращаться?' />
                                {name.isDirty && (name.stringErorr.length >= 1
                                    ? <img className={classNames(cls.iconFalse, {}, [])} src={iconFalse} alt="не правильно" />
                                    : <img className={classNames(cls.iconTrue, {}, [])} src={iconTrue} alt="правильно" />)}
                            </label>
                            <label className={cls.Form_list_register_label} htmlFor="phone">
                                <Input
                                    value={phone.value}
                                    onBlur={e => phone.onBlur(e)}
                                    onChange={e => phone.onChange(e)}
                                    required={true}
                                    name='phone'
                                    id='phone'
                                    type='text'
                                    placeholder='Телефон' />
                                {phone.isDirty && (phone.stringErorr.length >= 1
                                    ? <img className={classNames(cls.iconFalse, {}, [])} src={iconFalse} alt="не правильно" />
                                    : <img className={classNames(cls.iconTrue, {}, [])} src={iconTrue} alt="правильно" />)}
                            </label>
                            <label className={cls.Form_list_register_label} htmlFor="email">
                                <Input
                                    value={email.value}
                                    onBlur={e => email.onBlur(e)}
                                    onChange={e => email.onChange(e)}
                                    required={true}
                                    name='email'
                                    id='phone'
                                    type='mail'
                                    placeholder='Email' />
                                {email.isDirty && (email.stringErorr.length >= 1
                                    ? <img className={classNames(cls.iconFalse, {}, [])} src={iconFalse} alt="не правильно" />
                                    : <img className={classNames(cls.iconTrue, {}, [])} src={iconTrue} alt="правильно" />)}
                            </label>
                            <label className={cls.Form_list_register_label} htmlFor="job">
                                <Input
                                    value={job.value}
                                    onBlur={e => job.onBlur(e)}
                                    onChange={e => job.onChange(e)}
                                    required={true}
                                    name='job'
                                    id='job'
                                    type='text'
                                    placeholder='Желаемая должность' />
                                {job.isDirty && (job.stringErorr.length >= 1
                                    ? <img className={classNames(cls.iconFalse, {}, [])} src={iconFalse} alt="не правильно" />
                                    : <img className={classNames(cls.iconTrue, {}, [])} src={iconTrue} alt="правильно" />)}
                            </label>
                        </div>
                        <div className={cls.job_list}>
                            <h4>Выберите категорию занятости</h4>
                            <div className="">
                                <label htmlFor="office">
                                    <input name="job" type="radio" value='office' id='office' />
                                    <span className={cls.customRadio}></span>
                                    Работа в офисе
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="internship">
                                    <input name="job" type="radio" value='internship' id='internship' />
                                    <span className={cls.customRadio}></span>
                                    Стажировка
                                </label>
                            </div>
                            <div className="">
                                <label htmlFor="distant">
                                    <input name="job" type="radio" value='distant' id='distant' />
                                    <span className={cls.customRadio}></span>
                                    Удаленная работа
                                </label>
                            </div>
                        </div>
                        <textarea className={cls.Form_list_register_textarea} name="qwest" id="qwest" placeholder='Ваши вопросы'></textarea>
                        <div className={cls.Form_list_register_btn_container}>
                            <label id='file' className={cls.Form_list_register_btn}>
                                <input hidden id='file' name='file' type="file" />
                                <span>
                                    Прикрепить резюме
                                    <img src={scrapImg} alt="Прикрепить файл" />
                                </span>
                            </label>
                            <Button typeof="submit" className={cls.Form_list_register_btn} theme={ButtonTheme.GREEN}>Оставить заявку</Button>
                        </div>
                    </form>
                </div>
            </div >
        </div >
    )
}