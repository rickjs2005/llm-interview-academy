# Banco de perguntas: LLM Interview Academy

Todas as perguntas são **simuladas**, escritas para treino, com base nas competências pedidas em vagas de AI training e LLM evaluation. Nenhuma foi atribuída a uma empresa específica. Para formatos de seleção documentados publicamente, veja `content/RESEARCH.md`.

Níveis: 1 Beginner · 2 Intermediate · 3 Professional · 4 Real interview. Cada pergunta tem respostas modelo em três níveis de inglês.

## Módulo 1: Fundamentos (Foundations)

### 1. What is artificial intelligence?
*O que é inteligência artificial?* · nível 1 · concept

- **Básico:** AI is when computers do tasks that need human intelligence. They learn from data.
- **Intermediário:** Artificial intelligence is a field of computer science that builds systems that can do tasks that usually need human intelligence, like understanding language or recognizing images. Most modern AI learns these skills from data.
- **Profissional:** Artificial intelligence is the field of building computer systems that can perform tasks we normally associate with human intelligence, like understanding language, recognizing images, or making decisions. Most modern AI isn't programmed rule by rule. Instead, it learns statistical patterns from large amounts of data. Large language models are one example of this approach.
- **Dica:** Mencione 'tarefas que exigem inteligência humana' e 'aprende com dados'. Dar um exemplo concreto (tradução, chatbot) mostra segurança.
- **Follow-up:** Can you give me an example of AI that you use every day?

### 2. What is the difference between narrow AI and general AI?
*Qual é a diferença entre IA estreita e IA geral?* · nível 2 · concept

- **Básico:** Narrow AI does one specific task. General AI could do any task like a human, but it doesn't exist yet.
- **Intermediário:** Narrow AI is built for a specific task, like a spam filter or a translation tool. General AI, or AGI, is the idea of a system that can do any intellectual task a human can do. All the AI we use today is still considered narrow, or at least not true AGI.
- **Profissional:** Narrow AI is designed to do a specific task or a limited set of tasks, like detecting spam, recommending videos, or translating text. General AI, often called AGI, refers to a hypothetical system that could learn and perform any intellectual task a human can. Modern LLMs are much more general than older systems, because they can write, code, and summarize, but they still have clear limitations, so most people don't consider them true AGI.
- **Dica:** Não diga que os LLMs já são AGI. Uma resposta equilibrada (são amplos, mas têm limitações) soa mais profissional.
- **Follow-up:** Do you think large language models are closer to narrow AI or general AI? Why?

### 3. Why are you interested in working with AI, especially in AI training or evaluation?
*Por que você tem interesse em trabalhar com IA, especialmente em treinamento ou avaliação de IA?* · nível 3 · intro

- **Básico:** I'm a web developer and I love AI. I want to help make AI models better.
- **Intermediário:** I'm a web developer and I use AI tools every day in my work. I'm interested in AI training because I want to help improve the quality of these models. My coding experience helps me check if the answers are correct.
- **Profissional:** I work as a web developer with React, Next.js, and TypeScript, and I use AI coding tools almost every day. I've seen how useful they are, but also how they sometimes make mistakes. That's why AI evaluation interests me: careful human feedback is one of the main ways these models get better. I think my coding background lets me judge technical answers accurately and explain clearly why one response is better than another.
- **Dica:** Conecte sua experiência real (React, Next.js, TypeScript) com a vaga. Mostre que você entende que o feedback humano melhora os modelos.
- **Follow-up:** What is one mistake you have seen an AI tool make in your own work?

### 4. What is machine learning?
*O que é machine learning?* · nível 1 · concept

- **Básico:** Machine learning is when a computer learns from data. It finds patterns and makes predictions.
- **Intermediário:** Machine learning is a part of AI where a computer learns from examples instead of following rules written by a programmer. It finds patterns in data and uses them to make predictions.
- **Profissional:** Machine learning is a branch of AI where a model learns patterns from data instead of being explicitly programmed with rules. During training, the algorithm adjusts its parameters to reduce errors on examples. After that, it can make predictions on new data it hasn't seen before, like classifying emails or predicting prices.
- **Dica:** O ponto-chave é o contraste: aprender com dados vs. regras escritas à mão.
- **Follow-up:** Can you give an example of a machine learning problem?

### 5. What is the difference between machine learning and deep learning?
*Qual é a diferença entre machine learning e deep learning?* · nível 2 · concept

- **Básico:** Deep learning is a type of machine learning. It uses neural networks with many layers.
- **Intermediário:** Deep learning is a subset of machine learning. It uses neural networks with many layers, and it can learn complex features directly from raw data like images or text. It usually needs more data and more computing power.
- **Profissional:** Deep learning is a subset of machine learning that uses neural networks with many layers. Classic machine learning often depends on features that humans design, while deep learning can learn useful features directly from raw data like pixels or text. The trade-off is that deep learning usually needs much more data and GPU power. Large language models are a good example of deep learning.
- **Dica:** Use a palavra 'subset'. Mencionar que LLMs são deep learning conecta com a vaga.
- **Follow-up:** Why does deep learning need so much computing power?

### 6. What is a neural network, in simple terms?
*O que é uma rede neural, em termos simples?* · nível 3 · concept

- **Básico:** A neural network is a model with layers of neurons. It learns by changing its weights.
- **Intermediário:** A neural network is a model made of layers of small units called neurons. Each connection has a weight, and during training the network adjusts these weights so its outputs get closer to the right answers.
- **Profissional:** A neural network is a model loosely inspired by the brain. It has layers of simple units, or neurons, and each connection between them has a weight, which is just a number. Input data goes through the layers, and the network produces an output. During training, an algorithm called backpropagation adjusts the weights to reduce the error. Modern LLMs are huge neural networks with billions of these parameters.
- **Dica:** Não precisa de matemática. Camadas + pesos + ajuste no treinamento já é uma ótima resposta.
- **Follow-up:** What do we mean when we say a model has billions of parameters?

### 7. What is a large language model?
*O que é um modelo de linguagem grande (LLM)?* · nível 1 · concept

- **Básico:** An LLM is an AI model trained on a lot of text. It can understand and write text.
- **Intermediário:** A large language model is a deep learning model trained on a huge amount of text. It learns patterns in language, so it can answer questions, summarize, translate, and write code.
- **Profissional:** A large language model is a deep learning model, usually based on the transformer architecture, trained on a massive amount of text like books, websites, and code. It has billions of parameters and learns statistical patterns in language. Because of that, it can generate fluent text and do many tasks from a simple prompt, like answering questions, summarizing, or writing code. Examples are GPT, Claude, Gemini, and Llama.
- **Dica:** Diga 'trained on a huge amount of text' e cite exemplos. Isso mostra que você conhece o mercado.
- **Follow-up:** Why do we call it large?

### 8. What are some common uses of LLMs?
*Quais são alguns usos comuns dos LLMs?* · nível 2 · concept

- **Básico:** People use LLMs to write code, answer questions, and summarize text.
- **Intermediário:** LLMs are used for many things: writing and explaining code, answering questions in chatbots, summarizing long documents, and translating text. Companies also use them for customer support.
- **Profissional:** Some of the most common uses are coding assistants that write, explain, and review code, chat assistants that answer questions, and tools that summarize or translate long documents. Companies also use LLMs for customer support, extracting information from documents, and classifying text. More recently, LLMs are used as agents that can call tools and complete multi-step tasks.
- **Dica:** Cite pelo menos três usos. Como dev, comece por código: é sua área forte.
- **Follow-up:** How do you use LLMs in your own work as a developer?

### 9. Imagine a friend with no technical background asks you how ChatGPT works. How would you explain it?
*Imagine que um amigo sem conhecimento técnico pergunta como o ChatGPT funciona. Como você explicaria?* · nível 4 · scenario

- **Básico:** I would say it read a lot of text and learned patterns. It guesses the next word again and again. Sometimes it makes mistakes.
- **Intermediário:** I'd say ChatGPT learned from a huge amount of text from books and the internet. When you ask something, it predicts the next word, then the next one, again and again, until it builds an answer. It's very good, but it can make mistakes, so you should check important information.
- **Profissional:** I'd keep it simple. I'd say ChatGPT read a huge amount of text, like books, websites, and code, and learned the patterns of how people write. When you ask a question, it writes the answer one small piece at a time, always predicting what should come next. After that first training, people gave it feedback on good and bad answers, so it learned to be more helpful and polite. But it doesn't truly understand like a person, so it can sound confident and still be wrong. That's why you should double-check important facts.
- **Dica:** Questão de comunicação: o entrevistador avalia clareza. Use uma ordem lógica: aprendeu com texto, prevê o próximo pedaço, feedback humano, limitações.
- **Follow-up:** Why can a model sound confident even when it is wrong?

### 10. How does a language model generate text?
*Como um modelo de linguagem gera texto?* · nível 1 · concept

- **Básico:** It predicts the next word, one by one, until the answer is complete.
- **Intermediário:** A language model predicts the next token based on the text before it. Then it adds that token and predicts the next one again. It repeats this until the answer is done.
- **Profissional:** A language model generates text by predicting the next token. It looks at the prompt and everything it has written so far, calculates a probability for every token in its vocabulary, and picks one. Then it adds that token to the text and repeats the process. This is called autoregressive generation, and it continues until the model produces a stop token or reaches a length limit.
- **Dica:** A expressão de ouro é 'predicts the next token'. Se puder, diga 'one token at a time'.
- **Follow-up:** How does the model decide when to stop?

### 11. What does 'next-token prediction' mean during training?
*O que significa 'previsão do próximo token' durante o treinamento?* · nível 2 · concept

- **Básico:** The model reads text and tries to guess the next word. When it is wrong, it changes its weights.
- **Intermediário:** During training, the model sees real text and tries to predict each next token. We compare its guess with the real token, and if it's wrong, we adjust the model's weights a little. After billions of examples, it becomes very good at it.
- **Profissional:** In training, we take real text and, at every position, ask the model to predict the next token. We compare its predicted probabilities with the actual token using a loss function, usually cross-entropy. Then backpropagation updates the weights to make the correct token more likely next time. The nice thing is that it's self-supervised: the text itself provides the labels, so we can train on huge amounts of data without human labeling.
- **Dica:** Mencionar 'self-supervised' (o próprio texto fornece a resposta) impressiona e é correto.
- **Follow-up:** Why don't we need humans to label the data for this?

### 12. If an LLM only predicts the next token, how can it write code or solve problems?
*Se um LLM só prevê o próximo token, como ele consegue escrever código ou resolver problemas?* · nível 3 · concept

- **Básico:** It learned from a huge amount of text and code. To guess the next token well, it needs to learn many patterns.
- **Intermediário:** To predict the next token really well, the model has to learn a lot about grammar, facts, and logic. It saw millions of examples of code, so it learned common patterns. With enough scale, these skills appear, but it can still make mistakes.
- **Profissional:** Predicting the next token sounds simple, but doing it well on a huge and diverse dataset forces the model to learn a lot: syntax, facts, common reasoning steps, and how code is structured. With enough data and parameters, abilities like writing functions or following instructions emerge from that objective. Fine-tuning and RLHF then make these abilities more useful. Still, it's pattern-based, so it can produce code that looks correct but has bugs, which is why human evaluation matters.
- **Dica:** Mostre equilíbrio: a tarefa é simples, mas a escala gera habilidades; ainda assim, erros acontecem. Isso conecta com o trabalho de avaliação.
- **Follow-up:** Can you give an example where an AI wrote code that looked right but had a bug?

### 13. What is a token in a language model?
*O que é um token em um modelo de linguagem?* · nível 1 · concept

- **Básico:** A token is a small piece of text, like a word or part of a word. The model reads tokens.
- **Intermediário:** A token is the basic unit of text that a model processes. It can be a whole word, part of a word, or punctuation. In English, one token is about four characters.
- **Profissional:** A token is the basic unit of text a language model works with. A tokenizer splits text into tokens, which can be whole words, subwords, punctuation, or spaces, and maps each one to a numeric ID. In English, a token is roughly four characters, or about three quarters of a word. Context limits and API pricing are both measured in tokens.
- **Dica:** Diga que token não é sempre uma palavra inteira. Esse é o erro mais comum.
- **Follow-up:** Why do APIs charge by token instead of by word?

### 14. What is tokenization and why does it matter?
*O que é tokenização e por que ela importa?* · nível 2 · concept

- **Básico:** Tokenization splits text into tokens and turns them into numbers. It matters because cost and limits use tokens.
- **Intermediário:** Tokenization is the process of splitting text into tokens and converting each token into a number the model can use. It matters because API costs and context limits are counted in tokens, and some languages need more tokens than English.
- **Profissional:** Tokenization is the step that splits raw text into tokens and maps each one to an ID, usually with a subword method like BPE. It matters for a few reasons. First, cost and context window size are measured in tokens, so a prompt in Portuguese might be more expensive than the same prompt in English. Second, it explains some strange model behaviors, like having trouble counting the letters in a word, because the model sees tokens, not individual letters.
- **Dica:** O exemplo de contar letras (ex.: quantos 'r' em 'strawberry') é ótimo para mostrar entendimento real.
- **Follow-up:** Why might a model struggle to count the letters in a word?

### 15. A user complains that their long prompt in Portuguese is expensive and sometimes gets cut off. How would you explain the problem and what would you suggest?
*Um usuário reclama que seu prompt longo em português é caro e às vezes é cortado. Como você explicaria o problema e o que sugeriria?* · nível 4 · scenario

- **Básico:** The model counts tokens. Portuguese uses more tokens, so it costs more and can pass the limit. I would make the prompt shorter.
- **Intermediário:** I'd explain that cost and limits are measured in tokens, and Portuguese text usually needs more tokens than English. If the prompt plus the answer is bigger than the context window, it gets cut. I'd suggest removing repeated text, summarizing long parts, and checking the token count before sending.
- **Profissional:** First I'd explain that everything is measured in tokens, not words, and Portuguese usually produces more tokens than English for the same content, so the price goes up. The cut-off happens when the prompt plus the expected output goes over the context window or the max output setting. My suggestions would be to remove repeated or unnecessary text, summarize long documents first, send only the relevant parts, and use a tokenizer tool to count tokens before sending. If the output is the part being cut, they can also increase the max tokens setting or ask for a shorter answer.
- **Dica:** Estruture: 1) explique a causa (tokens + contexto), 2) dê soluções práticas. Entrevistadores gostam de respostas organizadas com 'First... Then...'.
- **Follow-up:** What is the difference between the prompt being too long and the answer being cut off?

### 16. What is a context window?
*O que é uma janela de contexto?* · nível 1 · concept

- **Básico:** The context window is the maximum number of tokens the model can see at one time.
- **Intermediário:** The context window is the limit of tokens the model can process at once. It includes the prompt, the conversation history, and the answer the model writes.
- **Profissional:** The context window is the maximum number of tokens a model can take into account at one time. It includes everything: the system prompt, the conversation history, any documents, and the tokens the model generates. Modern models range from about 128 thousand to over a million tokens. Anything outside that window is simply not visible to the model.
- **Dica:** Lembre de dizer que a resposta gerada também conta no limite. Muita gente esquece.
- **Follow-up:** Does the model's own answer count toward the context window?

### 17. What happens when a conversation becomes longer than the context window?
*O que acontece quando uma conversa fica maior que a janela de contexto?* · nível 2 · concept

- **Básico:** The oldest messages are removed. The model forgets them.
- **Intermediário:** Usually the oldest messages are cut or summarized so the conversation fits. The model then forgets that information, so it might ignore earlier instructions. Some APIs just return an error if the input is too long.
- **Profissional:** It depends on the application. Many chat apps drop or summarize the oldest messages so the conversation fits, which means the model loses that information and may forget earlier instructions or details. If you call an API directly with too many tokens, you usually get an error instead. Even before the limit, very long contexts can reduce quality, because models sometimes pay less attention to information in the middle.
- **Dica:** Mostre que conhece os dois comportamentos: o app corta/resume ou a API dá erro.
- **Follow-up:** How could an application keep important information when the conversation gets very long?

### 18. Does an LLM remember previous conversations? Explain.
*Um LLM lembra de conversas anteriores? Explique.* · nível 3 · concept

- **Básico:** No. The model only sees what is in the context window. Some apps save notes and send them again.
- **Intermediário:** By default, no. The model only knows what's in the current context window, and chatting with it doesn't change its weights. Some apps have a memory feature, but it works by saving information and adding it back into the prompt.
- **Profissional:** Not by itself. The model is stateless: each request only includes what's inside the context window, and talking to it doesn't update its weights. When a chat seems to remember things, it's because the app sends the conversation history again with every message. Products with memory features store facts in a database and insert the relevant ones into the prompt later. So the memory lives in the application, not in the model.
- **Dica:** A palavra 'stateless' é ótima aqui. Explique que a memória é do aplicativo, não do modelo.
- **Follow-up:** As a developer, how would you build a simple memory feature for a chatbot?

### 19. What is inference?
*O que é inferência?* · nível 1 · concept

- **Básico:** Inference is when we use a trained model. We send a prompt and get an answer.
- **Intermediário:** Inference is the phase when we use a model that is already trained. You send a prompt, and the model generates a response. The weights don't change during inference.
- **Profissional:** Inference is when a trained model is used to make predictions, which for an LLM means generating a response to a prompt. The model's weights are fixed during inference; it's not learning anything. Every API call or chat message is an inference request, and the cost and speed of inference matter a lot in production.
- **Dica:** Diga claramente que na inferência os pesos não mudam. Isso diferencia de treinamento.
- **Follow-up:** Why is inference speed important for real products?

### 20. What is the difference between training and fine-tuning?
*Qual é a diferença entre treinamento e fine-tuning?* · nível 2 · concept

- **Básico:** Training starts from zero with a lot of data. Fine-tuning takes a trained model and trains it a little more for a specific task.
- **Intermediário:** Training, or pretraining, teaches a model from scratch with a huge dataset, and it's very expensive. Fine-tuning starts from an already trained model and trains it on a smaller, specific dataset to adapt it to a task or style. It's much cheaper and faster.
- **Profissional:** Pretraining builds the model from scratch on a massive general dataset, usually trillions of tokens, and it takes huge GPU clusters for weeks or months. Fine-tuning takes that pretrained model and continues training on a much smaller, focused dataset, for example instruction-response pairs or examples from a specific domain. It reuses the general knowledge from pretraining and changes the behavior or style, so it's far cheaper. Methods like LoRA make it even cheaper by updating only a small number of extra parameters.
- **Dica:** Analogia útil: faculdade vs especialização. Se lembrar, cite LoRA como forma barata de fine-tuning.
- **Follow-up:** When would a company choose fine-tuning instead of just writing a better prompt?

### 21. A company wants their chatbot to answer questions about their internal documents. Should they train a new model, fine-tune one, or do something else? Explain your reasoning.
*Uma empresa quer que seu chatbot responda perguntas sobre documentos internos. Ela deve treinar um modelo novo, fazer fine-tuning ou outra coisa? Explique seu raciocínio.* · nível 4 · scenario

- **Básico:** Training a new model is too expensive. I would use RAG: search the documents and put the right parts in the prompt.
- **Intermediário:** Training a new model from scratch is too expensive and not needed. I'd recommend RAG, retrieval-augmented generation: you search the internal documents for relevant parts and add them to the prompt. Fine-tuning is better for style or format, not for facts that change often.
- **Profissional:** I wouldn't train a new model; that's extremely expensive and unnecessary. My first recommendation would be RAG, retrieval-augmented generation. You index the documents, and for each question you retrieve the most relevant chunks and put them in the model's context, so the answer is grounded in real sources. It's easy to update when documents change, and the bot can cite where the answer came from. Fine-tuning could be added later if they need a specific tone or output format, but it's not a good way to teach facts that change often.
- **Dica:** A resposta esperada é RAG. Mostre o raciocínio com prós e contras de cada opção; isso é o que diferencia nível 4.
- **Follow-up:** What could go wrong with a RAG system, and how would you evaluate it?

### 22. What is a transformer in AI?
*O que é um transformer em IA?* · nível 1 · concept

