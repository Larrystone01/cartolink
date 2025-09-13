import { ChevronDown } from "lucide-react";
import { featureData } from "@/lib/image";

export default function FeaturesSection() {
  return (
    <section>
      <div className="container mx-auto px-6">
        <div className="features-container">
          <div className="heading flex justify-between">
            <h1>Generate</h1>
            <div className="flex text-blue-700">
              <ChevronDown />
              <span>Show all</span>
            </div>
          </div>
          <div className="features grid grid-cols-4 space-x-5 space-y-2">
            {featureData.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.id} className="flex space-x-3 items-center">
                  <div
                    className={`${item.className} flex h-fit p-5 justify-center items-center rounded-[10px]`}
                  >
                    <Icon color="white" />
                  </div>
                  <div
                    className="name-desc"
                    style={{ color: "var(--foreground)" }}
                  >
                    <h1>
                      {item.id} {""}
                      {item.new && (
                        <span className="bg-blue-700 text-white px-2 rounded-[10px] text-[12px]">
                          {item.new}
                        </span>
                      )}
                    </h1>
                    <p className="text-[10px]">{item.desc}</p>
                  </div>
                  <button className="bg-gray-200 px-2 rounded-[10px] text-[13px] hover:bg-gray-300 cursor-pointer">
                    Open
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
