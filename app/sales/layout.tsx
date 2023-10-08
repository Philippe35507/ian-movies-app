import { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <h1 className="bg-green-600">Hello from SALES Layout</h1>
      {children}
    </div>
  );
}
