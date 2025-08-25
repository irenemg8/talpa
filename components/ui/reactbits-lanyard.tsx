export function ReactBitsLanyard() {
  return (
    <div className="inline-block">
      <div className="bg-black border-2 border-white/20 rounded-lg p-6 relative overflow-hidden">
        {/* Fondo con patrón */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00338d] to-transparent"></div>
        </div>

        {/* Contenido del lanyard */}
        <div className="relative z-10 flex items-center space-x-4">
          {/* Logo placeholder */}
          <div className="w-16 h-16 bg-[#00338d] rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xl">T</span>
          </div>

          {/* Información */}
          <div className="text-left">
            <h3 className="font-overpass font-bold text-xl text-white">Talpa Tunneling UPV</h3>
            <p className="text-[#00338d] font-semibold">Universidad Politécnica de Valencia</p>
            <p className="text-white/70 text-sm">Not a Boring Competition 2026</p>
          </div>
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-2 right-2 w-2 h-2 bg-[#00338d] rounded-full animate-pulse"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Cordón del lanyard */}
      <div className="w-1 h-8 bg-gradient-to-b from-white/30 to-transparent mx-auto"></div>
    </div>
  )
}
