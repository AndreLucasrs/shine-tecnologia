export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "produto" | "biblioteca" | "vitrine";
  links: {
    label: string;
    href: string;
  }[];
};

export const projects: Project[] = [
  {
    slug: "intellicita",
    name: "Intellicita",
    tagline: "Inteligência de licitações públicas para quem vende pro governo",
    description:
      "SaaS que acompanha o Portal Nacional de Contratações Públicas (PNCP) em tempo real, entende o objeto de cada edital com embeddings (não só palavra-chave) e casa automaticamente com o perfil de cada empresa cliente — pra achar a licitação certa antes da concorrência, sem precisar caçar edital manualmente.",
    stack: ["Next.js", "Fastify", "PostgreSQL + pgvector", "Python", "Turborepo"],
    status: "produto",
    links: [{ label: "Ver o produto", href: "http://204.168.156.198:3000" }],
  },
  {
    slug: "aegis4j",
    name: "aegis4j",
    tagline: "Biblioteca JVM open-source para colocar LLMs em produção com segurança",
    description:
      "Lib Java/Kotlin/Clojure/Scala que fica na frente de qualquer LLM (Ollama, Anthropic, OpenAI e compatíveis) com guardrails determinísticos, skills com progressive disclosure, RAG via pgvector, roteamento de modelo por regras e cliente MCP embutido — tudo isso sem depender de nenhum framework agêntico pesado.",
    stack: ["Java 17+", "Gradle", "MCP", "pgvector"],
    status: "biblioteca",
    links: [{ label: "Repositório no GitHub", href: "https://github.com/AndreLucasrs/aegis4j" }],
  },
  {
    slug: "cronos",
    name: "Cronos",
    tagline: "Gestão de cronograma de projetos — e vitrine funcional do aegis4j",
    description:
      "App real de gestão de projetos e tarefas onde cada pilar do aegis4j (guardrails, skills, RAG, roteamento de modelo, cliente MCP) se encaixa no dia a dia de um jeito que não parece forçado — a prova de que a lib funciona fora de um exemplo de documentação.",
    stack: ["Java 17+", "Javalin", "Ollama", "pgvector", "MCP"],
    status: "vitrine",
    links: [{ label: "Repositório no GitHub", href: "https://github.com/AndreLucasrs/cronos" }],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
