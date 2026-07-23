import type { CSSProperties, ReactNode } from "react";

// The "◈ ACCENT-LINE  Section Name" mono-uppercase label repeated at the top
// of nearly every section across the site — was a duplicated 4-line JSX
// fragment in every page; centralized here so it only needs to change once.
export default function SectionLabel({
  children,
  centered = false,
  style,
}: {
  children: ReactNode;
  centered?: boolean;
  style?: CSSProperties;
}) {
  return (
    <p className="section-label" style={{ justifyContent: centered ? "center" : undefined, ...style }}>
      <span className="accent-line" />
      {children}
      {centered && <span className="accent-line" />}
    </p>
  );
}
