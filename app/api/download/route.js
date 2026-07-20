import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { verifyDownloadToken } from "../../../lib/downloadToken";
import { getProductBySlug } from "../../../lib/products";

export const runtime = "nodejs";

export async function GET(req) {
  const token = new URL(req.url).searchParams.get("token");
  if (!token) {
    return NextResponse.json({ error: "Lien invalide" }, { status: 400 });
  }

  let payload;
  try {
    payload = verifyDownloadToken(token);
  } catch (err) {
    return NextResponse.json(
      { error: "Lien expiré ou invalide. Retourne sur la page de confirmation de commande." },
      { status: 401 }
    );
  }

  const product = getProductBySlug(payload.slug);
  if (!product) {
    return NextResponse.json({ error: "Produit introuvable" }, { status: 404 });
  }

  // Les fichiers réels vivent HORS de /public, dans /private-files, pour ne
  // jamais être accessibles par une URL directe. Voir README.md.
  const filePath = path.join(process.cwd(), "private-files", product.fileKey);

  if (!fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: "Fichier introuvable côté serveur — dépose-le dans /private-files (voir README)." },
      { status: 500 }
    );
  }

  const fileBuffer = fs.readFileSync(filePath);
  return new NextResponse(fileBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/zip",
      "Content-Disposition": `attachment; filename="${product.fileKey}"`,
      "Cache-Control": "no-store",
    },
  });
}
