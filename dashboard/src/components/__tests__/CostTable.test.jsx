import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import CostTable from '../CostTable'
import '@testing-library/jest-dom/vitest'

describe('CostTable', () => {
  it('updates total when services are toggled', async () => {
    render(<CostTable />)

    // Initially total should be 0
    expect(screen.getByText(/Total monthly cost: €0.00/)).toBeInTheDocument()

    const checkboxes = screen.getAllByRole('checkbox')
    // Toggle first checkbox (ChatGPT Plus - 20€)
    await userEvent.click(checkboxes[0])

    expect(screen.getByText(/Total monthly cost: €20.00/)).toBeInTheDocument()
  })
})
