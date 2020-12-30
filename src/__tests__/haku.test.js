import { render, screen } from '@testing-library/react';
import Haku from '../Haku';

test('defaulttivalue', () => {
  render(<Haku />);
  let input = screen.getByDisplayValue("10"); // Defaultti 10
  expect(input).toBeInTheDocument();
  
});

test('minimivalue', () => {
    render(<Haku />);

  });

