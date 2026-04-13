/**
 * CE.SDK Mobile UI Starterkit - Entry Point
 *
 * A fully customizable mobile-responsive UI for CE.SDK built with React.
 * Demonstrates how to build a complete custom editor interface from scratch.
 *
 * @see https://img.ly/docs/cesdk/js/getting-started/
 */

import { createRoot } from 'react-dom/client';
import type CreativeEngine from '@cesdk/engine';

import App from './app/App';

// ============================================================================
// Configuration
// ============================================================================

// Engine configuration (see https://img.ly/docs/cesdk/engine/api/configuration/)
const engineConfig = {
  // License key (required for production)
  // license: 'YOUR_LICENSE_KEY',

  // Base URL for CE.SDK assets (for self-hosted deployments)
  // baseURL: '/assets/',

  // Feature flags
  featureFlags: {
    preventScrolling: true
  }
};

// ============================================================================
// Application Bootstrap
// ============================================================================

async function main(): Promise<void> {
  // Render application
  const container = document.getElementById('root');
  if (container == null) {
    throw new Error('Root container not found');
  }

  createRoot(container).render(<App engineConfig={engineConfig} />);
}

// Initialize application
main().catch((error) => {
  // eslint-disable-next-line no-console
  console.error('Failed to initialize application:', error);
});

// Debug access in development (optional)
declare global {
  interface Window {
    engine?: CreativeEngine;
  }
}
