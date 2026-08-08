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
---

# Chapter 6
# TEST GENERATOR Specification

## 6.1 Purpose

The Test Generator (TG) is responsible for creating customized examinations from the Question Bank Repository.

It shall generate examinations without modifying the Question Bank.

The generated examination shall be passed to the CBT Engine.

---

# 6.2 Objectives

The Test Generator shall allow users to create

• Subject-wise Tests

• Topic-wise Tests

• Sub-topic Tests

• Mixed Subject Tests

• Grand Tests

• Previous Year Tests

• Practice Tests

• Custom Tests

using the same Question Bank Repository.

---

# 6.3 General Workflow

Question Bank Repository

↓

User Selection

↓

Filtering

↓

Validation

↓

Randomization

↓

Generated Test Package

↓

CBT Engine

---

# 6.4 Test Generation Wizard

The Test Generator shall follow a step-by-step wizard.

Step 1

Select Examination

↓

Step 2

Select Division

↓

Step 3

Select Subject(s)

↓

Step 4

Select Topic(s)

↓

Step 5

Select Sub-topic(s)

↓

Step 6

Select Difficulty

↓

Step 7

Select Question Types

↓

Step 8

Test Settings

↓

Step 9

Randomization

↓

Step 10

Preview Test Blueprint

↓

Generate Test

---

# 6.5 Step 1

Select Examination

Examples

TGPSC Dy.E.O.

DSC

CTET

SET

UGC NET

Custom Test

The Test Generator shall load available Divisions based on the selected Examination.

---

# 6.6 Step 2

Select Division

Examples

Paper I

Paper II

Section A

Section B

Future examination categories shall be supported without modifying the Generator.

---

# 6.7 Step 3

Select Subject(s)

Users may select

One Subject

or

Multiple Subjects.

Examples

Educational Psychology

Educational Philosophy

Leadership

Assessment

Curriculum

Current Affairs

Multiple selections shall be supported.

---

# 6.8 Step 4

Select Topic(s)

The available Topics shall depend on the selected Subject(s).

Example

Educational Psychology

↓

Learning

Motivation

Memory

Personality

Adjustment

---

# 6.9 Step 5

Select Sub-topic(s)

Optional.

Users may

Select all

or

Select specific Sub-topics.

---

# 6.10 Step 6

Difficulty Selection

Supported Levels

Easy

Moderate

Difficult

The Test Generator shall allow any combination.

Example

20 Easy

20 Moderate

10 Difficult

---

# 6.11 Step 7

Question Types

Supported Types

MCQ

Multiple Correct

Assertion–Reason

True / False

Match the Following

Fill in the Blank

Case Study

Passage Based

Image Based

Diagram Based

---

# 6.12 Step 8

Test Settings

The user shall specify

Number of Questions

Time Limit

Marks per Question

Negative Marks

Passing Percentage

Instructions

---

# 6.13 Step 9

Randomization

The Test Generator shall support

Random Questions

Random Options

Random Subject Order

Random Topic Order

Random Test every time

---

# 6.14 Step 10

Test Blueprint

Before generating the examination, the Test Generator shall display a complete blueprint.

The blueprint shall contain

Examination

Division

Subjects

Topics

Sub-topics

Difficulty Distribution

Question Types

Question Count

Time Limit

Marks

Negative Marks

Randomization Settings

Estimated Available Questions

The user may either

Edit

or

Generate Test.

---

# 6.15 Validation Rules

Before generating a test, the Generator shall verify

• Required selections completed

• Requested question count available

• Valid difficulty distribution

• Valid question types

• Valid metadata

Generation shall not proceed until validation succeeds.

---

# 6.16 Generated Test Package

The Test Generator shall never send the complete Question Bank to the CBT Engine.

Instead, it shall create a temporary Generated Test Package containing only the selected questions.

The Question Bank shall remain unchanged.

---

# 6.17 Design Principle

The Test Generator shall remain independent of

CBT Engine

Result Engine

Analytics Engine

Question Bank Manager

It shall communicate only through the Generated Test Package.
---

# Chapter 7
# Test Selection & Generation Algorithms

## 7.1 Purpose

The Test Generator shall convert user selections into a Generated Test Package.

The Question Bank shall never be modified during this process.

---

## 7.2 Generation Process

Question Bank Repository

↓

Filter Questions

↓

Validate Availability

↓

Prepare Blueprint

↓

Random Selection

↓

Shuffle Options

↓

Generate Test Package

↓

Launch CBT Engine

---

## 7.3 Filtering Rules

Questions shall be filtered by

• Examination

• Division

• Paper

• Subject

• Topic

• Sub-topic

• Difficulty

• Question Type

• Language

• Tags

---

## 7.4 Validation Rules

Before generation, verify

• Required selections completed

• Questions available

• Blueprint valid

• No invalid metadata

---

## 7.5 Duplicate Prevention

The same question shall never appear twice in the same examination.

---

## 7.6 Randomization

Support

• Random Questions

• Random Options

• Random Subject Order

• Random Topic Order

---

## 7.7 Generated Test Package

The Test Package shall contain only selected questions.

The complete Question Bank shall never be sent to the CBT Engine.
---

# Chapter 8
# CBT Engine

## Purpose

Conduct examinations.

The CBT Engine shall never generate question papers.

---

## Responsibilities

• Display Questions

• Timer

• Navigation

• Palette

• Save Progress

• Review

• Resume

• Submit

---

## Restrictions

The CBT Engine shall not

• Edit Questions

• Search Question Banks

• Generate Tests

• Calculate Analytics
---

# Chapter 9
# Result Engine

## Responsibilities

• Calculate Marks

• Calculate Negative Marks

