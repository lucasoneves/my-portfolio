// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full py-6 px-8 text-center text-sm text-gray-600 mt-12">
      © {new Date().getFullYear()} Seu Nome. Todos os direitos reservados.
    </footer>
  );
}
