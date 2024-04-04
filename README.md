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

- [x] O participante deve poder visualizar seu crachá de inscrição;

- [x] O participante deve poder realizar check-in no evento.


### REGRAS DE NEGÓCIO:
- [x] O participante só pode se inscrever em um evento uma única vez;

- [x] O participante só pode se inscrever em eventos com vagas disponíveis;

- [x] O participante só pode realizar check-in em um evento uma única vez;

### REQUISITOS NÃO-FUNCIONAIS:
- [x] O check-in no evento será realizado através de um QRcode;
