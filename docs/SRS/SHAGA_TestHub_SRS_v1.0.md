# SHAGA TestHub
## Software Requirements Specification (SRS)

**Version:** 1.0

**Status:** Draft

**Project Name:** SHAGA TestHub

**Prepared By:** Shaga Narsaiah

**Repository:** SHAGA TestHub

---

# Table of Contents

1. Introduction
2. Vision
3. Objectives
4. Scope
5. System Architecture
6. Software Modules
7. Question Bank Manager
8. Question Bank Repository
9. Test Generator
10. CBT Engine
11. Result Engine
12. Analytics Engine
13. Question Metadata Specification
14. Folder Structure
15. User Workflows
16. Administrator Workflows
17. Security
18. Backup & Recovery
19. Future Roadmap
20. Version History

---

# Chapter 1
# Introduction

## Purpose

SHAGA TestHub is a professional Computer Based Testing (CBT) platform designed to generate unlimited customized examinations from structured Question Banks.

The system separates Question Management, Test Generation, CBT, Results and Analytics into independent modules so that the software remains scalable, reusable and maintainable.

The same CBT Engine shall be capable of conducting Competitive Examinations, Academic Examinations and future Educational Assessments without modifying the core examination engine.

---

## Vision

To build one of the most flexible, reusable and scalable Computer Based Testing platforms capable of serving competitive examinations and educational institutions through a metadata-driven Question Bank architecture.

---

## Mission

To enable administrators, teachers and competitive examination aspirants to generate unlimited customized examinations using structured Question Banks while providing a professional CBT experience.
---

# Chapter 2
# System Architecture

## 2.1 Architecture Overview

SHAGA TestHub follows a modular architecture.

Every module has one responsibility.

No module shall perform another module's work.

This separation ensures maintainability, scalability and future expansion.

---

## 2.2 Overall Architecture

```
                 Administrator
                        │
                        ▼
         Question Bank Manager (QBM)
                        │
                        ▼
          Question Bank Repository (QBR)
                        │
                        ▼
               TEST GENERATOR
                        │
                        ▼
             Generated Test Package
                        │
                        ▼
                  CBT ENGINE
                        │
                        ▼
                 RESULT ENGINE
                        │
                        ▼
               ANALYTICS ENGINE
```

---

## 2.3 Core Design Principles

### Principle 1

There shall be only ONE CBT Engine.

Every examination shall use the same engine.

No examination-specific CBT shall be developed.

---

### Principle 2

The CBT Engine shall never store questions.

It shall receive a Generated Test Package from the Test Generator.

---

### Principle 3

The Test Generator shall never edit Question Banks.

It shall only read from the Question Bank Repository.

---

### Principle 4

Question Banks shall remain permanent.

Generated Tests shall be temporary.

---

### Principle 5

Every module shall be independently replaceable.

Replacing one module shall not require rewriting the remaining modules.

---

## 2.4 Data Flow

Question Bank

↓

Test Generator

↓

Generated Test

↓

Candidate

↓

CBT Engine

↓

Responses

↓

Result Engine

↓

Analytics

---

## 2.5 Benefits

• Reusable CBT Engine

• Unlimited Test Generation

• Easy Maintenance

• Future Database Support

• Future AI Integration

• School Support without changing the CBT Engine

• Competitive Examination Support

• Multiple Examination Patterns
---

# Chapter 3
# Software Modules

SHAGA TestHub is divided into independent software modules.

Each module performs one specific responsibility.

The modules communicate through well-defined interfaces but remain independent of each other.

This modular architecture ensures scalability, maintainability and future extensibility.

---

# 3.1 Module Overview

The software consists of the following primary modules:

1. Question Bank Manager (QBM)

2. Question Bank Repository (QBR)

3. Test Generator (TG)

4. CBT Engine (CBTE)

5. Result Engine (RE)

6. Analytics Engine (AE)

7. Administration Module

8. Candidate Module

---

# 3.2 Module Relationships

```
Administrator
      │
      ▼
Question Bank Manager
      │
      ▼
Question Bank Repository
      │
      ▼
Test Generator
      │
      ▼
Generated Test Package
      │
      ▼
CBT Engine
      │
      ▼
Result Engine
      │
      ▼
Analytics Engine
```

---

# 3.3 Module Responsibilities

## Module 1
Question Bank Manager

Purpose

Maintain all Question Banks.

Responsibilities

• Create Question Banks

• Edit Questions

• Delete Questions

• Search Questions

• Import Questions

• Export Questions

• Validate Question Metadata

• Detect Duplicate Questions

• Manage Categories

• Manage Topics

• Manage Sub-topics

---

## Module 2
Question Bank Repository

Purpose

Store all questions permanently.

Responsibilities

• Store Questions

• Retrieve Questions

• Filter Questions

• Maintain Metadata

• Maintain Version History

The Repository shall never conduct examinations.

---

## Module 3
Test Generator

Purpose

Generate customized examinations from Question Banks.

Responsibilities

• Receive User Selections

• Validate Available Questions

• Filter Questions

• Randomize Questions

• Randomize Options

• Generate Examination Package

• Pass Examination Package to CBT Engine

The Test Generator shall never modify Question Banks.

---

## Module 4
CBT Engine

Purpose

Conduct examinations.

Responsibilities

• Display Questions

• Navigation

• Timer

• Palette

• Mark for Review

• Save Progress

• Submit Test

• Resume Interrupted Test

The CBT Engine shall never create examinations.

---

## Module 5
Result Engine

Purpose

Evaluate Candidate Performance.

Responsibilities

• Calculate Marks

• Calculate Negative Marks

• Calculate Percentage

• Calculate Grade

• Calculate Rank (Future)

• Generate Result Summary

---

## Module 6
Analytics Engine

Purpose

Analyse Candidate Performance.

Responsibilities

• Subject-wise Analysis

• Topic-wise Analysis

• Time Analysis

• Accuracy Analysis

• Weak Areas

• Strong Areas

• Progress Reports

---

# 3.4 Module Independence

Every module shall remain independent.

A module may be replaced without rewriting the remaining modules.

Example

Question Bank Repository

may change from

JSON

to

SQLite

or

MySQL

or

Cloud Database

without changing

• Test Generator

• CBT Engine

• Result Engine

• Analytics Engine

---

# 3.5 Design Rule

Every module shall have only one responsibility.

This principle shall be followed throughout the development of SHAGA TestHub.