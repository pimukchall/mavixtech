import { prisma } from "@/lib/prisma";
import { markContactRead } from "../actions";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Mail, MailOpen } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ContactsPage() {
  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  const unread = contacts.filter((c) => !c.read).length;

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold mb-1">Contact Messages</h1>
          <p className="text-muted-foreground text-sm">
            {contacts.length} message{contacts.length !== 1 ? "s" : ""} total
            {unread > 0 && (
              <span className="ml-2 text-primary font-semibold">({unread} unread)</span>
            )}
          </p>
        </div>
      </div>

      {contacts.length === 0 ? (
        <div className="text-center py-20 text-muted-foreground border border-dashed border-border rounded-xl">
          <Mail className="w-12 h-12 mx-auto mb-3 opacity-30" />
          <p>No messages yet</p>
        </div>
      ) : (
        <div className="space-y-3">
          {contacts.map((c) => (
            <div
              key={c.id}
              className={`rounded-xl border p-5 transition-colors ${
                c.read
                  ? "border-border bg-card/40"
                  : "border-primary/30 bg-primary/5"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-semibold">{c.name}</span>
                    {!c.read && (
                      <Badge className="bg-primary text-primary-foreground text-xs">New</Badge>
                    )}
                    <span className="text-xs text-muted-foreground">
                      {new Date(c.createdAt).toLocaleString("en-US")}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-sm text-muted-foreground mb-3">
                    <a href={`mailto:${c.email}`} className="hover:text-foreground transition-colors">
                      {c.email}
                    </a>
                    {c.phone && (
                      <a href={`tel:${c.phone}`} className="hover:text-foreground transition-colors">
                        {c.phone}
                      </a>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{c.message}</p>
                </div>
                {!c.read && (
                  <form action={markContactRead.bind(null, c.id)} className="shrink-0">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground gap-1.5">
                      <MailOpen className="w-4 h-4" />
                      <span className="text-xs">Mark as read</span>
                    </Button>
                  </form>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
