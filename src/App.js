import './App.css';
import styled from 'styled-components';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components/earth';

const CanvasContainer = styled.div`
  width: 100%;
  height: 110%;
`

function App() {
  return (
    <CanvasContainer >
      <Canvas>
        <Suspense fallback={null}>
          <Earth />
        </Suspense>
      </Canvas>
    </CanvasContainer>
  );
}

export default App;
