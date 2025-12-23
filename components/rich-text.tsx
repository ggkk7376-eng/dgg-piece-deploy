import { Fragment } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Text } from "@/components/text";

type Node = {
    type: string;
    value?: {
        url: string;
        alt: string;
    };
    children?: Node[];
    url?: string;
    [key: string]: unknown;
    newTab?: boolean;
    format?: number;
    tag?: string;
    listType?: string;
};

export function RichText({
    content,
    className,
}: {
    content: any;
    className?: string;
}) {
    if (!content?.root?.children) {
        return null;
    }

    return (
        <div className={cn("rich-text", className)}>
            {serializeLexical({ nodes: content.root.children })}
        </div>
    );
}

function serializeLexical({ nodes }: { nodes: Node[] }): React.ReactNode {
    return nodes.map((node, index) => {
        if (node == null) {
            return null;
        }

        if (node.type === "text") {
            let text = <span key={index}>{node.text as string}</span>;
            if ((node.format ?? 0) & 1) {
                text = <strong key={index}>{text}</strong>;
            }
            if ((node.format ?? 0) & 2) {
                text = <em key={index}>{text}</em>;
            }
            if ((node.format ?? 0) & 4) {
                text = <s key={index}>{text}</s>;
            }
            if ((node.format ?? 0) & 8) {
                text = <code key={index}>{text}</code>;
            }
            if ((node.format ?? 0) & 16) {
                text = <u key={index}>{text}</u>;
            }
            return text;
        }

        if (!node) {
            return null;
        }

        const serializedChildren = node.children
            ? serializeLexical({ nodes: node.children })
            : null;

        switch (node.type) {
            case "linebreak": {
                return <br key={index} />;
            }
            case "paragraph": {
                return (
                    <Text key={index} asChild variant="p2" className="mb-4 last:mb-0">
                        <p>{serializedChildren}</p>
                    </Text>
                );
            }
            case "heading": {
                const Tag = node?.tag as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"; // lexical types are loose here
                return (
                    <Tag key={index} className="font-secondary font-bold mb-4 mt-6 first:mt-0 text-white leading-tight">
                        {serializedChildren}
                    </Tag>
                );
            }
            case "list": {
                const Tag = node?.tag === "ul" ? "ul" : "ol"; // lexical list node has tag property
                const listClass = node?.listType === "number" ? "list-decimal" : "list-disc";
                return (
                    <Tag key={index} className={cn("ml-6 mb-4 pl-2 text-white", listClass)}>
                        {serializedChildren}
                    </Tag>
                );
            }
            case "listitem": {
                return (
                    <li key={index} className="mb-1 leading-relaxed text-light-200">
                        <Text asChild variant="p2"><span>{serializedChildren}</span></Text>
                    </li>
                );
            }
            case "quote": {
                return (
                    <blockquote key={index} className="border-l-4 border-primary-500 pl-4 italic text-light-400 my-4">
                        {serializedChildren}
                    </blockquote>
                );
            }
            case "link": {
                const fields = node.fields as any;

                return (
                    <Link
                        key={index}
                        href={fields?.url || node.url || ""}
                        target={fields?.newTab ? "_blank" : undefined}
                        className="text-primary-400 hover:text-primary-300 underline decoration-primary-400/30 underline-offset-4 transition-colors"
                    >
                        {serializedChildren}
                    </Link>
                );
            }

            default:
                return (
                    <p key={index}>{serializedChildren}</p>
                );
        }
    });
}
