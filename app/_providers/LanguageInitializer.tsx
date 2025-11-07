"use client";

import { useEffect } from "react";
import { useLang } from "@/contexts/language/LanguageContext";

export default function LanguageInitializer() {
  const { lang } = useLang();

  useEffect(() => {
    // Cập nhật thuộc tính lang của thẻ html
    document.documentElement.lang = lang;
  }, [lang]);

  return null;
}