import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "react-hot-toast";

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
      const pitchDesc = "Como um CEO bem-sucedido da empresa/projeto '" + data.nome + "' desejo criar um pitch convincente de aproximadamente três minutos para destacar os pontos fortes da nossa empresa. A empresa possui a seguinte descrição:" + data.descricao + ". O pitch deve cativar a audiência desde o início, transmitindo nossa visão de forma clara e envolvente.";

      const response = await pitchService.Create({
        question: pitchDesc,
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
