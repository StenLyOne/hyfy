// "use client";

// import { useEffect, useLayoutEffect, useRef, useState } from "react";
// import { CardData } from "src/lib/types/ui/card";
// import { CardItem } from "./Card";

// export default function CardsWrapper({ cards }: { cards: CardData[] }) {
//   const [active, setActive] = useState(0);
//   const tabEls = useRef<Record<number, HTMLDivElement | null>>({});
//   const refs = useRef<Record<number, HTMLDivElement | null>>({});
//   const [dotY, setDotY] = useState(0);

//   // 📍 обновляем позицию точки при смене активного
//   useLayoutEffect(() => {
//     const update = () => {
//       const el = tabEls.current[active];
//       if (!el) return;
//       const y = el.offsetTop + el.offsetHeight / 5;
//       setDotY(y);
//     };
//     update();
//     window.addEventListener("resize", update);
//     return () => window.removeEventListener("resize", update);
//   }, [active]);

//   // 👀 следим, какая карточка в зоне видимости
//   useEffect(() => {
//     const io = new IntersectionObserver(
//       (entries) => {
//         // 🚫 если Lenis крутит — выходим
//         // const html = document.documentElement;
//         // if (html.classList.contains("lenis-scrolling")) return;

//         const visible = entries
//           .filter((e) => e.isIntersecting)
//           .sort(
//             (a, b) =>
//               Math.abs(
//                 a.boundingClientRect.top + a.boundingClientRect.height / 10
//               ) -
//               Math.abs(
//                 b.boundingClientRect.top + b.boundingClientRect.height / 3
//               )
//           );

//         if (visible[0]) {
//           const index = Number(visible[0].target.getAttribute("data-index"));
//           setActive(index);
//         }
//       },
//       {
//         root: null,
//         rootMargin: "-40% 0% -40% 0%",
//         threshold: 0.01,
//       }
//     );

//     Object.values(refs.current).forEach((el) => el && io.observe(el));
//     return () => io.disconnect();
//   }, []);

//   const handleTabClick = (index: number) => {
//     const html = document.documentElement;

//     // если сейчас идёт скролл lenis — ждём его окончания
//     if (html.classList.contains("lenis-scrolling")) {
//       const observer = new MutationObserver((mutations) => {
//         const stillScrolling = html.classList.contains("lenis-scrolling");
//         if (!stillScrolling) {
//           // когда класс исчезает — выполняем действие
//           setActive(index);
//           refs.current[index]?.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//           observer.disconnect();
//         }
//       });

//       observer.observe(html, { attributes: true, attributeFilter: ["class"] });
//       return;
//     }

//     // если не скроллит — просто выполняем сразу
//     setActive(index);
//     refs.current[index]?.scrollIntoView({
//       behavior: "smooth",
//       block: "center",
//     });
//   };

//   return (
//     <div className="relative w-full">
//       <div className="flex justify-between w-full relative">
//         {/* Левая колонка */}
//         <div className="relative">
//           <div className="sticky top-24 flex">
//             {/* Вертикальная линия с точкой */}
//             <div
//               className="relative w-1 h-screen"
//               style={{ transform: `translateY(${dotY}px)` }}
//             >
//               <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 transition-transform duration-300" />
//               <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-0 w-[2px] h-screen bg-gray-200" />
//             </div>

//             {/* Таб-лист */}
//             <nav className="ml-4 space-y-4">
//               {cards.map((card, index) => (
//                 <div
//                   key={index}
//                   ref={(el) => {
//                     tabEls.current[index] = el;
//                   }}
//                   onClick={() => handleTabClick(index)}
//                   className={`cursor-pointer transition-colors text-balance w-full max-w-[300px] ${
//                     active === index
//                       ? "text-emerald-600 font-semibold"
//                       : "text-gray-500"
//                   }`}
//                 >
//                   {card.title}
//                 </div>
//               ))}
//             </nav>
//           </div>
//         </div>

