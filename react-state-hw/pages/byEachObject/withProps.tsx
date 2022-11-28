import React, {useState, useEffect} from "react";
import { dataInterface } from "../../interface/dataInterface";

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
                    <td>{koData.thumbnailUrl}</td>
                    <td>{enData.thumbnailUrl}</td>
                    <td>{jaData.thumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default withProps;