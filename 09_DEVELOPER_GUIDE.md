# DEVELOPER GUIDE

Version: 1.0

---

# Purpose

This document defines the development standards, coding practices, project structure, testing strategy, and contribution workflow for AFOS Studio.

Every contributor should follow these guidelines to keep the project maintainable, scalable, and consistent.

---

# Development Philosophy

AFOS is built using:

- Modular Architecture
- Component-Based Design
- AI-First Development
- Mobile-First UI
- Cloud-Native Infrastructure

Every feature should be reusable.

Every module should be independent.

---

# Recommended Technology Stack

Frontend

- React
- Next.js
- TypeScript

Backend

- Supabase
- PostgreSQL

Authentication

- Supabase Auth

Storage

- Supabase Storage

Hosting

- Vercel

AI

- OpenAI
- Future AI Providers

---

# Project Structure

afos-studio/

docs/

app/

components/

lib/

services/

database/

public/

styles/

assets/

tests/

---

# Coding Standards

- Use meaningful names.
- Keep functions small.
- Reuse components.
- Avoid duplicate code.
- Write comments only where needed.
- Prefer readability over clever code.

---

# Git Workflow

Main Branch

- main

Feature Branch Example

feature/story-analysis

feature/storyboard

feature/image-generation

feature/export

---

# Commit Message Examples

Add Story Analysis

Fix Character Continuity

Update Workflow Engine

Improve Dashboard

Refactor Storyboard Module

---

# Testing Strategy

Every feature should be tested before merging.

Types of Testing

- Unit Tests
- Integration Tests
- End-to-End Tests
- Manual QA

---

# Documentation Rule

Every new feature must include:

- Purpose
- Inputs
- Outputs
- Dependencies
- User Flow

---

# AI Development Rule

AI should:

- Explain decisions when requested.
- Preserve production continuity.
- Reuse approved assets.
- Avoid unnecessary questions.
- Continue production automatically whenever possible.

---

# Long-Term Goal

Build AFOS Studio into a production-grade AI filmmaking platform that can support individuals, teams, and professional studios.

---

Status

Draft v1.0
