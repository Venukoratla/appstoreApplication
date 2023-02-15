// Write your code here
const AppItem = props => {
  const {appDetails} = props
  const {appId, appName, imageUrl, category} = appDetails
  return (
    <li>
      <img src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}

export default AppItem
