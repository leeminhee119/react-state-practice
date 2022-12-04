import React, { useEffect, useState } from "react";
// import { dataInterface } from "../interface/dataInterface";

interface ThreeLangTableInterface {
    koData: any;
    enData: any;
    jaData: any;
    commonData: any;
    topObjectData: any;
}

const ThreeLangTable = (props: any) => {
    return (
        <table>
            <thead>
                <tr>
                    <th className="narrow">구분</th>
                    <th>한국어</th>
                    <th>영어</th>
                    <th>일본어</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="narrow">가수이름</td>
                    <td>{props.koArtistName}</td>
                    <td>{props.enArtistName}</td>
                    <td>{props.jaArtistName}</td>
                </tr>
                <tr>
                    <td className="narrow">공연</td>
                    <td>{props.koProductName}</td>
                    <td>{props.enProductName}</td>
                    <td>{props.jaProductName}</td>
                </tr>
                <tr>
                    <td className="narrow">예매링크</td>
                    <td>{props.url}</td>
                    <td>{props.url}</td>
                    <td>{props.url}</td>
                </tr>
                <tr>
                    <td className="narrow">날짜</td>
                    <td>{props.date.year}-{props.date.month}-{props.date.date}</td>
                    <td>{props.date.year}-{props.date.month}-{props.date.date}</td>
                    <td>{props.date.year}-{props.date.month}-{props.date.date}</td>
                </tr>
                <tr>
                    <td className="narrow">장소</td>
                    <td>{props.koLocation}</td>
                    <td>{props.enLocation}</td>
                    <td>{props.jaLocation}</td>
                </tr>
                <tr>
                    <td className="narrow">썸네일</td>
                    <td><input type='file'/></td>
                    <td>{props.enThumbnailUrl}</td>
                    <td>{props.jaThumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default ThreeLangTable;