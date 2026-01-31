import { z } from 'zod';

export const organizationSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  businessNumber: z.string().min(5),
  createdAt: z.string(),
});
