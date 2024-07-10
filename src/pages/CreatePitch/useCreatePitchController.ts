import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { pitchService } from "../../service/pitchService";
import toast from "react-hot-toast";
import { useState } from "react";
import { sendPitch} from '../../service/login.service';

const schema = z.object({
  nome: z.string().min(1, { message: "Informe o nome da empresa" }),
  descricao: z.string().min(50, { message: "Descreva sua empresa detalhadamente" }),
});

type FormData = z.infer<typeof schema>;

export function useCreatePitchController() {
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit: hookFormSubmit,
    formState: { errors },

  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleSubmit = hookFormSubmit(async (data) => {
    const x = JSON.parse(localStorage.loggedInUser) ?? "";
    const userId = x.id;

    setIsLoading(true);
    try {
      const response = await pitchService.Create({
        userId,
        projectName: data.nome,
        description: data.descricao
      });

      toast.success("O seu Pitch está pronto! Verifique a tela de Pitch Gerado");

      const email = {
        to: x['email'],
        subject: 'Pitch ' + data.nome,
        text: response.pitchText
      }
      sendPitch(email)
      toast.success("O seu Pitch está pronto!");
    } catch (err) {
      toast.error("Ocorreu um erro ao gerar o pitch. Por favor, tente novamente.");
    } finally {
      setIsLoading(false);
    }
  })

  return {
    register,
    handleSubmit,
    errors,
    isLoading
  };
}
