import React, {useState} from 'react';
import {Field} from "./Field";
import ButtonTT from "./ButtonTT";
import {v1} from "uuid";
import {type} from "os";

export type ListType = {
    id: string
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


export type SettingTimeType ={
    firstDataDate: any
    today: any
}
export const TimeTable = () => {

let today = new Date().toLocaleString()


    const firstDataDate = new Date('2022-06-02T10:00')
    const firstDate = firstDataDate.toLocaleString()
    const endFirstDate =  new Date('2022-06-02T14:00').toLocaleString()

    const secondDate = new Date('2022-06-02T11:00').toLocaleString()
    const endSecondDate =  new Date('2022-06-02T14:00').toLocaleString()
    const thirstDate = new Date('2022-06-02T12:00').toLocaleString()
    const fourthtDate = new Date('2022-06-02T13:00').toLocaleString()


    let [list, setList] = useState<Array<ListType>>(
        [
            {
                id: v1(),
                date: firstDate,
                start:'GAG',
                end: endFirstDate,
                ava: 'GAG',
                name: "Леонид",
                title: "Support JS/TS",
                remain: 'GAG',
                group: 52
            },
            {
                id: v1(),
                date: secondDate,
                start: 'GAG',
                end: endSecondDate,
                ava: 'GAG',
                name: "Максим",
                title: "Support JS/TS",
                remain: 'GAG',
                group: 53
            },
            {
                id: v1(),
                date: thirstDate,
                start: 'GAG',
                end: 'GAG',
                ava: 'GAG',
                name: "Светлана",
                title: "Support CSS",
                remain: 'GAG',
                group: 54
            },
            {
                id: v1(),
                date: fourthtDate,
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



        //console.log(firstDate)


    let filteredList = list
    //     let filteredList = list.filter(f => f.group === value)
    if (filter === 52) {
        filteredList = list.filter(f => f.group === 52)
    } else if (filter === 53) {
        filteredList = list.filter(f => f.group === 53)
    } else if (filter === 54) {
        filteredList = list.filter(f => f.group === 54)
    } else if (filter === 55) {
        filteredList = list.filter(f => f.group === 55)
    } else if (filter === "All") {
        filteredList = list
    }


    const mappedList = filteredList.map(l => <Field key={l.id} {...l}/>)
    return (
        <div>
            <div>
            {today}
            </div>
            <div>
                <ButtonTT name={52} setFilter={setFilter}/>
                <ButtonTT name={53} setFilter={setFilter}/>
                <ButtonTT name={54} setFilter={setFilter}/>
                <ButtonTT name={55} setFilter={setFilter}/>
                <ButtonTT name={"All"} setFilter={setFilter}/>
            </div>
            {mappedList}
        </div>
    )
        ;
};
