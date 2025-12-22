// import type { Offer as OfferProps } from "@/payload-types";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function Offer({ items }: any) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items?.map((item: any) => (
                <div
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-xl border border-dark-400 bg-dark-500 transition-colors hover:border-dark-300"
                >
                    <div className="relative aspect-video w-full overflow-hidden bg-dark-400">
                        {typeof item.image === "object" && item.image?.url && (
                            <Image
                                src={item.image.url}
                                alt={item.image.alt || item.title || "Offer image"}
                                fill
                                className="object-cover transition-transform duration-300 hover:scale-105"
                            />
                        )}
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                        <div className="mb-4">
                            <h3 className="mb-2 text-xl font-bold md:text-2xl">{item.title}</h3>
                            {item.description && (
                                <p className="text-muted-foreground">{item.description}</p>
                            )}
                        </div>
                        {item.price && (
                            <div className="mt-auto pt-4 border-t border-dark-400">
                                <span className="text-lg font-semibold text-primary">{item.price}</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
