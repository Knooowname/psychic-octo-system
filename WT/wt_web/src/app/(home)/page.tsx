import { Executor } from "@/components/Executor/Executor";

export default function Home() {

  return (
      <div className="min-h-screen h-auto font-[family-name:var(--font-geist-sans)] overflow-hidden">
        <main className="flex items-start w-screen h-100">
          <Executor />
        </main>
      </div>
  );
}
