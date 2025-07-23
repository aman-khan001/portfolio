import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Html, useGLTF, Environment } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";

// 3D Earth Model
function EarthModel() {
  const { scene } = useGLTF("/models/a_windy_day_opt.glb");
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <primitive object={scene} scale={1.1} position-y={-1} />
    </Float>
  );
}

// Scroll Indicator
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ y: [0, 10, 0], opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute bottom-6 right-8 z-20 text-cyan-400 text-xl"
    >
      ↓ Scroll
    </motion.div>
  );
}

// Hero Section
export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      {/* 3D Canvas */}
      <Canvas
        gl={{ powerPreference: "high-performance", antialias: true }}
        camera={{ position: [0, 0, 2], fov: 50 }}
      >
        <Suspense fallback={<Html center><span className="text-white">Loading...</span></Html>}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Environment preset="city" />
          <EarthModel />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>

      {/* Animated Text Overlay */}
      <div className="absolute top-[30%] left-10 z-10 text-white max-w-2xl px-4">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold leading-tight"
        >
          Hey, I'm <span className="text-cyan-400">Aman Khan</span>
          <br />
          A Full Stack Developer<span className="text-cyan-400">.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-5 text-lg md:text-xl text-gray-300"
        >
          I love creating stunning, fast, and interactive websites and web apps.
          Let’s build something incredible together.
        </motion.p>
      </div>

      <ScrollIndicator />
    </section>
  );
}

// Preload model
useGLTF.preload("/models/a_windy_day_opt.glb");
