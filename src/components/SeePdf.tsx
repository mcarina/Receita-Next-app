'use client'
import React, { useEffect, useState } from 'react';

function SeePdf() {
  const [pdfUrl, setPdfUrl] = useState(null);

  useEffect(() => {
    async function fetchPdfUrl() {
      try {
        // Simulando uma requisição assíncrona com um setTimeout
        setTimeout(() => {
        //   const mockPdfUrl = 'https://cdn.cebraspe.org.br/concursos/ibama_25/arquivos/ED_1_IBAMA_24_ABERTURA.PDF';
          const mockPdfUrl = '/model.pdf';
          setPdfUrl(mockPdfUrl);
        }, 1000); // Simula um delay de 1 segundo
      } catch (error) {
        console.error('Erro ao buscar URL do PDF:', error);
      }
    }

    fetchPdfUrl();
  }, []);

  const handleOpenPdf = () => {
    if (pdfUrl) {
      window.open(pdfUrl, '_blank'); // Abre o PDF em uma nova aba
    }
  };

  return (
    <div>
      {pdfUrl ? (
        <button
          onClick={handleOpenPdf}
          style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Abrir PDF em Nova Aba
        </button>
      ) : (
        <p>Carregando PDF...</p>
      )}
    </div>
  );
}

export default SeePdf;