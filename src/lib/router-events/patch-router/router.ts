import { nprogress } from "@mantine/nprogress";
import { useRouter as useRouterOriginal } from "next/navigation";
import { shouldTriggerStartEvent } from "./should-trigger-start-event";

export function useRouter(): ReturnType<typeof useRouterOriginal> {
  const router = useRouterOriginal();
  return {
    ...router,
    push: (href, options) => {
      if (shouldTriggerStartEvent(href)) nprogress.start();
      router.push(href, options);
    },
    replace: (href, options) => {
      if (shouldTriggerStartEvent(href)) nprogress.start();
      router.replace(href, options);
    },
  };
}
