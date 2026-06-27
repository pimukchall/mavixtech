"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  action: () => Promise<void>;
  label?: string;
}

export function DeleteButton({ action, label = "this item" }: DeleteButtonProps) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(`Delete ${label}? This cannot be undone.`)) {
          e.preventDefault();
        }
      }}
    >
      <Button
        variant="ghost"
        size="sm"
        type="submit"
        className="h-7 w-7 p-0 text-red-400 hover:text-red-300 hover:bg-red-400/10"
      >
        <Trash2 className="w-3.5 h-3.5" />
      </Button>
    </form>
  );
}
