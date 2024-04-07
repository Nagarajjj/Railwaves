import React, { useEffect, useState, useRef } from "react";

const Services: React.FC = () => {
  const [deliveryCount, setDeliveryCount] = useState(0);
  const [partnerCount, setPartnerCount] = useState(0);
  const [stateCount, setStateCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  useEffect(() => {
    const animateCounts = () => {
      const animateCount = (target: number, setter: React.Dispatch<React.SetStateAction<number>>) => {
        const increment = target / 100;
        let currentCount = 0;
        const interval = setInterval(() => {
          currentCount += increment;
          setter(prevCount => {
            return currentCount >= target ? target : Math.ceil(currentCount);
          });
          if (currentCount >= target) clearInterval(interval);
        }, 20); // Adjust this value to change the speed of the counter increase
      };

      animateCount(1000, setDeliveryCount);
      animateCount(50, setPartnerCount);
      animateCount(20, setStateCount);
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounts();
          observer.current?.unobserve(entry.target);
        }
      });
    };

    observer.current = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5
    });

    if (counterRef.current) {
      observer.current.observe(counterRef.current);
    }

    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return (
    <div ref={counterRef}>
      <div id="partners">
        <div className="flex items-center gap-4 ml-40 mt-10">
          <div className="w-[10px] h-[35px] bg-[gray]" />
          <h2 className="uppercase text-4xl tracking-tight font-[400] text-text-dark-primary">
            Partners with us.
          </h2>
        </div>
        <div className="grid grid-cols-4 place-items-center gap-y-8 mt-8 gap-2">
          <div className="w-[250px] h-[280px] mt-8 ml-20">
            <img src='./assets/ircts.png' alt="IRCTS"/>
          </div>
          <div className="w-[230px] h-[250px] -mt-5 ml-20">
            <img src='./assets/RMcargo.png' alt="RMcargo" />
          </div>
          <div className="w-[250px] h-[280px] mt-10 ml-18">
            <img src='./assets/Harsh.png' alt="Harsh" />
          </div>
          <div className="w-[250px] h-[280px] mt-10 ml-18">
            <img src='./assets/Bigship.png' alt="Bigship" />
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center mb-8 mr-14">
        <div className="text-center">
          <div className="text-4xl font-bold">{String(deliveryCount)}+</div>
          <div>Deliveries</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold">{String(partnerCount)}+</div>
          <div>Partners</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold">{String(stateCount)}+</div>
          <div>States</div>
        </div>
      </div>
    </div>
  );
};

export default Services;
