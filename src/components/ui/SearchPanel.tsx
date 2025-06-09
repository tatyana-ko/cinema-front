import { Search } from "lucide-react";

export function SearchPanel() {
  return (
    <>
      <div
        className="fixed inset-0 bg-[#0a0a0a] opacity-70 z-10"
      />
      <div
        role="dialog"
        aria-label="search field"
        className="fixed top-[25%] left-[50%] -translate-x-[50%] flex items-center gap-10 px-4 py-1 
      rounded-2xl shadow-2xl border border-slate-700 bg-[#0a0a0a] z-500"
      >
        <input
          type="text"
          placeholder="What are you searching for?"
          autoComplete="off"
          autoCorrect="off"
          className="px-5 py-3 w-[440px]"
        />
        <button>
          <Search />
        </button>
      </div>
    </>
  )
}
