
export default function ServicesList({serviceList}) {
  return <>
  <div className="space-y-2 mt-2">
          {serviceList.map((s, i) => (
            <div key={i} className="flex items-start gap-3 text-sm">
              <div className="text-xl text-[#d8b07c] flex-shrink-0 mt-1">
                {s.icon}
              </div>
              <div>
                
                <div className="text-gray-500">{s.title}{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
  </>
}
