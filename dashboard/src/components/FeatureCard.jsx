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
        borderRadius: 2,
        boxShadow: 1,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 3,
        },
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
      <CardActions
        sx={{
          mt: 'auto',
          flexWrap: 'wrap',
          gap: 1,
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        {actions.map(({ label, onClick }, idx) => (
          <Button
            key={idx}
            size="small"
            variant="contained"
            onClick={onClick}
            sx={{ width: { xs: '100%', sm: 'auto' } }}
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
