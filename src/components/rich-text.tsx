import { RichText as PayloadRichText } from '@payloadcms/richtext-lexical/react'

interface RichTextProps {
  data: Record<string, unknown>
  className?: string
}

export function RichText({ data, className }: RichTextProps) {
  return (
    <div className={className}>
      {/* @ts-expect-error — Payload RichText accepts SerializedEditorState */}
      <PayloadRichText data={data} />
    </div>
  )
}
