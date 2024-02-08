"use client";

import { useState } from "react";

import { PlusCircleIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function AddDialog() {
  const [url, setUrl] = useState("");

  const handleAddPost = () => {
    console.log(url);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="flex w-full items-center space-x-2 border-black shadow-sm"
        >
          <PlusCircleIcon size={16} />
          <span className="mt-0.25">Add Post</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-4/5 rounded p-10">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">- Add Post -</DialogTitle>
        </DialogHeader>

        <Input
          placeholder="Enter the link"
          onChange={(e) => setUrl(e.target.value)}
        />
        <Button className="w-full" onClick={() => handleAddPost()}>
          Enter
        </Button>
      </DialogContent>
    </Dialog>
  );
}
