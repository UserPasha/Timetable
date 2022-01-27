import React from 'react';
import c from "./Field.module.css"

type FieldPropsType = {
    name: string
    title: string
}

export const Field = (props: FieldPropsType) => {
    return (
        <div className={c.FieldWrapper}>
            <div>
                GAG
            </div>
            <div className={c.FieldTitle}>
                GAG
            </div>
            <div className={c.FieldTitle}>
                GAG
            </div>
            <div>
                GAG
            </div>
            <div className={c.FieldName}>
                {props.name}
            </div>
            <div className={c.FieldTitle}>
                {props.title}
            </div>
            <div>
                GAG
            </div>
        </div>
    );
};

