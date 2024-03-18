import Background from "@/components/Background";
import CarouselPosts from "@/components/CarouselPosts";
import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About Me",
  description: "Moca 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Background />
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h1 className={TITLE_CLASS}>현재 블로그 이전 중입니다..!</h1>
        {/* <p>
          <span className="text-lg text-white font-bold">
            방문자님 안녕하세요!
          </span>{" "}
          <br />
          대학 생활을 하며 필요하다고 느끼는 서비스 플랫폼을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Project</h2>
        <p>..TODO</p>
        <h2 className={TITLE_CLASS}>Stack</h2>
        <p>..TODO</p> */}
      </section>
    </>
  );
}
