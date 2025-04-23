import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef, useEffect, useState } from 'react';

export default function Model(props) {

  const gltf = useGLTF('models/scene.gltf')

  const skullRef = useRef()

  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  useFrame(() => {
    if (skullRef.current) {
      skullRef.current.rotation.y = scrollY * 0.005
    }
  })

  return (
    // <group scale={[800, 800, 800]}>
      <primitive ref={skullRef} object={gltf.scene} />
    // </group>

  )

}

useGLTF.preload('models/scene.gltf')
