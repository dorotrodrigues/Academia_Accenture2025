#utf-8
#language: pt
 
Funcionalidade: Excluir registro
    Cenario: Validação que o registro é excluído com sucesso
        Dado que o usuário está na página web tables
        Quando o usuário clica no botão "excluir"
        Então o registro deve ser removido da tabela
