import './write.css'

const Write = () => {
    return (
        <div className="write">
            <img src="./images/post1.jpg" alt="" className="writeImg" />
            <form action="" className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display: "none"}} />
                    <input type="text" placeholder="title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}

export default Write
