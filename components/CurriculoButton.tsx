import { MainButton } from "@/components/ui/MainButton";
import { Download as IconDownload } from "lucide-react";

export default function CurriculoButton() {
  return (
    <a href="/curriculo-lucasneves.pdf" download>
      <MainButton
        variant="primary"
        size="md"
        className="cursor-pointer flex items-center gap-2"
      >
        <IconDownload className="w-4 h-4" />
        Baixar Currículo
      </MainButton>
    </a>
  );
}
