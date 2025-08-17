#utf-8
#language: pt
 
Funcionalidade: Editar registro
    Cenario: Validação Edição de registro
        Dado que o usuário está na página web tables
        E o usuário clica no botão "editar"
        E é aberto um modal para alteração de registro
        Quando o usuário altera o campo nome
        E o usuário clica no botão Submit para salvar a alteração
        Então o nome do usuario deve ser atualizado na tabela
