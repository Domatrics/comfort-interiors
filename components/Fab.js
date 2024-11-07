"use client";
import { AnimatePresence, m } from "framer-motion";
import React, { useState, useRef } from "react";
import useOnClickOutside from "../utils/useOnClickOutside"

/* eslint-disable @next/next/no-img-element */
const Fab = () => {
    const [fab, setFab] = useState(false);

    const ref = useRef(null)


  const handleClickOutside = () => {
    setFab(false)
  }

  useOnClickOutside(ref, handleClickOutside)

    return (
        <div ref={ref} className="fixed bottom-6 right-6 lg:bottom-10 lg:right-10 overflow-hidden ">
            <AnimatePresence>
                {fab && (
                    <m.div
                        initial={{
                            y: 200,
                            scale: 0,
                        }}
                        animate={{
                            y: 0,
                            scale: 1,
                        }}
                        exit={{
                            y: 200,
                            scale: 0,
                        }}
                        transition={{
                            type: "tween",
                        }}
                        className="flex z-0  relative flex-col items-center gap-y-4 mb-6"
                    >
                        <a href="/">
                            <img
                                className="rounded-full w-12 h-12 lg:w-16 lg:h-16 "
                                src="/whatsapp2.webp"
                                alt="WhatsApp Logo"
                                width="100"
                                height="100"
                            />
                        </a>
                        <a href="/">
                            <img
                                className="rounded-full w-12 h-12 lg:w-16 lg:h-16 border-2 "
                                src="/zomato.webp"
                                alt="Zomato Logo"
                                width="100"
                                height="100"
                            />
                        </a>                       
                    </m.div>
                )}
            </AnimatePresence>

            <m.svg
                whileTap={{
                    scale: 0.9,
                }}
                style={{
                    originX: 0.5,
                    originY: 0.5,
                }}
                onClick={() => setFab((f) => !f)}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="bg-primary z-20 cursor-pointer w-16 h-16 lg:w-20 lg:h-20 p-3 relative rounded-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M16.5 8.63005C16.09 8.63005 15.75 8.29005 15.75 7.88005V6.50005C15.75 5.45006 15.3 4.43005 14.52 3.72005C13.73 3.00005 12.71 2.67005 11.63 2.77005C9.83 2.94005 8.25 4.78005 8.25 6.70005V7.67005C8.25 8.08005 7.91 8.42005 7.5 8.42005C7.09 8.42005 6.75 8.08005 6.75 7.67005V6.69005C6.75 4.00005 8.92 1.52005 11.49 1.27005C12.99 1.13005 14.43 1.60005 15.53 2.61005C16.62 3.60005 17.25 5.02005 17.25 6.50005V7.88005C17.25 8.29005 16.91 8.63005 16.5 8.63005Z"
                    fill="#fff"
                />
                <path
                    d="M15.0001 22.75H9.00006C4.38006 22.75 3.52006 20.6 3.30006 18.51L2.55006 12.52C2.44006 11.44 2.40006 9.89 3.45006 8.73C4.35006 7.73 5.84006 7.25 8.00006 7.25H16.0001C18.1701 7.25 19.6601 7.74 20.5501 8.73C21.5901 9.89 21.5601 11.44 21.4501 12.5L20.7001 18.51C20.4801 20.6 19.6201 22.75 15.0001 22.75ZM8.00006 8.75C6.31006 8.75 5.15006 9.08 4.56006 9.74C4.07006 10.28 3.91006 11.11 4.04006 12.35L4.79006 18.34C4.96006 19.94 5.40006 21.26 9.00006 21.26H15.0001C18.6001 21.26 19.0401 19.95 19.2101 18.36L19.9601 12.35C20.0901 11.13 19.9301 10.3 19.4401 9.75C18.8501 9.08 17.6901 8.75 16.0001 8.75H8.00006Z"
                    fill="#fff"
                />
                <path
                    d="M15.4199 13.1499C14.8599 13.1499 14.4099 12.6999 14.4099 12.1499C14.4099 11.5999 14.8599 11.1499 15.4099 11.1499C15.9599 11.1499 16.4099 11.5999 16.4099 12.1499C16.4099 12.6999 15.9699 13.1499 15.4199 13.1499Z"
                    fill="#fff"
                />
                <path
                    d="M8.41991 13.1499C7.85991 13.1499 7.40991 12.6999 7.40991 12.1499C7.40991 11.5999 7.85991 11.1499 8.40991 11.1499C8.95991 11.1499 9.40991 11.5999 9.40991 12.1499C9.40991 12.6999 8.96991 13.1499 8.41991 13.1499Z"
                    fill="#fff"
                />
            </m.svg>
        </div>
    );
};

export default Fab