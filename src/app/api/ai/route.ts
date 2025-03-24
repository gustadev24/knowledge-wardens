import { auth } from '@/auth';
import { API_KEY, RESOURCE_NAME } from '@/config';
import { createAzure } from '@ai-sdk/azure';
import { generateText } from 'ai';

const az = createAzure({
  resourceName: RESOURCE_NAME,
  apiKey: API_KEY,
});

const model = az('gpt-35-turbo');

export async function GET(res: Request) {
  const session = await auth();

  if (!session?.user) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const url = new URL(res.url);
  const prompt = url.searchParams.get('prompt');

  if (!prompt) {
    return Response.json({ error: 'No prompt provided' }, { status: 400 });
  }

  const { text } = await generateText({
    model,
    prompt,
  });

  return Response.json({ chat: text });
}
