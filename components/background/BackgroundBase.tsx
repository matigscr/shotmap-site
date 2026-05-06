export function BackgroundBase() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[linear-gradient(180deg,#0B0F1A_0%,#0A0A0D_100%)]">
      <div className="absolute left-1/2 top-[18vh] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full bg-[rgba(80,120,255,0.105)] blur-[260px]" />
      <div className="absolute left-[64%] top-[12vh] h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-[rgba(47,140,255,0.06)] blur-[230px]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(80,120,255,0.045)_0%,transparent_34%,rgba(0,0,0,0.18)_76%,rgba(0,0,0,0.42)_100%)]" />
    </div>
  );
}
