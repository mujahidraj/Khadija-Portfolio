# Placeholder Image Generator for Portfolio
# Run this script to create placeholder SVG images in /public/assets/
# These will be replaced with real photos later.

$basePath = "c:\Users\TALUKDER IT\Desktop\Tutli\temp-init\tutli\public\assets"

# Create directories
$dirs = @(
    "$basePath",
    "$basePath\projects\project-1",
    "$basePath\projects\project-2",
    "$basePath\projects\project-3",
    "$basePath\projects\project-4",
    "$basePath\projects\project-5",
    "$basePath\projects\project-6",
    "$basePath\projects\project-7",
    "$basePath\projects\project-8"
)

foreach ($dir in $dirs) {
    New-Item -ItemType Directory -Force -Path $dir | Out-Null
}

# SVG template function
function Create-PlaceholderSVG {
    param (
        [string]$FilePath,
        [string]$Label,
        [string]$BgColor1 = "#3f3f44",
        [string]$BgColor2 = "#27272a",
        [string]$AccentColor = "#a85e1a",
        [int]$Width = 800,
        [int]$Height = 600
    )
    
    $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" width="$Width" height="$Height" viewBox="0 0 $Width $Height">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:$BgColor1"/>
      <stop offset="100%" style="stop-color:$BgColor2"/>
    </linearGradient>
  </defs>
  <rect width="$Width" height="$Height" fill="url(#bg)"/>
  <rect x="$([int]($Width/2 - 40))" y="$([int]($Height/2 - 60))" width="80" height="80" rx="4" fill="$AccentColor" opacity="0.3"/>
  <text x="50%" y="$([int]($Height/2 + 50))" font-family="Georgia, serif" font-size="16" fill="#a9a9b0" text-anchor="middle">$Label</text>
</svg>
"@
    
    Set-Content -Path $FilePath -Value $svg -Encoding UTF8
}

# Profile image
Create-PlaceholderSVG -FilePath "$basePath\profile.jpg" -Label "Profile Photo" -Width 600 -Height 800 -AccentColor "#c87a24"

# Project placeholders
$projectLabels = @{
    "project-1" = "Walnut & Steel Dining Table"
    "project-2" = "Reclaimed Teak Console"
    "project-3" = "Forged Iron Floor Lamp"
    "project-4" = "Live-Edge Mahogany Bench"
    "project-5" = "Steel Shelving System"
    "project-6" = "Oak & Copper Bar Cart"
    "project-7" = "Ash & Steel Rocking Chair"
    "project-8" = "Corten Steel Garden Table"
}

foreach ($project in $projectLabels.Keys) {
    $label = $projectLabels[$project]
    
    # Thumbnail
    Create-PlaceholderSVG -FilePath "$basePath\projects\$project\thumb.jpg" -Label $label -AccentColor "#854618"
    
    # Gallery images (3 per project)
    for ($i = 1; $i -le 3; $i++) {
        Create-PlaceholderSVG -FilePath "$basePath\projects\$project\gallery-$i.jpg" -Label "$label - View $i" -AccentColor "#6d391a"
    }
}

Write-Host "Placeholder images created successfully!"
