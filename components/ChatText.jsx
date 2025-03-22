export default function ChatText({ children }) {
  return (
    <div className="mt-4 px-6 py-3 text-left border dark:border-gray-700 rounded-xl shadow-sm bg-white dark:bg-gray-800">
      {children}
    </div>
  );
}
