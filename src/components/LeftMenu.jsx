
function LeftMenu({currentTab, setCurrentTab, unreadEmails, starredEmails, hideRead, setHideRead, setIsClicked}){
    return (
        <>
        <ul className="inbox-list">
          <li
            className={`item ${currentTab === 'inbox' ? 'active' : ''}`}
            onClick={() => {
                setCurrentTab('inbox');
                setIsClicked(false);
            }}
          >
            <span className="label">Inbox</span>
            <span className="count">{unreadEmails.length}</span>
          </li>
          <li
            className={`item ${currentTab === 'starred' ? 'active' : ''}`}
            onClick={() => {
                setCurrentTab('starred');
                setIsClicked(false);
            }}
          >
            <span className="label">Starred</span>
            <span className="count">{starredEmails.length}</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={hideRead}
              onChange={e => setHideRead(e.target.checked)}
            />
          </li>
        </ul>
        </>
    )
}

export default LeftMenu