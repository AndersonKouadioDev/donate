"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useLocale, I18nProvider } from "@react-aria/i18n";
import { useRouter } from "next/navigation";

export interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({
  children,
}: ProvidersProps) {
  const router = useRouter();
  let { locale, direction } = useLocale();

  return (
    <NextUIProvider navigate={router.push}>
        <I18nProvider locale={locale}>
          <div dir={direction} lang={locale}>
            {children}
          </div>
        </I18nProvider>
    </NextUIProvider>
  );
}
