import React from 'react';
import {FilterPropsType, ListType} from "./TimeTable";

type ButtonPropsType = {
    name: FilterPropsType
    setFilter: (value: FilterPropsType)=> void

}


const ButtonTt = (props: ButtonPropsType) => {
    const onClickHandler = () => props.setFilter(props.name)

    return (
        <button onClick={onClickHandler}>{props.name}</button>
    );
};

export default ButtonTt;