import React, {useState} from 'react';
import {Field} from "./Field";
import ButtonTT from "./ButtonTT";

export type ListType = {
    date: string,
    start: string,
    end: string,
    ava: string,
    name: string,
    title: string,
    remain: string
    group: FilterPropsType
}
export type FilterPropsType = "All" | 52 | 53 | 54 | 55



export const TimeTable = () => {

    let [list, setList] = useState<Array<ListType>>(
        [
            {
                date: 'GAG',
                start: 'GAG',
                end: 'GAG',
                ava: 'GAG',
                name: "Леонид",
                title: "Support JS/TS",
                remain: 'GAG',
                group: 52
            },
            {
                date: 'GAG',
                start: 'GAG',
                end: 'GAG',
                ava: 'GAG',
                name: "Максим",
                title: "Support JS/TS",
                remain: 'GAG',
                group: 53
            },
            {
                date: 'GAG',
                start: 'GAG',
                end: 'GAG',
                ava: 'GAG',
                name: "Светлана",
                title: "Support CSS",
                remain: 'GAG',
                group: 54
            },
            {
                date: 'GAG',
                start: 'GAG',
                end: 'GAG',
                ava: 'GAG',
                name: "Суан",
                title: "Support JS/TS",
                remain: 'GAG',
                group: 55
            }

        ]
    )
    let [filter, setFilter] = useState<FilterPropsType>("All")


    const x = () => {
        console.log("x")
    }

    let filteredList = list
    //     let filteredList = list.filter(f => f.group === value)
    if (filter === 52) {
       filteredList = list.filter(f => f.group === 52)
    } else if (filter === 53) {
         filteredList = list.filter(f => f.group === 53)
    } else if (filter === 54) {
         filteredList = list.filter(f => f.group === 54)
    }else if (filter === 55) {
        filteredList = list.filter(f => f.group === 55)
    }
    else if(filter === "All") {
        filteredList = list
    }
    

    const mappedList = filteredList.map(l => <Field {...l}/>)
    return(
    <div>

            <ButtonTT name={52} setFilter={setFilter}/>
            <ButtonTT name={53} setFilter={setFilter}/>
            <ButtonTT name={54} setFilter={setFilter}/>
            <ButtonTT name={55} setFilter={setFilter}/>
            <ButtonTT name={"All"} setFilter={setFilter}/>

            {mappedList}
        </div>
    )
    ;
};
