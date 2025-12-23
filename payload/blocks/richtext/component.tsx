import { RichText as RichTextRenderer } from "@/components/rich-text";

export function RichText({ content, debugHtml, className }: { content: any, debugHtml?: string, className?: string }) {
    return (
        <div className={className}>
            {content && <RichTextRenderer content={content} />}
            {debugHtml && <div dangerouslySetInnerHTML={{ __html: debugHtml }} />}
        </div>
    );
}
