// import type { Download as DownloadProps } from "@/payload-types";
import { cn } from "@/lib/utils";
import { FileDown } from "lucide-react";


export const Download: React.FC<any> = ({ files }) => {
    return (
        <div className="flex flex-col gap-3">
            {files?.map((item: any) => {
                const fileUrl = typeof item.file === "object" ? item.file?.url : null;
                if (!fileUrl) return null;

                return (
                    <a
                        key={item.id}
                        href={fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-4 rounded-xl border border-dark-400 bg-dark-500 p-4 transition-all hover:border-primary-500/50 hover:bg-dark-400"
                    >
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-500/10 text-primary-500 transition-colors group-hover:bg-primary-500/20">
                            <FileDown size={24} />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold text-light-200 group-hover:text-light-100">
                                {item.label || "Pobierz plik"}
                            </span>
                            <span className="text-xs text-light-500">
                                Kliknij, aby pobrać
                            </span>
                        </div>
                    </a>
                );
            })}
        </div>
    );
}
