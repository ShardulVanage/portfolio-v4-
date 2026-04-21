import {
  getUiComponentLiveHtmlBySlug,
  getUiComponentSectionLiveHtmlBySlugs,
} from "@/lib/ui-components";

interface RouteContext {
  params: {
    slug: string;
  };
}

export const GET = (request: Request, { params }: RouteContext) => {
  const { searchParams } = new URL(request.url);
  const sectionSlug = searchParams.get("section");

  const html = sectionSlug
    ? getUiComponentSectionLiveHtmlBySlugs(params.slug, sectionSlug)
    : getUiComponentLiveHtmlBySlug(params.slug);

  if (!html) {
    return new Response(
      sectionSlug ? "Section preview not found." : "Component preview not found.",
      {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
      }
    );
  }

  return new Response(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
};
