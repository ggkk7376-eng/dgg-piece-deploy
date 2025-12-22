import type { Offer as OfferProps } from "@/payload-types";
import { cn } from "@/lib/utils";

export function Offer({ items }: OfferProps) {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {items?.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col overflow-hidden rounded-xl border border-dark-400 bg-dark-500 transition-colors hover:border-dark-300"
                >
                    {typeof item.image === "object" && item.image?.url && (
                        <div className="relative aspect-video w-full bg-dark-600">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={item.image.url}
                                alt={item.image.alt || item.title || ""}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    )}
                    <div className="flex flex-1 flex-col gap-3 p-5">
                        <div className="flex flex-col gap-1">
                            <h3 className="text-xl font-bold text-light-100">{item.title}</h3>
                            {item.price && (
                                <span className="text-lg font-semibold text-primary-500">
                                    {item.price}
                                </span>
                            )}
                        </div>
                        {item.description && (
                            <p className="text-sm leading-relaxed text-light-400">
                                {item.description}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}
