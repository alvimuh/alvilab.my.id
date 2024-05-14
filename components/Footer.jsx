import Button from "./Button";

const Footer = () => {
  return (
    <footer className="container-default py-6 flex flex-col md:flex-row justify-between gap-4 md:items-center pb-40">
      <div className="flex flex-col md:flex-row gap-1 md:gap-3 md:items-center">
        <div className="flex items-center gap-4">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-600 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
          </span>
          <h5 className="text-xl mb-[2px] font-normal">Keep in touch</h5>
          <p className="text-gray-600">Follow on</p>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
            href="https://www.youtube.com/channel/UCYQVvko01kpD_qmqGsjjt4w"
            target="_blank"
          >
            Youtube
          </Button>
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
            href="https://www.linkedin.com/in/mohamadalvir"
            target="_blank"
          >
            Linkedin
          </Button>
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
            href="https://github.com/alvimuh"
            target="_blank"
          >
            Github
          </Button>
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
            href="https://www.tiktok.com/@alvi.muh"
            target="_blank"
          >
            Tiktok
          </Button>
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
            href="https://www.instagram.com/alvi.muh"
            target="_blank"
          >
            Instagram
          </Button>
          <Button
            variant="base"
            className="!p-0 !text-gray-600 hover:!text-gray-900"
            href="https://twitter.com/alvimuh19"
            target="_blank"
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
