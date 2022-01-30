import React from 'react';
import c from "./Field.module.css"

type FieldPropsType = {
    date: string,
    start: string,
    end: string,
    ava: string,
    name: string,
    title: string,
    remain: string
}

export const Field = (props: FieldPropsType) => {
    return (
        <div className={c.FieldWrapper}>
            <div>
                {props.date}
            </div>
            <div className={c.FieldTitle}>
                {props.start}
            </div>
            <div className={c.FieldTitle}>
                {props.end}
            </div>
            <div>
                {props.ava}
            </div>
            <div className={c.FieldName}>
                {props.name}
            </div>
            <div className={c.FieldTitle}>
                {props.title}
            </div>
            <div>
                {props.remain}
            </div>
        </div>
    );
};

