// Write your code here
const TabItem = props => {
  const {tabsList, changeId} = props
  const {tabId, displayText} = tabsList
  const clickedCategory = () => {
    changeId(tabId)
  }

  return (
    <li key={tabId}>
      <button type="button" onClick={clickedCategory}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
