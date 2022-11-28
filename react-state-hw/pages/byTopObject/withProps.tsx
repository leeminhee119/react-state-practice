import React, { useEffect, useState } from "react";

function withProps() {
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
    console.log(singleData)
    if (singleData.ko == null || singleData.en == null || singleData.ja == null) {
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
                    <td>{singleData.ko.artistName}</td>
                    <td>{singleData.en.artistName}</td>
                    <td>{singleData.ja.artistName}</td>
                </tr>
                <tr>
                    <td className="narrow">공연</td>
                    <td>{singleData.ko.productName}</td>
                    <td>{singleData.en.productName}</td>
                    <td>{singleData.ja.productName}</td>
                </tr>
                <tr>
                    <td className="narrow">예매링크</td>
                    <td>{singleData.common.url}</td>
                    <td>{singleData.common.url}</td>
                    <td>{singleData.common.url}</td>
                </tr>
                <tr>
                    <td className="narrow">날짜</td>
                    <td>{singleData.common.date.year}-{singleData.common.date.month}-{singleData.common.date.date}</td>
                    <td>{singleData.common.date.year}-{singleData.common.date.month}-{singleData.common.date.date}</td>
                    <td>{singleData.common.date.year}-{singleData.common.date.month}-{singleData.common.date.date}</td>
                </tr>
                <tr>
                    <td className="narrow">장소</td>
                    <td>{singleData.ko.location}</td>
                    <td>{singleData.en.location}</td>
                    <td>{singleData.ja.location}</td>
                </tr>
                <tr>
                    <td className="narrow">썸네일</td>
                    <td>{singleData.ko.thumbnailUrl}</td>
                    <td>{singleData.en.thumbnailUrl}</td>
                    <td>{singleData.ja.thumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default withProps;