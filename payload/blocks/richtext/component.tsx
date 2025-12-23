import { RichText as RichTextRenderer } from "@/components/rich-text";

export function RichText({ content, className }: { content: any, className?: string }) {
    return (
        <div className={className}>
            <RichTextRenderer content={content} />
        </div>
    );
}
