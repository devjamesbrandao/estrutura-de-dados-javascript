static void Main(string[] args)
    {
        // Armazena as tags de abertura e fechamento
        var tags = new Dictionary<string, string>();

        // Armazena as tags abertas em sequência, é o conceito de pilha,
        // visto que a útlima tag aberta é a que deve ser fechada primeiro
        Stack<string> tagsAbertas = new Stack<string>();

        // Adicionando tags de abertura e de fechamento
        tags.Add("}", "{");
        tags.Add("]", "[");
        tags.Add(")", "(");

        string valor = "({[])}";

        // Percorre cada caractere da string
        foreach(var c in valor)
        {
            string caractere = $"{c}";

            if(tags.ContainsValue(caractere))
            {
                tagsAbertas.Push(caractere);

                continue;
            }

            if(tags.ContainsKey(caractere))
            {
                if(tags[caractere] == tagsAbertas.Peek())
                {
                    tagsAbertas.Pop();
                }
                else
                {
                    Console.WriteLine("Não fechou certo!!!!");
                    return;
                }
            }
        }

        Console.WriteLine("Fechou certo!");
    }
