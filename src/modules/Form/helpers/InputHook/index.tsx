import React from 'react';

export const useValidation = (value: string, validations: any) => {
    const [isEmpty, setIsEmpty] = React.useState(true);
    const [minLengthError, setMinLengthError] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);
    const [phoneError, setPhoneError] = React.useState(false);

    React.useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case 'minLength':
                    value.length < validations?.[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case 'IsEmail':
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                case 'IsPhone':
                    const rePhone = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
                    rePhone.test(String(value)) ? setPhoneError(false) : setPhoneError(true);
                    break;
            }
        }


    }, [value])

    return [
        isEmpty,
        minLengthError,
        emailError,
        phoneError,
    ]


}

export const useValidForm = (array: boolean[],) => {
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect(() => {
        if (array.find(bollean => bollean === true)) {
            setIsValid(false);
        } else {
            setIsValid(true);
        }
    }, [array])

    return isValid;

}
const errorsArray = [
    'Поле не может быть пустым',
    'Некорректная длина',
    'Некорректный email',
    'Некорректный номер',
]

export const useInput = (initialValue: string, validations: any) => {
    const [value, setValue] = React.useState(initialValue);
    const [isDirty, setIsDirty] = React.useState(false);
    const valid = useValidation(value, validations);
    const onChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }
    const stringErorr = (isDirty ? ([...valid].map((valid, i) => {
        if (valid) {
            return errorsArray[i]
        } else { return ' ' }
    })) : ['']).filter(function (el) {
        return el !== ' ';
    })
    const onBlur = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setIsDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        stringErorr,
        errorsArray: [...valid],
        setValue,
    }
}
