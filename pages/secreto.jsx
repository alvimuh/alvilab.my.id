import { useState, useEffect } from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Image from "next/image";

const randomMessages = [
  "Lagu yang paling ngegambarin hidup kamu sekarang apa, dah?",
  "Pernah suka sama orang tapi nggak pernah berani ngomong?",
  "Kalau kamu jadi makanan, kamu jadi apa? Jangan bilang jadi aku ya 😜",
  "Hal paling random yang pernah kamu lakuin gara-gara bosen?",
  "Ada nggak sih orang yang udah lama banget nggak kamu chat, tapi masih kepikiran?",
  "Kalau bisa ngomong sama hewan, kamu mau ngobrol sama siapa duluan?",
  "Kamu lebih takut kehilangan orang atau kehilangan versi terbaik dari diri kamu sendiri?",
  "Nama WiFi paling petty yang pernah kamu kepikiran bikin?",
  "Sering nggak tiba-tiba senyum sendiri gara-gara keinget orang?",
  "Kalau hidup ada tombol “ulang”, kamu pencet nggak tuh?",
  "Ada rahasia yang udah lama kamu simpen tapi pengen banget cerita ke seseorang?",
  "Pilih mana: bisa baca pikiran orang atau bisa ngilang tiap malu?",
  "Kalau bisa ngobrol sama diri kamu pas kecil, kamu mau bilang apa?",
  "Siapa yang kamu pengen banget chat tapi gengsi duluan?",
  "Hal yang bikin kamu insecure tapi nggak pernah kamu tunjukin ke orang?",
  "Mending dilupain mantan atau dilupain sahabat?",
  "Kalau kamu jadi penjahat di film, kamu bakal punya kekuatan apa?",
  "Ada fakta tentang kamu yang orang-orang pasti kaget kalau tau?",
  "Tipe yang nyimpen perasaan sendiri atau langsung to the point?",
  "Jujur aja deh, kamu nganggep aku siapa sih sebenernya? 😏",
];

