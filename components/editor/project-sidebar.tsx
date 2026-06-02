"use client";

import { X, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface ProjectSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectSidebar({ isOpen, onClose }: ProjectSidebarProps) {
  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 flex h-full w-72 flex-col border-r border-border-default bg-bg-surface transition-transform duration-200 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex h-12 shrink-0 items-center justify-between border-b border-border-default px-4">
          <h2 className="text-sm font-semibold text-text-primary">Projects</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="h-7 w-7 text-text-muted hover:text-text-primary"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs content area */}
        <Tabs defaultValue="my-projects" className="flex flex-1 flex-col overflow-hidden">
          <div className="px-3 pt-3">
            <TabsList className="w-full">
              <TabsTrigger value="my-projects" className="flex-1">
                My Projects
              </TabsTrigger>
              <TabsTrigger value="shared" className="flex-1">
                Shared
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="my-projects" className="flex-1 overflow-hidden">
            <ScrollArea className="h-full px-3 py-4">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-sm text-text-muted">No projects yet</p>
                <p className="mt-1 text-xs text-text-faint">
                  Create your first project to get started
                </p>
              </div>
            </ScrollArea>
          </TabsContent>

          <TabsContent value="shared" className="flex-1 overflow-hidden">
            <ScrollArea className="h-full px-3 py-4">
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <p className="text-sm text-text-muted">No shared projects</p>
                <p className="mt-1 text-xs text-text-faint">
                  Projects shared with you will appear here
                </p>
              </div>
            </ScrollArea>
          </TabsContent>
        </Tabs>

        {/* Footer with New Project button */}
        <div className="shrink-0 border-t border-border-default p-3">
          <Button className="w-full" size="sm">
            <Plus className="mr-2 h-4 w-4" />
            New Project
          </Button>
        </div>
      </aside>
    </>
  );
}
