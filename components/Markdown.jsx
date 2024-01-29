import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

import CodeBlock from "./CodeBlock";

// const Table = ({ children }) => (
//   <div className="table-container">
//     <table className="table w-full">{children}</table>
//   </div>
// );

const Markdown = ({ children }) => {
  return (
    <ReactMarkdown
      components={{
        a: (props) => (
          <a
            className="cursor-pointer text-teal-600 hover:text-teal-400 hover:underline"
            target="_blank"
            {...props}
          />
        ),
        p: (props) => (
          <p {...props} className="font-sans mb-3 text-base text-gray-800" />
        ),
        b: (props) => <b {...props} className="font-medium" />,
        strong: (props) => <strong {...props} className="font-semibold" />,
        h2: (props) => (
          <h2
            className="text-xl font-medium text-gray-800 mt-3 mb-2"
            {...props}
          />
        ),
        h3: (props) => (
          <h3
            className="text-lg font-medium text-gray-800 mt-3 mb-2"
            {...props}
          />
        ),
        ul: (props) => (
          <ul
            className="list-disc my-3 pb-0 pl-8 font-sans text-base text-gray-800"
            {...props}
          />
        ),
        ol: (props) => (
          <ol
            className="list-decimal my-3 pb-0 pl-8 font-sans text-base text-gray-800"
            {...props}
          />
        ),
        li: (props) => <li className="my-2" {...props} />,
        code: (props) => <CodeBlock {...props} />,
        blockquote: (props) => (
          <blockquote
            className="text-md rounded-lg border-l-[5px] border-neutral-700 border-l-cyan-500 bg-neutral-100 py-3 pl-6 text-cyan-800 dark:bg-neutral-800 dark:text-cyan-200"
            {...props}
          />
        ),
        // table: (props) => <Table {...props} />,
        // th: (props) => (
        //   <th className="border px-3 py-1 text-left dark:border-neutral-600">
        //     {props.children}
        //   </th>
        // ),
        // td: (props) => (
        //   <td className="border px-3  py-1 dark:border-neutral-600">
        //     {props.children}
        //   </td>
        // ),
      }}
    >
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
