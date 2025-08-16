import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import FeatureCard from '../FeatureCard'
import '@testing-library/jest-dom/vitest'

describe('FeatureCard', () => {
  it('renders title and triggers actions', async () => {
    const onClick = vi.fn()
    render(
      <FeatureCard
        title="Test"
        description="Desc"
        actions={[{ label: 'Action', onClick }]}
      />
    )

    // Title and button should be in the document
    expect(screen.getByText('Test')).toBeInTheDocument()
    const button = screen.getByRole('button', { name: 'Action' })
    await userEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