//         {/* Правая колонка */}
//         <div className="space-y-6 w-full max-w-[1074px]">
//           {cards.map((card, index) => (
//             <div
//               key={index}
//               data-index={index}
//               ref={(el) => {
//                 refs.current[index] = el;
//               }}
//             >
//               <CardItem card={card} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { lenisInstance } from "src/components/Animation/LenisProvide";
import { CardItem } from "./Card";
import { CardData } from "src/lib/types/ui/card";

export default function CardsWrapper({ cards }: { cards: CardData[] }) {
  const [active, setActive] = useState(0); // индекс активной карточки/таба
  const tabEls = useRef<Record<number, HTMLDivElement | null>>({}); // DOM-узлы табов слева
  const refs = useRef<Record<number, HTMLDivElement | null>>({}); // DOM-узлы карточек справа
  const [dotY, setDotY] = useState(0); // Y-смещение точки на линии
  const ticking = useRef(false); // защита от лишних кадров
  const frameRef = useRef<number | undefined>(undefined); // id requestAnimationFrame

  // позиция точки
  useLayoutEffect(() => {
    const el = tabEls.current[active];
    if (el) setDotY(el.offsetTop + el.offsetHeight / 5);
  }, [active]);

  // ручной scroll listener (через RAF)
  useEffect(() => {
    const updateActiveCard = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        let nearest = 0;
        let minDist = Infinity;

        Object.entries(refs.current).forEach(([i, el]) => {
          if (!el) return;
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(
            rect.top + rect.height / 2 - window.innerHeight / 2
          );
          if (dist < minDist) {
            minDist = dist;
            nearest = Number(i);
          }
        });

        setActive((prev) => (prev !== nearest ? nearest : prev));
        ticking.current = false;

        // цикл повторяется каждый кадр
        frameRef.current = requestAnimationFrame(updateActiveCard);
      });
    };

    frameRef.current = requestAnimationFrame(updateActiveCard);

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  // клик по табу
  const handleTabClick = (index: number) => {
    const lenis = lenisInstance.current;
    if (lenis && refs.current[index]) {
      lenis.scrollTo(refs.current[index], { offset: -window.innerHeight / 3 });
      // setActive(index);
    }
  };

  return (
    <div className="relative w-full flex justify-between z-0">
      {/* Левая колонка */}
      <div className="absolute w-full md:max-w-[300px] top-0 left-0 h-[350vh] z-10">
        <div className="relative h-full">
          <div className="sticky top-0 md:top-24 h-max flex ">
            {/* Вертикальная линия с точкой */}
            <div
              className="hidden md:flex relative w-1 h-screen"
              style={{ transform: `translateY(${dotY}px)` }}
            >
              <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 transition-transform duration-300" />
              <div className="absolute left-1/2 -translate-x-1/2 top-4 bottom-0 w-[2px] bg-gray-200" />
            </div>

            {/* Таб-лист */}
            <div className="md:ml-4 max-[768px]:pt-14 space-y-4 flex justify-evenly gap-2 md:block w-full md:w-max bg-white md:bg-transparent">
              {cards.map((card, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    tabEls.current[i] = el;
                  }}
                  onClick={() => handleTabClick(i)}
                >
                  <span
                    className={`md:hidden flex cursor-pointer transition-colors text-balance w-full px-2 md:px-5 py-2 rounded-full text-[16px] border border-gray-100 ${
                      active === i
                        ? "text-white bg-primary font-bold shadow-[0_3px_8px_0_rgba(0,0,0,0.12),_0px_3px_1px_0_rgba(0,0,0,0.04)]"
                        : "md:text-gray-500 bg-[#C6E8E6] font-normal"
                    }`}
                  >
                    <img className="w-6 h-6" src={card.icon} alt="" />
                  </span>
                  <span
                    className={`hidden md:block cursor-pointer transition-colors text-balance w-full ${
                      active === i
                        ? "text-white md:text-primary md:font-semibold"
                        : "md:text-gray-500"
                    }`}
                  >
                    {card.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="md:w-[400px] w-0 h-full"></div>

      {/* Правая колонка */}
      <div className="space-y-6 w-full md:max-w-[1074px] z-2 mt-24 md:mt-0">
        {cards.map((card, i) => (
          <div
            key={i}
            ref={(el) => {
              refs.current[i] = el;
            }}
          >
            <CardItem card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}
