
public class testaCondicional {

	public static void main(String[] args) {
		System.out.println("Testando Condicionais");
		int idade = 15;
		boolean acompanhadoDePessoaMaior = true;
		if (idade >= 18) {
			System.out.println("Voc� tem mais de 18 anos");
			System.out.println("Seja bem-vindo!");
		} else if ((acompanhadoDePessoaMaior == true) && (idade < 18)) {
			System.out.println("Voc� n�o tem 18 anos mas pode entrar acompanhado de um maior de idade ");

		}

		else {
			System.out.println("Infelizmente voc� n�o pode entrar!");
		}
	}
}
