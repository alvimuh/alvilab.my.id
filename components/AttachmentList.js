export default function AttachmentList({ attachments }) {
  return (
    <div className="flex mt-4 ml-2 gap-2 text-left">
      {attachments.map((attachmentElement) => {
        return (
          <div className="pt-4 border rounded-xl shadow-sm bg-white overflow-hidden">
            <div className="px-4 mb-2">
              <h3 className="text-lg font-normal text-gray-700 leading-none">
                {attachmentElement.title}
              </h3>
              <p className="bg-red-100 text-red-700 px-2 rounded-full text-xs font-semibold inline-block text-left">
                {attachmentElement.label}
              </p>
            </div>
            <img src={attachmentElement.img} />
          </div>
        );
      })}
    </div>
  );
}
