import ContactForm from "@/components/ContactForm";
import { SocialLinks } from "@/components/ui/SocialLinks";

export default function ContatoPage() {
  return (
    <section>
      <h1 className="text-3xl font-bold mb-4">Entre em Contato</h1>
      <p className="text-gray-200 mb-4">
        Acesse minhas redes sociais ou preencha o formulário abaixo e retornarei
        o mais breve possível.
      </p>

      <SocialLinks />

      <ContactForm />
    </section>
  );
}
