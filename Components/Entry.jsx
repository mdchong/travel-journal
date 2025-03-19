export default function Entry(props) {
    return (
        <main>
            <section className="card">
                <div className="left-content">
                    <img 
                        src={props.img.src} 
                        alt={props.img.alt} />
                </div>

                <div className="right-content">
                    <div className="upper-content">
                        <img src="./images/marker.png" alt=""/>
                        <p className="location">{props.country}</p>
                        <a href={props.googleMapsLink} className="google-maps">View on Google Maps</a>
                    </div>

                    <h2 class="area">{props.title}</h2>

                    <p className="date">{props.date}</p>

                    <p className="description">
                        {props.text}
                    </p>
                </div>
            </section>
        </main>
    )
}