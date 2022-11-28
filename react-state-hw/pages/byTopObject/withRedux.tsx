import React, { useEffect, useState } from "react";
import { storeTopObject } from "../../redux/storeTopObject";

function withRedux() {
    const [singleData, setSingleData] = useState<any>({
        common: null,
        ko: null,
        en: null,
        ja: null
    });

    useEffect(() => {
        fetch('/api/eachState', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then((data) => {
            let tempResult:any = {
                common: {
                    url: data.url,
                    date: data.date
                }
            };
            ['ko', 'en', 'ja'].map((lang: string) => {
                tempResult[lang] = {
                    artistName: data[lang+'_artist_name'],
                    productName: data[lang+'_product_name'],
                    location: data[lang+'_location'],
                    thumbnailUrl: data[lang+'_thumbnail_url']
                }
            })
            setSingleData(tempResult);
        })
    }, [])
    console.log("singleData", singleData)
    if (singleData != null) {
        storeTopObject.dispatch({
            type: 'saveData',
            payload: singleData
        })
    }
    console.log(storeTopObject.getState())
    if (storeTopObject.getState().singleData.ko == null || storeTopObject.getState().singleData.ja == null || storeTopObject.getState().singleData.en == null || storeTopObject.getState().date == null || storeTopObject.getState().url == null) {
        console.log('hi')
        return null;
    }
    if (typeof storeTopObject.getState() == "undefined") {
        return null;
    }
    const reduxData = storeTopObject.getState();
    console.log("REDUXDATA", reduxData)
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
                    <td>{reduxData.singleData.ko.artistName}</td>
                    <td>{reduxData.singleData.en.artistName}</td>
                    <td>{reduxData.singleData.ja.artistName}</td>
                </tr>
                <tr>
                    <td className="narrow">공연</td>
                    <td>{reduxData.singleData.ko.productName}</td>
                    <td>{reduxData.singleData.en.productName}</td>
                    <td>{reduxData.singleData.ja.productName}</td>
                </tr>
                <tr>
                    <td className="narrow">예매링크</td>
                    <td>{reduxData.common.url}</td>
                    <td>{reduxData.common.url}</td>
                    <td>{reduxData.common.url}</td>
                </tr>
                <tr>
                    <td className="narrow">날짜</td>
                    <td>{reduxData.common.date.year}-{reduxData.common.date.month}-{reduxData.common.date.date}</td>
                    <td>{reduxData.common.date.year}-{reduxData.common.date.month}-{reduxData.common.date.date}</td>
                    <td>{reduxData.common.date.year}-{reduxData.common.date.month}-{reduxData.common.date.date}</td>
                </tr>
                <tr>
                    <td className="narrow">장소</td>
                    <td>{reduxData.singleData.ko.location}</td>
                    <td>{reduxData.singleData.en.location}</td>
                    <td>{reduxData.singleData.ja.location}</td>
                </tr>
                <tr>
                    <td className="narrow">썸네일</td>
                    <td>{reduxData.singleData.ko.thumbnailUrl}</td>
                    <td>{reduxData.singleData.en.thumbnailUrl}</td>
                    <td>{reduxData.singleData.ja.thumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default withRedux;