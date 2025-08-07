
export default function Addsondesignheaderstepgray({heading,pharagraph}) {
  return <>
<div className="p-2 w-full sm:w-1/2 md:w-1/4">
      <div className="h-1 bg-[#9FAEBC] mb-3" />
      <h2 className="text-xl font-bold text-[#053E66]">{heading}</h2>
      <p className="text-sm text-[#9FAEBC] mt-1">{pharagraph}</p>
    </div>
  </>
}
