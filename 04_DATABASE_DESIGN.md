# DATABASE DESIGN

Version: 1.0

---

# Purpose

This document defines how AFOS stores every piece of information required to manage a complete film production.

The database must support continuity, collaboration, automation, and version history.

---

# Core Entities

## Projects

Stores information about every film project.

Fields

- Project ID
- Project Name
- Description
- Genre
- Runtime
- Status
- Created Date
- Updated Date

---

## Stories

Stores the original screenplay or story.

Fields

- Story ID
- Project ID
- Title
- Story Text
- Language
- Version

---

## Characters

Stores all character information.

Fields

- Character ID
- Project ID
- Name
- Role
- Description
- Appearance
- Costume
- Personality
- Reference Images

---

## Environments

Stores every location.

Fields

- Environment ID
- Project ID
- Name
- Description
- Lighting
- Weather
- Time of Day
- Reference Images

---

## Scenes

Stores every scene.

Fields

- Scene ID
- Project ID
- Scene Number
- Scene Title
- Description
- Duration
- Status

---

## Shots

Stores individual shots.

Fields

- Shot ID
- Scene ID
- Shot Number
- Camera Type
- Lens
- Movement
- Duration
- Description

---

## Storyboards

Stores storyboard frames.

Fields

- Storyboard ID
- Shot ID
- Image
- Notes
- Version

---

## Assets

Stores production assets.

Fields

- Asset ID
- Type
- Category
- File Path
- Version
- Status

---

## Generated Media

Stores AI-generated content.

Fields

- Media ID
- Asset ID
- Prompt
- Output File
- Generator
- Quality Score

---

# Relationships

Project

↓

Stories

↓

Scenes

↓

Shots

↓

Storyboards

↓

Generated Media

---

# Design Goals

- Fast
- Scalable
- Version Controlled
- Cloud Ready
- AI Friendly

---

Status

Draft v1.0
