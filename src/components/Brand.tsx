import Image from "next/image";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand-compact" : ""}`}>
      <span className="brand-logo-frame">
        <Image
          className="brand-logo"
          src="/logo.png"
          alt="Tax Innovation"
          width={500}
          height={500}
          unoptimized
        />
      </span>
    </span>
  );
}
