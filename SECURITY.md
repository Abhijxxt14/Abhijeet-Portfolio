# Security Guidelines for Abhijeet's Portfolio

This document outlines security practices and guidelines for maintaining the security of this portfolio project.

## Security Features

1. **Content Security Policy (CSP)**: The application implements a robust Content Security Policy that restricts the sources of content that can be loaded, protecting against XSS attacks.

2. **Secure External Links**: All external links use `rel="noopener noreferrer"` to prevent potential security issues when linking to external sites.

3. **Protected Information**: The terminal component is designed to avoid exposing real system information.

4. **Memory Leak Prevention**: Components and hooks are designed to properly clean up resources to prevent memory leaks.

## Running Security Checks

To check for vulnerabilities in dependencies:

```bash
npm run security-check
```

To automatically fix security issues where possible:

```bash
npm run security-fix
```

To update all dependencies to their latest versions:

```bash
npm run update-deps
```

## PowerShell Security Audit Script

For a more comprehensive security audit and update process, run the PowerShell script:

```powershell
./security-audit.ps1
```

This script will:
- Check for vulnerabilities
- Attempt to fix them automatically
- Update dependencies
- Verify the fixes
- Provide guidance on addressing remaining issues

## Security Best Practices

1. **Regular Updates**: Periodically run the security audit script to keep dependencies up to date.

2. **Code Reviews**: Review code changes for potential security issues before deployment.

3. **Input Validation**: Ensure any user inputs or dynamic data are properly validated and sanitized.

4. **Minimal Data Collection**: Avoid collecting or displaying unnecessary personal information.

5. **Keep Secrets Secure**: Never commit API keys, passwords, or other sensitive information to the repository.

## Reporting Security Issues

If you discover a security vulnerability, please report it by [insert contact information here].