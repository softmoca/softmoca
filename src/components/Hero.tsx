import Image from "next/image";
import profileImage from "../../public/images/profile.jpeg";
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
      <h2 className="text-4xl font-bold mt-2">{"Hi, I'm SoftMoca"}</h2>
      <h3 className="text-xl font-bold">Back-end Develover</h3>
      <p className="text-xl text-red-500 font-semibold">Not First, But Best </p>
      <Link href="/contact">
        <button className="bg-yellow-300 font-bold rounded-xl py-2 px-4 mt-2 text-xl">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
