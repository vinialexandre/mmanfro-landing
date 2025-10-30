export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[var(--accent)] to-white">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-[var(--primary)] font-perpetua text-xl">Carregando...</p>
      </div>
    </div>
  );
}

