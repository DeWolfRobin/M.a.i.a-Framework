import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  Typography,
} from '@mui/material'

const services = [
  { name: 'ChatGPT Plus (Agent Mode)', price: 20 },
  { name: 'SaneBox or Compose AI', price: 10 },
  { name: 'Call Assistant AI', price: 7 },
  { name: 'Goodcall / Rosie / Allô', price: 50 },
  { name: 'Meta AI (WhatsApp)', price: 0, defaultChecked: true, disabled: true },
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
            <TableCell align="center">Subscribed</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services.map((svc, idx) => (
            <TableRow key={svc.name}>
              <TableCell>{svc.name}</TableCell>
              <TableCell>{svc.price}</TableCell>
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
      </Table>
      <Typography variant="subtitle1" align="right" sx={{ m: 2 }}>
        Total monthly cost: €{total.toFixed(2)}
      </Typography>
      <Typography variant="caption" sx={{ ml: 2, display: 'block' }}>
        <sup>*</sup> Meta AI features for WhatsApp are currently free where
        available.
      </Typography>
    </TableContainer>
  )
}

export default CostTable