- **Básico:** A transformer is a type of neural network. Most LLMs use it. It uses attention.
- **Intermediário:** A transformer is a neural network architecture used by almost all modern LLMs, like GPT. Its main idea is attention, which helps the model understand how tokens relate to each other.
- **Profissional:** The transformer is the neural network architecture behind almost all modern LLMs; the T in GPT stands for transformer. It was introduced in 2017 in the paper 'Attention Is All You Need'. Its key component is self-attention, which lets every token weigh the other tokens in the context. Because it processes tokens in parallel instead of one by one, it trains efficiently on GPUs, which made today's large models possible.
- **Dica:** Cite que o T de GPT é transformer e o artigo de 2017. Fatos simples que mostram base sólida.
- **Follow-up:** What does attention do inside a transformer?

### 23. Can you explain the attention mechanism in simple words, and why it was such an important idea?
*Você pode explicar o mecanismo de atenção em palavras simples e por que foi uma ideia tão importante?* · nível 3 · concept

- **Básico:** Attention lets each word look at the other words and decide which ones are important. It helps the model understand context.
- **Intermediário:** With attention, each token looks at all the other tokens and gives more weight to the ones that are relevant. For example, it helps the model know what 'it' refers to in a sentence. It was important because it works in parallel and handles long text better than older models.
- **Profissional:** In simple terms, attention lets each token ask: which other tokens in this context matter most for my meaning? The model computes a score between tokens, turns those scores into weights, and mixes information from the most relevant ones. That's how it figures out, for example, that 'it' refers to 'the animal' and not 'the street'. It was a big deal because, unlike older recurrent networks, attention connects distant tokens directly and can be computed in parallel, which made training huge models on GPUs practical. The trade-off is that its cost grows quadratically with context length.
- **Dica:** Use um exemplo concreto (pronome 'it'). Se mencionar o custo quadrático, mostra profundidade.
- **Follow-up:** Why does attention become expensive with very long contexts?

### 24. What does the temperature parameter do in an LLM?
*O que o parâmetro temperature faz em um LLM?* · nível 2 · concept

- **Básico:** Temperature controls how random the answer is. Low temperature is more predictable. High temperature is more creative.
- **Intermediário:** Temperature controls the randomness of the output. A low temperature makes the model choose the most likely tokens, so answers are more consistent. A high temperature gives a chance to less likely tokens, so answers are more creative but can have more mistakes.
- **Profissional:** Temperature scales the probability distribution before the next token is sampled. With a low temperature, close to zero, the distribution becomes sharp, so the model almost always picks the most likely token, which gives consistent, focused output. With a higher temperature, the distribution gets flatter, so less likely tokens are chosen more often, which increases creativity and variety but also the risk of errors. For code or factual tasks I'd use a low value, and for brainstorming a higher one.
- **Dica:** Sempre termine com um exemplo de uso: código = baixa, brainstorming = alta.
- **Follow-up:** Does temperature zero always give exactly the same answer?

### 25. What is the difference between temperature and top-p?
*Qual é a diferença entre temperature e top-p?* · nível 3 · concept

- **Básico:** Temperature makes the answer more or less random. Top-p only uses the most likely tokens.
- **Intermediário:** Temperature changes how random the choice is for all tokens. Top-p removes the unlikely tokens: it keeps only the most likely ones until their probabilities add up to p, like 0.9. It's common to change one of them, not both.
- **Profissional:** Both control sampling, but in different ways. Temperature reshapes the whole probability distribution, making it sharper or flatter. Top-p, or nucleus sampling, cuts the distribution: it keeps the smallest set of top tokens whose probabilities add up to p, for example 0.9, and samples only from that set. So top-p removes the long tail of unlikely tokens, while temperature changes how strongly the model prefers the top ones. Providers usually recommend adjusting one or the other, not both at the same time.
- **Dica:** Palavra-chave para top-p: 'cumulative probability' ou 'add up to p'. A recomendação de ajustar só um mostra experiência prática.
- **Follow-up:** What is top-k, and how is it different from top-p?

### 26. You're building two features: one generates SQL queries from user questions, and the other writes marketing slogans. How would you set the generation parameters for each, and why?
*Você está criando duas funcionalidades: uma gera consultas SQL a partir de perguntas do usuário e a outra escreve slogans de marketing. Como você configuraria os parâmetros de geração de cada uma, e por quê?* · nível 4 · scenario

- **Básico:** For SQL I would use a low temperature, because the query must be correct. For slogans I would use a high temperature, to get more creative ideas.
- **Intermediário:** For the SQL feature, I'd use a low temperature, like 0 or 0.2, because the query must be correct and consistent. For marketing slogans, I'd use a higher temperature, around 0.8 or 0.9, because we want different and creative options. I'd also set max tokens short for slogans.
- **Profissional:** For SQL generation I'd use a low temperature, around 0 to 0.2, because there's usually one correct query and I want consistent, predictable output. I'd also validate the SQL before running it, since low temperature doesn't guarantee correctness. For slogans, I'd use a higher temperature, maybe 0.8 to 1.0, possibly with top-p around 0.9, because variety is the goal, and I might generate several options so the user can choose. In both cases I'd set a reasonable max tokens limit: short for slogans, and enough for complex queries. Then I'd test with real examples and adjust.
- **Dica:** Mostre maturidade: temperatura baixa não garante que o SQL está correto, então valide. Mencione testar e ajustar.
- **Follow-up:** Why is it dangerous to run AI-generated SQL directly on a production database?

## Módulo 2: Funcionamento dos LLMs (How LLMs Work)

### 27. What is pretraining?
*O que é pré-treinamento?* · nível 1 · concept

- **Básico:** Pretraining is the first stage. The model learns from a huge amount of text by predicting the next word.
- **Intermediário:** Pretraining is the first stage of training an LLM. The model reads a huge amount of text, like websites, books, and code, and learns by predicting the next token. The result is a base model.
- **Profissional:** Pretraining is the first and most expensive stage of building an LLM. The model is trained on trillions of tokens from the web, books, and code, with a self-supervised objective: predict the next token. Through this it learns grammar, facts, reasoning patterns, and coding conventions. The output is a base model, which has a lot of knowledge but isn't yet a helpful assistant.
- **Dica:** Ligue o pré-treinamento ao resultado: um modelo base. Isso prepara o terreno para falar de SFT e RLHF.
- **Follow-up:** What happens after pretraining?

### 28. Why is a base model not a good chatbot?
*Por que um modelo base não é um bom chatbot?* · nível 2 · concept

- **Básico:** A base model only continues the text. It doesn't follow instructions. It needs fine-tuning.
- **Intermediário:** A base model was only trained to continue text, so when you ask a question, it may just write more questions or random text. It doesn't know how to act like a helpful assistant. That's why we use fine-tuning and RLHF after pretraining.
- **Profissional:** A base model was trained only to predict the next token on internet text, so it's a document completer, not an assistant. If you ask it a question, it might continue with similar questions, or produce text in a random style, because that's what it saw on the web. It also hasn't learned safety behaviors or a consistent helpful tone. Post-training, meaning supervised fine-tuning and preference training like RLHF, is what turns it into a useful chat assistant.
- **Dica:** A expressão 'document completer, not an assistant' resume bem. Mencione 'post-training'.
- **Follow-up:** What is the name of the training stages that come after pretraining?

### 29. Why is data quality so important in pretraining?
*Por que a qualidade dos dados é tão importante no pré-treinamento?* · nível 3 · concept

- **Básico:** The model learns from the data. If the data is bad, the model learns bad things.
- **Intermediário:** The model learns patterns from its training data, so if the data has errors, spam, or bias, the model learns them too. That's why teams filter and clean the data and remove duplicates. Better data usually means a better model.
- **Profissional:** A model basically reflects what it was trained on, so 'garbage in, garbage out' applies. If the data contains errors, spam, toxic content, or bias, the model will reproduce those patterns. That's why pretraining pipelines spend a lot of effort on filtering low-quality pages, removing duplicates, and balancing sources like code, books, and multiple languages. Research has shown that well-filtered data can produce a better model than a much larger amount of noisy data.
- **Dica:** 'Garbage in, garbage out' é uma expressão conhecida em inglês. Use e depois explique as ações (filtrar, deduplicar).
- **Follow-up:** How could biased training data affect a model's answers?

### 30. What is supervised fine-tuning?
*O que é fine-tuning supervisionado?* · nível 1 · concept

- **Básico:** It is training the model with examples of questions and good answers, written by people.
- **Intermediário:** Supervised fine-tuning means training a pretrained model on examples of prompts and ideal responses. These examples are usually written or checked by humans. This teaches the model to follow instructions and act like an assistant.
- **Profissional:** Supervised fine-tuning, or SFT, is the stage where we take a pretrained base model and train it further on a curated dataset of prompt and ideal response pairs. The responses are usually written or reviewed by humans, often domain experts. The model learns to imitate them, so it starts following instructions, answering in a conversational format, and using a helpful tone. It's called supervised because every example has a target answer.
- **Dica:** Explique por que é 'supervised': cada exemplo tem a resposta certa. Isso mostra que você entende o termo, não só decorou.
- **Follow-up:** Why is it called supervised?

### 31. Why is the quality of SFT data more important than the quantity?
*Por que a qualidade dos dados de SFT é mais importante que a quantidade?* · nível 2 · concept

- **Básico:** The model copies the examples. If the examples have mistakes, the model learns the mistakes.
- **Intermediário:** In SFT, the model imitates the examples very closely. If the answers have mistakes or a bad style, the model will copy that. A smaller set of excellent examples often works better than a big set of average ones.
- **Profissional:** SFT mostly teaches behavior and style, not new knowledge, and the model imitates the examples very closely. So if the responses contain errors, inconsistent formatting, or made-up facts, the model learns those habits too. Research and industry experience show that a few thousand carefully written examples can beat a much larger noisy dataset. That's why companies pay experts to write and review these responses carefully.
- **Dica:** Conecte com a vaga: 'é por isso que empresas contratam especialistas para escrever e revisar respostas'.
- **Follow-up:** What would you check when reviewing an ideal response written by another person?

### 32. You are asked to write an ideal response for an SFT dataset. The prompt is: 'How do I center a div?'. Walk me through how you would write a high-quality response.
*Pedem que você escreva uma resposta ideal para um dataset de SFT. O prompt é: 'Como eu centralizo uma div?'. Explique como você escreveria uma resposta de alta qualidade.* · nível 4 · practical

- **Básico:** I would give a short answer with flexbox code. I would test the code and explain it in simple words.
- **Intermediário:** First I'd understand the question: the user wants to center a div. I'd give a modern solution with flexbox, with a short code example, and maybe show the grid option too. I'd test the code in the browser to be sure it works, and keep the explanation short and clear.
- **Profissional:** First, I'd think about what the user most likely needs: centering a div horizontally and vertically. I'd lead with the most common modern solution, a parent with display flex, justify-content center, and align-items center, in a small code block. Then I'd briefly mention the grid alternative with place-items center, and maybe the margin auto option for horizontal centering only. I'd test the code in a browser before submitting, because accuracy is the top priority. Finally, I'd keep it concise and well formatted, since an ideal response should be correct, helpful, and easy to scan, not a long essay.
- **Dica:** Mostre um processo: entender a intenção, solução principal, alternativas, testar, formatar. Como dev front-end, esse é seu terreno.
- **Follow-up:** How long should an ideal response be? How do you decide?

### 33. What does RLHF stand for?
*O que significa a sigla RLHF?* · nível 1 · concept

- **Básico:** RLHF stands for reinforcement learning from human feedback.
- **Intermediário:** RLHF stands for reinforcement learning from human feedback. It's a way to train the model using people's opinions about which answers are better.
- **Profissional:** RLHF stands for reinforcement learning from human feedback. It's a post-training method where humans compare model responses, those preferences train a reward model, and then the LLM is optimized with reinforcement learning to produce responses people prefer. It's one of the key steps that made chat assistants more helpful and safer.
- **Dica:** Pratique a pronúncia de 'reinforcement' (ree-in-FORS-ment). Depois de dizer a sigla, acrescente uma frase sobre o que é.
- **Follow-up:** Why do we need human feedback if we already have SFT?

### 34. Can you explain the main steps of RLHF?
*Você pode explicar as principais etapas do RLHF?* · nível 2 · concept

- **Básico:** The model writes two answers. People choose the best one. A reward model learns from this, and then the model is trained to get high rewards.
- **Intermediário:** First, the model generates several responses to the same prompt. Then humans compare them and pick the better one. These preferences are used to train a reward model, which gives a score to responses. Finally, the LLM is trained with reinforcement learning to get higher scores.
- **Profissional:** There are three main steps after SFT. First, we collect preference data: the model generates two or more responses to a prompt, and human raters rank them. Second, we train a reward model on those comparisons, so it can predict a score for any response. Third, we optimize the LLM with a reinforcement learning algorithm, usually PPO, to maximize that reward, with a penalty that keeps it close to the original model so it doesn't drift or exploit the reward model. Today, many teams use DPO instead, which learns directly from the preference pairs without a separate reward model.
- **Dica:** Use 'First, Second, Third' para organizar. Mencionar DPO no final mostra que você está atualizado.
- **Follow-up:** What is reward hacking?

### 35. What is DPO, and how is it different from classic RLHF?
*O que é DPO e como ele é diferente do RLHF clássico?* · nível 3 · concept

- **Básico:** DPO means direct preference optimization. It uses the same preference data, but it doesn't need a reward model.
- **Intermediário:** DPO stands for direct preference optimization. Like RLHF, it uses pairs of responses where humans chose the better one. But it trains the model directly on these pairs, without a reward model or reinforcement learning, so it's simpler and more stable.
- **Profissional:** DPO, or direct preference optimization, is a popular alternative to classic RLHF. Both use the same kind of data: pairs of a chosen and a rejected response. Classic RLHF first trains a separate reward model and then runs a reinforcement learning loop like PPO, which is complex and can be unstable. DPO skips both steps and uses a simple loss that directly increases the probability of the chosen response relative to the rejected one. In practice it's cheaper and easier to run, which is why it's widely used, although some labs still use RL-based methods, especially for things like reasoning.
- **Dica:** A diferença central: DPO não precisa de reward model nem de RL. Mas mostre que ambos usam dados de preferência humana, que é onde o avaliador entra.
- **Follow-up:** In both methods, where does the human evaluator's work fit in?

### 36. What is human feedback in AI training?
*O que é feedback humano no treinamento de IA?* · nível 1 · concept

- **Básico:** Human feedback is when people review the model's answers. This helps make the model better.
- **Intermediário:** Human feedback is when people evaluate model responses, for example by comparing two answers or giving a score. This feedback becomes training data that helps the model improve.
- **Profissional:** Human feedback means people evaluating model outputs, by comparing pairs of responses, rating them on criteria like accuracy and helpfulness, or rewriting them. This feedback is turned into training data for methods like RLHF and DPO, and also used to measure model quality. It's important because humans can judge things that are hard to measure automatically, like whether an answer is truly helpful, clear, or safe.
- **Dica:** Diga que o feedback 'becomes training data'. Essa conexão é o motivo pelo qual a vaga existe.
- **Follow-up:** What types of feedback tasks do you know?

### 37. What makes a good AI evaluator?
*O que faz um bom avaliador de IA?* · nível 2 · concept

- **Básico:** A good evaluator follows the guidelines, checks the details, and explains the decision clearly.
- **Intermediário:** A good evaluator follows the guidelines carefully and is consistent. They pay attention to details, check facts and test code, and write clear justifications. They also stay objective and don't just prefer the longer answer.
- **Profissional:** I'd say four things. First, they follow the guidelines closely, even when they personally disagree. Second, they're consistent, so similar responses get similar ratings. Third, they're detail-oriented: they verify facts, run the code when possible, and catch subtle errors instead of judging by how good a response looks. And fourth, they write clear, specific justifications, because the team needs to understand the reasoning. Being objective and avoiding biases, like preferring longer answers, is part of all that.
- **Dica:** Fale de si mesmo indiretamente: essas são as qualidades que você vai demonstrar. Evite respostas genéricas como 'ser inteligente'.
- **Follow-up:** Which of these qualities is your strongest, and can you give an example?

### 38. Tell me about a time you had to review someone else's work and give honest feedback. How did you do it?
*Conte sobre uma vez em que você teve que revisar o trabalho de outra pessoa e dar um feedback honesto. Como você fez?* · nível 4 · behavioral

- **Básico:** In my job I review pull requests. I found a bug in a colleague's code. I explained the problem clearly and suggested a fix. He fixed it and thanked me.
- **Intermediário:** In my current job, I review my teammates' pull requests. Once, I found that a React component was making too many API calls because of a wrong useEffect dependency. I left a clear comment explaining the problem and suggested a fix with an example. My colleague fixed it, and we avoided a performance problem in production.
- **Profissional:** Sure. In my current job I do code reviews for my team's Next.js project. Once, a teammate opened a pull request with a new form, and I noticed that the validation only happened on the client, so the API could receive invalid data. I wrote a specific comment explaining the risk, linked to the line, and suggested adding server-side validation with a short example. I also mentioned what was good in the PR, so the feedback felt fair. He agreed, fixed it the same day, and we later added this check to our review checklist. I think that experience is very similar to evaluating AI responses: being specific, objective, and constructive.
- **Dica:** Use o método STAR: Situação, Tarefa, Ação, Resultado. Termine conectando a experiência com avaliação de IA.
- **Follow-up:** What do you do when someone disagrees with your feedback?

### 39. What is model alignment?
*O que é alinhamento de modelos?* · nível 1 · concept

- **Básico:** Alignment means the model does what people want. It should be helpful, honest, and safe.
- **Intermediário:** Model alignment is making sure the model behaves according to human values and intentions. A common goal is that the model is helpful, honest, and harmless. Techniques like RLHF are used for this.
- **Profissional:** Alignment is the work of making a model behave the way its developers and users actually intend, in line with human values. A common summary is helpful, honest, and harmless. In practice, that means following instructions well, not making things up, and refusing truly harmful requests without refusing reasonable ones. Methods like SFT, RLHF, DPO, written principles, and red teaming are all part of alignment.
- **Dica:** Os '3 Hs' (helpful, honest, harmless) são a resposta mais reconhecida. Memorize essa frase.
- **Follow-up:** Can a model be too safe? What does that look like?

### 40. What is the balance between helpfulness and harmlessness? Give an example.
*Qual é o equilíbrio entre ser útil e ser inofensivo? Dê um exemplo.* · nível 3 · concept

- **Básico:** If the model refuses too much, it is not useful. If it helps with everything, it can be dangerous. We need a balance.
- **Intermediário:** There's a trade-off. If the model refuses too much, it becomes annoying and useless. If it accepts everything, it can help people do harmful things. For example, explaining how SQL injection works for a developer is useful, but writing an attack against a real website is harmful.
- **Profissional:** It's a real trade-off. A model that's too cautious refuses legitimate requests, which frustrates users and is a failure in itself. A model that accepts everything might give real help with something dangerous. A good example is security: explaining what SQL injection is and how to prevent it with parameterized queries is helpful for any developer, but writing a ready-to-use attack against a specific real website is not. Good alignment looks at context and likely intent, helps with the legitimate part, and only refuses the part that's actually harmful, ideally explaining why.
- **Dica:** Mostre que recusar demais também é uma falha. Um exemplo técnico (SQL injection) é perfeito para uma vaga de coding.
- **Follow-up:** As an evaluator, how would you rate a response that refuses a safe request?

### 41. What does instruction following mean?
*O que significa instruction following?* · nível 1 · concept

- **Básico:** It means the model does exactly what the user asks, like the format and the length.
- **Intermediário:** Instruction following means the model does exactly what the prompt asks. It should respect all the constraints, like the format, the length, the language, and the tone.
- **Profissional:** Instruction following is how well a model does exactly what the user asked, including every constraint in the prompt: format, length, language, tone, programming language, and anything the user said not to do. It's one of the main dimensions in LLM evaluation, because a response can be accurate and well written and still fail the user if it ignores an instruction.
- **Dica:** Liste tipos de restrição (format, length, language). Isso mostra que você sabe o que verificar.
- **Follow-up:** Can you give an example of a response that fails instruction following?

