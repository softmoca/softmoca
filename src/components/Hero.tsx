import Image from "next/image";
import profileImage from "../../public/images/profilee.jpeg";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="rounded-full mx-auto"
        src={profileImage}
        alt="Picture of the author"
        width={300}
        height={300}
        priority
      />
      <h2 className="text-4xl font-bold mt-2">{"Hi, I'm Moca"}</h2>
      <h3 className="text-xl font-bold">Full-stack Develover</h3>
      <p className="text-xl text-red-500 font-semibold">
        If it doesn’t work, Until it works.{" "}
      </p>
      <Link href="/contact">
        <button className="bg-yellow-300 font-bold rounded-xl py-2 px-4 mt-2 text-xl">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
