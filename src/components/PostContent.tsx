import { PostData } from "@/app/api/posts";
import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "./MarkdownViewer";

export default function PostContent({ post }: { post: PostData }) {
  const { title, description, date, content } = post;
  return (
    <section className="flex flex-col p-4 w-full">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar style={{ fontSize: "3em" }} />
        <p className="font-semibold text-4xl ml-2">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="w-44 border-2 border-sky-600 mt-4 mb-8" />
      <MarkdownViewer content={content} />
    </section>
  );
}
