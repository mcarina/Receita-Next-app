'use client';
import React, { useState } from 'react';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwicm9sZSI6IkFkbWluaXN0cmFkb3IiLCJpYXQiOjE3Mzg3NjUwMDEsImV4cCI6MTczODc2ODYwMX0.0BJCGtjbPJ8i1PCamVVRrjYQZfWgojfEvqvVOYuKiRA';

function SeePdf() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleOpenPdf() {
    setLoading(true);
    setError(null);

    try {
        console.log('Iniciando requisição para obter a URL do PDF...');
  
        const fileId = '5d464b1a-18ab-414f-a582-bf74bef016be';
        const apiUrl = `http://localhost:3000/api/arquivo-pdf/view-pdf/${fileId}`;
    
        const response = await fetch(apiUrl, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // Envia o token no cabeçalho
            'Accept': 'application/json'
          }
        });
  
        if (!response.ok) {
          throw new Error(`Erro ao buscar o PDF: ${response.statusText}`);
        }
  
        // Obtém a URL final do redirecionamento
        const finalUrl = response.url;
        console.log('URL final do PDF:', finalUrl);
  
        // Criar um link temporário e simular um clique nele
        const link = document.createElement('a');
        link.href = finalUrl;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
      } catch (error) {
        console.error('Erro ao abrir o PDF:', error);
        setError('Erro ao abrir o PDF.');
      } finally {
        setLoading(false);
      }
    }
  
  

  return (
    <div>
      <h2>Visualizador de PDF</h2>
      {error && <p style={{ color: 'red' }}>Erro: {error}</p>}
      <button onClick={handleOpenPdf} disabled={loading}>
        {loading ? 'Carregando...' : 'Abrir PDF'}
      </button>
    </div>
  );
}

export default SeePdf;
