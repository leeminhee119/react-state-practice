import React, { useEffect, useState } from "react";
import { storeEachObject } from "../../redux/storeEachObject";

function withRedux() {
    const [commonData, setCommonData] = useState<any>(null);
    const [koData, setKoData] = useState<any>(null);
    const [enData, setEnData] = useState<any>(null);
    const [jaData, setJaData] = useState<any>(null);

    useEffect(() => {
        fetch('/api/eachState', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then((data) => {
            setCommonData({
                url: data.url,
                date: data.date
            })
            const commonObj = (lang: string) => {
                return {
                    artistName: data[lang+'_artist_name'],
                    productName: data[lang+'_product_name'],
                    location: data[lang+'_location'],
                    thumbnailUrl: data[lang+'_thumbnail_url']
                }
            }
            ['ko', 'en', 'ja'].map((lang:string) => {
                switch (lang) {
                    case 'ko':
                        setKoData(commonObj(lang))
                    case 'en':
                        setEnData(commonObj(lang))
                    case 'ja':
                        setJaData(commonObj(lang))
                }
            })

        })
    }, [])
    console.log("commonData", commonData)
    console.log("koData", koData)
    console.log("enData", enData)

    if (commonData != null && koData != null && enData != null && jaData != null) {
        storeEachObject.dispatch({
            type: 'saveUrl',
            payload: commonData.url
        })
        storeEachObject.dispatch({
            type: 'saveDate',
            payload: commonData.date
        })
        storeEachObject.dispatch({
            type: 'saveKoData',
            payload: koData
        })
        storeEachObject.dispatch({
            type: 'saveEnData',
            payload: enData
        })
        storeEachObject.dispatch({
            type: 'saveJaData',
            payload: jaData
        })
    }

    if (typeof storeEachObject.getState() == "undefined") {
        return null
    }
    console.log(storeEachObject.getState())
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
                    <td>{storeEachObject.getState().koData.artistName}</td>
                    <td>{storeEachObject.getState().enData.artistName}</td>
                    <td>{storeEachObject.getState().jaData.artistName}</td>
                </tr>
                <tr>
                    <td className="narrow">공연</td>
                    <td>{storeEachObject.getState().koData.productName}</td>
                    <td>{storeEachObject.getState().enData.productName}</td>
                    <td>{storeEachObject.getState().jaData.productName}</td>
                </tr>
                <tr>
                    <td className="narrow">예매링크</td>
                    <td>{storeEachObject.getState().url}</td>
                    <td>{storeEachObject.getState().url}</td>
                    <td>{storeEachObject.getState().url}</td>
                </tr>
                <tr>
                    <td className="narrow">날짜</td>
                    <td>{storeEachObject.getState().date.year}-{storeEachObject.getState().date.month}-{storeEachObject.getState().date.date}</td>
                    <td>{storeEachObject.getState().date.year}-{storeEachObject.getState().date.month}-{storeEachObject.getState().date.date}</td>
                    <td>{storeEachObject.getState().date.year}-{storeEachObject.getState().date.month}-{storeEachObject.getState().date.date}</td>
                </tr>
                <tr>
                    <td className="narrow">장소</td>
                    <td>{storeEachObject.getState().koData.location}</td>
                    <td>{storeEachObject.getState().enData.location}</td>
                    <td>{storeEachObject.getState().jaData.location}</td>
                </tr>
                <tr>
                    <td className="narrow">썸네일</td>
                    <td>{storeEachObject.getState().koData.thumbnailUrl}</td>
                    <td>{storeEachObject.getState().enData.thumbnailUrl}</td>
                    <td>{storeEachObject.getState().jaData.thumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default withRedux;