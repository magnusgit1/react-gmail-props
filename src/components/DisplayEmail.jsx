import BackNav from "./backNav"

function DisplayEmail({emailText, setIsClicked}){
    return (
        <>
        <div className="back_nav_button">
            <BackNav setIsClicked={setIsClicked}/>
        </div>
        <div className="email_display">
            <p>{emailText}</p>
        </div>
        </>
    )
}

export default DisplayEmail