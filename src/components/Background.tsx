import { LightsOff } from "./LightsOff";

export function Background() {
  return (
    <>
      <div
        className="bg fixed -z-40 h-screen w-full bg-gradient-to-br"
        style={{
          opacity: 0.3,
          backgroundSize: "cover",
          backgroundImage: "url('/bg.jpg')",
          backgroundRepeat: "repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <LightsOff />
    </>
  );
}