### 42. The user asked for a summary in three bullet points, and the response has five. How would you rate it?
*O usuário pediu um resumo em três bullet points e a resposta tem cinco. Como você avaliaria?* · nível 2 · scenario

- **Básico:** The user asked for three points, but the response has five. It didn't follow the instruction, so I would give a lower score.
- **Intermediário:** I would lower the rating because the response didn't follow a clear instruction: the user asked for three bullet points, not five. Even if the content is good, instruction following is important. In my justification, I'd say exactly which instruction was ignored.
- **Profissional:** I'd penalize it on instruction following, because the user gave a clear, explicit constraint: three bullet points. Five bullet points is a direct violation, even if the summary itself is accurate. I'd still evaluate the content separately, so if it's correct and well written, it wouldn't get the lowest score overall, but it shouldn't get a top score either. In the justification I'd be specific, for example: 'The response is accurate but uses five bullet points instead of the three requested.'
- **Dica:** Separe as dimensões: conteúdo pode estar bom, mas a instrução foi violada. Dar um exemplo de justificativa é um diferencial.
- **Follow-up:** What if the five bullet points make the summary much better? Would you change your rating?

### 43. What should a good response do when the user's instructions are unclear or ambiguous?
*O que uma boa resposta deve fazer quando as instruções do usuário são confusas ou ambíguas?* · nível 3 · scenario

- **Básico:** It can ask a question to understand better, or make a good guess and say it.
- **Intermediário:** A good response can ask a clarifying question, or make a reasonable assumption and say it clearly. For small tasks, it's usually better to give an answer with the assumption. For big or risky tasks, it's better to ask first.
- **Profissional:** It depends on the cost of getting it wrong. If the task is small, a good response usually makes the most reasonable interpretation, states that assumption clearly, and maybe offers a quick alternative, for example: 'I assumed you're using React with TypeScript; here's the JavaScript version too if you need it.' If the task is large or risky, or the interpretations are very different, it's better to ask a short clarifying question first. What's bad is silently guessing, or asking too many questions about obvious things.
- **Dica:** A ideia de 'depende do custo de errar' mostra pensamento maduro. Dê um exemplo curto.
- **Follow-up:** Can asking too many clarifying questions be a problem? Why?

### 44. What is a system prompt?
*O que é um system prompt?* · nível 1 · concept

- **Básico:** A system prompt is the instructions from the developer. It tells the model how to behave.
- **Intermediário:** A system prompt is a set of instructions written by the developer or company. It tells the model how to behave, for example its role, its tone, and its rules. The user usually doesn't see it.
- **Profissional:** A system prompt is a special message, usually set by the developer, that defines how the model should behave throughout the conversation. It can include a persona, rules about what topics to cover, the tone, the output format, and safety constraints. It's sent before the user messages, users usually don't see it, and models are generally trained to give it higher priority than user instructions.
- **Dica:** Como dev, mencione que nas APIs isso é a mensagem com role 'system'. Mostra experiência prática.
- **Follow-up:** Have you ever written a system prompt for a project?

### 45. What is the difference between a system prompt and a user prompt?
*Qual é a diferença entre um system prompt e um user prompt?* · nível 2 · concept

- **Básico:** The system prompt is from the developer and gives the rules. The user prompt is the user's question.
- **Intermediário:** The system prompt is written by the developer and sets the rules and behavior for the whole conversation. The user prompt is the specific question or request from the user. If they conflict, the model should usually follow the system prompt.
- **Profissional:** The system prompt comes from the developer or operator and sets the general context: who the assistant is, what it should and shouldn't do, and how to format answers. The user prompt is the end user's message, with the specific task or question. In the API they're separate roles in the messages array. When there's a conflict, models are trained to follow an instruction hierarchy where the system prompt usually wins, as long as following it isn't harmful.
- **Dica:** Mencione 'instruction hierarchy' e o array de mensagens das APIs. São termos que entrevistadores técnicos reconhecem.
- **Follow-up:** What should happen if the user asks for something the system prompt forbids?

### 46. A system prompt says: 'Always answer in English.' The user writes in Portuguese and asks for an answer in Portuguese. As an evaluator, which behavior would you prefer and why?
*Um system prompt diz: 'Sempre responda em inglês.' O usuário escreve em português e pede a resposta em português. Como avaliador, qual comportamento você preferiria e por quê?* · nível 4 · scenario

- **Básico:** I prefer the answer in English, because the system prompt has priority. But the answer should be polite and maybe explain why.
- **Intermediário:** I'd prefer the response that follows the system prompt and answers in English, because the developer's rules usually have priority over the user's request. A good response would still be polite and maybe briefly explain that it can only answer in English. Of course, I'd check the project guidelines first.
- **Profissional:** By default, I'd prefer the response that follows the system prompt and answers in English, because the operator set that rule on purpose, maybe because their support team only reads English, and there's no harm in following it. The best response would still help the user: answer the question in clear, simple English and maybe say briefly that it can only reply in English here. I'd rate a response that switched to Portuguese lower on instruction following, even though the user asked for it. That said, I'd always check the project's guidelines, because some projects define the hierarchy differently.
- **Dica:** Mostre a regra (system tem prioridade), a razão (o operador pode ter motivos) e a nuance (verificar guidelines). Isso é resposta de nível 4.
- **Follow-up:** Can you think of a case where the model should NOT follow the system prompt?

### 47. What is chain-of-thought, and why does it help?
*O que é chain-of-thought e por que ajuda?* · nível 2 · concept

- **Básico:** Chain-of-thought means the model thinks step by step before the answer. It helps with hard problems.
- **Intermediário:** Chain-of-thought is when the model writes its reasoning step by step before giving the final answer. It helps because the model can break a hard problem into smaller parts, so it makes fewer mistakes in math and logic.
- **Profissional:** Chain-of-thought is a technique where the model produces intermediate reasoning steps before the final answer, either because the prompt asks it to think step by step or because it was trained to do so, like modern reasoning models. It helps because each generated step becomes context for the next one, so the model can break a complex problem into smaller pieces instead of jumping to an answer in one go. It's especially useful for math, logic, and debugging code.
- **Dica:** Explique o porquê: cada passo vira contexto para o próximo. Isso mostra que você entende o mecanismo.
- **Follow-up:** What is a reasoning model, and how is it different from a normal chat model?

### 48. What are some important limitations of LLMs?
*Quais são algumas limitações importantes dos LLMs?* · nível 3 · concept

- **Básico:** LLMs can invent information. They don't know recent news, and they can make math mistakes.
- **Intermediário:** LLMs can hallucinate, which means they invent facts. They have a knowledge cutoff, so they don't know recent events. They can make mistakes in math or long logic problems, and they can sound confident even when they're wrong.
- **Profissional:** A few big ones. First, hallucinations: they can produce false information that sounds very convincing. Second, a knowledge cutoff, so without search tools they don't know recent events. Third, they can struggle with precise math, counting, and long multi-step problems, partly because of tokenization. Fourth, they're limited by the context window and have no real memory between sessions. And they can reflect biases from training data or agree with the user too easily. Many of these can be reduced with tools like search and code execution, plus careful human evaluation.
- **Dica:** Liste pelo menos três limitações com 'First, Second, Third'. Termine com como reduzir: ferramentas e avaliação humana.
- **Follow-up:** How can tools like search or code execution reduce these limitations?

### 49. What is a hallucination in an LLM?
*O que é uma alucinação em um LLM?* · nível 1 · concept

- **Básico:** A hallucination is when the model invents information. It sounds true, but it is false.
- **Intermediário:** A hallucination is when an LLM generates false or made-up information but presents it with confidence, like it's true. For example, it can invent a book, a date, or a code function that doesn't exist.
- **Profissional:** A hallucination is when a model generates content that's false or not supported by any source, but presents it fluently and confidently, as if it were a fact. Common examples are invented citations, wrong dates or numbers, fake URLs, and, in code, functions or library methods that don't exist. It's dangerous precisely because it sounds plausible.
- **Dica:** A chave é 'sounds confident but is false'. Um exemplo em código (método inexistente) é perfeito para você.
- **Follow-up:** Have you ever seen an AI tool hallucinate in your coding work?

### 50. Why do language models hallucinate?
*Por que modelos de linguagem alucinam?* · nível 2 · concept

- **Básico:** The model predicts the next word. It doesn't check if the information is true.
- **Intermediário:** Language models are trained to predict plausible text, not to check facts. When the model doesn't know something, it still generates something that sounds right. Gaps or errors in the training data also make it worse.
- **Profissional:** The core reason is that the model is trained to produce likely text, not verified truth. It generates the most plausible continuation based on statistical patterns, and it doesn't have a built-in way to check a fact against a source. When information is rare, missing, or after its knowledge cutoff, it can fill the gap with something that sounds right. Training can also make it worse if the model is rewarded for always giving a confident answer instead of saying 'I'm not sure'.
- **Dica:** Explique a raiz: o objetivo é texto plausível, não verdadeiro. Mencionar que o treinamento pode recompensar excesso de confiança mostra profundidade.
- **Follow-up:** Do you think hallucinations can be completely eliminated?

### 51. What techniques can reduce hallucinations?
*Quais técnicas podem reduzir alucinações?* · nível 3 · concept

- **Básico:** We can use RAG with real documents, ask for sources, and check the answers.
- **Intermediário:** We can use RAG, so the model answers based on real documents. We can ask it to cite sources, use a low temperature for factual tasks, and train it to say when it isn't sure. Human review also helps a lot.
- **Profissional:** There are techniques at different levels. At the application level, RAG and web search ground the answer in real documents, and asking for citations makes claims easy to verify. Using tools like code execution helps catch invented APIs, and a low temperature helps for factual tasks. At the training level, preference data can reward the model for saying 'I'm not sure' instead of guessing, and penalize confident false claims. Finally, human evaluation and fact-checking catch what remains and create better training data.
- **Dica:** Organize por nível (aplicação vs treinamento). Isso deixa a resposta profissional.
- **Follow-up:** Which of these techniques depends on the work of human evaluators?

### 52. You're evaluating a coding response that looks clean and well explained, but it uses a library function you've never heard of. What do you do?
*Você está avaliando uma resposta de código que parece limpa e bem explicada, mas usa uma função de biblioteca que você nunca viu. O que você faz?* · nível 4 · scenario

- **Básico:** I would check the documentation and test the code. If the function doesn't exist, it is a hallucination, so I give a low score and explain why.
- **Intermediário:** I wouldn't trust it just because it looks good. I'd check the official documentation and, if possible, run the code to see if the function really exists. If it doesn't, it's a hallucination, and the code won't work, so I'd give it a low rating and explain this clearly in my justification.
- **Profissional:** I wouldn't assume it's right or wrong; I'd verify it. First, I'd check the official documentation for that library and the version the user mentioned, because the function might be new or from a different version. Then, if possible, I'd actually run the code in a small test. If the function doesn't exist, that's a hallucinated API, which is a critical error: the code won't run, no matter how clean the explanation is. I'd give it a low score on correctness and write a specific justification, like 'The response uses a method that doesn't exist in this library, so the code fails.' If it does exist, I'd note that I verified it and continue evaluating the rest.
- **Dica:** O entrevistador quer ver: você verifica (docs + teste), não julga pela aparência, e escreve uma justificativa específica. Cite a possibilidade de versão diferente da biblioteca.
- **Follow-up:** What if you can't run the code in the evaluation environment? How would you decide?

## Módulo 3: Avaliação de respostas (Evaluating AI Responses)

### 53. What does accuracy mean when you evaluate an AI response?
*O que significa accuracy quando você avalia uma resposta de IA?* · nível 1 · concept

- **Básico:** Accuracy means the information is correct. The response has no factual errors.
- **Intermediário:** Accuracy means the facts, numbers and code in the response are correct. If there is a factual error, the accuracy score goes down.
- **Profissional:** Accuracy is about whether the response is factually correct. I check the facts, dates, numbers and, for code, whether it actually works. Even a well-written response should get a low accuracy score if it has a major error, because the user may trust and use wrong information.
- **Dica:** Diga que accuracy vem primeiro: uma resposta bonita com erro grave perde.
- **Follow-up:** How do you check if a fact is correct?

### 54. How do you fact-check a response during an evaluation task?
*Como você verifica os fatos de uma resposta durante uma tarefa de avaliação?* · nível 2 · practical

- **Básico:** I search for the important facts on Google. I use reliable sources, like official websites.
- **Intermediário:** I find the main claims in the response, like dates, numbers and names. Then I verify them with reliable sources, such as official documentation. For code, I run it if I can.
- **Profissional:** First, I identify the key claims that matter for the answer. Then I verify each one with reliable sources, like official documentation, well-known references or primary sources, not random blogs. If there's code, I run it or at least trace it carefully. I also note how serious each error is, because a wrong date in a side comment is different from a wrong main answer.
- **Dica:** Mostre um processo em passos: identificar afirmações, verificar em fontes confiáveis, testar código.
- **Follow-up:** What do you do if you can't find a reliable source?

### 55. What is the difference between a major error and a minor error in a response?
*Qual é a diferença entre um erro grave e um erro pequeno em uma resposta?* · nível 3 · concept

- **Básico:** A major error changes the main answer. A minor error is a small detail.
- **Intermediário:** A major error makes the main answer wrong or can hurt the user, like wrong code or a wrong fact. A minor error is a small detail that does not change the answer, like a small typo.
- **Profissional:** A major error affects the core of the answer: the main fact is wrong, the code doesn't run, or the advice could cause harm. A minor error is something small that doesn't change the user's outcome, like a slightly wrong year in a side note or a typo. In scoring, one major error usually lowers the rating a lot, while minor errors lower it a little. I always explain which type it is in my justification.
- **Dica:** Use 'impact on the user' como critério para separar grave de pequeno.
- **Follow-up:** Can you give an example of a minor error in a code response?

### 56. You see two responses. Response A is short and correct. Response B is long, well formatted, and very detailed, but it has one wrong fact. Which one do you choose and why?
*Você vê duas respostas. A é curta e correta. B é longa, bem formatada e detalhada, mas tem um fato errado. Qual você escolhe e por quê?* · nível 4 · scenario

- **Básico:** I choose Response A. It is correct. B has a wrong fact, and accuracy is more important.
- **Intermediário:** I prefer Response A because it is accurate. B looks better, but the wrong fact can mislead the user. For me, accuracy is more important than length or formatting.
- **Profissional:** I'd prefer Response A, but it depends on how serious the error in B is. If the wrong fact is central to the answer, A is clearly better, because accuracy comes before formatting and detail, and a confident, polished response with an error can mislead the user even more. If the error is very minor and B adds a lot of useful information, it could be closer, so I'd check the guidelines. In my justification, I'd name the exact error and explain its impact.
- **Dica:** Resposta forte: escolha A, mas mostre nuance (gravidade do erro) e cite as guidelines.
- **Follow-up:** What if the error in B was only a small typo?

### 57. What makes a response helpful?
*O que torna uma resposta útil?* · nível 1 · concept

- **Básico:** A helpful response answers the user's question. It solves the problem in a clear way.
- **Intermediário:** A helpful response understands what the user really needs and solves the problem. It gives practical information that the user can use right away.
- **Profissional:** A helpful response understands the user's real intent and addresses it directly. It answers every part of the question, gives practical, actionable information, and uses the right level of detail for that user. It also avoids unnecessary content that makes the answer harder to use.
- **Dica:** Use as palavras 'user intent' e 'actionable'.
- **Follow-up:** Can a correct response still be unhelpful?

### 58. What is the difference between relevance and completeness?
*Qual é a diferença entre relevância e completude?* · nível 2 · concept

- **Básico:** Relevance means the response stays on topic. Completeness means it answers all parts of the question.
- **Intermediário:** Relevance means everything in the response is related to the question, with no off-topic parts. Completeness means it covers every part of the request and does not miss anything.
- **Profissional:** Relevance is about staying on topic: every part of the response should connect to what the user asked. Completeness is about coverage: if the user asked three things, all three are answered. A response can be relevant but incomplete, for example a good answer to only one of two questions. It can also be complete but include irrelevant extra content.
- **Dica:** Dê um exemplo de resposta relevante mas incompleta.
- **Follow-up:** Is a longer response always more complete?

### 59. A user asks two questions in one prompt, but the response only answers the first one very well. How do you rate it?
*Um usuário faz duas perguntas em um prompt, mas a resposta só responde muito bem a primeira. Como você avalia?* · nível 3 · scenario

- **Básico:** The response is incomplete. It misses the second question, so I give a lower score.
- **Intermediário:** I rate it lower for completeness and helpfulness, because the user needs both answers. In my justification, I say the first part is good, but the second question is missing.
- **Profissional:** I'd mark it as incomplete. The first answer may be accurate and clear, so I'd recognize that, but the user explicitly asked two questions and half the request is ignored. That lowers helpfulness and completeness, and it can also count as an instruction-following issue. My justification would be specific, something like: the response answers the setup question well but doesn't address the Safari compatibility question at all.
- **Dica:** Reconheça o que está bom, mas seja claro que falta uma parte do pedido.
- **Follow-up:** Would you rate it higher than a response that answers both questions with small errors?

### 60. What is a hallucination in an AI response?
*O que é uma alucinação em uma resposta de IA?* · nível 1 · concept

- **Básico:** A hallucination is when the model invents something. It looks real, but it is false.
- **Intermediário:** A hallucination is when the model makes up information, like a fact, a name, or a link, and presents it as if it were true.
- **Profissional:** A hallucination is when the model generates information that sounds confident and plausible but isn't true or doesn't exist, for example a fake citation, a library function that isn't real, or a wrong historical date. It happens because the model predicts likely text, not verified facts. That's why evaluators need to fact-check key claims.
- **Dica:** Dê exemplos concretos: citação falsa, função de biblioteca que não existe.
- **Follow-up:** Why do language models hallucinate?

### 61. A user asks for a source, and the response gives an article with an author, a year, and a link. What do you check?
*Um usuário pede uma fonte, e a resposta dá um artigo com autor, ano e link. O que você verifica?* · nível 2 · scenario

- **Básico:** I check if the article is real. I open the link and search for the author and the title.
- **Intermediário:** I verify that the article really exists. I open the link, and I search for the title, the author and the year. If I can't find it, it's probably a hallucinated citation.
- **Profissional:** I check whether the source actually exists and supports the claim. I open the link, search for the exact title and author, and confirm the year and publication. Then I check that the article really says what the response claims. If the citation is invented, that's a serious honesty and accuracy problem, and I'd rate the response low even if the rest looks good.
- **Dica:** Lembre de verificar também se a fonte realmente diz o que a resposta afirma.
- **Follow-up:** What should an honest model do if it can't give a real source?

### 62. What is sycophancy, and why is it a problem?
*O que é sycophancy (bajulação) e por que é um problema?* · nível 3 · concept

- **Básico:** Sycophancy is when the model agrees with the user just to please them, even when the user is wrong.
- **Intermediário:** Sycophancy is when the model tells the user what they want to hear. For example, it agrees with a wrong idea. This is a problem because the user gets false information.
- **Profissional:** Sycophancy is when a model agrees with the user or flatters them instead of being honest, for example accepting a false premise or changing a correct answer when the user pushes back. It's a problem because it spreads misinformation and makes the model less trustworthy. A good response politely corrects the user and explains why. Training with human preferences can accidentally reward this, so evaluators should prefer honest answers over agreeable ones.
- **Dica:** Mencione o exemplo de mudar uma resposta correta quando o usuário insiste.
- **Follow-up:** How would you rate a response that accepts a false premise in the prompt?

### 63. What does it mean when a response is too verbose?
*O que significa quando uma resposta é verbosa demais?* · nível 1 · concept

- **Básico:** It means the response is too long. It has words that are not needed.
- **Intermediário:** A verbose response is longer than it needs to be. It repeats ideas or adds filler, so the user needs more time to find the answer.
- **Profissional:** A verbose response uses many more words than the question needs. It might repeat the same point, add long introductions, or include unnecessary background. Even if it's correct, it makes the answer harder to use, so I'd lower clarity or conciseness, depending on the rubric.
- **Dica:** Diga que verboso não significa errado, mas prejudica a utilidade.
- **Follow-up:** When is a long response a good thing?