• Calculate Percentage

• Determine Pass / Fail

• Generate Result Summary

Future versions may include

• Rank

• Percentile

• Normalization---

# Chapter 10
# Analytics Engine

## Responsibilities

Generate

• Subject-wise Analysis

• Topic-wise Analysis

• Time Analysis

• Accuracy Analysis

• Weak Areas

• Strong Areas

• Progress Reports

Future

• AI Suggestions

• Adaptive Practice

• Personalized Revision---

# Chapter 11
# Folder Structure

The project shall maintain a modular folder structure.

Question Banks

Repository

Generator

CBT

Results

Analytics

Documentation

Each module shall remain independent.---

# Chapter 12
# Security

The system shall support

• Data Validation

• Backup

• Recovery

• Version Control

• Input Validation

Future

• Authentication

• Cloud Security---

# Chapter 13
# Version Control

All development shall follow

Design

↓

Documentation

↓

Implementation

↓

Testing

↓

Git Commit

↓

Git Push

↓

Backup

↓

Release---

# Chapter 14
# Future Roadmap

Version 2

Test Generator

Question Bank Manager

Version 3

Analytics Dashboard

Version 4

Cloud Repository

Version 5

AI Question Extraction

Version 6

School Edition
---

# Chapter 15
# Design Principles

1. One CBT Engine.

2. One Question Repository.

3. One Test Generator.

4. Metadata-driven architecture.

5. Modular development.

6. Separation of responsibilities.

7. Independent modules.

8. Future-ready architecture.

9. Backward compatibility.

10. Documentation before implementation.

---

# Conclusion

SHAGA TestHub is designed as a scalable, modular and reusable Computer Based Testing platform.

The architecture separates Question Management, Test Generation, Examination, Evaluation and Analytics into independent modules.

This design enables the same CBT Engine to support multiple examination systems while allowing future expansion with minimal architectural changes.---

# Chapter 16
# User Roles & Permissions

## 16.1 Purpose

The system shall provide role-based access control.

Each user shall have permissions based on assigned roles.

---

## 16.2 Supported Roles

### Administrator

Responsibilities

• Manage entire system

• Create repositories

• Create examinations

• Configure Test Generator

• Manage users

• View reports

• Backup system

---

### Examiner

Responsibilities

• Manage Question Banks

• Generate Tests

• Preview Tests

• Publish Tests

---

### Candidate

Responsibilities

• Generate Practice Tests

• Attempt Tests

• Review Results

• View Analytics

---

## 16.3 Permission Matrix

Administrator

✔ Full Access

Examiner

✔ Question Bank

✔ Test Generator

✔ Reports

Candidate

✔ Test Generator

✔ CBT

✔ Results

No user shall access unauthorized modules.---

# Chapter 17
# Test Blueprint System

## Purpose

Every examination generated by the Test Generator shall follow a blueprint.

The blueprint defines

• Examination

• Division

• Subjects

• Topics

• Difficulty

• Question Types

• Question Distribution

• Marks

• Time

---

## Blueprint Validation

Before generation

The system shall verify

• Sufficient questions available

• Valid distribution

• Valid metadata

• Duplicate prevention

Generation shall not proceed until validation succeeds.---

# Chapter 18
# Generated Test Package

## Purpose

The Generated Test Package is a temporary examination created by the Test Generator.

The Question Bank Repository shall remain unchanged.

---

## Contents

The package shall contain

• Test ID

• Generation Date

• Examination

• Division

• Subjects

• Topics

• Selected Questions

• Time Limit

• Marks

• Randomization Information

• Blueprint

• Metadata

---

The Generated Test Package shall be the only input accepted by the CBT Engine.---

# Chapter 19
# Logging & Audit Trail

The system shall maintain logs for

• Question Creation

• Question Modification

• Test Generation

• Test Attempt

• Result Calculation

• User Login

• Repository Changes

Logs shall assist debugging, auditing and future analytics.---

# Chapter 20
# Backup & Recovery

The system shall support

• Manual Backup

• Automatic Backup

• Version History

• Repository Restore

• Test Restore

• Recovery after Failure

No Question Bank shall be permanently lost without administrator confirmation.---

# Chapter 21
# Coding Standards

Development shall follow

• Modular Programming

• Single Responsibility Principle

• Reusable Components

• Metadata-driven Design

• Version Control

• Documentation before Coding

• Git Workflow

• Independent Modules---

# Chapter 22
# Release Management

Every release shall follow

Planning

↓

Architecture Review

↓

Implementation

↓

Testing

↓

Git Commit

↓

Git Push

↓

Backup

↓

Release

↓

Documentation Update---

# Chapter 23
# Future Enhancements

Future versions may include

• Cloud Repository

• AI Question Generation

• AI Question Categorization

• AI Difficulty Analysis

• Adaptive Testing

• Online Accounts

• Multi-device Synchronization

• Offline CBT

• Mobile Application

• School Edition

• Institution Edition

• University Edition---

# Chapter 24
# Final Design Principles

The following principles shall never change.

1. One CBT Engine.

2. One Question Bank Repository.

3. One Test Generator.

4. Metadata-driven Architecture.

5. Modular Design.

6. Independent Modules.

7. Temporary Generated Test Packages.

8. Documentation before Coding.

9. Git-based Development.

10. Future-ready Architecture.

---

# Final Statement

SHAGA TestHub is designed as a scalable, metadata-driven Computer Based Testing platform.

The architecture separates Question Management, Test Generation, Examination, Evaluation and Analytics into independent modules.

This architecture enables unlimited examination generation while maintaining a single reusable CBT Engine.

Future educational systems may be integrated by extending Question Banks rather than modifying the CBT Engine.