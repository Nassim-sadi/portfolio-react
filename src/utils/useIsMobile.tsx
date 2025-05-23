import { useEffect, useState } from "react";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(() => {
    const userAgent = navigator.userAgent;
    const uaMatch =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        userAgent
      );
    const widthMatch = window.innerWidth <= 768;
    return uaMatch || widthMatch;
  });

  useEffect(() => {
    const handleResize = () => {
      const userAgent = navigator.userAgent;
      const uaMatch =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          userAgent
        );
      const widthMatch = window.innerWidth <= 768;
      setIsMobile(uaMatch || widthMatch);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

export default useIsMobile;
