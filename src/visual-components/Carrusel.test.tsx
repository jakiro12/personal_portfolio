import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import CarruselOfCurrentProjects from './Carrusel';

describe('CarruselOfCurrentProjects', () => {
  it('debe mostrar el título del primer proyecto al iniciar', () => {
    render(<CarruselOfCurrentProjects />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Listador de tareas para tableros personales de Trello'
    );
  });

  it('cambia al siguiente proyecto al hacer clic en el botón "next"', () => {
    render(<CarruselOfCurrentProjects />);

    const buttons = screen.getAllByRole('button');
    const nextButton = buttons.find(btn => btn.dataset.carouselButton === 'next');
    fireEvent.click(nextButton!);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Invitacion animada para eventos'
    );
  });

  it('cambia al proyecto anterior desde el primero (va al último)', () => {
    render(<CarruselOfCurrentProjects />);

    const buttons = screen.getAllByRole('button');
    const prevButton = buttons.find(btn => btn.dataset.carouselButton === 'prev');
    fireEvent.click(prevButton!);

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'Bancoppel MVP'
    );
  });
});
