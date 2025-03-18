import Link from "next/link";
import { Phone } from "lucide-react";

export default function SectionPrimaryNavigationBar() {
  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
        <div className="flex space-x-6">
          <Link href="#" className="font-medium">
            Particulier
          </Link>
          <Link href="#" className="text-muted-foreground">
            Entreprise
          </Link>
        </div>
        <div className="hidden md:flex space-x-6">
          <Link href="#" className="text-muted-foreground">
            Guides
          </Link>
          <Link href="#" className="text-muted-foreground">
            Qui sommes nous ?
          </Link>
          <Link href="#" className="text-muted-foreground">
            Carrières
          </Link>
          <Link href="#" className="text-muted-foreground">
            Nous contacter
          </Link>
        </div>
        <div className="flex items-center">
          <Link
            href="tel:0805543056"
            className="flex items-center text-green-600 font-medium"
          >
            <Phone className="h-4 w-4 mr-1" />
            <span className="hidden sm:inline">N° VERT</span> 0 805 54 30 56
          </Link>
        </div>
      </div>
    </div>
  );
}
