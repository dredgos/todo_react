import Input from "./Input"
import List from "./List"
import { useState } from 'react';

const ToDoList = () => {

    const [list, setList] = useState([]);
    const handleClickInput = (e) => {
        e.preventDefault();
        setList([...list, input]);
        setInput("");
    };

    const [input, setInput] = useState("");
    const handleChangeInput = (e) => {
        e.preventDefault();
        setInput(e.currentTarget.value);
    };



    return (
        <>
            <Input handleChange={ handleChangeInput } handleClick={ handleClickInput } value={ input }/>
            <List list={ list } item={ input }/>   
        </>
    );
};

export default ToDoList;