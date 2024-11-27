"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center space-y-8">
        <h1 className="text-4xl font-bold tracking-tight">Minimal Design</h1>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="rounded-full">
              Open Modal
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Elegant Modal</DialogTitle>
              <DialogDescription>
                A simple and clean modal design following minimalist principles.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-muted-foreground">
                This is an example of a minimal modal design that maintains elegance and functionality.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
