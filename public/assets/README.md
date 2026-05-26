Bu klasör `public/assets` için placeholder dosyasıdır.

Lütfen eklemek istediğiniz görseli `avatar-night.png` adıyla bu klasöre koyun:

- Hedef yol: `public/assets/avatar-night.png`

Yerel olarak yüklemek için örnek komutlar:

1) Eğer görseli base64 olarak alırsanız:

```bash
base64 -d > public/assets/avatar-night.png <<'BASE64'
<BURAYA_BASE64_YAPIŞTIRIN>
BASE64
```

2) Eğer görsel URL'si varsa:

```bash
curl -L -o public/assets/avatar-night.png "https://example.com/path/to/image.png"
```

3) Alternatif: Görseli Finder/Explorer'dan `public/assets` klasörüne sürükleyin.

Hazır olduğunda, projede bu görseli `public/assets/avatar-night.png` ile kullanabilirim. Eğer benim doğrudan yüklememi istiyorsanız, görselin base64 içeriğini buraya yapıştırın veya dosyayı yükleyin.
