import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <Link href="/">
        <h1 className="text-4xl font-bold">{"Moca's Portfolio"}</h1>
      </Link>
      <nav className="flex gap-4 text-3xl text-gray-400 font-semibold ">
        {/* <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
        <Link href="/contact">Contact</Link> */}
      </nav>
    </header>
  );
}
