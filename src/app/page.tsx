import Auth from "@/componets/Auth";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header className="flex">
        <h1 className="text-3xl">単語帳</h1>
      </header>
      <Auth />
    </main>
  );
}
