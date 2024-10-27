import { nprogress } from "@mantine/nprogress";
import { usePathname, useSearchParams } from "next/navigation";
import { Suspense, useEffect } from "react";

function ProgressCompleteChild() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => nprogress.complete(), [pathname, searchParams]);
  return null;
}

export function ProgressComplete() {
  return (
    <Suspense>
      <ProgressCompleteChild />
    </Suspense>
  );
}
