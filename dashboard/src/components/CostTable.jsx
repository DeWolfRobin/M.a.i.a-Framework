import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableFooter,
  Paper,
  Checkbox,
  Typography,
} from '@mui/material'

const services = [
  {
    name: 'ChatGPT Plus (Agent Mode)',
    price: 20,
    usedFor: [
      'Email Assistant',
      'Messaging',
      'Groceries & To‑Do',
      'Calendar & Scheduling',
      'Cost Monitoring',
      'Daily Briefing',
    ],
  },
  {
    name: 'SaneBox or Compose AI',
    price: 10,
    usedFor: ['Email Assistant'],
  },
  {
    name: 'Call Assistant AI',
    price: 7,
    usedFor: ['Call Screening & Appointments'],
  },
  {
    name: 'Goodcall / Rosie / Allô',
    price: 50,
    usedFor: ['Call Screening & Appointments'],
  },
  {
    name: 'Meta AI (WhatsApp)',
    price: 0,
    defaultChecked: true,
    disabled: true,
    usedFor: ['Messaging'],
  },
]

function CostTable() {
  const [selected, setSelected] = useState(
    services.map((s) => s.defaultChecked || false)
  )

  const toggle = (idx) => {
    setSelected((prev) => {
      const updated = [...prev]
      updated[idx] = !updated[idx]
      return updated
    })
  }

  const total = services.reduce(
    (sum, svc, idx) => sum + (selected[idx] ? svc.price : 0),
    0
  )

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Service</TableCell>
            <TableCell>Price (€)</TableCell>
            <TableCell>Used For</TableCell>
            <TableCell align="center">Subscribed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((svc, idx) => (
            <TableRow key={svc.name}>
              <TableCell>{svc.name}</TableCell>
              <TableCell>
                {svc.price.toLocaleString('en-IE', {
                  style: 'currency',
                  currency: 'EUR',
                })}
              </TableCell>
              <TableCell>{svc.usedFor.join(', ')}</TableCell>
              <TableCell align="center">
                <Checkbox
                  checked={selected[idx]}
                  onChange={() => toggle(idx)}
                  disabled={svc.disabled}
                  size="small"
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3} align="right">
              Total monthly cost:
            </TableCell>
            <TableCell align="center">
              {total.toLocaleString('en-IE', {
                style: 'currency',
                currency: 'EUR',
              })}
            </TableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <Typography variant="caption" sx={{ ml: 2, mt: 1, display: 'block' }}>
        <sup>*</sup> Meta AI features for WhatsApp are currently free where
        available.
      </Typography>
    </TableContainer>
  )
}

export default CostTable
