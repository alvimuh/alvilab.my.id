import { ArrowUpRightIcon } from "@heroicons/react/24/outline";

export default function BookmarkCard({ item, onBookmarkClick }) {
  return (
    <button
      onClick={() => onBookmarkClick(item)}
      className="block w-full text-left px-3 md:px-6 py-2 md:py-5 border border-gray-300 hover:border-gray-400 rounded mb-4 hover:bg-gradient-to-b from-white to-gray-100 cursor-pointer"
    >
      <h3 className="text-base md:text-xl leading-tight mb-1">
        {item.title}
        <span className="ml-2 text-gray-500">
          <ArrowUpRightIcon width={14} className="inline" />
        </span>
      </h3>

      <p className="text-gray-600">Link description</p>
      <p className="text-gray-500 text-sm">
        <span className="mr-1 relative bottom-[2px]">
          <EyeIcon width={16} className="inline" />
        </span>
        {item.total_visitor}
      </p>
    </button>
  );
}
