// import { useEffect, useState } from "react";

// // id, size, x, y, opacity, animationDuration
// // id, size, x, y, delay, animationDuration

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);
//   const [meteors, setMeteors] = useState([]);

//   useEffect(() => {
//     generateStars();
//     generateMeteors();

//     const handleResize = () => {
//       generateStars();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor(
//       (window.innerWidth * window.innerHeight) / 10000
//     );

//     const newStars = [];

//     for (let i = 0; i < numberOfStars; i++) {
//       newStars.push({
//         id: i,
//         size: Math.random() * 3 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         opacity: Math.random() * 0.5 + 0.5,
//         animationDuration: Math.random() * 4 + 2,
//       });
//     }

//     setStars(newStars);
//   };

//   const generateMeteors = () => {
//     const numberOfMeteors = 4;
//     const newMeteors = [];

//     for (let i = 0; i < numberOfMeteors; i++) {
//       newMeteors.push({
//         id: i,
//         size: Math.random() * 2 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 20,
//         delay: Math.random() * 15,
//         animationDuration: Math.random() * 3 + 3,
//       });
//     }

//     setMeteors(newMeteors);
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: star.size + "px",
//             height: star.size + "px",
//             left: star.x + "%",
//             top: star.y + "%",
//             opacity: star.opacity,
//             animationDuration: star.animationDuration + "s",
//           }}
//         />
//       ))}

//       {meteors.map((meteor) => (
//         <div
//           key={meteor.id}
//           className="meteor animate-meteor"
//           style={{
//             width: meteor.size * 50 + "px",
//             height: meteor.size * 2 + "px",
//             left: meteor.x + "%",
//             top: meteor.y + "%",
//             animationDelay: meteor.delay,
//             animationDuration: meteor.animationDuration + "s",
//           }}
//         />
//       ))}
//     </div>
//   );
// };



import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    generateBubbles();

    const handleResize = () => {
      generateBubbles();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateBubbles = () => {
    const numberOfBubbles = Math.floor(
      (window.innerWidth * window.innerHeight) / 20000
    );

    const newBubbles = [];
    for (let i = 0; i < numberOfBubbles; i++) {
      newBubbles.push({
        id: i,
        size: Math.random() * 100 + 40,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.3 + 0.2,
        animationDuration: Math.random() * 20 + 10,
        animationDelay: Math.random() * 10,
      });
    }
    setBubbles(newBubbles);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="bubble"
          style={{
            width: bubble.size + "px",
            height: bubble.size + "px",
            left: bubble.x + "%",
            top: bubble.y + "%",
            opacity: bubble.opacity,
            animationDuration: bubble.animationDuration + "s",
            animationDelay: bubble.animationDelay + "s",
          }}
        />
      ))}

      <style jsx>{`
        .bubble {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(
            circle at center,
            rgba(99, 102, 241, 0.4),
            transparent
          );
          animation-name: float;
          animation-iteration-count: infinite;
          animation-timing-function: ease-in-out;
        }

        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-30px);
          }
          100% {
            transform: translateY(0px);
          }
        }
      `}</style>
    </div>
  );
};
