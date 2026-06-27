"use client";

import { Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DeleteButtonProps {
  action: () => Promise<void>;
  label?: string;
}

export function DeleteButton({ action, label = "รายการนี้" }: DeleteButtonProps) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(`ยืนยันการลบ${label}? ไม่สามารถกู้คืนได้`)) {
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
