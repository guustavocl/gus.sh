import { LightsOff } from "./LightsOff";

export function Background() {
  return (
    <>
      <div
        className="bg bg-linear-to-br fixed h-screen w-full text-white top-0 left-0"
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
