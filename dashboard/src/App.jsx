import FeatureCard from './components/FeatureCard'
import CostTable from './components/CostTable'
import { AppBar, Toolbar, Typography, Container, Grid, Box } from '@mui/material'

function App() {
  const features = [
    {
      title: 'Email Assistant',
      description:
        'Use ChatGPT or a selected email assistant (e.g., SaneBox or Compose AI) to summarise, prioritise and draft replies to your ProtonMail messages.',
      actions: [
        {
          label: 'Summarise Inbox',
          onClick: () => alert('Requesting ChatGPT summarisation...'),
        },
        {
          label: 'Draft Reply',
          onClick: () => alert('Drafting reply using ChatGPT...'),
        },
      ],
    },
    {
      title: 'Messaging',
      description:
        'Integrate WhatsApp with Meta AI to summarise unread messages and help craft replies. Use ChatGPT for drafting messages in other platforms.',
      actions: [
        {
          label: 'Summarise WhatsApp',
          onClick: () => alert('Summarising WhatsApp messages via Meta AI...'),
        },
        {
          label: 'Draft Message',
          onClick: () => alert('ChatGPT is drafting your message...'),
        },
      ],
    },
    {
      title: 'Groceries & To‑Do',
      description:
        'Set up weekly grocery orders using ChatGPT Agent Mode and track tasks like bill payments, travel planning or shopping.',
      actions: [
        {
          label: 'Plan Groceries',
          onClick: () => alert('ChatGPT is planning your grocery order...'),
        },
        {
          label: 'View Tasks',
          onClick: () => alert('Displaying task list...'),
        },
      ],
    },
    {
      title: 'Call Screening & Appointments',
      description:
        'Use built‑in smartphone call screening or an AI receptionist to handle calls, schedule meetings and send summaries.',
      actions: [
        {
          label: 'Screen Calls',
          onClick: () => alert('Starting call screening...'),
        },
        {
          label: 'Schedule Appointment',
          onClick: () =>
            alert('Scheduling appointment via AI assistant...'),
        },
      ],
    },
    {
      title: 'Calendar & Scheduling',
      description:
        'Check upcoming Google Calendar events, create new events, and schedule meetings using ChatGPT and your Google Calendar connector.',
      actions: [
        {
          label: 'View Upcoming Events',
          onClick: async () => {
            // Example: call the Google Calendar connector to fetch events
            // const result = await callGoogleCalendar({ time_min: new Date().toISOString(), max_results: 5 });
            // display result in your UI
            alert('Fetching your next events…');
          },
        },
        {
          label: 'Add Event',
          onClick: () => {
            // You could open a form or call a function to create a new event
            alert('Opening event creation dialog...');
          },
        },
      ],
    },
    {
      title: 'Cost Monitoring',
      description:
        'Track monthly expenses for AI and subscription services, and adjust your subscriptions as needed.',
      actions: [
        {
          label: 'View Cost Summary',
          onClick: () => {
            // Display or calculate the total cost from selected services
            alert('Here’s your current monthly AI spend...');
          },
        },
        {
          label: 'Adjust Subscriptions',
          onClick: () => {
            // Allow the user to enable/disable services and update cost totals
            alert('Launching subscription settings…');
          },
        },
      ],
    },
    {
      title: 'Daily Briefing',
      description:
        'Get a daily summary of upcoming tasks, events, important emails, and top news curated by ChatGPT.',
      actions: [
        {
          label: 'Get Today’s Briefing',
          onClick: () => {
            // This could run a function that pulls information from your  calendar, emails, and news feeds
            alert('Generating today’s briefing…');
          },
        },
      ],
    },
  ]

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1">
            AI Personal Assistant Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ my: 4 }}>
        <Grid container spacing={3}>
          {features.map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature.title}>
              <FeatureCard {...feature} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ my: 4 }}>
        <Typography variant="h5" gutterBottom>
          Cost Monitoring
        </Typography>
        <Typography variant="body1">
          Select the services you subscribe to and see the estimated monthly cost:
        </Typography>
        <Box sx={{ mt: 2 }}>
          <CostTable />
        </Box>
      </Container>
    </>
  )
}

export default App
