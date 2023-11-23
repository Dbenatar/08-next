import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  p-24">
      <h1>This is the grandpappi</h1>
      <Link href="/blogs">Blog</Link>
    </main>
  );
}
