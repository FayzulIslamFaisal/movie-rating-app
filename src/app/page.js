import Image from "next/image";
import MovieWatch from "./componets/MovieWatch";

export default function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <MovieWatch />
      </div>
    </>
  );
}
