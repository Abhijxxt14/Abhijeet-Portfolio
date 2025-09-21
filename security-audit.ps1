# Security audit and update script for the portfolio project

Write-Host "Running security audit..." -ForegroundColor Cyan
npm audit

Write-Host "`nAttempting to fix vulnerabilities..." -ForegroundColor Cyan
npm audit fix

Write-Host "`nUpdating dependencies to latest versions..." -ForegroundColor Cyan
npm update

Write-Host "`nVerifying fixes..." -ForegroundColor Cyan
npm audit

Write-Host "`nSecurity audit complete. Check the output above for any remaining issues that need manual intervention." -ForegroundColor Green

Write-Host "`nIf major vulnerabilities remain:" -ForegroundColor Yellow
Write-Host "1. Check each vulnerability report for details" -ForegroundColor Yellow
Write-Host "2. Consider using 'npm audit fix --force' for major updates (may break compatibility)" -ForegroundColor Yellow
Write-Host "3. For critical vulnerabilities in specific packages, consider:" -ForegroundColor Yellow
Write-Host "   - Looking for alternative packages" -ForegroundColor Yellow
Write-Host "   - Checking if newer versions fix the issue: npm install package-name@latest" -ForegroundColor Yellow
Write-Host "   - Adding package overrides in package.json for dependencies of dependencies" -ForegroundColor Yellow

# Ask if user wants to run npm audit fix --force (which might break things)
$response = Read-Host -Prompt "`nDo you want to run 'npm audit fix --force'? This may break compatibility (y/n)"
if ($response -eq 'y') {
    Write-Host "Running npm audit fix --force..." -ForegroundColor Cyan
    npm audit fix --force
    
    Write-Host "`nVerifying fixes after force update..." -ForegroundColor Cyan
    npm audit
}

Write-Host "`nScript completed." -ForegroundColor Green