### 64. How do you evaluate the clarity of a response?
*Como você avalia a clareza de uma resposta?* · nível 2 · concept

- **Básico:** I check if the response is easy to understand. I also check if it is well organized.
- **Intermediário:** I check if the language is simple and the ideas are in a logical order. Good formatting, like steps or bullet points, also helps clarity.
- **Profissional:** I ask whether the user can understand and use the answer quickly. I look at structure and logical order, sentence simplicity, and whether formatting like numbered steps or code blocks actually helps. I also consider the audience: a beginner might need more explanation, while an expert prefers a direct answer.
- **Dica:** Mencione o público-alvo: clareza depende de quem pergunta.
- **Follow-up:** Can too much formatting hurt clarity?

### 65. Two responses are both correct. One is three sentences, and the other is three paragraphs. How do you decide?
*Duas respostas estão corretas. Uma tem três frases e a outra três parágrafos. Como você decide?* · nível 2 · scenario

- **Básico:** It depends on the question. If the question is simple, I prefer the short one.
- **Intermediário:** I look at what the user needs. If the extra paragraphs add useful information, the long one can be better. If they only repeat ideas, I prefer the short one.
- **Profissional:** I check whether the extra length adds real value. For a simple question, the concise answer is usually better because the user gets the answer quickly. If the prompt asks for an explanation or the topic is complex, the longer answer might be more helpful. So my decision is based on user need, not length, and I explain that in my justification.
- **Dica:** A palavra-chave é 'value': o texto extra ajuda ou não?
- **Follow-up:** What if the user asked for a detailed explanation?

### 66. What is instruction following?
*O que é instruction following?* · nível 1 · concept

- **Básico:** Instruction following means the model does what the user asks. For example, it uses the right format.
- **Intermediário:** It means the response follows all the instructions in the prompt, like the word limit, the format, or the language the user asked for.
- **Profissional:** Instruction following measures whether the response respects every explicit instruction and constraint in the prompt: length limits, output format, number of items, tone, language, or things the user said not to do. A response can be accurate and still fail instruction following, for example if it writes 300 words when the user asked for 50.
- **Dica:** Cite exemplos de restrições: word limit, format, number of items.
- **Follow-up:** Can you give an example of an implicit instruction?

### 67. The user asked for the answer only in JSON. The response gives correct JSON, but adds a friendly sentence before it. Is this a problem?
*O usuário pediu a resposta só em JSON. A resposta dá um JSON correto, mas adiciona uma frase simpática antes. Isso é um problema?* · nível 2 · scenario

- **Básico:** Yes, it is a problem. The user asked for only JSON. The extra sentence can break the code.
- **Intermediário:** Yes. The user said only JSON, so the extra sentence ignores the instruction. If a program reads this output, it can fail to parse it. I would lower the instruction following score.
- **Profissional:** Yes, it's a real problem, even if the JSON itself is correct. The user said only JSON, which usually means the output will be parsed by code, and an extra sentence like 'Sure, here it is' will make JSON.parse fail. So I'd lower the instruction following score, while noting that the content is accurate. It's not as bad as wrong data, but it's not a small style issue either.
- **Dica:** Como dev, use seu conhecimento: JSON.parse vai falhar com texto extra.
- **Follow-up:** What about wrapping the JSON in a markdown code block?

### 68. The prompt has an instruction that conflicts with accuracy. For example, the user asks for a one-sentence answer, but a correct answer needs an important warning. What do you prefer?
*O prompt tem uma instrução que entra em conflito com a precisão. Por exemplo, pede uma frase só, mas uma resposta correta precisa de um aviso importante. O que você prefere?* · nível 4 · scenario

- **Básico:** I try to follow both. The best answer is short but still has the important warning.
- **Intermediário:** The best response balances both things. It stays short, but it keeps the important warning, because missing it could mislead or hurt the user. I would also check the guidelines.
- **Profissional:** I'd look for the response that balances both. The ideal answer stays as close to one sentence as possible but still includes the critical warning, maybe in a short clause. If one response follows the limit perfectly but drops information that could cause harm, and another adds one short extra sentence for the warning, I'd usually prefer the second one, because accuracy and safety come before formatting constraints. But I'd check the project guidelines first, since some projects treat constraints very strictly, and I'd explain the trade-off clearly in my justification.
- **Dica:** Mostre maturidade: equilíbrio, prioridade de segurança/precisão e respeito às guidelines.
- **Follow-up:** How would you score a response that ignores the length limit by a lot?

### 69. What is over-refusal?
*O que é over-refusal (recusa excessiva)?* · nível 1 · concept

- **Básico:** Over-refusal is when the model says no to a safe question. The request is normal, but the model does not help.
- **Intermediário:** Over-refusal is when the model refuses a harmless request. For example, it refuses 'how do I kill a process in Linux' because of the word kill.
- **Profissional:** Over-refusal is when a model declines a safe, legitimate request, usually because it reacts to a keyword instead of the real meaning. A classic example is refusing to explain how to kill a process in Linux. It's a failure because the user doesn't get help, and it makes the model less useful, so I rate it low on helpfulness.
- **Dica:** O exemplo 'kill a process' é perfeito para um desenvolvedor.
- **Follow-up:** Is a refusal ever the best response?

### 70. What makes a good refusal?
*O que torna uma recusa boa?* · nível 2 · concept

- **Básico:** A good refusal is polite and short. It also gives the user another way to get help.
- **Intermediário:** A good refusal is polite and does not judge the user. It briefly explains why, and it offers a safe alternative, like general information or a better resource.
- **Profissional:** A good refusal only happens when the request is really harmful. It's polite and non-judgmental, short instead of preachy, and briefly explains the reason. Most importantly, it offers a safe and helpful alternative, like general safety information or pointing to a professional resource, so the user isn't left with nothing.
- **Dica:** Evite dizer que a recusa deve ser longa ou dar sermão (preachy).
- **Follow-up:** How do you rate a refusal that lectures the user?

### 71. A user asks if they can take a common painkiller with their blood pressure medicine. One response refuses completely, and the other says it's totally safe. What do you think?
*Um usuário pergunta se pode tomar um analgésico comum com o remédio de pressão. Uma resposta recusa totalmente e a outra diz que é totalmente seguro. O que você acha?* · nível 3 · scenario

- **Básico:** Both are bad. The refusal does not help, and the other one is risky. A good answer gives general information and says to ask a doctor.
- **Intermediário:** Both responses have problems. The refusal is unhelpful, because this is a normal health question. Saying it's totally safe is risky, because some painkillers can affect blood pressure. The best answer gives careful general information and suggests talking to a pharmacist.
- **Profissional:** Both are flawed, in opposite directions. The full refusal is over-refusal: it's a common, legitimate question, and the user gets nothing. Saying 'totally safe' is harmful compliance, because some painkillers, like ibuprofen, can raise blood pressure or interact with certain medications. If I had to choose, I'd probably rate the 'totally safe' one lower because it could cause real harm. The ideal response explains the possible interaction in general terms and recommends checking with a doctor or pharmacist.
- **Dica:** Mostre que os dois extremos são erros e descreva a resposta ideal.
- **Follow-up:** Which one would you rate lower, and why?

### 72. You are not sure if a request is harmful or safe, and the safety guidelines are not clear. How do you evaluate the response?
*Você não tem certeza se um pedido é prejudicial ou seguro, e as diretrizes de segurança não são claras. Como você avalia a resposta?* · nível 4 · scenario

- **Básico:** I read the guidelines again. If it is still not clear, I ask my team lead and write a note.
- **Intermediário:** First, I check the guidelines and similar examples. Then I think about the most likely user intent and the real risk. If it's still unclear, I flag the task or ask the team lead, and I explain my decision in a comment.
- **Profissional:** First, I reread the safety guidelines and look for similar examples or past decisions. Then I think about the realistic intent: would most people asking this have a normal reason, and how much real harm could the answer cause? Information that's freely available and low-risk usually shouldn't be refused. If I'm still unsure, I don't guess silently. I flag the task or ask the reviewer or team lead, and I write a clear note explaining my reasoning, so the team can update the guidelines and stay consistent.
- **Dica:** Entrevistadores adoram ouvir 'flag / escalate' e 'document my reasoning'.
- **Follow-up:** What do you do if your team lead disagrees with your decision?

### 73. How do you start your answer when you compare two responses?
*Como você começa sua resposta quando compara duas respostas?* · nível 1 · practical

- **Básico:** I say: I prefer Response A because it is correct.
- **Intermediário:** I start with my choice and the main reason. For example: I prefer Response B because it follows the word limit and has no errors.
- **Profissional:** I start with a clear verdict and the main reason, like: I prefer Response A because it's accurate and follows the format. Then I give specific points with First and Second, mention what the other response does better with However, and finish with Overall. This structure makes my justification easy to follow.
- **Dica:** Memorize: I prefer... because... First... Second... However... Overall...
- **Follow-up:** What do you say when both responses are equally good?

### 74. Response A has correct code but no explanation. Response B has a clear explanation, but its code has a small bug. Compare them using a structured answer.
*A resposta A tem código correto mas sem explicação. A resposta B tem uma explicação clara, mas o código tem um pequeno bug. Compare as duas de forma estruturada.* · nível 3 · practical

- **Básico:** I prefer Response A because the code works. First, B has a bug. However, B has a better explanation. Overall, A is better.
- **Intermediário:** I prefer Response A because the code is correct. First, A's code runs without errors. Second, B's code has a bug, so the user can't use it as it is. However, B is better at explaining the logic. Overall, A is better because working code is the most important thing.
- **Profissional:** I prefer Response A because its code is correct and the user can use it right away. First, I tested both, and A's code runs and handles the main case. Second, B's code has a bug: the loop stops one item early, so it gives the wrong result. However, B is better at explaining the logic, which would help a beginner. Overall, A is better, because a clear explanation doesn't help if the code doesn't work, but I'd note that A could be improved with a short explanation.
- **Dica:** Use o template completo e seja específico sobre o bug.
- **Follow-up:** Would your answer change if the bug in B was only a typo in a comment?

### 75. You need to rank four responses, and two of them look almost the same. How do you approach the ranking?
*Você precisa ordenar quatro respostas, e duas parecem quase iguais. Como você faz o ranking?* · nível 4 · scenario

- **Básico:** I use the rubric. First, I check accuracy and safety. If two are the same, I look at small details or mark a tie.
- **Intermediário:** I evaluate each response with the same criteria, starting with accuracy, safety and instruction following. For the two similar ones, I look for small differences, like clarity or formatting. If they're really equal, I use a tie if the task allows it, and I explain why.
- **Profissional:** First, I read the prompt and list the requirements. Then I evaluate each response against the same rubric, starting with the most important dimensions: safety, accuracy and instruction following. That usually separates the best and worst quickly. For the two near-identical ones, I compare carefully: a subtle factual detail, a missed constraint, clarity or tone. If I truly can't find a meaningful difference, I mark them as tied if the task allows it, rather than inventing a reason. In all cases, I write a short justification so my ranking is consistent and easy to review.
- **Dica:** Mostre processo: critérios na ordem de importância, honestidade em empates, justificativa.
- **Follow-up:** What if the task does not allow ties?

### 76. What is a Likert scale?
*O que é uma escala Likert?* · nível 1 · concept

- **Básico:** A Likert scale is a score from 1 to 5. One is very bad, and five is excellent.
- **Intermediário:** A Likert scale is a rating scale, usually from 1 to 5 or 1 to 7. Each number has a meaning, like poor, okay, good, or excellent.
- **Profissional:** A Likert scale is an ordered rating scale, often 1 to 5 or 1 to 7, where each point has a defined meaning, for example 1 is very poor and 5 is excellent. In evaluation projects, the rubric explains exactly what each score means for each dimension, so different raters give similar scores.
- **Dica:** Diga que cada número tem um significado definido na rubrica.
- **Follow-up:** What score would you give a response with one major error?

### 77. What makes a good justification for a score?
*O que torna boa uma justificativa para uma nota?* · nível 2 · practical

- **Básico:** A good justification is short and specific. It says the exact problem.
- **Intermediário:** A good justification is short, clear and specific. It connects to the rubric and names the exact error or strength, not just 'it is good'.
- **Profissional:** A good justification is concise, specific and tied to the rubric. It names the exact issue, like 'the function fails for an empty array' instead of 'the code is bad,' and it explains the impact on the user. It also mentions important strengths, so the reviewer understands why I chose that exact score and not one point higher or lower.
- **Dica:** Dê um exemplo de justificativa vaga vs específica.
- **Follow-up:** Can you give me an example of a justification for a score of 2?

### 78. How do you stay consistent when you rate hundreds of responses?
*Como você mantém consistência quando avalia centenas de respostas?* · nível 3 · concept

- **Básico:** I read the rubric often. I also take breaks, so I don't get tired.
- **Intermediário:** I reread the rubric and look at calibration examples. I keep notes about difficult cases, and I take short breaks to stay focused.
- **Profissional:** I keep the rubric open and reread the score definitions, especially for borderline cases. I use calibration examples as anchors, and I keep a personal note of decisions on tricky cases, so I handle similar cases the same way later. I also take regular breaks, because fatigue causes drift. And I take reviewer feedback seriously and adjust quickly.
- **Dica:** A palavra 'drift' (desvio com o tempo) impressiona o entrevistador.
- **Follow-up:** What do you do when you get feedback that your scores are too high?

### Exercício m3-x01 (pairwise, nível 1)
**Prompt:** In what year did the Berlin Wall fall?

**Response A:**

```
The Berlin Wall fell in 1989, on November 9. It was an important moment that led to the reunification of Germany in 1990.
```

**Response B:**

```
The Berlin Wall fell in 1991, at the same time as the end of the Soviet Union. After that, Germany became one country again.
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** I prefer Response A because it is accurate. First, the Berlin Wall fell in 1989, and A gives the correct year and even the exact date. Second, A adds useful context about German reunification in 1990, which is also correct. However, B is not badly written. Overall, A is better because B has a major factual error: it says 1991, which is the year the Soviet Union ended, not the year the wall fell.

**Por quê:** O Muro de Berlim caiu em 9 de novembro de 1989. A resposta B confunde com 1991 (fim da União Soviética). É um erro factual grave na resposta principal, então A é claramente melhor.

### Exercício m3-x02 (pairwise, nível 2)
**Prompt:** Can you give me a scientific source that shows sleep helps memory?

**Response A:**

```
Sure! A great source is: Johnson, M. and Lee, K. (2019). 'Sleep Boosts Memory by 40 Percent.' Journal of Brain Health, 12(3), 45-60. Link: www.journalbrainhealth.org/sleep-memory-2019. This study proves that sleeping 8 hours improves memory by 40 percent.
```

**Response B:**

```
Yes, there is strong research on this. Scientists call it memory consolidation during sleep. A good starting point is the book 'Why We Sleep' by Matthew Walker. For research papers, search Google Scholar for 'sleep memory consolidation'. I can't check links in real time, so please confirm the exact details of any paper you use.
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** I prefer Response B because it is honest and the information is real. First, Response A looks like a hallucinated citation: the authors, the journal and the link look invented, and I could not find them. Second, A says the study proves a 40 percent improvement, which is overconfident. However, A looks more complete because it gives an exact reference. Overall, B is better, because a fake source can seriously mislead the user, and B gives real starting points and honestly asks the user to verify.

**Por quê:** A resposta A tem todos os sinais de uma citação alucinada: autores, revista e link genéricos e números exatos demais ('40 percent'). B é honesta, indica um livro real de Matthew Walker e ensina onde buscar artigos. Honestidade e veracidade vencem.

### Exercício m3-x03 (pairwise, nível 2)
**Prompt:** In under 30 words, explain what an API is.

**Response A:**

```
An API is a set of rules that lets two programs talk to each other. For example, a weather app uses an API to get data from a server.
```

**Response B:**

```
An API, or Application Programming Interface, is a very important concept in software development. It is a set of rules and protocols that allows different software applications to communicate with each other. For example, when you use a weather app on your phone, the app sends a request to a server through an API, and the server sends back the weather data. APIs are used everywhere, from social media to payments.
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** I prefer Response A because it follows the instruction. First, the user asked for under 30 words, and A has about 29 words, while B has more than 70. Second, A is still accurate and gives a simple example. However, B gives more detail, like the full name of API. Overall, A is better, because both are correct, but B ignores a clear constraint from the user.

**Por quê:** As duas respostas estão corretas, mas o usuário deu uma restrição explícita: menos de 30 palavras. A respeita o limite (cerca de 29 palavras); B ultrapassa muito. Em instruction following, A vence.

### Exercício m3-x04 (pairwise, nível 2)
**Prompt:** How do I kill the process that is using port 3000 on my Mac?

**Response A:**

```
I'm sorry, but I can't help with killing anything. Violence is never the answer. If you are having problems, please talk to someone you trust.
```

**Response B:**

```
First, find the process ID (PID) using the port:

lsof -i :3000

Then stop it with:

kill -9 <PID>

Replace <PID> with the number from the first command. Tip: try a normal kill first, and use -9 only if the process does not stop.
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** I prefer Response B because it correctly answers a normal technical question. First, Response A is a clear over-refusal: kill a process is a standard computer term, not violence. Second, B gives correct commands, lsof to find the PID and kill to stop the process, with a useful safety tip. However, A is polite. Overall, B is much better, because the request is completely safe and A leaves the user with no help.

**Por quê:** 'Kill a process' é um termo técnico comum. A resposta A reagiu à palavra 'kill' e recusou: é over-refusal. B dá os comandos certos (lsof -i :3000 e kill) e até sugere tentar um kill normal antes do -9.

### Exercício m3-x05 (pairwise, nível 2)
**Prompt:** Write a JavaScript function that reverses a string.

**Response A:**

```
Here is a simple solution:

function reverseString(str) {
  return str.split('').reverse().join('');
}

It splits the string into characters, reverses the array, and joins it back.
```

**Response B:**

```
You can use a loop:

function reverseString(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

It reads the string from the end to the start and builds a new string.
```

**Pergunta:** Which response is better, or are they about the same? Explain.

**Resposta modelo:** I think it's a tie. First, both functions are correct and return the reversed string for normal input. Second, both include a short, clear explanation of how the code works. A is shorter and uses built-in methods, while B uses a loop, which some beginners find easier to follow. However, neither one mentions special characters like emojis, which can break with both approaches. Overall, they are about the same quality, so I would mark them as equal.

**Por quê:** As duas funções estão corretas e bem explicadas; a diferença é só de estilo (métodos prontos vs loop). Nenhuma trata emojis/caracteres especiais (pares substitutos), então a limitação é igual. Empate justo.

### Exercício m3-x06 (pairwise, nível 3)
**Prompt:** Can I take ibuprofen with my blood pressure medicine?

**Response A:**

```
Be careful. Ibuprofen and other NSAIDs can raise blood pressure and can make some blood pressure medicines work less well. Using it for a short time may be okay for some people, but it depends on your medicine and your health. Please ask your pharmacist or doctor before you take it. They can also suggest an alternative, like acetaminophen, if it's right for you.
```

**Response B:**

```
Yes, it's totally safe. Ibuprofen is a common medicine, and you can buy it without a prescription, so you can take it with any other medicine. Take as much as you need for the pain.
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** I prefer Response A because it is accurate and safe. First, A correctly explains that ibuprofen can raise blood pressure and interact with some medicines. Second, A gives useful information and recommends talking to a pharmacist or doctor, without refusing. However, B is shorter and more direct. Overall, A is much better, because B is harmful: saying it's totally safe with any medicine and to take as much as you need is false and could hurt the user.

**Por quê:** B é um caso de harmful compliance: afirma algo falso ('totally safe', 'as much as you need'). AINEs como ibuprofeno podem aumentar a pressão e reduzir o efeito de alguns anti-hipertensivos. A ajuda de verdade, sem recusar, e recomenda um profissional.

### Exercício m3-x07 (single, nível 1)
**Prompt:** What is 15% of 200?

**Response A:**

```
Great question! Percentages are a very useful part of math that we use every day, for example when we go shopping or calculate tips at a restaurant. The word percent comes from Latin and means 'per hundred'. To find 15% of 200, we first change 15% into a decimal, which is 0.15. Then we multiply 0.15 by 200. So, 0.15 times 200 equals 30. The answer is 30. I hope this helps you understand percentages better!
```

**Pergunta:** Rate this response from 1 to 5 and explain your score.

**Resposta modelo:** I would give this response a 3 out of 5. First, the answer is correct: 15 percent of 200 is 30, and the steps are right. Second, it is too verbose for a simple question. The history of the word percent and the comments about shopping are not needed. The final answer only appears at the end, so the user has to read a lot to find it. A better response would say 30 in the first sentence and maybe one line of calculation.

**Por quê:** Está correta (30), então a nota não é baixa. Mas é verbosa: muito texto de enchimento para uma pergunta simples, e a resposta só aparece no final. Uma nota 3 (ou 4, dependendo da rubrica) com justificativa sobre concisão é adequada.

### Exercício m3-x08 (single, nível 3)
**Prompt:** Give me three popular frontend frameworks as a JSON array of strings. Return only the JSON, nothing else.

**Response A:**

```
Sure! Here are three popular frontend frameworks:

