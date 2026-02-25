// Configuración de la API
// Si hay una variable de entorno, úsala; si no, detecta automáticamente
// En producción (Docker/build), usa URL relativa. En desarrollo, usa localhost
let baseURL = '/api'; // Por defecto, URL relativa (funciona en producción)

if (import.meta.env.VITE_API_URL) {
  // Si hay una variable de entorno configurada, úsala
  baseURL = import.meta.env.VITE_API_URL;
} else if (import.meta.env.DEV || (typeof window !== 'undefined' && (window.location.hostname === 'localhost' || window.location.hostname.includes('tunnelmole.net')))) {
  // En desarrollo local o vía túnel usa la URL de Tunnelmole para el backend
  baseURL = 'https://pju6kl-ip-200-50-235-224.tunnelmole.net/api';
}

export const API_BASE_URL = baseURL;
export const API_TIMEOUT = 30000; // 30 seconds for slow Render API

