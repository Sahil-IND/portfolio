import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

const MyComponent = () => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    typedInstance.current = new Typed(typedRef.current, {
      strings: [
        "Web Developer!",
        "Frontend Engineer!",
        "React.js Developer!",
        "Tech Explorer!",
        "Hackathon Enthusiast!",
      ],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typedInstance.current.destroy();
    };
  }, []);

  return (
    <div>
      <span className='text-yellow-300' ref={typedRef}></span>
    </div>
  );
};

export default MyComponent;
