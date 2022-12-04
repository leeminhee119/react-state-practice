import React, { useEffect, useState } from "react";
import { store } from "../../redux/store";
import ThreeLangTableEachState from "../../ts-components/ThreeLangTableEachState";

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
        <ThreeLangTableEachState
        koArtistName={store.getState().koArtistName}
        enArtistName={store.getState().enArtistName}
        jaArtistName={store.getState().jaArtistName}
        koProductName={store.getState().koProductName}
        enProductName={store.getState().enProductName}
        jaProductName={store.getState().jaProductName}
        koLocation={store.getState().koLocation}
        enLocation={store.getState().enLocation}
        jaLocation={store.getState().jaLocation}
        koThumbnailUrl={store.getState().koThumbnailUrl}
        enThukoThumbnailUrl={store.getState().enThumbnailUrl}
        jaThumbnailUrl={store.getState().jaThumbnailUrl}
        date={store.getState().date}
        url={store.getState().url}
        />
    )
}
export default withRedux;