import { motion } from "framer-motion";

// Scroll Indicator
function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ y: [0, 10, 0], opacity: 1 }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      className="absolute py-3 bottom-2 w-full bg-cyan-500 text-center  z-20 text-blue-950 text-xl hover:bg-cyan-400 rounded-md shadow-lg hover:shadow-[0_0_15px_#22d3ee]"
    >
      ↓ Scroll
    </motion.div>
  );
}

export default function Hero() {
  return (
    <div className="relative h-screen w-full bg-gradient-to-br from-gray-900 to-black overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-screen z-9 ">
        <iframe
          title="A Windy Day"
          className="w-full h-full"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          src="https://sketchfab.com/models/fb78f4cc938144e6902dd5cff354d525/embed?ui_watermark=0&ui_infos=0&ui_controls=0&autospin=1&autostart=1&transparent=1&camera=0"
        ></iframe>
      </div>
      {/* <div className="  overflow-hidden ">
        <iframe
          title="A Windy Day"
          className="w-full mx-auto  h-full  "
          
          allow="autoplay; fullscreen; xr-spatial-tracking"
          src="https://sketchfab.com/models/fb78f4cc938144e6902dd5cff354d525/embed?ui_watermark=0&ui_infos=0&ui_controls=0&autospin=1&autostart=1&transparent=1"
        ></iframe>
        {/* <iframe
          title="A Windy Day"
          className="w-full h-full pointer-events-none"
          allow="autoplay; fullscreen; xr-spatial-tracking"
          allowFullScreen
          mozallowfullscreen="true"
          webkitallowfullscreen="true"
          src="https://sketchfab.com/models/fb78f4cc938144e6902dd5cff354d525/embed?ui_watermark=0&ui_infos=0&ui_controls=0&autospin=1&autostart=1"
        /> 
      </div> */}

      <div className="absolute d-inline-block top-1/3 left-10 text-white z-10">
        <h1 className="text-5xl font-bold">
          Hey, I'm <span className="text-cyan-400">Aman Khan</span>
          <br />A Full Stack Developer
          {/* <span className="text-cyan-400">.</span> */}
        </h1>
        <p className="mt-4 text-xl text-gray-300 max-w-xl">
          A passionate Full Stack Developer with a knack for creating dynamic
          and responsive web applications. Let's build something amazing!
        </p>
      </div>
      <div className="z-10">
        <a
          href="#about"
          className="text-blue-950 text-lg font-semibold scroll hover:underline"
        >
          <ScrollIndicator />
        </a>
      </div>
    </div>
  );
}
