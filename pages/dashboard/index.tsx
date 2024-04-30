
import React from "react"
import { Separator } from "../../@/components/ui/separator"
import Link from "next/link"


export default function Home() {

  return (
    <div className="w-full h-full flex flex-col justify-center items-center ">
          <div>
      <div className="space-y-1">
        <h1 className="text-sm font-medium leading-none">Portefolio BackEnd</h1>
        <h2 className="text-sm text-muted-foreground">
          Made with MangoDB.
        </h2>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm max-[970px]:flex-col">
        <div><Link
            href="/dashboard/ProjetCreate"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >Create Portefolio Projet </Link></div>
        <Separator orientation="vertical" />
        <div><Link
            href="/dashboard/ProjetUpdate"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank">Update Portefolio Projet</Link></div>
        <Separator orientation="vertical" />
        <div><Link
            href="/dashboard/ProjetDelete"
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >Delete Portefolio Projet </Link></div>
      </div>
    </div>

  </div>
  );
}
