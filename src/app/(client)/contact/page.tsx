import ContactForm from "@/components/pages/contact/ContactForm";
import GoogleMap from "@/components/pages/contact/GoogleMap";

export default function Page() {
  return (
    <div className="min-h-screen overflow-clip w-[100%] text-black flex flex-col">
      <ContactForm />;
      <GoogleMap />
    </div>
  );
}
