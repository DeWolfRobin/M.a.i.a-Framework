import FeatureCard from './components/FeatureCard'
import CostTable from './components/CostTable'
import './App.css'

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
  ]

  return (
    <>
      <header>
        <h1>AI Personal Assistant Dashboard</h1>
      </header>
      <section>
        <div className="grid">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </section>
      <section>
        <h2>Cost Monitoring</h2>
        <p>Select the services you subscribe to and see the estimated monthly cost:</p>
        <CostTable />
      </section>
    </>
  )
}

export default App
