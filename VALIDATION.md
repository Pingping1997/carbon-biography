# Validation note

The repository scaffold was generated in ChatGPT on 2026-08-18.

A production `npm install` validation was attempted in the working environment, but package installation exceeded the available tool execution window. The project therefore ships with pinned dependency versions and a GitHub Actions workflow that performs installation and build on push.

If GitHub Actions reports a build issue, treat CI as the source of truth and fix it before publishing the Pages site.
