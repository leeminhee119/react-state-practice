import React, { useEffect, useState } from "react";
import { storeEachObject } from "../../redux/storeEachObject";
import ThreeLangTable from "../../ts-components/ThreeLangTable";

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
        <ThreeLangTable koData={koData} enData={enData} jaData={jaData} commonData={commonData} />
    )
}

export default withRedux;