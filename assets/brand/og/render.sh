#!/bin/sh
# Re-renderiza os cards OG (1200x630) a partir dos HTML desta pasta.
# Uso (na raiz do repo): sh assets/brand/og/render.sh [slug ...]   (sem args: todos)
# Requer Google Chrome e Python com Pillow. Saída: assets/images/<slug>.jpg (< 105 KB, progressivo).
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT="$(cd "$(dirname "$0")/../../.." && pwd)"
SLUGS="${*:-og-image og-gestantes og-florescer og-pos-parto og-fisioterapia-pelvica og-idosos-reabilitacao og-eventos og-guia-gestante og-conteudos}"
TMP="$(mktemp -d)"
for s in $SLUGS; do
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=1 \
    --user-data-dir="$TMP/og-profile" --window-size=1200,630 \
    --screenshot="$TMP/$s.png" "file://$ROOT/assets/brand/og/$s.html" >/dev/null 2>&1
  python3 - "$TMP/$s.png" "$ROOT/assets/images/$s.jpg" <<'PY'
import sys
from PIL import Image
im = Image.open(sys.argv[1]).convert("RGB")
import io
for q in range(86, 60, -2):
    b = io.BytesIO(); im.save(b, "JPEG", quality=q, progressive=True, optimize=True, subsampling=0 if q>=82 else 2)
    if b.tell() < 105*1000: break
open(sys.argv[2], "wb").write(b.getvalue())
print(sys.argv[2].split("/")[-1], q, b.tell()//1024, "KB")
PY
done
rm -rf "$TMP"
