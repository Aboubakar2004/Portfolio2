import { useEffect, useState } from "react";
import APPCompétence from "./APPCompétence";
import APPHetic from "./APPHetic";
import APPAvenir from "./APPAvenir";



function Test() {
  const [scrollbool, setScrollbool] = useState(false);
  // const [scrollvalue , SetScrollValue ] = useState(0)
  const [word , Setword ] = useState(<APPHetic />)

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      // SetScrollValue(scroll)
      console.log(scroll)

      if (scroll > 4500) {
        setScrollbool(false);
        Setword(<APPAvenir />)
      } else if (scroll > 2000) {
        setScrollbool(true);
        Setword(<APPCompétence />)
      } else {
        setScrollbool(false);
        Setword(<APPHetic />)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <h1 className="pt-64"></h1>
      <h1 className={`fixed grid bg-black  place-items-center p-16 text-white ${scrollbool ? "translate-x-full " : ""}`}>
        {word}
      </h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
      <h1 className="pt-80 p-64 "></h1>
    </div>
  );
}

export default Test;
