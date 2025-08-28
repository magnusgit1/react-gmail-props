import { useState } from 'react'
import './styles/App.css'
import Emails from './components/Emails'
import initialEmails from './data/emails'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'
import DisplayEmail from './components/DisplayEmail'

function App() {

    const [emails, setEmails] = useState(initialEmails)

    const [chosenEmail, setChosenEmail] = useState(null)
    const [isClicked, setIsClicked] = useState(false)

    const [input, setInput] = useState("")

    let filteredEmails = emails

    const toggleStar = targetEmail => {
          const updatedEmails = emails.map(email =>
              email.id === targetEmail.id
              ? { ...email, starred: !email.starred }
              : email
          )
          setEmails(updatedEmails)
      }

    const toggleRead = targetEmail => {
    const updatedEmails = emails.map(email =>
        email.id === targetEmail.id ? { ...email, read: !email.read } : email
      )
        setEmails(updatedEmails)
    }

  
    const [currentTab, setCurrentTab] = useState('inbox')
    const [hideRead, setHideRead] = useState(false)

    const getReadEmails = emails => emails.filter(email => !email.read)
    const getStarredEmails = emails => emails.filter(email => email.starred)
    const unreadEmails = emails.filter(email => !email.read)
    const starredEmails = emails.filter(email => email.starred)

    if (currentTab === 'starred')
      filteredEmails = getStarredEmails(filteredEmails)
      
    if (hideRead) filteredEmails = getReadEmails(filteredEmails)
    
    if (input !== "") filteredEmails = emails.filter(email => email.text.toLowerCase().includes(input.toLowerCase()) || email.title.toLowerCase().includes(input.toLowerCase()) || email.sender.toLowerCase().includes(input.toLowerCase()))

    
    if (isClicked) {
      return (
      <div className="app">
        <header className="header">
          <Header input={input} setInput={setInput}/>
        </header>
        <nav className="left-menu">
          <LeftMenu currentTab={currentTab} setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} hideRead={hideRead} setHideRead={setHideRead} setChosenEmail={setChosenEmail} setIsClicked={setIsClicked} />
        </nav>
        <main className="emails">
          <DisplayEmail emailText={chosenEmail.text} setIsClicked={setIsClicked} emailSender={chosenEmail.sender}/>
        </main>
          
      </div>
    )} else {
      return (
      <div className="app">
        <header className="header">
          <Header input={input} setInput={setInput}/>
        </header>
        <nav className="left-menu">
          <LeftMenu currentTab={currentTab} setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} hideRead={hideRead} setHideRead={setHideRead} setIsClicked={setIsClicked} />
        </nav>
          <main className="emails">
            <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar} setChosenEmail={setChosenEmail} setIsClicked={setIsClicked} />
          </main>
      </div>
    )}
}

export default App
