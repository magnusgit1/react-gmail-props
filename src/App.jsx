import { useState } from 'react'
import './styles/App.css'
import Emails from './components/Emails'
import initialEmails from './data/emails'
import Header from './components/Header'
import LeftMenu from './components/LeftMenu'

function App() {

  const [emails, setEmails] = useState(initialEmails)

  let filteredEmails = emails

  const toggleStar = targetEmail => {
        const updatedEmails = emails =>
        emails.map(email =>
            email.id === targetEmail.id
            ? { ...email, starred: !email.starred }
            : email
        )
        setEmails(updatedEmails)
    }

    const toggleRead = targetEmail => {
    const updatedEmails = emails =>
      emails.map(email =>
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

  return (
    <div className="app">
      <header className="header">
        <Header/>
      </header>
      <nav className="left-menu">
        <LeftMenu currentTab={currentTab} setCurrentTab={setCurrentTab} unreadEmails={unreadEmails} starredEmails={starredEmails} hideRead={hideRead} setHideRead={setHideRead} />
      </nav>
      <main className="emails">
        <Emails filteredEmails={filteredEmails} toggleRead={toggleRead} toggleStar={toggleStar}/>
      </main>
    </div>
  )
}

export default App
