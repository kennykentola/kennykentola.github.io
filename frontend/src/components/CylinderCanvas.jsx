import React, { useEffect, useRef, useState } from "react";

const CylinderCanvas = () => {
    const canvasRef = useRef(null);
    const [cylinder, setCylinder] = useState({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        width: 30,
        height: 120,
        dragging: false
    });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const drawCylinder = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Gradient effect
            let gradient = ctx.createLinearGradient(0, 0, 0, cylinder.height);
            gradient.addColorStop(0, "#E0E7F0");
            gradient.addColorStop(1, "#222");

            ctx.fillStyle = gradient;
            ctx.fillRect(cylinder.x - cylinder.width / 2, cylinder.y, cylinder.width, cylinder.height);
        };

        drawCylinder();

        const handleMouseMove = (event) => {
            if (cylinder.dragging) {
                setCylinder((prev) => ({
                    ...prev,
                    x: event.clientX,
                    y: event.clientY - prev.height / 2
                }));
                drawCylinder();
            }
        };

        const handleMouseDown = (event) => {
            if (
                event.clientX > cylinder.x - cylinder.width / 2 &&
                event.clientX < cylinder.x + cylinder.width / 2 &&
                event.clientY > cylinder.y &&
                event.clientY < cylinder.y + cylinder.height
            ) {
                setCylinder((prev) => ({ ...prev, dragging: true }));
            }
        };

        const handleMouseUp = () => {
            setCylinder((prev) => ({ ...prev, dragging: false }));
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, [cylinder]);

    return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />;
};

export default CylinderCanvas;
