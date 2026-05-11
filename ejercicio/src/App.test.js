import { render, screen } from '@testing-library/react';
import App from './App';

test('muestra el resultado de la multiplicación', () => {
  render(<App />);
  const resultElement = screen.getByText(/6/);
  expect(resultElement).toBeInTheDocument();
});
