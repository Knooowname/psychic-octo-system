'use client'

import { Author } from "@/components/Author/Author"


export default function page() {

    return (
        <div className="min-h-screen h-auto font-[family-name:var(--font-geist-sans)] overflow-hidden">
            <main className="flex items-start w-screen h-100">
              <Author />
            </main>
        </div>
    )
}
