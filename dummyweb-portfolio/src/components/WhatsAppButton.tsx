import { Phone } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/923334004249?text=${encodeURIComponent("Hi Irfan Shaukat, I just checked out your portfolio and wanted to connect with you regarding a data analysis requirement. Let's chat!")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/20 transition-all hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/30"
    >
      <Phone size={24} />
    </a>
  );
}
