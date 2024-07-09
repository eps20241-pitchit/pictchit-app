import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { pitchService } from "../../service/pitchService";
import { sendPitch } from "../../service/login.service";

const schema = z.object({
  nomeProjeto: z.string().min(1, { message: "Informe o nome do projeto" }),
  intro: z.string().min(1, { message: "Informe qual a introdução do pitch" }),
  originalidade: z.string().min(1, { message: "Informe a originalidade do projeto" }),
  diferencial: z.string().min(1, { message: "Informe o diferencial do projeto" }),
  necessidade: z.string().min(1, { message: "Informe a necessidade que o projeto atende" }),
  problema: z.string().min(1, { message: "Informe o problema que o projeto resolve" }),
  publicoAlvo: z.string().min(1, { message: "Informe o público alvo" }),
  lacunaMercado: z.string().min(1, { message: "Informe a lacuna de mercado que o projeto preenche" }),
  competitividade: z.string().min(1, { message: "Informe os concorrentes do projeto" }),
  comoFunciona: z.string().min(1, { message: "Informe como funciona o projeto" }),
  quemFaz: z.string().min(1, { message: "Informe quem faz" }),
  qtdPessoasProblema: z.string().min(1, { message: "Informe quantas pessoas pessuem esse problema" }),
  processo: z.string().min(1, { message: "Informe o processo" }),
  economiaPublico: z.string().min(1, { message: "Informe quanto o seu público pode economizar" }),
  verificacaoNegocio: z.string().min(1, { message: "Informe a verificação do projeto" }),
  fornecedor: z.string().min(1, { message: "Informe os fornecedores do projeto" }),
  apoiador: z.string().min(1, { message: "Informe os apoiadores do projeto" }),
  resultado: z.string().min(1, { message: "Informe os resultados que o seu projeto possui" })
});

type FormData = z.infer<typeof schema>;

export function useCreatePitchOCTCController() {
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
      const response = await pitchService.CreateOCTC({
        userId,
        ...data
      });

      const email = {
        to: x['email'],
        subject: 'Pitch ' + data.nomeProjeto,
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
