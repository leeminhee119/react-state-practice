import React, { useEffect, useState } from "react";
import { storeTopObject } from "../../redux/storeTopObject";
import ThreeLangTable from "../../ts-components/ThreeLangTable";

function withRedux() {
    const [singleData, setSingleData] = useState<any>(null);

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
    if (singleData != null) {
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
        <ThreeLangTable koData={reduxData.ko} enData={reduxData.en} jaData={reduxData.ja} commonData={reduxData.common} />
    )
}

export default withRedux;