import React, { useState } from 'react';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Correo:', email);
    console.log('Contraseña:', password);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
 
      <header style={{ background: 'blue', color: 'white', padding: '10px 0', textAlign: 'center' }}>
        <h1>Mi Aplicación</h1>
      </header>


      <main style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ maxWidth: '400px', width: '100%', padding: '20px', background: '#fff', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <h2 style={{ textAlign: 'center' }}>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="email">Correo electrónico:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <div style={{ marginBottom: '10px' }}>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ width: '100%', padding: '8px', marginTop: '5px' }}
              />
            </div>
            <button
              type="submit"
              style={{
                padding: '10px 15px',
                background: 'blue',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                width: '100%', 
                marginTop: '10px', 
              }}
            >
              Iniciar Sesión
            </button>
          </form>
        </div>
      </main>

      <footer style={{ background: 'blue', color: 'white', padding: '10px 0', textAlign: 'center', position: 'fixed', width: '100%', bottom: '0' }}>
        <p>&copy; 2024 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;
