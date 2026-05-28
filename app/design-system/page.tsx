import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface ColorToken {
  name: string;
  token: string;
  textClass: string;
  borderClass?: string;
}

interface TypeSample {
  label: string;
  className: string;
  sample: string;
}

const semanticColors: ColorToken[] = [
  { name: "Background", token: "bg-background", textClass: "text-foreground" },
  { name: "Foreground", token: "bg-foreground", textClass: "text-background" },
  { name: "Card", token: "bg-card", textClass: "text-card-foreground" },
  {
    name: "Card Foreground",
    token: "bg-card-foreground",
    textClass: "text-card",
  },
  { name: "Popover", token: "bg-popover", textClass: "text-popover-foreground" },
  {
    name: "Popover Foreground",
    token: "bg-popover-foreground",
    textClass: "text-popover",
  },
  { name: "Primary", token: "bg-primary", textClass: "text-primary-foreground" },
  {
    name: "Primary Foreground",
    token: "bg-primary-foreground",
    textClass: "text-primary",
  },
  {
    name: "Secondary",
    token: "bg-secondary",
    textClass: "text-secondary-foreground",
  },
  {
    name: "Secondary Foreground",
    token: "bg-secondary-foreground",
    textClass: "text-secondary",
  },
  { name: "Muted", token: "bg-muted", textClass: "text-muted-foreground" },
  {
    name: "Muted Foreground",
    token: "bg-muted-foreground",
    textClass: "text-muted",
  },
  { name: "Accent", token: "bg-accent", textClass: "text-accent-foreground" },
  {
    name: "Accent Foreground",
    token: "bg-accent-foreground",
    textClass: "text-accent",
  },
  {
    name: "Destructive",
    token: "bg-destructive",
    textClass: "text-white",
  },
  { name: "Border", token: "bg-border", textClass: "text-foreground" },
  { name: "Input", token: "bg-input", textClass: "text-foreground" },
  { name: "Ring", token: "bg-ring", textClass: "text-background" },
  {
    name: "Sidebar",
    token: "bg-sidebar",
    textClass: "text-sidebar-foreground",
    borderClass: "border-sidebar-border",
  },
  {
    name: "Sidebar Primary",
    token: "bg-sidebar-primary",
    textClass: "text-sidebar-primary-foreground",
    borderClass: "border-sidebar-border",
  },
  {
    name: "Sidebar Accent",
    token: "bg-sidebar-accent",
    textClass: "text-sidebar-accent-foreground",
    borderClass: "border-sidebar-border",
  },
];

const chartColors: ColorToken[] = [
  { name: "Chart 1", token: "bg-chart-1", textClass: "text-foreground" },
  { name: "Chart 2", token: "bg-chart-2", textClass: "text-background" },
  { name: "Chart 3", token: "bg-chart-3", textClass: "text-background" },
  { name: "Chart 4", token: "bg-chart-4", textClass: "text-background" },
  { name: "Chart 5", token: "bg-chart-5", textClass: "text-white" },
];

const hierarchySamples: TypeSample[] = [
  {
    label: "Display",
    className: "text-5xl font-semibold tracking-tight",
    sample: "Build memorable digital experiences",
  },
  {
    label: "Heading 1",
    className: "text-4xl font-semibold tracking-tight",
    sample: "Heading level one",
  },
  {
    label: "Heading 2",
    className: "text-3xl font-semibold tracking-tight",
    sample: "Heading level two",
  },
  {
    label: "Heading 3",
    className: "text-2xl font-semibold tracking-tight",
    sample: "Heading level three",
  },
  {
    label: "Heading 4",
    className: "text-xl font-semibold tracking-tight",
    sample: "Heading level four",
  },
  {
    label: "Body",
    className: "text-base",
    sample: "Body text optimized for comfortable long-form reading.",
  },
  {
    label: "Small",
    className: "text-sm",
    sample: "Small helper text used for UI hints.",
  },
  {
    label: "Caption",
    className: "text-xs text-muted-foreground",
    sample: "Caption text for secondary metadata and labels.",
  },
];

const sizeSamples: TypeSample[] = [
  { label: "text-xs", className: "text-xs", sample: "The quick brown fox" },
  { label: "text-sm", className: "text-sm", sample: "The quick brown fox" },
  { label: "text-base", className: "text-base", sample: "The quick brown fox" },
  { label: "text-lg", className: "text-lg", sample: "The quick brown fox" },
  { label: "text-xl", className: "text-xl", sample: "The quick brown fox" },
  { label: "text-2xl", className: "text-2xl", sample: "The quick brown fox" },
  { label: "text-3xl", className: "text-3xl", sample: "The quick brown fox" },
  { label: "text-4xl", className: "text-4xl", sample: "The quick brown fox" },
  { label: "text-5xl", className: "text-5xl", sample: "The quick brown fox" },
];

function ColorGrid({ tokens }: { tokens: ColorToken[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
      {tokens.map((color) => (
        <div
          key={color.name}
          className={`rounded-lg border p-3 ${color.token} ${color.textClass} ${
            color.borderClass ?? "border-border"
          }`}
        >
          <p className="text-sm font-medium">{color.name}</p>
          <p className="mt-1 font-mono text-xs opacity-80">{color.token}</p>
        </div>
      ))}
    </div>
  );
}

function TypographyRows({ samples }: { samples: TypeSample[] }) {
  return (
    <div className="space-y-4">
      {samples.map((sample) => (
        <div key={sample.label} className="rounded-lg border border-border p-4">
          <p className="mb-1 font-mono text-xs text-muted-foreground">
            {sample.label}
          </p>
          <p className={sample.className}>{sample.sample}</p>
        </div>
      ))}
    </div>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-8 font-sans md:px-6 md:py-12">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Design System
        </h1>
        <p className="max-w-3xl text-muted-foreground">
          Referencia visual de la paleta semantica y la tipografia utilizadas en
          la aplicacion.
        </p>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Paleta semantica</CardTitle>
          <CardDescription>
            Tokens de color del sistema para superficies, texto, estados y
            sidebar.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ColorGrid tokens={semanticColors} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Colores para datos (charts)</CardTitle>
          <CardDescription>
            Escala destinada a visualizaciones y datos comparativos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ColorGrid tokens={chartColors} />
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Tipografia - familias</CardTitle>
            <CardDescription>
              Inter como fuente principal y mono para snippets de codigo.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 font-mono text-xs text-muted-foreground">
                font-sans
              </p>
              <p className="font-sans text-lg">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 font-mono text-xs text-muted-foreground">
                font-heading
              </p>
              <p className="font-heading text-lg">
                The quick brown fox jumps over the lazy dog
              </p>
            </div>
            <div className="rounded-lg border border-border p-4">
              <p className="mb-1 font-mono text-xs text-muted-foreground">
                font-mono
              </p>
              <p className="font-mono text-lg">
                const status = "design-system-ready";
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tipografia - jerarquia</CardTitle>
            <CardDescription>
              Escala para titulos, contenido y texto secundario.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <TypographyRows samples={hierarchySamples} />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Tipografia - tamanos utilitarios</CardTitle>
          <CardDescription>
            Vista rapida de clases `text-*` usadas para construir interfaces.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <TypographyRows samples={sizeSamples} />
        </CardContent>
      </Card>

      <Card className="dark">
        <CardHeader>
          <CardTitle>Preview modo oscuro</CardTitle>
          <CardDescription>
            Misma paleta semantica renderizada dentro de un contenedor dark.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ColorGrid tokens={semanticColors} />
        </CardContent>
      </Card>
    </main>
  );
}
