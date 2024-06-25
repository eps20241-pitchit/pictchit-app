import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { pitchService } from "../../service/pitchService";

const schema = z.object({
  nome: z.string().min(1, { message: "Informe o nome da empresa" }),
  descricao: z.string().min(50, { message: "Descreva sua empresa detalhadamente" }),
});

type FormData = z.infer<typeof schema>;

export function useCreatePitchController() {
  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    try {
      const response = await pitchService.Create({
        projectName: data.nome,
        description: data.descricao
      });

      alert(response.completion);
    } catch (err) {
      alert("Ocorreu um erro ao gerar o pitch. Por favor, tente novamente.");
    }
  })

  return {
    register,
    handleSubmit,
    errors
  };
}
