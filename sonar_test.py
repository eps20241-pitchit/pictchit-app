#Neste código, há alguns problemas que o SonarCloud pode apontar
def calcular_fatorial(n):
    if n == 0:
        return 1
    else:
        return n * calcular_fatorial(n-1)

def main():
    num = int(input("Digite um número inteiro para calcular o fatorial: "))
    resultado = calcular_fatorial(num)
    print(f"O fatorial de {num} é {resultado}")

if __name__ == "__main__":
    main()
