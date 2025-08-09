'use client'

export default function LeftMenuBtn({
  children,
  iconTag,
  onClick
}: {
  children: React.ReactNode;
  iconTag: string,
  onClick?: ()=>void
}) {
    return (
      <>
      <button className="block w-10 h-10 cursor-pointer bg-transparent" onClick={onClick}>
        {children}
      </button>
      <span className="text-[14px] text-gray-200 w-30">{iconTag}</span>  
      </>
    )
}