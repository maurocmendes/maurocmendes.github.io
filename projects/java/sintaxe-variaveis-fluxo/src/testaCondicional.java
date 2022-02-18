
public class testaCondicional {

	public static void main(String[] args) {
		System.out.println("Testando Condicionais");
		int idade = 15;
		boolean acompanhadoDePessoaMaior = true;
		if (idade >= 18) {
			System.out.println("Você tem mais de 18 anos");
			System.out.println("Seja bem-vindo!");
		} else if ((acompanhadoDePessoaMaior == true) && (idade < 18)) {
			System.out.println("Você não tem 18 anos mas pode entrar acompanhado de um maior de idade ");

		}

		else {
			System.out.println("Infelizmente você não pode entrar!");
		}
	}
}
