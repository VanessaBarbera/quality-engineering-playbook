# Estratégia de Testes Mobile

## Objetivo

Validar comportamento funcional, integração e experiência em dispositivos móveis, considerando diferenças de plataforma e condições reais de uso.

## Cobertura

- autenticação;
- navegação;
- jornadas críticas;
- permissões;
- interrupções;
- orientação;
- conectividade;
- retomada do app;
- notificações;
- diferentes tamanhos de tela.

## Matriz de dispositivos

Priorizar por:

- participação de usuários;
- versão do sistema operacional;
- tamanho de tela;
- criticidade do fluxo.

## Cenários específicos

- perda e retorno de conexão;
- app indo para background;
- expiração de sessão;
- deep links;
- permissões negadas;
- atualização de versão;
- teclado e campos sensíveis.

## Automação

Usar automação para jornadas repetitivas e críticas. Manter parte da cobertura exploratória em dispositivos reais.

Ferramentas possíveis: Appium, device farms e serviços como BrowserStack.

## Princípio

**Cobertura mobile não é apenas repetir os testes Web em uma tela menor.**
