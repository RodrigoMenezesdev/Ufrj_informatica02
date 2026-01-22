const questions = [
  {
    "id": 1,
    "question": "No LibreOffice Writer, qual a função da tecla de atalho 'Ctrl + F12'?",
    "options": ["Inserir Quebra de Página", "Inserir Tabela", "Abrir Corretor Ortográfico", "Ativar o Navegador"],
    "correct": 1,
    "explanation": "No Writer, o atalho Ctrl + F12 abre a caixa de diálogo para inserção de tabelas."
  },
  {
    "id": 2,
    "question": "No LibreOffice Calc, qual o símbolo utilizado para iniciar qualquer fórmula?",
    "options": ["#", "+", "@", "="],
    "correct": 3,
    "explanation": "Toda fórmula no Calc deve ser iniciada com o sinal de igual (=)."
  },
  {
    "id": 3,
    "question": "Qual a extensão padrão de arquivos de planilha salvos no LibreOffice Calc?",
    "options": [".xlsx", ".ods", ".odt", ".odp"],
    "correct": 1,
    "explanation": "ODS significa OpenDocument Spreadsheet, o padrão do Calc."
  },
  {
    "id": 4,
    "question": "No Writer, o atalho para salvar um documento já existente com um novo nome (Salvar Como) é:",
    "options": ["Ctrl + S", "Ctrl + Shift + S", "Ctrl + Alt + S", "Ctrl + N"],
    "correct": 1,
    "explanation": "Ctrl + Shift + S aciona o comando 'Salvar Como'."
  },
  {
    "id": 5,
    "question": "No Calc, qual função soma valores de um intervalo que atendam a um critério?",
    "options": ["=SOMA()", "=SOMASE()", "=SOMAS()", "=CONT.SE()"],
    "correct": 1,
    "explanation": "A função SOMASE realiza uma soma condicional baseada em um critério."
  },
  {
    "id": 6,
    "question": "No Writer, para aplicar Negrito utiliza-se:",
    "options": ["Ctrl + N", "Ctrl + B", "Ctrl + J", "Ctrl + Shift + N"],
    "correct": 1,
    "explanation": "No Writer, Negrito é Ctrl + B (Bold). Ctrl+N abre um 'Novo' documento."
  },
  {
    "id": 7,
    "question": "No Calc, qual operador realiza a exponenciação?",
    "options": ["*", "^", "**", "exp"],
    "correct": 1,
    "explanation": "O acento circunflexo (^) é o operador para potência."
  },
  {
    "id": 8,
    "question": "O recurso para copiar formatação no Writer chama-se:",
    "options": ["Pincel de Estilo", "Clonar Formatação", "Copiar Especial", "Formatador"],
    "correct": 1,
    "explanation": "O nome oficial no LibreOffice é 'Clonar Formatação'."
  },
  {
    "id": 9,
    "question": "No Calc, qual o resultado da fórmula =5+2*10?",
    "options": ["70", "25", "17", "50"],
    "correct": 1,
    "explanation": "Multiplicação primeiro (2*10=20), depois a soma (20+5=25)."
  },
  {
    "id": 10,
    "question": "Qual atalho no Writer é usado para centralizar um parágrafo?",
    "options": ["Ctrl + C", "Ctrl + E", "Ctrl + J", "Ctrl + L"],
    "correct": 1,
    "explanation": "Ctrl + E centraliza. Ctrl+C é copiar e Ctrl+L é alinhar à esquerda."
  },
  {
    "id": 11,
    "question": "No Calc, para congelar linhas ou colunas, utiliza-se o menu:",
    "options": ["Inserir", "Formatar", "Exibir", "Dados"],
    "correct": 2,
    "explanation": "A opção 'Congelar' fica no menu Exibir."
  },
  {
    "id": 12,
    "question": "No Writer, o atalho Ctrl + Y serve para:",
    "options": ["Desfazer", "Refazer", "Recortar", "Localizar"],
    "correct": 1,
    "explanation": "Ctrl + Z desfaz e Ctrl + Y refaz a última ação."
  },
  {
    "id": 13,
    "question": "Qual caractere torna uma referência de célula absoluta no Calc (ex: $A$1)?",
    "options": ["%", "&", "$", "@"],
    "correct": 2,
    "explanation": "O cifrão ($) fixa a linha ou a coluna na fórmula."
  },
  {
    "id": 14,
    "question": "No Writer, qual o atalho para Inserir Hiperlink?",
    "options": ["Ctrl + H", "Ctrl + K", "Ctrl + L", "Ctrl + Alt + H"],
    "correct": 1,
    "explanation": "Ctrl + K é o atalho universal para inserir links no Writer."
  },
  {
    "id": 15,
    "question": "A função do Calc que retorna o maior valor de um intervalo é:",
    "options": ["=MAIOR()", "=MÁXIMO()", "=ALTO()", "=SUM()"],
    "correct": 1,
    "explanation": "=MÁXIMO(intervalo) retorna o maior valor."
  },
  {
    "id": 16,
    "question": "No Writer, qual atalho aplica o alinhamento Justificado?",
    "options": ["Ctrl + J", "Ctrl + U", "Ctrl + G", "Ctrl + Shift + J"],
    "correct": 0,
    "explanation": "Ctrl + J justifica o texto selecionado."
  },
  {
    "id": 17,
    "question": "No Calc, qual atalho abre a caixa de diálogo 'Formatar Células'?",
    "options": ["Ctrl + F", "Ctrl + 1", "Alt + 1", "Ctrl + Shift + F"],
    "correct": 1,
    "explanation": "Ctrl + 1 é o atalho padrão para formatar células."
  },
  {
    "id": 18,
    "question": "A extensão .ott no LibreOffice refere-se a:",
    "options": ["Planilha", "Modelo de Texto", "Apresentação", "Banco de Dados"],
    "correct": 1,
    "explanation": ".ott é o modelo (template) do Writer."
  },
  {
    "id": 19,
    "question": "No Calc, qual o atalho para selecionar a planilha inteira?",
    "options": ["Ctrl + A", "Ctrl + Tudo", "Ctrl + Shift + Espaço", "Alt + A"],
    "correct": 2,
    "explanation": "Ctrl + Shift + Espaço ou Ctrl + A selecionam tudo."
  },
  {
    "id": 20,
    "question": "No Writer, o atalho para imprimir um documento é:",
    "options": ["Ctrl + I", "Ctrl + P", "Ctrl + Alt + P", "Ctrl + Shift + I"],
    "correct": 1,
    "explanation": "Ctrl + P abre a janela de impressão."
  },
  {
    "id": 21,
    "question": "No Calc, a função =MÉDIA(10;20;30) retorna:",
    "options": ["60", "30", "20", "15"],
    "correct": 2,
    "explanation": "(10+20+30)/3 = 20."
  },
  {
    "id": 22,
    "question": "No Writer, qual menu contém a opção 'Verificar Ortografia'?",
    "options": ["Ferramentas", "Formatar", "Exibir", "Editar"],
    "correct": 0,
    "explanation": "A verificação ortográfica fica no menu Ferramentas."
  },
  {
    "id": 23,
    "question": "Qual atalho no Calc insere a Hora atual?",
    "options": ["Ctrl + ;", "Ctrl + Shift + ;", "Alt + ;", "Ctrl + H"],
    "correct": 1,
    "explanation": "Ctrl+; insere a data. Ctrl+Shift+; insere a hora."
  },
  {
    "id": 24,
    "question": "No Writer, o atalho Ctrl + U aplica:",
    "options": ["Negrito", "Itálico", "Sublinhado", "Sobrescrito"],
    "correct": 2,
    "explanation": "Ctrl + U (Underline) aplica o sublinhado."
  },
  {
    "id": 25,
    "question": "No Calc, o erro #DIV/0! ocorre quando:",
    "options": ["Valor não disponível", "Divisão por zero", "Texto em fórmula", "Coluna estreita"],
    "correct": 1,
    "explanation": "Ocorre quando a fórmula tenta dividir por zero ou célula vazia."
  },
  {
    "id": 26,
    "question": "No Writer, para exportar diretamente para PDF, usa-se:",
    "options": ["Menu Arquivo", "Menu Editar", "Menu Inserir", "Menu Ferramentas"],
    "correct": 0,
    "explanation": "A exportação para PDF está no menu Arquivo."
  },
  {
    "id": 27,
    "question": "No Calc, qual função conta o número de células com valores numéricos?",
    "options": ["=CONTAR()", "=CONT.NÚM()", "=CONT.VALORES()", "=SOMA()"],
    "correct": 1,
    "explanation": "=CONT.NÚM() conta células que possuem números."
  },
  {
    "id": 28,
    "question": "No Writer, qual o atalho para aplicar Itálico?",
    "options": ["Ctrl + I", "Ctrl + L", "Ctrl + T", "Ctrl + Shift + I"],
    "correct": 0,
    "explanation": "Ctrl + I aplica o estilo Itálico."
  },
  {
    "id": 29,
    "question": "No Calc, o atalho para excluir células selecionadas é:",
    "options": ["Delete", "Backspace", "Ctrl + - (menos)", "Ctrl + Del"],
    "correct": 2,
    "explanation": "Ctrl + - abre o menu para excluir linhas, colunas ou células."
  },
  {
    "id": 30,
    "question": "No Writer, o atalho Ctrl + Enter insere:",
    "options": ["Nova Linha", "Quebra de Página", "Quebra de Seção", "Tabela"],
    "correct": 1,
    "explanation": "Ctrl + Enter é o atalho para quebra de página manual."
  },
  {
    "id": 31,
    "question": "A função =CONT.VALORES() no Calc faz o quê?",
    "options": ["Soma números", "Conta células não vazias", "Conta apenas textos", "Média de valores"],
    "correct": 1,
    "explanation": "Conta qualquer célula que não esteja vazia (números ou textos)."
  },
  {
    "id": 32,
    "question": "Qual atalho no Writer abre o menu 'Localizar e Substituir'?",
    "options": ["Ctrl + F", "Ctrl + H", "Ctrl + L", "Ctrl + S"],
    "correct": 1,
    "explanation": "No Writer, Ctrl + H abre Localizar e Substituir."
  },
  {
    "id": 33,
    "question": "No Calc, qual operador é usado para concatenação de textos?",
    "options": ["+", "&", "#", "$"],
    "correct": 1,
    "explanation": "O E comercial (&) une dois textos em uma célula."
  },
  {
    "id": 34,
    "question": "No Writer, qual menu permite alterar o tamanho da página e as margens?",
    "options": ["Página", "Formatar", "Exibir", "Layout"],
    "correct": 1,
    "explanation": "Menu Formatar -> Estilo de Página."
  },
  {
    "id": 35,
    "question": "A função =SE(10>5; 'Sim'; 'Não') no Calc retorna:",
    "options": ["Sim", "Não", "Erro", "10"],
    "correct": 0,
    "explanation": "Como 10 é maior que 5, retorna o primeiro valor (verdadeiro)."
  },
  {
    "id": 36,
    "question": "No Writer, o atalho Ctrl + S serve para:",
    "options": ["Sublinhado", "Salvar", "Selecionar Tudo", "Substituir"],
    "correct": 1,
    "explanation": "Ctrl + S salva o documento (Save)."
  },
  {
    "id": 37,
    "question": "No Calc, para inserir uma nova linha acima da selecionada, usa-se:",
    "options": ["Ctrl + + (mais)", "Alt + I", "Shift + Enter", "Ctrl + L"],
    "correct": 0,
    "explanation": "Ctrl + + abre o menu de inserção."
  },
  {
    "id": 38,
    "question": "No Writer, o 'Navegador' (que mostra títulos e tabelas) é ativado por:",
    "options": ["F5", "F7", "F1", "F11"],
    "correct": 0,
    "explanation": "F5 abre o Navegador no LibreOffice."
  },
  {
    "id": 39,
    "question": "No Calc, a função =MÍNIMO(intervalo) retorna:",
    "options": ["O valor médio", "O menor valor", "A soma dos valores", "O primeiro valor"],
    "correct": 1,
    "explanation": "Retorna o menor valor numérico encontrado no intervalo."
  },
  {
    "id": 40,
    "question": "No Writer, qual o atalho para 'Selecionar Tudo'?",
    "options": ["Ctrl + A", "Ctrl + T", "Ctrl + S", "Alt + A"],
    "correct": 0,
    "explanation": "No LibreOffice, Ctrl + A seleciona tudo (All)."
  },
  {
    "id": 41,
    "question": "No Calc, as colunas são identificadas por ____ e as linhas por ____.",
    "options": ["Números / Letras", "Letras / Números", "Cores / Símbolos", "Símbolos / Letras"],
    "correct": 1,
    "explanation": "Colunas usam letras (A, B...) e linhas usam números (1, 2...)."
  },
  {
    "id": 42,
    "question": "No Writer, o atalho para abrir um documento existente é:",
    "options": ["Ctrl + A", "Ctrl + O", "Ctrl + E", "Ctrl + B"],
    "correct": 1,
    "explanation": "Ctrl + O abre a janela de seleção (Open)."
  },
  {
    "id": 43,
    "question": "No Calc, como se separa os argumentos de uma função?",
    "options": [", (vírgula)", "; (ponto e vírgula)", ": (dois pontos)", ". (ponto)"],
    "correct": 1,
    "explanation": "Argumentos individuais são separados por ponto e vírgula."
  },
  {
    "id": 44,
    "question": "No Writer, qual tecla inicia a verificação ortográfica manual?",
    "options": ["F1", "F5", "F7", "F12"],
    "correct": 2,
    "explanation": "F7 abre o corretor ortográfico."
  },
  {
    "id": 45,
    "question": "No Calc, o que faz o operador dois pontos ( : ) em uma fórmula?",
    "options": ["Soma tudo", "Define um intervalo", "Divide valores", "Multiplica valores"],
    "correct": 1,
    "explanation": "Ex: A1:A10 significa 'de A1 até A10'."
  },
  {
    "id": 46,
    "question": "No Writer, o atalho Ctrl + Shift + P é usado para:",
    "options": ["Imprimir", "Sobrescrito", "Subscrito", "Colar"],
    "correct": 1,
    "explanation": "Ctrl+Shift+P aplica Sobrescrito."
  },
  {
    "id": 47,
    "question": "No Calc, qual função arredonda um número para cima?",
    "options": ["=ARRED()", "=ARREDONDAR.PARA.CIMA()", "=TETO()", "=CIMA()"],
    "correct": 1,
    "explanation": "Esta é a função específica para arredondamento positivo no Calc."
  },
  {
    "id": 48,
    "question": "Qual a extensão de um arquivo de apresentação do LibreOffice Impress?",
    "options": [".ods", ".odt", ".odp", ".odb"],
    "correct": 2,
    "explanation": ".odp (OpenDocument Presentation)."
  },
  {
    "id": 49,
    "question": "No Writer, o atalho Ctrl + L alinha o texto à:",
    "options": ["Direita", "Esquerda", "Centro", "Justificado"],
    "correct": 1,
    "explanation": "Ctrl + L alinha à esquerda (Left)."
  },
  {
    "id": 50,
    "question": "No Calc, a função =HOJE() retorna:",
    "options": ["A data atual", "A hora atual", "O dia da semana", "A data e a hora"],
    "correct": 0,
    "explanation": "Retorna apenas a data do sistema."
  },
  {
    "id": 51,
    "question": "No LibreOffice Calc, qual função busca um valor na primeira coluna de uma tabela?",
    "options": ["=BUSCAV()", "=PROCV()", "=PESQUISAR()", "=PROCH()"],
    "correct": 1,
    "explanation": "A função PROCV (Procura Vertical) busca valores em colunas."
  },
  {
    "id": 52,
    "question": "No Writer, o atalho Ctrl + Shift + B é usado para aplicar:",
    "options": ["Negrito", "Subscrito", "Sobrescrito", "Borda"],
    "correct": 1,
    "explanation": "Ctrl + Shift + B aplica o Subscrito (texto abaixo)."
  },
  {
    "id": 53,
    "question": "No Calc, qual o resultado de =CONT.VALORES(A1:A2) se A1=10 e A2='Oi'?",
    "options": ["1", "2", "Erro", "10"],
    "correct": 1,
    "explanation": "CONT.VALORES conta células não vazias (números ou textos)."
  },
  {
    "id": 54,
    "question": "No Writer, qual o atalho para acionar o comando 'Localizar'?",
    "options": ["Ctrl + L", "Ctrl + F", "Ctrl + B", "Ctrl + H"],
    "correct": 1,
    "explanation": "No LibreOffice, Ctrl + F aciona o comando Localizar (Find)."
  },
  {
    "id": 55,
    "question": "No Calc, o atalho Ctrl + Espaço seleciona automaticamente:",
    "options": ["A linha inteira", "A coluna inteira", "A célula atual", "A planilha toda"],
    "correct": 1,
    "explanation": "Ctrl + Espaço seleciona a coluna inteira."
  },
  {
    "id": 56,
    "question": "No Writer, qual tecla de atalho abre a janela de 'Estilos'?",
    "options": ["F1", "F11", "F12", "Ctrl + F11"],
    "correct": 1,
    "explanation": "F11 gerencia os Estilos no LibreOffice."
  },
  {
    "id": 57,
    "question": "Qual é a função do Calc que retorna data e hora simultaneamente?",
    "options": ["=HOJE()", "=AGORA()", "=DATA()", "=TEMPO()"],
    "correct": 1,
    "explanation": "A função =AGORA() insere data e hora atuais."
  },
  {
    "id": 58,
    "question": "No Writer, qual atalho remove a formatação direta?",
    "options": ["Ctrl + M", "Ctrl + R", "Ctrl + Shift + M", "Ctrl + Backspace"],
    "correct": 0,
    "explanation": "Ctrl + M limpa formatações manuais."
  },
  {
    "id": 59,
    "question": "No Calc, qual operador é utilizado para 'Diferente de'?",
    "options": ["!=", "<>", "=/=", "><"],
    "correct": 1,
    "explanation": "O símbolo (<>) representa diferença em fórmulas."
  },
  {
    "id": 60,
    "question": "No Writer, qual o atalho para alinhar o texto à Direita?",
    "options": ["Ctrl + D", "Ctrl + R", "Ctrl + G", "Ctrl + J"],
    "correct": 1,
    "explanation": "Ctrl + R alinha à direita (Right)."
  },
  {
    "id": 61,
    "question": "No Calc, a função =ARRED(15,678; 2) resultará em:",
    "options": ["15,67", "15,68", "16", "15,7"],
    "correct": 1,
    "explanation": "Arredonda para 15,68 com duas casas decimais."
  },
  {
    "id": 62,
    "question": "Qual menu no Writer permite inserir Números de Página?",
    "options": ["Formatar", "Exibir", "Inserir", "Ferramentas"],
    "correct": 2,
    "explanation": "A inserção de campos e números fica no menu Inserir."
  },
  {
    "id": 63,
    "question": "No Calc, o atalho Shift + Espaço seleciona:",
    "options": ["A coluna inteira", "A linha inteira", "Toda a planilha", "Células à esquerda"],
    "correct": 1,
    "explanation": "Shift + Espaço seleciona a linha inteira."
  },
  {
    "id": 64,
    "question": "No Writer, qual comando exibe os caracteres não imprimíveis?",
    "options": ["Ctrl + F10", "Ctrl + F8", "Ctrl + P", "Ctrl + Shift + C"],
    "correct": 0,
    "explanation": "Ctrl + F10 mostra marcas de parágrafo e espaços."
  },
  {
    "id": 65,
    "question": "No Calc, qual função retorna o número de dias úteis entre datas?",
    "options": ["=DIAS()", "=DIATRABALHOTOTAL()", "=DIAS360()", "=DATADIF()"],
    "correct": 1,
    "explanation": "DIATRABALHOTOTAL calcula excluindo fins de semana."
  },
  {
    "id": 66,
    "question": "No Writer, para abrir um novo documento em branco, usa-se:",
    "options": ["Ctrl + B", "Ctrl + N", "Ctrl + A", "Ctrl + Shift + N"],
    "correct": 1,
    "explanation": "Ctrl + N (New) abre um novo documento."
  },
  {
    "id": 67,
    "question": "Qual atalho no Calc oculta a coluna selecionada?",
    "options": ["Ctrl + 0", "Ctrl + 9", "Ctrl + H", "Alt + 0"],
    "correct": 0,
    "explanation": "No Calc, Ctrl + 0 oculta colunas."
  },
  {
    "id": 68,
    "question": "No Writer, o recurso 'AutoCorreção' fica em qual menu?",
    "options": ["Editar", "Ferramentas", "Formatar", "Inserir"],
    "correct": 1,
    "explanation": "Configurações de AutoCorreção ficam em Ferramentas."
  },
  {
    "id": 69,
    "question": "No Calc, qual o resultado de =MÁXIMO(5; 15; 10)?",
    "options": ["20", "25", "30", "15"],
    "correct": 3,
    "explanation": "Retorna o maior valor da lista: 15."
  },
  {
    "id": 70,
    "question": "No Writer, qual atalho insere um comentário?",
    "options": ["Ctrl + M", "Ctrl + Alt + C", "Ctrl + Shift + K", "Alt + C"],
    "correct": 1,
    "explanation": "Ctrl + Alt + C insere comentários."
  },
  {
    "id": 71,
    "question": "No Calc, qual caractere separa planilha da célula (ex: Plan1.A1)?",
    "options": ["!", ".", ":", "$"],
    "correct": 1,
    "explanation": "O LibreOffice usa o ponto (.) para referências entre planilhas."
  },
  {
    "id": 72,
    "question": "No Writer, a ferramenta para criar cartas para vários destinatários é:",
    "options": ["Mala Direta", "Envio em Lote", "Mesclagem de Texto", "AutoTexto"],
    "correct": 0,
    "explanation": "Mala Direta cria documentos personalizados em massa."
  },
  {
    "id": 73,
    "question": "No Calc, qual função retorna a parte inteira de um número?",
    "options": ["=INT()", "=INTEIRO()", "=ARRED()", "=VALOR.INT()"],
    "correct": 1,
    "explanation": "A função =INTEIRO() remove as casas decimais."
  },
  {
    "id": 74,
    "question": "Qual atalho no Writer fecha o documento atual?",
    "options": ["Ctrl + Q", "Ctrl + W", "Alt + F4", "Ctrl + F4"],
    "correct": 1,
    "explanation": "Ctrl + W fecha apenas a janela do documento atual."
  },
  {
    "id": 75,
    "question": "No Calc, para realizar a ordenação de dados, usamos o menu:",
    "options": ["Editar", "Ferramentas", "Dados", "Formatar"],
    "correct": 2,
    "explanation": "Classificação e filtros ficam no menu Dados."
  },
  {
    "id": 76,
    "question": "No Writer, o atalho Ctrl + F2 serve para:",
    "options": ["Inserir Campos", "Visualizar Impressão", "Abrir Navegador", "Verificar Ortografia"],
    "correct": 0,
    "explanation": "Ctrl + F2 abre a janela de inserção de Campos."
  },
  {
    "id": 77,
    "question": "No Calc, a função =CONT.SE(A1:A5; '>10') faz o quê?",
    "options": ["Soma valores", "Conta células maiores que 10", "Mostra o maior", "Apaga dados"],
    "correct": 1,
    "explanation": "Conta células que atendem à condição especificada."
  },
  {
    "id": 78,
    "question": "Qual a tecla de atalho para a Ajuda do LibreOffice?",
    "options": ["F1", "F2", "F3", "F12"],
    "correct": 0,
    "explanation": "F1 é o atalho padrão para ajuda."
  },
  {
    "id": 79,
    "question": "No Calc, qual o resultado de =SOMA(5; 10) / 3?",
    "options": ["15", "5", "3", "Erro"],
    "correct": 1,
    "explanation": "15 dividido por 3 é igual a 5."
  },
  {
    "id": 80,
    "question": "No Writer, o 'AutoTexto' é acionado pela tecla:",
    "options": ["F2", "F3", "Ctrl + F3", "Shift + F3"],
    "correct": 1,
    "explanation": "F3 completa entradas de AutoTexto."
  },
  {
    "id": 81,
    "question": "No Calc, para alternar referências absolutas ($), usa-se:",
    "options": ["F2", "F4", "Shift + F4", "Alt + F4"],
    "correct": 2,
    "explanation": "No Calc o atalho para cifrão ($) é Shift + F4."
  },
  {
    "id": 82,
    "question": "No Writer, qual o atalho para Sobrescrito?",
    "options": ["Ctrl + P", "Ctrl + Shift + P", "Ctrl + B", "Ctrl + Shift + B"],
    "correct": 1,
    "explanation": "Ctrl + Shift + P aplica texto sobrescrito."
  },
  {
    "id": 83,
    "question": "No Calc, qual função retorna a posição de um item?",
    "options": ["=BUSCA()", "=CORRESP()", "=ÍNDICE()", "=LOCALIZAR()"],
    "correct": 1,
    "explanation": "CORRESP retorna a posição do valor no intervalo."
  },
  {
    "id": 84,
    "question": "No Writer, para visualizar a impressão, usa-se:",
    "options": ["Ctrl + P", "Ctrl + Shift + O", "Ctrl + I", "Ctrl + Shift + P"],
    "correct": 1,
    "explanation": "Ctrl + Shift + O abre a visualização prévia."
  },
  {
    "id": 85,
    "question": "No Calc, o que faz a fórmula =SOMA(A1;A3)?",
    "options": ["Soma apenas A1 e A3", "Soma tudo entre A1 e A3", "Erro", "Multiplica"],
    "correct": 0,
    "explanation": "Ponto e vírgula separa elementos individuais."
  },
  {
    "id": 86,
    "question": "Qual menu no Writer contém as opções de Capitular?",
    "options": ["Inserir", "Formatar", "Editar", "Tabela"],
    "correct": 1,
    "explanation": "Formatação de parágrafo (Capitular) fica no menu Formatar."
  },
  {
    "id": 87,
    "question": "No Calc, qual ferramenta resume dados em nova tabela?",
    "options": ["Tabela Dinâmica", "Resumo", "Consolidar", "Filtro"],
    "correct": 0,
    "explanation": "Tabela Dinâmica agrupa e resume grandes volumes de dados."
  },
  {
    "id": 88,
    "question": "No Writer, para aumentar o tamanho da fonte, usa-se:",
    "options": ["Ctrl + ]", "Ctrl + [", "Ctrl + Shift + >", "Ctrl + Alt + +"],
    "correct": 0,
    "explanation": "Ctrl + ] aumenta a fonte no LibreOffice."
  },
  {
    "id": 89,
    "question": "No Calc, qual erro indica nome de função errado?",
    "options": ["#REF!", "#VALOR!", "#NOME?", "#ERRO!"],
    "correct": 2,
    "explanation": "#NOME? ocorre quando a função não é reconhecida."
  },
  {
    "id": 90,
    "question": "No Writer, o atalho Ctrl + G serve para:",
    "options": ["Negrito", "Gravar (Salvar)", "Localizar", "Agrupar"],
    "correct": 1,
    "explanation": "Em PT-BR, Ctrl + G é 'Gravar' (Salvar)."
  },
  {
    "id": 91,
    "question": "No Calc, qual o operador de multiplicação?",
    "options": ["x", "X", "*", "."],
    "correct": 2,
    "explanation": "O asterisco (*) multiplica valores."
  },
  {
    "id": 92,
    "question": "No Writer, qual tecla abre o 'Dicionário de Sinônimos'?",
    "options": ["Ctrl + F7", "Shift + F7", "F7", "Alt + F7"],
    "correct": 0,
    "explanation": "Ctrl + F7 é o atalho para sinônimos."
  },
  {
    "id": 93,
    "question": "No Calc, a função =ESQUERDA('CONCURSO'; 3) retorna:",
    "options": ["RSO", "CON", "CUR", "ONC"],
    "correct": 1,
    "explanation": "Extrai os 3 primeiros caracteres da esquerda."
  },
  {
    "id": 94,
    "question": "No Writer, qual atalho alterna entre Maiúsculas e Minúsculas?",
    "options": ["Shift + F3", "Ctrl + F3", "Alt + F3", "F3"],
    "correct": 0,
    "explanation": "Shift + F3 altera a caixa do texto."
  },
  {
    "id": 95,
    "question": "No Calc, o que indica referência de célula externa?",
    "options": ["' (aspas)", "#", "[ ]", "!"],
    "correct": 0,
    "explanation": "Caminhos externos são marcados por aspas simples."
  },
  {
    "id": 96,
    "question": "No Writer, qual o atalho para Nota de Rodapé?",
    "options": ["Ctrl + Alt + F", "Ctrl + N", "Alt + N", "Ctrl + Shift + F"],
    "correct": 0,
    "explanation": "Ctrl + Alt + F insere notas de rodapé."
  },
  {
    "id": 97,
    "question": "No Calc, qual função extrai texto intermediário?",
    "options": ["=MEIO()", "=EXT.TEXTO()", "=PARTE()", "=SUBTEXTO()"],
    "correct": 1,
    "explanation": "EXT.TEXTO extrai de qualquer posição."
  },
  {
    "id": 98,
    "question": "Atalho no Writer para formatação de caractere?",
    "options": ["Ctrl + D", "Ctrl + F", "Ctrl + T", "Alt + F"],
    "correct": 0,
    "explanation": "Ctrl + D abre a janela de Fonte/Caractere."
  },
  {
    "id": 99,
    "question": "No Calc, a função =CONT.SE(A1:A5; '') faz o quê?",
    "options": ["Soma", "Conta células vazias", "Erro", "Conta zeros"],
    "correct": 1,
    "explanation": "Aspas vazias servem para contar células sem conteúdo."
  },
  {
    "id": 100,
    "question": "Atalho para fechar todo o programa LibreOffice?",
    "options": ["Ctrl + W", "Ctrl + Q", "Alt + F4", "Ctrl + X"],
    "correct": 1,
    "explanation": "Ctrl + Q (Quit) encerra a suíte completa."
  }
];