["React", "Vue", "Angular", "Svelte"]

Let me know if you want more!
```

**Pergunta:** Rate this response from 1 to 5 and explain your score.

**Resposta modelo:** I would give this response a 2 out of 5. The content is accurate, because React, Vue, Angular and Svelte are all popular frontend frameworks. However, it fails two clear instructions. First, the user asked for only the JSON, but the response adds text before and after, which can break JSON parsing in code. Second, the user asked for three items, but the array has four. Because the main task was about format and count, these are serious instruction-following errors.

**Por quê:** O conteúdo está correto, mas a resposta viola duas restrições explícitas: 'only the JSON' (adiciona frases antes e depois, o que quebraria um JSON.parse) e 'three' (dá quatro itens). Por isso uma nota baixa, como 2.

## Módulo 4: AI Training e Anotação de Dados (AI Training & Data Annotation)

### 79. What is data labeling?
*O que é rotulagem de dados?* · nível 1 · concept

- **Básico:** Data labeling means adding labels to data. The model uses this data to learn.
- **Intermediário:** Data labeling is adding the correct category or information to each example, like positive or negative for a review. Then the model learns from these labeled examples.
- **Profissional:** Data labeling is the process of adding correct, structured information to raw data, for example a sentiment category for a review or a toxicity label for a comment. That labeled data is used to train and evaluate models. For LLMs, it also includes writing ideal responses for fine-tuning and comparing responses for preference training.
- **Dica:** Dê um exemplo simples (sentimento) e conecte com LLMs.
- **Follow-up:** Why is the quality of labels so important?

### 80. How is human-labeled data used to train large language models?
*Como os dados rotulados por humanos são usados para treinar LLMs?* · nível 2 · concept

- **Básico:** Humans write good answers for fine-tuning. They also compare answers, and the model learns from their choices.
- **Intermediário:** In supervised fine-tuning, humans write or fix ideal responses, and the model learns from them. In RLHF or DPO, humans compare two responses and choose the better one, so the model learns their preferences.
- **Profissional:** There are two main uses. In supervised fine-tuning, or SFT, annotators write or correct high-quality demonstration responses, and the model learns to imitate them. In preference training, like RLHF or DPO, annotators compare model outputs and pick the better one; in RLHF those choices train a reward model, and DPO uses the pairs directly. Human-labeled data is also used for evaluation, to measure if a new model is actually better.
- **Dica:** Mencionar SFT, RLHF com reward model, e DPO mostra conhecimento técnico atual.
- **Follow-up:** What is the difference between RLHF and DPO?

### 81. How do you balance speed and quality in annotation work?
*Como você equilibra velocidade e qualidade no trabalho de anotação?* · nível 3 · behavioral

- **Básico:** Quality comes first. I get faster with practice.
- **Intermediário:** For me, quality is the priority, because bad labels hurt the model. With practice and good knowledge of the guidelines, I become faster without losing quality.
- **Profissional:** I always put quality first, because one wrong label can be worse than no label at all. At the start of a project, I go slower and study the guidelines and examples carefully. As I learn the common patterns, my speed improves naturally. I also watch the project's time expectations, and if a task takes much longer than expected, I check if I'm overthinking it or if it should be flagged.
- **Dica:** Não diga que é 'muito rápido'. Diga que qualidade vem primeiro e a velocidade vem com prática.
- **Follow-up:** What do you do if a task is taking much longer than the expected time?

### 82. You notice that you labeled about fifty examples using the wrong definition of a category. What do you do?
*Você percebe que rotulou cerca de cinquenta exemplos usando a definição errada de uma categoria. O que você faz?* · nível 4 · scenario

- **Básico:** I tell my team lead right away. Then I fix the labels if I can.
- **Intermediário:** I tell the team lead or reviewer immediately and explain the mistake. If the platform allows it, I correct the labels. Then I review the definition so it doesn't happen again.
- **Profissional:** I'd report it to my team lead right away, with a clear description: which tasks, what definition I used, and what the correct one is. Being transparent quickly matters, because those labels might already be going into training data. If the platform lets me edit, I'd relabel them, or I'd ask how the team wants to handle it. Then I'd check my other work for the same issue and add a note to myself, so it doesn't happen again.
- **Dica:** Honestidade e rapidez são o que importa. Nunca esconda o erro.
- **Follow-up:** How would you make sure this doesn't happen again?

### 83. What are annotation guidelines?
*O que são diretrizes de anotação?* · nível 1 · concept

- **Básico:** Guidelines are the rules of the project. They explain how to label the data.
- **Intermediário:** Annotation guidelines are a document with the rules of the task. They define each category and give examples, so all annotators label the same way.
- **Profissional:** Annotation guidelines are the project's instruction manual. They define the task, each label or criterion, give good and bad examples, and explain how to handle difficult cases. Their main goal is consistency: different annotators should make the same decision on the same item.
- **Dica:** A palavra-chave é consistency: as guidelines existem para todos decidirem igual.
- **Follow-up:** What do you do when the guidelines change?

### 84. What do you do if you disagree with a rule in the guidelines?
*O que você faz se discorda de uma regra nas diretrizes?* · nível 2 · behavioral

- **Básico:** I follow the rule. Then I give feedback to my team lead.
- **Intermediário:** I still follow the rule, because consistency is important. But I send my feedback through the right channel, with an example, so the team can decide.
- **Profissional:** I follow the rule in my work, because if each annotator uses their own opinion, the data becomes inconsistent. At the same time, I share my concern through the proper channel, with a concrete example of why the rule might cause problems. That way, the decision stays with the people who own the guidelines, and the project can improve.
- **Dica:** Nunca diga que ignoraria a regra. Mostre profissionalismo: segue e dá feedback.
- **Follow-up:** Can you give an example of feedback you could send?

### 85. You start a new project with a long, forty-page guideline document. How do you prepare?
*Você começa um projeto novo com um documento de diretrizes de quarenta páginas. Como você se prepara?* · nível 3 · practical

- **Básico:** I read all the guidelines carefully. I take notes and study the examples.
- **Intermediário:** I read the whole document carefully and make a short summary. I study the examples, and I write down questions to ask the team. During the work, I go back to the guidelines often.
- **Profissional:** I read the full document once to understand the big picture, then a second time more slowly, taking notes. I build a short checklist of the key rules and the most common mistakes. I pay special attention to the examples and edge cases, because they show how the rules are applied. I write down anything unclear and ask early. Then I keep the document open while I work, and I check for updates regularly.
- **Dica:** Mostre método: leitura completa, checklist, exemplos, perguntas e revisão contínua.
- **Follow-up:** What do you do if two parts of the guidelines seem to contradict each other?

### 86. What is inter-annotator agreement?
*O que é concordância entre anotadores?* · nível 1 · concept

- **Básico:** It measures how often different annotators give the same label to the same example.
- **Intermediário:** Inter-annotator agreement measures how much different annotators agree when they label the same items. High agreement means the task and guidelines are clear.
- **Profissional:** Inter-annotator agreement measures how consistently different annotators label the same items. It can be a simple percentage, but metrics like Cohen's kappa or Krippendorff's alpha are better because they correct for agreement that happens by chance. High agreement suggests the guidelines are clear and the labels are reliable.
- **Dica:** Mencione kappa e o 'acaso' (by chance) para mostrar nível profissional.
- **Follow-up:** What can cause low agreement?

### 87. What quality assurance methods are common in annotation projects?
*Quais métodos de garantia de qualidade são comuns em projetos de anotação?* · nível 2 · concept

- **Básico:** Reviewers check our work. There are also test questions with known answers.
- **Intermediário:** Common methods are reviewer checks on a sample of tasks, gold questions with a known correct answer, and measuring agreement between annotators. Teams also use calibration sessions and feedback.
- **Profissional:** Common QA methods include a reviewer auditing a random sample of completed tasks, gold or test questions with known answers mixed into the queue, and overlap, where several annotators label the same item to measure agreement. Projects also run calibration sessions, give individual feedback, and track quality scores over time, so problems are caught early.
- **Dica:** Liste pelo menos três: review, gold questions, overlap/agreement.
- **Follow-up:** How would you react to a low quality score from a reviewer?

### 88. Agreement between annotators on one category is very low. What could be the reasons, and how would you help fix it?
*A concordância entre anotadores em uma categoria é muito baixa. Quais podem ser os motivos e como você ajudaria a resolver?* · nível 3 · scenario

- **Básico:** Maybe the definition is not clear. We can add examples and talk about the difficult cases together.
- **Intermediário:** The definition in the guidelines may be vague, or the category may be very subjective. To fix it, we can look at the examples with disagreement, add clearer rules and examples, and do a calibration session.
- **Profissional:** Low agreement usually means the category definition is vague, it overlaps with another category, or the task is genuinely subjective. Sometimes a few annotators simply misunderstood the rule. I'd start by looking at the specific items where people disagree, to find the pattern. Then the team can clarify the definition, add borderline examples, and run a calibration session. If the category is really subjective, it might be better to split it or allow an 'unsure' option.
- **Dica:** Comece analisando os itens com discordância: isso mostra pensamento orientado a dados.
- **Follow-up:** What would you do if one annotator disagrees with everyone else?

### 89. What is preference ranking?
*O que é ranking de preferência?* · nível 1 · concept

- **Básico:** Preference ranking means I compare two answers and choose the better one.
- **Intermediário:** In preference ranking, I see two or more responses to the same prompt and order them from best to worst. This data helps train the model.
- **Profissional:** Preference ranking is when an annotator compares several model responses to the same prompt and orders them, often with a strength rating like slightly or much better. These comparisons become chosen and rejected pairs, which are used for RLHF or DPO to teach the model what people prefer.
- **Dica:** Conecte com RLHF/DPO para mostrar que entende o propósito.
- **Follow-up:** Why do some tasks ask how much better one response is?

### 90. What is length bias in preference data, and how do you avoid it?
*O que é viés de tamanho nos dados de preferência e como você evita?* · nível 2 · concept

- **Básico:** Length bias is when we choose the longer answer because it looks better. I check the quality, not the length.
- **Intermediário:** Length bias is preferring longer responses just because they look more complete. Then the model learns to be verbose. I avoid it by judging accuracy and helpfulness, not the size.
- **Profissional:** Length bias is when raters prefer longer responses because they look more thorough, even if the extra content adds nothing. Since preference data trains the model, it learns to be verbose. To avoid it, I first check accuracy, instruction following and safety, then ask if the extra length actually helps the user. If a shorter response solves the problem just as well, I prefer it.
- **Dica:** Explique a consequência: o modelo aprende o que os anotadores recompensam.
- **Follow-up:** Are there other biases that raters can have?

### 91. You see two responses that are both bad. The task still asks you to choose one. What do you do?
*Você vê duas respostas ruins. A tarefa ainda pede para escolher uma. O que você faz?* · nível 2 · scenario

- **Básico:** I choose the less bad one. In my comment, I say that both have problems.
- **Intermediário:** I choose the response with fewer or less serious problems. I use a low score or 'slightly better', and I explain in my justification that both responses have issues.
- **Profissional:** I still make a choice, picking the one with the less serious problems. For example, a response with a style issue beats one with a factual error or a safety issue. I'd show that in the strength rating, like 'slightly better', and give both low absolute scores if the task has them. In my justification, I clearly say both are flawed and why, and if the guidelines have a flag for 'both unacceptable', I'd use it.
- **Dica:** Mostre que você compara a gravidade dos erros e comunica que as duas são ruins.
- **Follow-up:** How do you decide which problem is more serious?

### 92. What types of errors can you find in AI-generated text?
*Que tipos de erros você pode encontrar em textos gerados por IA?* · nível 1 · concept

- **Básico:** There can be factual errors, invented information, and grammar errors.
- **Intermediário:** Common errors are factual errors, hallucinations like fake sources, logic or math errors, and not following the instructions. In code, there can be bugs.
- **Profissional:** The main types are factual errors, hallucinations such as invented sources or functions, logic and calculation errors, instruction-following failures like ignoring a format, safety issues, bugs in code, and smaller problems like grammar or formatting. I always classify the type and the severity, because they affect the score differently.
- **Dica:** Liste vários tipos e diga que classifica tipo e gravidade.
- **Follow-up:** Which type of error is the hardest to find?

### 93. Describe your process to evaluate a piece of AI-generated content.
*Descreva seu processo para avaliar um conteúdo gerado por IA.* · nível 2 · practical

- **Básico:** I read the prompt. Then I read the response and check the facts. Finally, I write my comment.
- **Intermediário:** First, I read the prompt and list what the user wants. Then I read the full response and check the facts and the code. I mark each error with its type and severity, and I write a clear justification.
- **Profissional:** First, I read the prompt carefully and list the explicit requirements and constraints. Then I read the whole response once without judging, to understand it. Next, I verify the key claims and test any code. I mark each issue with its type and severity, major or minor. Finally, I give the rating based on the rubric and write a short, specific justification. If the task asks for a rewrite, I fix the errors without changing the parts that were correct.
- **Dica:** Use palavras de sequência: First, Then, Next, Finally.
- **Follow-up:** How do you evaluate a response about a topic you don't know well?

### 94. An AI response is very fluent and professional, but you suspect one important claim is wrong, and you can't verify it quickly. What do you do?
*Uma resposta da IA é muito fluente e profissional, mas você suspeita que uma afirmação importante está errada e não consegue verificar rápido. O que você faz?* · nível 4 · scenario

- **Básico:** I don't trust the tone. I search for good sources. If I still don't know, I write a note and ask my lead.
- **Intermediário:** I don't trust the response just because it sounds good. I try to verify the claim with reliable sources. If I can't, I write in my comment that this claim is unverified, and I follow the guidelines, maybe skip the task or ask the team lead.
- **Profissional:** Fluency isn't evidence, so I wouldn't accept the claim just because it sounds professional. I'd spend a reasonable amount of time checking reliable sources, like official documentation or primary sources. If I still can't confirm it, I wouldn't pretend to know. I'd state clearly in my justification that this claim is unverified and why I doubt it, and I'd follow the project rules: some projects want you to skip tasks outside your expertise, others want a note for the reviewer. I wouldn't give a high accuracy score to something I couldn't verify.
- **Dica:** Mostre honestidade intelectual: não finja saber e documente a dúvida.
- **Follow-up:** How much time would you spend verifying one claim?

### 95. What makes a good prompt for training data?
*O que torna um prompt bom para dados de treinamento?* · nível 1 · concept

- **Básico:** A good prompt is clear and specific. It looks like a real user question.
- **Intermediário:** A good prompt is clear, specific and realistic. It has a goal, like testing format or reasoning, and it often has constraints that are easy to check.
- **Profissional:** A good training prompt is clear, specific and realistic, something a real user might actually ask. It has a purpose, like testing instruction following or multi-step reasoning, and it often includes verifiable constraints, such as a word limit or a required format. It also gives enough context so the ideal answer is well defined.
- **Dica:** Use 'realistic' e 'verifiable constraints'.
- **Follow-up:** Can you give an example of a weak prompt and how to improve it?

### 96. Improve this prompt: 'Write about React.' Tell me how you would change it.
*Melhore este prompt: 'Write about React.' Diga como você mudaria.* · nível 2 · practical

- **Básico:** The prompt is too vague. I would ask about one topic, like useEffect, with a short example.
- **Intermediário:** It's too vague. I would make it specific: 'Explain when to use useEffect in React in under 150 words, with one short code example for a beginner.'
- **Profissional:** The original is too vague, so the responses could be anything and are hard to evaluate. I'd add a specific topic, an audience, a length limit and a format. For example: 'I'm a junior developer. In under 150 words, explain when I should use useMemo in React, and include one short TypeScript example.' Now there's a clear goal and constraints we can check.
- **Dica:** Use sua experiência com React: dê um prompt concreto como exemplo.
- **Follow-up:** What skill does your new prompt test?

### 97. What is an adversarial prompt, and why do training projects use them?
*O que é um prompt adversarial e por que projetos de treinamento usam?* · nível 3 · concept

- **Básico:** An adversarial prompt is a hard prompt. It tries to make the model fail, so we can find weaknesses.
- **Intermediário:** An adversarial prompt is designed to make the model make a mistake, for example with a trick question or a false premise. Projects use them to find weaknesses and then improve the model.
- **Profissional:** An adversarial prompt is intentionally designed to challenge the model and expose its failures, for example a question with a false premise, conflicting constraints, or a tricky reasoning step. Projects use them because easy prompts don't show where the model is weak. When the model fails, annotators can write better responses or preferences for those cases, so the next version improves. It's important to stay within the project's rules when writing them.
- **Dica:** Dê exemplos seguros: premissa falsa, restrições conflitantes, raciocínio complicado.
- **Follow-up:** Can you give an example of an adversarial prompt for a coding model?

### 98. The project asks you to write twenty prompts that test instruction following. How do you make them useful and diverse?
*O projeto pede vinte prompts que testem instruction following. Como você os torna úteis e diversos?* · nível 4 · practical

- **Básico:** I use different topics and different rules, like word limits, lists and JSON. Some prompts are easy, and some are hard.
- **Intermediário:** I vary the topics and the types of constraints, like word limits, JSON format, number of items and tone. I mix easy prompts with harder ones that combine several constraints, and I make sure each constraint is easy to check.
- **Profissional:** I'd plan before writing. First, I'd list types of constraints: length, format like JSON or tables, number of items, language, tone, and negative instructions like 'don't use the word X'. Then I'd spread them across different topics, like coding, cooking, travel and business, so the set isn't repetitive. I'd include a range of difficulty, from one simple constraint to several combined constraints. Every constraint would be objectively verifiable, so evaluators can agree on pass or fail. And I'd keep them realistic, like something a real user would write.
- **Dica:** Mostre planejamento: matriz de tipos de restrição x temas x dificuldade.
- **Follow-up:** Why is it important that constraints are verifiable?

### 99. What is bias in an AI response?
*O que é viés em uma resposta de IA?* · nível 1 · concept

- **Básico:** Bias is when the AI is unfair to a group of people. For example, it uses stereotypes.
- **Intermediário:** Bias is when a response treats groups of people unfairly or uses stereotypes, for example assuming that all engineers are men.
- **Profissional:** Bias in an AI response means it treats people or groups unfairly, for example by using stereotypes, making assumptions based on gender, nationality or age, or giving different quality of help depending on who is asking. It can also mean presenting only one side of a debated topic as if it were the only view.
- **Dica:** Dê um exemplo concreto de estereótipo.
- **Follow-up:** How can annotators also be biased?

### 100. How do you make sure your own opinions don't affect your ratings?
*Como você garante que suas opiniões não afetam suas avaliações?* · nível 3 · behavioral

- **Básico:** I use the rubric, not my opinion. I try to be neutral and fair.
- **Intermediário:** I focus on the rubric criteria, like accuracy and helpfulness, not whether I agree. I also ask myself if I would give the same score if the response had the opposite opinion.
- **Profissional:** I base every rating on the rubric criteria, like accuracy, balance and helpfulness, not on whether I agree with the content. One trick I use is a swap test: would I give the same score if the response argued the other side, or was about a different group? I also notice my own preferences, like a favorite writing style, and try not to reward them. If a topic is very personal to me, I'm extra careful and double-check my reasoning.
- **Dica:** O 'swap test' é uma técnica concreta que impressiona.
- **Follow-up:** How should a model answer a question about a controversial topic?

### 101. A reviewer tells you that your labels are inconsistent: you labeled similar cases in different ways. How do you respond, and what do you change?
*Um revisor diz que seus rótulos estão inconsistentes: você rotulou casos parecidos de formas diferentes. Como você responde e o que você muda?* · nível 4 · scenario

- **Básico:** I thank the reviewer. I look at the examples and read the guidelines again. I also write notes about my decisions.
- **Intermediário:** I thank the reviewer and look at the examples to understand the problem. Then I reread the guidelines for those cases, write notes about the correct decisions, and take breaks so I stay focused.
- **Profissional:** First, I'd thank the reviewer and stay open, because this feedback directly improves the data. I'd ask for or review the specific examples to find the pattern: maybe I'm unsure about one rule, or my decisions change when I'm tired. Then I'd reread that part of the guidelines and, if something is still unclear, ask for clarification. Going forward, I'd keep a personal decision log for tricky cases, so I treat similar items the same way, and I'd take regular breaks to avoid fatigue. Finally, I'd check my recent work for the same issue.
- **Dica:** Mostre que recebe feedback bem e cria um sistema (decision log) para não repetir.
- **Follow-up:** What if you think the reviewer is wrong about one of the examples?

### 102. What is an edge case in annotation?
*O que é um caso limite (edge case) na anotação?* · nível 1 · concept

- **Básico:** An edge case is a rare or strange example. The guidelines don't explain it well.
- **Intermediário:** An edge case is an unusual example that is hard to label, because the guidelines don't cover it clearly, like a sarcastic comment.
- **Profissional:** An edge case is an unusual or borderline example where the normal rules don't clearly apply, for example a sarcastic review, a text in two languages, or a response that is partly correct. These cases are important, because how we handle them affects consistency, and they often show where the guidelines need to improve.
- **Dica:** Dê exemplos: sarcasmo, dois idiomas, resposta parcialmente correta.
- **Follow-up:** Can you give an example from a coding task?

### 103. You need to label the sentiment of this review: 'Oh great, my order is late again.' The guidelines don't mention sarcasm. What label do you choose?
*Você precisa rotular o sentimento desta avaliação: 'Oh great, my order is late again.' As guidelines não falam de sarcasmo. Que rótulo você escolhe?* · nível 2 · scenario

- **Básico:** I choose negative. The comment is sarcastic, so the real meaning is negative.
- **Intermediário:** I would label it negative, because it's sarcasm. The word great is positive, but the person is unhappy about the late order. I would also add a note and suggest a rule about sarcasm.
- **Profissional:** I'd label it negative. The word 'great' looks positive, but it's clearly sarcastic: the customer is frustrated that the order is late again. The purpose of a sentiment label is to capture what the writer actually feels, so the real meaning matters more than individual words. Since the guidelines don't mention sarcasm, I'd add a short note explaining my choice and suggest adding a sarcasm rule, so all annotators handle it the same way.
- **Dica:** Mostre que você decide pelo significado real e ajuda a melhorar a guideline.
- **Follow-up:** What if a sarcastic comment was much harder to interpret?

### 104. The guidelines don't cover this case, and you're not sure what to do. Walk me through your steps.
*As diretrizes não cobrem este caso e você não tem certeza do que fazer. Explique seus passos.* · nível 3 · scenario

- **Básico:** I read the guidelines again. I look for similar cases. If I still don't know, I flag the task and ask my lead.
- **Intermediário:** First, I reread the guidelines and examples. Then I check the FAQ or the project channel for similar cases. If there's no answer, I choose the option closest to the spirit of the guidelines, write a note, and flag it or ask my team lead.
- **Profissional:** First, I reread the relevant section and the examples, because sometimes the answer is there in a different form. Second, I check the FAQ, the project channel or past decisions for similar cases. Third, if there's still nothing, I use my best judgment and choose the option closest to the spirit of the guidelines, meaning what the rules are trying to achieve. Fourth, I document my reasoning in a short note, and I flag or escalate the case to the team lead, so they can decide and maybe update the guidelines. What I don't do is guess silently or spend an hour stuck on one task.
- **Dica:** Resposta estruturada (First, Second, Third, Fourth) com 'spirit of the guidelines' e 'escalate'.
- **Follow-up:** What if there is no team lead available right now?

### Exercício m4-x01 (pairwise, nível 2)
**Prompt:** Write two sentences introducing a nurse and an engineer for a short story.

**Response A:**

```
The nurse, a sweet and gentle young woman, always smiled and did what the doctors told her. The engineer, a strong and logical man, solved every problem on his own.
```

**Response B:**

```
Sam, the night-shift nurse, could calm any patient with a quiet joke and a steady hand. Priya, the bridge engineer, kept a notebook full of sketches and never stopped asking why.
```

**Pergunta:** Which response is better and why? Look for bias.

**Resposta modelo:** I prefer Response B because it avoids stereotypes. First, Response A uses gender stereotypes: the nurse is a sweet woman who obeys, and the engineer is a strong, logical man. Second, B describes the characters through their actions and personality, which is more interesting for a story. However, both responses follow the instruction and have two sentences. Overall, B is better because it is creative and fair, while A reinforces harmful stereotypes.

**Por quê:** A resposta A associa enfermagem a uma mulher doce e obediente e engenharia a um homem forte e lógico: estereótipo de gênero clássico. B cria personagens pelas ações, sem estereótipos, e ainda é mais criativa. As duas seguem o formato de duas frases.

### Exercício m4-x02 (single, nível 2)
**Prompt:** Annotation task. Guideline: label sentiment as Positive, Negative, or Mixed. Use Mixed when the text has clear positive and negative parts. Text: 'The delivery was three days late, but the headphones sound amazing.' An AI pre-labeling tool chose: Negative.

**Response A:**

```
Label: Negative. Reason: The customer complains that the delivery was late.
```

**Pergunta:** Is the AI label correct? What label would you choose and why?

**Resposta modelo:** The AI label is not correct. The text has a clear negative part, because the delivery was three days late. But it also has a clear positive part, because the headphones sound amazing. The guideline says to use Mixed when the text has both, so the correct label is Mixed. The AI only looked at the complaint and ignored the second half of the sentence.

**Por quê:** A guideline define Mixed para textos com partes positivas e negativas claras. O texto tem as duas: atraso (negativo) e som incrível (positivo). O rótulo Negative ignora metade do texto, então o correto é Mixed.

### Exercício m4-x03 (pairwise, nível 3)
**Prompt:** What's the best way to open an account at the bank?

**Response A:**

```
It depends a little on where you live and which bank you choose, but usually: 1) Pick a bank and an account type, like checking or savings. 2) Prepare an ID and proof of address. 3) Apply online or visit a branch. 4) Make the first deposit if required. If you tell me your country, I can give more specific steps.
```

**Response B:**

```
To open an account at Bank of America, go to their website and click Open Account. You will need your Social Security Number and a US address. The minimum deposit is always 25 dollars, and the account is free for everyone.
```

**Pergunta:** The user's request is ambiguous. Which response handles it better and why?

**Resposta modelo:** I prefer Response A because it handles the ambiguity well. First, the user didn't say which bank or country, and A gives useful general steps that work in most places. Second, A offers to give specific steps if the user shares their country. However, B is more specific, which would be great if the user really meant that bank. Overall, A is better, because B makes big assumptions and uses absolute claims like 'always 25 dollars' and 'free for everyone' that are probably not accurate.

**Por quê:** O pedido é ambíguo: qual banco? qual país? A dá passos gerais úteis e pede o país para detalhar. B assume um banco específico nos EUA e afirma coisas absolutas ('always', 'free for everyone') que provavelmente não são verdade. Em casos ambíguos, a melhor resposta ajuda e esclarece sem inventar.

### Exercício m4-x04 (pairwise, nível 2)
**Prompt:** What does Array.prototype.map return in JavaScript?

**Response A:**

```
map returns a new array. It calls your function on each element and puts the results in the new array, in the same order. The original array is not changed. Example: [1, 2, 3].map(n => n * 2) returns [2, 4, 6].
```

**Response B:**

```
map changes the original array in place and returns undefined, just like forEach. Example: after you run nums.map(n => n * 2), the nums array will contain the doubled values.
```

**Pergunta:** Find the error. Which response is better and why?

**Resposta modelo:** I prefer Response A because it is correct. First, map returns a new array with the results, and it does not change the original array, exactly like A explains. Second, A gives a correct and simple example. However, B is also short and has an example. Overall, A is much better, because B has a major factual error: it says map changes the array in place and returns undefined, but returning undefined is how forEach works, not map.

**Por quê:** map retorna um NOVO array e não altera o original. B está errada em dois pontos: diz que altera o array 'in place' e que retorna undefined (forEach é que retorna undefined). É um erro grave para um desenvolvedor.

### Exercício m4-x05 (pairwise, nível 3)
**Prompt:** Task for annotators: write a training prompt that tests whether a model can follow format constraints.

**Response A:**

```
Write something interesting about dogs.
```

**Response B:**

```
I'm making a pet adoption flyer. List exactly 3 reasons to adopt a senior dog. Use bullet points, keep each bullet under 12 words, and don't use the word 'old'.
```

**Pergunta:** Which prompt is better for this training goal, and why?

**Resposta modelo:** I prefer Response B because it actually tests format constraints. First, B has several clear constraints: exactly three items, bullet points, under 12 words each, and one word the model must not use. Second, all of these are easy to verify, so evaluators can agree if the model passed or failed. However, A is simple and natural, but it has no constraints at all. Overall, B is much better for this goal, because it is realistic, has context, and creates a clear test.

**Por quê:** O objetivo era testar restrições de formato. A é vago e não tem nenhuma restrição para verificar. B tem contexto realista (panfleto de adoção) e quatro restrições verificáveis: 3 itens, bullets, menos de 12 palavras e uma palavra proibida.

## Módulo 5: Avaliação de Código (Coding Evaluation)

### 105. What is the first thing you check in an AI code response?
*Qual é a primeira coisa que você verifica numa resposta de código da IA?* · nível 1 · concept

- **Básico:** I check if the code answers the prompt. Then I check if it runs.
- **Intermediário:** First, I check if the code does what the prompt asked, in the right language. Then I check if it runs without errors.
- **Profissional:** The first thing I check is whether the response actually answers the prompt: the right language, the right task, and all the constraints. Then I check if the code runs, looking for syntax errors, missing imports, or functions that don't exist. Only after that do I look at style and explanation.
- **Dica:** Comece sempre por 'answers the prompt' e 'runs'. Estilo vem depois. O entrevistador quer ver uma ordem de prioridades.
- **Follow-up:** What do you do if the code runs but doesn't follow all the instructions?

### 106. How do you know if an AI code answer really follows the user's instructions?
*Como você sabe se uma resposta de código da IA realmente segue as instruções do usuário?* · nível 2 · practical

- **Básico:** I read the prompt and make a list of the requirements. Then I check each one in the code.
- **Intermediário:** I read the prompt carefully and list every requirement, like the language, the function name, and the output format. Then I compare the code with that list, one by one.
- **Profissional:** I break the prompt into a short checklist of requirements: the language, the input and output format, any constraints like 'no external libraries', and edge cases the user mentioned. Then I check the code against each item. If even one important requirement is missing, I point it out clearly, because a correct solution to the wrong problem isn't helpful.
- **Dica:** Mencione 'checklist' e 'requirements'. Mostre que você é sistemático, não que lê por intuição.
- **Follow-up:** What if the prompt is ambiguous?

### 107. The AI's code looks clean, but it calls a library function that doesn't exist. How would you rate it, and what would you write in your feedback?
*O código da IA parece limpo, mas chama uma função de biblioteca que não existe. Como você avaliaria e o que escreveria no feedback?* · nível 4 · scenario

- **Básico:** I would give it a low rating. The function doesn't exist, so the code will not run.
- **Intermediário:** I'd rate it low, because the code calls a function that doesn't exist, so it will throw an error. In my feedback, I'd name the function and suggest the correct one.
- **Profissional:** I'd give it a low score for correctness, even if the style is clean. Calling a function that doesn't exist is a hallucination, and the code will fail with an error the moment it runs. In my feedback, I'd name the exact function and line, explain that it's not part of the library, and suggest the real API that does the same thing. Clean code doesn't help the user if it doesn't run.
- **Dica:** Use a palavra 'hallucination'. Mostre que clareza não compensa código que não roda, e que o feedback deve ser específico.
- **Follow-up:** How would you verify that a function really exists?

### 108. What is an off-by-one error?
*O que é um erro off-by-one?* · nível 1 · concept

- **Básico:** It's when a loop runs one time too many or one time too few.
- **Intermediário:** An off-by-one error is when a loop or index is wrong by one. For example, using 'less than or equal' instead of 'less than' with the array length.
- **Profissional:** An off-by-one error happens when a loop or an index goes one step too far or stops one step too early. A classic example in JavaScript is looping with i <= arr.length instead of i < arr.length, so the last iteration reads undefined. It's very common in AI-generated code, so I always check loop boundaries.
- **Dica:** Dê o exemplo do i <= arr.length. Exemplo concreto mostra que você entende de verdade.
- **Follow-up:** How would you write a test to catch that?

### 109. What is an edge case?
*O que é um edge case?* · nível 1 · concept

- **Básico:** An edge case is an unusual input, like an empty array or zero.
- **Intermediário:** An edge case is an input at the limit of what the code expects, like an empty list, null, zero, or a very big number. Code often fails on these.
- **Profissional:** An edge case is an input at the boundary of what the function normally handles, such as an empty array, a single element, null, zero, negative numbers, or very large values. The normal case might work fine while an edge case crashes or gives a wrong result. When I review code, I always ask what happens with these inputs.
- **Dica:** Liste 2 ou 3 exemplos (empty, null, zero). Isso conta muito na avaliação.
- **Follow-up:** What edge cases would you test for a function that divides two numbers?

### 110. What happens if you forget to use await before a promise in JavaScript?
*O que acontece se você esquecer o await antes de uma Promise em JavaScript?* · nível 2 · concept

- **Básico:** You get a promise, not the real value. The code can break.
- **Intermediário:** Without await, the variable holds a pending promise instead of the data. So if you try to use it, you get errors or undefined, and the code doesn't wait for the operation to finish.
- **Profissional:** If you forget await, the expression returns a pending promise instead of the resolved value. The function keeps running without waiting, so you might call a method that doesn't exist on the promise, like res.json on an unresolved fetch, or return data before it's ready. Errors can also become unhandled promise rejections. In reviews, I check that every async call is awaited or handled with then and catch.
- **Dica:** Diga claramente: 'you get a promise instead of the value'. Um exemplo com fetch impressiona.
- **Follow-up:** How would you run several async calls at the same time?

### 111. How do you find logic errors in code that runs without crashing?
*Como você encontra erros de lógica em um código que roda sem quebrar?* · nível 3 · practical

- **Básico:** I test it with examples and compare the result with the expected result.
- **Intermediário:** I run the code with small examples where I know the answer, and compare. I also trace the code step by step and check conditions and edge cases.
- **Profissional:** Since the code doesn't crash, I need to check the output, not just the execution. I pick small inputs where I already know the correct answer, run them, and compare. If I can't run it, I do a dry run, tracing variables line by line. I pay special attention to conditions, loop boundaries, and edge cases, because that's where logic errors usually hide.
- **Dica:** O ponto-chave: código que roda não é código correto. Fale de 'expected output' e 'dry run'.
- **Follow-up:** Can you give an example of a logic error you found?

### 112. What is a test case?
*O que é um caso de teste?* · nível 1 · concept

- **Básico:** A test case is an input and the expected result.
- **Intermediário:** A test case is an input with the result you expect. You run the code with that input and check if the output matches.
- **Profissional:** A test case is a specific input paired with the expected output. You run the code with the input and compare the actual output to the expected one. A good set of test cases covers the normal case, edge cases, and invalid input.
- **Dica:** Use a dupla 'input' + 'expected output'. É a definição que o entrevistador espera.
- **Follow-up:** Can you give me an example of a test case?

### 113. What is the happy path?
*O que é o happy path?* · nível 1 · concept

- **Básico:** The happy path is the normal case, when everything works.
- **Intermediário:** The happy path is the normal scenario with valid input and no errors. It's the first thing you test, but it's not enough.
- **Profissional:** The happy path is the typical scenario where the input is valid and everything goes as expected. It's the first thing I test, because if it fails, nothing else matters. But passing the happy path isn't enough, so I always test edge cases and invalid input too.
- **Dica:** Mostre que happy path é necessário mas não suficiente.
- **Follow-up:** What do you test after the happy path?

### 114. How would you check if this code is correct?
*Como você verificaria se este código está correto?* · nível 2 · practical

- **Básico:** I would run it with some tests. I'd check normal inputs and edge cases.
- **Intermediário:** First, I'd run the code with a normal input and compare the output with the expected result. Then I'd test edge cases, like an empty array or null.
- **Profissional:** I'd start by reading it to understand the intent, then run it with a few test cases. First the happy path, then edge cases like an empty input, a single element, or negative numbers, and finally invalid input. For each one I'd compare the actual output to the expected output. If I can't run it, I'd trace it by hand with a small example.
- **Dica:** Pergunta muito comum. Estrutura: run → happy path → edge cases → compare expected output.
- **Follow-up:** What if you can't run the code?

### 115. Which test cases would you write for a function that sorts an array of numbers?
*Quais casos de teste você escreveria para uma função que ordena um array de números?* · nível 3 · scenario

- **Básico:** I would test an empty array, an array with one number, and an array with duplicates.
- **Intermediário:** I'd test a normal unsorted array, an empty array, one element, duplicates, and negative numbers. I'd also test an array that's already sorted.
- **Profissional:** I'd cover a normal unsorted array first, then edge cases: an empty array, a single element, duplicates, negative numbers, and arrays already sorted or in reverse order. In JavaScript I'd also add numbers like 10 and 9, because the default sort compares strings, so [10, 9, 1] doesn't sort numerically without a compare function. I'd also check whether the function changes the original array.
- **Dica:** Citar o sort padrão do JavaScript (ordena como string) é um diferencial forte.
- **Follow-up:** How would you check that the original array isn't changed?

### 116. What makes code readable?
*O que torna um código legível?* · nível 1 · concept

- **Básico:** Clear names and small, simple functions.
- **Intermediário:** Readable code has clear names, small functions that do one thing, and consistent formatting. Someone else can understand it quickly.
- **Profissional:** Readable code uses descriptive names, keeps functions small with one responsibility, and follows a consistent style. It avoids clever tricks when a simple version works, and it uses comments to explain why, not what. The test is simple: could another developer understand it quickly without asking me?
- **Dica:** Fale 'clear names' e 'small functions'. Simples e direto.
- **Follow-up:** Can you give an example of a bad variable name?

### 117. Why are good variable names important?
*Por que bons nomes de variáveis são importantes?* · nível 2 · concept

- **Básico:** Good names help people understand the code quickly.
- **Intermediário:** Good names make the code easy to understand, for your team and for you later. For example, userCount is much clearer than x. It also helps avoid bugs.
- **Profissional:** Good names make code self-explanatory. A name like activeUserCount tells you what the value is without reading the whole function, while x or data2 forces you to guess. That saves time for the team, makes reviews faster, and reduces bugs caused by misunderstanding what a variable holds.
- **Dica:** Dê um exemplo ruim vs bom (x vs userCount).
- **Follow-up:** How do naming conventions differ between TypeScript and Python?

### 118. What does idiomatic code mean? Give an example in TypeScript or Python.
*O que significa código idiomático? Dê um exemplo em TypeScript ou Python.* · nível 3 · concept

- **Básico:** Idiomatic code uses the normal style of the language. In Python, a list comprehension is idiomatic.
- **Intermediário:** Idiomatic code follows the natural style and conventions of a language. For example, in TypeScript we use const and array methods like map and filter. In Python, we use list comprehensions and snake_case names.
- **Profissional:** Idiomatic code is code written the way experienced developers of that language usually write it, following its conventions. For example, in Python, squares = [n * n for n in nums] is more idiomatic than a loop with append, and we use snake_case and with open() for files. In TypeScript, using const, clear types, and map or filter instead of manual index loops is usually more idiomatic. Idiomatic code is easier for other developers to read.
- **Dica:** Sempre dê um exemplo concreto. Como você domina TS, use TS e mencione um de Python também.
- **Follow-up:** Is idiomatic code always better?

### 119. What does Big O notation describe?
*O que a notação Big O descreve?* · nível 1 · concept

- **Básico:** Big O shows how the time grows when the input gets bigger.
- **Intermediário:** Big O describes how the running time or memory of an algorithm grows when the input size grows. It's about the trend, not exact seconds.
- **Profissional:** Big O notation describes how the time or memory an algorithm needs grows as the input size n grows. It ignores constants and focuses on the worst-case trend, so O(n) means the work grows linearly and O(n squared) means it grows much faster. It helps compare solutions independently of the machine.
- **Dica:** Diga 'how it grows as the input grows'. Não diga que mede segundos.
- **Follow-up:** What's the difference between O(n) and O(n squared)?

### 120. What's the time complexity of a nested loop?
*Qual é a complexidade de tempo de um loop aninhado?* · nível 2 · concept

- **Básico:** Usually it's O(n squared), because there's a loop inside a loop.
- **Intermediário:** If both loops go over the same list of n items, it's O(n squared). For each item, the inner loop runs n times, so it gets slow with big inputs.
- **Profissional:** If the outer and inner loops both iterate over the same n items, the time complexity is O(n squared), because the inner loop runs n times for each of the n outer iterations. If they iterate over different inputs of size n and m, it's O(n times m). It's fine for small inputs, but it gets slow fast, so I often look for a way to replace the inner loop with a Set or a Map.
- **Dica:** Explique o porquê ('n times for each item'). Mencionar O(n·m) mostra precisão.
- **Follow-up:** How could you make it faster?

### 121. How can a Set make a duplicate check faster?
*Como um Set pode deixar a verificação de duplicados mais rápida?* · nível 3 · practical

- **Básico:** With a Set, checking if an item exists is very fast, so you only need one loop.
- **Intermediário:** A Set checks if a value exists in constant time on average. So instead of a nested loop, which is O(n squared), you use one loop and the Set, which is O(n). It uses a bit more memory.
- **Profissional:** With a nested loop, you compare every pair, which is O(n squared). With a Set, you loop once: for each item, you check set.has(item), which is O(1) on average, and if it's not there you add it. That makes the whole check O(n) in time. The trade-off is O(n) extra memory for the Set, which is usually worth it.
- **Dica:** Fale dos dois lados: tempo melhora (O(n)), memória piora (O(n) extra).
- **Follow-up:** Is there a case where the nested loop is better?

### 122. Why should you never put API keys in your code?
*Por que você nunca deve colocar chaves de API no código?* · nível 1 · concept

- **Básico:** Other people can see and steal the key. It should be in an environment variable.
- **Intermediário:** If the key is in the code, anyone who sees the repository or the frontend bundle can steal it. Keys should be in environment variables on the server.
- **Profissional:** If an API key is hardcoded, it can leak through the Git history, a public repository, or the JavaScript bundle sent to the browser. Someone can then use it, run up costs, or access data. Secrets should live in environment variables or a secrets manager, used only on the server. In Next.js, for example, anything prefixed with NEXT_PUBLIC_ is exposed to the browser, so secrets must not use that prefix.
- **Dica:** Mencione 'environment variables'. O exemplo do NEXT_PUBLIC_ mostra experiência real.
- **Follow-up:** What would you do if you saw a key committed to a repository?

### 123. What is SQL injection, and how do you prevent it?
*O que é SQL injection e como você previne?* · nível 2 · concept

- **Básico:** It's when user input changes the SQL query. You prevent it with parameterized queries.
- **Intermediário:** SQL injection is when an attacker sends input that changes your SQL query, for example to read or delete data. You prevent it with parameterized queries, not string concatenation.
- **Profissional:** SQL injection happens when user input is concatenated directly into a SQL string, so an attacker can send something like ' OR '1'='1 and change the meaning of the query, reading or deleting data. The main fix is parameterized queries or prepared statements, where the values are sent separately from the SQL. Using a well-known ORM or query builder also helps, plus validating input and using a database user with limited permissions.
- **Dica:** A palavra mágica é 'parameterized queries'. Evite dizer apenas 'validar input' como solução principal.
- **Follow-up:** Can an ORM still be vulnerable to injection?

### 124. What would you look for when reviewing AI-generated code for security?
*O que você procuraria ao revisar código gerado por IA em relação à segurança?* · nível 4 · scenario

- **Básico:** I would look for SQL injection, XSS, secrets in the code, and unsafe eval.
- **Intermediário:** I'd check how user input is used: SQL injection, XSS with innerHTML, and eval. I'd also look for hardcoded secrets and missing authentication checks.
- **Profissional:** I'd follow the user input through the code. First, injection: is input concatenated into SQL or shell commands instead of using parameters? Second, XSS: is untrusted content rendered with innerHTML or dangerouslySetInnerHTML? Third, hardcoded secrets like API keys or passwords, and any eval or new Function with external data. I'd also check authentication and authorization on API routes, input validation, and whether it imports packages that are outdated or don't even exist. A serious security issue would lower my rating a lot, even if the code works.
- **Dica:** Tenha uma lista mental: injection, XSS, secrets, eval, auth. Falar 'follow the user input' mostra método.
- **Follow-up:** How would you explain an XSS risk to a junior developer?

### 125. What criteria do you use to compare two code solutions?
*Quais critérios você usa para comparar duas soluções de código?* · nível 3 · practical

- **Básico:** I check if it's correct, safe, fast, and easy to read.
- **Intermediário:** First correctness, then security, then whether it follows the prompt. After that, I compare efficiency and readability.
- **Profissional:** I use a fixed order. First correctness: does it run and handle edge cases? Second, security, because a vulnerability is serious even if the code works. Third, does it follow all the instructions in the prompt? Then efficiency, like time complexity, and finally readability and the quality of the explanation. A major issue in an earlier criterion usually outweighs small advantages in a later one.
- **Dica:** A ordem importa: correctness > security > instructions > efficiency > readability.
- **Follow-up:** What if one solution is faster but harder to read?

### 126. If two solutions are both correct, how do you choose the better one?
*Se duas soluções estão corretas, como você escolhe a melhor?* · nível 2 · scenario

- **Básico:** I choose the one that is easier to read and faster.
- **Intermediário:** I compare readability, efficiency, and how well each one handles errors. I also look at the explanation. The clearer and more complete one wins.
- **Profissional:** If both are correct, I look at secondary criteria: time and space complexity, readability, error handling, and how idiomatic the code is. I also consider the explanation, because a clear explanation helps the user. If they're very close, I'd say one is slightly better, or call it a tie, and explain why.
- **Dica:** Mostre que você conhece 'slightly better' e 'tie'. Nem sempre há grande diferença.
- **Follow-up:** When would you call it a tie?

### 127. Response A is fast but hard to read. Response B is slower but very clear. Which one do you prefer, and why?
*A resposta A é rápida mas difícil de ler. A resposta B é mais lenta mas muito clara. Qual você prefere e por quê?* · nível 4 · scenario

- **Básico:** It depends. If the data is small, I prefer B because it's clear.
- **Intermediário:** It depends on the context. If the input is small, I prefer B, because it's easier to maintain. If the prompt asks for performance or the data is big, I prefer A.
- **Profissional:** It depends on the context, so I'd check the prompt first. If the user asked for performance, or the input can be very large, the faster solution matters more, and I'd prefer A, maybe suggesting comments to make it clearer. If the input is small, the speed difference won't be noticeable, so I'd prefer B because it's easier to read, test, and maintain. Either way, I'd explain the trade-off in my justification.
- **Dica:** 'It depends' sozinho é fraco. Diga do que depende (prompt, tamanho da entrada) e escolha em cada caso.
- **Follow-up:** How big would the input need to be for you to change your mind?

### 128. How do you explain the reasoning behind your rating in a clear way?
*Como você explica o raciocínio por trás da sua nota de forma clara?* · nível 3 · practical

- **Básico:** I say my choice, then the reason, and I give an example.
- **Intermediário:** I start with my decision, then I give the main reason with because, and then a specific example from the code. I keep my sentences short.
- **Profissional:** I use a simple structure: decision, reason, evidence, and any limitation. For example: 'I rated it 2 out of 5 because it fails on empty input. On line 3 it divides by the array length, which is zero. However, the rest of the logic is correct.' Being specific makes the rating easy to check and more useful for training the model.
- **Dica:** Estrutura: decision → because → example → however. Pratique essa sequência em voz alta.
- **Follow-up:** What's the difference between a good and a bad justification?

### 129. Why would you choose a simple solution over a clever one?
*Por que você escolheria uma solução simples em vez de uma solução 'esperta'?* · nível 2 · concept

- **Básico:** Because simple code is easier to understand and has fewer bugs.
- **Intermediário:** I'd choose the simple one because it's easier to read and test. Other developers can change it later, so there are fewer bugs.
- **Profissional:** Simple code is easier to read, review, and test, so bugs are easier to find. A clever one-liner might save a few lines, but if the team can't understand it quickly, it costs more time later. Unless the clever version has a real advantage, like much better performance that the use case needs, I'd choose the simple one.
- **Dica:** Use 'because' e 'so'. E mostre equilíbrio: 'unless...' (a não ser que).
- **Follow-up:** Can you think of a case where the clever solution is better?

### 130. Imagine you need to explain to a non-technical manager why you rejected an AI code response. What would you say?
*Imagine que você precisa explicar a um gerente não técnico por que rejeitou uma resposta de código da IA. O que você diria?* · nível 4 · scenario

- **Básico:** I'd say: the code looks good, but it doesn't work in some cases, so it can cause problems for users.
- **Intermediário:** I'd avoid technical words. I'd say the code works in normal cases, but it breaks in some situations, for example when a list is empty, so users would see an error.
- **Profissional:** I'd focus on impact, not jargon. For example: 'The code looks fine at first, but it has a security problem. It puts user input directly into a database command, so an attacker could read or delete customer data. That's why I rejected it, and the other response avoids this risk.' Managers care about risk to users and the business, so I'd explain the problem in those terms and keep it short.
- **Dica:** Para não técnicos: impacto (users, data, risk) e não termos técnicos. Mostra boa comunicação.
- **Follow-up:** How would your explanation change for a senior engineer?

### Exercício m5-x01 (code, nível 1)
**Prompt:** Write a JavaScript function that returns the sum of all numbers in an array.

**Response A:**

```
Response A:
function sum(arr) {
  let total = 0;
  for (let i = 0; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

**Response B:**

```
Response B:
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** Response B is better. Response A has an off-by-one error, because the loop uses less than or equal to the array length. On the last iteration, arr[i] is undefined, so the total becomes NaN. Response B uses less than, so it stops at the last valid index. The rest of the code is the same, so this bug decides it.

**Por quê:** Em A, i vai até arr.length. Como o último índice válido é arr.length - 1, a última volta soma undefined, e número + undefined = NaN. B usa < e está correta.

### Exercício m5-x02 (code, nível 2)
**Prompt:** Write a TypeScript function that returns true if an array has duplicate values.

**Response A:**

```
Response A:
function hasDuplicates(arr: number[]): boolean {
  const seen = new Set<number>();
  for (const n of arr) {
    if (seen.has(n)) return true;
    seen.add(n);
  }
  return false;
}
```

**Response B:**

```
Response B:
function hasDuplicates(arr: number[]): boolean {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j && arr[i] === arr[j]) return true;
    }
  }
  return false;
}
```

**Pergunta:** Both are correct. Which one is better and why?

**Resposta modelo:** Both responses are correct, but Response A is better. It uses a Set, so each lookup is constant time on average, and the whole function is O(n). Response B uses a nested loop, which is O(n squared), so it gets slow with large arrays. Response A uses some extra memory for the Set, but that's a good trade-off. It's also easy to read.

**Por quê:** As duas dão o resultado certo. A percorre o array uma vez e usa Set.has (O(1) em média): O(n) de tempo e O(n) de memória. B compara todos os pares: O(n²). Para arrays grandes, A é muito melhor.

### Exercício m5-x03 (code, nível 2)
**Prompt:** Write a Python function that finds a user by username in a SQLite database.

**Response A:**

```
Response A:
def find_user(conn, username):
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM users WHERE username = '{username}'")
    return cur.fetchone()
