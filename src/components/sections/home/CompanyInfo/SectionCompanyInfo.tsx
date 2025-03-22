import Image from "next/image";
import { Button } from "@/components/ui/button";
import NumbersSection from "./ui/NumbersSection";
import BlahBlahBlah from "./ui/BlahBlahBlah";
export default function SectionCompanyInfo() {
  return (
    <div className="py-16 w-[100%] px-4 h-[50rem] bg-white">
        <BlahBlahBlah />
        <NumbersSection />
    </div>
  );
}
