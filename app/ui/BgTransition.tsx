"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

const BgTransition = () => {
  const [showShift, setShowShift] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowShift(false);
    }, 250);
  }, []);
  return (
    <div
      className={clsx(
        "w-full h-screen absolute inset-0 bg-white transition-all duration-1000 ease-linear",
        {
          " bg-opacity-0": !showShift,
        }
      )}
    />
  );
};

export default BgTransition;
