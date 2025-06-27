# PowerShell deployment script for GitHub Pages

Write-Host "Building the project..." -ForegroundColor Green
npm run build

if ($LASTEXITCODE -eq 0) {
    Write-Host "Build successful! Deploying to GitHub Pages..." -ForegroundColor Green
    npm run deploy
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Deployment complete!" -ForegroundColor Green
        Write-Host "Your site should be available at:" -ForegroundColor Cyan
        Write-Host "https://erimu1.github.io/portofolio-2025" -ForegroundColor Blue
    } else {
        Write-Host "Deployment failed!" -ForegroundColor Red
    }
} else {
    Write-Host "Build failed!" -ForegroundColor Red
}
