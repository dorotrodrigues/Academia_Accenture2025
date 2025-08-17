#utf-8
#language: pt
 
Funcionalidade: Cadastrar registro
    Cenario: Validação de cadastro de registro
        Dado que o usuário está na página web tables
        E o usuário clica no botão Add para adicionar um novo registro
        E é aberto um modal para cadastro de registro
        Quando o usuário preenche todos os campos solicitados com os valores válidos
        E o usuário clica no botão Submit para salvar o registro
        Então os dados do usuário aparecem na lista com sucesso