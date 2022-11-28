import React, { useEffect, useState } from "react";
import { store } from "../../redux/store";

function withRedux() {
    const [myData, setMyData] = useState<any>(null);
    useEffect(() => {
        fetch('/api/eachState', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log("data", data)
            setMyData(data);
        })
    }, [])
    if (myData != null) {
        store.dispatch({
            type: 'saveUrl',
            payload: myData.url
        })
        store.dispatch({
            type: 'saveDate',
            payload: myData.date
        })
        store.dispatch({
            type: 'saveKoArtistName',
            payload: myData.ko_artist_name
        })
        store.dispatch({
            type: 'saveKoProductName',
            payload: myData.ko_product_name
        })
        store.dispatch({
            type: 'saveKoLocation',
            payload: myData.ko_location
        })
        store.dispatch({
            type: 'saveKoThumbnailUrl',
            payload: myData.ko_thumbnail_url
        })
        store.dispatch({
            type: 'saveEnArtistName',
            payload: myData.en_artist_name
        })
        store.dispatch({
            type: 'saveEnProductName',
            payload: myData.en_product_name
        })
        store.dispatch({
            type: 'saveEnLocation',
            payload: myData.en_location
        })
        store.dispatch({
            type: 'saveEnThumbnailUrl',
            payload: myData.en_thumbnail_url
        })
        store.dispatch({
            type: 'saveJaArtistName',
            payload: myData.ja_artist_name
        })
        store.dispatch({
            type: 'saveJaProductName',
            payload: myData.ja_product_name
        })
        store.dispatch({
            type: 'saveJaLocation',
            payload: myData.ja_location
        })
        store.dispatch({
            type: 'saveJaThumbnailUrl',
            payload: myData.ja_thumbnail_url
        })
    }

    if (typeof store.getState() == "undefined") {
        return null;
    }
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
                    <td>{store.getState().koArtistName}</td>
                    <td>{store.getState().enArtistName}</td>
                    <td>{store.getState().jaArtistName}</td>
                </tr>
                <tr>
                    <td className="narrow">공연</td>
                    <td>{store.getState().koProductName}</td>
                    <td>{store.getState().enProductName}</td>
                    <td>{store.getState().jaProductName}</td>
                </tr>
                <tr>
                    <td className="narrow">예매링크</td>
                    <td>{store.getState().url}</td>
                    <td>{store.getState().url}</td>
                    <td>{store.getState().url}</td>
                </tr>
                <tr>
                    <td className="narrow">날짜</td>
                    <td>{store.getState().date.year}-{store.getState().date.month}-{store.getState().date.date}</td>
                    <td>{store.getState().date.year}-{store.getState().date.month}-{store.getState().date.date}</td>
                    <td>{store.getState().date.year}-{store.getState().date.month}-{store.getState().date.date}</td>
                </tr>
                <tr>
                    <td className="narrow">장소</td>
                    <td>{store.getState().koLocation}</td>
                    <td>{store.getState().enLocation}</td>
                    <td>{store.getState().jaLocation}</td>
                </tr>
                <tr>
                    <td className="narrow">썸네일</td>
                    <td>{store.getState().koThumbnailUrl}</td>
                    <td>{store.getState().enThumbnailUrl}</td>
                    <td>{store.getState().jaThumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}
export default withRedux;