import { useEffect, useRef } from "react";

export const CanvasComponent = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas: any = canvasRef.current;
    if (canvas) {
      const context = (canvas as any).getContext("2d");

      // Dessiner un rectangle rouge
      context.fillStyle = "red";
      context.fillRect(10, 10, 50, 50);

      // Dessiner un cercle bleu
      context.beginPath();
      context.arc(100, 100, 30, 0, 2 * Math.PI);
      context.fillStyle = "blue";
      context.fill();
      context.stroke();

      // Dessiner un triangle en bas à droite
      context.beginPath();
      context.moveTo(canvas.width - 10, canvas.height - 10);
      context.lineTo(canvas.width - 60, canvas.height - 10);
      context.lineTo(canvas.width - 35, canvas.height - 60);
      context.closePath();
      context.fillStyle = "green";
      context.fill();
      context.stroke();
    }
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      width={200}
      height={200}
      style={{ border: "1px solid #000" }}
    />
  );
};
