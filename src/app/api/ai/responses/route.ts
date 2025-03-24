import { MISTRAL_API_KEY } from '@/config';
// import { createAzure } from '@ai-sdk/azure';
import { generateObject } from 'ai';
import { createMistral } from '@ai-sdk/mistral';
// import { getServerSession } from 'next-auth';
// import { authConfig } from '@/app/api/auth/[...nextauth]/authConfig';

import { z } from 'zod';

export const maxDuration = 30;

// const az = createAzure({
//   resourceName: RESOURCE_NAME,
//   apiKey: API_KEY,
// });

// const model = az('gpt-4o');

const mi = createMistral({
  apiKey: MISTRAL_API_KEY,
});

const model = mi('mistral-large-latest');

export async function POST(res: Request) {
  // const session = await getServerSession(authConfig);

  // if (!session) {
  //   return Response.json({ error: 'Unauthorized' }, { status: 401 });
  // }

  const formData = await res.formData();

  const unsafeRequest = {
    questions: formData.get('questions')?.toString().split('^^^'),
    answers: formData.get('answers')?.toString().split('^^^'),
  };

  console.log(unsafeRequest);

  const request = z.object({
    questions: z.array(z.string()).length(unsafeRequest.answers?.length || 0),
    answers: z.array(z.string()).length(unsafeRequest.answers?.length || 0),
  });

  const validatedRequest = request.safeParse(unsafeRequest);

  if (!validatedRequest.success) {
    return Response.json({ error: validatedRequest.error }, { status: 400 });
  }

  const response = await generateObject({
    model,
    schema: z.object({
      results: z.array(z.number().min(0).max(1).describe('1 if the answer is correct and 0 if the answer is incorrect.')),
      correct: z.array(z.string().describe('The ideal answer for each question. Please provide an answer in plain text using between 20 and 30 words.')),
    }),
    system: 'This is a game where the goal is to learn about programming. Try to give it a medieval game tone. You will receive an array of questions and another of answers, of the same length, the answer 0 belongs to question 0 and so on with the others, you must check if the answer is correct for its respective question. You will answer in the array of numbers "results", 1 if the answer is correct and 0 if the answer is incorrect important: Do not correct spelling mistakes, so on for each question. In addition, you will answer "correct" with an array of strings, about the ideal answer for each question and responde why is bad answer. Answer in Spanish.',
    prompt: JSON.stringify(validatedRequest.data),
  });

  return Response.json(response.object);
}
