import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__inner">
        <p className="not-found__code">404</p>
        <h1 className="not-found__title">
          Page not found
        </h1>
        <p className="not-found__text">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/" className="not-found__button">
          Back to Home
        </Link>
      </div>
    </div>
  )
}
