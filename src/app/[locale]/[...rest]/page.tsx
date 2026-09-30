import { notFound } from "next/navigation";

/** Unmatched URLs under a locale render that locale's not-found page inside its layout. */
export default function UnmatchedRoute() {
  notFound();
}
