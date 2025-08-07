import { IoCloudUploadOutline } from "react-icons/io5";
export default function Completeinformatiomuploadphotos({heading,pharagraph}) {
  return <>
   <div className="flex-1">
              <label className="block text-sm font-bold text-[#003E71] mb-2">{heading}</label>
              <label className="relative h-40 w-full border-2 border border-gray-300 rounded-lg bg-[#F9FAFB] flex flex-col justify-center items-center cursor-pointer hover:border-gray-400">
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <IoCloudUploadOutline  className="text-gray-400 text-2xl mb-2" />
                <p className="text-sm text-[#185686]">Click to upload <span className="text-gray-500">or drag and drop</span></p>
                <p className="text-xs text-[#6B6C6F] mt-1">{pharagraph}</p>
              </label>
            </div>

  </>
}
