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
    const [koData,setKoData] = useState<any>(null);
    const [enData,setEnData] = useState<any>(null);
    const [jaData,setJaData] = useState<any>(null);
    const [commonData,setCommonData] = useState<any>(null);

    useEffect(() => {
        setKoData(typeof props.topObjectData == 'undefined' ? props.koData : props.topObjectData.ko);
        setEnData(typeof props.topObjectData == 'undefined' ? props.enData : props.topObjectData.en);
        setJaData(typeof props.topObjectData == 'undefined' ? props.jaData : props.topObjectData.ja);
        setCommonData(typeof props.topObjectData == 'undefined' ? props.commonData : props.topObjectData.common);
    }, [])
    
    if (koData == null || enData == null || jaData == null || commonData == null) {
        return null;
    }
    console.log(koData);
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
                    <td>{koData.artistName}</td>
                    <td>{enData.artistName}</td>
                    <td>{jaData.artistName}</td>
                </tr>
                <tr>
                    <td className="narrow">공연</td>
                    <td>{koData.productName}</td>
                    <td>{enData.productName}</td>
                    <td>{jaData.productName}</td>
                </tr>
                <tr>
                    <td className="narrow">예매링크</td>
                    <td>{commonData.url}</td>
                    <td>{commonData.url}</td>
                    <td>{commonData.url}</td>
                </tr>
                <tr>
                    <td className="narrow">날짜</td>
                    <td>{commonData.date.year}-{commonData.date.month}-{commonData.date.date}</td>
                    <td>{commonData.date.year}-{commonData.date.month}-{commonData.date.date}</td>
                    <td>{commonData.date.year}-{commonData.date.month}-{commonData.date.date}</td>
                </tr>
                <tr>
                    <td className="narrow">장소</td>
                    <td>{koData.location}</td>
                    <td>{enData.location}</td>
                    <td>{jaData.location}</td>
                </tr>
                <tr>
                    <td className="narrow">썸네일</td>
                    <td><input type='file'/></td>
                    <td>{enData.thumbnailUrl}</td>
                    <td>{jaData.thumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default ThreeLangTable;