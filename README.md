# pass.in
O pass.in é uma aplicação de **gestão de participantes em eventos presenciais**.

A ferramenta permite que o organizador cadastre um evento e abra uma página pública de inscrição.

Os participantes inscritos podem emitir uma credencial para check-in no dia do evento.

O sistema fará scan da credencial do participante para permitir a entrada no evento.

## REQUISITOS

### REQUISITOS FUNCIONAIS:
- [x] O organizador deve poder cadastrar um novo evento;

- [x] O organizador deve poder visualizar dados de um evento;

- [x] O organizador deve poder visualizar a lista de participantes;

- [x] O participante deve poder se inscrever em um evento;

- [ ] O participante deve poder visualizar seu crachá de inscrição;

- [x] O participante deve poder realizar check-in no evento.


### REGRAS DE NEGÓCIO:
- [x] O participante só pode se inscrever em um evento uma única vez;

- [x] O participante só pode se inscrever em eventos com vagas disponíveis;

- [x] O participante só pode realizar check-in em um evento uma única vez;

### REQUISITOS NÃO-FUNCIONAIS:
- [ ] O check-in no evento será realizado através de um QRcode;

## ANOTAÇÕES
MÉTODOS HTTP: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
GET -> RETORNO DE DADO; POST -> CRIAR ALGO (REGISTRO, USUÁRIO, CATEGORIA, PRODUTO); PUT -> ALTERAR ALGO; DELETE -> EXCLUIR INFORMAÇÃO; -> PATCH -> ALTERAR ALGUMA INFORMAÇÃO ÚNICA; HEAD E OPTIONS -> SEGURANÇA;
CORPO DA REQUISIÇÃO (REQUEST BODY)
PARÂMETROS DE BUSCA -> search param / query params
PARÂMETROS DE ROTA ->  ( Route  Params ) -> Identificação de recursos (um parâmetro passado para realizar alguma ação)
CABEÇALHOS (Headers) => contexto da requisição.
DRIVER NATIVO / QUERY BUILDERS / ORMs (Object Relational Mapping)