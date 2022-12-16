import React from "react";

export const Content = (props: any) => {
  return (
    <div className="text-black w-full h-[calc(100%_-_72px)]  p-4 overflow-auto">
      <div className="max-w-none prose lg:prose-xl">{props.children}</div>
    </div>
  );
};
