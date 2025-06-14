import React from "react";

import { Button } from "@repo/ui/components/button";
import { Input } from "@repo/ui/components/input";
import { cn } from "@repo/ui/lib/utils";
import { ImagesIcon, SearchIcon, SortAsc, UploadIcon } from "lucide-react";
import type { ActiveTab } from "../gallery-view";

type Props = {
  currentTab: ActiveTab;
  setCurrentTab: React.Dispatch<React.SetStateAction<ActiveTab>>;
};

export function GalleryTabBar({ currentTab, setCurrentTab }: Props) {
  return (
    <nav className="border-y border-secondary/90 flex items-center justify-between bg-transparent w-full h-12">
      <div className="flex items-center gap-3 h-full">
        {/* Upload selector */}
        <Button
          variant={"ghost"}
          className={cn(
            `px-4 h-full rounded-none hover:bg-secondary/30 cursor-pointer`,
            currentTab === "upload" && "border-b-2 border-primary"
          )}
          onClick={() => setCurrentTab("upload")}
        >
          <span
            className={`${
              currentTab === "upload" ? "text-primary" : "text-primary/60"
            } flex items-center gap-3`}
          >
            <UploadIcon className="size-4" />
            Upload Files
          </span>
        </Button>

        {/* Library selector */}
        <Button
          variant={"ghost"}
          className={cn(
            `px-4 h-full rounded-none hover:bg-secondary/30 cursor-pointer`,
            currentTab === "library" && "border-b-2 border-primary"
          )}
          onClick={() => setCurrentTab("library")}
        >
          <span
            className={`${
              currentTab === "library" ? "text-primary" : "text-primary/60"
            } flex items-center gap-3`}
          >
            <ImagesIcon className="size-4" />
            Media Library
          </span>
        </Button>
      </div>

      {currentTab === "library" && (
        <div className="flex items-center gap-2 h-full">
          <Button
            variant={"ghost"}
            size={"sm"}
            className="rounded-xs border-r hover:bg-secondary/30"
          >
            <SortAsc className="size-4 text-primary/60" />
          </Button>

          <div className="h-full w-fit flex items-center">
            <div className="h-full w-fit px-1 flex items-center justify-center">
              <SearchIcon className="size-4 text-primary/60" />
            </div>
            <Input
              className="border-none shadow-none h-full focus-visible:ring-transparent"
              placeholder="Type file name to search"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
