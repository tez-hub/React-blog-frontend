import './settings.css'
import Sidebar from "../../components/sidebar/Sidebar"

const Settings = () => {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="./images/logo.jpeg" alt="" />
                        <label htmlFor="file">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Tez" />
                    <label>Email</label>
                    <input type="email" placeholder="tez@mail.com" />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

export default Settings
