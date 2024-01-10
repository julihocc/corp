import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return <div>
    <div>
      <Link href="/performance">Performace</Link>
      <Link href="/reliability">Reliability</Link>
      <Link href="/scale">Scale</Link>
    </div>
    Home Page!
  </div>

}
