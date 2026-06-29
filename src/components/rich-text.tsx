import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'

interface RichTextProps {
  data: Record<string, unknown>
}

// Renders the lexical nodes directly (no wrapper) so they become direct children
// of Caliper's <Prose>, which supplies the typographic flow spacing.
export function RichText({ data }: RichTextProps) {
  return (
    // @ts-expect-error — Payload RichText accepts SerializedEditorState
    <PayloadRichText data={data} disableContainer />
  )
}
