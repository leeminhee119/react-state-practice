import React, {useState, useEffect} from "react";
import ThreeLangTable from "../../ts-components/ThreeLangTable";

function withProps() {
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
    if (koData == null || enData == null || jaData == null) {
        return null
    }
    return (
        <ThreeLangTable koData={koData} enData={enData} jaData={jaData} commonData={commonData} />
    )
}

export default withProps;