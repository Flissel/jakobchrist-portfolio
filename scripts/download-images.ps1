# Lädt alle Original-Bilder von jakobchrist.com herunter und sortiert sie
# direkt nach Projekt-Slug in public/images/projekte/<slug>/cover.<ext>.

$ErrorActionPreference = "Continue"
$root = Split-Path -Parent $PSScriptRoot
$baseOut = Join-Path $root "public\images\projekte"

# Mapping: URL → Ziel-Pfad relativ zu public/
$map = @(
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Startbild_Website.jpg"; out = "images/profile.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Konzertarena/S_2_Konzertarena_MUCcc_SWMUNICH_RealEstate_POPULOUS_View-1024x576.jpg"; out = "images/projekte/munich-arena/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Bürogebäude Leopoldstraße.png"; out = "images/projekte/leopoldstrasse/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Fassadensanierung.png"; out = "images/projekte/siemens-fassade/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/MS Porsche.png"; out = "images/projekte/studie-porsche/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Bank/Bank_Image.png"; out = "images/projekte/banksanierung/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Großhadern/A1497_N23.jpg"; out = "images/projekte/klinikum-grosshadern/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Gasteig/website/A1402_HENN_Gasteig_REN_01_N2_website.jpg"; out = "images/projekte/gasteig/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Computational Design Brücke.png"; out = "images/projekte/bridge-mayr-ludescher/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Lydia/1501_HENN_Lydia_Auxiliary_Build_REN_N2_website.jpg"; out = "images/projekte/bmw-lydia/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Henn/Design Systems.png"; out = "images/projekte/design-systems/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/1526_N51_webview.jpg"; out = "images/projekte/aez-windkanal/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/148-kugeln-in-der-werkstatt-4.jpg"; out = "images/projekte/aez-windkanal/02.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Hammer Visualisierung/Rendering Kirche V15.jpg"; out = "images/projekte/hammer-kirche/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Vorhammer/Computational Design Vorhammer.png"; out = "images/projekte/vorhammer-cd/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Masterunterlagen/Badehaus.png"; out = "images/projekte/badehaus-st-martin/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Masterunterlagen/Miura Pavillon.png"; out = "images/projekte/miura-origami/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Masterunterlagen/Stadion Vis.png"; out = "images/projekte/multifunktionsstadion/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Masterunterlagen/Satiremuseum_render.PNG"; out = "images/projekte/satiremuseum/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Masterunterlagen/Cover.PNG"; out = "images/projekte/dutchtown-amsterdam/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Stockwerk 1/Haus B/P14010_W1_Home_S1-MS-860x571.jpg"; out = "images/projekte/haus-b/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Stockwerk 1/Wohn und Geschäftshaus/P14010_2019-02-20-1478_S1-MS-1.jpeg"; out = "images/projekte/wohn-und-geschaeftshaus/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Stockwerk 1/Wohnen auf kleinem Raum - Studie/P15058_-3D-Ansicht-PE-A-02_860-860x705.jpg"; out = "images/projekte/wohnen-kleiner-raum/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Stockwerk 1/Marc O'Polo Firmenjubiläum/2017-07-01_DSC_0907_S1-CR-860x573.jpg"; out = "images/projekte/marc-o-polo/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Stockwerk 1/Osram LEDVANCE Kickoff Conference/P16004_2016-03-09_IMG_6223_S1-MS.jpg"; out = "images/projekte/osram-ledvance/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Stockwerk 1/BMW Art Basel 2016 - Enjoy the Journey/P16005_2016-06-14-0030_S1-MS1.jpg"; out = "images/projekte/bmw-art-basel/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Stockwerk 1/Stadtquartier Studie/P15058_Städtebau_A2B_Zwischenstand_Seite_2.jpg"; out = "images/projekte/stadtquartier-studie/cover.jpg" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Bachelorunterlagen/Popodium.png"; out = "images/projekte/popodium/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Bachelorunterlagen/stadtgärtnerei.png"; out = "images/projekte/alte-stadtgaertnerei/cover.png" },
  @{ url = "https://www.jakobchrist.com/wp-content/themes/inspiro-child/assets/images/Bachelorunterlagen/hallensanierung.png"; out = "images/projekte/hallensanierung-paderborn/cover.png" }
)

$total = $map.Count
$ok = 0
$fail = 0

foreach ($item in $map) {
  $url = $item.url
  $relOut = $item.out
  $abs = Join-Path $root "public\$relOut".Replace("/", "\")
  $dir = Split-Path -Parent $abs
  if (-not (Test-Path $dir)) { New-Item -ItemType Directory -Path $dir -Force | Out-Null }

  # Pfad-Segmente sauber URL-codieren — und vorher Double-Encoding
  # vermeiden, indem wir den AbsolutePath erst dekodieren.
  $u = [System.Uri]$url
  $rawPath = [System.Uri]::UnescapeDataString($u.AbsolutePath)
  $encodedPath = ($rawPath -split '/' | ForEach-Object {
    if ($_ -eq "") { "" } else { [System.Uri]::EscapeDataString($_) }
  }) -join '/'
  $finalUrl = "$($u.Scheme)://$($u.Host)$encodedPath"

  try {
    Invoke-WebRequest -UseBasicParsing -Uri $finalUrl -OutFile $abs -UserAgent "Mozilla/5.0" -TimeoutSec 60 -ErrorAction Stop
    $size = (Get-Item $abs).Length
    "OK   [$([math]::Round($size/1KB)) KB]  $relOut"
    $ok++
  } catch {
    "FAIL              $relOut  ($($_.Exception.Message))"
    $fail++
  }
}

""
"Done — $ok ok / $fail fail (of $total)"
