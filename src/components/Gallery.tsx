import "./Gallery.css";

export default function Gallery(){
    const profile01 = "/imgs/profile01.jpg"
    const profile02 = "/imgs/profile02.jpg"
    const profile03 = "/imgs/profile03.jpg"
    const profile04 = "/imgs/profile04.jpg"
    const profile05 = "/imgs/profile05.jpg"
    const profile06 = "/imgs/profile06.jpg"

    return (
        <div className="gallery_wrap">
            <div> <img src={profile01} /> </div>
            <div> <img src={profile02} /> </div>
            <div> <img src={profile03} /> </div>
            <div> <img src={profile04} /> </div>
            <div> <img src={profile05} /> </div>
            <div> <img src={profile06} /> </div>
        </div>
    )
}