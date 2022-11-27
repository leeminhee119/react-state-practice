import React, {useState, useEffect} from "react";
import ThreeLangTable from '../../ts-components/ThreeLangTable';
import { dataInterface } from "../../interface/dataInterface";

function withProps(props: dataInterface) {
    const [url, setUrl] = useState(null);
    const [date, setDate] = useState({year:'xxxx', month:'xx', date:'xx'});

    const [koArtistName, setKoArtistName] = useState(null);
    const [koProductName, setKoProductName] = useState(null);
    const [koLocation, setKoLocation] = useState(null);
    const [koThumbnailUrl, setKoThumbnailUrl] = useState(null);

    const [enArtistName, setEnArtistName] = useState(null);
    const [enProductName, setEnProductName] = useState(null);
    const [enLocation, setEnLocation] = useState(null);
    const [enThumbnailUrl, setEnThumbnailUrl] = useState(null);

    const [jaArtistName, setJaArtistName] = useState(null);
    const [jaProductName, setJaProductName] = useState(null);
    const [jaLocation, setJaLocation] = useState(null);
    const [jaThumbnailUrl, setJaThumbnailUrl] = useState(null);

    useEffect(() => {
        fetch('/api/eachState', {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then((data) => {
            setUrl(data.url);
            setDate(data.date);
            
            setKoArtistName(data.ko_artist_name);
            setKoProductName(data.ko_product_name);
            setKoLocation(data.ko_location);
            setKoThumbnailUrl(data.ko_thumbnail_url);
            
            setEnArtistName(data.en_artist_name);
            setEnProductName(data.en_product_name);
            setEnLocation(data.en_location);
            setEnThumbnailUrl(data.en_thumbnail_url);
            
            setJaArtistName(data.ja_artist_name);
            setJaProductName(data.ja_product_name);
            setJaLocation(data.ja_location);
            setJaThumbnailUrl(data.ja_thumbnail_url);
        })
    }, [])
    console.log("date", date)
    if (date == null) {
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
                    <td>{koArtistName}</td>
                    <td>{enArtistName}</td>
                    <td>{jaArtistName}</td>
                </tr>
                <tr>
                    <td className="narrow">공연</td>
                    <td>{koProductName}</td>
                    <td>{enProductName}</td>
                    <td>{jaProductName}</td>
                </tr>
                <tr>
                    <td className="narrow">예매링크</td>
                    <td>{url}</td>
                    <td>{url}</td>
                    <td>{url}</td>
                </tr>
                <tr>
                    <td className="narrow">날짜</td>
                    <td>{date.year}-{date.month}-{date.date}</td>
                    <td>{date.year}-{date.month}-{date.date}</td>
                    <td>{date.year}-{date.month}-{date.date}</td>
                </tr>
                <tr>
                    <td className="narrow">장소</td>
                    <td>{koLocation}</td>
                    <td>{enLocation}</td>
                    <td>{jaLocation}</td>
                </tr>
                <tr>
                    <td className="narrow">썸네일</td>
                    <td>{koThumbnailUrl}</td>
                    <td>{enThumbnailUrl}</td>
                    <td>{jaThumbnailUrl}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default withProps;