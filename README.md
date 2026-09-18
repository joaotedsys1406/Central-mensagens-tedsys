# Central de Mensagens — Tedsys

Site estático para pesquisar, editar e copiar mensagens de atendimento.

## Arquivos
- `index.html` — estrutura da página
- `style.css` — aparência
- `messages.js` — mensagens e categorias
- `app.js` — pesquisa, filtros, copiar e tema

## Como adicionar mensagem
Abra `messages.js` e acrescente um item dentro de `messages`:

```js
{
  category: "Nova categoria",
  title: "Título da mensagem",
  text: "Texto da mensagem com [CAMPO] para editar antes de copiar."
}
```

## Publicar no Vercel
1. Crie um repositório no GitHub.
2. Envie estes quatro arquivos para o repositório.
3. No Vercel, importe o repositório.
4. Não é necessário configurar build command.
5. Publique.

O projeto é totalmente estático e não precisa de banco de dados para funcionar.
