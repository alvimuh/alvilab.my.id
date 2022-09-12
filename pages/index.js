import Head from "next/head";
import { useState, useEffect } from "react";
import AttachmentList from "../components/AttachmentList";
import ChatText from "../components/ChatText";

export default function Home() {
  const [typingIndicator, setTypingIndicator] = useState(true);
  const [showActionButton, setShowActionButton] = useState(false);
  const [bubbles, setbubbles] = useState([
    {
      render: (
        <ChatText>
          <p>Hi 👋 my name is Alvira mohamad</p>
        </ChatText>
      ),
      show: false,
      delay: 1000,
    },
    {
      render: (
        <ChatText>
          <p>
            I am a software engineer who has work experience as a professional
            frontend engineer, and a full-stack web developer for more than 3
            years.
          </p>
        </ChatText>
      ),
      show: false,
      delay: 6000,
    },
    {
      render: (
        <ChatText>
          <p>
            The technology stack I'm proficient in is{" "}
            <span className="font-medium bg-blue-50 text-blue-400 px-2 rounded">
              React
            </span>{" "}
            <span className="font-medium bg-yellow-50 text-yellow-400 px-2 rounded">
              Javascript
            </span>{" "}
            <span className="font-medium bg-red-50 text-red-400 px-2 rounded">
              HTML
            </span>{" "}
            <span className="font-medium bg-indigo-50 text-indigo-400 px-2 rounded">
              CSS
            </span>{" "}
            <span className="font-medium bg-red-50 text-red-400 px-2 rounded">
              Laravel
            </span>{" "}
            <span className="font-medium bg-gray-50 text-gray-400 px-2 rounded">
              PHP
            </span>{" "}
            <span className="font-medium bg-green-50 text-green-400 px-2 rounded">
              Flutter
            </span>{" "}
            <span className="font-medium bg-blue-50 text-blue-400 px-2 rounded">
              Dart
            </span>
          </p>
        </ChatText>
      ),
      show: false,
      delay: 10000,
    },

    // {
    //   render: (
    //     <ChatText>
    //       <p>Ini beberapa project yang pernah aku buat..</p>
    //     </ChatText>
    //   ),
    //   show: false,
    //   delay: 12000,
    // },
    // {
    //   render: (
    //     <AttachmentList
    //       attachments={[
    //         {
    //           img: "/portofolio/kreasijabar.png",
    //           title: "Kreasi Jabar",
    //           label: "Fullstack Website",
    //         },
    //         {
    //           img: "/portofolio/bizlook.png",
    //           title: "Bizlook",
    //           label: "Fullstack Website",
    //         },
    //       ]}
    //     />
    //   ),
    //   show: false,
    //   delay: 13000,
    // },
    // {
    //   render: (
    //     <AttachmentList
    //       attachments={[
    //         {
    //           img: "/portofolio/kreasijabar.png",
    //           title: "Kreasi Jabar",
    //           label: "Fullstack Website",
    //         },
    //         {
    //           img: "/portofolio/bizlook.png",
    //           title: "Bizlook",
    //           label: "Fullstack Website",
    //         },
    //       ]}
    //     />
    //   ),
    //   show: false,
    //   delay: 13000,
    // },
    {
      render: (
        <ChatText>
          <p>Anyway, nice to e-meet with you!</p>
        </ChatText>
      ),
      show: false,
      delay: 14000,
    },
  ]);

  const timeline = (count) => {
    setTimeout(() => {
      if (count < bubbles.length) {
        let items = [...bubbles];
        items[count].show = true;
        setbubbles(items);
        setTypingIndicator(false);
        setTimeout(() => {
          setTypingIndicator(true);
        }, 800);
      }
    }, bubbles[count].delay);
  };

  useEffect(() => {
    let calcTypingSpeed = 0;
    bubbles.forEach((element, key) => {
      timeline(key);
      if (calcTypingSpeed < element.delay) calcTypingSpeed = element.delay;
    });

    setTimeout(() => {
      setTypingIndicator(false);
      setShowActionButton(true);
    }, calcTypingSpeed + 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Alvira Mohamad</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <div className="h-screen overflow-hidden">
        <div>
          <h1 className="hidden">Alvira Mohamad</h1>
          <h3 className="font-serif text-4xl text-left px-6 md:px-36 mt-6">
            alvilab.my.id
          </h3>
        </div> */}
      <div className="fixed top-0 bg-white w-full border">
        <h1 className="hidden">Alvira Mohamad</h1>
        <h3 className="container mx-auto px-6 py-4 font-serif text-xl text-left">
          alvilab.my.id
        </h3>
      </div>
      <div className="flex flex-col flex-1 text-center overflow-y-auto">
        <div className="container mx-auto px-6 py-2 flex flex-col items-start justify-end mt-20">
          {bubbles.map((bubbleElement, index) => {
            return (
              <div
                key={index}
                className={
                  bubbleElement.show ? "animate-bounce-bottom-left" : "hidden"
                }
              >
                {bubbleElement.render}
              </div>
            );
          })}
        </div>
        {/* </div> */}
      </div>
      <div className="fixed bottom-0 bg-white w-full border">
        <div className="container mx-auto px-6 py-2 flex items-center">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-white border-2">
            <img src="./me.jpg" />
          </div>

          <div className={`mx-2 ${typingIndicator ? "" : "hidden"}`}>
            <svg
              id="prefix__typing_bubble"
              data-name="typing bubble"
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={6}
              viewBox="0 0 24 6"
            >
              <defs>
                <style>
                  {
                    "@keyframes ball-beat{0%{opacity:.7}33.33%{opacity:.55}66.67%{opacity:.4}to{opacity:1}}.prefix__dot{fill:rgb(24 37 78 / 70%);transform-origin:50% 50%;animation:ball-beat 1.1s 0s infinite cubic-bezier(.445,.05,.55,.95)}.prefix__dot:nth-child(2){animation-delay:.3s!important}.prefix__dot:nth-child(3){animation-delay:.6s!important}"
                  }
                </style>
              </defs>
              <circle className="prefix__dot" cx={3} cy={3} r={3} />
              <circle className="prefix__dot" cx={12} cy={3} r={3} />
              <circle className="prefix__dot" cx={21} cy={3} r={3} />
            </svg>
          </div>
          {showActionButton ? (
            <button className="ml-4 bg-gray-100 text-gray-600 py-2 flex-1 lg:flex-initial px-8 rounded-full font-medium">
              Contact me on Instagram
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </>
  );
}
