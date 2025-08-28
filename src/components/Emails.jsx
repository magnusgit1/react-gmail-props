import Email from "./Email"

function Emails({filteredEmails, toggleRead, toggleStar}) {

    // Display all emails as an ul
    return (
        <>
        <ul>
          {filteredEmails.map((email, index) => (
            <Email key={index} email={email} index={index} toggleRead={toggleRead} toggleStar={toggleStar} />
          ))}
        </ul>
        </>
    )
}

export default Emails