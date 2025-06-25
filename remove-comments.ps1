$files = Get-ChildItem -Path . -Recurse -Include "*.js","*.jsx","*.ts","*.tsx","*.css","*.html" | 
Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*dist*" }

foreach ($file in $files) {
    Write-Host "Final pass on: $($file.FullName)"
    $content = Get-Content -Path $file.FullName -Raw
    
    # Remove JSDoc comments
    $content = $content -replace '/\*\*[\s\S]*?\*/', ''
    
    # Remove single-line comments more aggressively
    $content = $content -replace '^\s*//.*$', '' -replace '[^:]//.*$', ''
    
    # Remove any remaining multi-line comments
    $content = $content -replace '/\*[\s\S]*?\*/', ''
    
    # Remove HTML comments
    $content = $content -replace '<!--[\s\S]*?-->', ''
    
    # Clean up empty lines
    $content = ($content -split "`n" | Where-Object { $_.Trim() }) -join "`n"
    
    Set-Content -Path $file.FullName -Value $content -NoNewline
}
