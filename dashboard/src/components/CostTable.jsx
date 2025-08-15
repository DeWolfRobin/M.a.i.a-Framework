import { useState } from 'react'

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
    <div>
      <table className="cost-table">
        <thead>
          <tr>
            <th>Service</th>
            <th>Price (€)</th>
            <th>Subscribed</th>
          </tr>
        </thead>
        <tbody>
          {services.map((svc, idx) => (
            <tr key={svc.name}>
              <td>{svc.name}</td>
              <td>{svc.price}</td>
              <td style={{ textAlign: 'center' }}>
                <input
                  type="checkbox"
                  checked={selected[idx]}
                  onChange={() => toggle(idx)}
                  disabled={svc.disabled}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="total">Total monthly cost: €{total.toFixed(2)}</p>
      <p style={{ fontSize: '0.8em' }}>
        <sup>*</sup> Meta AI features for WhatsApp are currently free where
        available.
      </p>
    </div>
  )
}

export default CostTable