export default function Secreto() {
  const [formData, setFormData] = useState({
    message: "",
    name: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const response = await fetch("/api/secreto");
      const data = await response.json();
      if (data.success) {
        setMessages(data.data);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/secreto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setStatus({
        type: "success",
        message: "Message sent successfully! ",
      });
      setFormData({ message: "", name: "" });

      // Add the new message to the list
      setMessages((prevMessages) => [data.data, ...prevMessages]);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * randomMessages.length);
    setFormData((prev) => ({
      ...prev,
      message: randomMessages[randomIndex],
    }));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const handleShare = async (e, msg) => {
    // Create temporary container with phone resolution
    const container = document.createElement("div");
    container.style.width = "375px";
    container.style.height = "812px";

    container.style.padding = "20px";
    container.style.boxSizing = "border-box";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.backgroundImage =
      "linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)";
    document.body.appendChild(container);

    // Add title
    const title = document.createElement("div");
    title.textContent = "alvilab.my.id/secreto";
    title.style.textAlign = "center";
    title.style.fontWeight = "bold";
    title.style.fontSize = "18px";
    title.style.width = "100%";
    title.style.color = "white";
    container.appendChild(title);

    // Clone the message element and center it in container
    const clonedElement = e.currentTarget.cloneNode(true);
    clonedElement.style.width = "100%";
    clonedElement.style.objectFit = "contain";
    clonedElement.style.objectPosition = "center";
    clonedElement.style.display = "block";
    clonedElement.style.margin = "auto";
    clonedElement.style.backgroundColor = "white";
    clonedElement.style.borderRadius = "24px";
    clonedElement.style.border = "0";
    clonedElement.style.marginTop = "30px";
    clonedElement.style.marginBottom = "30px";
    clonedElement.style.background = "rgba(255, 255, 255, 0.21)";
    clonedElement.style.borderRadius = "16px";
    clonedElement.style.boxShadow = "0 4px 30px rgba(0, 0, 0, 0.1)";
    clonedElement.style.backdropFilter = "blur(15.9px)";
    clonedElement.style.WebkitBackdropFilter = "blur(15.9px)";
    clonedElement.style.border = "1px solid rgba(255, 255, 255, 0.89)";

    // Get the paragraph element inside clonedElement that contains the message
    Array.from(clonedElement.getElementsByTagName("p")).forEach(
      (p) => (p.style.color = "rgb(255 255 255 / 90%)")
    );
    Array.from(clonedElement.getElementsByTagName("span")).forEach(
      (span) => (span.style.color = "rgb(255 255 255 / 60%)")
    );
    Array.from(clonedElement.getElementsByTagName("time")).forEach(
      (time) => (time.style.display = "none")
    );
    Array.from(clonedElement.getElementsByTagName("div")).forEach(
      (time) => (time.style.borderColor = "rgb(255 255 255 / 20%)")
    );

    container.appendChild(clonedElement);

    // Use html2canvas to convert the element to an image
    import("html2canvas")
      .then(({ default: html2canvas }) => {
        html2canvas(container, {
          allowTaint: true,
          scale: 3,
        }).then((canvas) => {
          // Convert canvas to blob
          canvas.toBlob((blob) => {
            // Create a File object
            const file = new File([blob], "secreto-message.png", {
              type: "image/png",
            });
            // Try sharing with files first
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
              navigator.share({
                files: [file],
                title: "Secreto Message",
                text: "Check out this anonymous message!",
              });
            }
          });
        });
      })
      .finally(() => {
        document.body.removeChild(container);
      });
  };

  return (
    <>
      <Head>
        <title>Send Me a Secret Message | Alvi Lab</title>
        <meta name="description" content="Send an anonymous message to Alvi" />
      </Head>

      <Navbar />
      <main className="pt-32 pb-12 min-h-screen space-y-16">
        <section className="max-w-3xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src="/memoji.jpg"
                  alt="Alvi Muh"
                  width={48}
                  height={48}
                  objectFit="contain"
                  objectPosition="center"
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-lg font-semibold">@alvi.muh</h1>
                <p className="text-sm text-gray-500">
                  send me anonymous messages!
                </p>
              </div>
            </div>

            {status.message && (
              <div
                className={`p-4 rounded-lg mb-4 ${
                  status.type === "error"
                    ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                    : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                }`}
              >
                {status.message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 
                           bg-gray-50 dark:bg-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 
                           focus:border-transparent transition-colors text-base"
                  placeholder="Type your message here..."
                />
                <button
                  type="button"
                  onClick={handleRandomMessage}
                  className="absolute bottom-3 right-3 p-2 rounded-full hover:bg-gray-200 
                           dark:hover:bg-gray-700 transition-colors text-gray-500 
                           dark:text-gray-400"
                  title="Get random message"
                >
                  🎲
                </button>
              </div>

              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-2xl border border-gray-200 dark:border-gray-700 
                         bg-gray-50 dark:bg-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500 
                         focus:border-transparent transition-colors text-base"
                placeholder="Your name (optional)"
              />

              <div className="flex items-center justify-between gap-4">
                <div className="text-sm text-gray-500">🔒 anonymous q&a</div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 rounded-full bg-black hover:bg-gray-800 
                           text-white font-medium transition-colors disabled:opacity-50
                           disabled:cursor-not-allowed dark:bg-white dark:text-black
                           dark:hover:bg-gray-100"
                >
                  {isSubmitting ? "Sending..." : "Send!"}
                </button>
              </div>
            </form>
          </div>
        </section>

        <section className="max-w-3xl mx-auto px-4">
          {/* Messages Feed Section */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-2xl font-bold mb-8">Messages</h2>
            {isLoading ? (
              <div className="text-center text-gray-600 dark:text-gray-400">
                Loading messages...
              </div>
            ) : messages.length === 0 ? (
              <div className="text-center text-gray-600 dark:text-gray-400">
                No messages yet. Be the first one to send a message!
              </div>
            ) : (
              <div className="space-y-6">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm
                             border border-gray-100 dark:border-gray-700"
                    onDoubleClick={(e) => handleShare(e, msg)}
                  >
                    <p className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 mb-4 text-md font-medium">
                      {msg.message}
                    </p>
                    <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{msg.name}</span>
                        {/* {msg.location && (
                          <span className="text-gray-400 dark:text-gray-500">
                            from {msg.location?.city ?? "unknown city"},{" "}
                            {msg.location?.country ?? "unknown country"}
                          </span>
                        )} */}
                      </div>
                      {/* <time>{formatDate(msg.created_at)}</time> */}
                    </div>

                    {/* Reply section */}
                    {msg.reply && (
                      <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                            <img src="/memoji.jpg" alt="Alvi Muh" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-medium text-sm text-gray-600 dark:text-gray-300">
                                @alvi.muh
                              </span>
                              <span className="text-xs text-gray-400 dark:text-gray-500">
                                replied
                              </span>
                            </div>
                            <p className="text-gray-800 dark:text-gray-200 text-sm">
                              {msg.reply}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  );
}