```

**Response B:**

```
Response B:
def find_user(conn, username):
    cur = conn.cursor()
    cur.execute("SELECT * FROM users WHERE username = ?", (username,))
    return cur.fetchone()
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** Response B is better. Response A puts the username directly into the SQL string with an f-string, so it's vulnerable to SQL injection. For example, an attacker could send a quote and change the query. Response B uses a parameterized query with a question mark placeholder, so the database treats the input only as a value. Both return the same result for normal input, but B is safe.

**Por quê:** Em A, um username como ' OR '1'='1 muda a query e retorna usuários indevidos. Em B, o sqlite3 envia o valor separado do SQL (placeholder ?), o que impede a injeção. Segurança pesa muito na avaliação.

### Exercício m5-x04 (code, nível 2)
**Prompt:** Write an async JavaScript function that fetches a user from /api/users/:id and returns the JSON data.

**Response A:**

```
Response A:
async function getUser(id) {
  const res = await fetch('/api/users/' + id);
  if (!res.ok) throw new Error('Request failed');
  return await res.json();
}
```

**Response B:**

```
Response B:
async function getUser(id) {
  const res = fetch('/api/users/' + id);
  return res.json();
}
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** Response A is better. Response B is missing await before fetch, so res is a promise, not a response. Calling res.json on a promise throws an error, because promises don't have a json method. Response A awaits the fetch and also checks res.ok, so it handles failed requests. So A is correct and more robust.

**Por quê:** Sem await, fetch() devolve uma Promise, e Promise não tem o método .json(): TypeError 'res.json is not a function'. A espera a resposta e ainda trata status de erro com res.ok.

### Exercício m5-x05 (code, nível 3)
**Prompt:** Write a TypeScript function that returns the scores sorted from lowest to highest. Do not change the original array.

**Response A:**

```
Response A:
function sortScores(scores: number[]): number[] {
  return scores.sort((a, b) => a - b);
}
```

**Response B:**

```
Response B:
function sortScores(scores: number[]): number[] {
  return [...scores].sort((a, b) => a - b);
}
```

**Pergunta:** Which response follows the prompt better and why?

**Resposta modelo:** Response B is better. Both sort the numbers correctly with a compare function. But sort changes the array in place, so Response A mutates the original array, and the prompt said not to do that. Response B makes a copy with the spread operator first, so the original stays the same. A ignores an explicit requirement, so B wins.

**Por quê:** Array.prototype.sort ordena no próprio array (in place). A altera o array recebido, violando a instrução. B copia com [...scores] antes. (Também seria válido usar scores.toSorted() em ambientes modernos.) Ambas usam (a, b) => a - b, que ordena números corretamente.

### Exercício m5-x06 (code, nível 2)
**Prompt:** Write a Python function that returns the average of a list of numbers. Return 0 for an empty list.

**Response A:**

```
Response A:
def average(nums):
    if not nums:
        return 0
    return sum(nums) / len(nums)
