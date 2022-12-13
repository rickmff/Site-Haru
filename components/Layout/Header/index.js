import Link from 'next/link'

export default function Header() {
  return (
    <h2>
      <Link href="/" className="hover:underline">
        Blog
      </Link>
      .
    </h2>
  )
}
