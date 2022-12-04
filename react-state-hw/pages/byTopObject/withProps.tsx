import React, { useEffect, useState } from "react";
import ThreeLangTable from "../../ts-components/ThreeLangTable";

function withProps() {
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
    console.log(singleData)
    if (singleData == null) {
        return null
    }
    return (
        <ThreeLangTable koData={singleData.ko} enData={singleData.en} jaData={singleData.ja} commonData={singleData.common}/>
    )
}

export default withProps;