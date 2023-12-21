import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
  description: "Moca 커리어 소개",
};

const TITLE_CLASS = "text-2xl font-bold text-gray-800 my-2";
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="bg-gray-100 shadow-lg p-8 m-8 text-center">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발을 사랑하는 풀스택 개발자 <br />
          대학 생활을 하며 필요하다고 느끼는 서비스 플랫폼을 만들고 있음
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          구글러 (-Now) <br />
          메이스북 (-2019) <br />
          삼준전자 (-2015)
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Node
          <br />
          Git, Clean Code <br />
          VS Code, IntelliJ, MongoDB
        </p>
      </section>
    </>
  );
}
