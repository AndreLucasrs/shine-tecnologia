import type { Metadata } from "next";

export const metadata: Metadata = { title: "Sobre" };

export default function SobrePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-3xl font-medium">Sobre</h1>

      <div className="prose-shine mt-8">
        <p>
          Sou André Lucas, desenvolvedor com background em Java/Spring e
          experiência que se estendeu pro ecossistema JavaScript/TypeScript —
          Next.js, Fastify, Node — conforme os projetos pediram.
        </p>
        <p>
          A Shine Tecnologia é o estúdio onde reúno o que construo por conta
          própria: produtos ponta a ponta (como o Intellicita, um SaaS de
          inteligência de licitações públicas) e ferramentas open-source pra
          quem trabalha com IA generativa na JVM (o aegis4j e sua vitrine
          funcional, o Cronos).
        </p>
        <h2>Como trabalho</h2>
        <ul>
          <li>
            Prefiro entender o problema de verdade antes de escolher a stack —
            a arquitetura vem depois, nunca antes.
          </li>
          <li>
            Escrevo o que preciso pro problema que tenho, não o que seria
            interessante ter caso um problema hipotético apareça depois.
          </li>
          <li>
            Documento decisão de infra e arquitetura com o motivo junto — não
            só o &ldquo;o quê&rdquo;, também o &ldquo;por quê&rdquo; e o que
            foi descartado no caminho.
          </li>
        </ul>
        <h2>Contato</h2>
        <p>
          <a href="mailto:contato@shinetecnologia.com.br">
            contato@shinetecnologia.com.br
          </a>{" "}
          ou pelo{" "}
          <a href="https://github.com/AndreLucasrs" target="_blank" rel="noreferrer">
            GitHub
          </a>
          .
        </p>
      </div>
    </main>
  );
}
