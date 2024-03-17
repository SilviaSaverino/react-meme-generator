export default function Meme() {
    return (
        <main>
            <form action="">
                <div className="form-inputs">
                    <label>Top text:</label>
                    <input
                        type="text"
                        placeholder="Text here" />
                </div>
                <div className="form-inputs">
                    <label>Bottom text:</label>
                    <input
                        type="text"
                        placeholder="Text here" />
                </div>
                <button className="form-btn">Get a new meme</button>
            </form>
        </main>
    )
}
