import BackNav from "./backNav"

function DisplayEmail({emailText, emailSender, setIsClicked}){
    return (
        <>
        <div className="back_nav_button" style={{ paddingLeft:25, paddingTop:25 }}>
            <BackNav setIsClicked={setIsClicked}/>
        </div>
        <div className="email_display">
            <p style={{ padding:25 }}>From: {emailSender}</p>
            <p style={{ whiteSpace: "pre-line", padding:25 }}>{emailText}</p>
        </div>
        </>
    )
}

export default DisplayEmail