import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function EarthModel() {
  const earth = useGLTF('/models/a_windy_day.glb' );
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive object={earth.scene} scale={1.2} position-y={-1} />
    </Float>
  );
}

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-gray-900 to-black">
      <Canvas camera={{ position: [0, 0, 2], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <EarthModel />
        <OrbitControls enableZoom={ false } />
      </Canvas>

      <div className="absolute top-1/3 left-10 text-white z-10">
        <motion.h1
          initial={{ y: -50, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          transition= {{ duration: 1, ease: "easeOut" }}
          className="text-5xl font-bold"
          >
            Hey, I'm <span className="text-cyan-400">Aman Khan</span>
            <br />
            A Full Stack Developer
          <span className="text-cyan-400">.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-xl text-gray-300 max-w-xl"
            >
            A passionate Full Stack Developer with a knack for creating dynamic and responsive web applications. I love turning ideas into reality through code. 
            Let's build something amazing together!
          </motion.p>
      </div>
    </div>
  )
  }