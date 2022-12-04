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
    if (singleData.common != null && singleData.ko != null && singleData.en != null && singleData.ja != null) {
        storeTopObject.dispatch({
            type: 'saveData',
            payload: singleData
        })
    }
    if (typeof storeTopObject.getState() == 'undefined') {
        return null;
    }
    const reduxData = storeTopObject.getState().singleData;
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
                    <td>{reduxData.ko.artistName}</td>
                    <td>{reduxData.en.artistName}</td>
                    <td>{reduxData.ja.artistName}</td>
                </tr>
                <tr>
                    <td className="narrow">공연</td>
                    <td>{reduxData.ko.productName}</td>
                    <td>{reduxData.en.productName}</td>
                    <td>{reduxData.ja.productName}</td>
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
                    <td>{reduxData.ko.location}</td>
                    <td>{reduxData.en.location}</td>
                    <td>{reduxData.ja.location}</td>
                </tr>
                <tr>
                    <td className="narrow">썸네일</td>
                    <td><input type='file'/></td>
                    <td>{reduxData.en.thumbnailUrl}</td>
                    <td>{reduxData.ja.thumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default withRedux;