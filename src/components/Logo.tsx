import Image from "next/image";
import logoWhite from "../../public/logo/yamanawa-white.png";

type LogoProps = {
  /** Rendered width in px. The wordmark is ~18.6:1, so height follows from this. */
  width?: number;
  /** Preload above-the-fold instances (Next 16 replaced `priority` with `preload`). */
  preload?: boolean;
  className?: string;
};

/**
 * The YAMANAWA wordmark. Statically imported so Next can emit width/height and
 * avoid layout shift; the source art is white-on-transparent, which is the only
 * variant the site needs while every surface is black.
 */
export default function Logo({
  width = 176,
  preload = false,
  className = "",
}: LogoProps) {
  return (
    <Image
      src={logoWhite}
      alt="YAMANAWA"
      width={width}
      height={Math.round((width * logoWhite.height) / logoWhite.width)}
      preload={preload}
      sizes={`${width}px`}
      className={className}
    />
  );
}
