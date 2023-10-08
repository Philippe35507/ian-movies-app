import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="bg-blue-500">Hello from Dashboard Layout</h1>
      {children}
    </div>
  );
}
