export default function Entry() {
    return (
        <main>
            <section className="card">
                <div className="left-content">
                    <img src="https://scrimba.com/links/travel-journal-japan-image-url" alt="" />
                </div>

                <div className="right-content">
                    <div className="upper-content">
                        <img src="./images/marker.png" alt=""/>
                        <p className="location">Japan</p>
                        <a href="#" className="google-maps">View on Google Maps</a>
                    </div>

                    <h2 class="area">Mount Fuji</h2>

                    <p className="date">12 Jan, 2023–24 Jan, 2023</p>

                    <p className="description">
                        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
                    </p>
                </div>
            </section>
        </main>
    )
}