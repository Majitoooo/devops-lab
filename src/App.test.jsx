import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App', () => {
  it('muestra el banner de ambiente', () => {
    render(<App />)
    expect(screen.getByText(/Ambiente actual/i)).toBeTruthy()
  })

  it('muestra el título del laboratorio', () => {
    render(<App />)
    expect(screen.getByText('Laboratorio DevOps')).toBeTruthy()
  })

  it('incrementa el contador al hacer clic en el botón', () => {
    render(<App />)
    const boton = screen.getByRole('button', { name: /Contador: 0/i })
    fireEvent.click(boton)
    expect(screen.getByRole('button', { name: /Contador: 1/i })).toBeTruthy()
  })
})