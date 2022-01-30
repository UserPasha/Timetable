import React, {useState} from 'react';
import {Field} from "./Field";

type ListType = {
    date: string,
    start: string,
    end: string,
    ava: string,
    name: string,
    title: string,
    remain: string
}
export const TimeTable = () => {
    const [list, setList] = useState<Array<ListType>>(
        [
            {
                date: 'GAG',
                start: 'GAG',
                end: 'GAG',
                ava: 'GAG',
                name: "Леонид",
                title: "Support JS/TS",
                remain: 'GAG',

            },
            {
                date: 'GAG',
                start: 'GAG',
                end: 'GAG',
                ava: 'GAG',
                name: "Максим",
                title: "Support JS/TS",
                remain: 'GAG',

            },
            {
                date: 'GAG',
                start: 'GAG',
                end: 'GAG',
                ava: 'GAG',
                name: "Светлана",
                title: "Support CSS",
                remain: 'GAG',

            }

        ]
    )
const mappedList = list.map(l => <Field  {...l}/>)
    return (
        <div>
            {mappedList}
        </div>
    );
};
