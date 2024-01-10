'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useEffect, useState } from 'react';
import { ShapePath } from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

import Dropzone from '@/app/components/Dropzone';
import InflatedSVG from '@/app/components/InflatedSVG';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

export default function HomePage() {
  const [isClient, setIsClient] = useState(false);
  const [paths, setPaths] = useState<ShapePath[]>([]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // TODO or return a loading spinner, placeholder, etc.
  }

  const onLoad = (svg: string) => {
    const loader = new SVGLoader();
    const svgData = loader.parse(svg);
    setPaths(svgData.paths);
  };

  return (
    <main>
      <section className='bg-white'>
        <div className='layout relative flex h-96 min-h-screen flex-col items-center justify-center py-12 text-center'>
          <h1>svg2rock</h1>
          <Canvas>
            <pointLight
              intensity={100}
              position={[-5, 10, 2]}
              color='#fedded'
            />
            <OrbitControls />
            <InflatedSVG paths={paths} />
          </Canvas>
          <Dropzone onLoad={onLoad} />
          {/* TODO install THREEJS */}
          {/* TODO load SVG with SVGLoader in THREEJS */}
        </div>
      </section>
    </main>
  );
}
