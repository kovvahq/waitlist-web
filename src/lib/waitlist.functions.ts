import { createServerFn } from "@tanstack/react-start";
import { waitlistSchema } from "./waitlist.schema";
import { appendWaitlistRow } from "./waitlist.server";

export const joinWaitlist = createServerFn({ method: "POST" })
  .validator((input: unknown) => waitlistSchema.parse(input))
  .handler(async ({ data }) => {
    return appendWaitlistRow(data);
  });
