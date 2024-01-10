import { RoundedBox } from '@react-three/drei';

export const Box = () => (
  <RoundedBox
    args={[1, 1, 1]}
    radius={0.05}
    smoothness={4}
    bevelSegments={4}
    creaseAngle={0.4}
  >
    <meshPhongMaterial color='#f3f3f3' wireframe />
  </RoundedBox>
);
