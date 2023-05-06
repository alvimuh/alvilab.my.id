import Button from "./Button";

const Footer = () => {
  return (
    <footer className="container-default py-6 flex flex-col md:flex-row justify-between gap-4 md:items-center">
      <div className="flex flex-col md:flex-row gap-1 md:gap-3">
        <div className="flex items-center gap-4">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
          </span>
          <h5 className="text-xl mb-[2px]">Keep in touch</h5>
          <p className="text-gray-700">Follow on</p>
        </div>
        <div className="flex gap-4 flex-wrap">
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
          >
            Linkedin
          </Button>
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
          >
            Tiktok
          </Button>
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
          >
            Instagram
          </Button>
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
          >
            Twitter
          </Button>
        </div>
      </div>
      <p className="text-gray-500 text-xs font-semibold">
        Copyright 2023 - alvilab.my.id
      </p>
    </footer>
  );
};

export default Footer;
