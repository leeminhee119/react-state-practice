import React, { useEffect } from "react";
// import { dataInterface } from "../interface/dataInterface";

interface ThreeLangTableInterface {

}

const ThreeLangTable = (props: any) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>구분</th>
                    <th>한국어</th>
                    <th>영어</th>
                    <th>일본어</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((rowData) => {

                    })
                }
            </tbody>
        </table>
    )
}
export default ThreeLangTable;