"use client";

import { useEffect } from "react";


export default function PrelineInit() {
  useEffect(() => {
    import("preline/preline").then(() => {
    // Preline 初始化在这里执行（仅客户端）
  } );
  }, []);
  return null;
}
