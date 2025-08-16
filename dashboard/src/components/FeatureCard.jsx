import PropTypes from 'prop-types'
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
} from '@mui/material'

function FeatureCard({ title, description, actions }) {
  return (
    <Card
      variant="outlined"
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <CardContent>
        <Typography variant="h6" component="h2" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ mt: 'auto', flexWrap: 'wrap', gap: 1 }}>
        {actions.map(({ label, onClick }, idx) => (
          <Button
            key={idx}
            size="small"
            variant="contained"
            onClick={onClick}
          >
            {label}
          </Button>
        ))}
      </CardActions>
    </Card>
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
