
function Email({email, index, toggleRead, toggleStar, setChosenEmail, setIsClicked}) {

    const onEmailClicked = () => {
      setChosenEmail(email)
      setIsClicked(true)
    }

    // Display a single email
    return (
        <>
        <li key={index} className={`email ${email.read ? 'read' : 'unread'}`}>
            <div className="select">
            <input
                className="select-checkbox"
                type="checkbox"
                checked={email.read}
                onChange={() => toggleRead(email)}
            />
            </div>
            <div className="star">
            <input
                className="star-checkbox"
                type="checkbox"
                checked={email.starred}
                onChange={() => toggleStar(email)}
            />
            </div>
            <div className="sender" onClick={onEmailClicked}>{email.sender}</div>
            <div className="title" onClick={onEmailClicked}>{email.title}</div>
        </li>
        </>
    )
}

export default Email