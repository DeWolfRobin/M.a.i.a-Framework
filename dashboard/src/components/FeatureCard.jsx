import PropTypes from 'prop-types'

function FeatureCard({ title, description, actions }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {actions.map(({ label, onClick }, idx) => (
        <button key={idx} onClick={onClick}>{label}</button>
      ))}
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func.isRequired,
    })
  ).isRequired,
}

export default FeatureCard
