import './index.css'
const TeamMemberCard = props => {
  const {each} = props
  const {name, role, imageUrl, department} = each
  return (
    <li className="member-card">
      <img src={imageUrl} alt={name} className="member-img" />
      <div>
        <h1 className="member-name">{name}</h1>
        <p className="member-role">{role}</p>
        <p className="member-department">Department: {department}</p>
      </div>
    </li>
  )
}
export default TeamMemberCard
