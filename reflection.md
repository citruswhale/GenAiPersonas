# Reflection — Scaler Persona Chatbot

## What Worked

Building this chatbot made the difference between vague and specific prompts very clear to me. My initial prompts were along the lines of “you are a tech leader who values education,” and the output was exactly what you would expect. Every persona gave similar answers that sounded polished but generic. The real shift happened when I added concrete details. For example, including Anshuman’s IIT Bombay background, his focus on data, and his journey from InterviewBit to Scaler made the responses feel much more real. Once the prompt described an actual person instead of a role, the outputs started matching that personality.

Another thing I noticed was how important few-shot examples are. The description tells the model what the persona believes, but the examples show how those beliefs appear in actual answers. When I gave Abhimanyu examples that included structured explanations and time complexity, the model started following that pattern even for new questions. It felt like the examples defined the tone and structure more strongly than the description.

Adding chain-of-thought instructions like “before answering, think through…” also improved the quality of answers. Without it, the model often gave surface-level responses. With it, the answers were more aligned with what the question was actually asking.

## What the GIGO Principle Taught Me

GIGO is easy to say but harder to apply properly. My first version of Kshitij’s prompt just said “be a friendly teacher,” and the responses were friendly but not very useful. They were mostly generic motivational lines. When I changed the prompt to include specific teaching strategies like building on what the student already knows, using analogies, and not giving direct LeetCode answers, the output became much more helpful.

The same thing happened with constraints. Saying “be accurate” did not really change anything. But when I added specific instructions like “do not fabricate statistics and use qualitative statements instead,” the responses actually changed. This showed me that clear and specific instructions matter much more than vague ones. Prompting is less about fancy wording and more about being precise about what you want.

## What I Would Improve

There are a couple of things I would improve. First, each message is currently handled on its own, so in longer conversations the responses can drift. A better version would include a running summary of previous messages in the system prompt to maintain context.

Second, evaluating whether a persona is accurate is mostly subjective right now. A stronger approach would be to use another model to evaluate responses and check if they match the expected persona traits.

I would also spend more time researching the personas themselves. Watching their talks and reading their posts would help capture the way they actually speak. That level of detail would make the personas feel more realistic instead of just well-structured.