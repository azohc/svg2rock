import { Fragment } from 'react';
import { ExtrudeGeometry, ExtrudeGeometryOptions, ShapePath } from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

const egOpts: ExtrudeGeometryOptions = {
  depth: 50,
  bevelEnabled: false,
};

export default function InflatedSVG({ paths }: { paths: ShapePath[] }) {
  return (
    <group scale={0.02} position={[-25, 0, 0]}>
      {paths.map((path, i) =>
        SVGLoader.createShapes(path).map((shape, j) => (
          <Fragment key={`frag-${i}${j}`}>
            <mesh key={`mesh-${i}${j}`} scale-y={-1}>
              <extrudeGeometry args={[shape, egOpts]} />
              <meshBasicMaterial color='#F3FBFB' />
            </mesh>
            <lineSegments key={`line-${i}${j}`} scale-y={-1}>
              <edgesGeometry args={[new ExtrudeGeometry(shape, egOpts)]} />
              <lineBasicMaterial color='#00A5E6' />
            </lineSegments>
          </Fragment>
        ))
      )}
    </group>
  );
}
