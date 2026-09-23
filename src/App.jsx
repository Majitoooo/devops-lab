import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="env-banner">
        Ambiente actual: <strong>__ENV_PLACEHOLDER__</strong>
      </div>

      <header className="hero-header">
        <div className="hero-logos">
          <img src={reactLogo} className="logo-small" alt="React logo" />
          <img src={viteLogo} className="logo-small" alt="Vite logo" />
        </div>
        <h1>Laboratorio DevOps</h1>
        <p className="subtitle">
          Pipeline con Azure DevOps — React + Vite
        </p>
      </header>

      <main className="content">
        <section className="card">
          <img src={heroImg} className="hero-img" alt="" />
          <h2>Ciclo CI/CD completo</h2>
          <p>
            Esta aplicación se construye una sola vez y se promueve a través
            de tres ambientes: <strong>DEV</strong>, <strong>QA</strong> y{' '}
            <strong>PDN</strong>, sin recompilar en ningún paso intermedio.
          </p>
        </section>

        <section className="pipeline-steps">
          <div className="step">
            <span className="step-number">1</span>
            <h3>Integración Continua</h3>
            <p>Instalación, pruebas con Vitest y build del artefacto.</p>
          </div>
          <div className="step">
            <span className="step-number">2</span>
            <h3>Despliegue DEV / QA</h3>
            <p>El mismo artefacto se promueve automáticamente.</p>
          </div>
          <div className="step">
            <span className="step-number">3</span>
            <h3>Aprobación PDN</h3>
            <p>Control manual antes de llegar a producción.</p>
          </div>
        </section>

        <section className="card counter-card">
          <h3>Prueba de interactividad</h3>
          <p>Estado local con React (useState), validado por pruebas unitarias.</p>
          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Contador: {count}
          </button>
        </section>
      </main>

      <footer className="footer">
        <p>
          Construido con{' '}
          <a href="https://react.dev/" target="_blank" rel="noreferrer">React</a>
          {' '}y{' '}
          <a href="https://vite.dev/" target="_blank" rel="noreferrer">Vite</a>
        </p>
      </footer>
    </>
  )
}

export default App