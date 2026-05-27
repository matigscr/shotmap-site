"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type DownloadThenTrialLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  href?: string;
  trialHref?: string;
};

export function DownloadThenTrialLink({
  children,
  href = "/download/mac-app",
  trialHref = "/trial",
  onClick,
  ...props
}: DownloadThenTrialLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    window.setTimeout(() => {
      window.location.assign(trialHref);
    }, 650);
  }

  return (
    <a href={href} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
