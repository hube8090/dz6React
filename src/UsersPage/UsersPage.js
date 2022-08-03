import React, {  useState } from "react";
// import classes from './Profile.module.css'

function UsersPage(){

    const [user, setUser] = useState({
        name:"",
        lastName:"",
        gender:"",
        status: false
    });


    const ChangeInput = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value  // присваивание новых значений ключам объекта
        })
    }

    const cleanInput = () => { // очищение полей формы и возвращение изначального состояния
        setUser(prev => {
            return {
                ...prev,
                name:"",
                lastName:"",
                gender:"",
                status: false
            }
        })
    }

    const submit = (e) => {   //валидация (проверка незаполненных полей)
        e.preventDefault()

        if(!user.name.trim()) {
            alert("заполните поле NAME")
            return
        }
        if(!user.lastName.trim()) {
            alert("заполните поле LastName")
            return
        }
        if(!user.gender.trim()) {
            alert("заполните поле GENDER")
            return
        }
        if(!user.status.trim()) {
            alert("заполните поле Status")
            return
        }
        alert("Данные успешно отправлены ")
        console.log(user)
        cleanInput()
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={ChangeInput}
                />

                <input
                    type="text"
                    placeholder="LastName"
                    name="lastName"
                    value={user.lastName}
                    onChange={ChangeInput}
                />

                <select
                    placeholder="gender"
                    name="gender"
                    onChange={ChangeInput}
                >
                    <option value="">Выберите пол</option>
                    <option value="man">Мужчина</option>
                    <option value="woman">Женщина</option>
                </select>

                <input
                    type="radio"
                    placeholder="Name"
                    name="status"
                    value= "true"
                    onChange={ChangeInput}
                /> В браке

                <input
                    type="radio"
                    placeholder=""
                    name="status"
                    value= "false"
                    onChange={ChangeInput}
                />   Не в браке


                <button type="submit">Жми</button>
            </form>
        </div>
    );
}

export default UsersPage;