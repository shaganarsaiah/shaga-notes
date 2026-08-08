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
---

# Chapter 4
# Question Bank Repository

## 4.1 Purpose

The Question Bank Repository (QBR) is the central storage system of SHAGA TestHub.

It stores all examination questions together with their metadata.

The repository shall support:

- Single Subject Tests
- Multiple Subject Tests
- Topic-wise Tests
- Sub-topic Tests
- Lesson-wise Tests
- Paper-wise Tests
- Grand Tests
- Mock Tests
- Practice Tests
- Future School Examinations

The repository shall be independent of the CBT Engine.

---

# 4.2 Design Philosophy

Questions shall never be hard-coded inside the CBT Engine.

The CBT Engine shall only receive a generated examination package from the Test Generator.

This allows unlimited combinations of examinations without modifying the CBT Engine.

---

# 4.3 Repository Hierarchy

Every question shall belong to the following hierarchy.

```
Examination

    ↓

Division

    ↓

Subject

    ↓

Topic

    ↓

Sub-topic

    ↓

Question
```

Example
---

# Chapter 5
# Question Metadata Specification

## 5.1 Purpose

Every question stored in the Question Bank Repository shall contain structured metadata.

Metadata enables the Test Generator to search, filter, classify, randomize and generate examinations without modifying the CBT Engine.

The metadata model shall remain generic so that it supports competitive examinations as well as future school examinations.

---

# 5.2 Mandatory Metadata Fields

Every question shall contain the following information.

| Field | Description |
|--------|-------------|
| Question ID | Unique identifier |
| Examination | Name of examination |
| Division | Division / Category |
| Paper | Paper Name |
| Subject | Subject Name |
| Topic | Topic Name |
| Sub-topic | Sub-topic Name |
| Lesson | Lesson (optional) |
| Difficulty | Easy / Moderate / Difficult |
| Question Type | MCQ / Assertion / Case Study / etc. |
| Language | English / Telugu / Hindi / etc. |
| Marks | Positive Marks |
| Negative Marks | Negative Marks |
| Estimated Time | Expected solving time |
| Explanation | Answer Explanation |
| Correct Answer | Correct Option |
| Source | Book / PYQ / Faculty / AI |
| Previous Year | If applicable |
| Status | Draft / Verified / Published |
| Version | Question Version |

---

# 5.3 Optional Metadata

Future versions may support

• Bloom's Taxonomy

• Cognitive Level

• Competency

• Learning Outcome

• NEP Mapping

• NCF Mapping

• Teacher Notes

• References

• Video Link

• Image Link

• PDF Link

• Audio Link

• Difficulty Score

• Usage Count

• Average Accuracy

• Last Updated

---

# 5.4 Question Difficulty

Questions shall be classified as

Easy

Moderate

Difficult

The Test Generator shall be capable of generating examinations using any desired distribution.

Example

20 Easy

20 Moderate

10 Difficult

---

# 5.5 Supported Question Types

The repository shall support

• Multiple Choice Questions

• Multiple Correct Answers

• True / False

• Assertion Reason

• Match the Following

• Fill in the Blanks

• One Word Answer

• Case Study

• Passage Based Questions

• Diagram Based Questions

• Image Based Questions

• Audio Based Questions

• Video Based Questions

Additional types may be introduced without changing the CBT Engine.

---

# 5.6 Tags

Each question may contain unlimited tags.

Example

Learning

Thorndike

Educational Psychology

Previous Year

DSC

CTET

Memory

Practice

Revision

Tags improve searching and future AI recommendations.

---

# 5.7 Question Lifecycle

Draft

↓

Reviewed

↓

Verified

↓

Published

↓

Archived

Questions shall never be permanently deleted unless explicitly authorized by the administrator.

---

# 5.8 Version Control

Every question shall maintain its own version number.

Example

Question 145

Version 1.0

↓

Version 1.1

↓

Version 2.0

This enables continuous improvement without losing history.

---

# 5.9 Metadata Philosophy

The Question Metadata shall remain independent of the CBT Engine.

The CBT Engine shall display questions.

The Test Generator shall search questions.

The Repository shall store questions.

Each module shall perform only its assigned responsibility.