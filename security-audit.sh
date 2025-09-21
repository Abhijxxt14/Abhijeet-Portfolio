#!/bin/bash
# Security audit and update script for the portfolio project

# Run npm audit to check for vulnerabilities
echo "Running security audit..."
npm audit

# Fix security issues automatically where possible
echo "Attempting to fix vulnerabilities..."
npm audit fix

# Update dependencies to latest versions
echo "Updating dependencies to latest versions..."
npm update

# Run another audit to verify fixes
echo "Verifying fixes..."
npm audit

echo "Security audit complete. Check the output above for any remaining issues that need manual intervention."

# Instructions for manually addressing major vulnerabilities
echo """
If major vulnerabilities remain:
1. Check each vulnerability report for details
2. Consider using 'npm audit fix --force' for major updates (may break compatibility)
3. For critical vulnerabilities in specific packages, consider:
   - Looking for alternative packages
   - Checking if newer versions fix the issue: npm install package-name@latest
   - Adding package overrides in package.json for dependencies of dependencies
"""