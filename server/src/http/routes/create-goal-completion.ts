import type { FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { z } from "zod";
import { CreateGoalCompletion } from "../../functions/create-goal-completion";

export const createGoalCompletionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/completions",
    {
      schema: {
        body: z.object({
          goalId: z.string(),
        }),
      },
    },
    async (request, reply) => {
      const { goalId } = request.body;

      const completion = await CreateGoalCompletion({
        goalId,
      });

      return reply.status(201).send(completion);
    }
  );
};
