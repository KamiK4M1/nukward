export default function ImageGallery() {
    return(
        <div className="grid md:grid-cols-3 justify-center gap-4 mt-1">
            <div className="card card-compact">
                <figure>
                    <img src="" alt='pic'/>
                </figure>
                <div className="card-body">
                    <h2 className="card-title">picc</h2>
                    <p>Something</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Detail</button>
                    </div>
                </div>
            </div>
        </div>
    )
}