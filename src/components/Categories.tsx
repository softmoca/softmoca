type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4">
      <h2 className="text-3xl font-bold border-b border-sky-500 mb-2">
        Category
      </h2>
      <ul className="text-2xl font-semibold text-gray-400">
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
