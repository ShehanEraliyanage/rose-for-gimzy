import React, { useState, useEffect, useRef } from "react";
import { useSprings, animated } from "react-spring";
import "./App.css";
import backgroundImage from "./assets/IMG_5191.jpg"; // Import background image
import backgroundMusic from "./assets/music.mp3"; // Import background music

function App() {
  const [flowers, setFlowers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hearts, setHearts] = useState([]);
  const [audioPlayed, setAudioPlayed] = useState(false);
  const [loveMessages, setLoveMessages] = useState([]);
  const [kisses, setKisses] = useState([]);
  const [butterflies, setButterflies] = useState([]);
  const audioRef = useRef(null);

  useEffect(() => {
    // Initialize hearts
    const newHearts = Array.from({ length: 50 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 15,
      size: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
    }));
    setHearts(newHearts);

    // Initialize butterflies
    const newButterflies = Array.from({ length: 10 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 0.3 + 0.2,
      rotation: Math.random() * 360,
    }));
    setButterflies(newButterflies);

    // Initialize audio
    audioRef.current = new Audio(backgroundMusic);
    audioRef.current.loop = true;

    // Add initial love messages
    const initialMessages = [
      "Gimzy, You're My Everything 💖",
      "Ummi Loves You Forever 💝",
      "My Sweet Gimzy 💗",
      "Ummi's Heart Belongs to You 💕",
      "Gimzy, You're My World 💘",
      "Ummi's Love for You is Endless 💓",
      "My Beautiful Gimzy 💞",
      "Ummi's Forever Love 💟",
      "Gimzy, You're My Sunshine ☀️",
      "Ummi's Heart Beats for You 💓",
      "My Precious Gimzy 💖",
      "Ummi's Love is Eternal 💫",
      "Gimzy, You're My Dream Come True ✨",
      "Ummi's Soul is Yours 💞",
      "My Darling Gimzy 💝",
    ];
    setLoveMessages(initialMessages);

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setAudioPlayed(true);
    }
  };

  // Array of image URLs (replace with your Google Image links)
  const flowerImages = [
    "https://i.pinimg.com/736x/9d/92/6c/9d926cf33a8101e204322fde8dd81f41.jpg",
    "https://c1.wallpaperflare.com/preview/444/387/751/flowers-roses.jpg",
    "hhttps://i.pinimg.com/736x/42/87/0a/42870a087538cd624d7cd7b81993bead.jpg",
    "https://i.pinimg.com/736x/42/87/0a/42870a087538cd624d7cd7b81993bead.jpg",
    "https://hanablogs.azurewebsites.net/Content/BlogUpload/202301310726580839.jpg",
    "https://i.pinimg.com/736x/a9/51/40/a95140f8355cc5814c498f013a156261.jpg",
    "https://i.pinimg.com/736x/23/57/84/235784f7a884d45986ad854f8d8c3c38.jpg",
    "https://image.spreadshirtmedia.com/image-server/v1/products/T993A1PA2168PT10X43Y38D1051206901W15913H13256/views/1,width=378,height=378,appearanceId=1,backgroundColor=F2F2F2/bear-and-panda-bubu-dudu-kawaii.jpg",
    "https://ih1.redbubble.net/image.4960808721.5941/flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/e9/87/b7/e987b7f3-f8af-be4b-e8f9-c161c4f862da/AppIcon-0-0-1x_U007epad-0-85-220.png/512x512bb.jpg",
    "https://ih1.redbubble.net/image.4859638086.6985/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg",
    "https://e1.pxfuel.com/desktop-wallpaper/306/921/desktop-wallpaper-panda-bear-bubu-dudu-dudu-bubu-thumbnail.jpg",
    "https://i.pinimg.com/736x/05/6f/4a/056f4a8a59ba7bd55266c11202d2173d.jpg",
    "https://cdn.igp.com/f_auto,q_auto,t_pnopt9prodlp/products/p-elegant-rose-bouquet-139330-m.jpg",
    "https://i.pinimg.com/736x/55/42/e2/5542e2d208e2a2d1e25ee7122bc65103.jpg",
    "https://i.pinimg.com/736x/75/9b/77/759b77c9b1f7737e19e10036a4305340.jpg",
    "https://i.pinimg.com/564x/50/34/10/5034102bd7e019963362d0c0fca60fee.jpg",
    "https://media.tenor.com/L0OFpUCj9bkAAAAM/emote.gif",
    "https://i.pinimg.com/originals/d0/e5/45/d0e5451273c83ccf1abe71c366c08b63.gif",
    "https://i.pinimg.com/originals/ae/f5/00/aef5000829c04e91f0259d58727459a3.gif",
    "https://i.pinimg.com/originals/0c/12/8b/0c128bdc34a377ee07a7526d21b305bb.gif",
    "https://media.tenor.com/hmYv6-dCkGgAAAAj/bubu-dudu-bubu.gif",
    "https://i.makeagif.com/media/11-03-2024/wP-crl.gif",
    "https://media.tenor.com/7YbmqLzNGsoAAAAj/bubu-dudu-sseeyall.gif",
    "https://i.pinimg.com/originals/7e/bd/71/7ebd71142a47c65e890af6471812fa88.gif",
    "https://i.makeagif.com/media/1-24-2024/zr6UDW.gif",
    "https://i.pinimg.com/originals/5b/d6/cf/5bd6cf6908501ff38c79924b713c666f.gif",
    "https://i.pinimg.com/originals/6b/1d/69/6b1d69b588ce67dda3e65c96a86cfedc.gif",
    "https://i.pinimg.com/originals/b9/ba/20/b9ba20f5678fc7640364fc96ccfd1410.gif",
    "https://media.tenor.com/PXKZhCEfEfsAAAAj/bubu-bubu-dudu.gif",
    "https://media.tenor.com/K5E9bEhGz84AAAAM/piyushzen.gif",
    "https://media.tenor.com/Nm3VtXqm73oAAAAM/bubu-bubu-dudu.gif",
    "https://i.pinimg.com/736x/1c/ba/c4/1cbac481a49197769e48bb03c71a740e.jpg",
    "https://media.tenor.com/cVzKULzKpVgAAAAj/bubu-dudu-images-bubu-dudu-love.gif",
    "https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/bltdbc06972c10339ac/6668d4d065898628418a958d/4675159-WhiteRoses-Vase.jpg?q=70&width=3840&auto=webp",
    "https://media.tenor.com/0JWcKoeZ3kkAAAAj/bubu-bubu-dudu.gif",
    "https://i.pinimg.com/originals/f5/e0/a5/f5e0a5e748b2dc73bdec6ba0aca0a083.gif",
    "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/t/z/t/small-cartoon-cute-bubu-dudu-poster-card-for-wall-decor-hd-original-imagvyenqjv4tbx4.jpeg?q=90&crop=false",
  ];

  const addFlower = () => {
    setLoading(true);

    if (!audioPlayed) {
      playAudio();
    }

    // Add a new love message
    const newMessages = [
      "Gimzy, You're My Everything 💖",
      "Ummi Loves You More Each Day 💝",
      "My Sweet Gimzy, Forever Yours 💗",
      "Ummi's Heart Belongs Only to You 💕",
      "Gimzy, You're My World and More 💘",
      "Ummi's Love for You is Infinite 💓",
      "My Beautiful Gimzy, Always Mine 💞",
      "Ummi's Forever Love is Yours 💟",
      "Gimzy, You're My Sunshine and Moon ☀️🌙",
      "Ummi's Heart Beats Only for You 💓",
      "My Precious Gimzy, My Everything 💖",
      "Ummi's Love is Eternal and True 💫",
      "Gimzy, You're My Dream Come True ✨",
      "Ummi's Soul is Forever Yours 💞",
      "My Darling Gimzy, My Love 💝",
    ];
    const newMessage =
      newMessages[Math.floor(Math.random() * newMessages.length)];
    setLoveMessages((prev) => [...prev, newMessage]);

    // Add a new kiss
    const newKiss = {
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      size: Math.random() * 0.3 + 0.2,
    };
    setKisses((prev) => [...prev, newKiss]);

    // Add a new butterfly
    const newButterfly = {
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 10,
      size: Math.random() * 0.3 + 0.2,
      rotation: Math.random() * 360,
    };
    setButterflies((prev) => [...prev, newButterfly]);

    // Randomly select an image URL
    const randomImage =
      flowerImages[Math.floor(Math.random() * flowerImages.length)];

    // Create a new image element to preload the image
    const img = new Image();
    img.src = randomImage;

    img.onload = () => {
      setFlowers((prevFlowers) => [...prevFlowers, randomImage]);
      setLoading(false);
    };

    img.onerror = () => {
      console.error("Failed to load image");
      setLoading(false);
    };
  };

  const getRandomPosition = () => {
    return {
      x: Math.random() * window.innerWidth * 0.8, // Use 80% of screen width
      y: Math.random() * window.innerHeight * 0.8, // Use 80% of screen height
      rotation: Math.random() * 360, // Add random rotation
      scale: Math.random() * 0.5 + 0.5, // Add random scale
    };
  };

  const springs = useSprings(
    flowers.length,
    flowers.map(() => {
      const startPos = getRandomPosition();
      return {
        from: {
          left: `${startPos.x}px`,
          top: `${startPos.y}px`,
          transform: `rotate(${startPos.rotation}deg) scale(${startPos.scale})`,
          opacity: 0,
        },
        to: async (next) => {
          while (1) {
            const newPos = getRandomPosition();
            await next({
              left: `${newPos.x}px`,
              top: `${newPos.y}px`,
              transform: `rotate(${newPos.rotation}deg) scale(${newPos.scale})`,
              opacity: 1,
            });
            await new Promise((resolve) =>
              setTimeout(resolve, Math.random() * 1000)
            ); // Add random delay
          }
        },
        config: {
          duration: 2000,
          tension: 120,
          friction: 14,
        },
      };
    })
  );

  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content-wrapper">
        <h1 className="title">For My Love, Gimzy 💖</h1>

        <button
          onClick={addFlower}
          disabled={loading}
          className="surprise-button"
        >
          {loading ? "Loading..." : "Click for a Surprise 🌹"}
        </button>

        <div className="love-message">
          Gimzy, Ummi Loves Youuuuuuuu💕💞🤍💗💘
        </div>

        <div className="floating-messages">
          {loveMessages.map((message, index) => (
            <div
              key={index}
              className="floating-message"
              style={{
                animationDelay: `${index * 2}s`,
                left: `${Math.random() * 80 + 10}%`,
              }}
            >
              {message}
            </div>
          ))}
        </div>

        <div className="kisses-container">
          {kisses.map((kiss, index) => (
            <div
              key={index}
              className="kiss"
              style={{
                left: `${kiss.left}%`,
                top: `${kiss.top}%`,
                animationDelay: `${kiss.delay}s`,
                transform: `scale(${kiss.size})`,
              }}
            >
              💋
            </div>
          ))}
        </div>

        <div className="butterflies-container">
          {butterflies.map((butterfly, index) => (
            <div
              key={index}
              className="butterfly"
              style={{
                left: `${butterfly.left}%`,
                top: `${butterfly.top}%`,
                animationDelay: `${butterfly.delay}s`,
                transform: `scale(${butterfly.size}) rotate(${butterfly.rotation}deg)`,
              }}
            >
              🦋
            </div>
          ))}
        </div>

        <div className="sparkles">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="sparkle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            >
              ✨
            </div>
          ))}
        </div>

        <div className="floating-hearts">
          {hearts.map((heart, index) => (
            <div
              key={index}
              className="heart"
              style={{
                left: `${heart.left}%`,
                top: `${heart.top}%`,
                animationDelay: `${heart.delay}s`,
                transform: `scale(${heart.size})`,
                opacity: heart.opacity,
              }}
            >
              ❤️
            </div>
          ))}
        </div>

        <div className="flowers-container">
          {springs.map((props, index) => (
            <animated.img
              key={index}
              src={flowers[index]}
              alt={`Rose ${index + 1}`}
              className="flower"
              style={{
                position: "absolute",
                ...props,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
