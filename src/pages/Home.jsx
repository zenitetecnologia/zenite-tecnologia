import React from 'react';

const Home = () => {
  return (
    <div 
      style={{
        position: 'absolute',
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0,
        backgroundColor: 'var(--zf-background-primary)', 
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: 'none' 
      }}
    >
      <img 
        src="/assets/logo-zenite.png" 
        alt="Zênite Tecnologia" 
        style={{ maxWidth: '600px', marginBottom: '1.5rem' }} 
      />
      <h2 style={{ color: '#fff', textAlign: 'center', padding: '0 1rem', fontWeight: '500' }}>
        Estamos em construção. Volte em breve para ver atualizações.
      </h2>
    </div>
  );
};

export default Home;