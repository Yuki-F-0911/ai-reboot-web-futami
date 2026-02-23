import type { ReactNode } from "react";
import { ShieldAlert } from "lucide-react";

type AlertBlockProps = {
  children: ReactNode;
};

export default function AlertBlock({ children }: AlertBlockProps) {
  return (
    <div className="flex gap-3 rounded-xl border border-amber-200 bg-amber-50 p-4">
      <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
      <p className="text-sm leading-relaxed text-amber-800">{children}</p>
    </div>
  );
}
