function Header() {
  const manejarInicio = () => {
    alert('¡Bienvenido a Zolver!\n\nHas ingresado en modo Administrador local. Desde aquí puedes gestionar el directorio de especialistas.');
  };

  return (
    <header className="app-header">
      <div className="brand-block">
        <h1 className="brand-title">
          Zolver<span className="accent-dot">.</span>
        </h1>
        <p className="brand-subtitle">El marketplace de oficios de confianza</p>
      </div>
      <nav className="header-nav">
        <span className="status-badge">Modo administrador</span>
        <button className="secondary-button" onClick={manejarInicio}>
          Iniciar Sesión
        </button>
      </nav>
    </header>
  );
}

export default Header;