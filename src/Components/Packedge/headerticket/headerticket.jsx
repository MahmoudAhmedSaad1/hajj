import { HiOutlineTicket } from "react-icons/hi";

export default function Headerticket({heading,pharagraph}) {
  return <>
  <div className="flex items-start gap-2">
            <div className="text-xl text-[#26508D]">
              <HiOutlineTicket />
            </div>
            <div>
              <div className="font-semibold text-[#26508D]"><h1>{heading}</h1></div>
              <div className="text-xs text-gray-500">
                <p>{pharagraph}</p>
              </div>
            </div>
          </div>
  </>
}
