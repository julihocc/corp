import Link from "next/link";

export default function Header() {
  return (
    <div>
      <Link href="/performance">Performace</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </div>
  );
}
