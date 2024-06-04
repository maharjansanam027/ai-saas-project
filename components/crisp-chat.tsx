"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("c1d0b782-1eec-4db9-9156-6811e6cc7561");
  }, []);

  return null;
};
