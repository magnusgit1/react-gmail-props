import Email from "./Email"

function Emails({filteredEmails, toggleRead, toggleStar, setChosenEmail, setIsClicked}) {

    // Display all emails as an ul
    return (
        <>
        <ul>
          {filteredEmails.map((email, index) => (
            <Email key={index} email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} setChosenEmail={setChosenEmail} setIsClicked={setIsClicked} />
          ))}
        </ul>
        </>
    )
}

export default Emails