"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function Post() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);

  const isMutating = isFetching || isPending;

  async function handleChange() {
    setIsFetching(true);
    await fetch(`https://jsonplaceholder.typicode.com/posts/101`, {
      method: "POST",
      body: JSON.stringify({
        id: 1,
        userId: 2,
        title: "test post",
        body: "test body",
      }),
    });
    setIsFetching(false);

    startTransition(() => {
      router.refresh();
    });
  }

  return (
    <>
      <button onClick={handleChange} className="p-3 bg-emerald-700">
        SEND DATA
      </button>
      <p className="bg-slate-600">{isMutating ? "mutating..." : ""}</p>
    </>
  );
}
