import { anthropicMessagesApi } from "../api/anthropic-messages.lazy.ts";
import { openAICompletionsApi } from "../api/openai-completions.lazy.ts";
import { envApiKeyAuth } from "../auth/helpers.ts";
import { createProvider, type Provider } from "../models.ts";
import { REQUESTY_MODELS } from "./requesty.models.ts";

export function requestyProvider(): Provider<"anthropic-messages" | "openai-completions"> {
	return createProvider({
		id: "requesty",
		name: "Requesty",
		auth: { apiKey: envApiKeyAuth("Requesty API key", ["REQUESTY_API_KEY"]) },
		models: Object.values(REQUESTY_MODELS),
		api: {
			"anthropic-messages": anthropicMessagesApi(),
			"openai-completions": openAICompletionsApi(),
		},
	});
}
