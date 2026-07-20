Dépose ici tes vrais fichiers .zip (contenant les .stl) avec exactement
les noms définis dans lib/products.js (champ fileKey), par ex :
  shell-guardian.zip
  smoke-bomb-vase.zip
  kusarigama-dice-tower.zip
  kappa-planter.zip

⚠️ Ce dossier ne doit JAMAIS être placé dans /public. Il reste privé et
n'est lu que par la route /api/download après vérification du paiement.

Note production : Vercel limite la taille du déploiement et les fonctions
sont sans état persistant entre deploys. Pour un vrai catalogue avec des
fichiers volumineux, remplace la lecture filesystem dans
app/api/download/route.js par du stockage objet (Vercel Blob, S3,
Cloudflare R2...) et génère une URL signée à la place du fs.readFileSync.
