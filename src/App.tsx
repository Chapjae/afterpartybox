import React, { Suspense, lazy } from 'react';

const GltfViewer = lazy(() => import('./components/Box'));

export default function Home() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Suspense fallback={<div>Loading...</div>}>
        <GltfViewer url='/3dmodels/Box.glb' />
      </Suspense>
    </div>
  );
}
