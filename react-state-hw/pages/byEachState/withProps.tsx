import React, {useState, useEffect} from "react";
import ThreeLangTableEachState from "../../ts-components/ThreeLangTableEachState";

function withProps() {
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
    if (date == null) {
        return null
    }
    return (
        <ThreeLangTableEachState
        koArtistName={koArtistName}
        enArtistName={enArtistName}
        jaArtistName={jaArtistName}
        koProductName={koProductName}
        enProductName={enProductName}
        jaProductName={jaProductName}
        koLocation={koLocation}
        enLocation={enLocation}
        jaLocation={jaLocation}
        koThumbnailUrl={koThumbnailUrl}
        enThukoThumbnailUrl={enThumbnailUrl}
        jaThumbnailUrl={jaThumbnailUrl}
        date={date}
        url={url}
        />
    )
}

export default withProps;