import { render, screen } from '@testing-library/react';
import App from '../components/App';

test('renders scaler text', () => {
  render(<App />);
  const linkElement = screen.getByText(/scaler/i);
  expect(linkElement).toBeInTheDocument();
});
