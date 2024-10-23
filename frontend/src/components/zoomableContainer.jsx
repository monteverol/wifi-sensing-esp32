import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

const ZoomableContainer = ({ imageSrc }) => {
  const [scale, setScale] = useState(1);

  const handleZoomChange = (zoomInFunc, zoomOutFunc, value) => {
    const newScale = value / 100;
    if (newScale > scale) {
      zoomInFunc();
    } else if (newScale < scale) {
      zoomOutFunc();
    }
    setScale(newScale);
  };

  return (
    <div className="bg-white rounded-xl h-full w-full shadow-md flex items-center justify-center relative">
      <TransformWrapper
        onZoom={(ref) => setScale(ref.state.scale)}
        minScale={0.5}
        maxScale={4}
        initialScale={1}
        className="flex-grow"
      >
        {({ zoomIn, zoomOut, resetTransform }) => (
          <>
            <TransformComponent>
              <div className="flex items-center justify-center w-full h-full">
                <img src={imageSrc} alt="Blueprint" className="max-w-full max-h-full object-contain" />
              </div>
            </TransformComponent>
            <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center space-y-4">
              <div className="relative h-[300px] w-4 flex flex-col items-center">
                <div className="absolute -top-8 transform text-text_tertiary text-md font-bold">100%</div>
                <input
                  type="range"
                  min="50"
                  max="400"
                  value={scale * 100}
                  onChange={(e) => handleZoomChange(zoomIn, zoomOut, e.target.value)}
                  className="absolute top-1/2 -translate-y-1/2 rotate-[-90deg] transform w-[300px] h-4 rounded-full bg-[#E5E5E5] appearance-none slider-thumb-yellow"
                />
                <div className="absolute -bottom-8 transform text-text_tertiary text-md font-bold">0%</div>
              </div>
            </div>
          </>
        )}
      </TransformWrapper>
    </div>
  );
};

export default ZoomableContainer;