/**
 * An inline <script> that runs during HTML parsing on hard loads and is
 * inert once React owns the page — the pattern from Next's "preventing
 * flash before hydration" guide (text/plain on the client avoids React's
 * dev warning about rendering script tags).
 */
export default function InlineScript({ html }: { html: string }) {
  return (
    <script
      type={typeof window === "undefined" ? "text/javascript" : "text/plain"}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
