'use client'

import React, { useEffect, useState } from "react"

function getWindowDimensions() {
    if (typeof window !== 'undefined') {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height,
        };
    } else {
        // Handle the case when window is not defined (e.g., server-side rendering)
        return {
            width: 0,
            height: 0,
        };
    }
}


export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

