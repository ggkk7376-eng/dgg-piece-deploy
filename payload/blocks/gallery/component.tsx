// // import type { Gallery as GalleryProps } from "@/payload-types";
import { cn } from "@/lib/utils";
import Image from "next/image";

// Using 'any' for props temporarily to avoid build errors before types are regenerated
export function Gallery({ items }: any) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items?.map((item: any, index: number) => {
                if (typeof item.image !== "object" || !item.image?.url) return null;

                return (
                    <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
                        <Image
                            src={item.image.url}
                            alt={item.image.alt || "Gallery image"}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                );
            })}
        </div>
    );
}