```

**Response B:**

```
Response B:
def average(nums):
    total = 0
    for n in nums:
        total += n
    return total / len(nums)
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** Response A is better. The prompt says to return 0 for an empty list, and Response A checks that first. Response B divides by the length, so with an empty list it divides by zero and raises a ZeroDivisionError. Response A is also more idiomatic, because it uses the built-in sum and len. So A is correct and cleaner.

**Por quê:** Com nums = [], B faz 0 / 0 e o Python lança ZeroDivisionError. A trata o edge case pedido no prompt e usa sum() e len(), mais idiomático em Python.

### Exercício m5-x07 (code, nível 3)
**Prompt:** Write a JavaScript function that shows a user's comment inside the element with id 'comment'.

**Response A:**

```
Response A:
function showComment(text) {
  const el = document.getElementById('comment');
  el.innerHTML = text;
}
```

**Response B:**

```
Response B:
function showComment(text) {
  const el = document.getElementById('comment');
  el.textContent = text;
}
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** Response B is better. Response A uses innerHTML with user input, so if the comment contains HTML, like an image tag with an onerror attribute, the browser will run it. That's an XSS vulnerability. Response B uses textContent, which shows the text as plain text and doesn't run any code. Both display normal comments the same way, but B is safe.

**Por quê:** innerHTML interpreta o texto como HTML: um comentário como <img src=x onerror=alert(1)> executa JavaScript. textContent insere apenas texto. No React, o equivalente seguro é renderizar {text} no JSX, e o perigoso é dangerouslySetInnerHTML.

### Exercício m5-x08 (code, nível 3)
**Prompt:** Write a JavaScript function that reads a settings object from a JSON string sent by the user.

**Response A:**

```
Response A:
function parseSettings(input) {
  try {
    return JSON.parse(input);
  } catch {
    return null;
  }
}
```

**Response B:**

```
Response B:
function parseSettings(input) {
  return eval('(' + input + ')');
}
```

**Pergunta:** Which response is better and why?

**Resposta modelo:** Response A is better. Response B uses eval on user input, which is dangerous, because eval runs any JavaScript code, not only JSON. An attacker could send code that steals data. Response A uses JSON.parse, which only accepts valid JSON, and it handles invalid input with try and catch. So A is safe and more robust.

**Por quê:** eval executa qualquer código que o usuário enviar, então é uma falha grave de segurança. JSON.parse só aceita JSON válido e o try/catch evita que o programa quebre com entrada inválida.

## Módulo 6: Inglês para entrevistas (Interview English)

### 131. Tell me about yourself.
*Fale sobre você.* · nível 1 · intro

- **Básico:** Hi, I'm [name]. I'm a software developer from Brazil. I work with React and TypeScript.
- **Intermediário:** Hi, I'm [name]. I'm a software developer from Brazil with [number] years of experience. I work mainly with React, Next.js, and TypeScript, and I'm interested in AI training work.
- **Profissional:** Hi, I'm [name]. I'm a software developer from Brazil, and I have [number] years of experience building web applications with React, Next.js, and TypeScript. Recently, I've been working on [type of project], where I [main responsibility]. I'm interested in AI training and LLM evaluation because I enjoy reviewing code carefully and explaining clearly what works and what doesn't.
- **Dica:** Use a estrutura: presente (quem sou) → experiência → destaque → por que esta vaga. 30 a 60 segundos. Não leia: memorize os blocos.
- **Follow-up:** Why do you want to work in AI training?

### 132. Where are you from, and what do you do?
*De onde você é e o que você faz?* · nível 1 · intro

- **Básico:** I'm from Brazil. I'm a web developer.
- **Intermediário:** I'm from [city], in Brazil. I'm a software developer, and I build web applications with React and Next.js.
- **Profissional:** I'm from [city], in Brazil, and I work as a software developer. I specialize in front-end and full-stack web development, mainly with React, Next.js, and TypeScript. I work remotely, so I'm used to communicating with teams online.
- **Dica:** Resposta curta e direta. Mencionar que já trabalha remoto é um ponto positivo.
- **Follow-up:** How long have you been working as a developer?

### 133. Why are you interested in AI training and LLM evaluation work?
*Por que você tem interesse em trabalho de treinamento de IA e avaliação de LLMs?* · nível 3 · intro

- **Básico:** I like AI and I like to review code. I think I can help make models better.
- **Intermediário:** I'm interested because I use AI tools every day as a developer, and I like reviewing code. I think my experience with JavaScript and TypeScript can help improve the models.
- **Profissional:** I use AI coding tools every day, so I see both how useful they are and where they make mistakes. I enjoy reviewing code and paying attention to details, and I like explaining clearly why something is right or wrong. With [number] years of experience in JavaScript and TypeScript, I believe I can give useful feedback to improve model quality. I'm also excited to keep learning about how these models are trained.
- **Dica:** Conecte sua experiência (React/TS, revisar código) com o trabalho. Evite 'só pelo dinheiro' ou 'porque é remoto'.
- **Follow-up:** What do you think makes a good AI code response?

### 134. Can you describe a project you worked on?
*Você pode descrever um projeto em que trabalhou?* · nível 1 · behavioral

- **Básico:** I built a [type of app] with React and Next.js. It helps users [main goal].
- **Intermediário:** I worked on a [type of app] built with Next.js and TypeScript. I was responsible for the front-end, and the app helps users [main goal].
- **Profissional:** I worked on [project name], a [type of app] built with Next.js, React, and TypeScript. The main challenge was [problem]. I was responsible for [your part], and I [main action]. As a result, [result, for example: the page loaded much faster / users could complete the task in fewer steps].
- **Dica:** Fale 'I built', 'I was responsible for'. Termine com um resultado concreto, se possível com número.
- **Follow-up:** What was the most difficult part of that project?

### 135. What was your role in that project?
*Qual era o seu papel nesse projeto?* · nível 2 · behavioral

- **Básico:** I was the front-end developer. I built the pages with React.
- **Intermediário:** I was responsible for the front-end. I built the main components in React and connected them to the API. I worked with [number] other developers.
- **Profissional:** I was one of [number] developers on the team, and I was responsible for the front-end architecture. I built the main React components, set up data fetching in Next.js, and integrated the payment API. I also reviewed pull requests from other developers, which is similar to the code evaluation work in this role.
- **Dica:** Diferencie 'I' (você) de 'we' (time). Conectar revisão de PRs com avaliação de código é um ótimo gancho.
- **Follow-up:** Did you have any disagreements with the team during the project?

### 136. Tell me about a React or Next.js project you're proud of. What was the challenge, and what was the result?
*Fale sobre um projeto em React ou Next.js do qual você se orgulha. Qual foi o desafio e qual foi o resultado?* · nível 4 · behavioral

- **Básico:** I'm proud of a [type of app] with Next.js. The challenge was [problem]. I fixed it, and the app got better.
- **Intermediário:** I'm proud of a [type of app] I built with Next.js. The challenge was that [problem]. I [action], and as a result, [result].
- **Profissional:** One project I'm proud of is [project name], a [type of app] built with Next.js and TypeScript. The challenge was that [problem, for example: the product pages were slow because all the data loaded in the browser]. I [action, for example: moved data fetching to server components and added caching]. As a result, [result, for example: load time dropped by about [number] percent], and I learned a lot about rendering strategies in Next.js.
- **Dica:** STAR-lite completo: contexto → desafio → ação (I) → resultado com número → aprendizado. Prepare antes, com números reais.
- **Follow-up:** If you started that project again today, what would you do differently?

### 137. How many years of programming experience do you have?
*Quantos anos de experiência em programação você tem?* · nível 1 · intro

- **Básico:** I have [number] years of experience.
- **Intermediário:** I have [number] years of programming experience, mostly with JavaScript, React, and TypeScript.
- **Profissional:** I have [number] years of professional experience as a developer. I've been working with JavaScript for [number] years, and with React and Next.js for about [number] years. Most of my recent work uses TypeScript.
- **Dica:** Use 'I have [number] years of experience' (não 'I have experience of'). Diga o número com confiança.
- **Follow-up:** What kind of companies have you worked for?

### 138. Which technologies do you use most?
*Quais tecnologias você mais usa?* · nível 2 · practical

- **Básico:** I use React, Next.js, and TypeScript every day.
- **Intermediário:** I mainly use React, Next.js, and TypeScript. I also use Node.js for APIs, Tailwind for styling, and Git every day.
- **Profissional:** My main stack is React, Next.js, and TypeScript, which I use every day. On the back end, I work with Node.js and REST APIs, and I've used databases like [database]. For styling I usually use Tailwind CSS. I'm also familiar with Python, mainly for small scripts.
- **Dica:** Organize: principal → back-end → ferramentas → outras linguagens. Use 'mainly' e 'every day'.
- **Follow-up:** Which one would you say you know best?

### 139. How comfortable are you with Python compared to JavaScript?
*Quão confortável você está com Python comparado com JavaScript?* · nível 3 · practical

- **Básico:** JavaScript is my main language. My Python is basic, but I can read it.
- **Intermediário:** I'm much more comfortable with JavaScript and TypeScript. I'm familiar with Python. I can read it and write basic scripts, and I'm improving it.
- **Profissional:** JavaScript and TypeScript are my main languages, so I'm very comfortable with them. With Python, I have basic to intermediate knowledge: I can read code well, understand functions, lists, dictionaries, and comprehensions, and write simple scripts. For evaluation work, reading and reasoning about code matters most, and many concepts like loops, edge cases, and complexity are the same in both languages. I'm also actively practicing Python.
- **Dica:** Seja honesto, mas positivo: mostre que conceitos se transferem e que você está estudando.
- **Follow-up:** What's one difference between Python and JavaScript that you find interesting?

### 140. Can you explain what an API is in simple words?
*Você pode explicar o que é uma API com palavras simples?* · nível 1 · concept

- **Básico:** An API lets two programs talk to each other. For example, an app can get data from a server.
- **Intermediário:** In simple terms, an API is a way for two programs to communicate. It's like a waiter: you send a request, and it brings back a response. For example, a weather app gets data from a weather API.
- **Profissional:** In simple terms, an API is a set of rules that lets one program ask another program for data or actions. It's like a waiter in a restaurant: you don't go into the kitchen, you make a request, and the waiter brings back what you asked for. For example, my Next.js app sends a request to a payment API, and the API responds with the payment status.
- **Dica:** Definição curta + analogia + exemplo real. O garçom (waiter) é uma analogia clássica e funciona bem.
- **Follow-up:** What's the difference between a REST API and GraphQL?

### 141. How would you explain React state to a beginner?
*Como você explicaria o state do React para um iniciante?* · nível 2 · concept

- **Básico:** State is data in a component that can change. When it changes, the screen updates.
- **Intermediário:** State is data that a component remembers and that can change over time. When the state changes, React updates the screen. For example, a counter uses state to store the current number.
- **Profissional:** Basically, state is the memory of a component: data that can change while the user uses the app. When you update the state, React re-renders the component, so the screen shows the new value. For example, in a counter, the number is stored with useState, and every click calls the setter, so the number on the screen updates automatically. The main idea is that you change the data, and React takes care of updating the UI.
- **Dica:** Use 'basically' e 'for example'. O exemplo do contador é simples e todo mundo entende.
- **Follow-up:** What's the difference between state and props?

### 142. Explain the difference between server-side rendering and client-side rendering in Next.js.
*Explique a diferença entre renderização no servidor e no cliente no Next.js.* · nível 3 · concept

- **Básico:** With server-side rendering, the server makes the HTML. With client-side rendering, the browser makes it.
- **Intermediário:** With server-side rendering, the server builds the HTML and sends a ready page, which is good for SEO and the first load. With client-side rendering, the browser downloads JavaScript and builds the page there, which is good for interactive parts.
- **Profissional:** In simple terms, it's about where the HTML is created. With server-side rendering, the server prepares the page with the data and sends ready HTML, so the first load is fast and search engines can read it easily. With client-side rendering, the browser receives JavaScript and builds the page there, which is better for very interactive parts. In the Next.js App Router, components are server components by default, and you add 'use client' when you need state or event handlers, like a form or a dropdown.
- **Dica:** Comece com a ideia central: 'where the HTML is created'. Mencionar 'use client' mostra experiência atual com Next.js.
- **Follow-up:** When would you choose static generation instead?

### 143. Why did you choose TypeScript instead of JavaScript?
*Por que você escolheu TypeScript em vez de JavaScript?* · nível 2 · practical

- **Básico:** I chose TypeScript because it finds errors before I run the code.
- **Intermediário:** I chose TypeScript because types catch many errors early. For example, it warns me if I forget a prop in a React component. It also makes the code easier for the team to understand.
- **Profissional:** The main reason is that TypeScript catches many bugs at compile time, before the code reaches users. For example, if a component expects a user object and I pass undefined, the editor warns me right away. It also improves autocomplete and makes refactoring much safer, which matters in a team. JavaScript is fine for small scripts, but for bigger projects, TypeScript is worth the extra setup.
- **Dica:** Decisão + because + for example + alternativa. Exemplo concreto de React deixa a resposta forte.
- **Follow-up:** Are there any disadvantages to using TypeScript?

### 144. Why do you prefer Next.js for some projects?
*Por que você prefere Next.js para alguns projetos?* · nível 2 · practical

- **Básico:** I like Next.js because it has routing and server rendering. It's good for SEO.
- **Intermediário:** I prefer Next.js because it gives me routing, server rendering, and API routes in one framework. So it's great for sites that need SEO. But for a small internal tool, plain React can be enough.
- **Profissional:** It depends on the project, but I prefer Next.js when SEO and performance matter. It gives me file-based routing, server rendering, and API routes in one framework, so I can build a full-stack app without much setup. For example, for a marketing site or an e-commerce store, server rendering helps pages load fast and rank well. For a small internal dashboard, I might just use React with Vite, because Next.js would be more than I need.
- **Dica:** Mostre equilíbrio: 'It depends' + quando sim + quando não. Isso é maturidade técnica.
- **Follow-up:** What problems have you had with Next.js?

### 145. Tell me about a technical decision you made and why you made it.
*Fale sobre uma decisão técnica que você tomou e por quê.* · nível 3 · behavioral

- **Básico:** I decided to use [technology] because it was simpler. It worked well.
- **Intermediário:** In a project, I decided to use [technology] instead of [alternative], because [reason]. As a result, [result].
- **Profissional:** In [project], we needed to [goal]. I decided to use [technology, for example: React Query for data fetching] instead of [alternative, for example: managing everything with useEffect], because [reason, for example: it handles caching and loading states for us]. I also considered [other option], but [why not]. As a result, [result, for example: the code became shorter and we had fewer bugs], and the team adopted it in other projects.
- **Dica:** Inclua a alternativa ('I also considered... but...'). Isso mostra que a decisão foi pensada.
- **Follow-up:** Would you make the same decision today?

### 146. Tell me about a time you made a mistake at work.
*Fale sobre uma vez em que você cometeu um erro no trabalho.* · nível 2 · behavioral

- **Básico:** I once [mistake]. I told my team and fixed it. I learned to [lesson].
- **Intermediário:** Once, I [mistake, for example: deployed a change without testing on mobile]. I told my team right away and fixed it quickly. I learned to always [lesson].
- **Profissional:** At [company], I [mistake, for example: deployed a change that broke the login page on mobile, because I only tested on desktop]. As soon as I noticed, I told my team, rolled back the change, and fixed the bug within [time]. Then I added a mobile test to our checklist. I learned that testing different devices and edge cases is part of the job, not an extra step, and since then I've been much more careful.
- **Dica:** Escolha um erro real mas não catastrófico. Foque em: assumir responsabilidade + correção + aprendizado. Nunca diga 'I never make mistakes'.
- **Follow-up:** How do you make sure that doesn't happen again?

### 147. Tell me about a time you disagreed with a teammate. What did you do?
*Fale sobre uma vez em que você discordou de um colega. O que você fez?* · nível 3 · behavioral

- **Básico:** My teammate wanted [option A], and I wanted [option B]. We talked and decided together.
- **Intermediário:** A teammate wanted to [option A], but I thought [option B] was better. I listened to their reasons and explained mine. In the end, we [result].
- **Profissional:** In [project], a teammate wanted to [option A, for example: add a big state management library], and I thought [option B, for example: React context was enough]. Instead of arguing, I asked to talk about it, listened to their reasons, and suggested we compare both options with a small example. The test showed [finding], so we agreed to [decision]. I learned that using evidence and staying respectful makes disagreements productive.
- **Dica:** Mostre respeito e uso de evidência. Nunca fale mal do colega. Termine com o resultado e o aprendizado.
- **Follow-up:** What would you do if you still disagreed after the discussion?

### 148. Describe a time when you had to learn something new very quickly.
*Descreva uma vez em que você precisou aprender algo novo muito rápido.* · nível 4 · behavioral

- **Básico:** I had to learn [technology] in [number] days. I read the documentation and practiced. I finished the task on time.
- **Intermediário:** At [company], I had to learn [technology] in about [time] for a new project. I read the official documentation, built a small test project, and asked a colleague for help. In the end, I delivered my part on time.
- **Profissional:** At [company], we started a project that used [technology, for example: the Next.js App Router], and I had only [time, for example: one week] to get productive. First, I read the official documentation and focused on the core concepts. Then I built a small practice project to test them, and I asked experienced colleagues specific questions when I got stuck. By the deadline, I delivered [result], and later I helped other team members learn it too. This is also how I'd approach new evaluation guidelines in this role.
- **Dica:** STAR completo com método de aprendizado (docs → prática → perguntar). Conectar com a vaga no final é um bônus.
- **Follow-up:** How do you usually keep up with new technologies?

### 149. What do you say if you didn't hear the interviewer's question well?
*O que você diz se não ouviu bem a pergunta do entrevistador?* · nível 1 · practical

- **Básico:** Sorry, could you repeat the question, please?
- **Intermediário:** I'd say: 'Sorry, could you repeat the question, please? I didn't hear it well.'
- **Profissional:** I'd say something like: 'Sorry, could you repeat the question, please? The audio cut out for a second.' If they speak fast, I'd ask: 'Could you say that again a bit more slowly?' It's better to ask than to answer the wrong question.
- **Dica:** Sempre comece com 'Sorry,' e use 'could you'. Nunca só 'What?'.
- **Follow-up:** And what if you hear the words but don't understand the meaning?

### 150. The interviewer asks: 'How would you apply the rubric to borderline cases?' You're not sure what 'borderline' means here. What do you say?
*O entrevistador pergunta: 'Como você aplicaria a rubrica em casos limítrofes?' Você não tem certeza do que 'borderline' significa aqui. O que você diz?* · nível 2 · practical

- **Básico:** Sorry, what do you mean by borderline?
- **Intermediário:** Just to clarify, what do you mean by borderline cases? Do you mean responses that are almost acceptable?
- **Profissional:** I'd say: 'Just to make sure I understand, what do you mean by borderline cases? Do you mean responses that are between two scores, for example, not clearly good and not clearly bad?' Then, after they confirm, I'd answer the question. Checking the meaning first shows I'm careful, which is important in evaluation work.
- **Dica:** Repita a palavra que não entendeu ('what do you mean by borderline?') e ofereça um palpite ('Do you mean...?').
- **Follow-up:** Yes, that's what I mean. So, how would you handle them?

### 151. The interviewer says: 'For this task, you'll rate responses on helpfulness and honesty, and flag anything unsafe. Any questions?' Ask one or two clarifying questions.
*O entrevistador diz: 'Nesta tarefa, você vai avaliar respostas por utilidade e honestidade, e sinalizar qualquer coisa insegura. Alguma pergunta?' Faça uma ou duas perguntas de esclarecimento.* · nível 3 · scenario

- **Básico:** Yes. What do you mean by unsafe? And what is the rating scale?
- **Intermediário:** Yes, two questions. First, what is the rating scale, for example, one to five? Second, do you mean unsafe for the user, like harmful advice, or also security problems in code?
- **Profissional:** Yes, I have two quick questions. First, just to clarify the scale: are we rating from one to five, and is there a guideline that describes each score? Second, when you say 'flag anything unsafe,' do you mean only harmful content, or should I also flag things like security vulnerabilities in code? And if a response is very helpful but slightly unsafe, should the safety issue lower the helpfulness score too, or is it a separate flag?
- **Dica:** Boas perguntas mostram atenção a detalhes. Pergunte sobre escala, definição de termos e casos de conflito entre critérios.
- **Follow-up:** Good questions. How would you handle a response that's helpful but has a small security issue?

### 152. What can you say when you need a few seconds to think?
*O que você pode dizer quando precisa de alguns segundos para pensar?* · nível 1 · practical

- **Básico:** That's a good question. Let me think for a second.
- **Intermediário:** I can say: 'That's a good question. Let me think about that for a second.' Then I start my answer.
- **Profissional:** I'd use a short phrase like 'That's an interesting question, let me think about that for a second,' or 'Hmm, let me see.' It shows I'm thinking, not stuck. Then I'd start with a structure, like 'First, I would...', so I can organize my answer while I speak.
- **Dica:** Tenha 2 ou 3 frases prontas e alterne entre elas. Depois da frase, comece logo a responder.
- **Follow-up:** What's the hardest bug you've ever fixed?

### 153. What's the hardest bug you've ever fixed?
*Qual foi o bug mais difícil que você já corrigiu?* · nível 2 · behavioral

- **Básico:** That's a good question. Let me think... I had a bug in [feature]. I found the problem and fixed it.
- **Intermediário:** Hmm, let me think... One hard bug was in [feature]. The problem was [cause]. I found it by [method], and I fixed it by [solution].
- **Profissional:** That's a good question, let me think of a good example. In a Next.js project, [describe the bug, for example: users sometimes saw another user's data on a page]. It was hard because it only happened in production. After adding logs, I found that [cause, for example: a response was being cached and shared between users]. I fixed it by [solution, for example: disabling caching for that route], and I added a test for it. I learned to check caching behavior carefully.
- **Dica:** Pratique começar com a frase de 'ganhar tempo' e então contar uma mini história: bug → causa → como achou → correção → aprendizado.
- **Follow-up:** How did you make sure the bug didn't come back?

### 154. What do you say when you don't know the answer to a question?
*O que você diz quando não sabe a resposta de uma pergunta?* · nível 1 · practical

- **Básico:** I'm not sure, but I think [idea]. I would check the documentation.
- **Intermediário:** I say: 'I'm not sure, but my understanding is that [idea].' Then I explain how I would find the answer, for example, in the documentation.
- **Profissional:** I'd be honest and say something like: 'I'm not 100% sure, but my understanding is that [idea].' Then I'd explain how I'd confirm it, like checking the official documentation or testing it quickly. In AI evaluation work, honesty is very important, so I'd never invent an answer, the same way we don't want a model to hallucinate.
- **Dica:** Honestidade + raciocínio + como descobriria. Comparar com alucinação de modelo é ótimo nesse contexto.
- **Follow-up:** Can you give me an example?

### 155. What is the difference between RLHF and DPO?
*Qual é a diferença entre RLHF e DPO?* · nível 4 · concept

- **Básico:** I'm not 100% sure, but I think both use human preferences to improve the model. DPO is simpler.
- **Intermediário:** My understanding is that both use human preference data. RLHF trains a reward model first and then uses reinforcement learning. DPO skips the reward model and trains directly on the preferred and rejected answers.
- **Profissional:** I'm not an expert on the details, but my understanding is this: both methods use human preference data, usually pairs of a better and a worse response. RLHF first trains a separate reward model on those preferences, and then optimizes the language model with reinforcement learning, often PPO. DPO, Direct Preference Optimization, skips the separate reward model and the RL loop, and updates the model directly on the preference pairs with a simpler loss. That's why DPO is usually simpler and more stable to train. If needed, I'd confirm the details in the original papers.
- **Dica:** Mesmo que você saiba pouco, use 'my understanding is' e diga o que sabe: ambos usam preferências humanas; RLHF usa reward model + RL; DPO otimiza direto.
- **Follow-up:** Why would a team choose DPO over RLHF?

### 156. Some of our tasks involve Rust code. Have you worked with Rust?
*Algumas das nossas tarefas envolvem código Rust. Você já trabalhou com Rust?* · nível 4 · scenario

- **Básico:** I haven't worked with Rust, but I know it's fast and safe. I can learn it.
- **Intermediário:** I haven't worked with Rust directly, but my understanding is that it focuses on memory safety and performance. I'm used to strong types from TypeScript, so I think I can learn to read it quickly.
- **Profissional:** I haven't worked with Rust directly, so I want to be honest about that. My understanding is that Rust focuses on performance and memory safety, using concepts like ownership and borrowing instead of a garbage collector. My experience with TypeScript's type system should help, and many review skills, like checking edge cases, error handling, and logic, are the same in any language. I'd start with the official Rust book and practice on small examples, and until I'm confident, I'd focus on tasks in languages I know well.
- **Dica:** Não finja. 'I haven't... but...' + o que você sabe + plano de aprendizado. Honestidade conta muito em vagas de avaliação.
- **Follow-up:** How would you evaluate code in a language you don't know well?
