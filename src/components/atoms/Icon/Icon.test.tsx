import { faAmbulance } from "@fortawesome/free-solid-svg-icons";
import { render, screen, within } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from "vitest";
import Icon from "./Icon";

describe('Icon', () => {
  it('should render the right icon', () => {
    render(<Icon label="test" icon={faAmbulance} />)
    const sut = screen.getByLabelText('icon').firstElementChild
    expect(sut?.getAttribute('data-icon')).toBe('truck-medical')
  })
  
  it('should have the accessible text', () => {
    const accessibleTest = 'Ambulance Icon'
    render(<Icon label={accessibleTest} icon={faAmbulance} />)
    const sut = within(screen.getByLabelText('icon')).getByText(accessibleTest)
    expect(sut?.textContent).toBe(accessibleTest)
  })
  
  it('should receive a new role if clickable', async () => {
    const user = userEvent.setup()
    const content = 'content'
    let result = null
    
    render(
      <Icon
        label="test"
        icon={faAmbulance}
        onClick={() => result = content}
      />
    )

    const sut = screen.getByLabelText('icon').firstElementChild
    await user.click(sut!)
    expect(result).toBe(content)
  })
})