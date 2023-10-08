import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hello from Dashboard",
  description: "Tutorial description",
};

export default function Dashboard() {
  return (
    <div>
      <h1>Hello from dashboard</h1>
    </div>
  );
}
