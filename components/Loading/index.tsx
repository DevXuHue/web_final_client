import React from "react";

interface LoadingProps {
  size?: number;
}

const Loading: React.FC<LoadingProps> = ({ size = 100 }) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div>
        <div
          style={{ width: `${size}px`, height: `${size}px` }}
          className="animate-spin"
        >
          <div
            className="h-full w-full border-4 border-t-purple-500
       border-b-purple-700 rounded-[50%]"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
