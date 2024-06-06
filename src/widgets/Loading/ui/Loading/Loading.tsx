import { FC } from "react";

const Loading: FC = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
};

export default Loading;
