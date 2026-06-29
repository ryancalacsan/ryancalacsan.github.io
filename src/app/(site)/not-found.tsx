import Link from 'next/link'
import { Container, Eyebrow, Heading, Text, Button } from '@ryancalacsan/caliper-ui'

export default function NotFound() {
  return (
    <Container size="md" className="not-found">
      <div className="not-found__inner">
        <Eyebrow tone="accent" className="not-found__code">
          404 / Sheet Not Found
        </Eyebrow>
        <Heading level={1} size="3xl" className="not-found__title">
          Page Not Found
        </Heading>
        <Text as="p" size="lg" tone="muted" className="not-found__text">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </Text>
        <Button asChild variant="primary" className="not-found__button">
          <Link href="/">Back to Home</Link>
        </Button>
      </div>
    </Container>
  )
}
