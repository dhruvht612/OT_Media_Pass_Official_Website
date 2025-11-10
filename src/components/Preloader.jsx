function Preloader() {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 text-white"
      style={{ background: 'radial-gradient(circle at top, #330033 0%, #0b0b0b 60%)' }}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute h-full w-full animate-spin-slow rounded-full border-4 border-[#ee88ee]/40 border-t-transparent" />
        <div className="absolute h-3/4 w-3/4 animate-spin rounded-full border-4 border-[#c7a0ff]/70 border-t-transparent" />
        <div className="absolute h-1/2 w-1/2 rounded-full bg-[#ee88ee]/60 blur-md" />
      </div>
      <p className="mt-6 text-2xl font-semibold uppercase tracking-[0.35em] text-[#f5f5f5]/80">
        Ot Media Pass
      </p>
      <p className="gradient-text mt-3 text-sm font-medium">
        Loading experiences...
      </p>
    </div>
  );
}

export default Preloader;

